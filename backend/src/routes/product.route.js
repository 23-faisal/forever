import { Router } from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../controllers/product.controller.js";
import upload from "../middlewares/multer.js";

const productRouter = Router();

// Add Product
productRouter.post(
  "/add-product",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

// List Products
productRouter.get("/list-product", listProduct);

// Remove Product
productRouter.delete("/remove-product", removeProduct);

// Single Product Info
productRouter.get("/single-product", singleProduct);

export default productRouter;
