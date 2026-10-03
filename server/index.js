import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import progressRoutes from './routes/progressRoutes.js';
import chatbotRoutes from "./routes/chatbotRoutes.js";

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend cross-origin requests
const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:5174',
  'http://localhost:4173',
];

if (process.env.CLIENT_URL) {
  ALLOWED_ORIGINS.push(process.env.CLIENT_URL);
}

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
    // Allow any localhost or LAN IP address (192.168.x.x, 10.x.x.x, 172.16-31.x.x)
    if (/^http:\/\/(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+|172\.(1[6-9]|2\d|3[01])\.\d+\.\d+)(:\d+)?$/.test(origin)) {
      return callback(null, true);
    }
    // Allow all origins in non-production development environments
    if (process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    callback(new Error('CORS: Origin not allowed — ' + origin));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Parsing body JSON payloads
app.use(express.json());

// Request logger for debugging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// API Route mounts
app.use("/api/chatbot", chatbotRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/progress', progressRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    message: 'LearnVerse Galactic API Engine running.',
    timestamp: new Date().toISOString(),
    geminiKeyLoaded: !!process.env.GEMINI_API_KEY && !process.env.GEMINI_API_KEY.startsWith('your_new_api_key_here')
  });
});

// 404 Route handler
app.use((req, res, next) => {
  res.status(404).json({ error: `Endpoint not found: ${req.method} ${req.path}` });
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({ error: 'Critical failure in the core server engine.' });
});

// Bind port and startup — with EADDRINUSE guard
const server = app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 LearnVerse API Engine operational on port: ${PORT}`);
  console.log(`🤖 Gemini Key Status: ${process.env.GEMINI_API_KEY && !process.env.GEMINI_API_KEY.startsWith('your_new_api_key_here') ? '✅ Loaded' : '❌ Missing or placeholder'}`);
  console.log(`====================================================`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌ Port ${PORT} is already in use!`);
    console.error(`   Run this command to free the port and restart:`);
    console.error(`   npx kill-port ${PORT}\n`);
    process.exit(1); // Exit cleanly instead of crashing/looping
  } else {
    console.error('Server error:', err);
    process.exit(1);
  }
});

// Graceful shutdown handlers — prevents zombie node processes
const gracefulShutdown = (signal) => {
  console.log(`\n[${signal}] Graceful shutdown initiated...`);
  server.close(() => {
    console.log('✅ Server closed cleanly.');
    process.exit(0);
  });
  // Force exit if shutdown hangs after 5s
  setTimeout(() => {
    console.error('Shutdown timeout — forcing exit.');
    process.exit(1);
  }, 5000);
};

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
