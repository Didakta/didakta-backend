const express = require("express");
const userRouter = express.Router();

// Importing functions
const { registerUser } = require("../controllers/registerUser");
const { loginUser } = require("../controllers/loginUser");
const { getAllUsers, getOneUser } = require("../controllers/getUser");
const { updateUser } = require("../controllers/updateUser");
const { updateQuizProgress } = require("../controllers/updateQuizProgress");
const { updateUserProgress } = require("../controllers/updateUserProgress");

// Middlewares
const {
  verifyUser,
  verifyAdmin,
  verifyNotLoggedIn,
} = require("../controllers/userMiddlewares");

// Routes
userRouter
  .get("/", verifyAdmin, getAllUsers)
  .get("/:id", verifyUser, getOneUser)

  .post("/register", verifyNotLoggedIn, registerUser)
  .post("/login", verifyNotLoggedIn, loginUser)

  .put("/:id/update", verifyUser, updateUser)
  .put("/:id/quiz-progress/update", verifyUser, updateQuizProgress)
  .put("/:id/progress/update", verifyUser, updateUserProgress);

module.exports = userRouter;
