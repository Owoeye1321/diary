const router = require('express').Router()
   const client = require('../controller/client')   
      router.post('/',async (req, res) =>{
      const sess = req.session
         const title = req.body.details.title
        const body = req.body.details.body
      const user = sess.username
   if(user){
             const collection = client.db("diary").collection("notes");
          const result = await collection.insertOne({title:title, body:body, user:user})
        if(result){
            console.log('data saved successfully')
               res.send('success')
        }else{
           console.log('An error has occured')
         res.send('error')
        }
       

   }else{
      console.log('Authentication required')
   }



})

module.exports = router