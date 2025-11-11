import React from "react";

export default function StepsOpenAccount() {
    const steps = [
        "Enter the requested details",
        "Complete e-sign & verification",
        "Start investing!",
    ];

    const benefits = [
        {
            title: "Unbeatable pricing",
            desc: "Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.",
        },
        {
            title: "Best investing experience",
            desc: "Simple and intuitive trading platform with an easy-to-understand interface.",
        },
        {
            title: "No spam or gimmicks",
            desc: "Committed to transparency — no gimmicks, spam, or intrusive notifications.",
        },
        {
            title: "The Zerodha universe",
            desc: "Gain free access to the entire ecosystem of partner products.",
        },
    ];

    return (
        <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <section className="py-10 text-center bg-white">
                <h2 className="text-2xl font-semibold text-gray-700">
                    Steps to open a demat account with Zerodha
                </h2>
            </section>

            {/* Steps */}
            <section className="py-10 bg-gray-50">
                <div className="flex flex-col md:flex-row items-center gap-8 px-6">
                    <img
                        src="src/assets/images/steps-acop.svg"
                        alt="Steps illustration"
                        className="w-full md:w-1/2"
                    />

                    <div className="flex flex-col gap-5 md:w-1/2">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <span className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex justify-center items-center">
                                    {`0${idx + 1}`}
                                </span>
                                <p className="text-gray-700">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-10 bg-white px-6">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <img
                        src="src/assets/images/acop-benefits.jpg"
                        alt="Benefits"
                        className="w-full md:w-1/2 rounded-lg shadow"
                    />

                    <div className="md:w-1/2">
                        <h5 className="text-xl font-semibold mb-6 text-gray-800">
                            Benefits of opening a Zerodha demat account
                        </h5>
                        {benefits.map((item, idx) => (
                            <div key={idx} className="mb-5">
                                <h6 className="font-semibold text-gray-700">{item.title}</h6>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
