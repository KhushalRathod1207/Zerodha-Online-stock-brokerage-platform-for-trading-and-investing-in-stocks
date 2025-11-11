require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;

// ========== MongoDB Connection ==========
mongoose
    .connect(MONGO_URL)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// ========== CORS ==========
app.use(cors({
    origin: [
        "http://localhost:3000",
        "http://localhost:5173",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:5173"
    ],
    credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========== Session Store ==========
const store = MongoStore.create({
    mongoUrl: MONGO_URL,
    collectionName: "sessions",
});

app.use(
    session({
        store,
        secret: process.env.SESSION_SECRET || "zerodha_secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false, // ⚠️ use true only in production with HTTPS
            sameSite: "lax", // important for cross-origin cookies
            maxAge: 1000 * 60 * 60 * 24 * 7,
        },
    })
);


// ========== Passport Config ==========
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ========== Routes ==========
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/otp", require("./routes/otpRoutes"));
app.use("/api/holdings", require("./routes/holdingsRoutes"));
app.use("/api/orders", require("./routes/ordersRoutes"));
app.use("/api/positions", require("./routes/positionsRoutes"));
app.use("/api/watchlist", require("./routes/watchlistRoutes"));
app.use("/api/stocks", require("./routes/stockRoutes"));
app.use("/api/funds", require("./routes/fundsRoutes"));
app.use("/api/users", require("./routes/profileRoutes"));



// ========== Root ==========
app.get("/", (req, res) => {
    res.send("🚀 Zerodha Backend is running successfully!");
});

// ========== Start Server ==========
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
