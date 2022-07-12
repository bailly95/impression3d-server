import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  contents: { type: String, required: true },
  file: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Contact", contactSchema);