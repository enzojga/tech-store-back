import dayjs from 'dayjs';
import db from '../database/db.js';/* 
import {cart} from '../MockedData/mockedData.js'; */



export async function confirmPayment (req,res){

    try {
        console.log(res, 'RES BACKKKK')

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