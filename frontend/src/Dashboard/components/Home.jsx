import React, { useState, useEffect, useContext } from "react";
import api from "../../api/axios";
import { DoughnutChart } from "../../Dashboard/components/DoughnutChart";
import { AuthContext } from "../../context/AuthContext";
import { motion } from "framer-motion";

const Home = () => {
    const { currentUser, loading } = useContext(AuthContext);
    const [holdings, setHoldings] = useState([]);
    const [orders, setOrders] = useState([]);
    const [positions, setPositions] = useState([]);
    const [funds, setFunds] = useState(null);
    const [pageLoading, setPageLoading] = useState(true);

    // ✅ Fetch All Data
    useEffect(() => {
        if (!currentUser?._id) return;

        const fetchAllData = async () => {
            try {
                const [holdingsRes, ordersRes, posRes, fundsRes] = await Promise.all([
                    api.get(`/holdings/${currentUser._id}`),
                    api.get(`/orders/${currentUser._id}`),
                    api.get(`/positions/${currentUser._id}`),
                    api.get(`/funds/${currentUser._id}`),
                ]);
                setHoldings(holdingsRes.data || []);
                setOrders(ordersRes.data || []);
                setPositions(posRes.data || []);
                setFunds(fundsRes.data || {});
            } catch (err) {
                console.error("Error loading dashboard:", err);
            } finally {
                setPageLoading(false);
            }
        };
        fetchAllData();
    }, [currentUser]);

    // ✅ Loading State
    if (loading || pageLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-3 text-gray-600 font-medium">Loading dashboard...</p>
            </div>
        );
    }

    // ✅ No User Logged In
    if (!currentUser) {
        return (
            <div className="flex justify-center items-center h-screen text-red-500 text-lg text-center px-4">
                Please login to access your dashboard.
            </div>
        );
    }

    // ✅ Chart Data
    const totalPnL = holdings.reduce((acc, s) => acc + (s?.pnl || 0), 0);
    const chartData = {
        labels: ["Profit", "Loss"],
        datasets: [
            {
                data: [
                    holdings.filter((s) => (s?.pnl ?? 0) >= 0).length,
                    holdings.filter((s) => (s?.pnl ?? 0) < 0).length,
                ],
                backgroundColor: ["#22c55e", "#ef4444"],
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center px-3 py-6 sm:px-6 md:px-10">
            <div className="w-full max-w-6xl">
                {/* 🧭 Header */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6"
                >
                    <div>
                        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
                            Hello, {currentUser?.name || "User"} 👋
                        </h1>
                        <p className="text-gray-500 text-sm">Welcome back to your dashboard</p>
                    </div>
                    <div className="mt-3 sm:mt-0 bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-semibold shadow-sm text-center">
                        Total P&L:{" "}
                        <span
                            className={`ml-1 ${totalPnL >= 0 ? "text-green-600" : "text-red-600"
                                }`}
                        >
                            ₹{totalPnL.toFixed(2)}
                        </span>
                    </div>
                </motion.div>

                {/* 📊 Summary Section */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8"
                >
                    {/* Chart */}
                    <div className="bg-white border rounded-2xl shadow-sm p-5 flex flex-col items-center hover:shadow-md transition">
                        <h2 className="text-lg font-semibold mb-3 text-gray-800">
                            Profit vs Loss
                        </h2>
                        <div className="w-40 sm:w-52 md:w-60">
                            <DoughnutChart data={chartData} />
                        </div>
                    </div>

                    {/* Profile */}
                    <div className="bg-white border rounded-2xl shadow-sm p-5 hover:shadow-md transition">
                        <h2 className="text-lg font-semibold mb-3 text-gray-800">
                            Profile Summary
                        </h2>
                        <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                            <p>
                                <strong>Name:</strong> {currentUser?.name || "N/A"}
                            </p>
                            <p>
                                <strong>Email:</strong> {currentUser?.email || "N/A"}
                            </p>
                            <p>
                                <strong>Status:</strong>{" "}
                                <span className="text-green-600 font-medium">Active</span>
                            </p>
                        </div>
                    </div>

                    {/* Funds */}
                    <div className="bg-white border rounded-2xl shadow-sm p-5 hover:shadow-md transition">
                        <h2 className="text-lg font-semibold mb-3 text-gray-800">Funds</h2>
                        {funds ? (
                            <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                                <p>
                                    <strong>Available Margin:</strong> ₹
                                    {(funds.availableMargin ?? 0).toLocaleString()}
                                </p>
                                <p>
                                    <strong>Used Margin:</strong> ₹
                                    {(funds.usedMargin ?? 0).toLocaleString()}
                                </p>
                                <p>
                                    <strong>Cash Balance:</strong> ₹
                                    {(funds.cash ?? 0).toLocaleString()}
                                </p>
                            </div>
                        ) : (
                            <p className="text-gray-500 text-sm">Loading funds...</p>
                        )}
                    </div>
                </motion.div>

                {/* 📈 Holdings */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8"
                >
                    <h2 className="text-lg font-semibold mb-3 text-gray-800">
                        📊 My Holdings
                    </h2>
                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border p-4">
                        <table className="w-full text-sm text-gray-700 min-w-[600px]">
                            <thead className="bg-blue-100 text-gray-800 uppercase text-xs">
                                <tr>
                                    <th className="px-4 py-2">Stock</th>
                                    <th className="px-4 py-2">Qty</th>
                                    <th className="px-4 py-2">Avg Price</th>
                                    <th className="px-4 py-2">Current Price</th>
                                    <th className="px-4 py-2">Profit / Loss</th>
                                </tr>
                            </thead>
                            <tbody>
                                {holdings.length > 0 ? (
                                    holdings.map((stock, idx) => (
                                        <tr
                                            key={idx}
                                            className="border-b hover:bg-gray-50 transition"
                                        >
                                            <td className="px-4 py-2 font-medium">
                                                {stock?.symbol || "N/A"}
                                            </td>
                                            <td className="px-4 py-2">{stock?.qty ?? 0}</td>
                                            <td className="px-4 py-2">
                                                ₹{(stock?.avgPrice ?? 0).toFixed(2)}
                                            </td>
                                            <td className="px-4 py-2">
                                                ₹{(stock?.currentPrice ?? 0).toFixed(2)}
                                            </td>
                                            <td
                                                className={`px-4 py-2 font-semibold ${(stock?.pnl ?? 0) >= 0
                                                        ? "text-green-600"
                                                        : "text-red-600"
                                                    }`}
                                            >
                                                ₹{(stock?.pnl ?? 0).toFixed(2)}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center py-6 text-gray-500">
                                            No holdings available
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* 🧩 Orders & Positions */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                    {/* Orders */}
                    <div className="bg-white border rounded-2xl shadow-sm p-5 hover:shadow-md transition">
                        <h2 className="text-lg font-semibold mb-3 text-gray-800">
                            Recent Orders
                        </h2>
                        {orders.length > 0 ? (
                            <ul className="text-sm text-gray-700 space-y-2">
                                {orders.slice(0, 5).map((order, idx) => (
                                    <li
                                        key={idx}
                                        className="border-b pb-2 flex justify-between items-center"
                                    >
                                        <span>{order.stockId?.symbol || "N/A"}</span>
                                        <span
                                            className={`font-semibold ${order?.type === "BUY"
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                                }`}
                                        >
                                            {order?.type}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 text-sm">No recent orders found.</p>
                        )}
                    </div>

                    {/* Positions */}
                    <div className="bg-white border rounded-2xl shadow-sm p-5 hover:shadow-md transition">
                        <h2 className="text-lg font-semibold mb-3 text-gray-800">
                            Active Positions
                        </h2>
                        {positions.length > 0 ? (
                            <ul className="text-sm text-gray-700 space-y-2">
                                {positions.slice(0, 5).map((pos, idx) => (
                                    <li
                                        key={idx}
                                        className="border-b pb-2 flex justify-between items-center"
                                    >
                                        <span>{pos?.symbol || "N/A"}</span>
                                        <span
                                            className={`font-semibold ${(pos?.pnl ?? 0) >= 0
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                                }`}
                                        >
                                            ₹{(pos?.pnl ?? 0).toFixed(2)}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 text-sm">No active positions found.</p>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
