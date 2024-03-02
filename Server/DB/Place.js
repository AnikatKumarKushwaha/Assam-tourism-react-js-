const mongoose = require("mongoose");

const PlacesShema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  category: String,
  location: String,
  transportation: String,
});

module.exports = mongoose.model("places", PlacesShema);
