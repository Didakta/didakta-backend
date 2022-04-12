const Lesson = require("../models/Lesson");

const postOneLesson = async (req, res) => {
  try {
    const { title, number, chapters, quiz, wordlist } = req.body;

    const lesson = await Lesson.create({
      title,
      number,
      chapters,
      quiz,
      wordlist,
    });
    res.json({
      msg: "Lesson added",
      success: true,
      data: lesson,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      data: err,
    });
  }
};

module.exports = { postOneLesson };
