const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  first: {
    // first name
    type: String,
    required: [true, "This filed is required"],
    minlength: [2, "Minimum characters for this field is 2"],
    maxlength: [30, "Maximum characters for this field is 30"],
  },
  last: {
    // last name
    type: String,
    required: [true, "This filed is required"],
    minlength: [2, "Minimum characters for this field is 2"],
    maxlength: [30, "Maximum characters for this field is 30"],
  },
  email: {
    type: String,
    required: [true, "This filed is required"],
    unique: [true, "Email already registered"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email address",
    ],
  },
  username: {
    type: String,
    required: true,
    unique: [true, "Username already registered"],
    minlength: [5, "Minimum characters for this field is 5"],
    maxlength: [50, "Maximum characters for this field is 30"],
  },

  // Date of Birth
  // dOB: {
  //   type: Date,
  // },
  // description: {
  //   type: String,
  //   maxlength: [250, "Maximum characters for this field is 250"],
  // },
  password: {
    type: String,
    required: [true, "This field is required"],
  },
  regDate: {
    type: Date,
    default: Date.now,
  },

  quizProgress: [
    {
      quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
      },
      firstTimeScore: {
        type: Number,
        min: 0,
        max: 100,
      },
      questionsResult: [mongoose.Schema.Types.Mixed],
    },
  ],

  // the lesson and chapter that the user lastly visited. This is to send the user back where they left off
  lessonProgress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
  },
  chapterProgress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chapter",
  },
  admin: Boolean,
});

module.exports = mongoose.model("User", UserSchema);
