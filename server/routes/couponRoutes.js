const express = require("express");
const router = express.Router();
const { fetchUser } = require("../middleware/fetchUser");
const { addCoupon, getAllCoupon } = require("../controller/couponController");

router.get("/", getAllCoupon);
router.post("/add", addCoupon);
// router.post("/update/:id", fetchUser, updateAddress);
// router.post("/ds/:id", fetchUser, dShippingAddress);
// router.post("/db/:id", fetchUser, dBillingAddress);
// router.delete("/delete/:id", fetchUser, deleteAddress);

module.exports = router;
