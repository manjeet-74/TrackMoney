import dotenv from "dotenv-flow";
import mongoose from "mongoose";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {
  if (!MONGO_URI) {
    throw new Error("MONGO_URI not written")
  }
  try {
    console.log(MONGO_URI)
    // mongoose.set("strictQuery", false);
    const db = await mongoose.connect(MONGO_URI);
    if (db) {
      console.log("MongoDB connected successfully!");
    } else {
      console.log("Error connecting to database");
    }
  } catch (error: unknown) {
    console.error("MongoDB connection failed: ", error);
  }
};
