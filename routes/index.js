var express = require("express");
const indexController = require("../controllers/index.controll");
var router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "./public/data/uploads/" });
/* GET home page. */
router.get("/", indexController.getProducts);
router.post("/login", indexController.Login);
router.get("/products", indexController.getProducts);
router.get("/product/:id", indexController.getProduct);
router.post("/product/add", indexController.addProduct);
router.put("/product/update", indexController.updateProduct);
router.delete("/product/delete/:id", indexController.deleteProduct);

module.exports = router;
