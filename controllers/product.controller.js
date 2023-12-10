const Product = require('../models/product.model');

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category, imageURL } = req.body;
    
    // Validate the input
    if (!name || !price || !stock || !category) {
      return res.status(400).json({ error: 'Name, price, stock, and category are required fields' });
    }

    const newProduct = await Product.create({ name, description, price, stock, category, imageURL });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add more controller functions as needed
