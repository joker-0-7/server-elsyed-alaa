const ContactFormModel = require("../models/ContactForm.model");
const ProductsModel = require("../models/Products.model");
const PaymentsForm = require("../models/PymentsForm.model");
const addPayment = async (req, res) => {
  const data = req.body;
  const image = req.uniqueSuffix;
  data.image = image;
  try {
    if (data.name == "" && data.email == "" && data.phone == "")
      return res.status(404).json({ msg: "لم يتم ارسال البيانات" });
    let newData = await PaymentsForm.create(data);
    return res.status(201).json({ msg: "Done" });
  } catch (err) {
    console.log(err);
  }
};
const getAllPayments = async (req, res) => {
  try {
    const data = await PaymentsForm.find().lean();
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
const getPayment = async (req, res) => {
  const id = req.params;
  try {
    const data = await PaymentsForm.findById(id);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
const deletePayment = async (req, res) => {
  const id = req.params;
  try {
    const data = await PaymentsForm.findByIdAndDelete(id);
    return res.status(200);
  } catch (error) {
    console.log(error);
  }
};
const addContact = async (req, res) => {
  const data = req.body;
  try {
    let newData = await ContactFormModel.create(data);
    return res.status(201).json({ msg: "Done" });
  } catch (err) {
    console.log(err);
  }
};
const getContacts = async (req, res) => {
  try {
    const data = await ContactFormModel.find().lean();
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
const getContent = async (req, res) => {
  const id = req.params;
  try {
    const data = await ContactFormModel.findById(id);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
const deleteContent = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await ContactFormModel.findByIdAndDelete(id);
    return res.status(200).json({ msg: "Deleted Successfully!" });
  } catch (error) {
    console.log(error);
  }
};
const acceptPyment = async (req, res) => {
  const id = req.params.id;
  const name = req.body.productName;
  const product = await ProductsModel.findOne({ name: name });
  if (product && product.count > 0) {
    const updateCount = product.count - 1;
    const updateProduct = await ProductsModel.findOneAndUpdate(
      { name: req.body.productName },
      { count: updateCount }
    );
    const newData = product.count;
  }
  const current = await PaymentsForm.findByIdAndUpdate(id, { status: true });
  return res.status(200).json({ msg: "Done" });
};
const rejPyment = async (req, res) => {
  const id = req.params.id;
  const current = await PaymentsForm.findByIdAndUpdate(id, { status: false });
  return res.status(200).json({ msg: "Done" });
};
module.exports = {
  addPayment,
  getAllPayments,
  addContact,
  getPayment,
  getContacts,
  deletePayment,
  getContent,
  deleteContent,
  acceptPyment,
  rejPyment,
};
