const mongoose = require("mongoose");

const ExperiencesSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: String,
  image: String,
});

module.exports = mongoose.model("experiences", ExperiencesSchema);
