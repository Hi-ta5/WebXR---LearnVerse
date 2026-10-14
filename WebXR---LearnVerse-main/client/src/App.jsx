import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import AnalyticsTracker from './components/common/AnalyticsTracker';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AnalyticsTracker />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
