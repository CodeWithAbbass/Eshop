const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  getUserOrders,
  placeOrder,
  updateStatus,
  deleteOrder,
} = require("../controller/orderController");

router.get("/", getAllOrders);
router.get("/user", getUserOrders);
router.post("/confirm", placeOrder);
router.put("/update/:id", updateStatus);
router.delete("/delete", deleteOrder);

module.exports = router;
