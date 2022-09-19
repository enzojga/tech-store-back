import { Router } from "express";
import authRouter from "./authRoutes.js";
import checkRouter from "./checkoutRoutes.js";

const router = Router();
router.use(authRouter);
router.use(checkRouter);

export default router;
