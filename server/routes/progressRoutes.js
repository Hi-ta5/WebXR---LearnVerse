import express from 'express';
import { db } from '../utils/db.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/progress
// @desc    Get current user learning progress & activities
router.get('/', authMiddleware, (req, res) => {
  try {
    const progress = db.getUserProgress(req.user.id);
    if (!progress) {
      return res.status(404).json({ error: 'Progress metrics not found.' });
    }
    res.json(progress);
  } catch (err) {
    console.error('Error fetching progress:', err);
    res.status(500).json({ error: 'Server error fetching student stats.' });
  }
});

// @route   POST /api/progress/complete
// @desc    Mark a specific topic node as completed
router.post('/complete', authMiddleware, (req, res) => {
  const { subjectId, topicId, topicTitle } = req.body;

  if (!subjectId || !topicId || !topicTitle) {
    return res.status(400).json({ error: 'Please provide subjectId, topicId, and topicTitle.' });
  }

  try {
    const updatedProgress = db.completeTopic(req.user.id, subjectId, topicId, topicTitle);
    if (!updatedProgress) {
      return res.status(404).json({ error: 'Could not update progress.' });
    }
    
    res.json({
      success: true,
      message: 'Topic progression registered successfully.',
      progress: updatedProgress
    });
  } catch (err) {
    console.error('Error marking topic complete:', err);
    res.status(500).json({ error: 'Server error saving topic completion.' });
  }
});

export default router;
