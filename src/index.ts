import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import { config as dotenv } from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";

dotenv();

connectDB();
const app: Application = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = 5000;

app.listen(port, () => {
  console.log("server started on port " + port);
});
