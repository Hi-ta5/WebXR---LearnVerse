import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SpaceParticles from '../components/common/SpaceParticles';
import { Star, ShieldAlert, Zap, Globe, Sparkles, Terminal } from 'lucide-react';

export default function LandingPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const slogans = [
    "Visualizing Engineering Concepts Through WebXR",
    "Learn Beyond Books",
    "Step Into Engineering Concepts",
    "Experience Engineering Visually"
  ];

  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [fadeState, setFadeState] = useState('opacity-100');

  // Rotate slogans with sleek transition
  useEffect(() => {
    const sloganTimer = setInterval(() => {
      setFadeState('opacity-0 translate-y-2');
      setTimeout(() => {
        setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
        setFadeState('opacity-100 translate-y-0');
      }, 500);
    }, 4000);

    return () => clearInterval(sloganTimer);
  }, []);

  const handleStart = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between relative overflow-hidden bg-transparent">

      {/* Dynamic Star background */}
      <SpaceParticles />

      {/* Dynamic atmospheric ambient glow */}
      <div className="absolute top-[-10%] left-[-20%] w-[60%] h-[60%] rounded-full bg-neon-purple/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[60%] h-[60%] rounded-full bg-neon-cyan/10 blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />

      {/* TOP HEADER */}
      <nav className="w-full max-w-7xl px-8 py-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)] bg-white/5 border border-white/10 animate-pulse">
            <img src="/logo.jpg" alt="LV" className="w-full h-full object-cover" />
          </div>
          <span className="font-orbitron font-bold text-xl tracking-wider text-white">
            LEARN<span className="text-neon-cyan font-extrabold">VERSE</span>
          </span>
        </div>

        <button
          onClick={() => navigate(user ? '/dashboard' : '/signin')}
          className="px-5 py-2 rounded-xl text-xs font-orbitron font-medium border border-white/10 hover:border-neon-cyan/50 hover:bg-neon-cyan/10 hover:text-neon-cyan transition-all duration-300 shadow-[inset_0_0_8px_transparent] hover:shadow-[0_0_12px_rgba(0,240,255,0.15)] cursor-pointer"
        >
          {user ? 'ENTER DASHBOARD' : 'SIGN IN'}
        </button>
      </nav>

      {/* CORE HERO SECTION */}
      <main className="w-full max-w-4xl px-8 flex-1 flex flex-col items-center justify-center text-center z-10 py-12 md:py-24">

        {/* Futuristic Badge */}
        <div className="flex items-center gap-2 bg-neon-purple/10 border border-neon-purple/30 px-4 py-1.5 rounded-full text-neon-purple text-xs font-orbitron tracking-widest mb-6 animate-float">

          <span>WEBXR PLATFORM FOR ACADEMICS</span>
        </div>

        {/* Brand Title */}
        <h1 className="font-orbitron text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 uppercase">
          LEARN<span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-neon-cyan to-neon-purple glow-text-cyan">VERSE</span>
        </h1>

        {/* Dynamic Slogan Slider */}
        <div className="h-16 flex items-center justify-center mb-10 overflow-hidden">
          <p className={`font-poppins text-lg md:text-2xl text-white/70 font-light tracking-wide max-w-2xl transition-all duration-500 transform ${fadeState}`}>
            {slogans[currentSloganIndex]}
          </p>
        </div>

        {/* Let's Get Started Button */}
        <button
          onClick={handleStart}
          className="glow-btn-cyan text-white px-10 py-4.5 rounded-2xl font-orbitron font-bold tracking-widest text-sm cursor-pointer"
        >
          LET'S GET STARTED
        </button>

        {/* Scroll hint or cyber line */}
        <div className="w-px h-16 bg-gradient-to-b from-neon-cyan to-transparent mt-12 animate-pulse" />
      </main>

      {/* HIGHLIGHTED BENEFITS SECTION */}
      <section className="w-full max-w-7xl px-8 pb-16 z-10 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 border border-white/5 relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="w-12 h-12 rounded-xl bg-neon-purple/15 border border-neon-purple/30 flex items-center justify-center text-neon-purple group-hover:glow-border-purple transition-all duration-300">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="font-orbitron font-semibold text-lg text-white">Interactive Modules</h3>
          <p className="font-sans text-sm text-white/50 leading-relaxed">
            Move beyond static learning. Explore roadmaps of Data Structures and CPU scheduling visually.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 border border-white/5 relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="w-12 h-12 rounded-xl bg-neon-cyan/15 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan group-hover:glow-border-cyan transition-all duration-300">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="font-orbitron font-semibold text-lg text-white">WebXR-Ready Architecture</h3>
          <p className="font-sans text-sm text-white/50 leading-relaxed">
            Designed for future VR/AR devices. Experience engineering models mapped onto physical space.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 border border-white/5 relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white/80 group-hover:border-white transition-all duration-300">
            <Terminal className="w-6 h-6" />
          </div>
          <h3 className="font-orbitron font-semibold text-lg text-white">Track Progress</h3>
          <p className="font-sans text-sm text-white/50 leading-relaxed">
            Log study sessions, build daily habits, compute subject mastery levels, and watch your stats evolve.
          </p>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-7xl px-8 py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-white/30 z-10 font-orbitron">
        <span>© 2026 LEARNVERSE SYSTEM CORP.</span>
      </footer>

    </div>
  );
}
