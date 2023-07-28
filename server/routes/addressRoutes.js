const express = require("express");
const router = express.Router();
const {
  getAllAddresses,
  addAddress,
  dShippingAddress,
  deleteAddress,
  updateAddress,
  dBillingAddress,
} = require("../controller/addressController");
const { fetchUser } = require("../middleware/fetchUser");

router.get("/", fetchUser, getAllAddresses);
router.post("/add", fetchUser, addAddress);
router.post("/update/:id", fetchUser, updateAddress);
router.post("/ds/:id", fetchUser, dShippingAddress);
router.post("/db/:id", fetchUser, dBillingAddress);
router.delete("/delete/:id", fetchUser, deleteAddress);

module.exports = router;
