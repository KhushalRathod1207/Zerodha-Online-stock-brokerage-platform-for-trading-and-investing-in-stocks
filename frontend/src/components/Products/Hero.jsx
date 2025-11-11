import React from "react";

function Hero() {
    return (
        <section className="text-center py-16 max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Zerodha Products
            </h2>
            <p className="text-gray-500 text-lg mb-2">
                Sleek, modern, and intuitive trading platforms
            </p>
            <p>
                Check out our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                    investment offerings <i className="fas fa-arrow-right"></i>
                </a>
            </p>
            <hr className="mt-6 mx-auto border-gray-300 opacity-40 w-3/4" />
        </section>
    );
}

export default Hero;
