const User = require("../models/UserModel");

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

module.exports = { register };
