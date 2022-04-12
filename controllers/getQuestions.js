const Question = require("../models/Question");

const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json({
      data: questions,
      msg: "All the questions",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllQuestions };
