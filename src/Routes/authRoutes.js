import { signUp } from "../Controllers/authControllers.js";
import {Router} from 'express';
import { validateUser } from "../Middlewares/authMiddlewares.js";


const authRouter = Router();

authRouter.post('/sign-up',validateUser, signUp);

export default authRouter;