import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: new URL("../.env", import.meta.url).pathname });

const port = Number(process.env.PORT) || 4000;

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
