import { Router } from "express";
import {
  addQA,
  deleteQa,
  getAllQA,
  getSingleQA,
  updateQa,
} from "../controllers/qaControllers.js";

const qaRouter = Router();

qaRouter.route("/").get(getAllQA).post(addQA);
qaRouter.route("/:id").get(getSingleQA).put(updateQa).delete(deleteQa);

export default qaRouter;
