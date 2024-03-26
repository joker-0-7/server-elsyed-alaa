var express = require("express");
var router = express.Router();
const formController = require("../controllers/forms.controll");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/orders/");
  },
  filename: function (req, file, cb) {
    const mimetype = file.mimetype.split("/")[1];
    const uniqueSuffix = `order-${Date.now()}.${mimetype}`;
    req.uniqueSuffix = uniqueSuffix;
    cb(null, uniqueSuffix);
  },
});
const upload = multer({ storage: storage });
/* GET users listing. */
router.post("/payment", upload.single("image"), formController.addPayment);
router.get("/payments", formController.getAllPayments);
router.put("/payment/accept/:id", formController.acceptPyment);
router.put("/payment/rej/:id", formController.rejPyment);
router.get("/payment/:id", formController.getPayment);
router.delete("/payment/:id", formController.deletePayment);
router.post("/contact", formController.addContact);
router.get("/contacts", formController.getContacts);
router.get("/contact/:id", formController.getContent);
router.delete("/contact/:id", formController.deleteContent);
module.exports = router;
