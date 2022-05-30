if (process.env.NODE_ENV !== "production") require('dotenv').config();
   const uri = process.env.ATLAS_URI

const router = require('express').Router()
const { MongoClient, ServerApiVersion } = require('mongodb');
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

router.post('/',(req, res) =>{
   const sess = req.session
         const username = req.body.details.username
    const password = req.body.details.password

      client.connect( async err => {
         console.log('mongodb database connected successfully')
             const collection = client.db("diary").collection("user");
             const result = await collection.findOne({ username: username, password: password})
      if(result){
         sess.username = username
             res.send('success')
         console.log("user exist")
      } else {
         console.log('user does not exist')
           res.send('invalid')
      }
     
      client.close();
      });

})

module.exports = router



