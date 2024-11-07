import {User} from "../Db/index.js"

export const getAlluser=async()=>{
    const result=await User.find()
    return result
}
export const getuserByid=async(id)=>{
    const result=await User.find({id:id})
    return result
}

export const createuser=async({id,name,age,email,familya})=>{
    const result=User({id,name,age,email,familya})
    result.save()
    return "User yaratildi"
}
export const deleteuser=async(id)=>{
    await User.deleteOne({id:id})
    return "User o'chirildi"
}

export const updateuser=async({id,name,age,email,familya})=>{
    await User.updateOne({id:id},{name:name,email:email,familya:familya,age:age})
    return "User Yangilandi"
}