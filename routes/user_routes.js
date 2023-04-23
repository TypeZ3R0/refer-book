// Importing dependencies
import { Router } from "express";
import passport from "passport";

// Local imports
import { getUserRegister, userRegister, getUserLogin, userLogin, userLogout } from "../controllers/user_controllers.js";

const router = Router();

router.get("/register", getUserRegister);
router.post("/register", userRegister);
router.get("/login", getUserLogin);
router.post("/login", userLogin);
router.get("/logout", userLogout);

export default router;
