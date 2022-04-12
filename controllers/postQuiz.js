const Quiz = require("../models/Quiz");

const postOneQuiz = async (req, res) => {
  try {
    const {
      title,
      number,
      explanation,
      questions,
      points,
      minPassingPercentage,
      tags,
    } = req.body;

    const quiz = await Quiz.create({
      title,
      number,
      explanation,
      questions,
      points,
      minPassingPercentage,
      tags,
    });
    res.json({
      msg: "Quiz added",
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

module.exports = { postOneQuiz };
