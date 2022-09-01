// if (process.env.NODE_ENV !== "production") require('dotenv').config();
//    const uri = process.env.ATLAS_URI_FOR_OWOEYE

const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')
const MongoStore = require('connect-mongo');
const app = express()
app.use(bodyParser.json());
app.use(express.json())
app.use(cookieParser())
       app.use(express.json())
         const PORT = process.env.PORT || 4040
       const oneDay = 1000 * 60 * 60 * 24;
       app.set('trust proxy', 1)

       let store =  MongoStore.create({
        mongoUrl: "mongodb+srv://mongo:owoeye1234@cluster0.8tjy2.mongodb.net/diary?retryWrites=true&w=majority",
        dbName: "diary",
        stringify: true,
        autoRemove:'native'
      })
       app.use(session({
         proxy:true,
         secret:"OwoeyeSamuelOlamide",
         saveUninitialized:false,
         resave:false,
       
         cookie:{        
           maxAge:oneDay
          },  
         store:store
       }))
       app.use(function(req,res,next){
         if(!req.session){
             return next(new Error('Oh no')) //handle error
         }
         next() //otherwise continue
         });
         
  app.get('/',(req, res)=>{
    res.send('Hello world')
  })

app.use('/login',require('./routes/login'))
     app.use('/signUp',require('./routes/signUp'))
          app.use('/insert',require('./routes/create'))
       app.use('/read', require('./routes/read'))
       app.use('/logOut', require('./routes/logOut'))
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