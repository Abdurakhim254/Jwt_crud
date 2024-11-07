import express from "express"
import {getAllusersCon,getUserByidCon,CreateuserCon,UpdateuserCon,DeleteuserCon} from "../controllers/index.js"
import {Usercheckschema,Useridcheckschema} from "../validator/index.js"
import {Checkuseriddleware,Checkusermiddleware,Checkuserupdatemiddleware} from "../middlewares/index.js"
export const userroutes=express.Router()

userroutes.get("/",getAllusersCon)
userroutes.get("/:id",Checkuseriddleware(Useridcheckschema),getUserByidCon)
userroutes.post("/",Checkusermiddleware(Usercheckschema),CreateuserCon)
userroutes.put("/:id",Checkuserupdatemiddleware(Usercheckschema),UpdateuserCon)
userroutes.delete("/:id",Checkuseriddleware(Useridcheckschema),DeleteuserCon)