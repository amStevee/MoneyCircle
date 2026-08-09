import request from "supertest";
import app from "../src/app.js";

describe("API service", () => {
  it("returns health status", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });

  it("accepts valid user data", async () => {
    const response = await request(app)
      .post("/users")
      .send({ name: "Alice", email: "alice@example.com" });

    expect(response.status).toBe(201);
    expect(response.body.user).toMatchObject({
      name: "Alice",
      email: "alice@example.com",
    });
  });

  it("rejects invalid email input", async () => {
    const response = await request(app)
      .post("/users")
      .send({ name: "Alice", email: "not-an-email" });

    expect(response.status).toBe(400);
    expect(response.body.errors.email).toBeDefined();
  });
});
