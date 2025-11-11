const express = require("express");
const router = express.Router();
const { getPositions } = require("../controllers/positionsController");

// GET positions for user
router.get("/:userId", getPositions);

module.exports = router;
