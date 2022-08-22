const router = require('express').Router()
   const create = require('../model/createModel')

router.get('/',async (req, res) =>{
   if(req.session.username){
      const username = req.session.username
      const findingUserNotes = await create.find({user:username})
      if(findingUserNotes){
         res.json(findingUserNotes)
         console.log('The data has been sent to the frontend')
      }else{
         res.send('error')
         console.log('An error has occured')
      }
      }else{
         res.send('invalid user')
         console.log('User authentication required')
      }
      
})

module.exports = router

