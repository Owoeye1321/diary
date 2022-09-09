require('../controller/client')
const router = require('express').Router()
   const ObjectId = require('mongodb').ObjectId;
    const create = require('../model/createModel')

router.post('/',async (req, res) =>{
    if(req.body.username && req.body.updateId){
      //  console.log(req.body)
        const updateId = req.body.updateId
        const body = req.body.body
            const updatingData = await create.updateOne({_id:ObjectId(updateId)},{$set:{body:body}})
            if(updatingData){
                res.json('success')
                console.log('The data has been updated successfully',updatingData)
            }else{
                res.send('Error')
                console.log('An error has occured in updating the file')
            }
           
    }else{
        console.log('No username or updating id to update')
    }    
})


router.get('/',(req, res)=>{
    res.send('hello world')
})


module.exports = router

