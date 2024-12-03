const User = require("../models/UserModel");

const createUser = async (req, res) => {
  try {
    // console.log(req.body);
    const user = new User(req.body);
    const newUser = await user.save();
    res.status(200).json(newUser);
  } catch {
    console.log("Error creating user");
  }
};

module.exports = { createUser };
