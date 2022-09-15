import express from 'express';
import cors from 'cors';
import db from './database/db.js'

const app = express();

app.use(cors());
app.use(express.json());

/* 
import express, {json} from 'express';
import cors from 'cors';
import joi from 'joi';
 */
//controllers 
import bcrypt from "bcrypt";
/* import {v4 as uuid} from "uuid"; */
/* import db from "./database/db.js"; */
/* 
// routes que fica no index
import router from "./routes/index.js"; */


/* server.use(router);
 */
/* const usersSchema = joi.object({ 
    name: joi.string().required(),
    password: joi.required(),
    email: joi.string().email({ minDomainSegments: 2, tlds:{allow: ['com','net'] }}).required()
}) */



app.post('/sign-up', async (res,req)=>{
    try{

        const user = req.body;

        const registerUser = await db.collection('users').findeOne({email: user.email})

        if(registerUser){
        return res.status(409).send('Email já está sendo utilizado')
        }
        if(user.cpf === registerUser.cpf){
        return res.status(409).send('CPF já está sendo utilizado')
        }
        const passwordHash = bcrypt.hashSync(user.password,10);
        await db.collection('users').insertOne({
            name:user.name,
            cpf: user.cpf,
            email:user.email,
            password:passwordHash
        })
        return res.status(201).send('usuário registrado com sucesso')
    }catch (error) {
        return res.status(500).send(error.message);
    }
});




const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
