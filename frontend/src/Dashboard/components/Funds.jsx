// frontend/pages/Funds.jsx
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";
import { DoughnutChart } from "./DoughnutChart";
import { AuthContext } from "../../context/AuthContext";

const Funds = () => {
    const { currentUser } = useContext(AuthContext);
    const [funds, setFunds] = useState(null);

    useEffect(() => {
        const fetchFunds = async () => {
            if (!currentUser?._id) return;
            try {
                const res = await api.get(`/funds/${currentUser._id}`);
                setFunds(res.data);
            } catch (err) {
                console.error("❌ Error fetching funds:", err);
            }
        };
        fetchFunds();
    }, [currentUser]);

    if (!funds) return <p className="text-center mt-6">Loading funds...</p>;

    const data = {
        labels: ["Available Margin", "Used Margin", "Cash"],
        datasets: [
            {
                data: [funds.availableMargin, funds.usedMargin, funds.cash],
                backgroundColor: ["#3B82F6", "#FACC15", "#10B981"],
                borderWidth: 2,
            },
        ],
    };

    return (
        <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-white p-5 rounded-2xl shadow-md mb-6">
                <p className="text-gray-700 font-medium text-center md:text-left mb-3 md:mb-0">
                    Instant, zero-cost fund transfers with UPI.
                </p>
                <div className="flex gap-3 flex-wrap justify-center">
                    <Link className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                        Add Funds
                    </Link>
                    <Link className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        Withdraw
                    </Link>
                </div>
            </div>

            {/* Equity Table + Chart */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Equity</h2>

                    <div className="space-y-3 min-w-[300px]">
                        {[
                            ["Available Margin", funds.availableMargin.toLocaleString(), true],
                            ["Used Margin", funds.usedMargin.toLocaleString()],
                            ["Available Cash", funds.cash.toLocaleString()],
                        ].map(([label, value, highlight], i) => (
                            <div
                                key={i}
                                className="flex justify-between text-gray-700 border-b border-gray-100 pb-2"
                            >
                                <span>{label}</span>
                                <span className={highlight ? "text-blue-600 font-medium" : ""}>
                                    ₹{value}
                                </span>
                            </div>
                        ))}
                    </div>

                    <hr className="my-4" />

                    <div className="space-y-2 text-gray-600 text-sm min-w-[300px]">
                        <p>Opening Balance: ₹{funds.openingBalance.toLocaleString()}</p>
                        <p>Payin: ₹{funds.payin.toLocaleString()}</p>
                        <p>SPAN: ₹{funds.span.toLocaleString()}</p>
                        <p>Delivery Margin: ₹{funds.deliveryMargin.toLocaleString()}</p>
                        <p>Options Premium: ₹{funds.optionsPremium.toLocaleString()}</p>
                        <p>Collateral (Equity): ₹{funds.collateral.toLocaleString()}</p>
                    </div>
                </div>

                {/* Doughnut Chart */}
                <div className="bg-white rounded-2xl shadow-md p-4 flex justify-center items-center min-h-[300px]">
                    <DoughnutChart data={data} />
                </div>
            </div>

            {/* Commodity Info */}
            <div className="bg-white p-6 rounded-2xl shadow-md text-center mt-6">
                <p className="text-gray-700 mb-4">You don't have a commodity account.</p>
                <Link className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    Open Account
                </Link>
            </div>
        </div>
    );
};

export default Funds;
