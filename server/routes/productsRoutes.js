const express = require("express");
const router = express.Router();
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
const { fetchAdmin } = require("../middleware/fetchAdmin");
const upload = require("../middleware/upload");

router.get("/allproducts", allProduct);
router.get("/:id", singleProduct);
router.post("/add", upload.array("images", 5), addProduct);
router.put("/update/:id", productFormValidation, updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
