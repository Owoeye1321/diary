if(process.env.NODE_ENV !== 'production') require('dotenv').config()
    const uri = process.env.ATLAS_URI
        const {mongoClient , ServerApiVersion } = require('mongodb')
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const router = require('express').Router()

router.post('/',(req, res)=>{
    const id = req.body.details.id   
        const title = req.body.details.title
            const body = req.body.details.body
        client.connect( async err =>{
            const collection = client.db('diary').collection('notes')
                const result = collection.update({_id:id}, {title:title, body:body})
            if(result){
                res.send('success') 
                    console.log('Processing result boss')
                console.log(result)
            }else{
                console.log('An huge error has occured')
            }
        })
})



 