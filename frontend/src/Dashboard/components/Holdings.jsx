import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api/axios";

export default function Holdings() {
    const { currentUser } = useContext(AuthContext);
    const [holdings, setHoldings] = useState([]);

    useEffect(() => {
        if (!currentUser?._id) return;

        const fetchHoldings = async () => {
            try {
                const res = await api.get(
                    `/holdings/${currentUser._id}`
                );
                setHoldings(res.data);
            } catch (err) {
                console.error("❌ Error fetching holdings:", err);
            }
        };

        fetchHoldings();

        window.addEventListener("orderPlaced", fetchHoldings);
        return () => window.removeEventListener("orderPlaced", fetchHoldings);
    }, [currentUser]);

    const totalValue = holdings.reduce((acc, h) => acc + h.currentValue, 0);

    return (
        <div className="px-4 py-8 sm:p-6 bg-gray-50 min-h-screen mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
                📊 My Holdings
            </h2>

            {holdings.length === 0 ? (
                <p className="text-gray-500 text-center text-lg">
                    No holdings yet 😅
                </p>
            ) : (
                <div
                    className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 rounded-xl shadow-sm border bg-white mb-8"
                    style={{ WebkitOverflowScrolling: "touch" }}
                >
                    <table className="min-w-full table-fixed border-collapse text-sm sm:text-base">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 w-20 text-left font-semibold text-gray-700 sm:p-3 sm:w-auto">
                                    Stock
                                </th>
                                <th className="p-2 w-16 text-right font-semibold text-gray-700 sm:p-3 sm:w-auto">
                                    Qty
                                </th>
                                <th className="p-2 w-20 text-right font-semibold text-gray-700 sm:p-3 sm:w-auto">
                                    Avg Price (₹)
                                </th>
                                <th className="p-2 w-20 text-right font-semibold text-gray-700 sm:p-3 sm:w-auto">
                                    Current (₹)
                                </th>
                                <th className="p-2 w-20 text-right font-semibold text-gray-700 sm:p-3 sm:w-auto">
                                    Value (₹)
                                </th>
                                <th className="p-2 w-20 text-right font-semibold text-gray-700 sm:p-3 sm:w-auto">
                                    P/L (₹)
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {holdings.map((h) => (
                                <tr
                                    key={h.stockId}
                                    className="border-t hover:bg-gray-50 transition-colors"
                                >
                                    <td className="p-2 w-20 font-medium text-gray-800 sm:p-3 sm:w-auto overflow-hidden truncate">{h.symbol}</td>
                                    <td className="p-2 w-16 text-right text-gray-700 sm:p-3 sm:w-auto">{h.quantity}</td>
                                    <td className="p-2 w-20 text-right text-gray-700 sm:p-3 sm:w-auto">
                                        {h.avgPrice.toFixed(2)}
                                    </td>
                                    <td className="p-2 w-20 text-right text-gray-700 sm:p-3 sm:w-auto">
                                        {h.currentPrice.toFixed(2)}
                                    </td>
                                    <td className="p-2 w-20 text-right text-gray-700 sm:p-3 sm:w-auto">
                                        {h.currentValue.toFixed(2)}
                                    </td>
                                    <td
                                        className={`p-2 w-20 text-right font-semibold sm:p-3 sm:w-auto ${h.profitLoss >= 0 ? "text-green-600" : "text-red-500"
                                            }`}
                                    >
                                        {h.profitLoss.toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                        <tfoot>
                            <tr className="bg-gray-100 font-semibold text-gray-800">
                                <td className="p-2 w-20 sm:p-3 sm:w-auto">Total</td>
                                <td className="p-2 w-16 sm:p-3 sm:w-auto"></td>
                                <td className="p-2 w-20 sm:p-3 sm:w-auto"></td>
                                <td className="p-2 w-20 sm:p-3 sm:w-auto"></td>
                                <td className="p-2 w-20 text-right sm:p-3 sm:w-auto">{totalValue.toFixed(2)}</td>
                                <td className="p-2 w-20 sm:p-3 sm:w-auto"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            )}
        </div>
    );
}