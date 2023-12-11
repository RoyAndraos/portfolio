const request = require("request-promise");

const getGeekJoke = async () => {
  try {
    const joke = await request(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
    );
    const parsedInfo = JSON.parse(joke);
    if (parsedInfo.joke) {
      return parsedInfo.joke;
    } else {
      return parsedInfo.setup + "  " + parsedInfo.delivery;
    }
  } catch (err) {
    return err;
  }
};

const getDadJoke = async () => {
  try {
    const options = {
      uri: "https://icanhazdadjoke.com/",
      json: true,
      headers: {
        Accept: "application/json",
      },
    };
    const response = await request(options);

    return response.joke;
  } catch (err) {
    return "Error: ", err;
  }
};

const getPun = async () => {
  try {
    const jokeInfo = await request(
      "https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"
    );
    const parsedInfo = JSON.parse(jokeInfo);
    return parsedInfo.setup + "  " + parsedInfo.delivery;
  } catch (err) {
    return err;
  }
};

const handleJoke = async (type) => {
  switch (type) {
    case "dad":
      return getDadJoke();
    case "pun":
      return getPun();
    case "geek":
      return getGeekJoke();
  }
};

const getJoke = async (req, res) => {
  if (
    req.params.type !== "pun" &&
    req.params.type !== "dad" &&
    req.params.type !== "geek"
  ) {
    return res.status(400).json({
      status: 404,
      message: "Invalid Joke Type",
    });
  } else {
    const joke = await handleJoke(`${req.params.type}`);
    return res.status(200).json({ status: "200", joke: joke });
  }
};

module.exports = {
  getJoke,
};
