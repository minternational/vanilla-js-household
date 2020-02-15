const express = require("express")
const bodyparser = require("body-parser")
const app = express()
const path = require("path")
const hausHaltsBuch = {
  artikel: [],
  preis: []
}

app.use(bodyparser.urlencoded({
  extended: false
}))

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res, next) => {
  res.send('index.html')
})

app.post("/", (req, res, next) => {
  hausHaltsBuch.artikel.push(req.body.artikel)
  hausHaltsBuch.preis.push(req.body.preis)
    res.redirect("/")
})

app.listen(3001)