import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Pages
import LandingPage from '../pages/LandingPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import DashboardPage from '../pages/DashboardPage';
import SubjectsPage from '../pages/SubjectsPage';
import TopicRoadmap from '../pages/TopicRoadmap';
import WebXRModule from '../pages/WebXRModule';
import QuizPage from '../pages/QuizPage';

// Layout
import DashboardLayout from '../layouts/DashboardLayout';

// Guard for routes that strictly require an authenticated student account (e.g. personal analytics dashboard)
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#02000a] flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-2 border-neon-cyan/20 border-t-neon-cyan animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-orbitron text-neon-cyan tracking-widest animate-pulse">LV</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

// Guard for authentication routes (Sign In / Sign Up) - Redirect to Dashboard if already logged in
function AuthRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Auth Gates */}
      <Route path="/signin" element={<AuthRoute><SignIn /></AuthRoute>} />
      <Route path="/signup" element={<AuthRoute><SignUp /></AuthRoute>} />

      {/* Curriculum directory & roadmaps (Publicly visible to preview and browse) */}
      <Route path="/subjects" element={<DashboardLayout><SubjectsPage /></DashboardLayout>} />
      <Route path="/subjects/:subjectId" element={<DashboardLayout><TopicRoadmap /></DashboardLayout>} />

      {/* Interactive WebXR Simulation Module (Prompts with Sign In modal if unauthenticated) */}
      <Route path="/subjects/:subjectId/:topicId" element={<DashboardLayout><WebXRModule /></DashboardLayout>} />

      {/* Dedicated Assessment Quiz Page */}
      <Route path="/subjects/:subjectId/:topicId/quiz" element={<ProtectedRoute><DashboardLayout><QuizPage /></DashboardLayout></ProtectedRoute>} />

      {/* Protected Student Academic Analytics Dashboard */}
      <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout><DashboardPage /></DashboardLayout></ProtectedRoute>} />

      {/* Cyber blackhole redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
