import Contact from "../models/contact.js";



export const createContact = async (req, res) => {

const files = req.files;
  const table = [];
    
  for (const file of files) {
    const { path } = file;
    table.push(path);
  }
  const newContact = new Contact({
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  email: req.body.email,
  contents: req.body.contents,
  createdAt: new Date().toISOString(),
  file:table
  });

  try {
    await newContact.save();

    res.status(201).json(newContact);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contact = await Contact.find();
    res.status(200).json(contact);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};