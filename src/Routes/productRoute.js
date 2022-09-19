import { Router } from "express";
import {getProductsById, getProducts} from "../controllers/productControler.js";


const productRouter = Router();
productRouter.get("/idProduct/:id", getProductsById);
productRouter.get("/getProduct", getProducts);

export default productRouter;