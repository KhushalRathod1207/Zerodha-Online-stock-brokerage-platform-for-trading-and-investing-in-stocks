import React from "react";

const appsData = [
    {
        title: "Kite",
        description:
            "Our flagship trading platform with a sleek design and lightning-fast execution.",
        image: "https://zerodha.com/static/images/products-kite.png",
        link: "#",
        color: "from-blue-500 to-indigo-500",
    },
    {
        title: "Coin",
        description:
            "Invest in direct mutual funds and bonds completely commission-free.",
        image: "https://zerodha.com/static/images/products-coin.png",
        link: "#",
        color: "from-green-500 to-emerald-500",
    },
    {
        title: "Console",
        description:
            "Your central dashboard for all investments, reports, and performance insights.",
        image: "https://zerodha.com/static/images/products-console.png",
        link: "#",
        color: "from-purple-500 to-pink-500",
    },
];

const Apps = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-5">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
                    Our Apps
                </h1>
                <p className="text-gray-600 text-lg">
                    Access our powerful trading platforms anytime, anywhere.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
                {appsData.map((app, index) => (
                    <div
                        key={index}
                        className="group bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-28 h-28 mb-5">
                                <img
                                    src={app.image}
                                    alt={app.title}
                                    className="object-contain w-full h-full drop-shadow-md"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {app.title}
                            </h3>
                            <p className="text-gray-500 mb-5 text-sm">{app.description}</p>
                            <a
                                href={app.link}
                                className={`px-5 py-2 rounded-full bg-gradient-to-r ${app.color} text-white font-medium shadow-md hover:shadow-lg transition duration-300`}
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Apps;
