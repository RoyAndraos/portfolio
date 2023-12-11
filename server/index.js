const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { nodePost } = require("./node-post/nodePostHandlers.js");
const {
  getTop50,
  getSongByRank,
  getArtistSongsByName,
  getPopularArtist,
  getArtists,
} = require("./node-URL-Params/nodeUrlHandlers.js");
const { chatWithBot } = require("./node-intro/chat-bot.js");
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
const { getJoke } = require("./node-async-await/asyncAwaitHandlers.js");
const {
  getWord,
  guess,
  getWordById,
} = require("./node-rest-hangman/hangmanHandlers.js");

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
  .get("/bot-message", chatWithBot)
  .get("/top50", getTop50)
  .get("/top50/song/:songRank", getSongByRank)
  .get("/top50/artist/:artistName", getArtistSongsByName)
  .get("/top50/popular-artist", getPopularArtist)
  .get("/top50/artist", getArtists)
  .get("/joke/:type", getJoke)
  .get("/hangman/word", getWord)
  .get("/hangman/guess/:id/:letter", guess)
  .get("/hangman/word/:id", getWordById)

  .post("/api/signin", loginUser)
  .post("/orders", createOrder)
  .post("/order", nodePost)

  .patch("/orders/:orderId", updateOrder)
  .patch("/api/friends", handleFriends)

  .put("/orders/:orderId", rewriteOrder)

  .delete("/orders/:orderId", deleteOrder)
  .delete("/api/users/:id", deleteUser)
  .listen(4000, () => {
    console.log(`Server listening on port ${4000}`);
  });
