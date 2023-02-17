import { Router } from "express";

import { getUserRegister, userRegister } from "../controllers/user_controllers.js";

const router = Router();

router.get("/register", getUserRegister);
router.post("/register", userRegister);

export default router;
