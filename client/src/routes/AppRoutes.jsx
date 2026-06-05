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

// Layout
import DashboardLayout from '../layouts/DashboardLayout';

// Guard for routes that require an authenticated user
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

      {/* Protected Academic Dashboard Cluster */}
      <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout><DashboardPage /></DashboardLayout></ProtectedRoute>} />
      <Route path="/subjects" element={<ProtectedRoute><DashboardLayout><SubjectsPage /></DashboardLayout></ProtectedRoute>} />
      <Route path="/subjects/:subjectId" element={<ProtectedRoute><DashboardLayout><TopicRoadmap /></DashboardLayout></ProtectedRoute>} />
      <Route path="/subjects/:subjectId/:topicId" element={<ProtectedRoute><DashboardLayout><WebXRModule /></DashboardLayout></ProtectedRoute>} />

      {/* Cyber blackhole redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
