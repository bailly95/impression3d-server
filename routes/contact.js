import express from "express";
import uploadContact from "../middleware/multerContact.js"

import { getContacts, createContact } from "../controllers/contact.js";



const router = express.Router();

//http://localhost:5000/contact

router.get("/", getContacts);
router.post("/", uploadContact, createContact);

export default router;
