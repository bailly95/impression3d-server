import mongoose from "mongoose";

const requestSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  contents: { type: String, required: true },
  products: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Request", requestSchema);


import mongoose from "mongoose";

const requestSchema = mongoose.Schema({
  idClient: { type: String, required: true },
  idProduct: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Request", requestSchema);