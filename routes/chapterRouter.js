const express = require("express");
const chapterRouter = express.Router();

//functions
const { getAllChapters } = require("../controllers/getChapters");
const { postOneChapter } = require("../controllers/postChapter");
const { updateOneChapter } = require("../controllers/updateChapter");

// middlewares
const { verifyAdmin } = require("../controllers/userMiddlewares");

// routes
chapterRouter
  .get("/", verifyAdmin, getAllChapters)

  .post("/add", verifyAdmin, postOneChapter)

  .put("/:id/update", verifyAdmin, updateOneChapter);

module.exports = chapterRouter;
