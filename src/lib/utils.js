import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
        console.log("Using exists connection")
      return
    }
    const db = await mongoose.connect("mongodb+srv://Tony:XM8tJkFVrT3IIx4A@cluster0.yfbxcio.mongodb.net/Blog?retryWrites=true&w=majority");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
