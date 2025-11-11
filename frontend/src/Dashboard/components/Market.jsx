import React, { useEffect, useState, useContext } from "react";
import api from "../../api/axios";
import BuyActionWindow from "../../Dashboard/components/BuyActionWindow";
import SellActionWindow from "../../Dashboard/components/SellActionWindow";
import { AuthContext } from "../../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const Market = () => {
    const [stocks, setStocks] = useState([]);
    const [selectedStock, setSelectedStock] = useState(null);
    const [showBuy, setShowBuy] = useState(false);
    const [showSell, setShowSell] = useState(false);
    const [loading, setLoading] = useState(true);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const res = await api.get("/stocks/all");
                setStocks(res.data);
            } catch (err) {
                console.error("❌ Error fetching stocks:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchStocks();
    }, []);

    const handleAddToWatchlist = async (stockId) => {
        if (!currentUser?._id) {
            alert("⚠️ Please log in to add stocks to your watchlist.");
            return;
        }

        try {
            await api.post("/watchlist/add", {
                userId: currentUser._id,
                stockId,
            });
            alert("✅ Stock added to your watchlist!");
        } catch (error) {
            console.error("❌ Error adding to watchlist:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    const openBuyWindow = (stock) => {
        setSelectedStock(stock);
        setShowBuy(true);
    };

    const openSellWindow = (stock) => {
        setSelectedStock(stock);
        setShowSell(true);
    };

    const closeWindows = () => {
        setShowBuy(false);
        setShowSell(false);
        setSelectedStock(null);
    };

    // 🌀 Loading Overlay
    if (loading)
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50 text-lg text-gray-600">
                Loading Market Data...
            </div>
        );

    return (
        <div className="p-6 sm:p-8 bg-gray-50 min-h-screen">
            {/* ✅ Page Header */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center mb-10"
            >
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    📈 Live Market Overview
                </h1>
                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                    Explore trending stocks and manage your portfolio
                </p>
            </motion.div>

            {/* ✅ Stock Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                {stocks.map((stock) => (
                    <motion.div
                        key={stock._id}
                        whileHover={{ scale: 1.03 }}
                        className="bg-white shadow-sm hover:shadow-lg border rounded-2xl p-5 text-center transition-all duration-300"
                    >
                        <h2 className="text-lg font-semibold text-gray-800">
                            {stock.name}
                        </h2>
                        <p className="text-gray-500 text-sm">{stock.symbol}</p>
                        <p
                            className={`text-xl font-bold ${stock.change >= 0 ? "text-green-600" : "text-red-500"
                                } mt-2`}
                        >
                            ₹{stock.currentPrice?.toFixed(2)}
                        </p>

                        {/* Small Change Info */}
                        <p
                            className={`text-sm font-medium ${stock.change >= 0 ? "text-green-500" : "text-red-500"
                                }`}
                        >
                            {stock.change >= 0 ? "▲" : "▼"} {stock.change?.toFixed(2)}%
                        </p>

                        {/* Buttons */}
                        <div className="mt-5 flex flex-wrap justify-center gap-3">
                            <button
                                onClick={() => handleAddToWatchlist(stock._id)}
                                className="px-3 py-2 text-sm bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                            >
                                ⭐ Watchlist
                            </button>

                            <button
                                onClick={() => openBuyWindow(stock)}
                                className="px-4 py-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                            >
                                Buy
                            </button>

                            <button
                                onClick={() => openSellWindow(stock)}
                                className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                            >
                                Sell
                            </button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* ✅ Action Windows */}
            <AnimatePresence>
                {showBuy && selectedStock && (
                    <BuyActionWindow stock={selectedStock} closeWindow={closeWindows} />
                )}
                {showSell && selectedStock && (
                    <SellActionWindow stock={selectedStock} closeWindow={closeWindows} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Market;
