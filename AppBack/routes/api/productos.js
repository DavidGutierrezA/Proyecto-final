
import express from 'express';
import productoSchema from '../../models/producto.model.js'
const router = express.Router();



 //Traer datos
 router.get('',(req, res)=>{
    productoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error})) 
});

export default router;














