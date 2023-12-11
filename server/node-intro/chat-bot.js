const chatWithBot = (req, res) => {
  let message;
  const jokes = [
    "What did the Buddhist ask the hot dog vendor? 'Make me one with everything.'",
    "You know why you never see elephants hiding up in trees? 'Because they’re really good at it.'",
    "What is red and smells like blue paint? 'Red paint.'",
    "What do you call a parade of rabbits hopping backwards? 'A receding hare-line.'",
    "Where does the General keep his armies? 'In his sleevies!'",
    "Why aren’t koalas actual bears? 'The don’t meet the koalafications.'",
    "Well then... let's keep chatting i guess?",
  ];
  const randomMessageIndex = Math.floor(Math.random() * 6);
  if (req.query.textContent === "yes") {
    message = {
      author: "bot",
      text: `${jokes[randomMessageIndex]}`,
    };
  } else if (req.query.textContent === "no") {
    message = {
      author: "bot",
      text: `${jokes[6]}`,
    };
  } else if (req.query.textContent === "joke") {
    message = { author: "bot", text: "wanna hear a joke?" };
  } else {
    message = { author: "bot", text: `Bzzt ${req.query.textContent}` };
  }

  const randomTime = Math.floor(Math.random() * 3000);

  setTimeout(() => {
    res.status(200).json({ status: 200, message });
  }, randomTime);
};

module.exports = { chatWithBot };
