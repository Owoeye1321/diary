// if (process.env.NODE_ENV !== "production") require('dotenv').config();
//    const uri = process.env.ATLAS_URI_FOR_OWOEYE
   
   const mongoose = require('mongoose')

const { MongoClient, ServerApiVersion } = require('mongodb');

    mongoose.connect("mongodb+srv://mongo:owoeye1234@cluster0.8tjy2.mongodb.net/diary?retryWrites=true&w=majority", 
     { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
    .then(()=>{
      console.log('connected to database')
    })
    .catch(e=>console.log(e));



