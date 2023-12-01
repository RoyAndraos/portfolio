const express = require("express");
const morgan = require("morgan");
const path = require("path");
const {
  deleteUser,
  getUsers,
  getUserById,
  handleFriends,
  loginUser,
} = require("./react-context/ReactContextHandlers.js");

const {
  getPizzas,
  getPizza,
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  rewriteOrder,
} = require("./react-fetch/ReactFetchHandlers");

express()
  .use(express.json())
  .use(morgan("tiny"))
  .use(require("./react-reducer/routes.js"))
  .use(require("./twitter-clone/routes/profile"))
  .use(require("./twitter-clone/routes/tweet"))
  .use(require("./twitter-clone/routes/feed"))
  .use("/assets", express.static(path.join(__dirname, "assets")))
  .get("/menu", getPizzas)
  .get("/menu/:pizzaId", getPizza)
  .get("/orders", getOrders)
  .get("/orders/:orderId", getOrder)
  .get("/api/users", getUsers)
  .get("/api/users/:id", getUserById)
  .post("/api/signin", loginUser)

  .post("/orders", createOrder)

  .patch("/orders/:orderId", updateOrder)
  .patch("/api/friends", handleFriends)

  .put("/orders/:orderId", rewriteOrder)

  .delete("/orders/:orderId", deleteOrder)
  .delete("/api/users/:id", deleteUser)
  .listen(4000, () => {
    console.log(`Server listening on port ${4000}`);
  });
