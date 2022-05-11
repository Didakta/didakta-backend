const express = require("express");
const lessonRouter = express.Router();
const { getAllLessons, getOneLesson } = require("../controllers/getLessons");
const { postOneLesson } = require("../controllers/postLesson");
const { updateOneLesson } = require("../controllers/updateLesson");
const { verifyAdmin, verifyUser, verifyAPIKey } = require("./userMiddlewares");

lessonRouter
  .get("/", getAllLessons)
  .get("/:id", getOneLesson)
  .post("/add", postOneLesson)
  .put("/:id/update", updateOneLesson); // add verifyAdmin to protect the route

module.exports = lessonRouter;
