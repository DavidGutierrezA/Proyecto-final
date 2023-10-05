import mongoose from "mongoose";
const productoSchema = new mongoose.Schema({
  nombre: { type: String,  },
  costo: { type: String,  },
  stock: { type: Number,  },
});

export default mongoose.model("producto", productoSchema);
