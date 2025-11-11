import React from "react";

export default function People() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-gray-700">
            <h4 className="text-center text-2xl font-semibold mb-10">People</h4>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image Section */}
                <div className="flex flex-col items-center text-center">
                    <img
                        src="src/assets/images/nithinKamath.jpg"
                        alt="Nithin Kamath, CEO"
                        className="w-56 h-56 rounded-full shadow-lg object-cover"
                    />
                    <h5 className="mt-4 text-lg font-semibold">Nithin Kamath</h5>
                    <p className="text-gray-500">Founder, CEO</p>
                </div>

                {/* Text Section */}
                <div>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                        hurdles he faced during his decade-long stint as a trader. Today,
                        Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p className="mt-3">
                        He is a member of the SEBI Secondary Market Advisory Committee
                        (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p className="mt-3">Playing basketball is his zen.</p>
                    <p className="mt-3">
                        Connect on{" "}
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Homepage
                        </a>{" "}
                        /{" "}
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            TradingQnA
                        </a>{" "}
                        /{" "}
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Twitter
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
