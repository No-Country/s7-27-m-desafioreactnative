const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: { type: String, required: true },
  hunger: {
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

export const Event = mongoose.model("Event", eventSchema);
