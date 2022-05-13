const express = require("express");
const questionRouter = express.Router();

// functions
const { getAllQuestions } = require("../controllers/getQuestions");
const { postOneQuestion } = require("../controllers/postQuestion");
const { updateOneQuestion } = require("../controllers/updateQuestion");

// middlewares
const { verifyAdmin } = require("../controllers/userMiddlewares");

// routes
questionRouter
  .get("/", verifyAdmin, getAllQuestions)

  .post("/add", verifyAdmin, postOneQuestion)

  .put("/:id/update", verifyAdmin, updateOneQuestion);

module.exports = questionRouter;
