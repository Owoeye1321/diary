const express = require('express')
const  mongoose  = require('mongoose')
const app = express()
app.use(express.json())
require('dotenv').config()
const url = process.env.ATLAS_URI

mongoose.connect(url,{ useNewUrlParser: true, useCreateIndex: true })
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('mongodb database established successfully')
})

const PORT = process.env.PORT || 6000


app.listen(PORT, () => {
    console.log('Listening to port' + ' ' + PORT)
  })    