import express from "express";

import { signin,signup, updateUser, getUser} from "../controllers/user.js";

const router = express.Router();

//http://localhost:5000/user

router.post("/signin", signin);
router.post("/signup", signup);
router.patch("/:id", updateUser);
router.get("/:id", getUser);

export default router;
