const Order = require("../models/Orders");

const getPositions = async (req, res) => {
    const { userId } = req.params;

    try {
        const orders = await Order.find({ userId }).populate("stockId");

        if (!orders.length) return res.json([]);

        const positionsMap = {};

        orders.forEach((order) => {
            const symbol = order.stockId.symbol;

            if (!positionsMap[symbol]) {
                positionsMap[symbol] = {
                    stockId: order.stockId._id,
                    symbol,
                    quantity: 0,
                    totalBuyValue: 0,
                    currentPrice: order.stockId.currentPrice
                };
            }

            if (order.type === "BUY") {
                positionsMap[symbol].quantity += order.quantity;
                positionsMap[symbol].totalBuyValue += order.quantity * order.price;
            } else if (order.type === "SELL") {
                positionsMap[symbol].quantity -= order.quantity;
                positionsMap[symbol].totalBuyValue -= order.quantity * order.price;
            }
        });

        const positions = Object.values(positionsMap).map((p) => {
            const avgPrice = p.quantity ? p.totalBuyValue / p.quantity : 0;
            const unrealizedPL = p.quantity * (p.currentPrice - avgPrice);

            return {
                stockId: p.stockId,
                symbol: p.symbol,
                quantity: p.quantity,
                avgPrice: avgPrice,
                currentPrice: p.currentPrice,
                unrealizedPL
            };
        });

        res.json(positions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getPositions };
