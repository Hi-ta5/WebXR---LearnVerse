import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Volume2, VolumeX, Play, Pause, RotateCcw, ChevronRight, ChevronLeft,
  Sparkles, MessageSquare
} from 'lucide-react';
import { getSceneNarration } from '../../data/sceneNarrationData';

// Speech synthesis check
const hasTTS = typeof window !== 'undefined' && 'speechSynthesis' in window;

/**
 * High-clarity, soft and natural human female voice selector.
 * Prioritizes Azure/Edge Neural voices, Google natural female voices, and Apple Samantha.
 */
function pickSoftFemaleVoice() {
  if (!hasTTS) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // Filter English voices
  const english = voices.filter(v => v.lang && (v.lang.startsWith('en') || v.lang.includes('en-')));
  const pool = english.length > 0 ? english : voices;

  // Priority order for soft, natural, crystal-clear female voices
  const preferredKeywords = [
    'aria online (natural)',
    'jenny online (natural)',
    'michelle online (natural)',
    'natasha online (natural)',
    'natural',
    'online',
    'aria',
    'jenny',
    'google uk english female',
    'google us english',
    'samantha',
    'victoria',
    'karen',
    'serena',
    'fiona',
    'tessa',
    'microsoft zira',
    'zira'
  ];

  for (const kw of preferredKeywords) {
    const match = pool.find(v => {
      const name = v.name.toLowerCase();
      const isMale = ['male', 'david', 'george', 'mark', 'ravi', 'guy', 'christopher', 'stefan'].some(m => name.includes(m));
      return !isMale && name.includes(kw);
    });
    if (match) return match;
  }

  // Fallback: any voice that does not explicitly say male
  const fallbackFemale = pool.find(v => {
    const name = v.name.toLowerCase();
    const isMale = ['male', 'david', 'george', 'mark', 'ravi', 'guy'].some(m => name.includes(m));
    return !isMale && (name.includes('female') || name.includes('girl') || name.includes('woman'));
  });

  return fallbackFemale || pool[0] || null;
}

/**
 * Natural text preprocessor for kids:
 * Cleans symbols, handles acronyms with natural pauses, and makes speech sound warm and gentle.
 */
function prepareTextForSpeech(text) {
  if (!text) return '';

  return text
    // Remove markdown code blocks & headers
    .replace(/```[\s\S]*?```/g, '')
    .replace(/#{1,3}\s*/g, '')
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/`[^`]+`/g, '')
    .replace(/[-*]\s/g, '')
    // Expand tech abbreviations into friendly spoken pauses
    .replace(/\bOSI\b/g, 'O S I')
    .replace(/\bTCP\b/g, 'T C P')
    .replace(/\bUDP\b/g, 'U D P')
    .replace(/\bLIFO\b/g, 'Last-In First-Out')
    .replace(/\bFIFO\b/g, 'First-In First-Out')
    .replace(/\bPCB\b/g, 'P C B')
    .replace(/\bCPU\b/g, 'C P U')
    .replace(/\bDBMS\b/g, 'D B M S')
    .replace(/\bSQL\b/g, 'S Q L')
    .replace(/\b3D\b/g, '3-D')
    .replace(/\bvs\b/gi, 'versus')
    .replace(/\bNER\b/g, 'Named Entity Recognition')
    .replace(/\bNLP\b/g, 'N L P')
    // Replace parentheses with natural comma pauses
    .replace(/\(([^)]+)\)/g, ', $1, ')
    .replace(/\n+/g, '. ')
    .trim();
}

export default function XRSceneNarrator({
  subjectId,
  topicId,
  themeColor = '#00f2fe',
  autoStart = true
}) {
  const narration = getSceneNarration(subjectId, topicId);

  // Compile kid-friendly linear narration sections
  const sections = [
    {
      id: 'overview',
      badge: 'Introduction',
      stepNumber: 1,
      title: `${narration.title || 'Welcome'} — Introduction`,
      text: narration.overview
    },
    ...(narration.steps || []).map((step, idx) => ({
      id: `step-${idx}`,
      badge: step.label || `Step ${idx + 2}`,
      stepNumber: idx + 2,
      title: step.title,
      text: step.text
    })),
    {
      id: 'controls',
      badge: 'How to Play',
      stepNumber: (narration.steps?.length || 0) + 2,
      title: 'How to Play & Interact',
      text: narration.interactionGuide
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const timeoutRef = useRef(null);
  const currentSection = sections[currentIdx] || sections[0];
  const totalSteps = sections.length;

  // Preload voices
  useEffect(() => {
    if (hasTTS) {
      window.speechSynthesis.getVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
      }
    }
  }, []);

  const stopSpeech = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (hasTTS) {
      window.speechSynthesis.cancel();
    }
  }, []);

  const speakSection = useCallback((sectionIndex, autoAdvance = true) => {
    if (!hasTTS) return;
    const targetSection = sections[sectionIndex];
    if (!targetSection) return;

    stopSpeech();

    if (isMuted) {
      setIsPlaying(true);
      setIsPaused(false);
      // Timer fallback if muted so subtitles advance naturally
      const wordCount = targetSection.text.split(' ').length;
      const readingDuration = Math.max(4000, wordCount * 350);
      timeoutRef.current = setTimeout(() => {
        if (autoAdvance && sectionIndex < sections.length - 1) {
          setCurrentIdx(sectionIndex + 1);
          speakSection(sectionIndex + 1, autoAdvance);
        } else {
          setIsPlaying(false);
        }
      }, readingDuration);
      return;
    }

    const cleanSpokenText = prepareTextForSpeech(targetSection.text);
    const utterance = new SpeechSynthesisUtterance(cleanSpokenText);

    // Warm, soft, clear female voice parameters for kids
    utterance.rate = 0.94; // Calm, patient, crystal-clear pace
    utterance.pitch = 1.02; // Warm, gentle female tone
    utterance.volume = 1.0;

    const femaleVoice = pickSoftFemaleVoice();
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }

    let isDone = false;
    const finish = () => {
      if (isDone) return;
      isDone = true;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (autoAdvance && sectionIndex < sections.length - 1) {
        setCurrentIdx(sectionIndex + 1);
        // Gentle breath pause between sections
        setTimeout(() => speakSection(sectionIndex + 1, autoAdvance), 600);
      } else {
        setIsPlaying(false);
        setIsPaused(false);
      }
    };

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };
    utterance.onend = finish;
    utterance.onerror = (e) => {
      console.warn('Voice guide notification:', e);
      finish();
    };

    // Chrome speech synthesis safety fallback
    const wordCount = cleanSpokenText.split(' ').length;
    const expectedMs = (wordCount * 650) + 5000;
    timeoutRef.current = setTimeout(() => {
      window.speechSynthesis.cancel();
      finish();
    }, expectedMs);

    window.speechSynthesis.speak(utterance);
  }, [sections, isMuted, stopSpeech]);

  // Auto-start voice guide as soon as module starts
  useEffect(() => {
    stopSpeech();
    setCurrentIdx(0);
    setIsPaused(false);

    if (autoStart) {
      // Small delay to ensure DOM and voices are ready
      const timer = setTimeout(() => {
        speakSection(0, true);
      }, 500);
      return () => {
        clearTimeout(timer);
        stopSpeech();
      };
    }

    return () => stopSpeech();
  }, [subjectId, topicId, autoStart]);

  // Controls handlers
  const handlePlayToggle = () => {
    if (isPlaying) {
      if (isPaused) {
        // Resume
        if (hasTTS && !isMuted) window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        // Pause
        if (hasTTS && !isMuted) window.speechSynthesis.pause();
        setIsPaused(true);
      }
    } else {
      setIsPlaying(true);
      setIsPaused(false);
      speakSection(currentIdx, true);
    }
  };

  const handleReplay = () => {
    speakSection(currentIdx, true);
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      const prev = currentIdx - 1;
      setCurrentIdx(prev);
      speakSection(prev, true);
    }
  };

  const handleNext = () => {
    if (currentIdx < sections.length - 1) {
      const next = currentIdx + 1;
      setCurrentIdx(next);
      speakSection(next, true);
    }
  };

  const handleMuteToggle = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (nextMuted) {
      stopSpeech();
      setIsPlaying(false);
      setIsPaused(false);
    } else {
      speakSection(currentIdx, true);
    }
  };

  return (
    <div className="w-full flex flex-col font-sans select-none relative z-20">

      {/* ── TOP KID-FRIENDLY VOICE GUIDE BAR ── */}
      <div
        className="w-full flex flex-wrap items-center justify-between px-3 md:px-4 py-2.5 border-t border-b bg-[#040616]/95 backdrop-blur-md gap-2"
        style={{ borderColor: `${themeColor}30` }}
      >
        {/* Left: Friendly Teacher Avatar + Speaking Status */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative">
            <div
              className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-lg md:text-xl shadow-md border"
              style={{
                background: `linear-gradient(135deg, ${themeColor}20, #9333ea25)`,
                borderColor: isPlaying && !isPaused ? themeColor : 'rgba(255,255,255,0.2)',
                boxShadow: isPlaying && !isPaused ? `0 0 16px ${themeColor}50` : 'none'
              }}
            >
              👩‍🏫
            </div>
            {/* Live speaking indicator badge */}
            {isPlaying && !isPaused && (
              <span
                className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#040616] animate-pulse"
                title="Speaking now"
              />
            )}
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-orbitron font-bold text-xs text-white tracking-wide truncate">
                Teacher Lily
              </span>
              <span
                className="text-[9px] font-orbitron font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                style={{
                  background: isPlaying && !isPaused ? '#10b98120' : 'rgba(255,255,255,0.06)',
                  color: isPlaying && !isPaused ? '#34d399' : '#94a3b8',
                  border: isPlaying && !isPaused ? '1px solid #10b98140' : '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {isPlaying && !isPaused ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Speaking</span>
                  </>
                ) : (
                  <span>{isPaused ? 'Paused' : 'Ready'}</span>
                )}
              </span>
            </div>
            <span className="text-[10px] text-white/50 font-sans truncate">
              Step {currentIdx + 1} of {totalSteps}: {currentSection.badge}
            </span>
          </div>
        </div>

        {/* Right: Big, Simple, Kid-Friendly Buttons */}
        <div className="flex items-center gap-2 shrink-0">

          {/* Big Play / Pause Button */}
          <button
            onClick={handlePlayToggle}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-orbitron font-bold text-xs text-white cursor-pointer transition-all transform hover:scale-[1.03] active:scale-[0.97] shadow-md"
            style={{
              background: isPlaying && !isPaused
                ? 'rgba(255, 255, 255, 0.12)'
                : `linear-gradient(135deg, ${themeColor} 0%, #a855f7 100%)`,
              border: `1px solid ${isPlaying && !isPaused ? themeColor : 'transparent'}`,
              boxShadow: isPlaying && !isPaused ? `0 0 15px ${themeColor}30` : `0 0 20px ${themeColor}40`
            }}
            title={isPlaying && !isPaused ? 'Pause Voice' : 'Listen Now'}
          >
            {isPlaying && !isPaused ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Listen Now</span>
              </>
            )}
          </button>

          {/* Repeat / Listen Again Button */}
          <button
            onClick={handleReplay}
            className="flex items-center gap-1 px-2.5 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs font-sans transition-all cursor-pointer"
            title="Hear this part again"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">Repeat</span>
          </button>

          {/* Step Back & Forward Buttons */}
          <div className="flex items-center rounded-xl border border-white/15 bg-white/5 p-0.5">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="p-1.5 text-white/70 hover:text-white disabled:opacity-20 cursor-pointer disabled:cursor-not-allowed transition-all"
              title="Previous part"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono px-1.5 text-white/80 font-bold">
              {currentIdx + 1}/{totalSteps}
            </span>
            <button
              onClick={handleNext}
              disabled={currentIdx === totalSteps - 1}
              className="p-1.5 text-white/70 hover:text-white disabled:opacity-20 cursor-pointer disabled:cursor-not-allowed transition-all"
              title="Next part"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mute Toggle */}
          <button
            onClick={handleMuteToggle}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              isMuted
                ? 'border-red-500/40 text-red-400 bg-red-500/10'
                : 'border-white/15 hover:border-white/30 text-white/70 hover:text-white bg-white/5'
            }`}
            title={isMuted ? 'Unmute voice' : 'Mute voice'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ── KID-FRIENDLY SUBTITLES DISPLAY CARD ── */}
      {isExpanded && (
        <div
          className="w-full bg-[#02030d]/95 border-b px-4 py-3.5 flex flex-col gap-2.5 relative transition-all"
          style={{ borderColor: `${themeColor}20` }}
        >
          {/* Header pill & step bubbles */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span
                className="px-2.5 py-0.5 rounded-full text-[10px] font-orbitron font-bold uppercase tracking-wider"
                style={{
                  background: `${themeColor}20`,
                  color: themeColor,
                  border: `1px solid ${themeColor}40`
                }}
              >
                {currentSection.badge}
              </span>
              <h3 className="font-orbitron font-bold text-xs md:text-sm text-white tracking-wide truncate max-w-sm md:max-w-md">
                {currentSection.title}
              </h3>
            </div>

            {/* Step circles for kids */}
            <div className="flex items-center gap-1.5">
              {sections.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIdx(idx);
                    speakSection(idx, true);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === currentIdx
                      ? 'scale-125'
                      : 'opacity-40 hover:opacity-80'
                  }`}
                  style={{
                    backgroundColor: idx === currentIdx ? themeColor : '#ffffff',
                    boxShadow: idx === currentIdx ? `0 0 8px ${themeColor}` : 'none'
                  }}
                  title={`Go to Step ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Subtitle text: large, clear, high-contrast, comfortable for kids to read */}
          <div
            className="p-3.5 rounded-xl border relative font-sans"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              borderColor: `${themeColor}30`,
              boxShadow: `inset 0 0 15px ${themeColor}08`
            }}
          >
            <p className="text-white text-sm md:text-base leading-relaxed tracking-wide font-normal">
              {currentSection.text}
            </p>
          </div>

          {/* Quick Step Buttons for easy tapping */}
          <div className="flex items-center gap-2 overflow-x-auto py-0.5 scrollbar-none">
            {sections.map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => {
                  setCurrentIdx(idx);
                  speakSection(idx, true);
                }}
                className={`px-3 py-1 rounded-lg text-[10px] font-orbitron font-bold transition-all shrink-0 cursor-pointer border ${
                  idx === currentIdx
                    ? 'text-white border-cyan-400 bg-cyan-400/20 shadow-sm'
                    : 'text-white/50 border-white/5 bg-white/2 hover:text-white/80 hover:border-white/20'
                }`}
                style={{
                  borderColor: idx === currentIdx ? themeColor : undefined,
                  background: idx === currentIdx ? `${themeColor}20` : undefined,
                  color: idx === currentIdx ? '#ffffff' : undefined
                }}
              >
                {idx === 0 ? '🌟 Intro' : idx === sections.length - 1 ? '🎮 How to Play' : `Step ${idx}`}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
