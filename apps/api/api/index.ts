// Vercel Serverless Function entry point.
//
// Unlike src/index.ts (which is only used for local dev and binds a real
// port via app.listen()), Vercel invokes this module per-request and expects
// a default-exported request handler. Exporting the Express `app` instance
// directly works because Express apps are valid (req, res) => void handlers.
//
// Every request is rewritten to this function (see ../vercel.json), so
// Express's own router still sees the original path (e.g. /health,
// /api/v1/...) and handles routing internally, exactly like in dev.
import dotenv from "dotenv";
import app from "../src/app.js";

// In dev, src/index.ts calls dotenv.config() before importing app.js. On
// Vercel, env vars are injected directly into process.env by the platform,
// so this is a harmless no-op there but keeps behavior consistent if this
// file is ever imported standalone (e.g. in tests).
dotenv.config();

export default app;