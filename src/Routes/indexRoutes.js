import { Router } from "express";
import authRouter from "./authRoutes.js";
import checkRouter from "./checkoutRoutes.js";
import productRouter from "./productsRoutes.js"

const router = Router();
router.use(authRouter);
router.use(productRouter);
router.use(checkRouter);

export default router;
