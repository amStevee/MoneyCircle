import "express";
import "node:http";

declare global {
  namespace Express {
    interface Request {
      bodyRaw?: Buffer;
    }
  }
}

declare module "node:http" {
  interface IncomingMessage {
    bodyRaw?: Buffer;
  }
}

export {};
