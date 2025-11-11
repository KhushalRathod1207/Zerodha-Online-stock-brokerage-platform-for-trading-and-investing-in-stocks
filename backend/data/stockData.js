require("dotenv").config();
const mongoose = require("mongoose");
const Stock = require("../models/Stock"); // ✅ make sure Stock.js is in models folder

// ✅ Your sample data
const stockData = [
    { name: "Reliance Industries", symbol: "RELIANCE", currentPrice: 2850 },
    { name: "Tata Consultancy Services", symbol: "TCS", currentPrice: 3650 },
    { name: "Infosys Ltd", symbol: "INFY", currentPrice: 1550 },
    { name: "HDFC Bank", symbol: "HDFCBANK", currentPrice: 1650 },
    { name: "ICICI Bank", symbol: "ICICIBANK", currentPrice: 1120 },
    { name: "Adani Enterprises", symbol: "ADANIENT", currentPrice: 2300 },
    { name: "Bharti Airtel", symbol: "AIRTEL", currentPrice: 1210 },
    { name: "State Bank of India", symbol: "SBIN", currentPrice: 780 },
    { name: "Hindustan Unilever", symbol: "HUL", currentPrice: 2500 },
    { name: "Axis Bank", symbol: "AXISBANK", currentPrice: 1050 },
];

// ✅ MongoDB connection
const MONGO_URL = process.env.MONGO_URL;

mongoose
    .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("✅ Connected to MongoDB Atlas");

        // Clear old data
        await Stock.deleteMany({});

        // Insert new stocks
        await Stock.insertMany(stockData);

        console.log("🎉 Stocks seeded successfully!");
        process.exit(); // Exit after completion
    })
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
    });
