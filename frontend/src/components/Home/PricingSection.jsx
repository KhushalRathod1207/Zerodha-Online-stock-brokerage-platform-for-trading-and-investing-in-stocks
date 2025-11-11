import React from "react";

function PricingSection() {
    const items = [
        { img: "/pricing0.svg", label: "Free account opening" },
        { img: "/pricing0.svg", label: "Free equity delivery and direct mutual funds" },
        { img: "/intradayTrades.svg", label: "Intraday and F&O" },
    ];

    return (
        <section className="max-w-[1100px] mx-auto py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="text-2xl font-medium text-gray-700 mb-4 text-center md:text-left">Unbeatable pricing</h3>
                    <p className="text-gray-600 mb-4">
                        We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.
                    </p>
                    <a href="/pricing" className="text-blue-600 hover:underline">
                        See pricing →
                    </a>
                </div>

                <div className="flex flex-wrap justify-between gap-6">
                    {items.map((item, i) => (
                        <div key={i} className="flex items-center w-[45%]">
                            <img src={item.img} alt={item.label} className="h-16 mr-3" />
                            <p className="text-gray-700 text-sm">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PricingSection;
