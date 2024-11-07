import {getAlluser,getuserByid,createuser,deleteuser,updateuser} from "../service/index.js"
export const getAllusersmodel=async()=>{
    try {
        const result=await getAlluser()
        if(result.length>=1){
            return result
        }else{
            return "Ma'lumot topilmadi"
        }
    } catch (error) {
        return "Xatolik"
    }
}
export const getusersByidmodel=async(id)=>{
    try {
        const result=await getuserByid(id)
        if(result.length>=1){
            return result
        }else{
            return "Ma'lumot topilmadi"
        }
    } catch (error) {
        return "Xatolik"
    }
}
export const createusermodel=async(data)=>{
    try {
        const result=await createuser(data)
        return result
    } catch (error) {
        return "Xatolik"
    }
    
}

export const Deleteusermodel=async(id)=>{
    try {
        const result=await deleteuser(id)
        return result
    } catch (error) {
        return "Xatolik"
    }
}

export const Updateusermodel=async(data)=>{
    try {
        const result=await updateuser(data)
        return result
    } catch (error) {
        return "Xatoli"
    }
}