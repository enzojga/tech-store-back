import joi from "joi";


const usersSchema = joi.object({ 
    name: joi.string().required(),
    password: joi.required(),
    cpf:joi.string().required(),
    email: joi.string().email({ minDomainSegments: 2, tlds:{allow: ['com','net'] }}).required()
});

export async function validateUser(req, res, next) {
	const validation = usersSchema.validate(req.body);

  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}