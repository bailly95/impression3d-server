import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";



const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Contact",
    resource_type:"raw",
    public_id: (req, file) => `${new Date().toISOString()}.${file.originalname.split(".").pop()}`,

  },
});

const Filter = (req, file, cb) => {
  if (
    file.mimetype == "model/stl"||
    file.mimetype == "model/obj"||
    file.mimetype == "application/octet-stream"
  ) {
    cb(null, true);
  } else {
    cb(JSON.stringify(new Error("Only .stl and .obj format allowed!").message));
  }
};

const uploadContact = multer({ storage: storage, fileFilter: Filter }).any('File');

export default uploadContact;
