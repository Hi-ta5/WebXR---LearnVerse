import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  // Validate session on app initialization
  useEffect(() => {
    const initializeAuth = async () => {
      const savedToken = localStorage.getItem('token') || sessionStorage.getItem('token');
      
      if (!savedToken) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/auth/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${savedToken}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const userData = await response.json();
          setToken(savedToken);
          setUser(userData);
          
          // Fetch student progress automatically
          await fetchProgressData(savedToken);
        } else {
          // Token expired or invalid, purge
          localStorage.removeItem('token');
          sessionStorage.removeItem('token');
        }
      } catch (err) {
        console.error('Session validation error:', err);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const fetchProgressData = async (activeToken) => {
    try {
      const response = await fetch('/api/progress', {
        headers: { 'Authorization': `Bearer ${activeToken}` }
      });
      if (response.ok) {
        const progressData = await response.json();
        setProgress(progressData);
      }
    } catch (err) {
      console.error('Error fetching progress:', err);
    }
  };

  const signup = async (name, email, password) => {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Registration failed');
    }

    // Default to sessionStorage (cleared on tab close)
    sessionStorage.setItem('token', data.token);
    setToken(data.token);
    setUser(data.user);
    setProgress(data.progress || { streak: 0, completedTopics: {}, activities: [] });
    
    // Fetch newly initialized progress
    await fetchProgressData(data.token);
    
    return data.user;
  };

  const signin = async (email, password, rememberMe) => {
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, rememberMe })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Authentication failed');
    }

    if (rememberMe) {
      localStorage.setItem('token', data.token);
    } else {
      sessionStorage.setItem('token', data.token);
    }

    setToken(data.token);
    setUser(data.user);
    
    // Fetch progress
    await fetchProgressData(data.token);
    
    return data.user;
  };

  const signout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setProgress(null);
  };

  // Complete a topic on the curriculum roadmap
  const completeTopicNode = async (subjectId, topicId, topicTitle) => {
    if (!token) return;

    try {
      const response = await fetch('/api/progress/complete', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subjectId, topicId, topicTitle })
      });

      if (response.ok) {
        const data = await response.json();
        setProgress(data.progress);
        return data.progress;
      } else {
        const errData = await response.json();
        console.error('Failed to register node complete:', errData.error);
      }
    } catch (err) {
      console.error('Network error during topic completion:', err);
    }
  };

  const value = {
    user,
    token,
    progress,
    loading,
    signup,
    signin,
    signout,
    fetchProgress: () => fetchProgressData(token),
    completeTopicNode
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be nested within an AuthProvider');
  }
  return context;
}
