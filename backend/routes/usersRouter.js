import { Router } from "express";
import { getAllUsers } from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.route("/all").get(getAllUsers);

export default usersRouter;
