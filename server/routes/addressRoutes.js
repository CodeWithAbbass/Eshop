const express = require("express");
const router = express.Router();
const {
  getAllAddresses,
  addAddress,
  defaultAddress,
  deleteAddress,
  updateAddress,
} = require("../controller/addressController");
const { fetchUser } = require("../middleware/fetchUser");

router.get("/", fetchUser, getAllAddresses);
router.post("/add", fetchUser, addAddress);
router.post("/update/:id", fetchUser, updateAddress);
router.post("/da/:id", fetchUser, defaultAddress);
router.delete("/delete/:id", fetchUser, deleteAddress);

module.exports = router;
