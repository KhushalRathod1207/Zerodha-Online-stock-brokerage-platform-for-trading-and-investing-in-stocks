const express = require("express");
const router = express.Router();
const User = require("../models/User");

// ✅ Get current user profile
router.get("/:userId", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ Update user profile
router.put("/:userId", async (req, res) => {
    try {
        const { name, phone, address } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            { name, phone, address },
            { new: true }
        );
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
