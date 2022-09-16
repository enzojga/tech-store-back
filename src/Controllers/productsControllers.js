import db from '../database/db.js';

async function creatProduct(req, res){
    try{
        console.log(req.body);
        const {description, image, price, name, category} = req.body;
        console.log(description, image, price, name, category);
        await db.collection("products").insertOne({description, image, price, name, category});
        res.sendStatus(201);
    }catch(err){
        console.log(err);
        res.sendStatus(422);
    }
}
async function getProducts(req,res){
    try{

        const products = await db.collection("products").find().toArray();
        res.send(products);

    }catch(err){

        console.log(err);
    }
}

export { creatProduct, getProducts }