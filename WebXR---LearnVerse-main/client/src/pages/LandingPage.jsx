import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SpaceParticles from '../components/common/SpaceParticles';
import SignInRequiredModal from '../components/common/SignInRequiredModal';
import Logo from '../components/common/Logo';
import { SUBJECTS_DATA } from '../data/subjectConfig';
import {
  Compass, BookOpen, Layers, ArrowRight, ChevronRight, Play,
  CheckCircle2, Target, Award, LogIn, UserPlus, LogOut, ArrowUp, Menu, X,
  Flame, Zap, BarChart3, Bot, Volume2, ShieldCheck, Network, Cpu, Binary,
  Brain, Database, Lightbulb, Laptop, Check, HelpCircle, Boxes
} from 'lucide-react';

export default function LandingPage() {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  // Navigation & responsive state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Dynamic slogan cycle
  const slogans = [
    'Visualizing Engineering Concepts Through WebXR',
    'Interactive 3D Roadmaps for Core Computer Science',
    'Understand Complex Architectures Spatially'
  ];
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [fadeState, setFadeState] = useState('opacity-100 scale-100');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('opacity-0 scale-95');
      setTimeout(() => {
        setCurrentSloganIndex((prev) => (prev + 1) % slogans.length);
        setFadeState('opacity-100 scale-100');
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [slogans.length]);

  // Auth prompt modal state when unauthenticated user clicks a 3D module
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [selectedModuleTitle, setSelectedModuleTitle] = useState('');
  const [selectedSubjectTitle, setSelectedSubjectTitle] = useState('');

  // Icon lookup for subjects
  const iconMap = {
    'computer-networks': Network,
    'operating-systems': Cpu,
    'data-structures': Binary,
    'nlp': Brain,
    'dbms': Database,
    'blockchain': Boxes
  };

  // Scroll detection for floating back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler for anchor links
  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navEl = document.querySelector('nav');
      const offset = navEl ? navEl.offsetHeight + 16 : 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  // Safe navigation for curriculum modules
  const handleModuleClick = (subject, topic = null) => {
    if (user) {
      if (topic) {
        navigate(`/subjects/${subject.id}/${topic.id}`);
      } else {
        navigate(`/subjects/${subject.id}`);
      }
    } else {
      setSelectedModuleTitle(topic ? topic.title : subject.title);
      setSelectedSubjectTitle(subject.title);
      setAuthModalOpen(true);
    }
  };

  const subjectsList = Object.values(SUBJECTS_DATA);

  return (
    <div className="min-h-screen flex flex-col items-center relative overflow-x-hidden bg-transparent text-white selection:bg-neon-cyan/20 selection:text-neon-cyan">

      {/* Cosmic background particles */}
      <SpaceParticles />

      {/* Atmospheric ambient glow orbs */}
      <div className="absolute top-[-10%] left-[-15%] w-[55%] h-[55%] rounded-full bg-neon-purple/10 blur-[180px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-15%] w-[50%] h-[50%] rounded-full bg-neon-cyan/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-blue-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      {/* ================= 1. NAVBAR ================= */}
      <nav className="w-full max-w-7xl px-6 md:px-8 py-4.5 flex items-center justify-between z-40 sticky top-0 backdrop-blur-xl border-b border-white/5 bg-[#030112]/80">
        
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer group shrink-0">
          <Logo size={40} alt="LearnVerse Logo" />
          <span className="font-orbitron font-bold text-xl tracking-wider text-white leading-tight select-none">
            LEARN<span className="text-neon-cyan font-extrabold">VERSE</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-orbitron text-white/70">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-neon-cyan transition-colors cursor-pointer"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection('featured-subjects')}
            className="hover:text-neon-cyan transition-colors cursor-pointer"
          >
            EXPLORE SUBJECTS
          </button>
          <button
            onClick={() => scrollToSection('about-us')}
            className="hover:text-neon-cyan transition-colors cursor-pointer"
          >
            ABOUT US
          </button>
          <button
            onClick={() => scrollToSection('why-learnverse')}
            className="hover:text-neon-cyan transition-colors cursor-pointer"
          >
            WHY LEARNVERSE
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="hover:text-neon-cyan transition-colors cursor-pointer"
          >
            HOW IT WORKS
          </button>
        </div>

        {/* Auth Buttons / Profile */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/dashboard')}
                className="px-5 py-2.5 rounded-xl text-xs font-orbitron font-bold glow-btn-cyan text-white cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.3)] flex items-center gap-2"
              >
                <Compass className="w-4 h-4 animate-spin-slow text-neon-cyan" />
                <span>MY DASHBOARD</span>
              </button>
              <button
                onClick={() => signout()}
                title="Log Out"
                className="p-2.5 rounded-xl border border-white/10 hover:border-red-500/30 text-white/50 hover:text-red-400 bg-white/5 transition-all cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => navigate('/signin')}
                className="px-4.5 py-2 rounded-xl text-xs font-orbitron font-semibold border border-white/15 hover:border-neon-cyan/50 hover:bg-neon-cyan/10 hover:text-neon-cyan text-white transition-all cursor-pointer flex items-center gap-1.5"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>LOG IN</span>
              </button>

              <button
                onClick={() => navigate('/signup')}
                className="px-4.5 py-2 rounded-xl text-xs font-orbitron font-bold glow-btn-cyan text-white transition-all cursor-pointer flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.25)]"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>SIGN UP</span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white/80 hover:text-neon-cyan transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-[#030112]/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 border-b border-white/10 animate-fade-in">
          <div className="flex flex-col gap-5 text-sm font-orbitron">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left py-2 hover:text-neon-cyan transition-colors"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('featured-subjects')}
              className="text-left py-2 hover:text-neon-cyan transition-colors"
            >
              EXPLORE SUBJECTS
            </button>
            <button
              onClick={() => scrollToSection('about-us')}
              className="text-left py-2 hover:text-neon-cyan transition-colors"
            >
              ABOUT US
            </button>
            <button
              onClick={() => scrollToSection('why-learnverse')}
              className="text-left py-2 hover:text-neon-cyan transition-colors"
            >
              WHY LEARNVERSE
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-left py-2 hover:text-neon-cyan transition-colors"
            >
              HOW IT WORKS
            </button>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10 font-orbitron">
            {user ? (
              <>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/dashboard');
                  }}
                  className="w-full py-3.5 rounded-xl glow-btn-cyan text-white text-xs font-bold"
                >
                  Enter Dashboard
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    signout();
                  }}
                  className="w-full py-3 rounded-xl border border-red-500/30 text-red-400 text-xs"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/signin');
                  }}
                  className="w-full py-3.5 rounded-xl border border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan text-xs font-bold"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/signup');
                  }}
                  className="w-full py-3.5 rounded-xl glow-btn-cyan text-white text-xs font-bold"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ================= 2. HERO SECTION ================= */}
      <section className="w-full max-w-4xl px-8 flex flex-col items-center justify-center text-center z-10 pt-16 md:pt-24 pb-14 md:pb-20 mx-auto">

        {/* Futuristic Badge */}
        <div className="flex items-center gap-2 bg-neon-purple/10 border border-neon-purple/30 px-5 py-2 rounded-full text-neon-purple text-xs font-orbitron tracking-widest mb-8 animate-float">
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

        {/* Primary Action Button */}
        <div className="flex items-center justify-center">
          <button
            onClick={() => scrollToSection('featured-subjects')}
            className="glow-btn-cyan text-white px-10 py-4.5 rounded-2xl font-orbitron font-bold tracking-widest text-sm cursor-pointer shadow-[0_0_25px_rgba(0,240,255,0.35)] flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
          >
            <span>LET'S GET STARTED</span>
          </button>
        </div>

        {/* Scroll hint */}
        <div className="w-px h-16 bg-gradient-to-b from-neon-cyan to-transparent mt-12 animate-pulse" />

      </section>

      {/* ================= 3. FEATURED SUBJECTS (CURRICULUM) ================= */}
      <section id="featured-subjects" className="w-full max-w-7xl px-6 md:px-8 py-16 z-10 flex flex-col gap-8 scroll-mt-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="text-xs font-orbitron text-neon-cyan uppercase tracking-widest mb-1.5">
              Available Engineering Disciplines
            </div>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold tracking-wide uppercase text-white">
              Featured Subjects & Modules
            </h2>
            <p className="text-xs md:text-sm text-white/60 leading-relaxed font-sans max-w-2xl mt-1.5">
              Select any core engineering subject to explore its interactive 3D roadmaps and virtual labs. Every subject contains sequentially unlocked topics with hands-on visualizations.
            </p>
          </div>

          <button
            onClick={() => navigate('/subjects')}
            className="px-5 py-2.5 rounded-xl border border-neon-cyan/30 hover:border-neon-cyan bg-neon-cyan/5 text-neon-cyan font-orbitron text-xs font-bold flex items-center gap-2 cursor-pointer transition-all self-start md:self-auto hover:bg-neon-cyan/15"
          >
            <span>Browse Full Catalog</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectsList.map((subject) => {
            const IconComponent = iconMap[subject.id] || Network;

            return (
              <div
                key={subject.id}
                className="glass-card p-6 rounded-3xl border border-white/10 hover:border-neon-cyan/40 flex flex-col justify-between gap-6 relative group overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
              >
                {/* Subject top highlight glow */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-75 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${subject.color}, transparent)` }}
                />

                <div className="flex flex-col gap-4">
                  
                  {/* Subject Image & Title */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 overflow-hidden shrink-0 flex items-center justify-center p-0.5"
                      style={{
                        borderColor: `${subject.color}40`,
                        boxShadow: `0 0 15px ${subject.color}20`
                      }}
                    >
                      <img
                        src={subject.image}
                        alt={subject.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-neon-cyan transition-colors leading-tight truncate">
                        {subject.title}
                      </h3>
                      <span className="text-[10px] font-orbitron text-white/50 tracking-wider mt-0.5">
                        {subject.topics.length} INTERACTIVE 3D LABS
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-white/60 leading-relaxed line-clamp-2">
                    {subject.description}
                  </p>

                  {/* Featured Topics Chips */}
                  <div className="flex flex-col gap-2 pt-3 border-t border-white/5">
                    <span className="text-[9px] font-orbitron text-white/40 uppercase tracking-widest">
                      Featured Modules:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {subject.topics.slice(0, 4).map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => handleModuleClick(subject, topic)}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-sans border border-white/10 bg-white/5 hover:border-neon-cyan/40 hover:bg-neon-cyan/10 text-white/80 hover:text-white transition-all cursor-pointer flex items-center gap-1 truncate max-w-full"
                          title={topic.title}
                        >
                          <Play className="w-2.5 h-2.5 text-neon-cyan shrink-0 fill-current" />
                          <span className="truncate">{topic.shortTitle || topic.title}</span>
                        </button>
                      ))}
                      {subject.topics.length > 4 && (
                        <span className="text-[10px] font-mono text-white/40 self-center pl-1">
                          +{subject.topics.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Explore Subject Button */}
                <button
                  onClick={() => handleModuleClick(subject)}
                  className="w-full py-3 px-4 rounded-xl border border-white/10 hover:border-neon-cyan/50 bg-white/5 hover:bg-neon-cyan/15 text-white font-orbitron font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-[0_0_10px_transparent] hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                >
                  <span>Explore {subject.title}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= 4. ABOUT US SECTION ================= */}
      <section id="about-us" className="w-full max-w-7xl px-6 md:px-8 py-20 z-10 flex flex-col gap-12 scroll-mt-24">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
          <div className="text-xs font-orbitron text-neon-cyan uppercase tracking-widest">
            Our Mission & Vision
          </div>
          <h2 className="font-orbitron text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            About LearnVerse
          </h2>
          <p className="font-sans text-sm md:text-base text-white/65 leading-relaxed">
            LearnVerse was created to solve one fundamental problem in modern technical education: making difficult engineering abstractions intuitive and easy to understand.
          </p>
        </div>

        {/* Narrative Grid: Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: The Problem for Engineering Students */}
          <div className="glass-panel p-8 rounded-3xl border border-red-500/20 bg-red-500/[0.02] flex flex-col gap-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="font-orbitron font-bold text-xl text-white">
              The Challenge: Abstract 2D Textbooks
            </h3>
            <p className="font-sans text-sm text-white/70 leading-relaxed">
              Engineering students are expected to master complex, multi-layered architectures: packet encapsulation across 7 network tiers, process scheduling in multi-core CPUs, pointer mutations in dynamic trees, and concurrency schedules in database engines.
            </p>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              When taught exclusively through static textbook diagrams and dense textual descriptions, students are forced to memorize theory instead of developing real structural intuition.
            </p>
          </div>

          {/* Card 2: The LearnVerse 3D Solution */}
          <div className="glass-panel p-8 rounded-3xl border border-neon-cyan/25 bg-neon-cyan/[0.02] flex flex-col gap-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan shadow-[0_0_20px_rgba(0,240,255,0.2)]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-orbitron font-bold text-xl text-white">
              The Solution: Spatial Immersive Visualization
            </h3>
            <p className="font-sans text-sm text-white/70 leading-relaxed">
              LearnVerse transforms theoretical formulas and abstract protocols into interactive 3D WebXR environments right in the browser. Students don't just read about packets—they watch headers wrap, route across WAN clouds, and unpack at destination servers.
            </p>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              By giving students the ability to rotate models, alter parameters, observe live consequences, and hear voice explanations, difficult engineering concepts finally click.
            </p>
          </div>

        </div>

      </section>

      {/* ================= 5. WHY LEARNVERSE (ONLY WORKING FEATURES) ================= */}
      <section id="why-learnverse" className="w-full max-w-7xl px-6 md:px-8 py-16 z-10 flex flex-col gap-10 scroll-mt-24">
        
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
          <div className="text-xs font-orbitron text-neon-purple uppercase tracking-widest">
            Built for Real Academic Success
          </div>
          <h2 className="font-orbitron text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Why LearnVerse?
          </h2>
          <p className="font-sans text-sm md:text-base text-white/65 leading-relaxed">
            Every feature on LearnVerse is engineered to deepen understanding and solidify your engineering foundation.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1: 3D Simulations */}
          <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-neon-cyan/40 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
            <h3 className="font-orbitron font-bold text-base text-white">
              Interactive 3D WebXR Labs
            </h3>
            <p className="font-sans text-xs text-white/60 leading-relaxed">
              Explore 3D simulation scenes directly in your browser. Rotate viewing angles, step through algorithm timelines, and interact with hardware components without installing external software.
            </p>
          </div>

          {/* Pillar 2: Quizzes */}
          <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-neon-purple/40 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center text-neon-purple shadow-[0_0_15px_rgba(188,59,240,0.2)]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-orbitron font-bold text-base text-white">
              Verification Assessment Quizzes
            </h3>
            <p className="font-sans text-xs text-white/60 leading-relaxed">
              Every topic concludes with a focused knowledge assessment. Pass verification checks to evaluate mastery and unlock subsequent topics sequentially on the roadmap.
            </p>
          </div>

          {/* Pillar 3: Progress Tracking */}
          <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-blue-400/40 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="font-orbitron font-bold text-base text-white">
              Student Progress & Habit Tracking
            </h3>
            <p className="font-sans text-xs text-white/60 leading-relaxed">
              Track daily learning streaks, monitor completed topics per subject, review quiz scores, and view comprehensive academic metrics directly inside your student dashboard.
            </p>
          </div>

          {/* Pillar 4: AI Voice & Assistance */}
          <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-emerald-400/40 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="font-orbitron font-bold text-base text-white">
              AI-Assisted Learning & Voice
            </h3>
            <p className="font-sans text-xs text-white/60 leading-relaxed">
              Listen to step-by-step spoken explanations with real-time subtitles via the AI Teacher voice guide, and ask clarifying questions anytime using the integrated LearnVerse AI Tutor assistant.
            </p>
          </div>

        </div>

      </section>

      {/* ================= 6. HOW IT WORKS ================= */}
      <section id="how-it-works" className="w-full max-w-7xl px-6 md:px-8 py-20 z-10 flex flex-col gap-12 scroll-mt-24">
        
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
          <div className="text-xs font-orbitron text-neon-cyan uppercase tracking-widest">
            Simple 5-Step Process
          </div>
          <h2 className="font-orbitron text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            How It Works
          </h2>
          <p className="font-sans text-sm md:text-base text-white/65 leading-relaxed">
            Follow a structured, self-paced learning journey from basic fundamentals to deep engineering mastery.
          </p>
        </div>

        {/* 5 Sequential Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          
          {/* Step 1 */}
          <div className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col gap-3 relative group">
            <span className="w-8 h-8 rounded-xl bg-neon-cyan/15 border border-neon-cyan/40 text-neon-cyan font-orbitron font-bold text-xs flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.2)]">
              01
            </span>
            <h4 className="font-orbitron font-bold text-sm text-white mt-1">
              Sign Up
            </h4>
            <p className="font-sans text-xs text-white/60 leading-relaxed">
              Create a free student account in seconds to begin saving study progress and streak milestones.
            </p>
          </div>

          {/* Step 2 */}
          <div className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col gap-3 relative group">
            <span className="w-8 h-8 rounded-xl bg-neon-purple/15 border border-neon-purple/40 text-neon-purple font-orbitron font-bold text-xs flex items-center justify-center shadow-[0_0_10px_rgba(188,59,240,0.2)]">
              02
            </span>
            <h4 className="font-orbitron font-bold text-sm text-white mt-1">
              Select Subject
            </h4>
            <p className="font-sans text-xs text-white/60 leading-relaxed">
              Choose from Computer Networks, Operating Systems, Data Structures, DBMS, or NLP.
            </p>
          </div>

          {/* Step 3 */}
          <div className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col gap-3 relative group">
            <span className="w-8 h-8 rounded-xl bg-blue-500/15 border border-blue-500/40 text-blue-400 font-orbitron font-bold text-xs flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.2)]">
              03
            </span>
            <h4 className="font-orbitron font-bold text-sm text-white mt-1">
              Explore 3D Labs
            </h4>
            <p className="font-sans text-xs text-white/60 leading-relaxed">
              Step into interactive 3D simulation modules. Rotate views, examine structures, and tweak parameters.
            </p>
          </div>

          {/* Step 4 */}
          <div className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col gap-3 relative group">
            <span className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-orbitron font-bold text-xs flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.2)]">
              04
            </span>
            <h4 className="font-orbitron font-bold text-sm text-white mt-1">
              Learn from Voice
            </h4>
            <p className="font-sans text-xs text-white/60 leading-relaxed">
              Click Start Learning to hear the teacher guide explain concepts with synchronized subtitles.
            </p>
          </div>

          {/* Step 5 */}
          <div className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col gap-3 relative group">
            <span className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 font-orbitron font-bold text-xs flex items-center justify-center shadow-[0_0_10px_rgba(245,158,11,0.2)]">
              05
            </span>
            <h4 className="font-orbitron font-bold text-sm text-white mt-1">
              Verify with Quiz
            </h4>
            <p className="font-sans text-xs text-white/60 leading-relaxed">
              Complete the verification check quiz to reinforce knowledge and unlock upcoming topics.
            </p>
          </div>

        </div>

      </section>

      {/* ================= 7. CALL TO ACTION BANNER ================= */}
      <section className="w-full max-w-7xl px-6 md:px-8 py-10 z-10">
        <div className="w-full p-8 md:p-12 rounded-3xl glass-card border border-neon-cyan/25 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_40px_rgba(0,240,255,0.12)]">
          
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-neon-purple/5 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />

          <div className="flex flex-col gap-3 text-center md:text-left relative z-10 max-w-xl">
            <span className="text-xs font-orbitron text-neon-cyan font-bold tracking-widest uppercase">
              Ready to Transform Your Learning?
            </span>
            <h3 className="font-orbitron text-2xl md:text-3xl font-black text-white uppercase">
              Step Into The LearnVerse 3D Spatial Lab
            </h3>
            <p className="font-sans text-xs md:text-sm text-white/70 leading-relaxed">
              Join students mastering engineering concepts faster through visual interactive WebXR models.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 relative z-10 shrink-0">
            <button
              onClick={() => navigate(user ? '/dashboard' : '/signup')}
              className="glow-btn-cyan text-white px-8 py-3.5 rounded-xl font-orbitron font-bold text-xs uppercase tracking-wider cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:scale-105"
            >
              <span>{user ? 'Go to Dashboard' : 'Create Free Account'}</span>
            </button>
            <button
              onClick={() => scrollToSection('featured-subjects')}
              className="px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-orbitron font-bold text-xs uppercase tracking-wider cursor-pointer transition-all"
            >
              <span>Browse Subjects</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= 8. FOOTER ================= */}
      <footer className="w-full max-w-7xl px-6 md:px-8 pt-16 pb-12 border-t border-white/10 flex flex-col gap-12 z-10 mt-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Logo size={36} alt="LearnVerse Logo" />
              <span className="font-orbitron font-bold text-lg tracking-wider text-white select-none">
                LEARN<span className="text-neon-cyan font-extrabold">VERSE</span>
              </span>
            </div>

            <p className="font-sans text-xs text-white/55 leading-relaxed max-w-sm">
              LearnVerse is an interactive WebXR educational platform that visualizes abstract Computer Science and Engineering concepts through spatial 3D simulations, voice guides, and interactive verification quizzes.
            </p>

            <span className="text-[10px] font-orbitron text-neon-cyan/70 tracking-widest uppercase mt-2">
              Learn Beyond the Screen.
            </span>
          </div>

          {/* Column 2: Available Subjects */}
          <div className="flex flex-col gap-3">
            <h4 className="font-orbitron font-bold text-xs text-white uppercase tracking-wider">
              Subjects
            </h4>
            <div className="flex flex-col gap-2 text-xs font-sans text-white/60">
              {subjectsList.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => handleModuleClick(sub)}
                  className="text-left hover:text-neon-cyan transition-colors cursor-pointer truncate"
                >
                  {sub.title}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="font-orbitron font-bold text-xs text-white uppercase tracking-wider">
              Navigation
            </h4>
            <div className="flex flex-col gap-2 text-xs font-sans text-white/60">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-left hover:text-neon-cyan transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('featured-subjects')}
                className="text-left hover:text-neon-cyan transition-colors cursor-pointer"
              >
                Explore Subjects
              </button>
              <button
                onClick={() => scrollToSection('about-us')}
                className="text-left hover:text-neon-cyan transition-colors cursor-pointer"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('why-learnverse')}
                className="text-left hover:text-neon-cyan transition-colors cursor-pointer"
              >
                Why LearnVerse
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-left hover:text-neon-cyan transition-colors cursor-pointer"
              >
                How It Works
              </button>
            </div>
          </div>

          {/* Column 4: Account & Portal */}
          <div className="flex flex-col gap-3">
            <h4 className="font-orbitron font-bold text-xs text-white uppercase tracking-wider">
              Student Portal
            </h4>
            <div className="flex flex-col gap-2 text-xs font-sans text-white/60">
              {user ? (
                <>
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="text-left hover:text-neon-cyan transition-colors cursor-pointer"
                  >
                    My Analytics Dashboard
                  </button>
                  <button
                    onClick={() => navigate('/subjects')}
                    className="text-left hover:text-neon-cyan transition-colors cursor-pointer"
                  >
                    Curriculum Roadmaps
                  </button>
                  <button
                    onClick={() => signout()}
                    className="text-left text-red-400/80 hover:text-red-400 transition-colors cursor-pointer"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate('/signin')}
                    className="text-left hover:text-neon-cyan transition-colors cursor-pointer"
                  >
                    Sign In / Log In
                  </button>
                  <button
                    onClick={() => navigate('/signup')}
                    className="text-left hover:text-neon-cyan transition-colors cursor-pointer"
                  >
                    Create Free Account
                  </button>
                </>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Tech Stack */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-orbitron text-white/40">
          <span>© 2026 LEARNVERSE. ALL RIGHTS RESERVED.</span>
          <span className="text-[10px] tracking-widest text-white/30">
            WEBXR SPATIAL VISUALIZATION PLATFORM
          </span>
        </div>

      </footer>

      {/* POP-UP MODAL: "First sign in then you may continue using the modules" */}
      <SignInRequiredModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        moduleTitle={selectedModuleTitle}
        subjectTitle={selectedSubjectTitle}
      />

      {/* FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 px-3.5 py-2.5 rounded-2xl bg-[#09071f]/90 border border-neon-cyan/40 hover:border-neon-cyan text-neon-cyan shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 font-orbitron text-xs font-bold cursor-pointer backdrop-blur-md animate-fade-in"
          title="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="hidden sm:inline text-[11px] tracking-wider">TOP</span>
        </button>
      )}

    </div>
  );
}
