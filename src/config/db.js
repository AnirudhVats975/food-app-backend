import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log(`DB connection is successful. Host: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error", error);
  }
};

export default connectDB;
