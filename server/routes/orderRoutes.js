const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  getUserOrders,
  getOrderDetails,
  placeOrder,
  updateStatus,
  cancelOrder,
  deleteOrder,
} = require("../controller/orderController");
const { fetchUser } = require("../middleware/fetchUser");
const { fetchAdmin } = require("../middleware/fetchAdmin");
const { orderFormValidation } = require("../middleware/orderFormValidation");

router.get("/", getAllOrders);
router.get("/user", fetchUser, getUserOrders);
router.get("/details/:id", fetchUser, getOrderDetails);
router.post("/confirm", orderFormValidation, fetchUser, placeOrder);
router.post("/update/:id", fetchAdmin, updateStatus);
router.post("/cancel/:id", fetchUser, cancelOrder);
router.delete("/delete/:id", fetchAdmin, deleteOrder);

module.exports = router;
