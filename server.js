// Importing npm packages
import express from "express";
import dotenv from "dotenv";

// Importing local modules
import generalRoutes from "./routes/general_routes.js";
import userRoutes from "./routes/user_routes.js";

dotenv.config();

// Initializing app
const app = express();

// Setting view engine (ejs)
app.set("view engine", "ejs");

// Routes middleware
app.use("/", generalRoutes);
app.use("/accounts", userRoutes);

// Listening to PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
