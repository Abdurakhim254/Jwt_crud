import mongoose from "mongoose"
import {application} from "../config/index.js"
mongoose.connect(application.URI)

export const userschema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true 
    },
    familya:{
        type:String,
        required:true 
    },
    age:{
        type:Number,
        required:true
    }
})
export const User=mongoose.model("users",userschema)