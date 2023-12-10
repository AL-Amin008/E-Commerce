const Order = require('../models/order.model');

exports.createOrder = async (req, res) => {
  try {
    const { user, items, totalAmount, shippingAddress } = req.body;
    const newOrder = await Order.create({ user, items, totalAmount, shippingAddress });
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId).populate('user').populate('items.product');
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add more controller functions as needed
