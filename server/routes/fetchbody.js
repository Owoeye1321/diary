const router = require('express').Router()
   const ObjectId = require('mongodb').ObjectId;
const { faExternalLink } = require('@fortawesome/free-solid-svg-icons');
      const create = require('../model/createModel')

router.post('/',async (req, res) =>{
   if(req.session.username){
      const username = req.session.username
      req.session.updatedId = req.body.messageId
         req.session.save((error,result)=>{
            if(!error){
               console.log('Updated id session has been saved', req.session)
            create.findOne({_id:ObjectId(req.session.updatedId)},( innerError , finalData)=>{
               if(!innerError){
                  res.json(finalData)
                  console.log('The data bod has been sent for editing', finalData)
               }else{
                  
                  console.log('An error has occured')
               }
            })
            }else{
               console.log('Unable to save session', error)
            }
            
            // const findingDateToSend = await create.findOne({_id:ObjectId(getId)})
            // if(findingDateToSend){
            //    res.json(findingDateToSend)
            //    console.log('The data bod has been sent for editing', findingDateToSend)
            // }else{
            //    res.send('error')
            //    console.log('An error has occured')
            // }
         })
   }
   // const sess = req.session
   // console.log(req.body)
   // if(sess.username){
   //    const username = sess.username
   //    console.log(username)
   //       const collection = client.db("diary").collection("notes");
   //       const getId = req.body.messageId
   //       sess.updateId = getId
   //       console.log(getId)
   //       const result = await collection.findOne({_id:ObjectId(getId)})
   //          if(result){
   //             console.log(result)
   //             res.json(result)
   //          }else{
   //             res.send('Unable to find notes with id')
   //             console.log('an error has occured')
   //          }
   //    }else{
   //       res.send('invalid user')
   //       console.log('User authentication required')
   //    }
      
})

module.exports = router

