//import mongoose from "mongoose";
const mongoose =require("mongoose");
const userSchema  = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required:  true,
        minLength: 8,
    }
});

module.exports=mongoose.model("User", userSchema);