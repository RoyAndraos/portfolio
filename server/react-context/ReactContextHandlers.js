const {
  findUser,
  findUserIndex,
  sendResponse,
  findUserName,
} = require("./utils.js");

const users = require("./users.json");

// GET all users
const getUsers = (req, res) => {
  const activeUsers = users.filter((user) => !user.deleted);
  sendResponse(res, 200, activeUsers);
};

// GET user based on :id
const getUserById = (req, res) => {
  const userId = req.params.id;
  const user = findUser(users, userId);

  user
    ? sendResponse(res, 200, user)
    : sendResponse(res, 400, null, "User not found.");
};

// POST login user by name
const loginUser = (req, res) => {
  const { username } = req.body;

  const user = findUserName(users, username);

  user
    ? sendResponse(res, 200, user)
    : sendResponse(res, 400, null, "User not found.");
};

// We don't believe in actually deleting data...
// instead we add a 'deleted' flag to the object.
const deleteUser = (req, res) => {
  const userId = req.params.id;
  const index = findUserIndex(users, userId);
  if (!index) return sendResponse(res, 400, null, "User not found.");

  users[index].deleted = true;
  sendResponse(res, 200, null, "User deleted.");
};

// PATCH. requires the ids of 2 people to make them friends
// ids should be sent along as an array called newFriends in the body
const handleFriends = (req, res) => {
  const [userId_1, userId_2] = req.body.newFriends;
  const user_1 = findUser(users, userId_1);
  const user_2 = findUser(users, userId_2);

  // if either of the userIds don't exist, stop and return error
  if (!user_1 || !user_2)
    return sendResponse(
      res,
      400,
      req.body,
      "One or both of the users not found."
    );

  const userIdx_1 = findUserIndex(users, userId_1);
  const userIdx_2 = findUserIndex(users, userId_2);

  // if users are already friends, make them NOT friends
  if (user_1.friends.includes(userId_2) || user_2.friends.includes(userId_1)) {
    users[userIdx_1].friends.splice(user_1.friends.indexOf(userId_2), 1);
    users[userIdx_2].friends.splice(user_2.friends.indexOf(userId_1), 1);

    return sendResponse(
      res,
      200,
      [user_1.friends, user_2.friends],
      "Users are no longer friends."
    );
  }

  users[userIdx_1].friends.push(userId_2);
  users[userIdx_2].friends.push(userId_1);

  sendResponse(
    res,
    200,
    [user_1.friends, user_2.friends],
    "Users are now friends."
  );
};

module.exports = {
  deleteUser,
  getUsers,
  getUserById,
  handleFriends,
  loginUser,
};
