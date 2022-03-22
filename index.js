require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const pets = require('./routes/pet')
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/pets',pets)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
