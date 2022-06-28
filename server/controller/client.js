if (process.env.NODE_ENV !== "production") require('dotenv').config();
   const uri = process.env.ATLAS_URI

const { MongoClient, ServerApiVersion } = require('mongodb');
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

        client.connect( async err => {
            console.log('mongodb database connected successfully')

        });
        client.close()


module.exports = client