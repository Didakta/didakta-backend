const express = require("express");
const quizRouter = express.Router();
const { postOneQuiz } = require("../controllers/postQuiz");
const { updateOneQuiz } = require("../controllers/updateQuiz");

quizRouter.post("/add", postOneQuiz).put("/:id/update", updateOneQuiz); // add verifyAdmin to protect the route

module.exports = quizRouter;
