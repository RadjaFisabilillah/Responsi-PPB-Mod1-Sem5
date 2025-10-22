import express from "express";
import { ItemController } from "../controllers/itemController.js";

const router = express.Router();

// Endpoint sesuai README.md
router.get("/", ItemController.getAll); // Menangani GET /items dan GET /items?status=...
router.post("/", ItemController.create); // Menangani POST /items
router.get("/:id", ItemController.getById); // Menangani GET /items/:id
router.put("/:id", ItemController.update); // Menangani PUT /items/:id
router.delete("/:id", ItemController.remove); // Menangani DELETE /items/:id

export default router;
