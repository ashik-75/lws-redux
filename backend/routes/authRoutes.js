import { Router } from "express";
import {
  loginController,
  refreshToken,
  registerController,
} from "../controllers/authController.js";

const authRouter = Router();

authRouter.route("/login").post(loginController);
authRouter.route("/register").post(registerController);
authRouter.route("/refresh").post(refreshToken);

export default authRouter;
