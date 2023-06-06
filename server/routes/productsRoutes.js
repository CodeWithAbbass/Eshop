const express = require("express");
const router = express.Router();
const { fetchAdmin } = require("../middleware/fetchAdmin");
const {
  allProduct,
  addProduct,
  singleProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");
const {
  productFormValidation,
} = require("../middleware/productFormValidation");

router.get("/allproducts", allProduct);
router.get("/:id", singleProduct);
router.post("/add", productFormValidation, fetchAdmin, addProduct);
router.put("/update/:id", productFormValidation, fetchAdmin, updateProduct);
router.delete("/delete/:id", fetchAdmin, deleteProduct);

module.exports = router;
