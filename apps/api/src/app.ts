import express, { Application, Request, Response } from "express";

import { z } from "zod";

const app: Application = express();
app.use(express.json());

const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

export default app;
