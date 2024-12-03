const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    // select: false,
  },
});

//secure password with bcrypt

userSchema.pre("save", async function (next) {
  //if password not  changed then return

  if (!this.isModified("password")) return next();

  //hash password before save it to the database
  try {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
