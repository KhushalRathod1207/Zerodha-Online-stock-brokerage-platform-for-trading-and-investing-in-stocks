const OTP = require("../models/Otp");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const transporter = require("../config/mailer");

exports.sendOtp = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ success: false, message: "Email required" });

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpHash = await bcrypt.hash(otp, 10);

        await OTP.deleteMany({ email });
        await OTP.create({ email, otpHash, expiresAt: new Date(Date.now() + 5 * 60 * 1000) });

        await transporter.sendMail({
            from: `"Zerodha" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "Your Zerodha OTP Code",
            html: `<h2>Welcome to Zerodha!</h2><p>Your OTP is:</p><h3 style="color:#2563eb;">${otp}</h3><p>Expires in 5 minutes.</p>`
        });

        res.json({ success: true, message: "OTP sent successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to send OTP" });
    }
};

exports.verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;

        const userOtp = await OTP.findOne({ email });
        if (!userOtp)
            return res.status(400).json({ success: false, message: "OTP expired" });

        const isMatch = await bcrypt.compare(otp, userOtp.otpHash);
        if (!isMatch)
            return res.status(400).json({ success: false, message: "Incorrect OTP" });

        // ✅ Find or create user
        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ email });
        }

        // ✅ Log the user in with Passport (creates session automatically)
        req.login(user, async (err) => {
            if (err) {
                console.error("Login error:", err);
                return res.status(500).json({ success: false, message: "Login failed" });
            }

            // ✅ Remove OTP after verification
            await OTP.deleteMany({ email });

            return res.status(200).json({
                success: true,
                message: "OTP verified & logged in",
                user: { id: user._id, email: user.email },
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
