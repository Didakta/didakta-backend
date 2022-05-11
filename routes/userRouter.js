const express = require("express");
const userRouter = express.Router();
const { registerUser } = require("../controllers/registerUser");
const { loginUser } = require("../controllers/loginUser");
const { getAllUsers, getOneUser } = require("../controllers/getUser");
const { updateUser } = require("../controllers/updateUser");
const { updateQuizProgress } = require("../controllers/updateQuizProgress");
const { updateUserProgress } = require("../controllers/updateUserProgress");
const {
  verifyAdmin,
  verifyUser,
  verifyNotLoggedIn,
} = require("./userMiddlewares");

userRouter
  .get("/", getAllUsers) // add verifyAdmin
  .get("/:id", getOneUser); // add verifyUser
userRouter
  .post("/register", verifyNotLoggedIn, registerUser)
  .post("/login", verifyNotLoggedIn, loginUser);
userRouter
  .put("/:id/update", updateUser) // add verifyUser
  .put("/:id/quiz-progress/update", updateQuizProgress) // add verifyUser
  .put("/:id/progress/update", updateUserProgress);

module.exports = userRouter;
