import React from "react";

function Universe() {
    const partners = [
        {
            name: "Zerodha Fund House",
            logo: "src/assets/images/zerodhafundhouse.png",
            desc: "Creating simple and transparent index funds to help you save for your goals.",
        },
        {
            name: "Sensibull",
            logo: "src/assets/images/sensibullLogo.svg",
            desc: "Options trading platform to create strategies and analyze positions easily.",
        },
        {
            name: "Tijori",
            logo: "src/assets/images/tijori.svg",
            desc: "Investment research platform offering insights on stocks, sectors, and supply chains.",
        },
        {
            name: "Streak",
            logo: "src/assets/images/streakLogo.png",
            desc: "Create and backtest trading strategies without coding.",
        },
        {
            name: "Smallcase",
            logo: "src/assets/images/smallcaseLogo.png",
            desc: "Invest in diversified baskets of stocks or ETFs easily.",
        },
        {
            name: "Ditto",
            logo: "src/assets/images/dittoLogo.png",
            desc: "Get personalized advice on life and health insurance without spam.",
        },
    ];

    return (
        <section className="text-center py-16 max-w-6xl mx-auto px-5">
            <h2 className="text-2xl font-medium mb-3">The Zerodha Universe</h2>
            <p className="text-gray-500 mb-10">
                Extend your trading and investment experience with our partner platforms.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                {partners.map((p, i) => (
                    <div key={i} className="text-center">
                        <img src={p.logo} alt={p.name} className="h-10 mx-auto mb-3" />
                        <p className="text-sm text-gray-500">{p.desc}</p>
                    </div>
                ))}
            </div>

            <div className="mt-10">
                <a
                    href="#"
                    className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                >
                    Sign up for free
                </a>
            </div>
        </section>
    );
}

export default Universe;
