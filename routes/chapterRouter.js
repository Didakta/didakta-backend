const express = require("express");
const chapterRouter = express.Router();
const { getAllChapters } = require("../controllers/getChapters");
const { postOneChapter } = require("../controllers/postChapter");
const { updateOneChapter } = require("../controllers/updateChapter");

// const { verifyAdmin, verifyUser } = require("./userFunctions");

chapterRouter
  .get("/", getAllChapters)
  .post("/add", postOneChapter)
  .put("/:id/update", updateOneChapter); // add verifyAdmin to protect the route

module.exports = chapterRouter;
