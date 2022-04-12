const Lesson = require("../models/Lesson");

const updateOneLesson = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, number, chapters, quiz, wordlist } = req.body;

    const lesson = await Lesson.findByIdAndUpdate(
      id,
      {
        title,
        number,
        chapters,
        quiz,
        wordlist,
      },
      { new: true }
    );
    res.json({
      msg: `Lesson with number ${lesson.number} and id ${lesson.id} updated`,
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

module.exports = { updateOneLesson };
