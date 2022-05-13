const express = require("express");
const quizRouter = express.Router();

// functions
const { postOneQuiz } = require("../controllers/postQuiz");
const { updateOneQuiz } = require("../controllers/updateQuiz");

// middleware
const { verifyAdmin } = require("../controllers/userMiddlewares");

quizRouter
  .post("/add", verifyAdmin, postOneQuiz)

  .put("/:id/update", verifyAdmin, updateOneQuiz);

module.exports = quizRouter;
