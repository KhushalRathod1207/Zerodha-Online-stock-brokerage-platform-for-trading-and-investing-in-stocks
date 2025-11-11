const User = require("../models/User");
const passport = require("passport");

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
        return res.status(400).json({ success: false, message: "All fields required" });

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ success: false, message: "Email already registered" });

    try {
        const user = new User({ name, email });
        const registeredUser = await User.register(user, password);
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: { id: registeredUser._id, name: registeredUser.name, email: registeredUser.email },
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.login = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(400).json({ success: false, message: "Invalid credentials" });

        req.logIn(user, (err) => {
            if (err) return next(err);
            return res.status(200).json({
                success: true,
                message: "Login successful",
                user: { id: user._id, name: user.name, email: user.email },
            });
        });
    })(req, res, next);
};

exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: "Logged out successfully" });
    });
};

exports.profile = (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ success: false, message: "Unauthorized" });
    res.json({ success: true, user: req.user });
};
