var express = require("express");
const indexController = require("../controllers/index.controll");
var router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/products/");
  },
  filename: function (req, file, cb) {
    const mimetype = file.mimetype.split("/")[1];
    const uniqueSuffix = `product-${Date.now()}.${mimetype}`;
    req.uniqueSuffix = uniqueSuffix;
    cb(null, uniqueSuffix);
  },
});
const upload = multer({ storage: storage });
/* GET home page. */
router.get("/", indexController.getProducts);
router.post("/login", indexController.Login);
router.get("/products", indexController.getAllProducts);
router.get("/products/:current", indexController.getProducts);
router.get("/product/:id", indexController.getProduct);
router.post("/product/add", upload.array("image"), indexController.addProduct);
router.put(
  "/product/update/:id",
  upload.array("image"),
  indexController.updateProduct
);
router.delete("/product/delete/:id", indexController.deleteProduct);

module.exports = router;
