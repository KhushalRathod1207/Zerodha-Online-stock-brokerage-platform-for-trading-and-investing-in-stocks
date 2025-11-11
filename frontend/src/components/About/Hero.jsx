import React from "react";

export default function Hero() {
    return (
        <div className="max-w-5xl mx-auto px-4 mt-10">
            <h2 className="text-center text-gray-700 text-lg md:text-2xl font-medium py-20 leading-relaxed">
                We pioneered the discount broking model in India.
                <br />
                Now, we are breaking ground with our technology.
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
                {/* Left Column */}
                <div>
                    <p>
                        We kick-started operations on the 15th of August, 2010 with the goal
                        of breaking all barriers that traders and investors face in India in
                        terms of cost, support, and technology. We named the company
                        Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
                        barrier.
                    </p>
                    <p className="mt-4">
                        Today, our disruptive pricing models and in-house technology have
                        made us the biggest stock broker in India.
                    </p>
                    <p className="mt-4">
                        Over 1.6+ crore clients place billions of orders every year through
                        our powerful ecosystem of investment platforms, contributing over
                        15% of all Indian retail trading volumes.
                    </p>
                </div>

                {/* Right Column */}
                <div>
                    <p>
                        In addition, we run a number of popular open online educational and
                        community initiatives to empower retail traders and investors.
                    </p>
                    <p className="mt-4">
                        Rainmatter, our fintech fund and incubator, has invested in several
                        fintech startups with the goal of growing the Indian capital
                        markets.
                    </p>
                    <p className="mt-4">
                        And yet, we are always up to something new every day. Catch up on
                        the latest updates on our{" "}
                        <a href="#blog" className="text-blue-600 hover:underline">
                            blog
                        </a>
                        , see what the media is{" "}
                        <a href="#media" className="text-blue-600 hover:underline">
                            saying about us
                        </a>
                        , or learn more about our{" "}
                        <a href="#philosophies" className="text-blue-600 hover:underline">
                            product philosophies
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
