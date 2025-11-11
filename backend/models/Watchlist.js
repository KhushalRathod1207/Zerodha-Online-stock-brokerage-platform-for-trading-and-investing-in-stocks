const mongoose = require("mongoose");
const { Schema } = mongoose;

const watchlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    stockId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stock",
        required: true,
    },
    addedAt: {
        type: Date,
        default: Date.now,
    },
});
const Watchlists = mongoose.model("Watchlists", watchlistSchema);
module.exports = Watchlists;
