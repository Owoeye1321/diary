const router = require('express').Router()
   const create = require('../model/createModel')

router.post('/',async (req, res) =>{
   if(req.body.username !== null){
      console.log('working happy')
      console.log(req.body.username)
      const username = req.body.username
      const findingUserNotes = await create.find({user:username})
      if(findingUserNotes){
         res.json(findingUserNotes)
         console.log('The data has been sent to the frontend')
      }else{
         res.send('error')
         console.log('An error has occured')
      }
      }else{
         res.send('failed')
         console.log('User authentication required')
      }
      
})

module.exports = router

