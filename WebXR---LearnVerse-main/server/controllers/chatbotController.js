import { generateTutorResponse } from "../services/geminiService.js";

/**
 * Handles incoming chatbot questions from students.
 * Validates request payload and triggers Gemini / Grok API response.
 * Supports conversation history and WebXR scene hints for context-aware tutoring.
 */
export async function getTutorAnswer(req, res) {
  try {
    const { message, subject, module, topic, history, systemHint } = req.body;

    // Validation
    if (!message || typeof message !== "string" || message.trim() === "") {
      return res.status(400).json({
        error: "Message is required and must be a valid non-empty string.",
        code: "INVALID_MESSAGE",
      });
    }

    if (message.length > 4000) {
      return res.status(400).json({
        error: "Message length exceeds the 4000 character limit.",
        code: "MESSAGE_TOO_LONG",
      });
    }

    // Call service to generate response
    const reply = await generateTutorResponse(
      message.trim(),
      {
        subject: subject || "General Engineering",
        module: module || "Core Concepts",
        topic: topic || "General Discussion",
        systemHint: typeof systemHint === "string" ? systemHint.trim() : undefined,
      },
      Array.isArray(history) ? history : []
    );

    return res.json({
      reply,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[Chatbot Controller Error]:", error.message || error);
    const statusCode = error.statusCode || 500;
    return res.status(statusCode).json({
      error: error.message || "An unexpected error occurred in the AI Tutor engine.",
      code: error.code || "CHATBOT_ERROR",
    });
  }
}
