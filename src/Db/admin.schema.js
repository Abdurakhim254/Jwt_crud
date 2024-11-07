import mongoose from "mongoose"
import {application} from "../config/index.js"
mongoose.connect(application.URI)

const Adminschema=new mongoose.Schema({
    adminId:{
        type:Number,
        required:true
    },
    adminname:{
        type:String,
        required:true 
    },
    admin_email:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true
    }
})
export const Admin=mongoose.model("admin",Adminschema)
