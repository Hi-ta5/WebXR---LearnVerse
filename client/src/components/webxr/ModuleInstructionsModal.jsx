import React from 'react';
import {
  Compass, MousePointer, Volume2, Sparkles, X, ArrowRight,
  Lightbulb, HelpCircle, CheckCircle2
} from 'lucide-react';
import { getModuleInstructions } from '../../data/moduleInstructionsData';

export default function ModuleInstructionsModal({
  subjectId,
  topicId,
  themeColor = '#00f2fe',
  isOpen = true,
  onStart,
  onClose,
  isModal = false
}) {
  if (!isOpen) return null;

  const info = getModuleInstructions(subjectId, topicId);

  const steps = [
    {
      icon: '🖱️',
      title: 'Look Around',
      desc: 'Click & drag with your mouse (or swipe with your finger) to rotate the 3D world. Scroll to zoom in and out!'
    },
    {
      icon: '👆',
      title: 'Tap & Try',
      desc: 'Click the buttons on screen and tap 3D objects to see animations and watch how things work!'
    },
    {
      icon: '👩‍🏫',
      title: 'Listen & Read',
      desc: 'Your friendly voice guide will speak automatically, and clear subtitles will show at the bottom so you can read along!'
    }
  ];

  const content = (
    <div
      className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden border backdrop-blur-xl transition-all shadow-2xl relative"
      style={{
        background: 'linear-gradient(145deg, rgba(12, 14, 35, 0.96) 0%, rgba(5, 7, 20, 0.98) 100%)',
        borderColor: `${themeColor}40`,
        boxShadow: `0 0 50px ${themeColor}25, 0 20px 40px rgba(0,0,0,0.8)`
      }}
    >
      {/* Decorative top glow bar */}
      <div
        className="w-full h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        style={{
          background: `linear-gradient(90deg, transparent, ${themeColor}, #a855f7, transparent)`
        }}
      />

      <div className="p-6 md:p-8 flex flex-col gap-6 relative z-10">

        {/* Top bar with close button (if modal) */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg border shrink-0 animate-bounce-slow"
              style={{
                background: `${themeColor}18`,
                borderColor: `${themeColor}40`,
                boxShadow: `0 0 20px ${themeColor}30`
              }}
            >
              {info.emoji || '🚀'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className="text-[10px] font-orbitron font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                  style={{ background: `${themeColor}20`, color: themeColor, border: `1px solid ${themeColor}40` }}
                >
                  Quick Guide for Kids
                </span>
                <span className="text-[10px] text-white/40 font-mono uppercase">
                  {subjectId?.replace(/-/g, ' ')}
                </span>
              </div>
              <h2 className="font-orbitron text-xl md:text-2xl font-bold text-white tracking-wide mt-1">
                {info.title}
              </h2>
            </div>
          </div>

          {isModal && onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all cursor-pointer bg-white/5"
              title="Close guide"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Simple Explanation Bubble */}
        <div
          className="p-4 md:p-5 rounded-2xl border relative overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderColor: `${themeColor}25`
          }}
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0 mt-0.5">
              <Lightbulb className="w-4 h-4 text-amber-300" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-orbitron font-bold text-amber-300 uppercase tracking-wider">
                What is this module about?
              </span>
              <p className="text-white/90 text-sm md:text-base leading-relaxed font-sans font-medium">
                {info.simpleExplanation}
              </p>
              {info.howItWorks && (
                <p className="text-white/60 text-xs md:text-sm leading-relaxed font-sans mt-1">
                  💡 {info.howItWorks}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 3 Simple Action Steps */}
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-orbitron font-bold text-white/70 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            How to explore this 3D module (3 Easy Steps)
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {steps.map((st, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex flex-col gap-2 relative group"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{st.icon}</span>
                  <span
                    className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md"
                    style={{ background: `${themeColor}15`, color: themeColor }}
                  >
                    Step {i + 1}
                  </span>
                </div>
                <h4 className="font-orbitron font-bold text-xs text-white">
                  {st.title}
                </h4>
                <p className="text-[11px] text-white/65 leading-relaxed font-sans">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Fact pill */}
        {info.funFact && (
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-200 text-xs">
            <span className="text-sm">🌟</span>
            <span className="font-sans leading-snug">
              <strong className="font-semibold text-purple-300">Fun Fact: </strong>
              {info.funFact}
            </span>
          </div>
        )}

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2 text-[11px] text-white/50 font-sans">
            <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Voice guide starts automatically with subtitles</span>
          </div>

          <button
            onClick={() => {
              if (onStart) onStart();
              if (onClose) onClose();
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-orbitron font-bold text-sm tracking-wide text-white cursor-pointer transition-all transform hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2.5 shadow-xl"
            style={{
              background: `linear-gradient(135deg, ${themeColor} 0%, #a855f7 100%)`,
              boxShadow: `0 0 25px ${themeColor}50`
            }}
          >
            <span>{isModal ? 'Got It! Keep Exploring' : "🚀 Let's Start Exploring!"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
        {content}
      </div>
    );
  }

  return content;
}
