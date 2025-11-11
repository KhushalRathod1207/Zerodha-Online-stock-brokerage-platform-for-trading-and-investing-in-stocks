import React from "react";

export default function Investment() {
    const options = [
        {
            img: "src/assets/images/s1.svg",
            title: "Stocks",
            desc: "Invest in all exchange-listed securities",
        },
        {
            img: "src/assets/images/s2.svg",
            title: "Mutual funds",
            desc: "Invest in commission-free direct mutual funds",
        },
        {
            img: "src/assets/images/s3.svg",
            title: "IPO",
            desc: "Apply to the latest IPOs instantly via UPI",
        },
        {
            img: "src/assets/images/Sin4.svg",
            title: "Futures & options",
            desc: "Hedge and mitigate market risk through simplified F&O trading",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-6 text-center">
                {/* Heading */}
                <h3 className="text-3xl font-semibold text-gray-900 mb-12">
                    Investment options with Zerodha demat account
                </h3>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
                    {options.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-start space-x-4 max-w-md hover:bg-gray-50 transition-all duration-200 rounded-lg p-3"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-12 h-12 flex-shrink-0"
                            />
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-800 mb-1">
                                    {item.title}
                                </h6>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-12">
                    <button className="bg-[#387ed1] hover:bg-[#2f6db8] text-white font-medium px-6 py-2.5 rounded transition-all duration-200">
                        Explore investments
                    </button>
                </div>
            </div>
        </section>
    );
}
