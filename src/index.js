import express from 'express';
import cors from 'cors';
import router from './Routes/indexRoutes.js';
import db from './database/db.js';
const app = express();

app.use(cors());
app.use(express.json());

app.use(router);
productRouter.get("/idProduct/:id", async (req, res) => {
    try {

        const product = await db.collection("products").findOne({ productId: Number(req.params.id) });
        console.log(product)
        res.send(product);

    } catch (err) {

        console.log(err);
    }
});
productRouter.get("/getProduct", async (req, res) => {
    try {

        const products = await db.collection("products").find({}).toArray();
        res.send(products);

    } catch (err) {

        console.log(err);
    }
}
);

console.log("Heroku");
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
