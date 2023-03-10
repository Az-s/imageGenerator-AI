import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  try {
    mongoose.connect(url);
    console.log("connected to mongo");
  } catch (err) {
    console.log("failed to connect with mongo");
    console.log(err);
  }
};

export default connectDB;