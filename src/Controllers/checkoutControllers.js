import dayjs from 'dayjs';
import db from '../database/db.js';
import {cart} from '../MockedData/mockedData.js';


export async function getCart(req,res){
    console.log('entrei no get cart')
    try{
        console.log('entrei no try')
        if(cart.length === 0){
            return res.status(401).send('Carrinho vazio')
        }


    console.log('vo retorna hein se liga')
        return res.status(200).send(cart)
        
    }catch(error){

    console.log('deu ruim')
        return res.sendStatus(500);
    }
}
export async function confirmPayment (req,res){

    try {

        const day = dayjs().locale('pt-br').format('DD/MM');
        const userData = req.body;
        await db.collection('payment').insertOne({
            numberCard: userData.numberCard,
            cv: userData.cv,
            cardExpiration: userData.cardExpiration,
            name: userData.name,
            value: userData.value,
            date: day
        });

        const resume = {
            status: "Compra efetuada",
            value: userData.value,
            date: day
        }
        return res.status(200).send(resume)
   } catch (error) {
       return res.sendStatus(500)
   }
}