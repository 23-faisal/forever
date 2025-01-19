import productModel from "../models/product.model.js";
import { v2 as cloudinary } from "cloudinary";

// Add Product
const addProduct = async (req, res, next) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      size,
      bestSeller,
    } = req.body;

    // Validate and parse price
    if (!price || isNaN(price)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid price value" });
    }
    const parsedPrice = Number(price);

    // Handle image uploads
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    const imageUrls = await Promise.all(
      images.map(async (image) => {
        const result = await cloudinary.uploader.upload(image.path, {
          resource_type: "image",
          folder: "forever/products",
        });
        return result.secure_url;
      })
    );

    // Create new product
    const product = new productModel({
      name,
      description,
      price: parsedPrice,
      category,
      subCategory,
      size: JSON.parse(size),
      bestSeller: bestSeller === "true" ? true : false,
      image: imageUrls,
    });

    await product.save();

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    next(error);
  }
};

// List Products
const listProduct = async (req, res, next) => {
  try {
    const products = await productModel.find({});
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    next(error);
  }
};

// Remove Product
const removeProduct = async (req, res, next) => {
  try {
    const { productId } = req.body;

    if (!productId) {
      return res
        .status(400)
        .json({ success: false, message: "Product ID is required" });
    }

    const product = await productModel.findByIdAndDelete(productId);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      message: "Product removed successfully!",
    });
  } catch (error) {
    next(error);
  }
};

// Single Product Info
const singleProduct = async (req, res, next) => {
  try {
    const { productId } = req.query;

    if (!productId) {
      return res
        .status(400)
        .json({ success: false, message: "Product ID is required" });
    }

    const product = await productModel.findById(productId);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
