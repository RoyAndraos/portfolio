const transformedWords = require("./words.js");
const getWord = (req, res) => {
  const randomWordIndex = Math.floor(
    Math.random() * (transformedWords.length - 1)
  );
  const response = {
    lettercount: transformedWords[randomWordIndex].letterCount,
    id: transformedWords[randomWordIndex].id,
  };
  res.status(200).json({
    status: 200,
    data: response,
  });
};

//   .get("/hangman/guess/:id/:letter",
const guess = (req, res) => {
  const id = req.params.id;
  const letter = req.params.letter;

  const word = transformedWords.filter(
    (element) => element.id === parseInt(id)
  )[0].word;

  const rersult = word.split("").map((element) => {
    if (letter === element) {
      return true;
    } else {
      return false;
    }
  });
  res.status(200).json({
    status: 200,
    result: rersult,
  });
};

// .get("/hangman/word/:id", getWordById)
const getWordById = (req, res) => {
  const id = req.params.id;
  let existingWord = "";
  transformedWords.map((element) => {
    if (element.id === parseInt(id)) {
      existingWord = element.word;
    }
  });

  existingWord != ""
    ? res.status(200).json({
        status: 200,
        data: existingWord,
      })
    : res.status(404).json({
        status: 404,
        error: "word not found",
      });
};
module.exports = {
  getWord,
  guess,
  getWordById,
};
