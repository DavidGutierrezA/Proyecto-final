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

// Borrar un producto por ID
router.delete("/:id", (req, res) => {
  const productId = req.params.id;

  // Utiliza el método findByIdAndDelete de mongoose para eliminar el producto por ID
  productoSchema
    .findByIdAndDelete(productId)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      res.json({ message: "Producto eliminado exitosamente" });
    })
    .catch((error) => res.status(500).json({ message: error }));
});



export default router;
