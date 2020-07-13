const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose')
const cors=require('cors');
const Course=require('./routes')

mongoose.connect('mongodb+srv://kalpa:19970708@education-uf2ic.mongodb.net/education?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>console.log("Succesfully Connected"))
.catch((err)=>console.log(err))
//const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://kalpa:<password>@education-uf2ic.mongodb.net/<dbname>?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true });
//client.connect(err => {
//  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
 // client.close();
//});
const app=express();
app.use(cors());
app.use(bodyParser.json());

app.post('/',async(req,res,next)=>{
    
    var course=new Course(req.body);
    course.save((err,doc)=>{
        if(doc){
            res.status(200).json(doc)
        }else if(err){
            res.status(500).json("Failure")
        }
    })
    console.log(req.body)
    //res.send({name:req.body.name});
   
});
app.listen(process.env.port||4000,function(){
    console.log("Listning for request")
});