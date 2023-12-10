const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/order.controller');

// Define routes for order operations
router.post('/create', OrderController.createOrder);
router.get('/:orderId', OrderController.getOrderById);
// Add more routes as needed

module.exports = router;
