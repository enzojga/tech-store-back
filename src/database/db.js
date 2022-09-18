import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI)


try {
    await mongoClient.connect();
} catch(err){
    console.error(err.message);
}

   const db = mongoClient.db("mongo");

   export default db;