if (process.env.NODE_ENV !== "production") require('dotenv').config();
const uri = process.env.ATLAS_URI

const router = require('express').Router()
   const { MongoClient, ServerApiVersion } = require('mongodb');
 const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

router.post('/',(req, res) =>{
   const sess = req.session
   if(sess.username){
       const getId = req.body.messageId
      const username = sess.username
      console.log(username)
         client.connect(async err => {
         const collection = client.db("diary").collection("notes");
         const result = await collection.findOne({_id:getId}).toArray()
            if(result){
               res.json(result)
               console.log('working on result')
               result.map((key)=>{
                  console.log(key._id)
                        console.log(key.title)
                  console.log(key.body)
               })
            }else{
               console.log('an error has occured')
            }
         });
      }else{
         res.send('invalid user')
         console.log('User authentication required')
      }
      
})

module.exports = router

