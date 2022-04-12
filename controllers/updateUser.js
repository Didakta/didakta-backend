const User = require("../models/User");
const bcrypt = require("bcryptjs");

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { first, last, email, password } = req.body;

    // check if password matches with RegExp
    // const regex = await new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);
    // let rightPassPattern = await regex.test(password);
    // if (!rightPassPattern) {
    //   return res
    //     .status(400)
    //     .send(
    //       "Password must have: 1.Between 6 and 20 characters 2.At least one uppercase character 3.At least one lowercase character 4. At least one number"
    //     );
    // }

    // encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = password ? await bcrypt.hash(password, salt) : 0;

    // update the user

    const user = await User.findByIdAndUpdate(
      id,
      {
        first: first,
        last: last,
        email: email,
        password: hashPassword !== 0 ? hashPassword : password,
      },
      { new: true }
    );
    res.json({
      msg: `User with id ${user.id} updated`,
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

module.exports = { updateUser };
