// Importing dependencies
import express from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();

// Importing local modules
import { connectDatabase } from "./database/db.js";
import generalRoutes from "./routes/general_routes.js";
import userRoutes from "./routes/user_routes.js";
import { sessionConfiguration, useLocalStrategy } from "./auth/auth.js";

// Initializing app
const app = express();
app.use(session(sessionConfiguration));

// Connecting to database
await connectDatabase();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
useLocalStrategy();

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