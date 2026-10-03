import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  MessageSquare, Sparkles, X, Send, Copy, Check, Trash2, Loader2, Bot, HelpCircle, ChevronDown
} from "lucide-react";

// Subject and Topic dictionary maps for clean contextual tutoring
const SUBJECT_MAP = {
  "computer-networks": "Computer Networks",
  "operating-systems": "Operating Systems",
  "data-structures": "Data Structures",
  "nlp": "Natural Language Processing",
  "dbms": "Database Management Systems",
};

const TOPIC_MAP = {
  "osi-model": "OSI Model Layers",
  "physical-layer": "Physical Line Encoding Lab",
  "network-topologies": "Different Network Topologies",
  "tcp-udp": "TCP vs UDP Protocols",
  "routing": "Routing Algorithms",
  "congestion-control": "Congestion Control Systems",
  "threads": "Multi-Threads & Contexts",
  "process-management": "Process Management & PCB",
  "deadlocks": "Deadlocks & Resource Allocation",
  "cpu-scheduling": "CPU Scheduling Algorithms",
  "memory-management": "Memory Management Systems",
  "arrays": "Contiguous Array Lab",
  "stacks": "LIFO Stack Register",
  "queues": "FIFO Queue Pipeline",
  "linked-lists": "Dynamic Linked Nodes",
  "trees": "Hierarchical Tree Visualizer",
  "nlp-intro": "Introduction to NLP & Pipeline",
  "tokenization": "Tokenization Techniques",
  "text-preprocessing": "Text Preprocessing & Cleaning",
  "pos-tagging": "Part-of-Speech (POS) Tagging",
  "ner": "Named Entity Recognition (NER)",
  "bag-of-words": "Bag of Words (BoW) Model",
  "tf-idf": "TF-IDF Weighting & Vector Space",
  "word-embeddings": "Word Embeddings & Semantic Vectors",
  "sentiment-analysis": "Sentiment Analysis & Classification",
  "dbms-intro": "Introduction to DBMS & Architecture",
  "intro": "Introduction to DBMS & Architecture",
  "relational-model": "Relational Data Model & Keys",
  "er-model": "Entity-Relationship (ER) Modeling",
  "sql-joins": "SQL Queries & Table Joins",
  "sql-lab": "SQL DDL, DML & Aggregations",
  "normalization": "Database Normalization (1NF to BCNF)",
  "transactions": "Transaction Management & ACID Properties",
  "indexing": "Indexing & B+ Tree Storage",
};

function formatParam(str) {
  if (!str) return "";
  return str.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

// Renders markdown & formulas safely to rich HTML
function renderMarkdown(text) {
  if (!text) return "";

  let html = text;

  // 1. Pre-process LaTeX and math formulas into clean readable text
  html = html
    // Block math $$...$$
    .replace(/\$\$\s*\\text\{([^}]+)\}\s*=\s*(.*?)\$\$/g, '<div class="lv-formula-box"><span class="lv-formula-title">$1</span> = <span class="lv-formula-body">$2</span></div>')
    .replace(/\$\$(.*?)\$\$/gs, (_m, formula) => {
      const clean = formula
        .replace(/\\text\{([^}]+)\}/g, '$1')
        .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
        .replace(/\\rightarrow|\\to/g, ' ➔ ')
        .replace(/\\cdot/g, ' • ')
        .replace(/\\times/g, ' × ')
        .replace(/\\approx/g, ' ≈ ')
        .replace(/\\le/g, ' ≤ ')
        .replace(/\\ge/g, ' ≥ ');
      return `<div class="lv-formula-box">${clean.trim()}</div>`;
    })
    // Inline math $...$
    .replace(/\$([^$]+)\$/g, (_m, formula) => {
      const clean = formula
        .replace(/\\text\{([^}]+)\}/g, '$1')
        .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
        .replace(/\\rightarrow|\\to/g, ' ➔ ')
        .replace(/\\cdot/g, ' • ');
      return `<code class="lv-inline-code">${clean.trim()}</code>`;
    })
    // Strip leftover raw LaTeX artifacts
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
    .replace(/\\rightarrow|\\to/g, ' ➔ ');

  // 2. Escape raw HTML tags safely
  html = html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Re-restore created formula boxes (since they got escaped above)
  html = html
    .replace(/&lt;div class="lv-formula-box"&gt;/g, '<div class="lv-formula-box">')
    .replace(/&lt;\/div&gt;/g, '</div>')
    .replace(/&lt;span class="lv-formula-title"&gt;/g, '<span class="lv-formula-title">')
    .replace(/&lt;span class="lv-formula-body"&gt;/g, '<span class="lv-formula-body">')
    .replace(/&lt;\/span&gt;/g, '</span>')
    .replace(/&lt;code class="lv-inline-code"&gt;/g, '<code class="lv-inline-code">')
    .replace(/&lt;\/code&gt;/g, '</code>');

  // 3. Fenced code blocks
  html = html.replace(/```(\w*)\n?([\s\S]*?)```/g, (_m, _lang, code) =>
    `<pre class="lv-code-block">${code.trim()}</pre>`
  );

  // 4. Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="lv-inline-code">$1</code>');

  // 5. Bold + Italic
  html = html.replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>');
  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="lv-bold">$1</strong>');
  // Italic
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // 6. Headings (### H3, ## H2, # H1)
  html = html.replace(/^### (.+)$/gm, '<h3 class="lv-h3">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="lv-h2">$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1 class="lv-h1">$1</h1>');

  // 7. Numbered list items (explicit 1., 2., 3. badges)
  html = html.replace(/^(\d+)\.\s+(.+)$/gm, '<div class="lv-num-row"><span class="lv-num-badge">$1.</span><span class="lv-list-text">$2</span></div>');

  // 8. Bullet list items (- or *)
  html = html.replace(/^[\s]*[-*]\s+(.+)$/gm, '<div class="lv-bullet-row"><span class="lv-bullet-dot">•</span><span class="lv-list-text">$1</span></div>');

  // 9. Horizontal rule
  html = html.replace(/^---+$/gm, '<hr class="lv-hr" />');

  // 10. Line breaks (double newline = paragraph break, single = <br>)
  html = html.replace(/\n\n/g, '</p><p class="lv-para">');
  html = html.replace(/\n/g, "<br />");
  html = `<p class="lv-para">${html}</p>`;

  return html;
}

export default function AITutor() {
  const { subjectId, topicId } = useParams();
  const location = useLocation();

  // STRICT QUIZ ASSESSMENT RESTRICTION
  const isQuizPage = location.pathname.includes("/quiz");

  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);
  const isSendingRef = useRef(false); // Prevent duplicate sends

  // Extract from route params or fallback to parsing pathname
  const pathParts = location.pathname.split("/").filter(Boolean);
  const effectiveSubjectId = subjectId || (pathParts[0] === "subjects" ? pathParts[1] : undefined);
  const effectiveTopicId = topicId || (pathParts[0] === "subjects" ? pathParts[2] : undefined);

  const subjectName = SUBJECT_MAP[effectiveSubjectId] || (effectiveSubjectId ? formatParam(effectiveSubjectId) : "");
  const topicName = TOPIC_MAP[effectiveTopicId] || (effectiveTopicId ? formatParam(effectiveTopicId) : "");

  // Context-aware suggested questions
  const suggestions = topicName
    ? [
        `Explain ${topicName} with a real-world example.`,
        `What are common pitfalls or misconceptions about ${topicName}?`,
        `How is ${topicName} used in industry applications?`,
      ]
    : [
        "How should I navigate the LearnVerse courses?",
        "What subjects are available on LearnVerse?",
        "Give me an overview of the OSI model layers.",
      ];

  // Smooth scroll to bottom
  const scrollToBottom = useCallback((behavior = "smooth") => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior });
    }
  }, []);

  // Detect if user has scrolled up (show scroll-to-bottom button)
  const handleScroll = useCallback(() => {
    const el = messagesContainerRef.current;
    if (!el) return;
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    setShowScrollBtn(distanceFromBottom > 100);
  }, []);

  // Auto-scroll when new messages arrive (only if user is near bottom)
  useEffect(() => {
    const el = messagesContainerRef.current;
    if (!el) return;
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    if (distanceFromBottom < 200) {
      scrollToBottom();
      setUnreadCount(0);
    } else if (isOpen && messages.length > 0) {
      setUnreadCount((prev) => prev + 1);
    }
  }, [messages, isLoading]);

  // Reset unread when scrolled to bottom
  useEffect(() => {
    if (!showScrollBtn) setUnreadCount(0);
  }, [showScrollBtn]);

  // Load welcome message when chatbot opens for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeText = topicName
        ? `🌌 **Greetings, student!** I am your LearnVerse **AI Tutor**.\n\nI see you are currently inside the **${subjectName}** VR Lab, studying **${topicName}**.\n\nAsk me anything about this topic, or click a suggested question below to kickstart our study session!`
        : `🌌 **Greetings, student!** I am your LearnVerse **AI Tutor**.\n\nHow is your learning journey going today? I can help you understand complex concepts, explain data structures, guide you through course roadmaps, or answer any engineering question. What shall we explore today?`;

      setMessages([
        {
          id: "welcome",
          role: "ai",
          text: welcomeText,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }
  }, [isOpen, effectiveTopicId]);

  // Focus input when chatbot opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Scroll to bottom when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => scrollToBottom("instant"), 50);
    }
  }, [isOpen]);

  // Open/close with animation
  const toggleOpen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsOpen((prev) => !prev);
    setUnreadCount(0);
    setTimeout(() => setIsAnimating(false), 350);
  };

  const handleSendMessage = useCallback(async (textToSend) => {
    const messageContent = (textToSend || input).trim();
    if (!messageContent || isLoading || isSendingRef.current) return;

    isSendingRef.current = true;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Build conversation history from existing messages (exclude welcome and error messages)
    const buildHistory = (msgs) =>
      msgs
        .filter((m) => m.id !== "welcome" && !m.id.startsWith("ai-err"))
        .map((m) => ({ role: m.role, text: m.text }));

    try {
      const currentMessages = [...messages, userMessage]; // Include user message in history calculation
      const history = buildHistory(currentMessages.slice(0, -1)); // History = all messages except the last user one

      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageContent,
          subject: subjectName || "General Academic",
          module: subjectName ? "Active Module" : "Dashboard",
          topic: topicName || "General Navigation",
          history: history,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Server error ${response.status}`);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          role: "ai",
          text: data.reply,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-err-${Date.now()}`,
          role: "ai",
          text: `⚠️ **Connection Error**: ${error.message}\n\nPlease make sure the backend server is running at port 5000, and your Gemini API key is valid.`,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
      isSendingRef.current = false;
      setTimeout(() => scrollToBottom(), 100);
    }
  }, [input, isLoading, messages, subjectName, topicName, scrollToBottom]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyToClipboard = (text, id) => {
    const clean = text.replace(/\*\*|\*/g, "").replace(/<[^>]+>/g, "");
    navigator.clipboard.writeText(clean);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const clearChat = () => {
    setMessages([]);
    const welcomeText = topicName
      ? `🧹 *History cleared.*\n\nLet's begin anew! Ask me anything about **${topicName}** in **${subjectName}**.`
      : `🧹 *History cleared.*\n\nLet's begin anew! How can I assist you with your studies today?`;

    setTimeout(() => {
      setMessages([
        {
          id: `welcome-clear-${Date.now()}`,
          role: "ai",
          text: welcomeText,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 50);
  };

  // Auto-resize textarea
  const handleInputChange = (e) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
  };

  if (isQuizPage) return null;

  return (
    <>
      {/* Injected Styles */}
      <style>{`
        @keyframes lv-slideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes lv-slideDown {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(24px) scale(0.96); }
        }
        @keyframes lv-msgIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lv-typing {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
        .lv-chat-window {
          animation: lv-slideUp 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .lv-chat-window.closing {
          animation: lv-slideDown 0.25s ease-in forwards;
        }
        .lv-msg {
          animation: lv-msgIn 0.25s ease-out both;
        }
        .lv-dot { animation: lv-typing 1.2s infinite ease-in-out; }
        .lv-dot:nth-child(2) { animation-delay: 0.15s; }
        .lv-dot:nth-child(3) { animation-delay: 0.30s; }
        .lv-scrollbar::-webkit-scrollbar { width: 4px; }
        .lv-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .lv-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 4px; }
        .lv-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0,240,255,0.4); }
        .lv-para { margin: 0 0 6px; }
        .lv-bold { color: #fff; font-weight: 600; text-shadow: 0 0 8px rgba(0,240,255,0.2); }
        .lv-h1 { font-size: 1rem; font-weight: 700; color: #fff; margin: 10px 0 4px; }
        .lv-h2 { font-size: 0.9rem; font-weight: 700; color: #22d3ee; margin: 10px 0 4px; border-bottom: 1px solid rgba(0,240,255,0.15); padding-bottom: 3px; }
        .lv-h3 { font-size: 0.82rem; font-weight: 600; color: #a78bfa; margin: 8px 0 3px; }
        .lv-num-row { display: flex; align-items: flex-start; gap: 6px; margin: 4px 0; }
        .lv-num-badge { color: #22d3ee; font-weight: 700; font-family: monospace; font-size: 11px; flex-shrink: 0; min-width: 18px; }
        .lv-bullet-row { display: flex; align-items: flex-start; gap: 6px; margin: 4px 0; }
        .lv-bullet-dot { color: #a78bfa; font-weight: 700; flex-shrink: 0; }
        .lv-list-text { flex: 1; min-width: 0; }
        .lv-formula-box {
          background: rgba(2, 20, 35, 0.8);
          border: 1px solid rgba(0, 240, 255, 0.3);
          border-radius: 8px;
          padding: 8px 12px;
          margin: 8px 0;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #22d3ee;
          box-shadow: 0 0 12px rgba(0, 240, 255, 0.1);
        }
        .lv-formula-title { color: #f59e0b; font-weight: 700; }
        .lv-formula-body { color: #ffffff; }
        .lv-code-block {
          background: rgba(2,0,10,0.85);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 10px 12px;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-size: 10.5px;
          color: #22d3ee;
          overflow-x: auto;
          white-space: pre;
          margin: 6px 0;
          line-height: 1.6;
        }
        .lv-inline-code {
          background: rgba(2,0,10,0.6);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 1px 5px;
          border-radius: 4px;
          font-family: monospace;
          color: #a78bfa;
          font-size: 10.5px;
        }
        .lv-hr { border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 8px 0; }
      `}</style>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none">

        {/* CHAT WINDOW */}
        {isOpen && (
          <div
            className="lv-chat-window w-[92vw] sm:w-[430px] rounded-2xl flex flex-col shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden mb-4 border border-white/10"
            style={{
              height: "clamp(480px, 70vh, 620px)",
              background: "rgba(5, 4, 20, 0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Top neon border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple z-10 shadow-[0_0_12px_rgba(0,240,255,0.6)]" />

            {/* Header */}
            <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-white/[0.02] flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neon-purple/20 to-neon-cyan/20 border border-neon-cyan/25 flex items-center justify-center relative">
                  <Bot className="w-4 h-4 text-neon-cyan" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-500 border-2 border-[#050414]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-orbitron font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                    AI Tutor
                    <Sparkles className="w-3 h-3 text-neon-cyan animate-pulse" />
                  </span>
                  {topicName ? (
                    <span className="text-[9px] text-neon-cyan uppercase font-mono tracking-widest truncate max-w-[200px]">
                      {topicName}
                    </span>
                  ) : (
                    <span className="text-[9px] text-white/40 uppercase font-mono tracking-widest">
                      General Tutor Mode
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={clearChat}
                  title="Clear History"
                  className="p-1.5 rounded-lg border border-white/5 bg-white/2 text-white/40 hover:text-red-400 hover:border-red-500/20 transition-all cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={toggleOpen}
                  title="Close"
                  className="p-1.5 rounded-lg border border-white/5 bg-white/2 text-white/40 hover:text-white hover:border-white/15 transition-all cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div
              ref={messagesContainerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 lv-scrollbar"
              style={{ overscrollBehavior: "contain" }}
            >
              {messages.map((msg, i) => (
                <div
                  key={msg.id}
                  className={`lv-msg flex flex-col gap-1 ${
                    msg.role === "user"
                      ? "items-end self-end max-w-[88%]"
                      : "items-start self-start max-w-[92%]"
                  }`}
                  style={{ animationDelay: `${Math.min(i * 0.03, 0.2)}s` }}
                >
                  <div
                    className={`relative group px-3.5 py-2.5 rounded-2xl text-xs border ${
                      msg.role === "user"
                        ? "bg-neon-cyan/10 border-neon-cyan/20 text-white rounded-tr-sm"
                        : msg.isError
                        ? "bg-red-500/5 border-red-500/15 text-white/80 rounded-tl-sm"
                        : "bg-white/[0.035] border-white/[0.05] text-white/85 rounded-tl-sm"
                    }`}
                  >
                    {/* Rendered message */}
                    {msg.role === "user" ? (
                      <p className="leading-relaxed whitespace-pre-wrap break-words">{msg.text}</p>
                    ) : (
                      <div
                        className="leading-relaxed break-words font-sans"
                        dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.text) }}
                      />
                    )}

                    {/* Copy button for AI messages */}
                    {msg.role === "ai" && msg.id !== "welcome" && (
                      <button
                        onClick={() => copyToClipboard(msg.text, msg.id)}
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 rounded bg-black/50 border border-white/10 text-white/40 hover:text-white transition-all cursor-pointer"
                        title="Copy"
                      >
                        {copiedId === msg.id ? (
                          <Check className="w-3 h-3 text-green-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    )}
                  </div>
                  <span className="text-[8px] text-white/25 font-mono px-1">{msg.timestamp}</span>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="lv-msg self-start max-w-[60%]">
                  <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-white/[0.035] border border-white/[0.05] flex items-center gap-2">
                    <div className="flex gap-1 items-center">
                      <span className="lv-dot w-1.5 h-1.5 rounded-full bg-neon-cyan block" />
                      <span className="lv-dot w-1.5 h-1.5 rounded-full bg-neon-cyan block" />
                      <span className="lv-dot w-1.5 h-1.5 rounded-full bg-neon-cyan block" />
                    </div>
                    <span className="text-[9px] font-orbitron text-neon-cyan/70 tracking-wider uppercase">
                      Calibrating response...
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Scroll to bottom button */}
            {showScrollBtn && (
              <div className="absolute bottom-[108px] right-4 z-20">
                <button
                  onClick={() => { scrollToBottom(); setUnreadCount(0); }}
                  className="w-8 h-8 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan flex items-center justify-center shadow-lg hover:bg-neon-cyan/20 transition-all cursor-pointer"
                >
                  <ChevronDown className="w-4 h-4" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-neon-cyan text-black text-[8px] font-bold flex items-center justify-center">
                      {unreadCount > 9 ? "9+" : unreadCount}
                    </span>
                  )}
                </button>
              </div>
            )}

            {/* Suggestions tray */}
            {messages.length <= 2 && !isLoading && (
              <div className="px-3 py-2.5 bg-black/30 border-t border-white/[0.04] flex flex-col gap-1.5 flex-shrink-0">
                <span className="text-[8px] text-neon-cyan/70 font-orbitron tracking-widest flex items-center gap-1">
                  <HelpCircle className="w-2.5 h-2.5" />
                  SUGGESTED QUESTIONS
                </span>
                <div className="flex flex-col gap-1">
                  {suggestions.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(item)}
                      disabled={isLoading}
                      className="text-left text-[10px] text-white/45 hover:text-neon-cyan hover:bg-white/[0.02] border border-white/[0.05] hover:border-neon-cyan/20 px-2.5 py-1.5 rounded-lg transition-all cursor-pointer truncate disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input area */}
            <div className="p-3 bg-black/40 border-t border-white/[0.05] flex items-end gap-2 flex-shrink-0">
              <textarea
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question… (Enter to send, Shift+Enter for new line)"
                rows={1}
                disabled={isLoading}
                className="flex-1 bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] focus:border-neon-cyan/40 rounded-xl px-3 py-2 text-xs text-white placeholder-white/25 resize-none outline-none transition-colors lv-scrollbar disabled:opacity-50"
                style={{ minHeight: "36px", maxHeight: "120px" }}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || isLoading}
                className="w-9 h-9 rounded-xl bg-neon-cyan/10 border border-neon-cyan/25 text-neon-cyan flex items-center justify-center hover:bg-neon-cyan hover:text-black transition-all cursor-pointer shrink-0 disabled:opacity-30 disabled:pointer-events-none"
              >
                {isLoading ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Send className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        )}

        {/* FAB Toggle Button */}
        <button
          onClick={toggleOpen}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-neon-purple to-neon-cyan border border-white/20 text-white flex items-center justify-center shadow-[0_4px_24px_rgba(0,240,255,0.35)] hover:shadow-[0_4px_32px_rgba(0,240,255,0.55)] hover:scale-105 transition-all cursor-pointer relative"
          title="Toggle AI Tutor"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <MessageSquare className="w-6 h-6" />
              <Sparkles className="w-2.5 h-2.5 text-white absolute -top-1.5 -right-1.5 animate-bounce" />
              {unreadCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-500 border border-black text-[8px] font-bold text-white flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </div>
          )}
        </button>
      </div>
    </>
  );
}