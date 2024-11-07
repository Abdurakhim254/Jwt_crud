import express from "express"
import {application} from "./src/config/index.js"
import {adminroutes,userroutes} from "./src/routes/index.js"
const app=express()

app.use(express.json())

app.use("/admin",adminroutes)
app.use("/user",userroutes)


app.use((req,res)=>{
    res.status(500).send("Internal Server error")
})

app.listen(application.port,()=>{
    console.log("Server running on port "+application.port)
})