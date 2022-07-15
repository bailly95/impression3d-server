import express from "express";
import uploadProducts from "../middleware/multerProducts.js"
import {
  getProducts,
  getProduct,
  getLastProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/product.js";

const router = express.Router();

//http://localhost:5000/products

router.get("/", getProducts);
router.get("/last", getLastProducts);
router.get("/:id", getProduct);
router.post("/", uploadProducts.any("selectedFile"), createProduct);
router.patch("/:id",uploadProducts.any("selectedFile"), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
