const mongoose = require("mongoose");

const fundSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },
    availableMargin: { type: Number, default: 5000 },
    usedMargin: { type: Number, default: 0 },
    cash: { type: Number, default: 5000 },
    openingBalance: { type: Number, default: 5000 },
    payin: { type: Number, default: 0 },
    span: { type: Number, default: 0 },
    deliveryMargin: { type: Number, default: 0 },
    optionsPremium: { type: Number, default: 0 },
    collateral: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Fund", fundSchema);

