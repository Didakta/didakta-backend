const express = require("express");
const questionRouter = express.Router();
const { getAllQuestions } = require("../controllers/getQuestions");

// const { verifyAdmin, verifyUser } = require("./userFunctions");

questionRouter.get("/", getAllQuestions);

module.exports = questionRouter;
