import mongoose from "mongoose";
const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  costo: { type: String, required: true },
  stock: { type: Number, required: true },
});

export default mongoose.model("producto", productoSchema);
