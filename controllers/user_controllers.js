import { User } from "../database/schemas/user_schema.js";

// Get register page
export const getUserRegister = async (req, res) => {
    res.render("user_register.ejs", { registerErr: "" });
};

// Register a new user and save it to database
export const userRegister = async (req, res) => {
    let { fullName, email, password } = req.body;
    fullName = fullName.split(" ");
    // Finding an existing user with provided email address
    const existingUser = await User.find({ email });
    if (existingUser) res.status(403).render("user_register.ejs", { registerErr: "User already exists." });
    // Create a new user if above validations are success
    const newUser = await User.create({
        full_name: { first_name: fullName[0], last_name: fullName.slice(-1)[0] },
        email,
        password,
    }).catch((err) => {
        console.log(err);
    });
    // Send an user verification email to created user email
    const createdUserEmail = newUser.email;
};
