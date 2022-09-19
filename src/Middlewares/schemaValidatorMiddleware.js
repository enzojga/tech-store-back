export function validateSchema(schema) {
  console.log('ENTREI NO VALIDATE')
  return (req, res, next) => {
    console.log(req.body, '************')
    console.log('cheguei na validação')
    const validation = schema.validate((req.body),{abortEarly:false});
    console.log('passei da validação de schema')
    if (validation.error) {
      return res.sendStatus(422);
    }
    next();
  }
	
}