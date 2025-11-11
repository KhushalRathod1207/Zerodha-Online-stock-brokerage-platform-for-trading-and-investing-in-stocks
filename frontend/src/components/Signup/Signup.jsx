import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api/axios";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const { setCurrentUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const sendOtp = async () => {
        setMessage("");
        setError("");
        try {
            const res = await api.post("/otp/send-otp", { email });
            if (res.data.success) {
                setOtpSent(true);
                setMessage("OTP sent successfully to your email!");
            }
        } catch {
            setError("Failed to send OTP. Please try again.");
        }
    };

    const verifyOtp = async () => {
        setMessage("");
        setError("");
        try {
            const res = await api.post(
                "/otp/verify-otp",
                { email, otp },
                { withCredentials: true }
            );
            if (res.data.success) {
                setMessage("✅ OTP verified successfully!");
                // ✅ Update AuthContext
                setCurrentUser(res.data.user);
                navigate("/dashboard/home", { replace: true });
            } else setError("❌ Invalid OTP!");
        } catch (err) {
            setError(err.response?.data?.message || "Verification failed. Try again.");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md transform transition-all duration-300 hover:scale-[1.01]">
                <div className="flex justify-center mb-6">
                    <img
                        src="https://zerodha.com/static/images/logo.svg"
                        alt="Zerodha"
                        className="h-6"
                    />
                </div>

                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    🔐 Email Verification
                </h2>

                {message && (
                    <div className="bg-green-100 text-green-700 p-3 mb-4 rounded-md text-sm text-center">
                        {message}
                    </div>
                )}
                {error && (
                    <div className="bg-red-100 text-red-700 p-3 mb-4 rounded-md text-sm text-center">
                        {error}
                    </div>
                )}

                <label className="block mb-2 text-sm font-medium text-gray-700">
                    Email Address
                </label>
                <input
                    type="email"
                    className="border border-gray-300 rounded-lg w-full p-2.5 mb-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={otpSent}
                />

                {!otpSent ? (
                    <button
                        onClick={sendOtp}
                        className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                    >
                        Send OTP
                    </button>
                ) : (
                    <>
                        <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">
                            Enter OTP
                        </label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg w-full p-2.5 mb-4 text-gray-700 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none tracking-widest text-center"
                            placeholder="Enter 6-digit OTP"
                            maxLength={6}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <button
                            onClick={verifyOtp}
                            className="w-full bg-green-600 text-white py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300"
                        >
                            Verify OTP
                        </button>

                        <button
                            onClick={() => setOtpSent(false)}
                            className="w-full text-sm text-blue-600 mt-3 hover:underline"
                        >
                            ↻ Resend OTP
                        </button>
                    </>
                )}

                <p className="text-center text-xs text-gray-500 mt-6">
                    By continuing, you agree to Zerodha’s{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Terms & Conditions
                    </a>
                </p>
            </div>
        </div>
    );
}
