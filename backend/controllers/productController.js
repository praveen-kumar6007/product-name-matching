const Product = require('../models/Product');

// Fetch all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new product
const addProduct = async (req, res) => {
  const { name, category, price } = req.body;

  try {
    const product = new Product({ name, category, price });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Match products by name
const matchProducts = async (req, res) => {
  const { query } = req.body;

  try {
    const matchedProducts = await Product.find({ name: new RegExp(query, 'i') });
    res.json(matchedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts, addProduct, matchProducts };
