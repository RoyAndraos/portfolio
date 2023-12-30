"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

// Simulate a token
const makeToken = () => {
  const id = uuidv4();
  const dateNow = `${Date.now()}`;
  const token = crypto
    .createHmac("sha256", "PULSEPEAK-12345")
    .update(`${id}-${dateNow}`)
    .digest("base64url");
  return token;
};

const signup = async (req, res) => {
  const { email, password } = req.body;
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    const db = client.db("eCommerce");
    const userFound = await db.collection("users").findOne({ email });

    if (userFound) {
      res.status(409).json({ status: 409, message: "Email already taken!" });
    } else {
      const hashedPassword = crypto
        .createHash("sha256")
        .update(password)
        .digest("hex");

      const userObj = {
        userToken: makeToken(),
        email,
        password: hashedPassword,
        createdAt: Date.now(),
      };

      await db.collection("users").insertOne(userObj);
      await client.close();

      res.status(200).json({
        status: 200,
        user: {
          email: userObj.email,
          createdAt: userObj.createdAt,
          userToken: userObj.userToken,
        },
        message: "User created successfully!",
      });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    const db = client.db("eCommerce");
    const userFound = await db.collection("users").findOne({ email });

    if (!userFound) {
      res.status(404).json({ status: 404, message: "User not found!" });
    } else {
      const hashedPassword = crypto
        .createHash("sha256")
        .update(password)
        .digest("hex");

      if (userFound.password === hashedPassword) {
        const newToken = makeToken();

        // Simulate token (change the token each time we login)
        await db
          .collection("users")
          .updateOne({ email }, { $set: { userToken: newToken } });
        res.status(200).json({
          status: 200,
          user: {
            email: userFound.email,
            createdAt: userFound.createdAt,
            userToken: newToken,
          },
          message: "Logged in successfully!",
        });
      } else {
        res.status(401).json({
          status: 401,
          message: "Wrong email or password.",
        });
      }
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

const logout = async (req, res) => {
  const { userToken } = req.body;
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    const db = client.db("eCommerce");
    await db
      .collection("users")
      .updateOne({ userToken }, { $unset: { userToken: 1 } });

    res.status(200).json({ status: 200, message: "Successfully logged out" });
    await client.close();
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

const getUser = async (req, res) => {
  const { userToken } = req.params;
  const client = new MongoClient(MONGO_URI);
  try {
    await client.connect();
    const db = client.db("eCommerce");
    const user = await db
      .collection("users")
      .findOne(
        { userToken: userToken },
        { projection: { password: 0, _id: 0 } }
      );
    if (user) {
      res.status(200).json({ status: 200, user, message: "User was found!" });
    } else {
      res
        .status(404)
        .json({ status: 404, user: undefined, message: "User not found!" });
    }
    await client.close();
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

module.exports = {
  signup,
  login,
  logout,
  getUser,
};
