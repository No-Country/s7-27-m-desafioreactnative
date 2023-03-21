const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const interactionSchema = new Schema({
  name: { type: String, required: true },
  feed: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  play: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  lay: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  heal: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  shower: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
});

export const Interaction = mongoose.model("Interaction", interactionSchema)