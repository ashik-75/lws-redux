import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { errorHandler } from "./middleware/errorHandle.js";
import { privateRoute } from "./middleware/protectRoute.js";
import authRouter from "./routes/authRoutes.js";
import qaRouter from "./routes/qaRoutes.js";
import usersRouter from "./routes/usersRouter.js";
import { connectDB } from "./utils/connectDB.js";

dotenv.config();
const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/qa", qaRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", privateRoute, usersRouter);

app.use(errorHandler);

app.listen(7000, () => console.log("App Listening on port 7000"));
