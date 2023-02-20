import { Router } from "express";
import {
  getEmployees,
  saveEmployees,
  userById,
} from "../controllers/script.controllers";

const router = Router();

router.get("/", getEmployees);
router.get("/:id", userById);
router.post("/", saveEmployees);

export { router };
