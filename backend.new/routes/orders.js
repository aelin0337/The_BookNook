import express from "express";
import { authMiddleware, adminOnly } from "../middleware/authMiddleware.js";
import {
  getAllOrders,
  getOrderById,
  createOrder,
  deleteOrder,
  getMyOrders
} from "../controllers/orderController.js";

const router = express.Router();

router.get("/my", authMiddleware, getMyOrders);
router.get("/", authMiddleware, adminOnly, getAllOrders); 
router.get("/:id", authMiddleware, getOrderById);
router.post("/", authMiddleware, createOrder);
router.delete("/:id", authMiddleware, adminOnly, deleteOrder);

export default router;