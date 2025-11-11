const Fund = require("../models/Fund");

// GET user funds
const getFunds = async (req, res) => {
    const { userId } = req.params;
    try {
        const funds = await Fund.findOne({ userId });
        if (!funds) return res.status(404).json({ message: "No fund data found" });
        res.json(funds);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

// ADD funds
const addFunds = async (req, res) => {
    const { userId, amount } = req.body;
    try {
        const fund = await Fund.findOne({ userId });
        if (!fund) return res.status(404).json({ message: "Fund not found" });
        fund.cash += amount;
        fund.availableMargin += amount;
        await fund.save();
        res.json(fund);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

// WITHDRAW funds
const withdrawFunds = async (req, res) => {
    const { userId, amount } = req.body;
    try {
        const fund = await Fund.findOne({ userId });
        if (!fund) return res.status(404).json({ message: "Fund not found" });
        if (fund.cash < amount) return res.status(400).json({ message: "Insufficient cash" });
        fund.cash -= amount;
        fund.availableMargin -= amount;
        await fund.save();
        res.json(fund);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getFunds, addFunds, withdrawFunds };
