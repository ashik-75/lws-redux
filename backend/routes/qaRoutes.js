import { Router } from "express";
import { addQA, getAllQA, getSingleQA } from "../controllers/qaControllers.js";

const qaRouter = Router();

qaRouter.route("/").get(getAllQA).post(addQA);
qaRouter.route("/:questionId").get(getSingleQA);

export default qaRouter;
