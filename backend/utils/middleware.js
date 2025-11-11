

// ------------------------
// Check if user is logged in
// ------------------------
module.exports.isLoggedin = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ success: false, message: "You must be logged in" });
    }
    next();
};



// ------------------------
// Save Redirect URL (optional)
// ------------------------
module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};
