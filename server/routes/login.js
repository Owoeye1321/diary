if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
 const express = require('express')
 const router = express.Router()
  const User = require('../models/users')
 router.post('/',(req,res)=>{
     
     const username = req.body.username
     const password = req.body.password

    const uri = process.env.ATLAS_URI
    const client = new MongoClient(uri);
        async function run(){
    try {
      await client.connect();
      const database = client.db('diary');
      const user = new User({
        username,
        password
      })
      const response = database.collection(user);
       
        const result = response.save()
        if(result)console.log(result)
         
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

    res.send('hello login')
})
module.exports = router