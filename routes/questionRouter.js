const express = require("express");
const questionRouter = express.Router();
const { getAllQuestions } = require("../controllers/getQuestions");
const { postOneQuestion } = require("../controllers/postQuestion");
const { updateOneQuestion } = require("../controllers/updateQuestion");

// const { verifyAdmin, verifyUser, verifyAPIKey } = require("./userFunctions");

questionRouter
  .get("/", getAllQuestions)
  .post("/add", postOneQuestion)
  .put("/:id/update", updateOneQuestion); // add verifyAdmin to protect the route

module.exports = questionRouter;
