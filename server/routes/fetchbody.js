if (process.env.NODE_ENV !== "production") require('dotenv').config();
const uri = process.env.ATLAS_URI

const router = require('express').Router()
   const { MongoClient, ServerApiVersion } = require('mongodb');
   const ObjectId = require('mongodb').ObjectId;
 const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

router.post('/',(req, res) =>{
   const sess = req.session
   console.log(req.body)
   if(sess.username){
      const username = sess.username
      console.log(username)
         client.connect(async err => {
         const collection = client.db("diary").collection("notes");
         const getId = req.body.messageId
         sess.updateId = getId
         console.log(getId)
         const result = await collection.findOne({_id:ObjectId(getId)})
            if(result){
               console.log(result)
               res.json(result)
            }else{
               res.send('Unable to find notes with id')
               console.log('an error has occured')
            }
         });
      }else{
         res.send('invalid user')
         console.log('User authentication required')
      }
      
})

module.exports = router

