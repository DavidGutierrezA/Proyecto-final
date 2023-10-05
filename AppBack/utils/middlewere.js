import jwt from "jsonwebtoken";

const checkToken = (require, response, next) => {
  console.log("estas en el middleware");
  console.log(require.headers)
  if (!require.headers["autorizado"]) {
    return response.json({ error: "incluya la cabezera y el token" });   
  }
  try {
    const decoded = jwt.verify(require.headers["autorizado"], "TOKEN");
    require.user = decoded;
    console.log(require.user);
    next();
  } catch (error) {
    return response.json({ error: "Token inválido" });
  }
};
export default checkToken;
