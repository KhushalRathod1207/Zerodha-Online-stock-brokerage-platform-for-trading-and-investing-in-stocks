const mongoose = require("mongoose")

const stockSchema = new mongoose.Schema({
    name: { type: String, required: true },
    symbol: { type: String, required: true, unique: true },
    currentPrice: { type: Number, required: true },
});


const Stock = mongoose.model("Stock", stockSchema);
module.exports = Stock;
