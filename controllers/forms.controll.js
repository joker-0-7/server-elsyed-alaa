const ContactFormModel = require("../models/ContactForm.model");
const PaymentsForm = require("../models/PymentsForm.model");
const addPayment = async (req, res) => {
  const data = req.body;
  try {
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
  const id = req.params;
  try {
    const data = await ContactFormModel.findByIdAndDelete(id);
    return res.status(200);
  } catch (error) {
    console.log(error);
  }
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
};
