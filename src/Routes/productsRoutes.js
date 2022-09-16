import { Router } from "express";
import {creatProduct, getProducts} from "../controllers/productsControllers.js";


const productRouter = Router();
productRouter.post("/creatProduct", creatProduct);
productRouter.get("/getProduct", getProducts);

export default productRouter;