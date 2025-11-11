const Stock = require("../models/Stock");
const Watchlist = require("../models/Watchlist");

exports.addToWatchlist = async (req, res) => {
    try {
        const { userId, stockId } = req.body;

        if (!userId || !stockId) {
            return res.status(400).json({ message: "Missing userId or stockId" });
        }

        // ✅ check if stock exists
        const stock = await Stock.findById(stockId);
        if (!stock) {
            return res.status(404).json({ message: "Stock not found" });
        }

        // ✅ prevent duplicates
        const existing = await Watchlist.findOne({ userId, stockId });
        if (existing) {
            return res.status(400).json({ message: "Already in watchlist" });
        }

        const newItem = new Watchlist({ userId, stockId });
        await newItem.save();

        res.status(201).json({ message: "Added to watchlist", watchlist: newItem });
    } catch (error) {
        console.error("❌ Watchlist add error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


exports.getUserWatchlist = async (req, res) => {
    try {
        const { userId } = req.params;
        const items = await Watchlist.find({ userId })
            .populate("stockId")
            .sort({ addedAt: -1 });

        res.status(200).json(items);
    } catch (error) {
        console.log("Fetch Watchlist Error : ", error);
        res.status(500).json({ message: "Server Error", error: error.message })
    }
}

exports.removeFromWatchlist = async (req, res) => {
    try {
        const { id } = req.params;
        await Watchlist.findByIdAndDelete(id);
        res.status(200).json({ message: "Removed from watchList" });

    } catch (error) {
        console.error("Remove Watchlist Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}