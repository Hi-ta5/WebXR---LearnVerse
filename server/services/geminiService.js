import { GoogleGenAI } from "@google/genai";

let ai = null;

// Initialize GoogleGenAI SDK client (lazily, singleton)
const getClient = () => {
  if (ai) return ai;

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.warn("⚠️  GEMINI_API_KEY is not set in server/.env — running in offline/fallback mode.");
    return null;
  }

  // Reject keys that still contain placeholder prefixes
  if (apiKey.startsWith("your_new_api_key_here") || apiKey === "YOUR_KEY_HERE") {
    console.warn("⚠️  GEMINI_API_KEY contains a placeholder value — please update server/.env with a real key.");
    return null;
  }

  try {
    ai = new GoogleGenAI({ apiKey });
    console.log("✅ Gemini AI client initialized successfully.");
    return ai;
  } catch (error) {
    console.error("❌ Failed to initialize GoogleGenAI client:", error.message);
    return null;
  }
};

/**
 * Generates an educational tutoring response using Gemini AI.
 * Falls back to a structured offline response if the API is unavailable.
 * @param {string} message - The student's question
 * @param {object} context - { subject, module, topic }
 * @param {Array} history - Conversation history [{role, text}]
 * @returns {Promise<string>} The tutor's response text
 */
export async function generateTutorResponse(message, { subject, module, topic }, history = []) {
  const client = getClient();

  if (!client) {
    console.log(`[Chatbot] Running in offline mode — returning fallback for topic: "${topic}"`);
    return getFallbackResponse(message, { subject, module, topic });
  }

  // Build the system context
  const systemInstruction = `You are an expert educational AI tutor for the LearnVerse interactive WebXR learning platform.
Your role is to be a helpful, engaging personal tutor for engineering and computer science students.

Current Active Page Context:
- Active Subject: ${subject || "General Engineering"}
- Active Module: ${module || "Core Concepts"}  
- Active Topic: ${topic || "General Discussion"}

Crucial Flexibility Rule:
1. If the student asks a question about the active topic ("${topic}"), provide a detailed, context-rich explanation.
2. If the student asks a question about ANY OTHER subject, module, engineering topic, software engineering concept, or general question (even if completely unrelated to "${topic}"), ALWAYS answer their question directly, thoroughly, and accurately!
3. NEVER refuse to answer or force the conversation back to the active topic if the student asks about something else.

Formatting Rules:
1. Respond in a friendly, encouraging, and clear tone.
2. Use clean markdown formatting:
   - Bold for key terms (**term**)
   - Numbered lists formatted clearly ("1. ", "2. ", "3. ")
   - Bullet lists formatted with "- "
   - Clear formula representations without raw LaTeX syntax errors (e.g. use clean text like: "Total Delay = Transmission Delay + Propagation Delay + Queuing Delay + Processing Delay")
3. Explain concepts step-by-step with concrete examples and real-world analogies.
4. When the user asks a follow-up question, reference the conversation history for seamless continuity.`;

  // Build contents array with conversation history
  const contents = [];

  // Add previous messages as conversation history
  if (history && history.length > 0) {
    for (const msg of history) {
      contents.push({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.text }]
      });
    }
  }

  // Add the current user message
  contents.push({
    role: "user",
    parts: [{ text: message }]
  });

  // Valid Gemini model candidates for @google/genai SDK
  const candidateModels = [
    process.env.GEMINI_MODEL,
    "gemini-3.6-flash",
    "gemini-2.5-flash",
    "gemini-1.5-flash",
    "gemini-1.5-pro",
  ].filter(Boolean);

  let lastError = null;
  for (const modelName of candidateModels) {
    try {
      console.log(`[Chatbot] Calling Gemini API (${modelName}) for: "${message.substring(0, 60)}..."`);

      const response = await client.models.generateContent({
        model: modelName,
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
        }
      });

      // Extract text from response
      const text = response?.text || response?.candidates?.[0]?.content?.parts?.[0]?.text || null;

      if (text) {
        console.log(`[Chatbot] ✅ Gemini response via ${modelName} (${text.length} chars).`);
        return text;
      }
    } catch (error) {
      console.warn(`[Chatbot] ⚠️ Model ${modelName} failed: ${error.message}`);
      lastError = error;
    }
  }

  console.error("❌ All Gemini models failed, falling back to structured offline tutor:", lastError?.message);

  // Fallback to topic-aware local response instead of a dead-end error
  return getFallbackResponse(message, { subject, module, topic });
}

/**
 * Structured offline fallback when no Gemini API key is configured or network is unavailable.
 * Provides helpful, topic-aware responses.
 */
function getFallbackResponse(message, { subject, module, topic }) {
  const msg = message.toLowerCase();
  const subLower = (subject || "").toLowerCase();
  const topLower = (topic || "").toLowerCase();

  // === CN / OSI Contextual Fallbacks ===
  if (subLower.includes("computer network") || topLower.includes("osi") || topLower.includes("network")) {
    if (msg.includes("osi") || msg.includes("layer") || msg.includes("model")) {
      return `👋 **Hello! I'm your LearnVerse AI Tutor**

### The OSI Model — 7-Layer Reference Model

The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes how different network systems communicate over a network.

#### The 7 Layers (Top to Bottom — Encapsulation Order):
1. **Layer 7 — Application**: Network services for applications (HTTP, FTP, DNS, SMTP)
2. **Layer 6 — Presentation**: Data formatting, encryption, compression (TLS/SSL)
3. **Layer 5 — Session**: Session establishment, management, and termination
4. **Layer 4 — Transport**: End-to-end communication, reliability, flow control (TCP/UDP)
5. **Layer 3 — Network**: Logical addressing and routing (IP addresses, routers)
6. **Layer 2 — Data Link**: Physical addressing, frame delivery (MAC addresses, switches)
7. **Layer 1 — Physical**: Raw bit transmission over the physical medium

#### Easy Mnemonic (Top→Bottom): **"All People Seem To Need Data Processing"**

**Real-World Example**: When you send a message on Facebook, it passes DOWN through all 7 layers on your device (adding headers at each layer), travels across the internet, then passes UP through all 7 layers at Facebook's server (stripping headers at each layer).`;
    }
    if (msg.includes("tcp") || msg.includes("udp")) {
      return `👋 **Hello! I'm your LearnVerse AI Tutor**

### TCP vs UDP — Transport Layer Protocols

**TCP (Transmission Control Protocol)**:
- **Connection-oriented**: Establishes a 3-way handshake (SYN → SYN-ACK → ACK) before data transfer
- **Reliable**: Guarantees delivery, ordering, and error checking
- **Slower** but ensures every packet arrives correctly
- **Use cases**: Web browsing (HTTP/HTTPS), email, file transfer (FTP)

**UDP (User Datagram Protocol)**:
- **Connectionless**: Sends data without establishing a connection
- **Unreliable**: No delivery guarantee — "fire and forget"
- **Faster** with lower overhead
- **Use cases**: Video streaming, online gaming, DNS, VoIP

**Analogy**: TCP is like a registered letter (receipt confirmed), UDP is like throwing a flyer — fast, but no guarantee it lands!`;
    }
  }

  // === DBMS (Database Management Systems) Contextual Fallbacks ===
  if (subLower.includes("dbms") || subLower.includes("database") || topLower.includes("sql") || topLower.includes("relation") || topLower.includes("normal") || topLower.includes("acid") || topLower.includes("index")) {
    if (msg.includes("normal") || msg.includes("1nf") || msg.includes("2nf") || msg.includes("3nf") || msg.includes("bcnf")) {
      return `👋 **Hello! I'm your LearnVerse AI Tutor**

### Database Normalization Overview (1NF to BCNF)
Normalization is the process of organizing data in a relational database to minimize redundancy and eliminate insertion, update, and deletion anomalies.

#### Key Normal Forms:
1. **1NF (First Normal Form)**: Ensures all attribute domain values are atomic. Eliminates multi-valued attributes and repeating column groups.
2. **2NF (Second Normal Form)**: Must be in 1NF and have **no partial functional dependencies** (every non-prime attribute must depend on the entire candidate key).
3. **3NF (Third Normal Form)**: Must be in 2NF and have **no transitive dependencies** (for any dependency X → Y, X must be a superkey or Y must be a prime attribute).
4. **BCNF (Boyce-Codd Normal Form)**: A stricter variant of 3NF where for **every** functional dependency X → Y, X must strictly be a **superkey**.

*Pro-Tip: Normalization balances data integrity with query complexity. Highly normalized schemas require more table joins.*`;
    }

    if (msg.includes("join") || msg.includes("inner") || msg.includes("outer") || msg.includes("cross")) {
      return `👋 **Hello! I'm your LearnVerse AI Tutor**

### SQL Table Joins Explained
Joins combine columns from one or more tables based on common values.

#### Common Join Types:
- **INNER JOIN**: Returns only records that have matching keys in both tables.
- **LEFT (OUTER) JOIN**: Returns all records from the left table, plus matched values from the right table (unmatched right columns become \`NULL\`).
- **RIGHT (OUTER) JOIN**: Returns all records from the right table, plus matched values from the left table with \`NULL\` padding where unmatched.
- **FULL OUTER JOIN**: Returns all records when there is a match in either table, filling non-matching sides with \`NULL\`.
- **CROSS JOIN**: Produces the Cartesian product (N × M rows) of two tables.

\`\`\`sql
SELECT c.name, o.order_id, o.amount
FROM Customers c
LEFT JOIN Orders o ON c.customer_id = o.customer_id;
\`\`\``;
    }

    if (msg.includes("acid") || msg.includes("transaction") || msg.includes("isolation") || msg.includes("durability")) {
      return `👋 **Hello! I'm your LearnVerse AI Tutor**

### Database Transactions & The ACID Model
A transaction is a logical unit of database operations that must execute reliably.

#### The 4 ACID Properties:
1. **Atomicity ("All or Nothing")**: All operations succeed, or all changes are rolled back using undo transaction logs (WAL).
2. **Consistency**: Transactions transition the database from one valid state satisfying all schema constraints to another valid state.
3. **Isolation**: Concurrent transactions execute independently without interference, preventing dirty reads and phantom reads.
4. **Durability**: Once a transaction commits, its modifications persist in non-volatile storage even across hardware crashes.

*Concurrency control protocols like Two-Phase Locking (2PL) guarantee conflict serializability.*`;
    }

    if (msg.includes("index") || msg.includes("b+") || msg.includes("b tree") || msg.includes("clustered")) {
      return `👋 **Hello! I'm your LearnVerse AI Tutor**

### Database Indexing & B+ Tree Structures
An index is an auxiliary data structure that dramatically accelerates query search speeds from O(N) table scans to O(log N) tree lookups.

#### Key Concepts:
- **Clustered Index**: Determines the physical ordering of records on disk (maximum 1 per table).
- **Secondary (Non-Clustered) Index**: Stores column values paired with row pointers/keys back to table data pages.
- **B+ Tree Benefits**: High fan-out keeps tree depth shallow (h ≤ 4). All data records reside in leaf nodes, which are sequentially doubly-linked for blazing-fast range queries (\`BETWEEN\`, \`>\`, \`<\`).`;
    }

    if (msg.includes("er") || msg.includes("entity") || msg.includes("relationship") || msg.includes("cardinality")) {
      return `👋 **Hello! I'm your LearnVerse AI Tutor**

### Entity-Relationship (ER) Modeling
ER Modeling visually maps business domains into entities, attributes, and relationships.

#### Core Building Blocks:
- **Entity**: A real-world object (e.g., Student, Course). Strong entities have primary keys; weak entities depend on owner entities.
- **Attributes**: Simple, composite, multi-valued (double oval), and derived (dashed oval).
- **Cardinalities**: 1:1 (One-to-One), 1:N (One-to-Many), M:N (Many-to-Many).
- **Relational Schema Mapping**: M:N relationships convert into associative junction tables holding foreign keys of both entities.`;
    }
  }

  // === NLP (Natural Language Processing) Contextual Fallbacks ===
  if (subLower.includes("nlp") || topLower.includes("nlp") || subLower.includes("natural language")) {
    if (msg.includes("tokenize") || msg.includes("tokenization")) {
      return `👋 **Hello! I'm your LearnVerse AI Tutor**

### Concept: Tokenization
Tokenization is the foundational step of NLP that segments contiguous text streams into discrete structural units called tokens (words, characters, or subwords).

#### Key Takeaways:
1. **Word Tokenization**: Splits text strictly on whitespace and punctuation.
2. **Subword Tokenization (BPE, WordPiece)**: Used in models like BERT and GPT to balance vocabulary size while handling rare and out-of-vocabulary (OOV) words.
3. **Sentence Tokenization**: Splits paragraphs into individual sentences using punctuation delimiters.`;
    }
    if (msg.includes("stemming") || msg.includes("lemmatization") || msg.includes("preprocess") || msg.includes("cleaning")) {
      return `👋 **Hello! I'm your LearnVerse AI Tutor**

### Concept: Stemming vs Lemmatization
These are text normalization techniques used in preprocessing:

- **Stemming**: A heuristic rule-based approach that cuts off suffixes (e.g., "studying" → "studi"). Fast but crude, often yielding non-dictionary stems.
- **Lemmatization**: Uses morphological analysis and vocabulary dictionaries to return valid base dictionary forms (e.g., "better" → "good", "was" → "be").`;
    }
    if (msg.includes("embedding") || msg.includes("vector") || msg.includes("word2vec") || msg.includes("similarity")) {
      return `👋 **Hello! I'm your LearnVerse AI Tutor**

### Concept: Word Embeddings
Embeddings map words to dense, continuous vector spaces (e.g., 100-300 dimensions) where geometric proximity translates to semantic similarity.

**Famous example**: vector("King") - vector("Man") + vector("Woman") ≈ vector("Queen")

These representations are learned from large text corpora and capture rich semantic and syntactic relationships between words.`;
    }
    if (msg.includes("sentiment") || msg.includes("polarity") || msg.includes("opinion")) {
      return `👋 **Hello! I'm your LearnVerse AI Tutor**

### Concept: Sentiment Analysis
Sentiment analysis identifies the emotional tone and polarity of text (Positive, Negative, Neutral). Lexicon approaches look up word weights, whereas deep transformers compute context-aware aspect-based polarities.`;
    }
  }

  // General course navigation help
  if (msg.includes("navigate") || msg.includes("course") || msg.includes("roadmap") || msg.includes("subject") || msg.includes("learnverse")) {
    return `👋 **Hello! I'm your LearnVerse AI Tutor**

### Navigating LearnVerse
LearnVerse hosts 5 comprehensive engineering subjects:
1. **Operating Systems**: Processes, threading, scheduling, deadlocks, and virtual memory.
2. **Computer Networks**: OSI layers, physical encoding, topologies, TCP/UDP, and routing.
3. **Data Structures**: Contiguous arrays, stacks, queues, linked lists, and binary search trees.
4. **Natural Language Processing**: Preprocessing, tokenization, POS tagging, NER, TF-IDF, embeddings, and sentiment analysis.
5. **Database Management Systems (DBMS)**: Relational models, ER diagrams, SQL joins, normalization (1NF-BCNF), ACID transactions, and B+ tree indexing.

Launch any subject roadmap from the Subjects directory to begin your interactive 3D learning journey!`;
  }

  if (msg.includes("what is") || msg.includes("explain") || msg.includes("how does") || msg.includes("why") || msg.includes("define")) {
    return `👋 **Hello! I'm your LearnVerse AI Tutor**

### Topic: ${topic}
In the context of **${subject}** (${module} module), **${topic}** is a foundational concept.

#### Core Understanding
1. **What it is**: A core architecture and computational mechanism in ${subject}.
2. **Why it matters**: Understanding ${topic} is essential for designing scalable, reliable engineering systems.
3. **How it works**: It operates on well-defined mathematical principles, protocols, and data structures.

#### Study Guide
- Explore the interactive 3D WebXR simulation above.
- Review the Key Concepts and Real-World Analogies in the learning section.
- Take the module quiz to test your mastery and unlock the next node!`;
  }

  return `🤖 **LearnVerse AI Tutor**

**Active Topic:** *${topic}* — ${subject} › ${module}

I received your question: *"${message}"*

I can see you're studying **${topic}** in **${subject}**. Focus on these key areas:
- Review the topic overview and key concepts panel on the learning page.
- Interact with the 3D simulation to build intuitive mental models.
- Ask specific "explain", "what is", or "compare" questions to dive deeper into any subtopic!`;
}
