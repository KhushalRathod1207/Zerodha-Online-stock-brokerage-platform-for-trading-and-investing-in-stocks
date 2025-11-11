import React from "react";

function EducationSection() {
    return (
        <section className="max-w-[1100px] mx-auto py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="text-center">
                    <img
                        src="/V.svg"
                        alt="Varsity"
                        className="w-full max-w-sm mx-auto"
                    />
                </div>
                <div>
                    <h3 className="text-2xl font-medium text-gray-700 mb-4">
                        Free and open market education
                    </h3>
                    <p className="text-gray-600 mb-3">
                        Varsity, the largest online stock market education book in the world covering
                        everything from the basics to advanced trading.
                    </p>
                    <a href="/about" className="text-blue-600 hover:underline">
                        Varsity →
                    </a>

                    <p className="text-gray-600 mt-6 mb-2">
                        TradingQ&A, the most active trading and investment community in India for
                        all your market related queries.
                    </p>
                    <a href="/support" className="text-blue-600 hover:underline">
                        TradingQ&A →
                    </a>
                </div>
            </div>
        </section>
    );
}

export default EducationSection;
