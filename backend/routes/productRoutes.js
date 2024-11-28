const express = require('express');
const { getProducts, addProduct, matchProducts } = require('../controllers/productController');
const router = express.Router();

// Fetch all products
router.get('/', getProducts);

// Add a new product
router.post('/add', addProduct);

// Match products by name
router.post('/match', matchProducts);

module.exports = router;
