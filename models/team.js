const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
  white: {
    type: String,
    required: true,
    trim: true,
  },
  black: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Team", teamSchema);
