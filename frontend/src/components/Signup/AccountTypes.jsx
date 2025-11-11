// src/components/Signup/AccountTypes.jsx
import React from "react";

export default function AccountTypes() {
    const accounts = [
        {
            icon: "fa-user",
            title: "Individual Account",
            text: "Invest in equity, mutual funds and derivatives",
            link: "#",
        },
        {
            icon: "fa-users",
            title: "HUF Account",
            text: "Make tax-efficient investments for your family",
            link: "#",
        },
        {
            icon: "fa-globe",
            title: "NRI Account",
            text: "Invest in equity, mutual funds, debentures, and more",
            link: "#",
        },
        {
            icon: "fa-child",
            title: "Minor Account",
            text: "Teach your little ones about money & invest for their future",
            link: "#",
        },
        {
            icon: "fa-building",
            title: "Corporate / LLP / Partnership",
            text: "Manage your business surplus and investments easily",
            link: "#",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Heading */}
                <h2 className="text-center text-3xl font-semibold text-gray-900 mb-12">
                    Explore different account types
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                    {accounts.map((acc, idx) => (
                        <a
                            key={idx}
                            href={acc.link}
                            className="group bg-white shadow-sm border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-2xl group-hover:bg-blue-100 transition">
                                <i className={`fas ${acc.icon}`}></i>
                            </div>

                            {/* Title */}
                            <h6 className="text-lg font-semibold text-gray-800 mb-2">
                                {acc.title}
                            </h6>

                            {/* Description */}
                            <p className="text-sm text-gray-500">{acc.text}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
