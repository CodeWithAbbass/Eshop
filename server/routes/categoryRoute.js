const express = require("express");
const { getAllCat } = require("../controller/categoryController");
const router = express.Router();


router.get("/", getAllCat);
// router.post("/add", , addAddress);
// router.post("/update/:id", fetchUser, updateAddress);
// router.post("/da/:id", fetchUser, defaultAddress);
// router.delete("/delete/:id", fetchUser, deleteAddress);

module.exports = router;
