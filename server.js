// Importing npm packages
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Importing local modules
import { connectDatabase } from "./database/db.js";
import generalRoutes from "./routes/general_routes.js";
import userRoutes from "./routes/user_routes.js";


dotenv.config();

// Initializing app
const app = express();

// Connecting to database
await connectDatabase();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
