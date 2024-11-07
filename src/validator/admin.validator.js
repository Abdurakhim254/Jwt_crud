import Joi from "joi"
export const checkIdadminschema=Joi.object({
    id:Joi.number().integer().min(1).required()
})

export const createAdminschema=Joi.object({
    adminId:Joi.number().integer().min(1).required(),
    adminname:Joi.string().min(3).required(),
    admin_email:Joi.string().min(5).required(),
    password:Joi.string().min(3).required()
})

export const createuserByAdminschema=Joi.object({
    adminId:Joi.number().integer().min(1).required(),
    adminname:Joi.string().min(3).required(),
    admin_email:Joi.string().min(5).required(),
    password:Joi.string().min(3).required(),
    id:Joi.number().integer().min(1).required().required(),
    name:Joi.string().min(3).required(),
    familya:Joi.string().min(3).required(),
    age:Joi.number().integer().min(5).required(),
    email:Joi.string().min(5).required()
})

export const Universalschemaforadmin=Joi.object({
    admin_email:Joi.string().min(5).required(),
    password:Joi.string().min(3).required(),
    id:Joi.number().integer().min(1).required().required(),
    name:Joi.string().min(3).required(),
    familya:Joi.string().min(3).required(),
    age:Joi.number().integer().min(5).required(),
    email:Joi.string().min(5).required()
})
export const loginschema=Joi.object({
    admin_email:Joi.string().min(5).required(),
    password:Joi.string().min(3).required(),
})