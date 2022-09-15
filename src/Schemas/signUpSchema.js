import joi from "joi";


const usersSchema = joi.object({ 
    name: joi.string().required(),
    password: joi.required(),
    cpf:joi.string().required(),
    email: joi.string().email({ minDomainSegments: 2, tlds:{allow: ['com','net'] }}).required()
});
const usersLoginSchema = joi.object({ 
    password: joi.required(),
    email: joi.string().email({ minDomainSegments: 2, tlds:{allow: ['com','net'] }}).required()
});
export {
    usersSchema,usersLoginSchema
}