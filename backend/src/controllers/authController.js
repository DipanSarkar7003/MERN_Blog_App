const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const register = async (req, res) => {
  try {
    const user = new User(req.body);
    const newUser = await user.save();

    res.status(200).json({
      status: true,
      message: "User registered successfully",
      data: newUser,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: false,
      message: "Server Error",
      error: err.message,
      timestamp: new Date().toISOString(),
    });
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
      user.password = undefined;
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

const protect = async (req, res, next) => {
  let token;
  let jwtdata;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization?.split(" ")[1];
  }

  // if no token is preset in the header

  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  // if token present then verify the token with the secret

  try {
    jwtdata = jwt.verify(token, process.env.JWT_SECRET);

    if (!jwtdata) {
      res
        .status(403)
        .json({ message: " verification failed , please try again !" });
    }
  } catch (err) {
    // console.log(err);
    res
      .status(403)
      .json({ message: "Token verification failed , please try again !" });
  }

  // check if the user  still exist

  const ourUser = await User.findById(jwtdata.id);
  console.log(ourUser);
  if (!ourUser)
    return next(
      res.status(401).json({
        message: "User no longer exists",
      })
    );

  next();
};

module.exports = { register, login, protect };
