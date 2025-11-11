import React from "react";

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlayURL,
    appStoreURL,
}) {
    return (
        <section className="py-16 max-w-6xl mx-auto px-5">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Image */}
                <div className="lg:w-7/12 text-center">
                    <img
                        src={imageURL}
                        alt={productName}
                        className="w-full object-contain"
                    />
                </div>

                {/* Text */}
                <div className="lg:w-5/12">
                    <h2 className="text-2xl font-medium mb-3">{productName}</h2>
                    <p className="text-gray-500 mb-6 leading-relaxed">
                        {productDescription}
                    </p>

                    <div className="space-x-6 mb-6">
                        {tryDemo && (
                            <a href={tryDemo} className="text-blue-600 hover:underline">
                                Try demo <i className="fas fa-arrow-right ml-1"></i>
                            </a>
                        )}
                        {learnMore && (
                            <a href={learnMore} className="text-blue-600 hover:underline">
                                Learn more <i className="fas fa-arrow-right ml-1"></i>
                            </a>
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        {googlePlayURL && (
                            <a href={googlePlayURL}>
                                <img
                                    src="/google-play-badge.svg"
                                    alt="Google Play"
                                    className="h-10"
                                />
                            </a>
                        )}
                        {appStoreURL && (
                            <a href={appStoreURL}>
                                <img
                                    src="/appstore-badge.svg"
                                    alt="App Store"
                                    className="h-10"
                                />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LeftSection;
