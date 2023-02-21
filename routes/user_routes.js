import { Router } from "express";

import { userRegister } from "../controllers/user_controllers.js";

const router = Router();

router.get("/register", userRegister);
export default router;
