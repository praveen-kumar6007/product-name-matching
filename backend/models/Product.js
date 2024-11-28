const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
