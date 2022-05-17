const express = require('express')
const app = express()
const PORT = process.env.PORT || 4040
var session = require('express-session')
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
  cookie:{
    secure: true,
    maxAge:60000
       },
  secret:"OwoeyeSamuelOlamide",
  saveUninitialized:true,
  cookie:{maxAge:oneDay},
  resave:false
}))
app.use('/login',require('./routes/login'))
app.use('/signUp',require('./routes/signUp'))
app.use('/insert',require('./routes/createUpdate'))
app.use('/read', require('./routes/read'))
app.use('/check',require('./routes/check'))

app.use('*',( req, res)=>{
 res.send('Hello there, you seem to be lost on this server')
})

app.listen(PORT, () => {
    console.log('Listening to port' + ' ' + PORT)
  })    