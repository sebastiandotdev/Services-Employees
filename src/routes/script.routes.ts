import { Router } from "express";
import {
  getEmployees,
  saveEmployees,
  employeesById,
  updateEmployees,
} from "../controllers/script.controllers";

const router = Router();

router.get("/", getEmployees);
router.get("/:id", employeesById);
router.post("/", saveEmployees);
router.put("/:id", updateEmployees);

export { router };
