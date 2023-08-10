const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//express
const server = express();
server.use(cors());
server.use(express.json());
//mongoose 
const mongoose = require('mongoose');
const uri = 'mongodb+srv://sathvikreddykasarla123:AkdD6vfuimv922Wh@cluster0.vqooryo.mongodb.net/college';
//connection to mongodb
mongoose.connect(uri)
  .then(() => console.log('Connected successfully to MongoDB server'))
  .catch((err) => console.error('Error connecting to MongoDB:', err))
//Schemas
const studentSchema = new mongoose.Schema({
  name: { type: String},
  rollid: { type: String }
});
const branchSchema = new mongoose.Schema({
  branch:{type:String},
  students: [studentSchema],   
});




//model
const KmitUser= mongoose.model("kmit", branchSchema);
const NgitUser= mongoose.model("ngit", branchSchema);
async function findStudentByRollId(rollId) {
  console.log("hello");
  let res=await NgitUser.find({"branch":"cse"});
  console.log(res);
  var ans={}; 
  //unwind will be creating seperate object for every member in students
  // var res=await User.aggregate([{$unwind:"$students"},{$match:{branch:"csm","students.rollid":"kmitcsm1"}},{$project:{_id:0,"students.name":1,"students.rollid":1}}]);
 console.log("done"); 
}
server.post('/fetchall',async(req,res)=>{
console.log(req.body);
let response="invalid";
if(req.body["college"]=="kmit")
{
   response=await KmitUser.find({branch:req.body["branchname"]});
}
else if (req.body['college'] == "ngit"){
response=await NgitUser.find({branch:req.body["branchname"]});
}
  let result="not found"; 
  for(const item of response){
    result=item["students"];
  }
  console.log((result));

  console.log("done"); 
  res.json(result);

 
})
server.listen(8080,()=>{
  console.log("server running at 8080");
})
// findStudentByRollId('kmitcsm1');  

// // server.post('/demo1',async(req,res)=>{
// //   const User =mongoose.model('csm',userSchema);
// //   // const dt=(req.body)["data"];
  
// //   const dataToInsert=[{name: 'ngitcsmstudent1', rollid: 'ngitcsm1'}, {name: 'ngitcsmstudent2', rollid: 'ngitcsm2'}, {name: 'ngitcsmstudent3', rollid: 'ngitcsm3'}, {name: 'ngitcsmstudent4', rollid: 'ngitcsm4'}, {name: 'ngitcsmstudent5', rollid: 'ngitcsm5'}, {name: 'ngitcsmstudent6', rollid: 'ngitcsm6'}, {name: 'ngitcsmstudent7', rollid: 'ngitcsm7'}, {name: 'ngitcsmstudent8', rollid: 'ngitcsm8'}, {name: 'ngitcsmstudent9', rollid: 'ngitcsm9'}, {name: 'ngitcsmstudent10', rollid: 'ngitcsm10'}]
// //   User.insertMany(dataToInsert)
// //   .then((result) => {
// //     console.log('Data inserted successfully', result);
// //   })
// //   .catch((err) => {
// //     console.error('Error inserting data:', err);
// //   });
// //     // Data you want to insert (an array of documents)


// //   console.log("done total")
// //   res.json("dt");
// // })
// server.post('/demo1',async(req,res)=>{
//   const data=req.body;
//   console.log(data);
//   let resu="invalid rollid"
//   try{
 
//     // if(Object.keys(data).length==2){

//     //   const branch=['csms'];
//     //   const college=['KMIT'];
//     //   // console.log("wdefrgh"); 
//     //   for(let i=0;i<college.length;i++){
//     //     await connecttodatabase(college[i]);
//     //     const userSchema = new mongoose.Schema({
//     //  name:String,
//     //  rollid:String
//     // });

//     // for(let j=0;j<branch.length;j++){
//     //   console.log(branch[j]);
//     //   const User =mongoose.model(branch[j],userSchema);
  
//     //     const query = { rollid: data['rollid'] }; // Replace 'key1' and 'value1' with your specific criteria
//     //   const response=await User.findOne(query); 
//     //   if(response!=null) {
//     //   //  res.json(response);
//     //   resu=response;
//     //     break;
//     //   }
//     //   console.log(branch[j]);
  
//     // }
  
  
//     //   }
//       // const User =mongoose.model('csm',userSchema);
  
//     // }
//     // const item=new mongoose.Schema({
//     //   name:String,
//     //   rollid:String
//     // })
//     const userSchema = new mongoose.Schema({
//       branch:String,
//       students:[{
//         name:String,
//         rollid:String
//       }]
//     });
//     const User =mongoose.model("kmit",userSchema);
//     // const db =mongoose.connect();
//     // const query = { "students.rollid":"kmitcsm1" };
//     const query = {branch:"csd"};

//     // const usersCollection = db.collection('kmit');
//     // console.log(usersCollection);
//     const response=await User.findOne(query); 
//     // const response=await usersCollection.find({});
//     console.log(response);

//   }
//   catch(error){
//     console.log(error);
//   }
// //   console.log("started for searching ");

// // // // Use findOne() to find the first document that matches the query
// // let data1="not found";
// // const response=await User.findOne(query); 
// //   if(response!=null)
// //   console.log(response['name']);
// //   console.log(data1);
// res.json("resu");
// })  
// server.listen(8080,()=>{
// console.log('server started');
// connecttodatabase();
// })

// // // server.get('/demo',(req,res)=>{
// // //     // console.log(req.body);
// // //     res.send('hello');
// // // }) 

// // server.post('/',()=>{
// //     res.send("di");
// //     // return "sdi";
// // })
// // server.post('/demo',async(req,res)=>{
// //   let user1=new User();
// //   user1.email=req.body;
// //   const  doc=await user1.save();
// //     console.log(doc);
// //     res.send('hello');
// // })
// // server.get('/demo',async(req,res)=>{
// //   let doc=await User.find({});
// //   res.json(doc);
// //   // res.json("hello");
// // })
// // server.listen(8080,()=>{
// // console.log('server started');
// // })









//delete
  // let res=await User.updateOne({"branch":"csm"},{$pull:{students:{name:"sathvik"}}})
// //insert
// let res=await User.updateOne({"branch":"csm"},{$push:{students:{name:"sathvik",rollid:"20bd1a6621"}}});
