// Get home page
export const getHomePage = async (req, res) => {
    res.render("home.ejs", { appName: "REFER BOOK" });
};
