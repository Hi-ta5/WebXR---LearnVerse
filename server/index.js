import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import progressRoutes from './routes/progressRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend cross-origin requests
app.use(cors({
  origin: '*', // Allows access from local Vite client dev server
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parsing body JSON payloads
app.use(express.json());

// API Route mounts
app.use('/api/auth', authRoutes);
app.use('/api/progress', progressRoutes);

// Health check and baseline endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    message: 'LearnVerse Galactic API Engine running.',
    timestamp: new Date().toISOString(),
    engine: 'NodeJS v24+'
  });
});

// 404 Route handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Endpoint not found on the stellar coordinates.' });
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({ error: 'Critical failure in the core server warp drive.' });
});

// Bind port and startup
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 LearnVerse API Engine operational on port: ${PORT}`);
  console.log(`🪐 Hashing algorithm: bcryptjs`);
  console.log(`🌌 Database instance: Self-contained JSON engine`);
  console.log(`====================================================`);
});
