import { Router } from "express";
import { getEmployees , saveEmployees} from "../controllers/script.controllers";

const router = Router();

router.get("/", getEmployees);
router.post("/", saveEmployees);

export { router };
