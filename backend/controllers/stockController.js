const Stocks = require("../models/Stock");

// GET all stocks
exports.getAllStocks = async (req, res) => {
    try {
        const stocks = await Stocks.find();
        res.status(200).json(stocks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching stocks", error });
    }
};
