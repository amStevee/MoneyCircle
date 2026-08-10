import express, { Application, Request, Response } from "express";

import { z } from "zod";
import v1Routes from "./api/v1/routes";

const app: Application = express();
app.use(express.json());

const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.use("/api/v1", v1Routes);

export default app;
