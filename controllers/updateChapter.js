const Chapter = require("../models/Chapter");

const updateOneChapter = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      number,
      lessonNumber,
      text,
      audio,
      audioText,
      table,
      text_1,
      table_1,
      youtube,
      questionText,
      questions,
      img,
      alignmentText,
      alignment,
      footnotes,
    } = req.body;

    const chapter = await Chapter.findByIdAndUpdate(
      id,
      {
        title,
        number,
        lessonNumber,
        text,
        audio,
        audioText,
        table,
        text_1,
        table_1,
        youtube,
        questionText,
        questions,
        img,
        alignmentText,
        alignment,
        footnotes,
      },
      { new: true }
    );
    res.json({
      msg: `Chapter with number ${chapter.number} and id ${chapter.id} updated`,
      success: true,
      data: chapter,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      data: err,
    });
  }
};

module.exports = { updateOneChapter };
