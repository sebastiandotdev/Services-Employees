import request from "supertest";
import app from "../src/app";

describe("GET", () => {
  test("should response status 200", async () => {
    const response = await request(app).get("/api").send();
    expect(response.status).toBe(200);
  });

  test("should return a error", async () => {
    const response = await request(app).get("/api/undefined").send();
    expect(response.status).toBe(500);
  });
  test("should response json", async () => {
    const response = await request(app).get("/api").send();
    expect(response.body).toBeInstanceOf(Array);
  });

  test("should response OK", async () => {
    const response = await request(app).get("/api").send();
    expect(response.ok).toBeTruthy();
  });
});
