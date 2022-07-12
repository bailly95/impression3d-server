import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import userRoutes from "./routes/user.js";
import contactRoutes from "./routes/contact.js";
import productRoutes from "./routes/product.js";



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const app = express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


app.use("/user", userRoutes);
app.use("/contact", contactRoutes);
app.use("/products", productRoutes);


const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "ServiceImpression",
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Le serveur tourne sur le port : ${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} ne peut pas se connecter`));
