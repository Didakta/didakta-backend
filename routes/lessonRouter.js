const express = require("express");
const lessonRouter = express.Router();
const { getAllLessons, getOneLesson } = require("../controllers/getLessons");
const { postOneChapter } = require("../controllers/postChapter");
const { postOneLesson } = require("../controllers/postLesson");
const { postOneQuiz } = require("../controllers/postQuiz");
const { postOneQuestion } = require("../controllers/postQuestion");
const { updateOneLesson } = require("../controllers/updateLesson");
const { updateOneChapter } = require("../controllers/updateChapter");
const { updateOneQuiz } = require("../controllers/updateQuiz");
const { updateOneQuestion } = require("../controllers/updateQuestion");
const { verifyAdmin, verifyUser } = require("./userMiddlewares");

lessonRouter.get("/", getAllLessons); // add verifyUser
lessonRouter.get("/:id", getOneLesson); // add verifyUser
lessonRouter.post("/addChapter", postOneChapter); // add verifyAdmin to protect the route
lessonRouter.post("/addLesson", postOneLesson); // add verifyAdmin to protect the route
lessonRouter.post("/addQuiz", postOneQuiz); // add verifyAdmin to protect the route
lessonRouter.post("/addQuestion", postOneQuestion); // add verifyAdmin to protect the route
lessonRouter.put("/updateLesson/:id", updateOneLesson); // add verifyAdmin to protect the route
lessonRouter.put("/updateChapter/:id", updateOneChapter); // add verifyAdmin to protect the route
lessonRouter.put("/updateQuiz/:id", updateOneQuiz); // add verifyAdmin to protect the route
lessonRouter.put("/updateQuestion/:id", updateOneQuestion); // add verifyAdmin to protect the route

module.exports = lessonRouter;
