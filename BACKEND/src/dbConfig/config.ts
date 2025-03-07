import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/express-mongo";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully!");
  } catch (error: unknown) {
    console.error("MongoDB connection failed: ", error);
  }
};
