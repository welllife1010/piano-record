const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
  key: {
    type: String,
    require: true,
  },
  startTime: {
    type: Number,
    require: true,
  },
})

const songSchema = new mongoose.Schema({
  notes: [noteSchema],
})

module.exports = mongoose.model("Songs", songSchema)
