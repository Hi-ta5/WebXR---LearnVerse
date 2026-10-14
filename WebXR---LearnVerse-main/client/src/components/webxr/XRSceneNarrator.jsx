import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Volume2, VolumeX, Play, Pause, RotateCcw, ChevronRight, ChevronLeft,
  MessageSquare
} from 'lucide-react';
import { getSceneNarration } from '../../data/sceneNarrationData';
import { trackEvent } from '../../firebase';

// Speech synthesis check
const hasTTS = typeof window !== 'undefined' && 'speechSynthesis' in window;

/**
 * Selects the most human-like, natural, high-fidelity female voice available.
 * Prioritizes Microsoft Neural / Online Natural voices (Jenny, Aria, Sonia, Libby),
 * Google UK/US English Female, Apple Samantha/Victoria, and modern WebRTC/Neural voices.
 * Explicitly avoids robotic legacy SAPI desktop voices.
 */
// Male voice identifiers to strictly prevent selecting male voices as female
const MALE_VOICE_BLACKLIST = [
  'male', 'david', 'george', 'mark', 'ravi', 'guy', 'christopher',
  'steffan', 'stefan', 'james', 'richard', 'daniel', 'brian', 'andrew',
  'mike', 'boy', 'ryan', 'eric', 'roger', 'thomas', 'william', 'charles',
  'henry', 'arthur', 'oliver', 'noah', 'liam', 'lucas', 'ben', 'benjamin',
  'jason', 'jacob', 'jack', 'john', 'paul', 'peter', 'luke', 'mitchell',
  'wayne', 'sean', 'sam', 'ken', 'prabhat', 'cosimo', 'florian', 'raul',
  'stefano', 'connor', 'nathan', 'ian'
];

const isNotMale = (name) => {
  const lower = (name || '').toLowerCase();
  return !MALE_VOICE_BLACKLIST.some(m => lower.includes(m));
};

// Top-tier sweet, warm, melodic, natural human female voices across Edge, Chrome, Safari & Windows
const SWEET_FEMALE_VOICES = [
  // 1. World-class Microsoft Natural/Neural studio voices (Edge / Windows 11)
  'jenny',      // Microsoft Jenny Online (Natural) - remarkably sweet, warm, friendly
  'aria',       // Microsoft Aria Online (Natural) - clear, sweet, natural, empathetic
  'maisie',     // Microsoft Maisie Online (Natural) - sweet, young, gentle British female
  'libby',      // Microsoft Libby Online (Natural) - soft, warm, gentle storytelling tone
  'sonia',      // Microsoft Sonia Online (Natural) - melodic, soft, polite British female
  'ana',        // Microsoft Ana Online (Natural) - sweet, friendly, natural
  'ava',        // Microsoft Ava Online (Natural) - sweet, crisp, modern
  'emma',       // Microsoft Emma Online (Natural) - warm, pleasant conversational
  'michelle',   // Microsoft Michelle Online (Natural)
  'clara',      // Microsoft Clara Online (Natural)
  'neerja',     // Microsoft Neerja Online (Natural)
  'natasha',    // Microsoft Natasha Online (Natural)

  // 2. High-quality Google Cloud voices (Chrome)
  'google uk english female',  // Exceptionally melodic, sweet, human tone
  'google us english female',
  'google english female',

  // 3. Apple Premium Female voices (Safari / macOS / iOS)
  'samantha (enhanced)',
  'samantha',
  'serena',
  'victoria',
  'karen (enhanced)',
  'karen',
  'tessa',
  'moira',
  'fiona'
];

function pickSoftFemaleVoice() {
  if (!hasTTS) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // Filter English voices
  const english = voices.filter(v => v.lang && (v.lang.startsWith('en') || v.lang.includes('en-') || v.lang.includes('EN')));
  const pool = english.length > 0 ? english : voices;

  // Tier 1: Search prioritized sweet, warm human female voices
  for (const kw of SWEET_FEMALE_VOICES) {
    const match = pool.find(v => isNotMale(v.name) && v.name.toLowerCase().includes(kw));
    if (match) return match;
  }

  // Tier 2: Any Natural / Neural / Online female voice (excluding legacy desktop SAPI)
  const naturalFemale = pool.find(v => {
    const lower = v.name.toLowerCase();
    const isNatural = lower.includes('natural') || lower.includes('neural') || lower.includes('online');
    const isNotDesktop = !lower.includes('desktop') && !lower.includes('sapi');
    return isNatural && isNotDesktop && isNotMale(lower);
  });
  if (naturalFemale) return naturalFemale;

  // Tier 3: Any modern non-desktop female voice
  const modernFemale = pool.find(v => {
    const lower = v.name.toLowerCase();
    const isNotDesktop = !lower.includes('desktop') && !lower.includes('sapi');
    const isTaggedFemale = lower.includes('female') || lower.includes('woman') || lower.includes('girl');
    return isNotDesktop && isTaggedFemale && isNotMale(lower);
  });
  if (modernFemale) return modernFemale;

  // Tier 4: Any non-desktop English voice that is strictly not male
  const anyNonDesktop = pool.find(v => {
    const lower = v.name.toLowerCase();
    return !lower.includes('desktop') && !lower.includes('sapi') && isNotMale(lower);
  });
  if (anyNonDesktop) return anyNonDesktop;

  // Tier 5: Fallback legacy desktop voice (e.g. Zira) only if nothing else exists
  const desktopFemale = pool.find(v => {
    const lower = v.name.toLowerCase();
    return isNotMale(lower) && (lower.includes('zira') || lower.includes('female') || lower.includes('woman'));
  });
  if (desktopFemale) return desktopFemale;

  // Tier 6: Last resort
  return pool.find(v => isNotMale(v.name)) || pool[0] || null;
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
    // Replace colons and dashes with soft natural breathing pauses
    .replace(/:\s+/g, ', ')
    .replace(/\s*—\s*/g, ', ')
    .replace(/\s*–\s*/g, ', ')
    .replace(/\s*\/\s*/g, ' or ')
    .replace(/\s*&\s*/g, ' and ')
    // Replace parentheses with natural comma pauses
    .replace(/\(([^)]+)\)/g, ', $1, ')
    .replace(/\n+/g, '. ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export default function XRSceneNarrator({
  subjectId,
  topicId,
  themeColor = '#00f2fe',
  autoStart = false
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
  const [errorText, setErrorText] = useState(null);

  const timeoutRef = useRef(null);
  const advanceTimerRef = useRef(null);
  const isCancelledRef = useRef(false);
  const currentSection = sections[currentIdx] || sections[0];
  const totalSteps = sections.length;

  const [voicesLoaded, setVoicesLoaded] = useState(false);

  // Preload voices
  useEffect(() => {
    if (hasTTS) {
      const updateVoices = () => {
        window.speechSynthesis.getVoices();
        setVoicesLoaded(true);
      };
      updateVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = updateVoices;
      }
    }
  }, []);

  const stopSpeech = useCallback(() => {
    isCancelledRef.current = true;
    if (advanceTimerRef.current) {
      clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (hasTTS) {
      try {
        window.speechSynthesis.cancel();
      } catch (err) {
        console.warn('Speech cancellation notification:', err);
      }
    }
    setIsPlaying(false);
    setIsPaused(false);
  }, []);

  const speakSection = useCallback((sectionIndex, autoAdvance = true) => {
    if (!hasTTS) {
      setErrorText('Speech synthesis not available in this browser');
      return;
    }
    const targetSection = sections[sectionIndex];
    if (!targetSection) return;

    // Reset cancellation flag because user explicitly started or advanced speech
    isCancelledRef.current = false;
    setErrorText(null);

    // Stop previous timers and speech cleanly
    if (advanceTimerRef.current) {
      clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    try {
      window.speechSynthesis.cancel();
    } catch {
      // ignore
    }

    if (isMuted) {
      setIsPlaying(true);
      setIsPaused(false);
      // Timer fallback if muted so subtitles advance naturally
      const wordCount = targetSection.text.split(' ').length;
      const readingDuration = Math.max(4000, wordCount * 350);
      timeoutRef.current = setTimeout(() => {
        if (isCancelledRef.current) return;
        if (autoAdvance && sectionIndex < sections.length - 1) {
          setCurrentIdx(sectionIndex + 1);
          speakSection(sectionIndex + 1, autoAdvance);
        } else {
          setIsPlaying(false);
          setIsPaused(false);
        }
      }, readingDuration);
      return;
    }

    try {
      const cleanSpokenText = prepareTextForSpeech(targetSection.text);
      const utterance = new SpeechSynthesisUtterance(cleanSpokenText);

      // Warm, natural, sweet human female voice parameters
      const femaleVoice = pickSoftFemaleVoice();
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }
      // Authentic human vocal pitch without robotic DSP frequency-shifting
      utterance.pitch = 1.0;
      // Gentle, calm, sweet narrative pace (human speaking rate)
      utterance.rate = 0.94;
      utterance.volume = 1.0;

      trackEvent('narration_play', {
        subject_id: subjectId,
        topic_id: topicId,
        step_number: targetSection.stepNumber,
        title: targetSection.title,
      });

      let isDone = false;
      const finish = () => {
        if (isDone || isCancelledRef.current) return;
        isDone = true;
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        if (autoAdvance && sectionIndex < sections.length - 1) {
          setCurrentIdx(sectionIndex + 1);
          // Breath pause between sections
          advanceTimerRef.current = setTimeout(() => {
            if (!isCancelledRef.current) {
              speakSection(sectionIndex + 1, autoAdvance);
            }
          }, 600);
        } else {
          setIsPlaying(false);
          setIsPaused(false);
        }
      };

      utterance.onstart = () => {
        if (isCancelledRef.current) {
          window.speechSynthesis.cancel();
          return;
        }
        setIsPlaying(true);
        setIsPaused(false);
      };

      utterance.onend = finish;

      utterance.onerror = (e) => {
        // If interrupted or canceled by explicit stop, never auto-advance or log spurious errors
        if (e.error === 'interrupted' || e.error === 'canceled' || isCancelledRef.current) {
          return;
        }
        console.warn('Teacher voice notice:', e);
        setIsPlaying(false);
        setIsPaused(false);
        if (e.error && e.error !== 'network') {
          setErrorText('Voice interrupted. Click to retry.');
        }
      };

      // Watchdog timeout fallback to prevent hung speech synthesis in Chrome
      const wordCount = cleanSpokenText.split(' ').length;
      const expectedMs = (wordCount * 650) + 6000;
      timeoutRef.current = setTimeout(() => {
        if (!isDone && !isCancelledRef.current) {
          window.speechSynthesis.cancel();
          finish();
        }
      }, expectedMs);

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error('Speech initialization error:', err);
      setIsPlaying(false);
      setIsPaused(false);
      setErrorText('Voice failed to start. Click to retry.');
    }
  }, [sections, isMuted]);

  // Voice state reset: voice remains strictly OFF until explicit user clicks "Start Learning"
  useEffect(() => {
    stopSpeech();
    setCurrentIdx(0);
    setIsPlaying(false);
    setIsPaused(false);
    setErrorText(null);

    return () => {
      stopSpeech();
    };
  }, [subjectId, topicId, stopSpeech]);

  // Controls handlers
  const handlePlayToggle = () => {
    if (isPlaying) {
      if (isPaused) {
        // Resume
        if (hasTTS && !isMuted) {
          try {
            window.speechSynthesis.resume();
          } catch {
            speakSection(currentIdx, true);
          }
        }
        setIsPaused(false);
      } else {
        // Pause
        if (hasTTS && !isMuted) {
          try {
            window.speechSynthesis.pause();
          } catch {
            stopSpeech();
          }
        }
        setIsPaused(true);
      }
    } else {
      // Start Learning from current section
      speakSection(currentIdx, true);
    }
  };

  const handleReplay = () => {
    stopSpeech();
    speakSection(currentIdx, true);
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      const prev = currentIdx - 1;
      setCurrentIdx(prev);
      if (isPlaying) {
        speakSection(prev, true);
      }
    }
  };

  const handleNext = () => {
    if (currentIdx < sections.length - 1) {
      const next = currentIdx + 1;
      setCurrentIdx(next);
      if (isPlaying) {
        speakSection(next, true);
      }
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

          {/* Error Notification with retry */}
          {errorText && (
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-[10px] font-sans animate-fade-in">
              <span>{errorText}</span>
              <button
                onClick={() => {
                  setErrorText(null);
                  speakSection(currentIdx, true);
                }}
                className="underline font-bold text-white hover:text-cyan-300 cursor-pointer ml-1"
              >
                Retry
              </button>
            </div>
          )}

          {/* Primary Action Button: Start Learning / Pause / Resume */}
          <button
            onClick={handlePlayToggle}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl font-orbitron font-bold text-xs text-white cursor-pointer transition-all transform hover:scale-[1.03] active:scale-[0.97] shadow-md"
            style={{
              background: isPlaying && !isPaused
                ? 'rgba(255, 255, 255, 0.12)'
                : isPaused
                ? 'rgba(234, 179, 8, 0.2)'
                : `linear-gradient(135deg, ${themeColor} 0%, #a855f7 100%)`,
              border: `1px solid ${isPlaying && !isPaused ? themeColor : isPaused ? '#eab308' : 'transparent'}`,
              boxShadow: isPlaying && !isPaused ? `0 0 15px ${themeColor}30` : `0 0 20px ${themeColor}40`
            }}
            title={isPlaying && !isPaused ? 'Pause Voice' : isPaused ? 'Resume Voice' : 'Start Learning'}
          >
            {isPlaying && !isPaused ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Pause</span>
              </>
            ) : isPaused ? (
              <>
                <Play className="w-3.5 h-3.5 fill-current text-yellow-300" />
                <span>Resume</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Start Learning</span>
              </>
            )}
          </button>

          {/* Replay / Listen Again Button */}
          <button
            onClick={handleReplay}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs font-sans transition-all cursor-pointer"
            title="Replay explanation from current part"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px] font-orbitron">Replay</span>
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
                {idx === 0 ? 'Intro' : idx === sections.length - 1 ? '🎮 How to Play' : `Step ${idx}`}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
