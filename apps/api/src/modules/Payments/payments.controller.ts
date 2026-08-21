import type { Request, Response } from "express";
import { paymentsService } from "./payments.service.js";

class PaymentsController {
  async getPayments(req: Request, res: Response) {
    try {
      return res
        .status(200)
        .json(await paymentsService.getPayments(req.userId!));
    } catch (error) {
      return res.status(500).json({ message: "Unable to load payments" });
    }
  }

  async getPayment(req: Request, res: Response) {
    try {
      return res
        .status(200)
        .json(
          await paymentsService.getPayment(
            req.userId!,
            req.params.id as string,
          ),
        );
    } catch (error: any) {
      return res
        .status(error?.message === "Payment not found" ? 404 : 500)
        .json({
          message: error?.message ?? "Unable to load payment",
        });
    }
  }

  async getDueContributions(req: Request, res: Response) {
    try {
      return res
        .status(200)
        .json(await paymentsService.getDueContributions(req.userId!));
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Unable to load due contributions" });
    }
  }

  async initializeContributionPayment(req: Request, res: Response) {
    try {
      return res
        .status(201)
        .json(
          await paymentsService.initializeContributionPayment(
            req.userId!,
            req.body,
          ),
        );
    } catch (error: any) {
      const status =
        error?.message === "Payment provider is not configured" ? 503 : 400;
      return res
        .status(status)
        .json({ message: error?.message ?? "Unable to initialize payment" });
    }
  }

  async paystackWebhook(req: Request, res: Response) {
    try {
      if (!req.bodyRaw) {
        return res.status(400).send("Raw request body is missing");
      }

      const signature = req.header("x-paystack-signature");

      if (!signature) {
        return res.status(401).send("Unauthorized");
      }

      await paymentsService.handlePaystackWebhook(
        signature,
        req.bodyRaw.toString("utf8"),
        req.body,
      );

      return res.status(200).send("OK");
    } catch (error: any) {
      const status =
        error?.message === "Unauthorized" ||
        error?.message === "Invalid signature"
          ? 401
          : 500;

      return res
        .status(status)
        .send(error?.message ?? "Webhook processing failed");
    }
  }
}

const paymentsController = new PaymentsController();
export { PaymentsController, paymentsController };
