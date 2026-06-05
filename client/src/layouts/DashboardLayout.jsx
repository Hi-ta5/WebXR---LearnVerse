import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, BookOpen, LogOut, Menu, X, Flame, Sparkles } from 'lucide-react';
import SpaceParticles from '../components/common/SpaceParticles';

export default function DashboardLayout({ children }) {
  const { user, progress, signout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.3)] bg-white/5 border border-white/10">
            <img src="/logo.jpg" alt="LV" className="w-full h-full object-cover" />
          </div>
          <span className="font-orbitron font-bold text-md tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            LEARN<span className="text-neon-cyan font-extrabold">VERSE</span>
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {currentStreak > 0 && (
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
            {navItems.map((item) => {
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
            })}
          </nav>

          <div className="flex flex-col gap-6">
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
          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex flex-col justify-between w-64 glass-panel border-r border-white/5 h-screen fixed left-0 top-0 bottom-0 p-6 z-20">
        <div className="flex flex-col gap-8">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-3 py-2">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)] bg-white/5 border border-white/10">
              <img src="/logo.jpg" alt="LV" className="w-full h-full object-cover" />
            </div>
            <span className="font-orbitron font-bold text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
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

        {/* User Card & Logout */}
        <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
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
        </div>
      </aside>

      {/* DASHBOARD WORKSPACE AREA */}
      <main className="flex-1 min-h-0 flex flex-col md:pl-64">
        {/* TOP METRIC BAR (Desktop only) */}
        <header className="hidden md:flex items-center justify-between px-8 py-4 border-b border-white/5 glass-panel sticky top-0 z-10 backdrop-blur-lg">
          <div className="flex items-center gap-2 text-white/50 text-xs">

          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-[10px] text-white/40 block">STUDENT PROFILE</span>
              <span className="text-xs font-medium text-neon-cyan">{user?.name}</span>
            </div>
            <div className="w-[1px] h-6 bg-white/10" />
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-orbitron font-bold text-white">
              {user?.name ? user.name[0].toUpperCase() : 'U'}
            </div>
          </div>
        </header>

        {/* WORKSPACE CONTENT */}
        <section className="flex-1 p-6 md:p-8 overflow-y-auto max-w-7xl w-full mx-auto">
          {children}
        </section>
      </main>
    </div>
  );
}
