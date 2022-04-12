const mongoose = require("mongoose");

const { Schema } = mongoose;

const QuizSchema = new Schema({
  title: String,

  // the lesson number to which the quiz belongs
  number: {
    type: Number,
    min: 1,
  },
  text: [String],

  // Order of the questions (ObjectIds) is NOT important. The questions is loaded in a random order in frontend anyway.
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  points: Number,
  minPassingPercentage: {
    type: Number,
    min: 50,
    max: 100,
  },
  tags: [String],
});

module.exports = mongoose.model("Quiz", QuizSchema);
