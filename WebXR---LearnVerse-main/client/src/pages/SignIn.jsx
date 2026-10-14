import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SpaceParticles from '../components/common/SpaceParticles';
import Logo from '../components/common/Logo';
import { Eye, EyeOff, Lock, Mail, ArrowRight, ShieldAlert } from 'lucide-react';
import { trackEvent } from '../firebase';

export default function SignIn() {
  const { signin, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [googleSubmitting, setGoogleSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
      await signin(formData.email, formData.password);
      trackEvent('login', { method: 'password' });
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Authentication failed. Please verify credentials.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setGoogleSubmitting(true);
    try {
      await signInWithGoogle();
      trackEvent('login', { method: 'google' });
      navigate('/dashboard');
    } catch (err) {
      if (err.code === 'auth/popup-closed-by-user') {
        setError('Google sign-in popup was closed.');
      } else if (err.code === 'auth/unauthorized-domain') {
        setError(`Domain '${window.location.hostname}' is not authorized in Firebase. Please open http://localhost:3000, or add '${window.location.hostname}' to Firebase Console -> Authentication -> Settings -> Authorized domains.`);
      } else {
        setError(err.message || 'Google authentication failed. Please try again.');
      }
    } finally {
      setGoogleSubmitting(false);
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
          <Link to="/" className="flex items-center gap-3 mb-2 shrink-0">
            <Logo size={42} alt="LearnVerse Logo" />
            <span className="font-orbitron font-bold text-2xl tracking-wider text-white select-none">
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

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={submitting || googleSubmitting}
              className="glow-btn-cyan text-white py-3.5 rounded-xl font-orbitron font-bold tracking-widest text-xs mt-3 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>{submitting ? 'VALIDATING SESSION...' : 'AUTHORIZE ACCESS'}</span>
              {!submitting && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          {/* OR DIVIDER */}
          <div className="relative flex items-center justify-center my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <span className="relative px-3 bg-[#08051a] text-[10px] font-orbitron text-white/40 uppercase tracking-widest">
              OR CONTINUE WITH
            </span>
          </div>

          {/* GOOGLE SIGN IN BUTTON */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={submitting || googleSubmitting}
            className="w-full py-3.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-orbitron font-bold text-xs tracking-wider flex items-center justify-center gap-3 cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] disabled:opacity-50"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>{googleSubmitting ? 'CONNECTING GOOGLE...' : 'SIGN IN WITH GOOGLE'}</span>
          </button>

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
