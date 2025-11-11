const express = require("express");
const router = express.Router();
const {
    addToWatchlist,
    getUserWatchlist,
    removeFromWatchlist
} = require("../controllers/watchlistController.js");

router.post("/add", addToWatchlist);

router.get("/:userId", getUserWatchlist);

router.delete("/remove/:id", removeFromWatchlist);

module.exports = router;
