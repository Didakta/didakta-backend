const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  try {
    // check the login info, whether it is a Username or an Email  ******************************** FOR FUTURE !!!
    // check if the provided email exists in the database
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).send("Email not found. Please register first.");

    // check if the user provided the right password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass)
      return res.status(400).send("Invalid password. Please try again!");

    // creating a JW Token
    const authenticationToken = jwt.sign(
      { user },
      // "Stack",
      // { expiresIn: req.body.rememberMe ? "365d" : "24h" }, // ********************************* UNCERTAIN SYNTAX !!!
      process.env.SECRET
    );

    // adding the JW Token in the header
    res.header("authentication-token", authenticationToken);

    // sending the token to the frontend in case if we want to show userdata to the user. e.g. Welcome <user_name>!
    res.json({
      data: user,
      msg: "Successfully logged in",
      token: authenticationToken,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      data: err,
    });
  }
};

module.exports = { loginUser };
