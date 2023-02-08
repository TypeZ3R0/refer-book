// Importing npm packages
import { Router } from "express";

// Importing controllers
import { getHomePage } from "../controllers/general_controllers.js";

const router = Router();

router.get("/", getHomePage);

export default router;
