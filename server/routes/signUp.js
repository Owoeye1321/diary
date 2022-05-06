if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
const express = require('express')
const router = express.Router()
router.post('/',(req,res)=>{
    const uri = process.env.ATLAS_URI
    const client = new MongoClient(uri);
 async function run() {
    try {
      await client.connect();
      const database = client.db('diary');
      const users = database.collection('user');
      // Query for a movie that has the title 'Back to the Future'
      const query = { title: 'gtwatt' };
      const user = await movies.findOne(query);
      console.log(movie);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

    res.send('hello signup')
})
module.exports = router