import React, { useState } from "react";

export default function SupportPortal() {
    const [openItems, setOpenItems] = useState([]);

    const toggleItem = (index) => {
        setOpenItems((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const faqData = [
        {
            icon: "fa-user-plus",
            title: "Account Opening",
            links: [
                "Resident individual",
                "Minor",
                "Non Resident Indian (NRI)",
                "Company, Partnership, HUF and LLP",
                "Glossary",
            ],
        },
        {
            icon: "fa-user-circle",
            title: "Your Zerodha Account",
            links: [
                "Your Profile",
                "Account modification",
                "Client Master Report (CMR) and Depository Participant (DP)",
                "Nomination",
                "Transfer and conversion of securities",
            ],
        },
        {
            icon: "fa-chart-line",
            title: "Kite",
            links: [
                "Login issues",
                "Marketwatch setup",
                "Order types",
                "Charts",
                "Mobile app guide",
            ],
        },
        {
            icon: "fa-rupee-sign",
            title: "Funds",
            links: [
                "Adding funds",
                "Withdrawing funds",
                "Fund transfer charges",
                "UPI & netbanking",
                "Settlement cycle",
            ],
        },
        {
            icon: "fa-desktop",
            title: "Console",
            links: [
                "Reports",
                "Tax P&L statements",
                "Ledger",
                "Portfolio tracking",
                "Corporate actions",
            ],
        },
        {
            icon: "fa-coins",
            title: "Coin",
            links: [
                "Mutual fund investing",
                "SIP setup",
                "Redeeming funds",
                "Switching funds",
                "Tax saving ELSS",
            ],
        },
    ];

    return (
        <div className="max-w-6xl mx-auto py-8 px-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-800">Support Portal</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
                    My tickets
                </button>
            </div>

            {/* Search */}
            <div className="relative mb-10">
                <i className="fas fa-search absolute top-1/2 left-4 text-gray-400 transform -translate-y-1/2"></i>
                <input
                    type="text"
                    placeholder="Eg: How do I open my account, How do I activate F&O..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="md:col-span-2 space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-md bg-white shadow-sm"
                        >
                            {/* Accordion Header */}
                            <div
                                onClick={() => toggleItem(index)}
                                className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50"
                            >
                                <div className="flex items-center gap-3">
                                    <i className={`fas ${item.icon} text-blue-500`}></i>
                                    <span className="font-medium text-gray-800">
                                        {item.title}
                                    </span>
                                </div>
                                <i
                                    className={`fas ${openItems.includes(index) ? "fa-chevron-up" : "fa-chevron-down"
                                        } text-gray-500`}
                                ></i>
                            </div>

                            {/* Accordion Body */}
                            {openItems.includes(index) && (
                                <div className="px-5 py-3 bg-gray-50 border-t border-gray-200">
                                    <ul className="list-disc pl-6 text-blue-600 text-sm space-y-2">
                                        {item.links.map((link, i) => (
                                            <li key={i}>
                                                <a
                                                    href="#"
                                                    className="hover:underline hover:text-blue-800 transition"
                                                >
                                                    {link}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Announcements */}
                    <div className="bg-amber-50 border border-amber-200 rounded-md p-4 text-sm">
                        <p className="font-semibold text-gray-800 mb-2">Announcements</p>
                        <ul className="space-y-2 text-gray-700">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-blue-600 hover:underline transition"
                                >
                                    Exclusion of F&O contracts on 8 securities from August 29, 2025
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-blue-600 hover:underline transition"
                                >
                                    Revision in expiry day of Index and Stock derivatives contracts
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="border border-gray-200 rounded-md overflow-hidden">
                        <div className="bg-gray-100 px-4 py-2 font-semibold text-gray-800">
                            Quick links
                        </div>
                        <ul className="divide-y divide-gray-200 text-sm">
                            {[
                                "Track account opening",
                                "Track segment activation",
                                "Intraday margins",
                                "Kite user manual",
                            ].map((link, i) => (
                                <li key={i} className="px-4 py-2">
                                    <a
                                        href="#"
                                        className="text-blue-600 hover:underline hover:text-blue-800 transition"
                                    >
                                        {i + 1}. {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
