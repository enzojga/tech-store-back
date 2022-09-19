import express from 'express';
import cors from 'cors';
import router from './Routes/indexRoutes.js';
import { getProducts,getProductsById } from './controllers/productControler.js';
const app = express();

app.use(cors());
app.use(express.json());

app.use(router);
productRouter.get("/idProduct/:id", getProductsById);
productRouter.get("/getProduct", getProducts);

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
