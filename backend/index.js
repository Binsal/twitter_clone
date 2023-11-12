const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
const { ServerApiVersion } = require('mongodb');
const { MongoClient } = require('mongodb');

app.use(cors());
app.use(express.json());

const uri="mongodb+srv://twittersaloni:twsaloni@atlascluster.pc22vt4.mongodb.net/";


const client = new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true,serverApi:ServerApiVersion.v1});

async function run(){

  try{
    await client.connect();

    const postCollection = client.db('database').collection('posts');
    const userCollection = client.db('database').collection('users');
  
  
    app.get('/post',async (req,res)=>{
      const post = await postCollection.find().toArray();
      res.send(post);
    })
  
    app.post('/post',async (req,res)=>{
      const post=req.body;
      const result = await postCollection.insertOne(post);
      res.send(result);
    })
  }

    catch(error){
      console.log(error);
    }

}run().catch(console.dir)

client.connect(err=>{
    const collection = client.db("test").collection("devices");
    console.log("connected")
    client.close();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})