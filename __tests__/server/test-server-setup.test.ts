import { Server } from "http";
import app from "../../src/app";

let server: Server;

beforeAll(async () => {
  server = app.listen(3000);
});

afterAll(() => {
  return new Promise((done) => {
    server.close(done);
  });
});

describe("server", () => {
  it("Server is running", () => {
    expect(server.listening).toBe(true);
  });
});

export { server };
