const validator = require('../controller/validator')
      const router = require('express').Router()
       const userModel = require('../model/userModel')

router.post('/',async (req, res) =>{
   console.log(req.body)
      const username = req.body.details.username
     const email = req.body.details.email
   const password = req.body.details.password

   const details = {
      username:username,
          email:email,
       password:password
   }
   const validationRule ={
      "username":'required|string',
      "email" :"required|email",
      "password": "required|min:8"
  }
  validator(details, validationRule, {}, (err, status)=>{
     if(!status){
           console.log('An error has occured')
                 console.log(err)
        res.json({
           success:"false",
             message:"Invalid details",
          data:{err}
     })
     }else{
                  const signUp = new userModel({
                     username:req.body.details.username,
                     email: req.body.details.email,
                     password: req.body.details.password,
                 })
             
               //checking if a user exist
                 userModel.exists({username:username}, (err, result)=>{
                  if(result){
                     res.send('exist')
                     console.log('file exist')
                  }else{
                     console.log('file does not exist')

                     //saving to sign up page
                       signUp.save().then((result)=>{
                        res.send('success')
                           console.log('added a new profile')
                           console.log('file has been saved to database successfully')
                
                    }).catch((err)=>{
                     console.log(err)
                     res.send('invalid')
                    })
                    
                  }
                 })
                 
           
            
     }
  })
})

module.exports = router



