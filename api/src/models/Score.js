const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  playerId: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

export const Score = mongoose.model("Score", scoreSchema);
