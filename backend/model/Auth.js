import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: [String],
    enums: ["user", "admin", "moderator"],
    default: ["user"],
  },
  password: {
    type: String,
    required: true,
  },
});

export const Auth = mongoose.model("Auth", authSchema);
