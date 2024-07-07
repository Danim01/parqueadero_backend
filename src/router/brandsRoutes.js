import { Router } from "express"
import { getAllBrands } from "../controllers/brandsController.js"

const router = Router()

router.get("/", getAllBrands)

export default router