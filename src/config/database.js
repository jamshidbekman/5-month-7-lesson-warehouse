import mongoose from "mongoose";

const connectDB = async () => {
  try {
    return mongoose.connect("mongodb://127.0.0.1:27017", {
      dbName: "warehouse",
    });
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDB;
