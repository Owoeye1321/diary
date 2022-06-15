const express = require('express')
  const cookieParser = require('cookie-parser')
    const app = express()
       app.use(express.json())
         const PORT = process.env.PORT || 4040
       var session = require('express-session')
    const oneDay = 1000 * 60 * 60 * 24;
  app.use(cookieParser())
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
app.use(function(req,res,next){
  if(!req.session){
      return next(new Error('Oh no')) //handle error
  }
  next() //otherwise continue
  });
app.use('/login',require('./routes/login'))
     app.use('/signUp',require('./routes/signUp'))
          app.use('/insert',require('./routes/create'))
       app.use('/read', require('./routes/read'))
  app.use('/check',require('./routes/check'))
  app.use('/update', require('./routes/update'))
  app.use('/fetchbody', require('./routes/fetchbody'))
  app.use('/trash', require('./routes/trash'))

app.all('*',( req, res)=>{
  res.send('Hello there, you seem to be lost on this server')
})

app.listen(PORT, () => {
    console.log('Listening to port' + ' ' + PORT)
  })    