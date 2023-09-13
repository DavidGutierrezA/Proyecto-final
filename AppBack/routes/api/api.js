import userRoutes from'./users.js'
import express  from 'express';
import productoRoutes from'./productos.js'
import checkToken from '../../utils/middlewere.js';

const router = express.Router();
router.use('/users', userRoutes)
router.use('/producto',checkToken,  productoRoutes)


export default router;