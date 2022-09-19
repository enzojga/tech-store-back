
import {Router} from 'express';
import { validateSchema } from "../Middlewares/schemaValidatorMiddleware.js";
import { confirmPayment} from "../Controllers/checkoutControllers.js"
import { paymentSchema } from '../Schemas/confirmPaymentSchema.js';
const checkRouter = Router();

checkRouter.post('/checkout', validateSchema(paymentSchema), confirmPayment);


export default checkRouter;