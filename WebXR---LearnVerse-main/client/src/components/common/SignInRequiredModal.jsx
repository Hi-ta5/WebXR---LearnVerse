import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, LogIn, UserPlus, X, ShieldCheck } from 'lucide-react';

/**
 * SignInRequiredModal
 * 
 * Displayed when an unauthenticated user attempts to launch or access
 * an interactive WebXR module without signing in first.
 */
export default function SignInRequiredModal({
  isOpen,
  onClose,
  moduleTitle = 'Interactive Learning Modules',
  subjectTitle = ''
}) {
  const navigate = useNavigate();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-3xl overflow-hidden border border-neon-cyan/40 bg-[#07051a]/95 text-white shadow-[0_0_60px_rgba(0,240,255,0.25)] relative p-6 md:p-8 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 0 50px rgba(0, 240, 255, 0.25), 0 20px 40px rgba(0, 0, 0, 0.8)'
        }}
      >
        {/* Top decorative gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl border border-white/10 hover:border-white/30 text-white/50 hover:text-white bg-white/5 transition-all cursor-pointer"
          title="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon + Title */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan shrink-0 shadow-[0_0_20px_rgba(0,240,255,0.25)]">
            <Lock className="w-7 h-7 animate-pulse" />
          </div>

          <div className="flex flex-col gap-1 pr-6">
            <div className="text-[10px] font-orbitron font-bold text-neon-cyan uppercase tracking-widest">
              Authentication Required
            </div>
            <h2 className="font-orbitron text-xl font-bold tracking-wide text-white uppercase">
              First Sign In to Continue
            </h2>
          </div>
        </div>

        {/* Context explanation */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4.5 flex flex-col gap-2">
          <p className="font-sans text-sm text-white/80 leading-relaxed">
            Please <strong className="text-neon-cyan font-semibold">sign in</strong> or create an account first. Then you may continue using the modules:
          </p>
          {moduleTitle && (
            <div className="flex items-center gap-2 py-1 px-2.5 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 w-fit text-xs font-orbitron text-neon-cyan">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span className="truncate">{moduleTitle} {subjectTitle ? `(${subjectTitle})` : ''}</span>
            </div>
          )}
          <ul className="text-xs text-white/55 font-sans space-y-1 mt-1 pl-1">
            <li>✦ Access interactive 3D WebXR simulation environments</li>
            <li>✦ Track your curriculum progress &amp; daily study streak</li>
            <li>✦ Take knowledge checks and earn topic completion badges</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
          <button
            onClick={() => navigate('/signin')}
            className="w-full sm:flex-1 py-3.5 px-5 rounded-xl glow-btn-cyan text-white font-orbitron font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:scale-[1.02]"
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In / Log In</span>
          </button>

          <button
            onClick={() => navigate('/signup')}
            className="w-full sm:flex-1 py-3.5 px-5 rounded-xl border border-white/20 hover:border-neon-purple/50 bg-white/5 hover:bg-neon-purple/10 text-white font-orbitron font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
          >
            <UserPlus className="w-4 h-4 text-neon-purple" />
            <span>Create Account</span>
          </button>
        </div>

        {/* Footer cancel link */}
        <div className="text-center">
          <button
            onClick={onClose}
            className="text-xs text-white/40 hover:text-white/70 font-sans transition-colors cursor-pointer underline underline-offset-4"
          >
            Continue browsing curriculum preview
          </button>
        </div>
      </div>
    </div>
  );
}
