const router = require('express').Router()
   const ObjectId = require('mongodb').ObjectId;
   const client = require('../controller/client')

router.post('/',async (req, res) =>{
    const sess = req.session
    if(sess.username){
           const collection = client.db("diary").collection("notes");
           const getId = req.body.trashingId
           const result = await collection.deleteOne({_id:ObjectId(getId)})
              if(result){
                 console.log(result)
                 res.send('success')
              }else{
                 res.send('Unable to find notes with id')
                 console.log('an error has occured')
              }
        }else{
           res.send('invalid user')
           console.log('User authentication required')
        } 
})


router.get('/',(req, res)=>{
    res.send('hello world')
})


module.exports = router

