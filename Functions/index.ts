import { UserModal } from "@/Models";
import mongoose from "mongoose";

//Write a function to connect to mongo DB
const MONGODB_URI = process.env.MONGODB_URI; //From .dotEnvironment
export const connectDB = async () =>
  mongoose.connect(MONGODB_URI as string).then(() => {
    console.log("Connection established");
  });

export const closeConnection = async () => mongoose.connection.close();
