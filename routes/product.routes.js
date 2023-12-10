const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');

// Define routes for product operations
router.post('/create', ProductController.createProduct);
router.get('/:productId', ProductController.getProductById);
// Add more routes as needed

module.exports = router;
