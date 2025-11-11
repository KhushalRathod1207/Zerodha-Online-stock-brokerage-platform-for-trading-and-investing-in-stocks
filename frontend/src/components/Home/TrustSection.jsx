import React from "react";

function TrustSection() {
    const sectionData = [
        {
            title: "Customer-first always",
            text: `That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments,
             making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.`,
        },
        {
            title: "No spam or gimmicks",
            text: `No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use
             at your pace, the way you like.`,
            link: { href: "/about", label: "Our philosophies →" },
        },
        {
            title: "The Zerodha universe",
            text: `Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored
             services specific to your needs.`,
        },
        {
            title: "Do better with money",
            text: (
                <>
                    With initiatives like{" "}
                    <a href="#" className="text-blue-600 hover:underline">Nudge</a> and{" "}
                    <a href="#" className="text-blue-600 hover:underline">Kill Switch</a>, we help you do
                    better with your money.
                </>
            ),
        },
    ];

    return (
        <section className="max-w-[1100px] mx-auto py-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center md:text-left">
                Trust with confidence
            </h2>

            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Left side */}
                <div>
                    {sectionData.map((item, i) => (
                        <div key={i} className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.text}
                                {item.link && (
                                    <a href={item.link.href} className="text-blue-600 hover:underline ml-1">
                                        {item.link.label}
                                    </a>
                                )}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right side */}
                <div className="text-center md:text-left">
                    <img
                        src="src/assets/images/TrustWithConfidence.png"
                        alt="Trust"
                        className="w-full mb-6"
                    />
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <a href="/products" className="text-blue-600 hover:underline">
                            Explore our products →
                        </a>
                        <a href="/support" className="text-blue-600 hover:underline">
                            Try Kite demo →
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center">
                <img
                    src="src/assets/images/pressLogos.png"
                    alt="Press Logos"
                    className="w-full max-w-lg mx-auto opacity-85 hover:opacity-100 transition"
                />
            </div>
        </section>
    );
}

export default TrustSection;
