const router = require('express').Router()
   const create = require('../model/createModel')
      router.post('/',async (req, res) =>{
            console.log(req.body)
         const title = req.body.details.title
        const body = req.body.details.body
      const user = req.body.details.user

   if(user){
      console.log(user)
            const newNote = new create({
               title:title,
               body:body,
               user:user
            })
            await newNote.save().then((result)=>{

                  res.send('success')
                  console.log("The data has been saved to database", result)

            }).catch((error)=>{
               res.send('failed')
               console.log('An error has occured', error)
            })
   }else{
      console.log('Authentication required')
   }
})

module.exports = router