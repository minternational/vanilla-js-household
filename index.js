const express = require("express")
const bodyparser = require("body-parser")
const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(3001)