import mongoose from "mongoose";

export const connectDB = async () => {
  const conn = await mongoose.connect(process.env.mongo_url);

  console.log(conn?.connection.host);
};
