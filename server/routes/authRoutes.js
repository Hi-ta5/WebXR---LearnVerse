import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '../utils/db.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'learnverse-cosmic-secret-key-9988';

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// @route   POST /api/auth/signup
// @desc    Register a new user
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // 1. Validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    if (name.trim().length < 2) {
      return res.status(400).json({ error: 'Name must be at least 2 characters long.' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long.' });
    }

    // 2. Check if user already exists
    const existingUser = db.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'An account with this email already exists.' });
    }

    // 3. Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create user in database
    const newUser = db.createUser({
      name: name.trim(),
      email: email.trim(),
      password: hashedPassword
    });

    // 5. Generate token
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, name: newUser.name },
      JWT_SECRET,
      { expiresIn: '7d' } // Default long-lived token
    );

    res.status(201).json({
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        createdAt: newUser.createdAt
      }
    });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Server error during registration. Please try again.' });
  }
});

// @route   POST /api/auth/signin
// @desc    Authenticate user and get token
router.post('/signin', async (req, res) => {
  const { email, password, rememberMe } = req.body;

  try {
    // 1. Validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide both email and password.' });
    }

    // 2. Check user exists
    const user = db.findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    // 3. Match passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    // 4. Generate JWT with conditional expiry
    const expiresIn = rememberMe ? '30d' : '24h';
    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      JWT_SECRET,
      { expiresIn }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
      }
    });
  } catch (err) {
    console.error('Signin error:', err);
    res.status(500).json({ error: 'Server error during sign in. Please try again.' });
  }
});

// @route   GET /api/auth/me
// @desc    Get current user profile (gated by auth token)
router.get('/me', authMiddleware, (req, res) => {
  try {
    const user = db.findUserById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt
    });
  } catch (err) {
    console.error('Auth token fetch error:', err);
    res.status(500).json({ error: 'Server validation error.' });
  }
});

export default router;
