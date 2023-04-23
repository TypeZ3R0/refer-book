// Importing dependencies
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const emailSecret = process.env.EMAIL_SECRET;

// Create user string for email verification URL
export const createEmailString = (newUser) => {
    const { _id, email } = newUser;
    const preSignedData = { userId: _id.toString(), email };
    const emailToken = jwt.sign(preSignedData, emailSecret, { expiresIn: "1d" });
    return emailToken;
};
