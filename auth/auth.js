// Importing dependencies
import dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import { Strategy } from "passport-local";
import passportLocalMongoose from "passport-local-mongoose";

// Local imports
import { User } from "../database/schemas/user_schema.js";

// Session middleware configuration
export const sessionConfiguration = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
};

export const useLocalStrategy = () => {
    // Creating local authentication strategy using passport-local-mongoose
    passport.use(User.createStrategy());
    // Serializing user
    passport.serializeUser((user, done) => done(null, user.id));
    // Deserializing user
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
};

// Authentication middlewares
export const isUserAuthenticated = (req, res, next) => {
    req.isAuthenticated() ? next() : res.redirect("/accounts/login");
}
