import express from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  createRestaurantController,
  deleteRestaurantGetController,
  getAllRestaurantController,
  getRestaurantGetByIdController,
} from "../controllers/restaurant.controller.js";

const router = express.Router();

// routes
router.post("/create", verifyJWT, createRestaurantController);
router.get("/getAll", verifyJWT, getAllRestaurantController);
router.get("/get/:id", getRestaurantGetByIdController);
router.delete("/delete/:id", verifyJWT, deleteRestaurantGetController);

export default router;
