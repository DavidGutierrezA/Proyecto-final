import express, { response } from "express";
import userSchema from "../../models/users.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = express.Router();

//traer usuarios
router.get("", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/*
//voy a crear mi usuario
router.post('/users',(req, res)=>{
    const user = userSchema(req.body)
     user
     .save()
     .then((data) => res.json(data))
     .catch((error)=> res.json({message: error})) 
 });
 
 
 //crear arreglo de usuarios
 router.post('/usersMany',(req, res)=>{
     const usersData=req.body;
     userSchema.insertMany(usersData)
     .then((data) => res.json(data))
     .catch((error)=> res.json({message: error})) 
 });
 
 //listar un usuario
 router.get('/users/:id', (require, res) => {
     const { id } = require.params;
     userSchema.findById(id)
         .then((data) => res.json(data))
         .catch((error) => res.json({ message: error }));
 });
  
  //Actualiza
  router.put('/users/:id', (require, res) => {
     const { id } = require.params;
     const  { name, lastname, age} = require.body;
     userSchema.updateOne({_id:id}, {$set: {name, lastname, age}})
         .then((data) => res.json(data))
         .catch((error) => res.json({ message: error }));
 });
 //borrar
 router.delete('/users/:id', (require, res) => {
     const { id } = require.params;
     userSchema.deleteOne({_id: id})
         .then((data) => res.json(data))
         .catch((error) => res.json({ message: error }));
 });
 
 
 
 
 // HECHO POR CHATGPT, ENTENDER PRIMERO
 router.put('/users/:id/remove-age', (require, res) => {
     const { id } = require.params;
     userSchema.findByIdAndUpdate(id, { $unset: { age: 1 } })
         .then(() => res.json({ message: "Campo 'age' eliminado correctamente" }))
         .catch((error) => res.json({ message: error }));
 });
*/

// POST crear registro de usuario

router.post("/register", async (require, response) => {
  try {
    require.body.contrasena = bcrypt.hashSync(require.body.contrasena, 12);
    const userCreate = await userSchema.create(require.body);
    response.json(userCreate);
  } catch (error) {
    response.json({ error: error.message });
  }
});
// LOGIN

router.post("/login", async (require, response) => {
  const user = await userSchema.findOne({ correo: require.body.correo });
  if (!user) {
    return response.json({ error: "Revisa tu nombre de usuario y contrasena" });
  }
  const validar = bcrypt.compareSync(require.body.contrasena, user.contrasena);
  if (!validar) {
    return response.json({ error: "Revisa tu nombre de usuario y contrasena" });
  }

  response.json({
    mensaje: "Inicio de sesión exitoso",
    token: createToken(user),
  });
});

function createToken(user) {
  const payload = {
    usuario_id: user._id,
    usuario_role: user.rol,
  };
  console.log(payload)
  return jwt.sign(payload, "TOKEN");
}

export default router;

/*router.post('/login', async (require, response)=>{
    //Comprobar existencia del email
    const user = await userSchema.findOne({ email: require.body.email });
    if(!user){
        return response.json({ error: 'Error, revisa tu nombre de usuario y contraseña' })
    }

    const validar = bcrypt.compareSync(require.body.password, user.password)
    if(!validar){
        return response.json({ error: 'Error, revisa tu nombre de usuario y contraseña' })
    }

    response.json({ success: 'Has ingresado con éxito' });
});*/
