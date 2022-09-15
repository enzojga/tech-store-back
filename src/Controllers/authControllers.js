
import db from '../database/db.js';
import bcrypt from 'bcrypt'

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