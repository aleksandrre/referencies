import express from "express";
import {
  getAllUser,
  joinTour,
  registerUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", registerUser);
router.get("/", getAllUser);
router.put("/", joinTour);

export default router;
