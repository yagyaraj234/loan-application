const User = require("../model/userSchema")
const bcrypt = require("bcrypt");

const userSignup = async (req, res) => {
  try {
    console.log(req.body);
    const findUser = await User.findOne({ email: req.body.email });
    if (findUser)
      return res
        .status(409)
        .send({ message: "User already exist" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newuser = await new User({
      ...req.body,
      password: hashPassword,
    }).save();
    res
      .status(201)
      .send({ message: "User created Succesfully", user: newuser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = userSignup;
