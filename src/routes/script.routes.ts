import { Router } from "express";
import {
  getEmployees,
  saveEmployees,
  employeesById,
  updateEmployees,
  deleteEmployees,
} from "../controllers/script.controllers";

const router = Router();

router.get("/", getEmployees);
router.get("/:id", employeesById);
router.post("/", saveEmployees);
router.put("/:id", updateEmployees);
router.delete("/:id", deleteEmployees);

export { router };
