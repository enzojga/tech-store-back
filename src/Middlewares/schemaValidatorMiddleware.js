export function validateSchema(schema) {
 
  return (req, res, next) => {
    const validation = schema.validate((req.body),{abortEarly:false});
    console.log('passei da validação de schema')
    if (validation.error) {
      return res.sendStatus(422);
    }
    next();
  }
	
}