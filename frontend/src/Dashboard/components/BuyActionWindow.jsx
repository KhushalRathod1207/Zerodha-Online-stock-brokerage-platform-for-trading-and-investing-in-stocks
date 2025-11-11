import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api/axios";

const BuyActionWindow = ({ stock, closeWindow }) => {
    const { currentUser } = useContext(AuthContext);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleBuy = async () => {
        if (quantity <= 0) return alert("Enter valid quantity");

        setLoading(true);
        try {
            await api.post("/orders/buy", {
                userId: currentUser._id,
                stockId: stock._id,  // ✅ send ObjectId
                quantity,
            });
            alert("Buy order placed!");
            closeWindow();         // ✅ close modal
            window.dispatchEvent(new Event("orderPlaced"));
        } catch (err) {
            console.error(err);
            alert("Failed to place order");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-[90%] md:w-[400px]">
                <h2 className="text-xl font-semibold mb-2">Buy {stock.symbol}</h2>
                <p className="mb-4">Price: ₹{stock.currentPrice}</p>
                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-3 py-2 border rounded mb-4"
                />
                <div className="flex justify-end gap-2">
                    <button onClick={closeWindow} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                    <button onClick={handleBuy} className={`px-4 py-2 rounded text-white ${loading ? "bg-blue-300" : "bg-blue-500"}`}>
                        {loading ? "Placing..." : "Buy"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BuyActionWindow;
