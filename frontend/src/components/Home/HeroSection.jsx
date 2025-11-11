import React from "react";

function HeroSection() {
    return (
        <section className="max-w-[1100px] mx-auto py-16 text-center bg-white">
            <div className="mb-6">
                <img
                    src="/homeHero.png"
                    alt="Hero"
                    className="mx-auto max-h-[45vh]"
                />
            </div>

            <h1 className="text-4xl font-semibold text-gray-700 mb-3">
                Invest in everything
            </h1>

            <p className="text-lg text-gray-500 mb-6">
                Online platform to invest in stocks, derivatives, mutual funds, ETFs,
                bonds, and more.
            </p>

            <a
                href="/signup"
                className="bg-blue-600 text-white px-8 py-2 rounded-md text-lg font-medium hover:bg-blue-700 transition"
            >
                Sign up for free
            </a>
        </section>
    );
}

export default HeroSection;
