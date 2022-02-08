
const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://kcs:1234@node.evhkj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {})
    .then(() => console.log('MongoDB Conneted...'))
    .catch( err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World! 11')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})