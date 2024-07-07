import { Router } from "express";
import { createUser, getAllUsers, getUser } from "../controllers/usersController.js";

const router = Router()

router.route("/")
    .post(createUser)
    .get(getAllUsers)
    
router.get("/:id", getUser)

export default router