const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose.connect("mongodb://localhost/songRecorder")

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("index")
})

app.post("/songs", (req, res) => {
  req.body.songNotes
})

app.listen(5001)
