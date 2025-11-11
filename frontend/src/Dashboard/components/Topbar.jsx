import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Menu as MenuIcon, X, LogOut, User, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../api/axios";

const TopBar = () => {
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsProfileDropdownOpen(false);
    };
    const toggleProfileDropdown = () =>
        setIsProfileDropdownOpen((prev) => !prev);

    const handleLogout = async () => {
        try {
            await api.get("/auth/logout", { withCredentials: true });
            setCurrentUser(null);
            navigate("/login");
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    const menuItems = [
        { name: "Home", path: "/dashboard/home" },
        { name: "Market", path: "/dashboard/market" },
        { name: "Orders", path: "/dashboard/orders" },
        { name: "Holdings", path: "/dashboard/holdings" },
        { name: "WatchList", path: "/dashboard/watchlist" },
        { name: "Positions", path: "/dashboard/positions" },
        { name: "Funds", path: "/dashboard/funds" },
        { name: "Apps", path: "/dashboard/apps" },
    ];

    const NavLink = ({ item, isMobile = false }) => {
        const isActive = location.pathname === item.path;
        const baseClasses =
            "px-3 py-2 rounded-lg transition-all duration-200 text-sm md:text-base whitespace-nowrap";

        return (
            <Link
                key={item.path}
                to={item.path}
                onClick={() => isMobile && setIsMobileMenuOpen(false)}
                className={`${baseClasses} ${isActive
                    ? "bg-blue-600 text-white font-semibold shadow-md"
                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-700"
                    }`}
            >
                {item.name}
            </Link>
        );
    };

    return (
        <header className="w-full bg-white backdrop-blur-sm border-b border-gray-100 shadow-md sticky top-0 z-50">
            {/* 🖥️ Desktop / Tablet Header */}
            <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-6 lg:px-8 py-3 md:py-4">
                {/* ✅ Logo */}
                <div
                    className="flex items-center cursor-pointer gap-2 hover:opacity-90 transition"
                    onClick={() => navigate("/dashboard/home")}
                >
                    <img
                        src="/src/assets/images/logo.svg"
                        alt="TradeApp Logo"
                        className="h-8 w-auto sm:h-10 md:h-12 object-contain"
                    />

                </div>

                {/* ✅ Desktop Menu */}
                <nav className="hidden md:flex flex-grow justify-center">
                    <div className="flex items-center space-x-2 lg:space-x-4">
                        {menuItems.map((item) => (
                            <NavLink key={item.path} item={item} />
                        ))}
                    </div>
                </nav>

                {/* 👤 Profile + Mobile Icon */}
                <div className="flex items-center gap-3 sm:gap-4">
                    {/* 👤 Profile Dropdown */}
                    <div className="hidden md:block relative">
                        <button
                            className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all ${isProfileDropdownOpen
                                ? "bg-blue-100 text-blue-700 shadow"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            onClick={toggleProfileDropdown}
                            aria-expanded={isProfileDropdownOpen}
                            aria-controls="profile-menu"
                        >
                            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold uppercase">
                                {currentUser?.email
                                    ? currentUser.email[0]
                                    : "U"}
                            </div>
                            <span className="font-medium text-sm hidden lg:block">
                                {currentUser?.email?.split("@")[0] || "User"}
                            </span>
                            <ChevronDown
                                size={16}
                                className={`transition-transform ${isProfileDropdownOpen
                                    ? "rotate-180"
                                    : "rotate-0"
                                    }`}
                            />
                        </button>

                        <AnimatePresence>
                            {isProfileDropdownOpen && (
                                <motion.div
                                    id="profile-menu"
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 shadow-2xl rounded-lg overflow-hidden z-20"
                                >
                                    <div className="p-3 border-b border-gray-100">
                                        <p className="font-semibold text-gray-800 truncate">
                                            {currentUser?.email || "Guest User"}
                                        </p>
                                    </div>
                                    <Link
                                        to="/dashboard/profile"
                                        onClick={() =>
                                            setIsProfileDropdownOpen(false)
                                        }
                                        className="flex items-center gap-2 px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 transition"
                                    >
                                        <User size={16} /> Profile Settings
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-2 w-full text-left px-4 py-2 text-red-600 text-sm hover:bg-red-50 transition border-t border-gray-100"
                                    >
                                        <LogOut size={16} /> Logout
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* ☰ Mobile Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-gray-700 focus:outline-none p-2 hover:text-blue-600 transition rounded-md"
                    >
                        {isMobileMenuOpen ? (
                            <X size={26} />
                        ) : (
                            <MenuIcon size={26} />
                        )}
                    </button>
                </div>
            </div>

            {/* 📱 Mobile Slide Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="md:hidden fixed inset-0 h-screen bg-white z-40 p-4 pt-16 overflow-y-auto"
                    >
                        <button
                            onClick={toggleMenu}
                            className="absolute top-4 right-4 text-gray-700 hover:text-blue-600 transition"
                        >
                            <X size={28} />
                        </button>

                        <ul className="flex flex-col space-y-2">
                            {menuItems.map((item) => (
                                <li key={item.path}>
                                    <NavLink item={item} isMobile />
                                </li>
                            ))}
                        </ul>

                        <div className="border-t border-gray-200 mt-6 pt-4">
                            <div className="flex items-center gap-3 mb-4 p-2 bg-gray-50 rounded-lg">
                                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold uppercase">
                                    {currentUser?.email
                                        ? currentUser.email[0]
                                        : "U"}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">
                                        {currentUser?.email?.split("@")[0] ||
                                            "User"}
                                    </p>
                                    <Link
                                        to="/dashboard/profile"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                        className="text-sm text-blue-600 hover:underline"
                                    >
                                        View Profile
                                    </Link>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    handleLogout();
                                }}
                                className="flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg px-4 py-3 transition"
                            >
                                <LogOut size={20} /> Logout
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default TopBar;
