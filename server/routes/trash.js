const router = require('express').Router()
   const ObjectId = require('mongodb').ObjectId;
   const create = require('../model/createModel')

router.post('/',async (req, res) =>{

    if(req.session.username){
      console.log(req.body)
      const getId = req.body.trashingId
         const deletingData = await create.deleteOne({_id:ObjectId(getId)})
         if(deletingData){
            res.send('success')
            console.log('The data has been deleted successfully')
         }else{
            res.send('error')
            console.log('The data could not be deleted')
         }
    }
})


router.get('/',(req, res)=>{
    res.send('hello world')
})


module.exports = router

