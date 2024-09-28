import mongoose from "mongoose";
const MONGO_URL = process.env.MONGO_URL;

export const conMongoDb = async () => {
  console.log("asd", MONGO_URL);
  try {
    const conn = await mongoose.connect(MONGO_URL);
    conn && console.log("mongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
