import expressAsyncHandler from "express-async-handler";
import { Auth } from "../model/Auth.js";

export const getAllUsers = expressAsyncHandler(async (req, res) => {
  const response = await Auth.find().select("-password");
  res.json(response);
});
