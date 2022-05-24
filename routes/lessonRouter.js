const express = require("express");
const lessonRouter = express.Router();

// functions
const { getAllLessons, getOneLesson } = require("../controllers/getLessons");
const { postOneLesson } = require("../controllers/postLesson");
const { updateOneLesson } = require("../controllers/updateLesson");
const { verifyAdmin } = require("../controllers/userMiddlewares");

// routers
lessonRouter
  .get("/", verifyAdmin, getAllLessons)
  .get("/:id", verifyAdmin, getOneLesson)

  .post("/add", verifyAdmin, postOneLesson)

  .put("/:id/update", verifyAdmin, updateOneLesson);

module.exports = lessonRouter;
