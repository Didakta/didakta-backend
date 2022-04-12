const express = require("express");
const chapterRouter = express.Router();
const { getAllChapters } = require("../controllers/getChapters");

// const { verifyAdmin, verifyUser } = require("./userFunctions");

chapterRouter.get("/", getAllChapters);

module.exports = chapterRouter;
