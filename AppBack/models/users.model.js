import mongoose from "mongoose";

const planShcema = new mongoose.Schema({
  producto: { type: String, default: "default" },
  periodicidad: { type: String, default: "default" },
  cantidad: { type: Number, default: 1 },
},{_id: false}
);

const perroSchema = new mongoose.Schema(
  {
    nombre: { type: String, default: "default", required: false },
    edad: { type: Number, default: 1 }, 
  },
  
);

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    default: "normal",
  },

});

export default mongoose.model("usuarios", userSchema);
