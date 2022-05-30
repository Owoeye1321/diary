if (process.env.NODE_ENV !== "production") require('dotenv').config();
 const uri = process.env.ATLAS_URI
   const { MongoClient, ServerApiVersion } = require('mongodb')
      const router = require('express').Router()
 const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
router.post('/',(req, res) =>{
      const sess = req.session
         const title = req.body.details.title
        const body = req.body.details.body
      const user = sess.username
   if(user){
        client.connect( async () => {
             const collection = client.db("diary").collection("notes");
          const result = await collection.insertOne({title:title, body:body, user:user})
        if(result){
            console.log('data saved successfully')
               res.send('success')
        }else{
           console.log('An error has occured')
         res.send('error')
        }
          client.close();
        });

   }else{
      console.log('Authentication required')
   }



})

module.exports = router