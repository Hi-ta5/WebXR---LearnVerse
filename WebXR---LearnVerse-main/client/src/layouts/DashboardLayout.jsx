import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, BookOpen, LogOut, Menu, X, Flame, Sparkles, ChevronLeft } from 'lucide-react';
import SpaceParticles from '../components/common/SpaceParticles';
import AITutor from '../components/webxr/AITutor';
import Logo from '../components/common/Logo';
import { SUBJECTS_DATA } from '../data/subjectConfig';

export default function DashboardLayout({ children }) {
  const { user, progress, signout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Instantly stop and clean up any ongoing speech synthesis on route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, [location.pathname]);

  // Check if we are inside an active 3D WebXR simulation module
  // Matches /subjects/:subjectId/:topicId but not /quiz
  const isModuleScene = /^\/subjects\/[^/]+\/[^/]+/.test(location.pathname) && !location.pathname.endsWith('/quiz');

  // Extract subjectId if present
  const pathParts = location.pathname.split('/').filter(Boolean);
  const subjectIdFromPath = pathParts[0] === 'subjects' ? pathParts[1] : null;
  const currentSubjectMeta = subjectIdFromPath ? SUBJECTS_DATA[subjectIdFromPath] : null;

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Subjects', path: '/subjects', icon: BookOpen }
  ];

  const handleLogout = () => {
    signout();
    navigate('/');
  };

  const currentStreak = progress?.streak || 0;

  return (
    <div className="min-h-screen text-white flex flex-col md:flex-row relative">

      {/* Cosmic background starfield and slow-drifting nebulas */}
      <SpaceParticles />

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      {/* MOBILE HEADER */}
      <header className="md:hidden flex items-center justify-between px-6 py-4 glass-panel border-b border-white/5 z-40 sticky top-0">
        <Link to={user ? "/dashboard" : "/"} className="flex items-center gap-2.5 shrink-0">
          <Logo size={36} alt="LearnVerse Logo" />
          <span className="font-orbitron font-bold text-md tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 select-none">
            LEARN<span className="text-neon-cyan font-extrabold">VERSE</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {isModuleScene && subjectIdFromPath && (
            <button
              onClick={() => navigate(`/subjects/${subjectIdFromPath}`)}
              className="text-[10px] font-orbitron px-2.5 py-1 rounded-lg border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Roadmap</span>
            </button>
          )}

          {currentStreak > 0 && user && (
            <div className="flex items-center gap-1 bg-orange-500/10 border border-orange-500/30 px-2 py-0.5 rounded-full text-orange-400 text-xs font-orbitron animate-pulse">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>{currentStreak}d</span>
            </div>
          )}

          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white hover:text-neon-cyan transition-colors">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-space-black/90 backdrop-blur-lg flex flex-col justify-between p-8 pt-24 border-r border-white/5 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {/* If in module scene, give direct Roadmap & Subjects link (no confusing Dashboard link) */}
            {isModuleScene && subjectIdFromPath ? (
              <>
                <Link
                  to={`/subjects/${subjectIdFromPath}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl font-orbitron transition-all border border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Subject Roadmap</span>
                </Link>
                <Link
                  to="/subjects"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl font-orbitron transition-all border border-transparent text-white/70 hover:text-white hover:bg-white/5"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>All Subjects</span>
                </Link>
              </>
            ) : (
              navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname.startsWith(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-4 px-5 py-4 rounded-xl font-orbitron transition-all border ${isActive
                        ? 'bg-neon-cyan/10 border-neon-cyan/40 text-neon-cyan shadow-[0_0_15px_rgba(0,240,255,0.08)]'
                        : 'border-transparent text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })
            )}
          </nav>

          <div className="flex flex-col gap-6">
            {user ? (
              <>
                <div className="flex items-center gap-3 p-4 glass-card rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-neon-purple to-neon-cyan flex items-center justify-center font-orbitron font-bold text-md text-white">
                    {user?.name ? user.name[0].toUpperCase() : 'U'}
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-semibold text-sm truncate">{user?.name}</p>
                    <p className="text-xs text-white/40 truncate">{user?.email}</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setMobileOpen(false);
                    handleLogout();
                  }}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors font-orbitron"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Log Out</span>
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    navigate('/signin');
                  }}
                  className="w-full py-3.5 rounded-xl border border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan font-orbitron text-xs font-bold"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    navigate('/signup');
                  }}
                  className="w-full py-3.5 rounded-xl glow-btn-cyan text-white font-orbitron text-xs font-bold"
                >
                  Create Account
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR — ONLY shown outside of WebXR module view so 3D scenes get full width & no "Dashboard" confusion */}
      {!isModuleScene && (
        <aside className="hidden md:flex flex-col justify-between w-64 glass-panel border-r border-white/5 h-screen fixed left-0 top-0 bottom-0 p-6 z-20">
          <div className="flex flex-col gap-8">
            {/* Logo */}
            <Link to={user ? "/dashboard" : "/"} className="flex items-center gap-3 py-2 shrink-0">
              <Logo size={40} alt="LearnVerse Logo" />
              <span className="font-orbitron font-bold text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 select-none">
                LEARN<span className="text-neon-cyan font-extrabold">VERSE</span>
              </span>
            </Link>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname.startsWith(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-orbitron text-sm transition-all border ${isActive
                        ? 'bg-gradient-to-r from-neon-cyan/15 to-transparent border-l-2 border-l-neon-cyan border-y-transparent border-r-transparent text-neon-cyan shadow-[0_0_15px_rgba(0,240,255,0.05)]'
                        : 'border-transparent text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* User Card & Logout / Login */}
          <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
            {user ? (
              <>
                {currentStreak > 0 && (
                  <div className="flex items-center justify-between bg-orange-500/10 border border-orange-500/20 px-3 py-2 rounded-lg text-orange-400 text-xs font-orbitron">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Flame className="w-4 h-4 fill-current animate-bounce" />
                      Streak
                    </span>
                    <span className="font-bold">{currentStreak} Days</span>
                  </div>
                )}

                <div className="flex items-center gap-3 p-2 rounded-lg">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-neon-purple to-neon-cyan flex items-center justify-center font-orbitron font-bold text-sm text-white">
                    {user?.name ? user.name[0].toUpperCase() : 'U'}
                  </div>
                  <div className="overflow-hidden flex-1">
                    <p className="font-semibold text-xs truncate leading-tight">{user?.name}</p>
                    <p className="text-[10px] text-white/40 truncate leading-none mt-1">{user?.email}</p>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg border border-red-500/20 text-red-400 hover:bg-red-500/10 transition-colors font-orbitron text-xs justify-center cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log Out</span>
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => navigate('/signin')}
                  className="w-full py-2.5 rounded-lg border border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan font-orbitron text-xs font-bold hover:bg-neon-cyan/20 transition-all cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="w-full py-2.5 rounded-lg glow-btn-cyan text-white font-orbitron text-xs font-bold cursor-pointer"
                >
                  Create Account
                </button>
              </div>
            )}
          </div>
        </aside>
      )}

      {/* DASHBOARD & MODULE WORKSPACE AREA */}
      <main className={`flex-1 min-h-0 flex flex-col ${isModuleScene ? 'md:pl-0' : 'md:pl-64'}`}>

        {/* TOP BAR */}
        <header className="hidden md:flex items-center justify-between px-8 py-4 border-b border-white/5 glass-panel sticky top-0 z-10 backdrop-blur-lg">
          {/* Left section of header */}
          <div className="flex items-center gap-4">
            {isModuleScene && (
              <div className="flex items-center gap-4">
                <Link to={user ? "/dashboard" : "/"} className="flex items-center gap-2.5 mr-2 shrink-0">
                  <Logo size={36} alt="LearnVerse Logo" />
                  <span className="font-orbitron font-bold text-sm tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 select-none">
                    LEARN<span className="text-neon-cyan font-extrabold">VERSE</span>
                  </span>
                </Link>

                <div className="w-px h-5 bg-white/10" />

                {subjectIdFromPath && (
                  <button
                    onClick={() => navigate(`/subjects/${subjectIdFromPath}`)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neon-cyan/30 bg-neon-cyan/5 hover:bg-neon-cyan/15 text-neon-cyan font-orbitron text-xs transition-all cursor-pointer shadow-[0_0_10px_rgba(0,240,255,0.1)]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back to {currentSubjectMeta?.title || 'Roadmap'}</span>
                  </button>
                )}

                <Link
                  to="/subjects"
                  className="text-xs text-white/50 hover:text-white font-orbitron uppercase tracking-wider transition-colors flex items-center gap-1 ml-2"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>All Subjects</span>
                </Link>
              </div>
            )}
          </div>

          {/* Right section of header: Profile or Login */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <div className="text-right">
                  <span className="text-[10px] text-white/40 block">STUDENT PROFILE</span>
                  <span className="text-xs font-medium text-neon-cyan">{user?.name}</span>
                </div>
                <div className="w-[1px] h-6 bg-white/10" />
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-orbitron font-bold text-white shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                  {user?.name ? user.name[0].toUpperCase() : 'U'}
                </div>
                <button
                  onClick={handleLogout}
                  title="Log Out"
                  className="p-1.5 rounded-lg border border-white/5 hover:border-red-500/30 hover:bg-red-500/10 text-white/40 hover:text-red-400 transition-all cursor-pointer ml-1"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate('/signin')}
                  className="px-4 py-1.5 rounded-lg border border-neon-cyan/40 bg-neon-cyan/10 hover:bg-neon-cyan/20 text-neon-cyan text-xs font-orbitron font-bold transition-all cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="px-4 py-1.5 rounded-lg glow-btn-cyan text-white text-xs font-orbitron font-bold cursor-pointer"
                >
                  Create Account
                </button>
              </div>
            )}
          </div>
        </header>

        {/* WORKSPACE CONTENT */}
        <section className={`flex-1 p-6 md:p-8 overflow-y-auto ${isModuleScene ? 'w-full max-w-full' : 'max-w-7xl mx-auto w-full'}`}>
          {children}
        </section>
      </main>

      {/* Render AI Tutor strictly outside assessment/quiz routes */}
      {!location.pathname.includes('/quiz') && <AITutor />}
    </div>
  );
}
