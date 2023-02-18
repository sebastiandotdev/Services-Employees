import { Router } from "express";
import { getEmployees } from "../controllers/script";

const router = Router();

router.get("/", getEmployees);

export default router;
