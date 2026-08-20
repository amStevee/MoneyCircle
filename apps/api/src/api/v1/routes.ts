import express, { Router } from "express";
import waitingListRouter from "../../modules/waiting-list/waitingList.routes.js";
import authRouter from "../../modules/Auth/auth.routes.js"

const router: Router = express.Router();

// Mount waiting-list routes under /api/v1/waiting-list
router.use("/waiting-list", waitingListRouter);
// Mount auth routes under /api/v1/auth
router.use("/auth", authRouter);

export default router;
