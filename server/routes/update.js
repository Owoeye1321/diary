require('../controller/client')
const router = require('express').Router()
   const ObjectId = require('mongodb').ObjectId;
    const create = require('../model/createModel')

router.post('/',async (req, res) =>{

    if(req.session.username){
        const updateId = req.session.updatedId
        const body = req.body.body
            const updatingData = await create.updateOne({_id:ObjectId(updateId)},{$set:{body:body}})
            if(updatingData){
                res.json('success')
                console.log('The data has been updated successfully',updatingData)
            }else{
                res.send('Error')
                console.log('An error has occured in updating the file')
            }
           
    }      
})


router.get('/',(req, res)=>{
    res.send('hello world')
})


module.exports = router

