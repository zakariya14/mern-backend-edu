const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/product", ProductController.getProducts);
router.get("/product/:id", ProductController.getProductsByID);
router.post("/product", ProductController.createProduct);
router.patch("/product/:id", ProductController.updateProduct);
router.delete("/product/:id", ProductController.destroyProduct);

module.exports = router;
