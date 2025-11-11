const express = require("express");
const router = express.Router();
const { getFunds, addFunds, withdrawFunds } = require("../controllers/fundController");

// GET user funds
router.get("/:userId", getFunds);

// POST add funds
router.post("/add", addFunds);

// POST withdraw funds
router.post("/withdraw", withdrawFunds);

module.exports = router;
