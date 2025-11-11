import React from "react";

export default function OpenAccount() {
    return (
        <section className="py-20 text-center bg-white">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    Open a Zerodha account
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>
                <a
                    href="/signup"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-6 py-3 inline-block transition-colors"
                >
                    Sign Up
                </a>
            </div>
        </section>
    );
}
