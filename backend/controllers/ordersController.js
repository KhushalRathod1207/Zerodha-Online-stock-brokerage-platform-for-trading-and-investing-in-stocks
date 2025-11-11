const Order = require("../models/Orders");
const Stock = require("../models/Stock");

// ✅ BUY ORDER
exports.buyStock = async (req, res) => {
    try {
        const { userId, stockId, quantity } = req.body;

        const stock = await Stock.findById(stockId);
        if (!stock) return res.status(404).json({ message: "Stock not found" });

        const totalAmount = stock.currentPrice * quantity;

        const newOrder = new Order({
            userId,
            stockId,
            type: "BUY",
            quantity,
            price: stock.currentPrice,
            totalAmount,
        });

        await newOrder.save();
        res.status(201).json({ message: "Buy order placed", order: newOrder });
    } catch (error) {
        console.error("Buy Order Error:", error);
        res.status(500).json({ message: "Error placing buy order" });
    }
};

// ✅ SELL ORDER
exports.sellStock = async (req, res) => {
    try {
        const { userId, stockId, quantity } = req.body;

        const stock = await Stock.findById(stockId);
        if (!stock) return res.status(404).json({ message: "Stock not found" });

        const totalAmount = stock.currentPrice * quantity;

        const newOrder = new Order({
            userId,
            stockId,
            type: "SELL",
            quantity,
            price: stock.currentPrice,
            totalAmount,
        });

        await newOrder.save();
        res.status(201).json({ message: "Sell order placed", order: newOrder });
    } catch (error) {
        console.error("Sell Order Error:", error);
        res.status(500).json({ message: "Error placing sell order" });
    }
};

// ✅ GET USER ORDERS
exports.getUserOrders = async (req, res) => {
    try {
        const { userId } = req.params;

        const orders = await Order.find({ userId })
            .populate("stockId")          // ✅ populate stock details
            .sort({ createdAt: -1 });    // ✅ latest orders first

        res.status(200).json(orders);
    } catch (err) {
        console.error("Fetch Orders Error:", err);
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};