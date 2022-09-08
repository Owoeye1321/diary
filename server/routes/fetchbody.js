const router = require('express').Router()
   const ObjectId = require('mongodb').ObjectId;

      const create = require('../model/createModel')

router.post('/',async (req, res) =>{
   if(req.body.username){
      console.log(req.body)
      const username = req.body.username
            create.findOne({_id:ObjectId(req.body.messageId)},( innerError , finalData)=>{
               if(!innerError){
                  res.json(finalData)
                  console.log('The data body has been sent for editing', finalData)
               }else{
                  
                  console.log('An error has occured')
               }
            })
            
   }

      
})

module.exports = router

