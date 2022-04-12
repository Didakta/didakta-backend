const User = require("../models/User");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const { first, last, email, password } = req.body;

    // chack if email already exists
    const emailExists = await User.findOne({ email: email });
    if (emailExists)
      return res.status(400).send("This email is already registered.");

    // check if the username already exists
    // const usernameExists = await User.findOne({ username: username });
    // if (usernameExists)
    //   return res
    //     .status(400)
    //     .send("Username already registered. Use another username.");

    // check if password matches with RegExp
    // const regex = await new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);
    // let rightPassPattern = await regex.test(password);
    // if (!rightPassPattern)
    //   return res
    //     .status(400)
    //     .send(
    //       "Password must have: 1.Between 6 and 20 characters 2.At least one uppercase character 3.At least one lowercase character 4. At least one number"
    //     );

    // encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // creating the user
    const user = await User.create({
      first: first,
      last: last,
      email: email,
      username: email,
      // description: description,
      password: hashPassword,
      quizProgress: [],
      lessonProgress: "621748dfd802618ce2e3fe1d",
      chapterProgress: "62223ec7081ba3f25bc9808e",
      admin: false,
    });
    res.json({
      data: user,
      success: true,
      msg: "User added",
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      data: err,
    });
  }
};

module.exports = { registerUser };
