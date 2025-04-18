import express, { Request, Response } from 'express';
import authRouter from './src/auth/auth.router';
import cors from 'cors';

export const app = express();

app.use(express.json());
app.use(cors({credentials:true,origin:['https://nextjs-jwt-cookie-auth.vercel.app']}))
 
app.use('/auth', authRouter);

app.get('/status',(req:Request,res:Response)=>{
    res.status(200).json({data:'All systems good.',error:null})
})



