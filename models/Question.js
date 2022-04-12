const mongoose = require("mongoose");

const { Schema } = mongoose;

// Question schema model:
// (chapterNumber & lessonNumber) || quizNumber, title, text, table, text_1, alignment, answers, correctAnswer, answers_1, correctAnswer_1, tags (dropDown, multipleChoice), hint, explanation (comes after user chooses the answer)
const QuestionSchema = new Schema({
  chapterNumber: Number,
  lessonNumber: Number,
  quizNumber: Number,
  title: String,
  text: [String],
  table: [[String]],
  text_1: [String],
  alignment: String,
  answers: [String],
  correctAnswer: Number,
  answers_1: [String],
  correctAnswer_1: Number,
  tags: [
    {
      type: String,
      required: [true, "tags: dropDown, multipleChoice"],
      enum: ["dropDown", "multipleChoice"],
    },
  ],
  hint: String,
  explanation: String,
});

module.exports = mongoose.model("Question", QuestionSchema);
