import {createadmin,getadmin,getadminByid,updateadmin,deleteadmin} from "../service/index.js"

export const getAlladminmodel=async()=>{
    try {
        const result=await getadmin()
        if(result.length>=1){
            return result
        }else{
            return "Adminlar topilmadi"
        }
    } catch (error) {
        return "Adminlarni olib kelishda xatolik"
    }
}

export const getadminByidmodel=async(id)=>{
    try {
        const result=await getadminByid(id)
        if(result.length>=1){
            return result
        }else{
            return "Admin topilmadi"
        }
    } catch (error) {
        return "Adminlarni olib kelishda xatolik"
    }
}
export const CreateadminModel=async(data)=>{
    try {
        const result=await createadmin(data)
        return result
    } catch (error) {
        return "Adminni yaratishda xatolik"
    }
}

export const UpdateAdminmodel=async({id,adminname,admin_email,password})=>{
    try {
        const result=await updateadmin({id,adminname,admin_email,password})
        return result
    } catch (error) {
        return "Adminni yangilashda xatolik"
    }
}

export const deleteAdminModel=async(id)=>{
    try {
        const result=await deleteadmin(id)
        return result
    } catch (error) {
        return "Adminni o'chirishda xatolik"
    }
}