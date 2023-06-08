const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  getUserOrders,
  placeOrder,
  updateStatus,
  deleteOrder,
} = require("../controller/orderController");
const { fetchUser } = require("../middleware/fetchUser");
const { fetchAdmin } = require("../middleware/fetchAdmin");
const { orderFormValidation } = require("../middleware/orderFormValidation");

router.get("/", fetchAdmin, getAllOrders);
router.get("/user", fetchUser, getUserOrders);
router.post("/confirm", orderFormValidation, fetchUser, placeOrder);
router.post("/update/:id", fetchAdmin, updateStatus);
router.delete("/delete/:id", fetchAdmin, deleteOrder);

module.exports = router;
