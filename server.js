const userRouter = require("./routes/userRouter");
const lessonRouter = require("./routes/lessonRouter");
const chapterRouter = require("./routes/chapterRouter");
const questionRouter = require("./routes/questionRouter");
const quizRouter = require("./routes/quizRouter");

const express = require("express");
const app = express();
const connectDB = require("./dbinit");
const cors = require("cors");
require("dotenv").config();
app.use(
  express.urlencoded({
    extended: false,
  })
);
const PORT = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/lesson", lessonRouter);
app.use("/chapter", chapterRouter);
app.use("/question", questionRouter);
app.use("/quiz", quizRouter);

app.get("/", (req, res) => {
  res.send(`Didakta is a platform for learning ancient greek language.`);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
