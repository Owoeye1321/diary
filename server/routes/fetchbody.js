const router = require('express').Router()
   const ObjectId = require('mongodb').ObjectId;
   const client = require('../controller/client')

router.post('/',async (req, res) =>{
   const sess = req.session
   console.log(req.body)
   if(sess.username){
      const username = sess.username
      console.log(username)
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
      }else{
         res.send('invalid user')
         console.log('User authentication required')
      }
      
})

module.exports = router

