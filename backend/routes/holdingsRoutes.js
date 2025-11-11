const express = require("express");
const router = express.Router();
const { getHoldings } = require("../controllers/holdingsController");

// GET holdings of a user
router.get("/:userId", getHoldings);

module.exports = router;
