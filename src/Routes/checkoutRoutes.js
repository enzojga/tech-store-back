
import {Router} from 'express';
import { validateSchema } from "../Middlewares/schemaValidatorMiddleware.js";
import {getCart, confirmPayment} from "../Controllers/checkoutControllers.js"
import { verifyToken } from '../Middlewares/tokenValidation.js';
import { paymentSchema } from '../Schemas/confirmPaymentSchema.js';
const checkRouter = Router();

checkRouter.get('/checkout', verifyToken, getCart);
checkRouter.post('/checkout', validateSchema(paymentSchema), verifyToken, confirmPayment);


export default checkRouter;