const express = require("express");
const {
  getAllCat,
  addCategory,
  editCategory,
  deleteCategory,
} = require("../controller/categoryController");
const router = express.Router();

router.get("/", getAllCat);
router.post("/add", addCategory);
router.post("/edit", editCategory);
router.delete("/delete/:id", deleteCategory);
// router.post("/countup/:id", defaultAddress);

module.exports = router;
