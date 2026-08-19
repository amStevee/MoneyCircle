import request from "supertest";
import app from "../src/app.js";

describe("API service", () => {
  it("returns health status", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });

  it("rejects invalid email input", async () => {
    const response = await request(app)
      .post("/waiting-list")
      .send({ email: "not-an-email" });

    expect(response.status).toBe(400);
    expect(response.body.errors.email).toBeDefined();
  });
});