const sendResponse = (res, status, data, message = "No message included.") => {
  return res.status(status).json({ status, data, message });
};

const findUser = (users, userId) => {
  const foundUser = users.find((user) => user.id === userId);
  return foundUser.deleted ? null : foundUser;
};

const findFriends = (friends, userId) => {
  const foundFriends = friends.find((user) => user.id === userId);
  return foundFriends ? foundFriends : null;
};

const findUserIndex = (users, userId) => {
  const idx = users.findIndex((user) => user.id === userId);
  return idx !== -1 ? idx : null;
};

const findUserName = (users, username) => {
  const foundUser = users.find((user) => user.name === username);
  return foundUser.deleted ? null : foundUser;
};

module.exports = {
  findUser,
  findUserIndex,
  sendResponse,
  findUserName,
  findFriends,
};
