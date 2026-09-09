const mongoose=require("mongoose");

const linkSchema=new mongoose.Schema({
    link:{
        type:String,
        required:true,
    },
    shortId:{
        type:String,
        unique:true,
    },
});

const Link=mongoose.model("Link",linkSchema);
module.exports=Link;