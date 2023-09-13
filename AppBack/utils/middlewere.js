import { response } from "express";
import  jwt  from "jsonwebtoken";
const checkToken = (require,response,next)=>{
    console.log ('estas en el middleware');
    if(!require.headers['autorizado']){return response.json({ error: 'incluya la cabezera y el token'})}

try {
    const token = require.headers['autorizado']
jwt.verify(token,'TOKEN')

next();
    
} catch (error) { return response.json({error: 'verifica el token'})
    
}
    
   
}
export default checkToken;