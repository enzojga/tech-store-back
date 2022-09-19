import express from 'express';
import cors from 'cors';
import router from './Routes/indexRoutes.js';
import productRouter from './routes/productsRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(productRouter);
app.use(router);



const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
