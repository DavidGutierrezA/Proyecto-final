import mongoose from "mongoose";

const connectiondb = async () => {
  await mongoose.connect(process.env.MONGODB_URI,{dbName:"test"});
  try {
    console.log("conectado exitosamente");
  } catch (err) {
    console.log("No conectado " + err);
  }
};

export default connectiondb;
