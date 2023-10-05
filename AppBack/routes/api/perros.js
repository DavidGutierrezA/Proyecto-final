import express from "express";
import perroSchema from "../../models/perro.model.js";
import checkToken from "../../utils/middlewere.js";

const router = express.Router();
router.post("/crearperros",(req, res)=>{
  const{nombre,edad}= req.body;
  let propietario= req.user.usuario_id
  const perroNuevo= new perroSchema({
    nombre,
    edad,
    propietario,

  });
  perroNuevo
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

router.use(checkToken);
router.get("/perro", async (req, res) => {
  try {
    console.log(req.user)
    const userid = req.user.usuario_id;
    if (req.user.usuario_role == "normal") {
      let propietarioPerro = await perroSchema.find({ propietario: userid });
      res.json(propietarioPerro);
    } else {
      res.statusCode = 401;
      res.json({ message: "No tienes permisos" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});

export default router;
