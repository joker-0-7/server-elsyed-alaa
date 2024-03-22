const ProductsModel = require("../models/Products.model");

const Login = async (req, res) => {
  const data = req.body;
  console.log(data);
  return res.status(200).json({ msg: "Done" });
};

const getProducts = async (req, res) => {
  const products = await ProductsModel.find().lean();
  if (products.length == 0)
    return res
      .status(404)
      .json({ msg: "No hay productos en la base de datos" });
  return res.json(products);
};
const getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await ProductsModel.findById(id);
  return res.json(product);
};
const addProduct = async (req, res) => {
  const product = req.body;
  try {
    let newProduct = await ProductsModel.create(product);
    return res.status(201).json({ msg: "Done" });
  } catch (err) {
    console.log(err);
  }
};
const updateProduct = async () => {};
const deleteProduct = async () => {};
module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  Login,
};
