import joi from 'joi';

const usersLoginSchema = joi.object({ 
    password: joi.required(),
    email: joi.string().email({ minDomainSegments: 2, tlds:{allow: ['com','net'] }}).required()
});

export {
    usersLoginSchema
}