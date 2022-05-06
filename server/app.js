const express = require('express')
const app = express()
const PORT = process.env.PORT || 6000
app.use('/login',require('./routes/login'))
app.use('/signUp',require('./routes/signUp'))
app.use('/insert',require('./routes/createUpdate'))
app.use('/read', require('./routes/read'))

app.use('*',( req, res)=>{
 res.send('Hello there, you seem to be lost on this server')
})

app.listen(PORT, () => {
    console.log('Listening to port' + ' ' + PORT)
  })    