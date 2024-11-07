import Joi from "joi";

export const Usercheckschema=Joi.object({
    id:Joi.number().integer().min(1).required().required(),
    name:Joi.string().min(3).required(),
    familya:Joi.string().min(3).required(),
    age:Joi.number().integer().min(5).required(),
    email:Joi.string().min(5).required()
})


export const Useridcheckschema=Joi.object({
    id:Joi.number().integer().min(1).required(),
})