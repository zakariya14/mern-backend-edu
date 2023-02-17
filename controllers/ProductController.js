const Product = require("../models/ProductModel");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductsByID = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const insertUser = await product.save();
    res.status(201).json(insertUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const update = await Product.updateOne({ _id: id }, { $set: req.body });
    res.status(200).json(update);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const destroyProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const destroy = await Product.deleteOne({ _id: id });
    res.status(200).json(destroy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductsByID,
  createProduct,
  updateProduct,
  destroyProduct,
};
