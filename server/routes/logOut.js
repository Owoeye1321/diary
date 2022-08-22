const router = require('express').Router()
 router.get('/',( req, res )=>{
    if(req.session.username){
       const check =  req.session.destroy()
        if(check){
            res.send('success')
            console.log('An error has occured')
        }
    }
 })

 module.exports = router