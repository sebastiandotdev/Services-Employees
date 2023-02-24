import { Response, Request } from "express";
import { prisma } from "../../src/connection/script.connect";
import { employeesById } from "../../src/controllers/script.controllers";

beforeAll(async () => {
  prisma.$connect();
});
afterAll(async () => {
  await prisma.$disconnect();
});
describe("OK controllers", () => {
  describe("OK  getEmployees", () => {
    test("should return an employees", async () => {
      jest
        .spyOn(prisma.user, "findMany")
        .mockRejectedValueOnce(new Error("Error de prueba"));
      prisma.user.findUnique({
        where: {
          id: 1,
        },
      });
      const req: Request = {} as Request;
      const res: Response = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      await employeesById(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "error" });
    });
  });
});
