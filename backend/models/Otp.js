// models/Otp.js
const mongoose = require("mongoose");

const OTPSchema = new mongoose.Schema({
    email: { type: String, required: true },
    otpHash: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300 // auto delete after 5 min
    }
});

// ✅ Use mongoose.models to prevent model overwrite and register safely
const OTP = mongoose.models.OTP || mongoose.model("OTP", OTPSchema);

module.exports = OTP;
