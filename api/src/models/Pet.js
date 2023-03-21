const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: { type: String, required: true },
  hunger: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  sleep: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  happiness: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  energy: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  health: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
});

export const Pet = mongoose.model("Pet", petSchema);
