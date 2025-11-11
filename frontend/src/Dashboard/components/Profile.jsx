import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api/axios";
export default function Profile() {
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: currentUser?.name || "",
        email: currentUser?.email || "",
        phone: currentUser?.phone || "",
        address: currentUser?.address || "",
        balance: currentUser?.balance || 0,
    });

    if (!currentUser)
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <p className="text-lg text-gray-600">Loading profile...</p>
            </div>
        );

    // ✅ Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ✅ Update profile
    const handleUpdate = async () => {
        try {
            setLoading(true);
            const res = await api.put(
                `/users/${currentUser._id}`, // ✅ fixed route
                {
                    name: formData.name,
                    phone: formData.phone,
                    address: formData.address,
                }
            );
            setCurrentUser(res.data);
            setEditMode(false);
            alert("✅ Profile updated successfully!");
        } catch (err) {
            console.error(err);
            alert("❌ Failed to update profile");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
                    👤 My Profile
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            readOnly={!editMode}
                            className={`w-full p-2 rounded-lg border focus:outline-none ${editMode
                                ? "border-blue-400 focus:ring-2 focus:ring-blue-300"
                                : "bg-gray-100 cursor-not-allowed"
                                }`}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            readOnly
                            className="w-full p-2 rounded-lg border bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone || ""}
                            onChange={handleChange}
                            readOnly={!editMode}
                            className={`w-full p-2 rounded-lg border focus:outline-none ${editMode
                                ? "border-blue-400 focus:ring-2 focus:ring-blue-300"
                                : "bg-gray-100 cursor-not-allowed"
                                }`}
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Address
                        </label>
                        <textarea
                            name="address"
                            value={formData.address || ""}
                            onChange={handleChange}
                            readOnly={!editMode}
                            rows="2"
                            className={`w-full p-2 rounded-lg border focus:outline-none ${editMode
                                ? "border-blue-400 focus:ring-2 focus:ring-blue-300"
                                : "bg-gray-100 cursor-not-allowed"
                                }`}
                        ></textarea>
                    </div>

                    {/* Balance */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Balance
                        </label>
                        <input
                            type="text"
                            value={`₹ ${formData.balance.toLocaleString()}`}
                            readOnly
                            className="w-full p-2 rounded-lg border bg-gray-100 cursor-not-allowed font-semibold text-green-600"
                        />
                    </div>

                    {/* Account Created (Optional UI Field) */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Account ID
                        </label>
                        <input
                            type="text"
                            value={currentUser._id}
                            readOnly
                            className="w-full p-2 rounded-lg border bg-gray-100 cursor-not-allowed text-gray-500"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                    {!editMode ? (
                        <button
                            onClick={() => setEditMode(true)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
                        >
                            Edit Profile
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={handleUpdate}
                                disabled={loading}
                                className={`px-6 py-2 rounded-lg text-white transition ${loading
                                    ? "bg-green-300 cursor-wait"
                                    : "bg-green-500 hover:bg-green-600"
                                    }`}
                            >
                                {loading ? "Saving..." : "Save Changes"}
                            </button>
                            <button
                                onClick={() => setEditMode(false)}
                                className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg transition"
                            >
                                Cancel
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
