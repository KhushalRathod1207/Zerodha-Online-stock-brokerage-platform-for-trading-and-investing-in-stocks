const mongoose = require("mongoose");
const { Schema } = mongoose;

const HoldingSchema = new Schema({
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    avg: { type: Number, required: true },
    price: { type: Number, required: true },
    net: { type: String, required: true },
    day: { type: String, required: true },
    isLoss: { type: Boolean, default: false }
}, { timestamps: true });


const Holding = mongoose.model("Holding", HoldingSchema)

module.exports = Holding;
