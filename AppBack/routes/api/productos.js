import express from "express";
import productoSchema from "../../models/producto.model.js";
const router = express.Router();

//Mostrar productos
router.get("", (req, res) => {
  productoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post("", (req, res) => {
  const { nombre, costo, stock, descripcion } = req.body;

  // Crea una instancia del modelo Goals con los datos proporcionados
  const nuevoProducto = new productoSchema({
    nombre,
    costo,
    stock,
    descripcion
  });

  // Guarda el nuevo registro en la base de datos
  nuevoProducto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
export default router;
