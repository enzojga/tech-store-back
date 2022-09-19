import joi from 'joi';

const paymentSchema = joi.object({ 
    numberCard: joi.string().required(),
    cv:joi.string().required(),
    name:joi.string().required(),
    cardExpiration: joi.string().required(),
    value:joi.number().required(),
});

export {
    paymentSchema
}