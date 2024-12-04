const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const register = async (req, res, next) => {
  console.log(req.body);
  try {
    const user = new User(req.body);
    const newUser = await user.save();

    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

const login = async (req, res) => {
  try {
    // check if email and password is given
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(500).json({
        message: "Please provide both email and password",
      });
    }
    // check if user exists and password match
    const user = await User.findOne({ email }).select("+password");

    //if password is not correct then retuen error

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      user.token = token;
      user.password = "hehe😂";
      res.status(200).json({
        message: "Login successful",
        token,
        user,
      });
    } else {
      res.status(403).json({
        message: "Invalid credentials",
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
    console.log("Error logging in");
    console.log(err);
  }
};

module.exports = { register, login };
