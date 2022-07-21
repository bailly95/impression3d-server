import Product from "../models/product.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getLastProducts = async (req, res) => {
  try {
    const product = await Product.find().sort("-createdAt").limit(3);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const detail = await Product.findById(req.params.id);

    res.status(200).json(detail);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  const files = req.files;
  const selectedFile = [];

  for (const file of files) {
    const { path } = file;
    selectedFile.push(path);
  }
  const newProduct = new Product({
    ...product,
    createdAt: new Date().toISOString(),
    selectedFile: selectedFile,
  });

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log("erreur");
    res.status(409).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  await Product.findByIdAndRemove(id);
  res.json({ message: "Post deleted successfully." });
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, updateImage,category } = req.body;
  const files = req.files;
  const selectedFile = [];

  if (updateImage !== "") {
    let tmpImage = updateImage.split(",");
    for (const path of tmpImage) {
      selectedFile.push(path);
    }
  }

  for (const file of files) {
    const { path } = file;
    selectedFile.push(path);
  }

  const updatedProduct = {
    name,
    description,
    category,
    selectedFile,
  };

  await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
  res.json(updatedProduct);
};
