import express, { Application, Request, Response } from "express";
import v1Routes from "./api/v1/routes.js";
import cors from "cors";

const app: Application = express();
const corsOptions = {
  origin: "*", // Allow all origins
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow all HTTP methods
  allowedHeaders: "Content-Type,Authorization", // Allow specific headers
};
app.use(express.json());
app.use(cors(corsOptions));

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.use("/api/v1", v1Routes);

export default app;
