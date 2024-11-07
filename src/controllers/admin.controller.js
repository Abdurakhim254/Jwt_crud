import {createusermodel,Updateusermodel,Deleteusermodel,getAlladminmodel,getadminByidmodel,CreateadminModel,deleteAdminModel,UpdateAdminmodel,getAllusersmodel,getusersByidmodel} from "../model/index.js"
export const getAlladminsCon=async(req,res)=>{
    try {
        const result=await getAlladminmodel()
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Adminlarni olib kelishda xatolik")
    }
}

export const getAdminsByid=async(req,res)=>{
    try {
        const id=+req.params.adminId
        const result=await getadminByidmodel(id)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Adminni Id boyicha olib kelishda xatolik")
    }
}
export const CreateAdminCon=async(req,res)=>{
    try {
        const {adminId,adminname,admin_email,password}=req.body
        const result=await CreateadminModel({adminId,adminname,admin_email,password})
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Adminni yaratishda  xatolik")

    }
}

export const DeleteAdminCon=async(req,res)=>{
    try {
        const id=+req.params.adminId
        const result=await deleteAdminModel(id)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Adminni O'chirishda xatolik")

    }
}

export const UpdateAdmincon=async(req,res)=>{
    try {
        const id=+req.params.adminId
        const {adminname,admin_email,password}=req.body
        const result=await UpdateAdminmodel({id,adminname,admin_email,password})
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Admini yangilashda xatolik")

    }
}

export const getUserAdminCon=async(req,res)=>{
    try {
        const result=await getAllusersmodel()
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Admin orqali Userlarni kelishda xatolik")

    }
}

export const getUserByIdAdminCon=async(req,res)=>{
    try {
        const id=+req.params.id
        const result=await getusersByidmodel(id)
        res.status(200).send(result )
    } catch (error) {
        res.status(400).send("Admin orqli Userni Id boyicha olib kelishda xatolik")
    }
}
export const CreateUserAdminCon=async(req,res)=>{
    try {
        const {id,name,familya,age,email}=req.body
        const result=await createusermodel({id,name,familya,age,email})
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Admin orqali user yaratishda xatolik")

    }
}


export const UpdateUserAdminCon=async(req,res)=>{
    try {
        res.status(200).send("Ok")
    } catch (error) {
        res.status(400).send("Admin orqali user yaratishda xatolik")

    }
}

export const DeleteUserAdminCon=async(req,res)=>{
    try {
        const id=req.params.id
        const result=await Deleteusermodel(id)
        res.status(200).send(result)

    } catch (error) {
        res.status(400).send("Admin orqali userni o'chirishda xatolik")

    }
}