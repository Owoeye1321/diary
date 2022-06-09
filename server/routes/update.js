if(process.env.NODE_ENV !== 'production') require('dotenv').config()
    const uri = process.env.ATLAS_URI
        const { MongoClient , ServerApiVersion } = require('mongodb')
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const router = require('express').Router()

router.post('/',(req, res)=>{
    const sess = req.session
    if(sess.user){
        const UpdateRef = sess.updateId
        const body = req.body.body
        client.connect( async err =>{
            const collection = client.db('diary').collection('notes')
                const result = collection.updateOne({_id:ObjectId(UpdateRef)} , {$set:{body:body}})
            if(result){
                res.send('success') 
                    console.log('Processing result boss')
                console.log(result)
            }else{
                console.log('An huge error has occured')
            }
        })
    }
         
})

module.exports = router