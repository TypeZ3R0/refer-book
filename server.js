// Importing npm packages
import express from "express";
import dotenv from "dotenv";

// Importing local modules
import generalRoutes from "./routes/general_routes.js";

dotenv.config();

// Initializing app
const app = express();

// Routes middleware
app.use("/", generalRoutes);

// Listening to PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
