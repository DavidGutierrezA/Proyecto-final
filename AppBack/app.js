


import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/api/api.js';
import perrosRoutes from './routes/api/perros.js';
import productoRoutes from './routes/api/api.js';
import connectiondb from './models/config/db.js'
import cors from 'cors'


const app = express();
const port = process.env.PORT || 8080;
app.use(cors())
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', productoRoutes)
app.use('', perrosRoutes)
dotenv.config();


app.listen(port,()=>{
        console.log("escuchando desde," , +port)
});


connectiondb();
 
