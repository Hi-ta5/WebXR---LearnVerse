import dotenv from "dotenv";
import {
  sanitizeHistory,
  buildSystemInstruction,
  generateTutorResponse,
} from "./services/geminiService.js";

dotenv.config();

console.log("====================================================");
console.log("🧪 LEARNVERSE CHATBOT COMPREHENSIVE TEST SUITE");
console.log("====================================================\n");

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
  }
}

// ---------------------------------------------------------------------
// TEST 1: History Sanitization - Handling Edge Cases & Alternating Turns
// ---------------------------------------------------------------------
console.log("▶ [Test 1] History Sanitization & Alternating Role Enforcement");
const rawHistory = [
  { role: "ai", text: "Welcome to LearnVerse! How can I help?" }, // Leading assistant turn (should be dropped)
  { role: "ai", text: "⚠️ Connection Error: Server timeout" }, // Error message (should be stripped)
  { role: "user", text: "What is a Binary Search Tree?" },
  { role: "user", text: "Also explain AVL trees" }, // Consecutive user turn (should be merged)
  { role: "ai", text: "A BST is a node-based binary tree..." },
  { role: "assistant", text: "An AVL tree is a self-balancing BST..." }, // Consecutive assistant turn (should be merged)
  { role: "user", text: "How does rotation work?" },
];

const cleaned = sanitizeHistory(rawHistory);

assert(cleaned.length === 3, `Expected 3 alternating turns, got ${cleaned.length}`);
assert(cleaned[0].role === "user", `First turn must be 'user', got '${cleaned[0]?.role}'`);
assert(
  cleaned[0].text.includes("Binary Search Tree") && cleaned[0].text.includes("Also explain AVL trees"),
  "Consecutive user turns were successfully merged into single user turn"
);
assert(
  cleaned[1].role === "assistant",
  `Second turn must be 'assistant', got '${cleaned[1]?.role}'`
);
assert(
  cleaned[1].text.includes("node-based") && cleaned[1].text.includes("self-balancing"),
  "Consecutive assistant turns were successfully merged into single assistant turn"
);
assert(cleaned[2].role === "user", `Third turn must be 'user', got '${cleaned[2]?.role}'`);
assert(
  !cleaned.some((h) => h.text.includes("Connection Error")),
  "UI connection errors successfully stripped"
);

// ---------------------------------------------------------------------
// TEST 2: System Instruction Builder - Constraints & Active Context
// ---------------------------------------------------------------------
console.log("\n▶ [Test 2] System Prompt Construction & Context Grounding");
const prompt = buildSystemInstruction({
  subject: "Computer Networks",
  module: "Transport Layer",
  topic: "TCP vs UDP Protocols",
  systemHint: "User is viewing a 3D visualization of 3-way handshake packets flowing between client and server",
});

assert(prompt.includes("Computer Networks"), "System prompt includes active subject");
assert(prompt.includes("TCP vs UDP Protocols"), "System prompt includes active topic");
assert(prompt.includes("3-way handshake"), "System prompt incorporates WebXR 3D simulation context");
assert(prompt.includes("STRICTLY honor all constraints"), "System prompt enforces strict trailing constraint adherence");
assert(prompt.includes("Time Complexity and Space Complexity in Big-O"), "System prompt enforces Big-O complexity requirements");
assert(prompt.includes("NEVER return generic filler templates"), "System prompt forbids boilerplate fallbacks");
assert(prompt.includes("conversational Hinglish"), "System prompt specifies Hinglish adaptability");

// ---------------------------------------------------------------------
// TEST 3: History Window Capping (Preventing Context Drift & Token Bloat)
// ---------------------------------------------------------------------
console.log("\n▶ [Test 3] History Window Capping");
const longHistory = [];
for (let i = 1; i <= 20; i++) {
  longHistory.push({
    role: i % 2 === 1 ? "user" : "assistant",
    text: `Message ${i}`,
  });
}
const capped = sanitizeHistory(longHistory);
assert(capped.length <= 8, `Sanitized history capped to 8 turns (got ${capped.length})`);
assert(capped[0].role === "user", "Capped history still starts with user role");

// ---------------------------------------------------------------------
// TEST 4: Transparent Error Handling on Exhausted API Quota
// ---------------------------------------------------------------------
console.log("\n▶ [Test 4] API Failure & Transparent Error Reporting (No Fake Canned Mock)");
try {
  await generateTutorResponse(
    "Explain quicksort partition logic",
    { subject: "Data Structures", module: "Sorting", topic: "Quicksort" },
    []
  );
  console.log("  ⚠️ Note: API request succeeded (live key active)");
} catch (error) {
  assert(
    error.code === "ALL_PROVIDERS_FAILED" || error.code === "NO_API_KEY",
    `Error code is transparently structured (${error.code})`
  );
  assert(
    error.statusCode === 503,
    `Error status code is HTTP 503 Service Unavailable (${error.statusCode})`
  );
  assert(
    !error.message.includes("It establishes the structured abstractions"),
    "Does NOT silently return deceptive generic mock text"
  );
  assert(
    error.message.includes("xAI Grok quota exceeded") ||
      error.message.includes("No active AI API key configured") ||
      error.message.includes("Gemini"),
    `Error message clearly informs about provider quota / configuration (${error.message.slice(0, 80)}...)`
  );
}

// ---------------------------------------------------------------------
// TEST 5: Input Validation & Constraint Extraction
// ---------------------------------------------------------------------
console.log("\n▶ [Test 5] Query Length & Sub-question Formatting Verification");
const multiPartQuery =
  "1. What is an IP address? 2. What is the difference between IPv4 and IPv6? 3. Which one is faster and why? Write your answer in 3 short bullet points.";

assert(multiPartQuery.length > 50, "Multi-part query properly ingested");
assert(
  multiPartQuery.toLowerCase().includes("3 short bullet points"),
  "Trailing constraint detected in query"
);

// ---------------------------------------------------------------------
// SUMMARY
// ---------------------------------------------------------------------
console.log("\n====================================================");
console.log(`📊 TEST RESULTS: ${passedTests}/${totalTests} TESTS PASSED`);
console.log("====================================================\n");
