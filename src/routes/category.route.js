import express from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoryController,
  updateCategoryByIdController,
} from "../controllers/category.controller.js";

const router = express.Router();

// routes
router.post("/create", verifyJWT, createCategoryController);
router.get("/getAll", verifyJWT, getAllCategoryController);
router.put("/update/:id", verifyJWT, updateCategoryByIdController);
router.delete("/delete/:id", verifyJWT, deleteCategoryController);

export default router;
