import userRoutes from'./users.js'
import express  from 'express';
import productosRoutes from'./productos.js'
import perrosRoutes from'./perros.js'
import checkToken from '../../utils/middlewere.js';

const router = express.Router();
router.use('/users', userRoutes)
router.use('/productos', productosRoutes)
router.use('/perros',checkToken, perrosRoutes )

export default router;