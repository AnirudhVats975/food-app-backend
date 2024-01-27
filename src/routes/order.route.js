import express from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  orderStatusController,
  placeOrderController,
} from "../controllers/order.controller.js";

const router = express.Router();

// routes
router.post("/placeOrder", verifyJWT, placeOrderController);
router.put("/updateOrderStatus", verifyJWT, orderStatusController);

export default router;
