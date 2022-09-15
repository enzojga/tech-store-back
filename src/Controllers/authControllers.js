
import db from '../database/db.js';
import bcrypt from 'bcrypt'
import {v4 as uuid} from "uuid";



export async function signUp(req,res){
    try{

        const user = req.body;

        const registerUser = await db.collection('users').findOne({email: user.email})

        if(registerUser){
        return res.status(409).send('Email já está sendo utilizado')
        }
        const findCpf = await db.collection('users').findOne({cpf:user.cpf})

        if(findCpf){
        return res.status(409).send('CPF já está sendo utilizado')
        }
        const passwordHash = bcrypt.hashSync(user.password,10);
        const response = await db.collection('users').insertOne({
            name:user.name,
            cpf: user.cpf,
            email:user.email,
            password:passwordHash
        })
        console.log(response,'UAHSUAHSAUSAUSHUA')
        return res.status(201).send('usuário registrado com sucesso');
    }catch (error) {
        return res.status(500).send(error.message);
    }
}

export async function signIn(req,res){
    try{

        const loginUser = req.body;

        const user = await db.collection('users').findOne({email: loginUser.email})
        const passwordValid = bcrypt.compareSync(loginUser.password, user.password);


        if(user && passwordValid){
            const token= uuid();
            await db.collection('sessions').insertOne({
                token: token,
                user: user._id
            })

            return res.status(201).send({token: token, name: user.name});
        } else {
            return res.status(404).send('email/senha inválidos')
        }

    }catch (error) {
        return res.status(500).send(error.message);
    }
}