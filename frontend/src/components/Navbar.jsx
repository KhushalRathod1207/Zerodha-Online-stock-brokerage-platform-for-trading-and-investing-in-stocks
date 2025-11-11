import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center"
                    onClick={closeMenu}
                >
                    <img
                        src="assets/images/logo.svg"
                        alt="Zerodha Logo"
                        className="h-5"
                    />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-gray-600 focus:outline-none"
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Menu Links */}
                <div
                    className={`${isOpen ? "block" : "hidden"
                        } absolute top-full left-0 w-full bg-white border-t border-gray-200 lg:border-none lg:static lg:w-auto lg:flex lg:items-center lg:space-x-6`}
                >
                    <ul className="flex flex-col lg:flex-row lg:items-center">
                        {[
                            { name: "Signup", path: "/signup" },
                            { name: "About", path: "/about" },
                            { name: "Products", path: "/products" },
                            { name: "Pricing", path: "/pricing" },
                            { name: "Support", path: "/support" },
                        ].map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    onClick={closeMenu}
                                    className="block px-4 py-2 text-gray-600 hover:text-[#387ed1] text-[15px] font-medium transition-colors duration-200"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
