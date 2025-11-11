import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api/axios";

export default function Watchlist() {
    const [watchlist, setWatchlist] = useState([]);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if (!currentUser?._id) return;

        api
            .get(`/watchlist/${currentUser._id}`)
            .then((res) => setWatchlist(res.data))
            .catch((err) => console.error("❌ Error fetching watchlist:", err));
    }, [currentUser]);

    const handleRemove = async (id) => {
        try {
            await api.delete(`/watchlist/remove/${id}`);
            setWatchlist((prev) => prev.filter((item) => item._id !== id));
        } catch (error) {
            console.error("❌ Error removing stock:", error);
        }
    };

    return (
        <div className="p-8 min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-2">
                    📈 My Watchlist
                </h2>

                {!currentUser ? (
                    <p className="text-gray-600 text-center mt-10">
                        Please log in to view your watchlist 🔐
                    </p>
                ) : watchlist.length === 0 ? (
                    <div className="flex flex-col items-center justify-center mt-16 text-gray-500">
                        <p className="text-lg">Your watchlist is empty 😔</p>
                        <p className="text-sm mt-1">
                            Add some stocks to start tracking performance.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {watchlist.map((item) => (
                            <div
                                key={item._id}
                                className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-200 p-6 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {item.stockId?.symbol || "N/A"}
                                        </h3>
                                        <span className="text-sm text-gray-500">
                                            {item.stockId?.exchange || "NSE"}
                                        </span>
                                    </div>

                                    <p className="text-2xl font-bold text-green-600 mt-2">
                                        ₹{item.stockId?.currentPrice?.toLocaleString() || "—"}
                                    </p>

                                    {item.stockId?.changePercent && (
                                        <p
                                            className={`text-sm mt-1 ${item.stockId.changePercent >= 0
                                                ? "text-green-600"
                                                : "text-red-500"
                                                }`}
                                        >
                                            {item.stockId.changePercent >= 0 ? "▲" : "▼"}{" "}
                                            {item.stockId.changePercent.toFixed(2)}%
                                        </p>
                                    )}
                                </div>

                                <button
                                    onClick={() => handleRemove(item._id)}
                                    className="mt-5 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-all"
                                >
                                    Remove from Watchlist ❌
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
