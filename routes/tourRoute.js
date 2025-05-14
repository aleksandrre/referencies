import express from "express";
import { getAllTour, registerTour } from "../controllers/tourController.js";

const router = express.Router();

router.post("/", registerTour);

router.get("/", getAllTour);

export default router;
