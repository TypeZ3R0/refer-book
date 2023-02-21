import mongoose from "mongoose";

// User schema
const userSchema = new mongoose.Schema({
    full_name: {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Creating user model with user schema
export const User = mongoose.model("User", userSchema);
