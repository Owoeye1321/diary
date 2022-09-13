const router = require ('express').Router()
// router.get('/',(req, res)=>{
//     if(req.session.username){
//         console.log(req.session)
//         res.send('success')
//     }else{
//         console.log(req.session)
//         res.send('failed')
//     }
// })

router.post('/',( req, res)=>{
    //console.log(req.body)
    if(!req.body.username){
        console.log(req.body)
        console.log('failed')
        res.send('failed')
        
    }else{
       // console.log(req.body.username)
            res.send('success')
    }
})
module.exports = router