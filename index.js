const express = require('express')
const app = express();
const path = require('path');
const methodOverride= require('method-override');
const port= 8080;
const { v4: uuidv4 } = require('uuid');
const id = uuidv4();
app.use(methodOverride("_method"));
const mongoose = require('mongoose')

const chat = require("./models/schema");
app.set('view engine' , "ejs");
app.set('views' , path.join(__dirname , "views"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , "public/js")));
app.use(express.static(path.join(__dirname , "public/css")));


main().then((res)=>{
    console.log("The connection b/w server and js is Successfull");

}).catch((err)=>{
    console.log("the err which is occuring is " ,err.errors);

});
app.listen(port , function(){
    console.log("the port is now connected to the server " ,port);
})

async function main()
{
   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new chat({from:"Reyman" , to:"Masscot" , msg:"Can you send me you homeWork denial(Masscot)" , CreatedAt:new Date()});
// chat1.save().then((res)=>{
//     console.log("the data is saved successfully in the tree" , res);

// }).catch((err)=>{
//     console.log("the error is "  , err);
// })
app.get("/" , (req , res)=>{
res.send("<h1>We are On the root route");
});

app.get("/chats" , async (req , res)=>{
    console.log("this is the chats veiwign section ");
    let data =  await chat.find();
    res.render("index" , {data});
})
//NEW ROUTE
app.get("/chats/new" , async(req , res)=>{
    console.log("The the new data form");
    res.render("info");
});
//CREATE ROUTE

app.post("/chats" ,async(req ,res)=>{
    let {from , to , msg} = req.body;
    console.log(from, to  ,  msg);
    let user = new chat({from:from , to:to ,msg:msg , CreatedAt:new Date()});
    
        await user.save().then((res)=>{
            console.log(res);
        }).catch(err=>{
            console.log("thsi is the error" , err);
        });
        console.log("the data is now saved");
        res.redirect("/chats");
   
});
app.get("/chats/:id/edit", async(req ,res)=>{
    let {id}= req.params;
    console.log("Now it's time for me to update");
    let data= {};
    try{
         data = await chat.findById(id);
    }
    catch(err)
    {
        console.log("the query errr occuring  is occuring is " , err);
    }
    res.render("update" , {data});

});

 app.put("/chats/:id" , async(req , res)=>{
   let id = req.params.id;
   let {msg}= req.body;
    let data ={};  
    try{
      data = await chat.findByIdAndUpdate(id , {$set:{msg:msg}} , {new:true , runValidators:true});
      console.log(data);
    }
   catch(err)
   {
    console.log("the dbs error is " , err.errors);
   }
 res.redirect("/chats");
 })


 app.delete("/chats/:id" , async(req , res)=>{
     let id = req.params.id;
     try{
        const data = await chat.findByIdAndDelete(id);
        console.log(data , "is deleted now");
     }
     catch{
        console.log("the error is " , err);
     }
     res.redirect("/chats");
 })