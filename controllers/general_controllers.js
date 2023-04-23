// Get home page
export const getHomePage = (req, res) => {
    res.render("home.ejs", { appName: "REFER BOOK" });
};

export const getProtectedRoute = (req, res) => {
    res.send("Welcome to protected route");
}
