const Question = require("../models/Question");

const updateOneQuestion = async (req, res) => {
  try {
    const { id } = req.params;
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
      hint,
      explanation,
    } = req.body;

    const question = await Question.findByIdAndUpdate(
      id,
      {
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
        hint,
        explanation,
      },
      { new: true }
    );
    res.json({
      msg: `Question with number ${question.number} and id ${question.id} updated`,
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

module.exports = { updateOneQuestion };
