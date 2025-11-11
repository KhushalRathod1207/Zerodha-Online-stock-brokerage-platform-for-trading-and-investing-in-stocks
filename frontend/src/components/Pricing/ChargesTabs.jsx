import React, { useState } from "react";

export default function ChargesTabs() {
    const [activeTab, setActiveTab] = useState("Equity");

    const data = {
        Equity: {
            headers: [
                "Equity Delivery",
                "Equity Intraday",
                "Equity F&O (Futures)",
                "Equity F&O (Options)",
            ],
            rows: [
                ["₹0", "₹20 or 0.03% (lower)", "₹20 or 0.03%", "Flat ₹20"],
                ["0.1% buy & sell", "0.025% on sell", "0.02% on sell", "0.1% premium (sell)"],
            ],
        },
        Currency: {
            headers: ["Currency Futures", "Currency Options"],
            rows: [["₹20 or 0.03%", "₹20 or 0.03%"]],
        },
        Commodity: {
            headers: ["Commodity Futures", "Commodity Options"],
            rows: [["₹20 or 0.03%", "₹20 or 0.03%"]],
        },
    };

    return (
        <div className="max-w-6xl mx-auto py-16">
            <ul className="flex justify-center gap-4 border-b mb-6">
                {Object.keys(data).map((tab) => (
                    <li key={tab}>
                        <button
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 font-medium ${activeTab === tab
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-500 hover:text-blue-500"
                                }`}
                        >
                            {tab}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="overflow-x-auto">
                <table className="w-full text-center border border-gray-200 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            {data[activeTab].headers.map((h, i) => (
                                <th key={i} className="p-3 border">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data[activeTab].rows.map((row, i) => (
                            <tr key={i}>
                                {row.map((cell, j) => (
                                    <td key={j} className="p-3 border">{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {activeTab === "Equity" && (
                <div className="text-center mt-4">
                    <a href="#" className="text-blue-600 font-medium">
                        Calculate your costs upfront using our brokerage calculator →
                    </a>
                </div>
            )}
        </div>
    );
}
