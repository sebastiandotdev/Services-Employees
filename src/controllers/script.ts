import { Request, Response } from "express";

export const getEmployees = (req: Request, res: Response) => {
  res.json({ hello: "world" });
};
