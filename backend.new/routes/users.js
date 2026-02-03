import express from "express";
import { authMiddleware, adminOnly } from "../middleware/authMiddleware.js";
import {
  getAllUsers,
  getUserById,
  login,
  updateUser,
  deleteUser,
  getMe,
  register
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/", authMiddleware, adminOnly, getAllUsers);
router.get("/me", authMiddleware, getMe);
router.get("/:id", authMiddleware, getUserById);
router.put("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, adminOnly, deleteUser);

export default router;