import { generateTutorResponse } from "../services/geminiService.js";

/**
 * Handles incoming chatbot questions from students.
 * Validates request payload and triggers Gemini API or fallback response.
 * Supports conversation history for context-aware follow-up responses.
 */
export async function getTutorAnswer(req, res) {
  try {
    const { message, subject, module, topic, history } = req.body;

    // Validation
    if (!message || typeof message !== "string" || message.trim() === "") {
      return res.status(400).json({
        error: "Message is required and must be a valid string.",
      });
    }

    if (message.length > 2000) {
      return res.status(400).json({
        error: "Message length exceeds the 2000 character limit.",
      });
    }

    // Validate history if provided
    let conversationHistory = [];
    if (Array.isArray(history)) {
      // Only take the last 10 messages to keep token count manageable
      conversationHistory = history
        .slice(-10)
        .filter(
          (h) =>
            h &&
            typeof h.role === "string" &&
            typeof h.text === "string" &&
            h.text.trim().length > 0
        );
    }

    // Call service to generate response
    const reply = await generateTutorResponse(
      message.trim(),
      {
        subject: subject || "General Engineering",
        module: module || "Core Concepts",
        topic: topic || "General Discussion",
      },
      conversationHistory
    );

    return res.json({
      reply,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error in chatbot controller:", error);
    return res.status(500).json({
      error: "An unexpected error occurred in the AI Tutor engine.",
    });
  }
}
