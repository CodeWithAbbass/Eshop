const express = require("express");
const router = express.Router();
const {
  addToWishlist,
  deleteFromWishlist,
  getWishlist,
} = require("../controller/wishlistController");
const { fetchUser } = require("../middleware/fetchUser");
router.get("/get", fetchUser, getWishlist);
router.post("/add/:id", fetchUser, addToWishlist);
router.delete("/delete/:id", fetchUser, deleteFromWishlist);

module.exports = router;
