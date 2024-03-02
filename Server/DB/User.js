const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  password: String,
});

module.exports = mongoose.model("user", UserSchema);
