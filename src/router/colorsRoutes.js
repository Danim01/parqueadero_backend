import { Router } from "express";
import { getAllColors } from "../controllers/colorsController.js";

const router = Router()

router.get("/", getAllColors)

export default router