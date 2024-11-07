import {Admin} from "../Db/index.js"

export const getadmin=async()=>{
    const result=await Admin.find()
    return result
}

export const getadminByid=async(id)=>{
    const result=await Admin.find({adminId:id})
    return result
}

export const createadmin=async(data)=>{
    try {
        const result=await Admin(data)
        result.save()
        return "Admin Yaratildi"   
    } catch (error) {
        if(error.code===11000){
            return "Bazadagi malumot bilan o'xshash malumot bor"
        }else{
            throw error
        }
    }

}
export const updateadmin=async({id,adminname,admin_email,password})=>{
    await Admin.updateOne({adminId:id},{adminname:adminname,admin_email:admin_email,password:password})
    return "Admin Yangilandi"
}


export const deleteadmin=async(id)=>{
    await Admin.deleteOne({adminId:id})
    return "Admin o'chirildi"
}
