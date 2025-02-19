import mongoose from "mongoose";
import "dotenv/config";

const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error(`Error connecting to database ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
