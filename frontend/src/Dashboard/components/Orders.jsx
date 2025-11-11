import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api/axios";
export default function Orders() {
    const { currentUser } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [filter, setFilter] = useState("ALL");

    // Fetch orders for the current user
    useEffect(() => {
        if (!currentUser?._id) return;

        const fetchOrders = async () => {
            try {
                const res = await api.get(
                    `/orders/${currentUser._id}`
                );
                setOrders(res.data);
            } catch (err) {
                console.error("❌ Error fetching orders:", err);
            }
        };

        fetchOrders();
        window.addEventListener("orderPlaced", fetchOrders);
        return () => window.removeEventListener("orderPlaced", fetchOrders);
    }, [currentUser]);

    // Helper to format date
    const formatDate = (dateStr) => {
        if (!dateStr) return "-";
        const date = new Date(dateStr);
        return date.toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    // Filtered orders
    const filteredOrders =
        filter === "ALL" ? orders : orders.filter((o) => o.type === filter);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-center">💼 My Orders</h2>

            {/* ===== FILTER TABS ===== */}
            <div className="flex justify-center gap-4 mb-6">
                {["ALL", "BUY", "SELL"].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 rounded-lg font-semibold ${filter === f
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {filteredOrders.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-10">
                    <p className="text-gray-500 text-center text-lg">
                        No orders found 😅
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredOrders.map((order) => (
                        <div
                            key={order._id}
                            className="bg-white shadow rounded-xl p-5 border transition-transform duration-200 ease-in-out hover:scale-[1.03] hover:shadow-xl flex flex-col justify-between"
                        >
                            <div className="flex justify-between items-center">
                                <h3
                                    className={`font-semibold ${order.type === "BUY" ? "text-green-600" : "text-red-500"
                                        }`}
                                >
                                    {order.type}
                                </h3>
                                <span className="text-sm text-gray-400">
                                    {formatDate(order.createdAt)}
                                </span>
                            </div>

                            <div className="mt-3">
                                <p className="text-lg font-semibold">
                                    {order.stockId?.symbol || "Unknown"}
                                </p>
                                <p className="text-gray-600">
                                    Qty: {order.quantity} | ₹{order.price?.toLocaleString() || 0}
                                </p>
                                <p className="font-bold mt-1">
                                    Total: ₹
                                    {(
                                        (order.price || 0) * (order.quantity || 0)
                                    ).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
