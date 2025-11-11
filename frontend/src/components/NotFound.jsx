import React from "react";

export default function NotFound() {
    return (
        <section className="py-16 text-center bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-gray-700 mb-4">
                    404 Not Found
                </h2>
                <p className="text-gray-500">
                    Sorry, the page you are looking for does not exist.
                </p>
            </div>
        </section>
    );
}
