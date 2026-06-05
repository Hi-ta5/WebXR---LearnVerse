import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SpaceParticles from '../components/common/SpaceParticles';
import { Eye, EyeOff, Lock, Mail, ArrowRight, ShieldAlert } from 'lucide-react';

export default function SignIn() {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Baseline validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all standard fields.');
      return;
    }

    setSubmitting(true);

    try {
      await signin(formData.email, formData.password, formData.rememberMe);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Authentication failed. Please verify credentials.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-6 relative overflow-hidden">

      {/* Background Star field */}
      <SpaceParticles />

      {/* Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md z-10">

        {/* LOGO LINK */}
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)] bg-white/5 border border-white/10">
              <img src="/logo.jpg" alt="LV" className="w-full h-full object-cover" />
            </div>
            <span className="font-orbitron font-bold text-2xl tracking-wider text-white">
              LEARN<span className="text-neon-cyan font-extrabold">VERSE</span>
            </span>
          </Link>
          <p className="text-white/40 text-xs font-orbitron tracking-widest uppercase">LOGIN</p>
        </div>

        {/* GLASS CARD FORM */}
        <div className="glass-panel p-8 rounded-2xl border border-white/5 shadow-2xl">

          <h2 className="font-orbitron text-xl font-semibold text-white mb-6 text-center tracking-wide">
            WELCOME BACK!     </h2>

          {error && (
            <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-red-400 text-xs mb-6 animate-pulse">
              <ShieldAlert className="w-4.5 h-4.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* EMAIL FIELD */}
            <div className="flex flex-col gap-1.5">
              <label className="text-white/60 text-xs font-orbitron uppercase tracking-wider">Email</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all font-sans text-white"
                />
              </div>
            </div>

            {/* PASSWORD FIELD */}
            <div className="flex flex-col gap-1.5">
              <label className="text-white/60 text-xs font-orbitron uppercase tracking-wider">Security Password</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                  <Lock className="w-4 h-4" />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-11 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all font-sans text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-neon-cyan transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* REMEMBER ME */}
            <div className="flex items-center justify-between text-xs font-poppins text-white/50 mt-1">
              <label className="flex items-center gap-2 select-none cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-white/10 bg-white/5 text-neon-cyan focus:ring-0 accent-neon-cyan cursor-pointer"
                />
                <span>Remember Me</span>
              </label>

            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={submitting}
              className="glow-btn-cyan text-white py-3.5 rounded-xl font-orbitron font-bold tracking-widest text-xs mt-3 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>{submitting ? 'VALIDATING SESSION...' : 'AUTHORIZE ACCESS'}</span>
              {!submitting && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          {/* DOCK FOOTER */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-white/40">
            <span>No registration? </span>
            <Link to="/signup" className="text-neon-cyan font-bold hover:underline">
              Create an account
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
