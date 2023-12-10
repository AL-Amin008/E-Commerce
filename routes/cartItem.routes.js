
const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cart.controller');

// Define routes for cart operations
router.get('/:userId', CartController.getCartByUserId);
router.post('/add', CartController.addToCart);
router.put('/update/:cartItemId', CartController.updateCartItem);
router.delete('/remove/:cartItemId', CartController.removeCartItem);
// Add more routes as needed

module.exports = router;
