// const {User} = require("../models/userSchema")
const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  try {
    const loginData = req.body;
    console.log(loginData);
    const Finduser = await User.findOne({ email: req.body.email });
    console.log(Finduser);
    if (!Finduser) {
      res.status(401).send({ message: "Invalid Email or Password" });
    }

    console.log("hehe");
    const validPassword = await bcrypt.compare(
      req.body.password,
      Finduser.password
    );
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Password" });
    }
    let token = jwt.sign(loginData, process.env.JWTPRIVATEKEY, {
      expiresIn: "7d",
    });
    Finduser.jwt_token = token;
    Finduser.save();
    res.cookie("Authtoken", token, { httpOnly: true, secure: true });
     return res.status(200).send({ message: "Logged in successfully", user: Finduser });
  } catch (error) {
     return res.status(500).send({ message: "User does not exist." });
  }
};

module.exports = userLogin;
