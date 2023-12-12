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
      const post = (await postCollection.find().toArray()).reverse();
      res.send(post);
    })

    app.get('/user',async (req,res)=>{
      const user = await postCollection.find().toArray();
      res.send(user);
    })

    app.get('/loggedInUser',async(req,res)=>{
       const email = req.query.email;
       const user = await userCollection.find({email:email}).toArray();
       res.send(user);
    })

    app.get('/userPost',async(req,res)=>{
      const email = req.query.email;
      const post = (await userCollection.find({email:email}).toArray()).reverse();
      res.send(post);
   })
  
    app.post('/post',async (req,res)=>{
      const post=req.body;
      const result = await postCollection.insertOne(post);
      res.send(result);
    })

    app.post('/register',async (req,res)=>{
      const user=req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    })

    app.patch('/userUpdates/:email',async (req,res) =>{
      const filter = req.params;
      const profile = req.body;
      const options = { upsert:true };
      const updateDoc = {$set:Profile};
      const result = await userCollection.updateOne(filter,updateDoc,options);
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