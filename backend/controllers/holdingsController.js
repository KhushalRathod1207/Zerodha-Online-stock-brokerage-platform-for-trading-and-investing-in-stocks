const Order = require("../models/Orders");
const Stock = require("../models/Stock");

const getHoldings = async (req, res) => {
    const { userId } = req.params;

    try {
        // Get all orders for this user
        const orders = await Order.find({ userId }).populate("stockId");

        if (!orders.length) return res.json([]);

        // Calculate holdings
        const holdingsMap = {};

        orders.forEach((order) => {
            const symbol = order.stockId.symbol;
            if (!holdingsMap[symbol]) {
                holdingsMap[symbol] = {
                    stockId: order.stockId._id,
                    symbol,
                    quantity: 0,
                    totalBuyValue: 0,
                    avgPrice: 0,
                    currentPrice: order.stockId.currentPrice,
                };
            }

            if (order.type === "BUY") {
                holdingsMap[symbol].quantity += order.quantity;
                holdingsMap[symbol].totalBuyValue += order.quantity * order.price;
            } else if (order.type === "SELL") {
                holdingsMap[symbol].quantity -= order.quantity;
                holdingsMap[symbol].totalBuyValue -= order.quantity * order.price;
            }
        });

        // Convert map to array and calculate avg price & profit/loss
        const holdings = Object.values(holdingsMap).map((h) => ({
            stockId: h.stockId,
            symbol: h.symbol,
            quantity: h.quantity,
            avgPrice: h.quantity ? h.totalBuyValue / h.quantity : 0,
            currentPrice: h.currentPrice,
            currentValue: h.currentPrice * h.quantity,
            profitLoss: h.currentPrice * h.quantity - h.totalBuyValue,
        }));

        res.json(holdings);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getHoldings };
