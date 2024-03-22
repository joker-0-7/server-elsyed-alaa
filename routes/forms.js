var express = require("express");
var router = express.Router();
const formController = require("../controllers/forms.controll");
/* GET users listing. */
router.post("/payment", formController.addPayment);
router.get("/payments", formController.getAllPayments);
router.get("/payment/:id", formController.getPayment);
router.delete("/payment/:id", formController.deletePayment);
router.post("/contact", formController.addContact);
router.get("/contacts", formController.getContacts);
router.get("/contact/:id", formController.getContent);
router.delete("/contact/:id", formController.deleteContent);
module.exports = router;
