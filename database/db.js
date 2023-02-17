import mongoose from "mongoose";

// Connecting to mongodb (refer_book_db)
export const connectDatabase = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/refer_book_db");
        console.log("MongoDB is connected");
    } catch (err) {
        console.log(err);
    }
};
