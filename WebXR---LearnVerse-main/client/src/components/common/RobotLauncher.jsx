import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

/**
 * RobotLauncher
 * 
 * Interactive AI Chatbot Launcher modeled precisely after the reference robot design:
 * - Cute, rounded white humanoid robot body with royal blue accent trims
 * - Rounded TV-helmet head with glossy dark visor screen
 * - Large glowing cyan eyes with specular highlights & friendly cyan smile
 * - Segmented arms with dark mechanical hands
 * - Right arm articulates and waves hello on cursor hover
 * - Floating/bobbing idle animation with soft hover shadow
 * - Speech bubble: "Hi! How can I help?" on hover
 * - Full click interaction to launch the existing LearnVerse AI Tutor
 */
export default function RobotLauncher({ isOpen, onClick, unreadCount = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const waveTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setHasInteracted(true);
    setIsWaving(true);

    // Play wave animation for ~1.8 seconds, then settle into a welcoming pose
    if (waveTimeoutRef.current) clearTimeout(waveTimeoutRef.current);
    waveTimeoutRef.current = setTimeout(() => {
      setIsWaving(false);
    }, 1800);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsWaving(false);
    if (waveTimeoutRef.current) clearTimeout(waveTimeoutRef.current);
  };

  useEffect(() => {
    return () => {
      if (waveTimeoutRef.current) clearTimeout(waveTimeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative select-none flex flex-col items-end"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        /* Idle subtle floating bob */
        @keyframes robotFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(-1.5deg);
          }
        }

        /* Shadow expansion in sync with float */
        @keyframes shadowScale {
          0%, 100% {
            transform: scale(1);
            opacity: 0.35;
          }
          50% {
            transform: scale(0.8);
            opacity: 0.2;
          }
        }

        /* Periodic eye blink */
        @keyframes eyeBlink {
          0%, 96%, 100% {
            transform: scaleY(1);
          }
          98% {
            transform: scaleY(0.1);
          }
        }

        /* Natural hand wave: arm raises and forearm waves 2-3 times */
        @keyframes waveHello {
          0% {
            transform: rotate(0deg);
          }
          15% {
            transform: rotate(-18deg);
          }
          30% {
            transform: rotate(14deg);
          }
          45% {
            transform: rotate(-16deg);
          }
          60% {
            transform: rotate(10deg);
          }
          75% {
            transform: rotate(-8deg);
          }
          90% {
            transform: rotate(4deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        /* Gentle resting hover tilt */
        @keyframes headInquire {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(2.5deg); }
        }

        .lv-robot-container {
          animation: robotFloat 3.8s ease-in-out infinite;
          transform-origin: center bottom;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.3s ease;
        }

        .lv-robot-container:hover {
          animation-play-state: paused;
          transform: scale(1.14) translateY(-4px);
          filter: drop-shadow(0 0 16px rgba(0, 240, 255, 0.45));
        }

        .lv-robot-shadow {
          animation: shadowScale 3.8s ease-in-out infinite;
          transform-origin: center center;
        }

        .lv-robot-eyes {
          animation: eyeBlink 4.6s infinite;
          transform-origin: 90px 65px;
        }

        .lv-waving-arm {
          transform-origin: 122px 104px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .lv-waving-arm.is-waving {
          animation: waveHello 1.6s ease-in-out;
        }

        .lv-speech-bubble {
          animation: bubblePop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          transform-origin: bottom right;
        }

        @keyframes bubblePop {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.85);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }
      `}</style>

      {/* SPEECH BUBBLE ON HOVER */}
      {isHovered && !isOpen && (
        <div className="lv-speech-bubble absolute -top-14 right-14 z-30 pointer-events-none whitespace-nowrap">
          <div className="relative bg-[#050414]/90 border border-neon-cyan/40 text-white px-3.5 py-1.5 rounded-2xl shadow-[0_0_20px_rgba(0,240,255,0.35)] backdrop-blur-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_#00f0ff] animate-ping" />
            <span className="font-orbitron font-bold text-xs text-white tracking-wide">
              Hi! How can I help?
            </span>
            {/* Bubble Tail */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#050414] border-r border-b border-neon-cyan/40 transform rotate-45" />
          </div>
        </div>
      )}

      {/* ROBOT LAUNCHER BUTTON */}
      <button
        onClick={onClick}
        className="group relative cursor-pointer outline-none border-none bg-transparent p-0 flex flex-col items-center focus:outline-none"
        aria-label="Toggle AI Tutor"
        title="Chat with LearnVerse AI Tutor"
      >
        {/* Floating Robot Graphic Container */}
        <div className="lv-robot-container relative w-[76px] h-[92px] sm:w-[84px] sm:h-[102px]">
          <svg
            viewBox="0 0 180 210"
            className="w-full h-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* White casing gradients */}
              <linearGradient id="bodyWhite" x1="50" y1="20" x2="130" y2="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#f1f5f9" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>

              {/* Helmet highlight */}
              <linearGradient id="headHighlight" x1="50" y1="15" x2="130" y2="95" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="75%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>

              {/* Royal Blue Accents */}
              <linearGradient id="royalBlue" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>

              {/* Dark visor display screen */}
              <linearGradient id="visorScreen" x1="45" y1="35" x2="135" y2="95" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0a0e1a" />
                <stop offset="60%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#1e1b4b" />
              </linearGradient>

              {/* Glowing Cyan for Eyes & Smile */}
              <linearGradient id="cyanGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#00f0ff" />
              </linearGradient>

              {/* Visor specular reflection sheen */}
              <linearGradient id="visorGlassSheen" x1="50" y1="40" x2="130" y2="75" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
                <stop offset="40%" stopColor="rgba(255,255,255,0.06)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>

              {/* Dark hand & joints */}
              <linearGradient id="darkJoint" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>

              {/* Cyan Glow Filter */}
              <filter id="eyeGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* ─── FLOATING LEGS & FEET ─── */}
            <g id="legs-group">
              {/* Left Leg (viewer's left) */}
              <g transform="translate(62, 142)">
                {/* Blue hip connector */}
                <ellipse cx="6" cy="6" rx="5" ry="4" fill="#1d4ed8" />
                {/* Thigh */}
                <rect x="1" y="7" width="10" height="15" rx="5" fill="url(#bodyWhite)" stroke="#94a3b8" strokeWidth="0.8" />
                {/* Blue knee circle */}
                <circle cx="6" cy="22" r="4.5" fill="#2563eb" />
                <circle cx="6" cy="22" r="2.5" fill="#1d4ed8" />
                {/* Lower leg / foot floating down */}
                <path
                  d="M2,24 C2,24 1,38 6,39 C11,38 10,24 10,24 Z"
                  fill="url(#bodyWhite)"
                  stroke="#94a3b8"
                  strokeWidth="0.8"
                />
                {/* Dark sole */}
                <ellipse cx="6" cy="38" rx="4" ry="2" fill="#0f172a" />
              </g>

              {/* Right Leg (viewer's right) */}
              <g transform="translate(86, 145)">
                {/* Blue hip connector */}
                <ellipse cx="6" cy="6" rx="5" ry="4" fill="#1d4ed8" />
                {/* Thigh */}
                <rect x="1" y="7" width="10" height="15" rx="5" fill="url(#bodyWhite)" stroke="#94a3b8" strokeWidth="0.8" />
                {/* Blue knee circle */}
                <circle cx="6" cy="22" r="4.5" fill="#2563eb" />
                <circle cx="6" cy="22" r="2.5" fill="#1d4ed8" />
                {/* Lower leg / foot floating down */}
                <path
                  d="M2,24 C2,24 1,38 6,39 C11,38 10,24 10,24 Z"
                  fill="url(#bodyWhite)"
                  stroke="#94a3b8"
                  strokeWidth="0.8"
                />
                {/* Dark sole */}
                <ellipse cx="6" cy="38" rx="4" ry="2" fill="#0f172a" />
              </g>
            </g>

            {/* ─── RESTING LEFT ARM (viewer's left) ─── */}
            <g id="resting-left-arm">
              {/* Blue shoulder cap */}
              <circle cx="56" cy="116" r="8" fill="url(#royalBlue)" stroke="#1e40af" strokeWidth="0.8" />
              {/* Upper arm white capsule */}
              <path
                d="M51,120 C46,128 43,138 45,148 C49,152 56,150 58,144 C59,136 57,126 55,121 Z"
                fill="url(#bodyWhite)"
                stroke="#cbd5e1"
                strokeWidth="0.8"
              />
              {/* Blue wrist band */}
              <ellipse cx="46" cy="151" rx="5.5" ry="3.5" fill="#1d4ed8" />
              {/* Dark hand with fingers resting */}
              <path
                d="M42,153 C38,157 37,163 41,166 C44,168 49,165 50,161 C51,157 48,153 44,153 Z"
                fill="url(#darkJoint)"
              />
              {/* Small thumb */}
              <ellipse cx="49" cy="156" rx="2" ry="3" fill="#1e293b" />
            </g>

            {/* ─── TORSO / BODY ─── */}
            <g id="torso-group">
              {/* Blue neck collar band */}
              <path d="M68,98 Q80,105 92,98 L94,103 Q80,111 66,103 Z" fill="#1d4ed8" />

              {/* Main rounded white body */}
              <path
                d="M62,102 C50,112 50,140 60,150 C68,157 92,157 100,150 C110,140 110,112 98,102 Q80,107 62,102 Z"
                fill="url(#bodyWhite)"
                stroke="#cbd5e1"
                strokeWidth="1"
              />

              {/* Blue lower pelvic accent ring */}
              <path
                d="M64,144 Q80,154 96,144 Q80,157 64,144 Z"
                fill="#1d4ed8"
              />

              {/* Central Chest Sensor (Orb / Arc Reactor) */}
              <circle cx="80" cy="126" r="10" fill="#1e3a8a" stroke="#2563eb" strokeWidth="1.5" />
              <circle cx="80" cy="126" r="7.5" fill="#0f172a" />
              <circle cx="80" cy="126" r="4" fill="#00f0ff" opacity="0.85" filter="url(#eyeGlowFilter)" />
              <circle cx="78.5" cy="124.5" r="1.5" fill="#ffffff" />
            </g>

            {/* ─── HEAD & FACE ─── */}
            <g id="head-group">
              {/* Ear pod Left (viewer's left) */}
              <g transform="translate(36, 52)">
                <rect x="0" y="2" width="10" height="24" rx="5" fill="#1d4ed8" />
                <rect x="2" y="5" width="6" height="18" rx="3" fill="#0f172a" />
                <circle cx="5" cy="14" r="2.5" fill="#00f0ff" opacity="0.75" />
              </g>

              {/* Ear pod Right (viewer's right) */}
              <g transform="translate(114, 52)">
                <rect x="0" y="2" width="10" height="24" rx="5" fill="#1d4ed8" />
                <rect x="2" y="5" width="6" height="18" rx="3" fill="#0f172a" />
                <circle cx="5" cy="14" r="2.5" fill="#00f0ff" opacity="0.75" />
              </g>

              {/* Main White Helmet (Rounded television shape) */}
              <path
                d="M42,50 C42,28 60,18 80,18 C100,18 118,28 118,50 C118,76 102,96 80,96 C58,96 42,76 42,50 Z"
                fill="url(#headHighlight)"
                stroke="#cbd5e1"
                strokeWidth="1.2"
              />

              {/* Royal Blue Top Crest Patch on Helmet */}
              <path
                d="M62,20 C68,16 92,16 98,20 C96,27 64,27 62,20 Z"
                fill="url(#royalBlue)"
              />

              {/* Dark Visor / Face Screen (Inset rounded rectangle) */}
              <rect
                x="49"
                y="34"
                width="62"
                height="46"
                rx="14"
                fill="url(#visorScreen)"
                stroke="#334155"
                strokeWidth="1.5"
              />

              {/* Visor Glass Reflection Gloss Line */}
              <path
                d="M51,46 C51,38 58,36 67,36 L102,36 C107,36 109,38 109,42 C92,44 70,52 51,64 Z"
                fill="url(#visorGlassSheen)"
              />

              {/* ─── EYES & MOUTH (EXPRESSION) ─── */}
              <g className="lv-robot-eyes">
                {/* Left Glowing Cyan Eye */}
                <ellipse cx="68" cy="55" rx="7.5" ry="9" fill="url(#cyanGlow)" filter="url(#eyeGlowFilter)" />
                {/* Left Eye Specular Reflection */}
                <ellipse cx="66" cy="52" rx="2.5" ry="3.5" fill="#ffffff" />
                <circle cx="71" cy="58" r="1.2" fill="#ffffff" opacity="0.8" />

                {/* Right Glowing Cyan Eye */}
                <ellipse cx="92" cy="55" rx="7.5" ry="9" fill="url(#cyanGlow)" filter="url(#eyeGlowFilter)" />
                {/* Right Eye Specular Reflection */}
                <ellipse cx="90" cy="52" rx="2.5" ry="3.5" fill="#ffffff" />
                <circle cx="95" cy="58" r="1.2" fill="#ffffff" opacity="0.8" />

                {/* Friendly Cyan Smile */}
                <path
                  d="M74,70 Q80,77 86,70"
                  stroke="#00f0ff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#eyeGlowFilter)"
                />
              </g>
            </g>

            {/* ─── WAVING RIGHT ARM (viewer's right, robot's left) ─── */}
            {/* Pivot centered at the shoulder: (108, 106) */}
            <g
              id="waving-arm-group"
              className={`lv-waving-arm ${isWaving ? 'is-waving' : ''}`}
            >
              {/* Blue shoulder joint */}
              <circle cx="108" cy="106" r="8" fill="url(#royalBlue)" stroke="#1e40af" strokeWidth="0.8" />

              {/* Upper arm pointing up and out */}
              <path
                d="M110,103 C116,95 125,86 134,80 C138,84 136,92 130,97 C122,103 115,108 110,108 Z"
                fill="url(#bodyWhite)"
                stroke="#cbd5e1"
                strokeWidth="0.8"
              />

              {/* Forearm angled upwards */}
              <path
                d="M132,83 C139,72 145,62 149,52 C155,56 153,64 146,72 C141,78 135,84 132,86 Z"
                fill="url(#bodyWhite)"
                stroke="#cbd5e1"
                strokeWidth="0.8"
              />

              {/* Blue wrist band */}
              <ellipse
                cx="149"
                cy="52"
                rx="5"
                ry="3.5"
                transform="rotate(-30 149 52)"
                fill="#1d4ed8"
              />

              {/* Open Waving Hand with 4 fingers */}
              <g id="waving-hand" transform="translate(144, 28)">
                {/* Palm */}
                <ellipse cx="10" cy="18" rx="6" ry="5.5" fill="url(#darkJoint)" />
                {/* Pinky */}
                <path d="M5,16 C3,11 5,8 7,10 C8,12 8,16 6,17 Z" fill="#0f172a" />
                {/* Ring finger */}
                <path d="M8,14 C8,8 11,6 12,9 C13,11 11,15 9,16 Z" fill="#1e293b" />
                {/* Middle finger */}
                <path d="M12,14 C13,7 16,6 17,9 C17,11 15,15 13,16 Z" fill="#0f172a" />
                {/* Index finger */}
                <path d="M15,16 C17,10 20,10 20,13 C19,16 17,18 15,18 Z" fill="#1e293b" />
                {/* Thumb */}
                <path d="M6,21 C3,20 3,18 5,17 C8,18 9,21 7,22 Z" fill="#0f172a" />
              </g>
            </g>
          </svg>
        </div>

        {/* Soft hovering ground shadow */}
        <div className="lv-robot-shadow w-12 h-2.5 bg-black/40 rounded-full blur-[3px] mt-0.5" />

        {/* Unread Message Notification Badge */}
        {unreadCount > 0 && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-black text-[9px] font-bold text-white flex items-center justify-center shadow-lg animate-bounce">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}

        {/* Close indicator when chat window is active */}
        {isOpen && (
          <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-neon-purple border border-white/30 text-white flex items-center justify-center shadow-[0_0_12px_rgba(188,59,240,0.6)]">
            <X className="w-3.5 h-3.5" />
          </div>
        )}
      </button>
    </div>
  );
}
