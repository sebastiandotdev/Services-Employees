import { Router } from "express";
import { getEmployees } from "../controllers/script.controllers";

const router = Router();

router.get("/", getEmployees);

export { router };
