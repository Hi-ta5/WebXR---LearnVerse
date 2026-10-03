import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Mic, MicOff, Volume2, VolumeX, Sparkles, Bot, X, Loader2,
  ChevronDown, RotateCcw, MessageSquare
} from "lucide-react";

import { getSceneNarration } from "../../data/sceneNarrationData";

// Dynamic scene-specific knowledge base builder for context injection in voice queries
function getSceneVoiceContext(subjectId, topicId) {
  const narration = getSceneNarration(subjectId, topicId);
  const stepsText = (narration.steps || [])
    .map((s, i) => `${i + 1}. ${s.title}: ${s.text}`)
    .join("\n");

  return `You are an AI Voice Tutor specialized in explaining the "${narration.title}" interactive 3D WebXR simulation in LearnVerse.
The student is currently watching and interacting with this 3D WebXR lab:
Subject: ${subjectId}
Topic: ${narration.title}
Key Focus: ${narration.badge || "Interactive 3D simulation"}

Scene Visual Overview:
${narration.overview}

3D Visual Components in this Scene:
${stepsText}

Scene Controls & Interactions:
${narration.interactionGuide}

Instructions:
1. Give clear, student-friendly answers specifically explaining this 3D WebXR simulation and its concepts.
2. When the student asks about elements in the scene, explain what the visual objects represent and how the simulation works.
3. Keep spoken responses concise and conversational (2-3 sentences for voice playback, full details in text).
4. Use simple analogies directly connected to what is visually rendered in the scene.
5. Answer follow-up questions referencing previous conversation context.`;
}

// Speech recognition availability check
const hasSpeechRecognition = typeof window !== "undefined" &&
  (window.SpeechRecognition || window.webkitSpeechRecognition);

// TTS availability check
const hasTTS = typeof window !== "undefined" && window.speechSynthesis;

// Preferred TTS voice selection
function pickVoice(gender = "female") {
  if (!hasTTS) return null;
  const voices = window.speechSynthesis.getVoices();
  const english = voices.filter(v => v.lang.startsWith("en"));

  if (gender === "female") {
    const femaleKw = ["zira", "samantha", "hazel", "karen", "victoria", "female", "google us english"];
    return (
      english.find(v => femaleKw.some(kw => v.name.toLowerCase().includes(kw))) ||
      english.find(v => v.name.includes("Google") || v.name.includes("Microsoft")) ||
      english[0] || null
    );
  }
  const maleKw = ["david", "mark", "george", "male", "microsoft david"];
  return (
    english.find(v => maleKw.some(kw => v.name.toLowerCase().includes(kw))) ||
    english[0] || null
  );
}

export default function OSIVoiceAssistant({
  subjectId = "computer-networks",
  topicId = "osi-model"
}) {
  const narration = getSceneNarration(subjectId, topicId);
  const subjectTitle = subjectId.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [conversation, setConversation] = useState([]);
  const [error, setError] = useState(null);
  const [voiceReady, setVoiceReady] = useState(false);
  const [micPermission, setMicPermission] = useState("unknown"); // unknown | granted | denied
  const [pulseLevel, setPulseLevel] = useState(0);

  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);
  const isSendingRef = useRef(false);
  const pulseIntervalRef = useRef(null);

  // Reset conversation on scene change
  useEffect(() => {
    setConversation([]);
    stopSpeaking();
    stopListening();
  }, [subjectId, topicId]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation, isLoading]);

  // Preload TTS voices
  useEffect(() => {
    if (hasTTS) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
        setVoiceReady(true);
      };
      // Fallback: mark ready after a timeout even if event never fires
      setTimeout(() => setVoiceReady(true), 1000);
    }
  }, []);

  // Simulate microphone pulse animation when listening
  useEffect(() => {
    if (isListening) {
      pulseIntervalRef.current = setInterval(() => {
        setPulseLevel(Math.random() * 100);
      }, 100);
    } else {
      clearInterval(pulseIntervalRef.current);
      setPulseLevel(0);
    }
    return () => clearInterval(pulseIntervalRef.current);
  }, [isListening]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopListening();
      stopSpeaking();
    };
  }, []);

  const stopSpeaking = () => {
    if (hasTTS) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  const speakText = useCallback((text) => {
    if (!hasTTS || isMuted) return;

    stopSpeaking();

    // For voice, trim to a shorter response for TTS
    const cleanText = text
      .replace(/```[\s\S]*?```/g, "") // Remove code blocks from speech
      .replace(/#{1,3}\s*/g, "")      // Remove markdown headings
      .replace(/\*\*/g, "")           // Remove bold markers
      .replace(/\*/g, "")             // Remove italic markers
      .replace(/`[^`]+`/g, "")        // Remove inline code
      .replace(/[-*]\s/g, "")         // Remove bullet points
      .replace(/\n+/g, ". ")          // Replace newlines with periods
      .replace(/\s{2,}/g, " ")        // Collapse whitespace
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.1;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    const voice = pickVoice("female");
    if (voice) utterance.voice = voice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    // Chrome bug: speech synthesis sometimes gets stuck — add a timeout
    const wordCount = cleanText.split(" ").length;
    const fallbackMs = (wordCount * 600 / utterance.rate) + 4000;
    const ttsTimeout = setTimeout(() => {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }, fallbackMs);

    utterance.onend = () => {
      clearTimeout(ttsTimeout);
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  }, [isMuted]);

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.abort();
      recognitionRef.current = null;
    }
    setIsListening(false);
    setTranscript("");
  };

  const startListening = useCallback(() => {
    if (!hasSpeechRecognition) {
      setError("Voice recognition is not supported in your browser. Please use Chrome or Edge.");
      return;
    }

    if (isListening) {
      stopListening();
      return;
    }

    // Stop any ongoing speech
    stopSpeaking();
    setError(null);
    setTranscript("");

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    recognition.continuous = false;

    recognition.onstart = () => {
      setIsListening(true);
      setMicPermission("granted");
    };

    recognition.onresult = (event) => {
      let interimText = "";
      let finalText = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalText += result[0].transcript;
        } else {
          interimText += result[0].transcript;
        }
      }

      setTranscript(finalText || interimText);

      // Auto-send when we have a final result
      if (finalText.trim()) {
        recognition.stop();
        setIsListening(false);
        handleVoiceQuery(finalText.trim());
      }
    };

    recognition.onerror = (event) => {
      if (event.error === "not-allowed" || event.error === "permission-denied") {
        setMicPermission("denied");
        setError("Microphone access denied. Please allow microphone access in your browser settings.");
      } else if (event.error === "no-speech") {
        setError("No speech detected. Please try again and speak clearly.");
      } else if (event.error !== "aborted") {
        setError(`Voice recognition error: ${event.error}. Please try again.`);
      }
      setIsListening(false);
      setTranscript("");
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    try {
      recognition.start();
    } catch (err) {
      setError("Failed to start voice recognition. Please refresh and try again.");
      setIsListening(false);
    }
  }, [isListening]);

  const handleVoiceQuery = useCallback(async (question) => {
    if (!question.trim() || isLoading || isSendingRef.current) return;

    isSendingRef.current = true;
    setError(null);

    // Add user message to conversation
    const userMsg = {
      id: `user-${Date.now()}`,
      role: "user",
      text: question,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setConversation(prev => [...prev, userMsg]);
    setTranscript("");
    setIsLoading(true);

    // Build history from conversation
    const history = conversation
      .slice(-8) // Last 8 messages for context
      .map(m => ({ role: m.role, text: m.text }));

    try {
      const sceneContext = getSceneVoiceContext(subjectId, topicId);

      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          subject: subjectTitle,
          module: narration.title,
          topic: `${narration.title} — Voice Tutor Session`,
          history: history,
          // Pass the scene-specific context for accurate Gemini understanding of the 3D scene
          systemHint: sceneContext,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Server error");

      const aiMsg = {
        id: `ai-${Date.now()}`,
        role: "ai",
        text: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setConversation(prev => [...prev, aiMsg]);

      // Auto-speak the response
      setTimeout(() => speakText(data.reply), 200);

    } catch (err) {
      const errMsg = {
        id: `err-${Date.now()}`,
        role: "ai",
        text: `⚠️ **Connection Error**: ${err.message}\n\nMake sure the backend server is running. You can also use the text-based AI Tutor chatbot instead.`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isError: true,
      };
      setConversation(prev => [...prev, errMsg]);
      setError("Failed to get AI response. Check that the backend server is running.");
    } finally {
      setIsLoading(false);
      isSendingRef.current = false;
    }
  }, [conversation, isLoading, speakText]);

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (transcript.trim()) {
      handleVoiceQuery(transcript.trim());
    }
  };

  const clearConversation = () => {
    setConversation([]);
    stopSpeaking();
    setError(null);
  };

  // Render a message's text with clean markdown, numbers & bullet badges
  const renderText = (text) => {
    // Pre-clean formulas
    const cleanText = text
      .replace(/\$\$\s*\\text\{([^}]+)\}\s*=\s*(.*?)\$\$/g, '$1 = $2')
      .replace(/\$\$(.*?)\$\$/gs, '$1')
      .replace(/\\text\{([^}]+)\}/g, '$1')
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
      .replace(/\\rightarrow|\\to/g, ' ➔ ');

    const lines = cleanText.split("\n");
    return lines.map((line, i) => {
      if (line.startsWith("### ")) return <h3 key={i} className="text-neon-cyan font-bold text-xs mt-2.5 mb-1">{line.slice(4)}</h3>;
      if (line.startsWith("## ")) return <h2 key={i} className="text-white font-bold text-xs mt-2.5 mb-1 border-b border-white/10 pb-1">{line.slice(3)}</h2>;
      
      // Numbered list item
      const numMatch = line.match(/^(\d+)\.\s+(.+)$/);
      if (numMatch) {
        const parts = numMatch[2].split(/\*\*([^*]+)\*\*/g);
        return (
          <div key={i} className="flex items-start gap-1.5 my-1 ml-1">
            <span className="text-neon-cyan font-mono font-bold text-xs shrink-0">{numMatch[1]}.</span>
            <p className="text-white/85 text-xs leading-relaxed flex-1">
              {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-white font-semibold">{part}</strong> : part)}
            </p>
          </div>
        );
      }

      // Bullet list item
      const bulletMatch = line.match(/^[\s]*[-*]\s+(.+)$/);
      if (bulletMatch) {
        const parts = bulletMatch[1].split(/\*\*([^*]+)\*\*/g);
        return (
          <div key={i} className="flex items-start gap-1.5 my-1 ml-1">
            <span className="text-purple-400 font-bold text-xs shrink-0">•</span>
            <p className="text-white/85 text-xs leading-relaxed flex-1">
              {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-white font-semibold">{part}</strong> : part)}
            </p>
          </div>
        );
      }

      if (line.trim() === "") return <div key={i} className="h-1.5" />;
      
      // Regular paragraph with bold support
      const parts = line.split(/\*\*([^*]+)\*\*/g);
      return (
        <p key={i} className="text-white/85 text-xs leading-relaxed">
          {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-white font-semibold">{part}</strong> : part)}
        </p>
      );
    });
  };

  return (
    <>
      <style>{`
        @keyframes osi-va-pulse {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        @keyframes osi-va-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes osi-va-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .osi-va-msg { animation: osi-va-in 0.2s ease-out both; }
        .osi-va-waveBar { animation: osi-va-pulse 0.6s ease-in-out infinite; }
        .osi-va-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid rgba(0,240,255,0.6);
          animation: osi-va-ring 1.2s ease-out infinite;
        }
        .osi-va-scrollbar::-webkit-scrollbar { width: 3px; }
        .osi-va-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .osi-va-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,240,255,0.2); border-radius: 4px; }
      `}</style>

      <div className="w-full flex flex-col gap-4">
        {/* Header Card */}
        <div className="glass-panel rounded-2xl border border-neon-cyan/15 overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-purple/0 via-neon-cyan/50 to-neon-purple/0" />
          
          {/* Toggle Button Header */}
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="w-full p-4 flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              {/* Mic icon with glow */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-neon-purple/20 to-neon-cyan/20 border border-neon-cyan/30 flex items-center justify-center relative">
                <Mic className="w-5 h-5 text-neon-cyan" />
                <div className="absolute bottom-0.5 right-0.5 w-2 h-2 rounded-full bg-green-500 border border-[#070518]" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-orbitron font-bold text-xs uppercase tracking-wider text-white">
                    AI Voice Tutor
                  </span>
                  <Sparkles className="w-3 h-3 text-neon-cyan animate-pulse" />
                </div>
                <span className="text-[9px] text-neon-cyan/70 font-mono uppercase tracking-widest truncate max-w-[280px]">
                  {narration.title} • Ask with your voice
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {conversation.length > 0 && (
                <span className="text-[9px] font-orbitron text-white/40 bg-white/5 border border-white/5 px-2 py-0.5 rounded-full">
                  {conversation.length} msgs
                </span>
              )}
              <ChevronDown
                className={`w-4 h-4 text-white/40 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </div>
          </button>

          {/* Expanded Panel */}
          {isOpen && (
            <div className="border-t border-white/5">

              {/* Controls Row */}
              <div className="px-4 py-3 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  {/* Mute TTS toggle */}
                  <button
                    onClick={() => { setIsMuted(prev => !prev); if (isSpeaking) stopSpeaking(); }}
                    className={`flex items-center gap-1.5 text-[10px] font-orbitron px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                      isMuted
                        ? "border-red-500/30 text-red-400 bg-red-500/5"
                        : "border-white/10 text-white/50 hover:border-neon-cyan/30 hover:text-neon-cyan"
                    }`}
                    title={isMuted ? "Unmute voice responses" : "Mute voice responses"}
                  >
                    {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                    {isMuted ? "MUTED" : "VOICE ON"}
                  </button>

                  {/* Stop speaking button */}
                  {isSpeaking && (
                    <button
                      onClick={stopSpeaking}
                      className="text-[10px] font-orbitron text-yellow-400 border border-yellow-500/30 bg-yellow-500/5 px-3 py-1.5 rounded-lg cursor-pointer flex items-center gap-1.5 hover:bg-yellow-500/10 transition-all"
                    >
                      <VolumeX className="w-3 h-3" />
                      STOP SPEAKING
                    </button>
                  )}
                </div>

                <button
                  onClick={clearConversation}
                  className="text-[10px] text-white/30 hover:text-red-400 font-orbitron cursor-pointer flex items-center gap-1 transition-colors"
                  title="Clear conversation"
                >
                  <RotateCcw className="w-3 h-3" />
                  CLEAR
                </button>
              </div>

              {/* Conversation Area */}
              <div
                className="h-[280px] overflow-y-auto osi-va-scrollbar px-4 py-3 flex flex-col gap-3"
                style={{ overscrollBehavior: "contain" }}
              >
                {/* Empty state */}
                {conversation.length === 0 && !isLoading && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 py-6">
                    <div className="w-14 h-14 rounded-2xl bg-neon-cyan/5 border border-neon-cyan/15 flex items-center justify-center">
                      <Mic className="w-7 h-7 text-neon-cyan/50" />
                    </div>
                    <div>
                      <p className="text-xs font-orbitron text-white/50 uppercase tracking-wider">
                        Voice AI Ready
                      </p>
                      <p className="text-[10px] text-white/30 mt-1 max-w-[240px]">
                        Press the microphone button and ask any question about the {narration.title} 3D scene
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 w-full max-w-[320px]">
                      {(narration.steps && narration.steps.length >= 2
                        ? [
                            `What does this 3D visualizer show?`,
                            `Explain ${narration.steps[0].title}.`,
                            `How do I interact with this simulation?`
                          ]
                        : [
                            `What does this 3D scene visualize?`,
                            `Explain the key concept in this simulation.`,
                            `How does this simulation work?`
                          ]
                      ).map((hint, i) => (
                        <button
                          key={i}
                          onClick={() => handleVoiceQuery(hint)}
                          className="text-[10px] text-white/40 hover:text-neon-cyan hover:bg-white/[0.02] border border-white/[0.05] hover:border-neon-cyan/20 px-3 py-1.5 rounded-lg transition-all cursor-pointer text-left"
                        >
                          "{hint}"
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Messages */}
                {conversation.map((msg, i) => (
                  <div
                    key={msg.id}
                    className={`osi-va-msg flex flex-col gap-1 ${
                      msg.role === "user" ? "items-end self-end max-w-[85%]" : "items-start self-start max-w-[95%]"
                    }`}
                    style={{ animationDelay: `${i * 0.02}s` }}
                  >
                    {/* Sender label */}
                    <div className={`flex items-center gap-1 text-[8px] font-orbitron uppercase tracking-widest ${msg.role === "user" ? "text-neon-cyan/60 flex-row-reverse" : "text-white/40"}`}>
                      {msg.role === "user" ? <Mic className="w-2.5 h-2.5" /> : <Bot className="w-2.5 h-2.5" />}
                      {msg.role === "user" ? "YOU" : "OSI TUTOR"}
                    </div>

                    <div
                      className={`px-3 py-2 rounded-xl text-xs border leading-relaxed ${
                        msg.role === "user"
                          ? "bg-neon-cyan/8 border-neon-cyan/15 rounded-tr-sm"
                          : msg.isError
                          ? "bg-red-500/5 border-red-500/15 rounded-tl-sm"
                          : "bg-white/[0.025] border-white/[0.04] rounded-tl-sm"
                      }`}
                    >
                      {msg.role === "user" ? (
                        <p className="text-white/90">{msg.text}</p>
                      ) : (
                        <div className="space-y-0.5">{renderText(msg.text)}</div>
                      )}
                    </div>
                    <span className="text-[8px] text-white/20 font-mono">{msg.timestamp}</span>
                  </div>
                ))}

                {/* AI Loading indicator */}
                {isLoading && (
                  <div className="osi-va-msg self-start max-w-[70%]">
                    <div className="px-3 py-2 rounded-xl rounded-tl-sm bg-white/[0.025] border border-white/[0.04] flex items-center gap-2">
                      <Loader2 className="w-3.5 h-3.5 text-neon-cyan animate-spin flex-shrink-0" />
                      <span className="text-[9px] text-neon-cyan/70 font-orbitron tracking-wider">
                        Generating OSI explanation...
                      </span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Error Banner */}
              {error && (
                <div className="mx-4 mb-3 px-3 py-2 bg-red-500/5 border border-red-500/20 rounded-xl flex items-start gap-2">
                  <span className="text-red-400 text-[10px] flex-1">{error}</span>
                  <button onClick={() => setError(null)} className="text-red-400/50 hover:text-red-400 cursor-pointer">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* Listening transcript preview */}
              {(isListening || transcript) && (
                <div className="mx-4 mb-3 px-3 py-2 bg-neon-cyan/5 border border-neon-cyan/15 rounded-xl">
                  <p className="text-[10px] text-neon-cyan/70 font-orbitron uppercase tracking-wider mb-1">
                    {isListening ? "Listening..." : "Heard:"}
                  </p>
                  <p className="text-xs text-white/80 italic">
                    {transcript || "Waiting for speech..."}
                  </p>
                </div>
              )}

              {/* Mic Button + Status */}
              <div className="px-4 pb-4 flex flex-col items-center gap-3">
                {/* Waveform animation when listening */}
                {isListening && (
                  <div className="flex items-end gap-[3px] h-8">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className="osi-va-waveBar w-1 rounded-full bg-neon-cyan"
                        style={{
                          height: `${20 + Math.sin(i * 0.8 + pulseLevel * 0.1) * 14}px`,
                          animationDelay: `${i * 0.05}s`,
                          opacity: 0.5 + Math.random() * 0.5,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Speaking indicator */}
                {isSpeaking && (
                  <div className="flex items-center gap-2 text-[10px] font-orbitron text-neon-cyan animate-pulse">
                    <Volume2 className="w-3.5 h-3.5" />
                    AI Tutor is speaking...
                  </div>
                )}

                {/* Main Mic Button */}
                <div className="relative">
                  {isListening && <div className="osi-va-ring" />}
                  {isListening && (
                    <div
                      className="osi-va-ring"
                      style={{ animationDelay: "0.4s" }}
                    />
                  )}

                  <button
                    onClick={startListening}
                    disabled={isLoading}
                    className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all border-2 relative z-10 ${
                      isListening
                        ? "bg-red-500/20 border-red-500 text-red-400 scale-110 shadow-[0_0_24px_rgba(239,68,68,0.4)]"
                        : isLoading
                        ? "bg-white/5 border-white/10 text-white/30 cursor-not-allowed"
                        : "bg-neon-cyan/10 border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/20 hover:scale-105 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
                    }`}
                    title={isListening ? "Stop listening" : "Start voice input"}
                  >
                    {isLoading ? (
                      <Loader2 className="w-7 h-7 animate-spin" />
                    ) : isListening ? (
                      <MicOff className="w-7 h-7" />
                    ) : (
                      <Mic className="w-7 h-7" />
                    )}
                  </button>
                </div>

                <p className="text-[9px] text-white/30 font-orbitron uppercase tracking-widest text-center">
                  {isListening
                    ? "Listening — speak your question"
                    : isLoading
                    ? "Processing question..."
                    : isSpeaking
                    ? "Speaking response — click mic to interrupt"
                    : micPermission === "denied"
                    ? "Mic access denied — check browser settings"
                    : "Click microphone to ask a question about this 3D scene"}
                </p>

                {/* Text fallback input */}
                {!hasSpeechRecognition && (
                  <form onSubmit={handleManualSubmit} className="w-full flex gap-2 mt-1">
                    <input
                      type="text"
                      value={transcript}
                      onChange={(e) => setTranscript(e.target.value)}
                      placeholder="Type your OSI question here..."
                      className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2 text-xs text-white placeholder-white/25 outline-none focus:border-neon-cyan/40 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={!transcript.trim() || isLoading}
                      className="px-3 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/25 text-neon-cyan text-xs font-orbitron cursor-pointer hover:bg-neon-cyan/20 transition-all disabled:opacity-30"
                    >
                      ASK
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
