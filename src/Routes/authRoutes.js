import { signUp, signIn } from "../Controllers/authControllers.js";
import {Router} from 'express';
import { validateSchema } from "../Middlewares/schemaValidatorMiddleware.js";
import { usersLoginSchema, usersSchema } from "../Schemas/signUpSchema.js";


const authRouter = Router();

authRouter.post('/sign-up',validateSchema(usersSchema), signUp);
authRouter.post('/sign-in',validateSchema(usersLoginSchema), signIn);

export default authRouter;