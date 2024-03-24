const mongoose = require("mongoose");
const PaymentFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    phone: {
      type: Number,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: Number,
    },
    payment: {
      type: String,
    },
    accountNum: {
      type: String,
    },
    accountName: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
    productName: {
      type: String,
    },
    status: {
      type: Boolean,
      default: null,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("PaymentForm", PaymentFormSchema);
