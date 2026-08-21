import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import { paymentsController } from "./payments.controller.js";

const router:Router = Router();

router.get("/webhook/paystack", (_req, res) => res.status(200).send("OK"));
router.post("/webhook/paystack", (req, res) => paymentsController.paystackWebhook(req, res));

router.use(requireAuth);
router.get("/", (req, res) => paymentsController.getPayments(req, res));
router.get("/due", (req, res) => paymentsController.getDueContributions(req, res));
router.get("/:id", (req, res) => paymentsController.getPayment(req, res));
router.post("/contributions/initialize", (req, res) =>
  paymentsController.initializeContributionPayment(req, res),
);

export default router;
