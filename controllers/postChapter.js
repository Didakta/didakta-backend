const Chapter = require("../models/Chapter");

const postOneChapter = async (req, res) => {
  try {
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

    const chapter = await Chapter.create({
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
    });
    res.json({
      msg: "Chapter added",
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

module.exports = { postOneChapter };
