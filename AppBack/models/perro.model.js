import mongoose  from "mongoose"

const perroSchema = new mongoose.Schema(
    {
      nombre: { type: String, required: true },
      edad: { type: Number, required: true},
      propietario:{type:mongoose.Schema.Types.ObjectId,
        ref:'usuarios',
        require:true}
      /*tamano: { type: String, default: "default"  },
      actividad_fisica: { type: String, default: "default" },*/
      
    });

export default mongoose.model("perros", perroSchema);