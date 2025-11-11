const express = require("express");
const router = express.Router();
const orderController = require("../controllers/ordersController");

router.post("/buy", orderController.buyStock);
router.post("/sell", orderController.sellStock);
router.get("/:userId", orderController.getUserOrders);

module.exports = router;
