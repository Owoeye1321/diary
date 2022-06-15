if (process.env.NODE_ENV !== "production") require('dotenv').config();
const uri = process.env.ATLAS_URI

const router = require('express').Router()
   const { MongoClient, ServerApiVersion } = require('mongodb');
   const ObjectId = require('mongodb').ObjectId;
 const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

router.post('/',(req, res) =>{
    const sess = req.session
    if(sess.username){
        console.log('Hello world an issue is on ground')
        console.log(req.body)
        const UpdateRef = sess.updateId
        const body = req.body.body
        console.log(body)
        client.connect( async err =>{
            const collection = client.db("diary").collection("notes");
                const result = await collection.updateOne({_id:ObjectId(UpdateRef)} , {$set:{body:body}})
            if(result){
                res.send('success') 
                    console.log('Processing result boss')
                console.log(result)
            }else{
                res.send('Unable to update file')
                console.log('An huge error has occured')
            }
        })
    }else{
        res.send('user need to login')
        console.log('An error has occured')
    }
         
      
})


router.get('/',(req, res)=>{
    res.send('hello world')
})


module.exports = router

