import mongoose from "mongoose";
import envConfig from "./envConfig.js";


const { DB_URL } = envConfig();

export const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
    });
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.log("Unable to connect to MongoDB Database!");
    console.error(error);
  }
};
