import {
  addProduct,
  deleteProduct,
  showProducts,
  update
} from "../controllers/productController.js";
import express from "express";
const productRouter = express.Router();
productRouter.get("/", showProducts);
productRouter.post("/add", addProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.update("/update",updateProduct)

export default productRouter;