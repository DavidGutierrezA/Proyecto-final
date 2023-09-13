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
    tamano: { type: String, default: "default" },
    actividad_fisica: { type: String, default: "default" },
    plan: [planShcema],
  },
  { _id: false }
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
  perro: [perroSchema],
});

if (userSchema.perro===undefined) { userSchema.perro='default'
  
}
if (perroSchema.plan===undefined) { perroSchema.plan='default'
  
}

export default mongoose.model("usuarios", userSchema);
