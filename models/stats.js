const mongoose = require("mongoose");

const statsSchema = mongoose.Schema({
  goles: {
    require: true,
    type: Number,
  },
  asistencias: {
    require: true,
    type: Number,
  },
  partidosGanados: {
    require: true,
    type: Number,
  },
  partidosPerdidos: {
    require: true,
    type: Number,
  },
  partidosJugados: {
    require: true,
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },
});

module.exports = mongoose.model("Stats", statsSchema);
