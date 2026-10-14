import express from "express";
import rateLimiter from "../middleware/rateLimiter.js";
import { getTutorAnswer } from "../controllers/chatbotController.js";

const router = express.Router();

// Apply rate limiting middleware and link controller action
router.post("/", rateLimiter, getTutorAnswer);

export default router;