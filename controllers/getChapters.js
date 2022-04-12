const Chapter = require("../models/Chapter");

const getAllChapters = async (req, res) => {
  try {
    const chapters = await Chapter.find().populate("questions");
    res.json({
      data: chapters,
      msg: "All the chapters",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllChapters };
