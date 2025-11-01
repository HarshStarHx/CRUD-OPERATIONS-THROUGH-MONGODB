const mongoose = require('mongoose');

// we don't need to define link the server
// we are just passing the schema


const ChatSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true,
        maxlength:50,
        minlength :5
    }
    ,
    to:{
        type:String,
        required:true,
        maxlength:50,
        minlength :5
    },
    msg:{
        type:String,
    },
    CreatedAt:{
        type:Date,
        required:true
    }
});


const chat = mongoose.model("chat" ,ChatSchema);

module.exports= chat;