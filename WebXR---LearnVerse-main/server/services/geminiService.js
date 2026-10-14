import { GoogleGenAI } from "@google/genai";

let geminiClient = null;

/**
 * Returns a cached singleton instance of GoogleGenAI client.
 * Validates that the key is present and not a placeholder.
 */
export function getGeminiClient() {
  if (geminiClient) return geminiClient;

  const apiKey = (
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    process.env.GEMINI_KEY ||
    ""
  ).trim();

  if (
    !apiKey ||
    apiKey.startsWith("your_") ||
    apiKey === "YOUR_KEY_HERE" ||
    apiKey.includes("placeholder")
  ) {
    return null;
  }

  try {
    geminiClient = new GoogleGenAI({ apiKey });
    console.log("[Chatbot] ✅ Google Gen AI (Gemini) SDK client initialized.");
    return geminiClient;
  } catch (error) {
    console.error("[Chatbot] ❌ Failed to initialize GoogleGenAI client:", error.message);
    return null;
  }
}

/**
 * Constructs a comprehensive, highly-structured academic system prompt.
 * Enforces: direct answers first, strict adherence to all constraints,
 * structured formatting, code with Big-O complexity, math rigor, and Hinglish adaptability.
 */
export function buildSystemInstruction({ subject, module, topic, systemHint } = {}) {
  const activeSubject = subject || "Computer Science & Engineering";
  const activeModule = module || "Core Concepts";
  const activeTopic = topic || "General Discussion";

  return `You are LearnVerse AI Tutor, an elite academic and technical AI tutor for students learning Computer Science, Engineering, Programming, and WebXR simulations.

Current Academic Context:
- Active Subject: ${activeSubject}
- Active Module: ${activeModule}
- Active Topic: ${activeTopic}
${systemHint ? `- 3D WebXR Simulation Context: ${systemHint}` : ""}

CORE QUALITY & BEHAVIORAL MANDATES:

1. COMPLETE QUERY COMPREHENSION & DIRECT ANSWER FIRST:
- Read and analyze the ENTIRE user query: its intent, context, sub-parts, and all constraints.
- Always provide the direct, core answer immediately in your first sentence.
- NEVER start with filler or throat-clearing phrases (e.g., avoid "Sure!", "Great question!", "Certainly, let me help you with that", "In this module...").
- STRICTLY honor all constraints and conditions mentioned anywhere in the prompt—especially negative constraints or conditions placed at the very end of the user message (e.g. "without recursion", "in C++", "in Python 3", "using iteration only", "limit to 3 bullet points"). Never drop or overlook trailing constraints.

2. MULTI-PART & COMPLEX QUESTIONS:
- If the user asks a multi-part question or specifies multiple requirements, systematically address EVERY single sub-question in order.
- Use clean Markdown headings (###), bold titles, and numbered lists to ensure each sub-part is clearly addressed.

3. CODE IMPLEMENTATIONS & TECHNICAL PRECISION:
- When code is requested or relevant:
  - Write clean, modern, robust, runnable code in markdown fenced blocks with explicit language tags (e.g., \`\`\`python, \`\`\`cpp, \`\`\`javascript).
  - Add concise inline comments for critical or non-obvious steps.
  - ALWAYS state the exact Time Complexity and Space Complexity in Big-O notation with a one-sentence rationale.
- For debugging/troubleshooting questions:
  - Identify the root cause bug first.
  - Explain why it causes failure.
  - Provide the corrected code.
  - Give a brief prevention tip.

4. COMPARISONS & TRADE-OFFS:
- When asked to compare concepts, algorithms, or protocols:
  - Provide a clear, structured Markdown table comparing key dimensions (e.g., Mechanism, Time/Space Complexity, Overhead, Best Use Case).
  - Provide actionable guidance on when to choose each in real-world systems.

5. MATHEMATICAL & LOGIC RIGOR:
- For math, arithmetic, network metrics, or algorithmic calculations:
  - Show the step-by-step formula and derivation clearly.
  - Explicitly highlight the final calculated result.

6. CONTEXT & FOLLOW-UP RESOLUTION:
- Resolve contextual references (e.g., "what about its space complexity?", "how does it compare to the previous one?") accurately using the conversation history.
- Prioritize the latest question while preserving earlier context.
- If the user asks an unrelated question or switches topics, pivot smoothly to the new topic without dragging unnecessary baggage from previous discussions.

7. LANGUAGE ADAPTABILITY:
- If the user communicates in Hindi or Hinglish, answer naturally and fluently in conversational Hinglish while keeping technical terms, code, and keywords in standard English.
- Otherwise, provide professional, clear English.

8. ANTI-HALLUCINATION, CLARIFICATION & HONESTY:
- Do not hallucinate capabilities or pretend actions were performed outside the conversation.
- If a question is genuinely ambiguous, broad, or lacks critical specifications (e.g. "fix my code/tree" without code), always provide the direct foundational answer/common causes first, and conclude with a specific, targeted clarifying question (ending with a question mark) asking for their specific error, symptoms, or constraints.
- NEVER return generic filler templates or canned placeholder text.`;
}

/**
 * Normalizes, validates, and sanitizes the conversation history.
 * - Strips empty messages and connection error logs
 * - Enforces alternating turns (user -> assistant -> user)
 * - Ensures history starts with a 'user' turn (required by Gemini & OpenAI standards)
 * - Limits context window to the most recent 8 messages to prevent context drift and bloat
 */
export function sanitizeHistory(history = []) {
  if (!Array.isArray(history) || history.length === 0) {
    return [];
  }

  const cleaned = [];

  for (const item of history) {
    if (!item || typeof item !== "object") continue;

    const rawText =
      typeof item.text === "string"
        ? item.text
        : typeof item.content === "string"
        ? item.content
        : "";

    const text = rawText.trim();
    if (!text) continue;

    // Filter out client error logs or connection notices
    if (
      text.startsWith("⚠️") ||
      text.includes("Connection Error") ||
      text.includes("Please make sure the backend server is running")
    ) {
      continue;
    }

    const rawRole = (item.role || "").toLowerCase();
    const role = rawRole === "user" ? "user" : "assistant";

    cleaned.push({ role, text });
  }

  if (cleaned.length === 0) return [];

  // Limit to most recent 8 messages (4 exchanges) for relevant, fresh context
  const recent = cleaned.slice(-8);

  const alternating = [];
  for (const msg of recent) {
    if (alternating.length === 0) {
      // Must start with a user turn
      if (msg.role === "user") {
        alternating.push({ ...msg });
      }
    } else {
      const last = alternating[alternating.length - 1];
      if (last.role === msg.role) {
        // Merge adjacent identical roles
        last.text = `${last.text}\n\n${msg.text}`;
      } else {
        alternating.push({ ...msg });
      }
    }
  }

  return alternating;
}

/**
 * Executes a query against Google Gemini via @google/genai SDK.
 */
export async function callGeminiApi(message, context, sanitizedHistory = []) {
  const client = getGeminiClient();
  if (!client) {
    const err = new Error(
      "Gemini API client is not configured. Please set a valid GEMINI_API_KEY in server/.env."
    );
    err.code = "GEMINI_NOT_CONFIGURED";
    err.statusCode = 503;
    throw err;
  }

  const systemInstruction = buildSystemInstruction(context);

  // Build contents payload matching Gemini's role specification ('user' and 'model')
  const contents = sanitizedHistory.map((h) => ({
    role: h.role === "user" ? "user" : "model",
    parts: [{ text: h.text }],
  }));

  // Append the current user query
  contents.push({
    role: "user",
    parts: [{ text: message }],
  });

  const configuredModel = (process.env.GEMINI_MODEL || "gemini-3.5-flash-lite").trim();
  const candidateModels = [
    configuredModel,
    "gemini-3.5-flash-lite",
    "gemini-3.5-flash",
    "gemini-3.8-flash",
    "gemini-3.7-flash",
  ].filter((m, i, arr) => m && arr.indexOf(m) === i);

  let lastError = null;

  for (const model of candidateModels) {
    try {
      console.log(`[Chatbot] Querying Gemini API (${model})...`);

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error(`Gemini API request timed out after 25s (${model})`)),
          25000
        )
      );

      const requestPromise = client.models.generateContent({
        model,
        contents,
        config: {
          systemInstruction,
          temperature: 0.4,
          maxOutputTokens: 2500,
        },
      });

      const response = await Promise.race([requestPromise, timeoutPromise]);

      const text =
        response?.text ||
        response?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (text && text.trim().length > 0) {
        console.log(`[Chatbot] ✅ Gemini (${model}) response generated (${text.trim().length} chars).`);
        return text.trim();
      }

      // Check candidate finishReason for blocked output
      const candidate = response?.candidates?.[0];
      if (candidate?.finishReason && candidate.finishReason !== "STOP") {
        console.warn(`[Chatbot] ⚠️ Gemini candidate finishReason: ${candidate.finishReason}`);
        if (candidate.finishReason === "SAFETY") {
          const safetyErr = new Error("The request was filtered by Gemini safety policy.");
          safetyErr.code = "SAFETY_FILTER_TRIGGERED";
          throw safetyErr;
        }
      }

      throw new Error(`Empty response generated by Gemini model ${model}.`);
    } catch (err) {
      console.warn(`[Chatbot] ⚠️ Gemini (${model}) returned error: ${err.message}`);
      lastError = err;

      // Permanent authorization or invalid key errors should not retry other models
      if (
        err.message?.includes("API_KEY_INVALID") ||
        err.message?.includes("API key not valid") ||
        err.message?.includes("403 Forbidden")
      ) {
        const authErr = new Error(
          `Gemini API key rejected: ${err.message}. Please verify your GEMINI_API_KEY.`
        );
        authErr.code = "GEMINI_AUTH_ERROR";
        authErr.statusCode = 403;
        throw authErr;
      }
    }
  }

  throw lastError || new Error("Failed to generate response from Gemini API.");
}

/**
 * Executes a query against xAI Grok using the OpenAI-compatible completions endpoint.
 */
export async function callXaiApi(message, context, sanitizedHistory = []) {
  const apiKey = (process.env.XAI_API_KEY || "").trim();
  if (!apiKey || apiKey.startsWith("your_")) {
    const err = new Error("xAI Grok API key is missing or invalid in server/.env.");
    err.code = "XAI_NOT_CONFIGURED";
    err.statusCode = 503;
    throw err;
  }

  const systemInstruction = buildSystemInstruction(context);

  const messages = [
    { role: "system", content: systemInstruction },
    ...sanitizedHistory.map((h) => ({
      role: h.role === "user" ? "user" : "assistant",
      content: h.text,
    })),
    { role: "user", content: message },
  ];

  const configuredModel = (process.env.XAI_MODEL || "grok-2-latest").trim();
  const candidateModels = [
    configuredModel,
    "grok-2-latest",
    "grok-beta",
  ].filter((m, i, arr) => m && arr.indexOf(m) === i);

  let lastError = null;

  for (const model of candidateModels) {
    try {
      console.log(`[Chatbot] Querying xAI Grok API (${model})...`);
      const response = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages,
          temperature: 0.4,
          max_tokens: 2500,
        }),
        signal: AbortSignal.timeout(25000),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.choices?.[0]?.message?.content) {
        const text = data.choices[0].message.content.trim();
        console.log(`[Chatbot] ✅ xAI Grok (${model}) response generated (${text.length} chars).`);
        return text;
      }

      const errDetail =
        data?.error?.message ||
        data?.error ||
        data?.code ||
        `HTTP ${response.status} ${response.statusText}`;

      const errorString =
        typeof errDetail === "object" ? JSON.stringify(errDetail) : String(errDetail);

      console.warn(`[Chatbot] ⚠️ xAI Grok (${model}) error: ${errorString}`);

      // Handle credit / spending limit errors
      if (
        response.status === 403 ||
        errorString.includes("credits") ||
        errorString.includes("limit") ||
        errorString.includes("permission-denied")
      ) {
        const quotaErr = new Error(
          `xAI Grok quota exceeded: ${errorString}`
        );
        quotaErr.code = "XAI_QUOTA_EXCEEDED";
        quotaErr.statusCode = 503;
        throw quotaErr;
      }

      if (response.status === 401 || errorString.includes("Incorrect API key")) {
        const authErr = new Error("Invalid xAI Grok API key.");
        authErr.code = "XAI_AUTH_ERROR";
        authErr.statusCode = 401;
        throw authErr;
      }

      lastError = new Error(`xAI Grok error: ${errorString}`);
    } catch (err) {
      if (err.code === "XAI_QUOTA_EXCEEDED" || err.code === "XAI_AUTH_ERROR") {
        throw err;
      }
      console.warn(`[Chatbot] ⚠️ xAI Grok (${model}) request failed: ${err.message}`);
      lastError = err;
    }
  }

  throw lastError || new Error("Failed to generate response from xAI Grok API.");
}

/**
 * Main entry point for generating educational tutor responses.
 * Orchestrates Gemini and Grok providers with automatic fallback,
 * robust error reporting, and zero deceptive boilerplate fallbacks.
 */
export async function generateTutorResponse(
  message,
  { subject, module, topic, systemHint } = {},
  rawHistory = []
) {
  const sanitizedHistory = sanitizeHistory(rawHistory);
  const context = { subject, module, topic, systemHint };

  const geminiKey = (
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    ""
  ).trim();

  const hasGeminiKey = Boolean(
    geminiKey &&
      !geminiKey.startsWith("your_") &&
      geminiKey !== "YOUR_KEY_HERE" &&
      !geminiKey.includes("placeholder")
  );

  const xaiKey = (process.env.XAI_API_KEY || "").trim();
  const hasXaiKey = Boolean(
    xaiKey &&
      !xaiKey.startsWith("your_") &&
      !xaiKey.includes("placeholder")
  );

  if (!hasGeminiKey && !hasXaiKey) {
    const error = new Error(
      "No active AI API key configured. Please set GEMINI_API_KEY (Google Gemini) or XAI_API_KEY (xAI Grok) in server/.env."
    );
    error.statusCode = 503;
    error.code = "NO_API_KEY";
    throw error;
  }

  const preferredProvider = (process.env.AI_PROVIDER || "").toLowerCase().trim();

  // Determine provider execution order
  const providers = [];
  if (preferredProvider === "xai" || preferredProvider === "grok") {
    if (hasXaiKey) providers.push("xai");
    if (hasGeminiKey) providers.push("gemini");
  } else {
    // Default: Gemini first if configured, followed by xAI Grok
    if (hasGeminiKey) providers.push("gemini");
    if (hasXaiKey) providers.push("xai");
  }

  const attemptErrors = [];

  for (const provider of providers) {
    try {
      if (provider === "gemini") {
        return await callGeminiApi(message, context, sanitizedHistory);
      }
      if (provider === "xai") {
        return await callXaiApi(message, context, sanitizedHistory);
      }
    } catch (err) {
      console.error(`[Chatbot] Provider '${provider}' failed: ${err.message}`);
      attemptErrors.push({ provider, message: err.message, code: err.code, statusCode: err.statusCode });
    }
  }

  // If all providers failed, construct a transparent, actionable error
  const summaries = attemptErrors
    .map((e) => `${e.provider.toUpperCase()}: ${e.message}`)
    .join(" | ");

  const combinedError = new Error(
    `AI Tutor service is currently unavailable. Provider status: ${summaries}`
  );
  combinedError.statusCode = attemptErrors[0]?.statusCode || 503;
  combinedError.code = "ALL_PROVIDERS_FAILED";
  combinedError.details = attemptErrors;
  throw combinedError;
}
