// Importing dependencies
import passport from "passport";

// Importing local modules
import { User } from "../database/schemas/user_schema.js";
import { sendVerificationEmail } from "../auth/send_email.js";
import { createEmailString } from "../auth/strings.js";

// Register a new user and save it to database
export const getUserRegister = async (req, res) => {
    res.render("user_register.ejs", { registerErr: "" });
};

export const userRegister = async (req, res) => {
    let { firstName, lastName, email } = req.body;
    // Create a new user if above validations are success
    const newUser = await User.register(
        new User({
            email: email,
            full_name: { first_name: firstName, last_name: lastName },
            password: req.body.password,
        }),
        req.body.password
    ).catch((err) => console.log(err, "From register onRejectErr"));

    if (newUser) {
        console.log(newUser);
        res.redirect("/accounts/login");
    }
    // // Send an user verification email to created user email
    // const createdUserEmail = newUser.email;
    // const emailToken = createEmailString(newUser);
    // sendVerificationEmail(createdUserEmail, emailToken);
};

// Verify an existing user

// Login an existing user
export const getUserLogin = async (req, res) => {
    res.render("user_login.ejs", { errMessage: "" });
};

export const userLogin = async (req, res) => {
    let { email, password } = req.body;
    const foundUser = await User.findOne({ email: email }).exec()
    if (!foundUser) {
        res.status(404).render("user_login.ejs", { errMessage: "USER NOT FOUND" });
    }

    // Authenticate user
    const user = new User({
        email: email,
        password: password,
    });
    req.login(user, function (err) {
        if (err) console.log(err);
        passport.authenticate("local")(req, res, function () {
            res.redirect("/");
        });
    });
};

// Logout a user
export const userLogout = (req, res) => {
    req.logout((err) => {
        if (err) console.log(err);
        res.redirect("/");
    });
};
