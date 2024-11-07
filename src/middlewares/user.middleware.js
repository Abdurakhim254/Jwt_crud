export const Checkuseriddleware=(schema)=>{
    return (req, res, next) => {
        const id=+req.params.id
        const { error } = schema.validate({id});
        if (error) {
            return res.status(400).send({
                message: "Validation error",
            });
        }
        next();
    };
}
export const Checkusermiddleware=(schema)=>{
    return (req, res, next) => {
        const data=req.body
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).send({
                message: "Validation error"
            });
        }
        next();
    };
}
export const Checkuserupdatemiddleware=(schema)=>{
    return (req, res, next) => {
        const id=+req.params.id
        const data=req.body
        data["id"]=id
        const { error } = schema.validate(data);
        if (error) {
           return  res.status(400).send({
                message: "Validation error",
                data
            });
        }
        next();
    };
}
