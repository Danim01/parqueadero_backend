import { Router } from "express";
import { createVehicle, getAllVehicles, getVehicle } from "../controllers/vehiclesController.js";


const router = Router()

router.route("/")
    .post(createVehicle)
    .get(getAllVehicles)

router.get("/:id", getVehicle)

export default router