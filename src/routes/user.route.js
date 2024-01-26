import express from "express";
import {
  deleteUserController,
  getUserUserController,
  updateController,
  updatePasswordController,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

// routes
router.get("/getUser", verifyJWT, getUserUserController);
router.put("/updateUser", verifyJWT, updateController);
router.post("/updatePassword", verifyJWT, updatePasswordController);
router.delete("/deleteUser/:id", verifyJWT, deleteUserController);

export default router;
