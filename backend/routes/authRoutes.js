const express = require("express");
const router = express.Router();
const { register, login, logout, profile } = require("../controllers/authController");
const { isAuthenticated } = require("../utils/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/profile", isAuthenticated, profile);
router.get("/current", (req, res) => {
    if (req.isAuthenticated()) {
        return res.status(200).json({ success: true, user: req.user });
    }
    return res.status(401).json({ success: false, message: "Not logged in" });
});
module.exports = router;
