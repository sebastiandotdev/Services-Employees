import { server } from "./server/test-server-setup.test";
import request from "supertest";

/**
 * @description aqui probamos el servidor principal , usando la libreria de supertest
 */
describe("/", () => {
  it("should return 200 OK", async () => {
    const response = await request(server).get("/");
    expect(response.status).toBe(200);
  });

  it("should response an GET", () => {
    const response = request(server).get("/");
    expect(response.method).not.toBe("POST");
  });

  it("should return an json", () => {
    const response = request(server).get("/");
    expect(response.type("application/json")).toBeDefined();
  });
});
