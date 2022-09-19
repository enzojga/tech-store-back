import db from '../database/db.js';

async function getProducts(req, res) {
    try {

        const products = await db.collection("products").find().toArray();
        res.send(products);

    } catch (err) {

        console.log(err);
    }
}

async function getProductsById(req, res) {
    try {

        const product = await db.collection("products").findOne({productId: Number(req.params.id)});
        console.log(product)
        res.send(product);

    } catch (err) {

        console.log(err);
    }
}

export { getProducts, getProductsById }
