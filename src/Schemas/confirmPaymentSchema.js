import joi from 'joi';

const paymentSchema = joi.object({ 
    numberCard: joi.number().required(),
    email: joi.string().email({ minDomainSegments: 2, tlds:{allow: ['com','net'] }}).required(),
    cv:joi.number().required(),
    name:joi.string().required(),
    validateCard: joi.number().required(),
    value:joi.number().precision(2).required(),
    description: joi.string().required()
});

export {
    paymentSchema
}