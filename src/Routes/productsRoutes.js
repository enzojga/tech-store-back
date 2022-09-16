import { Router } from "express";
import { creatProduct, getProducts } from "../Controllers/productsControllers.js";


const productRouter = Router();
productRouter.post("/creatProduct", creatProduct);
productRouter.get("/getProduct", getProducts);

export default productRouter;