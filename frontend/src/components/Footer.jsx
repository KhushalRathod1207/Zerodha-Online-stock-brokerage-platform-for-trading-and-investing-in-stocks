import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#fbfbfb] border-t border-gray-200 font-inter">
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                {/* Logo + Social */}
                <div>
                    <img
                        src="https://zerodha.com/static/images/logo.svg"
                        alt="Zerodha"
                        className="h-6 mb-3"
                    />
                    <p className="text-sm text-gray-600 mb-1">© 2010 - 2025, Zerodha Broking Ltd.</p>
                    <p className="text-sm text-gray-600 mb-3">All rights reserved.</p>

                    <div className="flex gap-3 mt-3">
                        {[
                            "facebook-f",
                            "instagram",
                            "linkedin-in",
                            "twitter",
                            "youtube",
                            "whatsapp",
                            "telegram",
                        ].map((icon, i) => (
                            <i
                                key={i}
                                className={`fa-brands fa-${icon} text-gray-600 hover:text-blue-600 cursor-pointer transition-colors`}
                            ></i>
                        ))}
                    </div>
                </div>

                {/* Account */}
                <div>
                    <h6 className="text-gray-800 font-semibold mb-3">Account</h6>
                    <ul className="space-y-2 text-sm">
                        {[
                            "Open demat account",
                            "Minor demat account",
                            "NRI demat account",
                            "Commodity",
                            "Dematerialisation",
                            "Fund transfer",
                            "MTF",
                            "Referral program",
                        ].map((link, i) => (
                            <li key={i}>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-blue-600 hover:underline transition"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h6 className="text-gray-800 font-semibold mb-3">Support</h6>
                    <ul className="space-y-2 text-sm">
                        {[
                            "Contact us",
                            "Support portal",
                            "How to file a complaint?",
                            "Status of your complaints",
                            "Bulletin",
                            "Circular",
                            "Z-Connect blog",
                            "Downloads",
                        ].map((link, i) => (
                            <li key={i}>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-blue-600 hover:underline transition"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h6 className="text-gray-800 font-semibold mb-3">Company</h6>
                    <ul className="space-y-2 text-sm">
                        {[
                            "About",
                            "Philosophy",
                            "Press & media",
                            "Careers",
                            "Zerodha Cares (CSR)",
                            "Zerodha.tech",
                            "Open source",
                        ].map((link, i) => (
                            <li key={i}>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-blue-600 hover:underline transition"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h6 className="text-gray-800 font-semibold mb-3">Quick links</h6>
                    <ul className="space-y-2 text-sm">
                        {[
                            "Upcoming IPOs",
                            "Brokerage charges",
                            "Market holidays",
                            "Economic calendar",
                            "Calculators",
                            "Markets",
                            "Sectors",
                        ].map((link, i) => (
                            <li key={i}>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-blue-600 hover:underline transition"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
