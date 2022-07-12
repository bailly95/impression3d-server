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
    selectedFile:selectedFile
  });

  try {
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    console.log("erreur")
    res.status(409).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {};

export const deleteProduct = async (req, res) => {};
