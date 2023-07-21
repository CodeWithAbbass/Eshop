const express = require("express");
const router = express.Router();
const {
  allProduct,
  addProduct,
  singleProduct,
  editProduct,
  deleteProduct,
} = require("../controller/productController");

const { fetchAdmin } = require("../middleware/fetchAdmin");
const upload = require("../middleware/upload");

router.get("/allproducts", allProduct);
router.get("/:id", singleProduct);
router.post("/add", upload.array("images", 5), addProduct);
router.post("/edit", upload.array("file", 5), editProduct);
router.delete("/delete/:id", deleteProduct);
// ?cat=clothing&status=1&tag=new&query=new+product
module.exports = router;
