// frontend/pages/Positions.jsx
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api/axios";

const Positions = () => {
    const { currentUser } = useContext(AuthContext);
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        if (!currentUser?._id) return;

        const fetchPositions = async () => {
            try {
                const res = await axios.get(
                    `/positions/${currentUser._id}`
                );
                setPositions(res.data);
            } catch (err) {
                console.error("❌ Error fetching positions:", err);
            }
        };

        fetchPositions();
        window.addEventListener("orderPlaced", fetchPositions);
        return () => window.removeEventListener("orderPlaced", fetchPositions);
    }, [currentUser]);

    return (
        <div className="px-4 py-8 sm:p-6 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-center">📊 My Positions</h2>

            {positions.length === 0 ? (
                <p className="text-gray-500 text-center text-lg">
                    No open positions yet 😅
                </p>
            ) : (
                <div className="overflow-x-auto mb-8">
                    {/* FIX: Added 'table-fixed' to ensure columns respect explicit widths */}
                    <table className="min-w-full table-fixed bg-white rounded-2xl shadow-md border text-sm sm:text-base">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700">
                                {/* FIX: Tighter width for numerical columns */}
                                <th className="py-3 px-2 w-20 text-left sm:px-6 sm:w-auto">Stock</th>
                                <th className="py-3 px-2 w-16 text-right sm:px-6 sm:w-auto">Qty</th>
                                <th className="py-3 px-2 w-20 text-right sm:px-6 sm:w-auto">Avg Price (₹)</th>
                                <th className="py-3 px-2 w-20 text-right sm:px-6 sm:w-auto">Current (₹)</th>
                                <th className="py-3 px-2 w-20 text-right sm:px-6 sm:w-auto">P/L (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {positions.map((p) => (
                                <tr
                                    key={p.stockId}
                                    className="border-b hover:bg-gray-50 transition"
                                >
                                    {/* FIX: Tighter width for numerical columns and reduced padding */}
                                    <td className="py-3 px-2 w-20 font-medium sm:px-6 sm:w-auto overflow-hidden truncate">{p.symbol}</td>
                                    <td className="py-3 px-2 w-16 text-right sm:px-6 sm:w-auto">{p.quantity}</td>
                                    <td className="py-3 px-2 w-20 text-right sm:px-6 sm:w-auto">{p.avgPrice.toFixed(2)}</td>
                                    <td className="py-3 px-2 w-20 text-right sm:px-6 sm:w-auto">{p.currentPrice.toFixed(2)}</td>
                                    <td
                                        className={`py-3 px-2 w-20 text-right font-semibold sm:px-6 sm:w-auto ${p.unrealizedPL >= 0
                                            ? "text-green-600"
                                            : "text-red-500"
                                            }`}
                                    >
                                        {p.unrealizedPL.toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Positions;