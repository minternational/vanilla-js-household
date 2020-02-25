const express = require("express")
const bodyparser = require("body-parser")
const app = express()
const path = require("path")
const haushaltsbuch = {
  artikel: [],
  preis: []
}

app.set("view engine", "ejs")
app.set("views", "viewsFolder")

app.use(bodyparser.urlencoded({
  extended: false
}))

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res, next) => {
  res.render('index')
})

// let deleteItemsAndPrice = function() {
//   haushaltsbuch.artikel = []
//   haushaltsbuch.preis = []
// }

// app.post("/", function(req, res) {
//   console.log("Delete Everything!")
//   deleteItemsAndPrice();
// })

app.delete('/', (res, req) => {
  res.del(req.body.delete)
})

app.post("/", (req, res) => {
  haushaltsbuch.artikel.push(req.body.artikel)
  haushaltsbuch.preis.push(req.body.preis)
  // if (req.body.delete) {
  //   haushaltsbuch.artikel = []
  //   haushaltsbuch.preis = []
  // }
  console.log(haushaltsbuch.artikel)
  console.log(haushaltsbuch.preis)
  res.render("index", { 
    eingabeAnzeige: haushaltsbuch.artikel + " " + haushaltsbuch.preis + "€"
   })
})

// app.delete("/", (req, res, next) => {
//   res.send(req.body.data)
//   next()
// })

app.listen(3000)