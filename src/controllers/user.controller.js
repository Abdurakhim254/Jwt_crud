import {getAllusersmodel,getusersByidmodel,createusermodel,Updateusermodel,Deleteusermodel} from "../model/index.js"

export const getAllusersCon=async(req,res)=>{
    try {
        const result=await getAllusersmodel()
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Userlarni olib kelishda xatolik")
    }
}
export const getUserByidCon=async(req,res)=>{
    try {
        const id=+req.params.id
        const result=await getusersByidmodel(id)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Userni Id bo'yicha olib kelishda xatolik")
    }
}
export const CreateuserCon=async(req,res)=>{
    try {
        const data=req.body
        const result=await createusermodel(data)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Userni yaratishda xatolik")
    }
}

export const UpdateuserCon=async(req,res)=>{
    try {
        const id=+req.params.id
        const {name,email,familya,age}=req.body
        const result=await Updateusermodel({id,name,email,familya,age})
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Userni yangilashda xatolik")
    }
}


export const DeleteuserCon=async(req,res)=>{
    try {
        const id=+req.params.id
        const result=await Deleteusermodel(id)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Userni o'chirishda xatolik")
    }
}