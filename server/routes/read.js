const router = require('express').Router()
   const client = require('../controller/client')

router.get('/',async (req, res) =>{
   const sess = req.session
   if(sess.username){
      const username = sess.username
      console.log(username)
         const collection = client.db("diary").collection("notes");
         const result = await collection.find({user:username}).toArray()
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
      }else{
         res.send('invalid user')
         console.log('User authentication required')
      }
      
})

module.exports = router

