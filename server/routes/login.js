const router = require('express').Router()
const client = require('../controller/client')
router.post('/',async (req, res) =>{
   const sess = req.session
         const username = req.body.details.username
    const password = req.body.details.password

             const collection = client.db("diary").collection("user");
             const result = await collection.findOne({ username: username, password: password})
      if(result){
         sess.username = username
             res.send('success')
         console.log("user exist")
      } else {
         console.log('user does not exist')
           res.send('invalid')
      }

})

module.exports = router



