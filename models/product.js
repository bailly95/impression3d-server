import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  selectedFile: [String],
  id: String,
  price: { type: Number },
  sizefixed: { type: Boolean },
  sizestd: { type: Number },
  sizemin: { type: Number },
  sizemax: { type: Number },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var Product = mongoose.model("Product", productSchema);

export default Product;
