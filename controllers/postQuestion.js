const Question = require("../models/Question");

const postOneQuestion = async (req, res) => {
  try {
    const {
      chapterNumber,
      lessonNumber,
      quizNumber,
      title,
      text,
      table,
      text_1,
      alignment,
      answers,
      correctAnswer,
      answers_1,
      correctAnswer_1,
      tags,
    } = req.body;

    const question = await Question.create({
      chapterNumber,
      lessonNumber,
      quizNumber,
      title,
      text,
      table,
      text_1,
      alignment,
      answers,
      correctAnswer,
      answers_1,
      correctAnswer_1,
      tags,
    });
    res.json({
      msg: "Question added",
      success: true,
      data: question,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      data: err,
    });
  }
};

module.exports = { postOneQuestion };
