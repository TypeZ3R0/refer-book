import { Router } from "express";

import { getUserRegister, userRegister } from "../controllers/user_controllers.js";

const router = Router();

<<<<<<< HEAD
router.get("/register", userRegister);
=======
router.get("/register", getUserRegister);
router.post("/register", userRegister);

>>>>>>> e0720e6fc6731e3d4c9427580aee9047e38567de
export default router;
