import jwt from "jsonwebtoken"
import {application} from "../config/index.js"

export const checkIdAdminmiddleware=(schema)=>{
    return (req,res,next)=>{
        const id=+req.params.adminId
        const {error}=schema.validate({id})
        if(error){
            return res.status(400).send("Validate Error")
        }
        next()
    }
}

export const createAdminMiddleware=(schema)=>{
    return (req,res,next)=>{
        const data=req.body
        const {error}=schema.validate(data)
        if(error){
            return res.status(400).send("Validate error")
        }
        next()
    }
}

export const updateAdminMiddleware=(schema)=>{
    return (req,res,next)=>{
        const id=req.params.adminId
        const data=req.body
        data["adminId"]=id
        const {error}=schema.validate(data)
        if(error){
            return res.status(400).send("Validate Error")
        }
        next()
    }
}

export const Createmiddlewareforadmin=(schema)=>{
    return (req,res,next)=>{
        const data=req.body
        const {error} =schema.validate(data)
        if(error){
            return res.status(400).send("Validate Error")
        }
        const token=req.headers.authorization.split(" ")[1]
        const secretkey=application.secretkey
        const validate=jwt.verify(token,secretkey,(err,decode)=>{
            if(err){
               return  res.status(400).send("Un authorization")
            }
            next()
        })
    }
}

export const loginadminmiddleware=(schema)=>{
    return (req,res,next)=>{
        const data=req.body
        const {error} =schema.validate(data)
        if(error){
            return res.status(400).send("Validate Error")
        }
        const payload=req.body.admin_email
        const secretkey=application.secretkey
        const token=jwt.sign(payload,secretkey)
        res.send(token)
        next()
    }
}
export const Universalmiddlewareforadmin=(schema)=>{
    return (req,res,next)=>{
        const id=req.params.id
        const data=req.body
        data["id"]=id
        const {error}=schema.validate(data)
        if(error){
            return res.status(400).send("Validate Error")
        }
        const token=req.headers.authorization.split(" ")[1]
        const secretkey=application.secretkey
        const validate=jwt.verify(token,secretkey,(err,decode)=>{
            if(err){
               return  res.status(400).send("Sizda authorlik huquqi mavjud emas")
            }
            next()
        })
    }
}