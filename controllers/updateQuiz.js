const Quiz = require("../models/Quiz");

const updateOneQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      number,
      explanation,
      questions,
      points,
      minPassingPercentage,
      tags,
    } = req.body;

    const quiz = await Quiz.findByIdAndUpdate(
      id,
      {
        title,
        number,
        explanation,
        questions,
        points,
        minPassingPercentage,
        tags,
      },
      { new: true }
    );
    res.json({
      msg: `Quiz with number ${quiz.number} and id ${quiz.id} updated`,
      success: true,
      data: quiz,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      data: err,
    });
  }
};

module.exports = { updateOneQuiz };
