const express = require('express');
const router = express.Router();

const { allProduct, addProduct, singleProduct, updateProduct, deleteProduct } = require('../controller/productController');
const { fetchAdmin } = require('../middleware/fetchAdmin');

router.get('/allproducts', allProduct)
router.get('/:id', singleProduct)
router.post('/add', fetchAdmin, addProduct)
router.put('/update/:id', fetchAdmin, updateProduct)
router.delete('/delete/:id', fetchAdmin, deleteProduct)




module.exports = router;