import express, { Router } from "express";
import { waitingListController } from "./waitingList.controller.js";

const router:Router= express.Router();

// POST /api/v1/waiting-list/
router.post("/", (req, res) => waitingListController.join(req, res));

export default router;
