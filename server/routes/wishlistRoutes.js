const express = require("express");
const router = express.Router();
const {
  addToWishlist,
  RemoveFromWishlist,
} = require("../controller/wishlistController");
const { fetchUser } = require("../middleware/fetchUser");
router.post("/add/:id", fetchUser, addToWishlist);
router.post("/delete/:id", fetchUser, RemoveFromWishlist);

module.exports = router;
