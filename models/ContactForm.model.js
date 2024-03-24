const mongoose = require("mongoose");
const ContactFormSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    name: {
      type: String,
    },
    phone: {
      type: Number,
    },
    message: {
      type: String,
    },
    interested: {
      type: String,
    },
    placeType: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("ContactForm", ContactFormSchema);
