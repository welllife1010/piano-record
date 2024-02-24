const express = require("express")
const mongoose = require("mongoose")
const Song = require("./models/song.js")
const app = express()

mongoose.connect("mongodb://localhost/songRecorder")

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("index")
})

// save to database
app.post("/songs", async (req, res) => {
  const song = new Song({
    notes: req.body.songNotes,
  })

  await song.save()

  // in order to get the id of the song, so we can use it later
  res.json(song)
})

app.get("/songs/:id", async (req, res) => {
  let song
  try {
    song = await Song.findById(req.params.id)
  } catch (e) {
    song = undefined
  }
  // make song available in index
  res.render("index", { song: song })
})

app.listen(5001)
