import React from 'react';
import { DIFFICULTY_CONFIG, DIFFICULTY_LEVELS } from '../../services/adaptiveAssessmentEngine';

/**
 * DifficultyIndicator
 * 
 * Displays a subtle, clean indicator of the current question's difficulty level
 * consistent with LearnVerse's dark neon aesthetic.
 * 
 * Note: Intentionally does NOT use the word "Adaptive".
 */
export default function DifficultyIndicator({ difficulty = 'easy', className = '' }) {
  const safeDiff = DIFFICULTY_CONFIG[difficulty] ? difficulty : DIFFICULTY_LEVELS.EASY;
  const config = DIFFICULTY_CONFIG[safeDiff];

  return (
    <div className={`inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-xl backdrop-blur-md transition-all duration-300 ${className}`}>
      <span className="text-[10px] font-orbitron text-white/40 uppercase tracking-widest">
        Difficulty:
      </span>

      {/* Pill with glowing dot and label */}
      <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg border text-[10px] font-orbitron font-bold uppercase tracking-wider transition-all duration-300 ${config.bgClass} ${config.borderClass} ${config.textClass}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${config.dotClass} ${config.glowClass} animate-pulse`} />
        <span>{config.label}</span>
      </div>

      {/* Gauge dots */}
      <div className="flex items-center gap-1 pl-0.5">
        <span
          title="Easy"
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            ['easy', 'medium', 'hard'].includes(safeDiff)
              ? 'bg-emerald-400 shadow-[0_0_4px_rgba(16,185,129,0.8)]'
              : 'bg-white/15'
          }`}
        />
        <span
          title="Medium"
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            ['medium', 'hard'].includes(safeDiff)
              ? 'bg-amber-400 shadow-[0_0_4px_rgba(245,158,11,0.8)]'
              : 'bg-white/15'
          }`}
        />
        <span
          title="Hard"
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            safeDiff === 'hard'
              ? 'bg-rose-400 shadow-[0_0_4px_rgba(244,63,94,0.8)]'
              : 'bg-white/15'
          }`}
        />
      </div>
    </div>
  );
}
