import mongoose from "mongoose";

// Subject schema
const subjectSchema = new mongoose.Schema({
    subject_name: {
        type: String,
        required: true,
    },
});

export const Subject = mongoose.model("Subject", subjectSchema);
