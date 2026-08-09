import express from "express";
import { z } from "zod";

const app: express.Express = express();
app.use(express.json());

const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/users", (req, res) => {
  const result = userSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ errors: result.error.format() });
  }

  return res.status(201).json({ user: result.data });
});

export default app;
