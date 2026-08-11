import express, { Application, Request, Response } from "express";
import v1Routes from "./api/v1/routes.js";

const app: Application = express();
app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.use("/api/v1", v1Routes);

export default app;
