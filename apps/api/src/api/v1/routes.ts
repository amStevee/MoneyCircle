import express, { Router } from "express";
import waitingListRouter from "../../modules/waiting-list/routes.js";

const router: Router = express.Router();

// Mount waiting-list routes under /api/v1/waiting-list
router.use("/waiting-list", waitingListRouter);

export default router;
