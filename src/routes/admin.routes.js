import express from "express"
import {getAdminsByid,getAlladminsCon,CreateAdminCon,getUserByIdAdminCon,DeleteAdminCon,UpdateAdmincon,CreateUserAdminCon,getUserAdminCon,UpdateUserAdminCon,DeleteUserAdminCon} from "../controllers/index.js"
import {checkIdadminschema,createAdminschema,Useridcheckschema,Universalschemaforadmin,loginschema} from "../validator/index.js"
import {checkIdAdminmiddleware,createAdminMiddleware,updateAdminMiddleware,Checkuseriddleware,Createmiddlewareforadmin, loginadminmiddleware,Universalmiddlewareforadmin} from "../middlewares/index.js"

export const adminroutes=express.Router()

adminroutes.get("/user",getUserAdminCon)
adminroutes.get("/",getAlladminsCon)
adminroutes.get("/:adminId",checkIdAdminmiddleware(checkIdadminschema),getAdminsByid)
adminroutes.post("/",createAdminMiddleware(createAdminschema),CreateAdminCon)
adminroutes.put("/:adminId",updateAdminMiddleware(createAdminschema),UpdateAdmincon)
adminroutes.delete("/:adminId",checkIdAdminmiddleware(checkIdadminschema),DeleteAdminCon)
adminroutes.get("/user/:id",Checkuseriddleware(Useridcheckschema),getUserByIdAdminCon)
adminroutes.post("/user",Createmiddlewareforadmin(Universalschemaforadmin),CreateUserAdminCon)
adminroutes.post("/login",loginadminmiddleware(loginschema),CreateUserAdminCon)
adminroutes.put("/user/:id",Universalmiddlewareforadmin(Universalschemaforadmin),UpdateUserAdminCon)
adminroutes.delete("/user/:id",Checkuseriddleware(Useridcheckschema),DeleteUserAdminCon)