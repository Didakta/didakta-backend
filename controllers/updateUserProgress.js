const User = require("../models/User");
const updateUserProgress = async (req, res) => {
  try {
    const { id } = req.params;
    let user = await User.findById(id);
    const quizProgress = user.quizProgress;

    const { quizResult, lessonId, chapterId } = req.body;

    quizResult && quizProgress.push(quizResult);

    user = await User.findByIdAndUpdate(
      id,
      {
        quizProgress: quizProgress,
        lessonProgress: lessonId,
        chapterProgress: chapterId,
      },
      { new: true }
    );
    res.json({
      msg: `User's quiz progress with id ${user.id} updated`,
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      data: err,
    });
  }
};

module.exports = { updateUserProgress };
