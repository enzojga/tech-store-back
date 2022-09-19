import express from 'express';
import cors from 'cors';
import router from './Routes/indexRoutes.js';
import productRouter from './routes/productsRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);
app.use(productRouter);

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
