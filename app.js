const { json } = require('express')
const express = require('express')
const app = express()
const port = 3000
// const fs = require("fs")

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
  res.render('main')
})

app.get('/game', (req, res) => {
    res.send('halaman kedua')
})

// app.get('/login', (req, res) => {
//     const body = req.body
//     console.log(body)
//     // res.send('login')
//    let database = fs.readFileSync("./database.json", "utf-8")
//    let databaseJson = JSON.parse(database)
//    console.log(databaseJson)
//    res.send("febri")
//     if (database.username == databaseJson.username) {
//         console.log('betul')
//     } else {
//         console.log('salah')
//     }
// })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

