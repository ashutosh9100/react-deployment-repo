const express =require('express');
const mongoose =require('mongoose');
const deployments=require('./routes/api/deployments');
const  cors =require('cors');
const bodyparser=require('body-parser');
var app=express();

//getting db config 1
const mongoURI: "mongodb+srv://user1:user1@cluster0-ay2zz.mongodb.net/test";
const db = process.env.MONGODB_URI|| mongoURI;
// port 2
const port=process.env.PORT||5000;
app.use(cors())
app.use(bodyparser.json())
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  app.use('/',deployments);

  if(process.env.NODE_ENV==='production'){
      app.use(express.static('client/build'))
  }

app.listen(port);


/*
{
    "_id": "5ebd5fc458b206264c524bcc",
    "url": "abc.com",
    "templateName": "templateName1",
    "versionNo": "1.0.0",
    "__v": 0
}
*/
