const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/user
router.route("/").get(getUsers).post(createUser);

// /api/user/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/user/friend/friend id
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
