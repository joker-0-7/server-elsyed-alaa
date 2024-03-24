const ProductsModel = require("../models/Products.model");
const userModel = require("../models/user.model");

const Login = async (req, res) => {
  const exist = await userModel.exists({ email: req.body.email });
  if (!exist)
    return res.status(404).json({ msg: "المستخدم غير مسجل في قواعد البيانات" });
  const user = await userModel.findById(exist);
  if (user.password !== req.body.password)
    return res.status(404).json({ msg: "كلمة السر غير صحيحة" });
  user.password = undefined;
  return res.status(200).json({ user });
};

const getAllProducts = async (req, res) => {
  const products = await ProductsModel.find().lean();
  return res.json(products);
};
const getProducts = async (req, res) => {
  const current = req.params.current || 1;
  console.log(current);
  const perPage = 6;
  const products = await ProductsModel.find()
    .skip((current - 1) * perPage)
    .limit(perPage)
    .lean();
  return res.json(products);
};
const getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await ProductsModel.findById(id);
  return res.json(product);
};
const addProduct = async (req, res) => {
  const images = req.files;
  let arrImage = [];
  images.forEach((image) => {
    arrImage.push(image.filename);
  });
  console.log(req.uniqueSuffix);
  let product = req.body;
  product.image = arrImage;
  try {
    let newProduct = await ProductsModel.create(product);
    return res.status(201).json({ msg: "Done" });
  } catch (err) {
    console.log(err);
  }
};
const updateProduct = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const product = await ProductsModel.findByIdAndUpdate(
      id,
      { $set: data },
      {
        new: true,
      }
    );
    return res.status(200).json({ msg: "done" });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ msg: "حدث خطأ" });
  }
};
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const productDeleted = await ProductsModel.findByIdAndDelete(id);
    if (!productDeleted)
      return res.status(404).json({ msg: "المنتج ليس متواجد" });
    return res.status(200).json({ msg: "تم حذف المنتج" });
  } catch (e) {
    return res.status(500).json({ msg: "حدث خطأ ما " });
  }
};
module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  Login,
  getAllProducts,
};
