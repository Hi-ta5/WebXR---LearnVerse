import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SpaceParticles from '../components/common/SpaceParticles';
import { Eye, EyeOff, Lock, Mail, User, ArrowRight, ShieldAlert } from 'lucide-react';

export default function SignUp() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please provide all system registration details.');
      return false;
    }

    if (formData.name.trim().length < 2) {
      setError('Name must be at least 2 characters.');
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid stellar email address.');
      return false;
    }

    if (formData.password.length < 6) {
      setError('Password must contain at least 6 core symbols.');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords mismatch. Retype coordinates.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    setSubmitting(true);

    try {
      await signup(formData.name, formData.email, formData.password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'System signup failure. Account could already exist.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-6 relative overflow-hidden">

      {/* Star Field background */}
      <SpaceParticles />

      {/* Cyber Grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md z-10 my-8">

        {/* LOGO LINK */}
        <div className="flex flex-col items-center mb-6">
          <Link to="/" className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)] bg-white/5 border border-white/10">
              <img src="/logo.jpg" alt="LV" className="w-full h-full object-cover" />
            </div>
            <span className="font-orbitron font-bold text-2xl tracking-wider text-white">
              LEARN<span className="text-neon-cyan font-extrabold">VERSE</span>
            </span>
          </Link>
          <p className="text-white/40 text-xs font-orbitron tracking-widest uppercase">REGISTRATION</p>
        </div>

        {/* GLASS CARD FORM */}
        <div className="glass-panel p-8 rounded-2xl border border-white/5 shadow-2xl">

          <h2 className="font-orbitron text-xl font-semibold text-white mb-6 text-center tracking-wide">
            REGISTER
          </h2>

          {error && (
            <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-red-400 text-xs mb-6 animate-pulse">
              <ShieldAlert className="w-4.5 h-4.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* FULL NAME */}
            <div className="flex flex-col gap-1">
              <label className="text-white/60 text-xs font-orbitron uppercase tracking-wider">Full Name</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                  <User className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-neon-purple/50 focus:bg-white/10 transition-all font-sans text-white"
                />
              </div>
            </div>

            {/* EMAIL coordinates */}
            <div className="flex flex-col gap-1">
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
                  className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-neon-purple/50 focus:bg-white/10 transition-all font-sans text-white"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col gap-1">
              <label className="text-white/60 text-xs font-orbitron uppercase tracking-wider">Password</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                  <Lock className="w-4 h-4" />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="•••••••• (6+ characters)"
                  className="w-full pl-11 pr-11 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-neon-purple/50 focus:bg-white/10 transition-all font-sans text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-neon-purple transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="flex flex-col gap-1">
              <label className="text-white/60 text-xs font-orbitron uppercase tracking-wider">Re-verify Password</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                  <Lock className="w-4 h-4" />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-neon-purple/50 focus:bg-white/10 transition-all font-sans text-white"
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={submitting}
              className="glow-btn-purple text-white py-3 rounded-xl font-orbitron font-bold tracking-widest text-xs mt-3 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>{submitting ? 'PROCESSING SIGNAL...' : 'INITIALIZE'}</span>
              {!submitting && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          {/* DOCK FOOTER */}
          <div className="mt-6 pt-5 border-t border-white/5 text-center text-xs text-white/40">
            <span>Already registered? </span>
            <Link to="/signin" className="text-neon-purple font-bold hover:underline">
              Log in here
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
