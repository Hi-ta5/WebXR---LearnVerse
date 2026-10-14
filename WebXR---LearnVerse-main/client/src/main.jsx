import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

// Redirect 127.0.0.1 to localhost for Firebase Authorized Domains compatibility
if (typeof window !== 'undefined' && window.location.hostname === '127.0.0.1') {
  window.location.hostname = 'localhost';
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
