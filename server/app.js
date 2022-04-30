const express = require('express')
const app = express()

const PORT = process.env.PORT || 6000
app.post('/',(req,res)=>{
    res.send('Hello there')
})

 app.all("*",(req, res, next)=>{
  res.send("Hello there, you seem to be on another undefined route")
  next()
})

app.listen(PORT, () => {
    console.log('Listening to port' + ' ' + PORT)
  })  