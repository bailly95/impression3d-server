import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address:{
    address1: { type: String, default:""},
    address2: { type: String, default:""},
    city: { type: String, default:""},
    zip: { type: Number, default:""},
    country: { type: String, default:"France"}
  },
  id: { type: String },
});

export default mongoose.model("User", userSchema);
