const router = require ('express').Router()
router.get('/',(req, res)=>{
    if(req.session.username){
        console.log(req.session)
        res.send('success')
    }else{
        console.log(req.session)
        res.send('failed')
    }
})
module.exports = router