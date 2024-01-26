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

const {
  getCart,
  addToCart,
  removeFromCart,
  resetCart,
} = require("./eCommerce/cartHandlers.js");
const { checkout, getConfirmation } = require("./eCommerce/checkoutHandler");
const {
  getProducts,
  getProduct,
  getProductsByName,
  getBrands,
  getBrand,
  getCategories,
  getItemsByCategory,
  getSortedProducts,
} = require("./eCommerce/handlers");
const { signup, login, getUser, logout } = require("./eCommerce/authHandler");
const cors = require("cors");
express()
  .use(cors())
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
  .get("/api/products", getProducts)
  .get("/api/product/:id", getProduct)
  .get("/api/products/:sortOrder", getSortedProducts)
  .get("/api/productSearch/:name", getProductsByName)
  .get("/api/brands", getBrands)
  .get("/api/brand/:brandId", getBrand)
  .get("/api/categories", getCategories)
  .get("/api/categories/:category/:sortOrder", getItemsByCategory)
  .get("/api/cart", getCart)
  .get("/api/confirmation/:id", getConfirmation)
  .get("/api/user/:userToken", getUser)

  .post("/api/users/signup", signup)
  .post("/api/users/login", login)
  .post("/api/users/logout", logout)
  .post("/api/signin", loginUser)
  .post("/orders", createOrder)
  .post("/order", nodePost)
  .post("/api/addToCart", addToCart)
  .post("/api/checkout", checkout)

  .patch("/orders/:orderId", updateOrder)
  .patch("/api/friends", handleFriends)
  .patch("/api/removeFromCart/:itemId", removeFromCart)

  .put("/orders/:orderId", rewriteOrder)

  .delete("/api/resetCart", resetCart)
  .delete("/orders/:orderId", deleteOrder)
  .delete("/api/users/:id", deleteUser)
  .listen(4000, () => {
    console.log(`Server listening on port ${4000}`);
  });
