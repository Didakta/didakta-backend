const mongoose = require("mongoose");

const { Schema } = mongoose;

// Chapter schema model:
// title, number, lessonNumber, text, audio, audioText, table, text_1, table_1, youtube, questionText, questions, img, alignmentText, alignment, footnotes
const ChapterSchema = new Schema({
  title: String,
  number: {
    type: Number,
    required: [true, "Chapter needs  a number"],
    min: 1,
  },
  lessonNumber: Number,
  text: [String],
  audio: String,
  audioText: [String],
  table: [[String]],
  text_1: [String],
  table_1: [[String]],
  youtube: String,

  // Each chapter has optionally one or more questions
  questionText: [String],
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  img: String,
  alignmentText: [String],
  alignment: String,
  footnotes: [String],
});

module.exports = mongoose.model("Chapter", ChapterSchema);
