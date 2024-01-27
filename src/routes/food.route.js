import express from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  createFoodController,
  deleteFoodController,
  getAllFoodController,
  getByRestaurantController,
  getSingleFoodController,
  updateFoodByIdController,
} from "../controllers/food.controller.js";

const router = express.Router();

// routes
router.post("/create", verifyJWT, createFoodController);
router.get("/getAll", verifyJWT, getAllFoodController);
router.get("/get/:id", verifyJWT, getSingleFoodController);
router.get("/getByRestaurant/:id", verifyJWT, getByRestaurantController);
router.put("/update/:id", verifyJWT, updateFoodByIdController);
router.delete("/delete/:id", verifyJWT, deleteFoodController);

export default router;
