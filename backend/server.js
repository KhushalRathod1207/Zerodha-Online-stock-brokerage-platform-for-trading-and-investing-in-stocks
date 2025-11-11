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

// =======================
// ✅ Environment Variables
// =======================
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN;

// =======================
// ✅ MongoDB Connection
// =======================
mongoose
    .connect(MONGO_URL)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// =======================
// ✅ CORS Configuration
// =======================
app.use(
    cors({
        origin: [
            "http://localhost:5173", // for local dev
            CLIENT_ORIGIN, // deployed frontend (from .env)
        ],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =======================
// ✅ Session Store
// =======================
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
            secure: process.env.NODE_ENV === "production", // ✅ HTTPS only in production
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // ✅ allow cross-site cookies
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        },
    })
);

// =======================
// ✅ Passport Config
// =======================
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// =======================
// ✅ Routes
// =======================
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/otp", require("./routes/otpRoutes"));
app.use("/api/holdings", require("./routes/holdingsRoutes"));
app.use("/api/orders", require("./routes/ordersRoutes"));
app.use("/api/positions", require("./routes/positionsRoutes"));
app.use("/api/watchlist", require("./routes/watchlistRoutes"));
app.use("/api/stocks", require("./routes/stockRoutes"));
app.use("/api/funds", require("./routes/fundsRoutes"));
app.use("/api/users", require("./routes/profileRoutes"));

// =======================
// ✅ Health Check Route
// =======================
app.get("/", (req, res) => {
    res.send("🚀 Zerodha Backend running successfully on Render!");
});

// =======================
// ✅ Start Server
// =======================
app.listen(PORT, () =>
    console.log(`🚀 Server live on port ${PORT} (Render-ready)`)
);
