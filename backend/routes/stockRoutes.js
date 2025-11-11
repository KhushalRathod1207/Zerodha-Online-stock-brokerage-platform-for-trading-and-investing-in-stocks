const express = require("express");
const router = express.Router();
const { getAllStocks } = require("../controllers/stockController");

router.get("/all", getAllStocks);

module.exports = router;
