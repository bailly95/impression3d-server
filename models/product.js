import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, required:  true },
  description: { type: String, required:  true },
  selectedFile: [String],
  id:String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var Product = mongoose.model("Product", productSchema);

export default Product;
