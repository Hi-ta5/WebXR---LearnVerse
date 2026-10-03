import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '..', 'data');

const USERS_FILE = path.join(DATA_DIR, 'users.json');
const PROGRESS_FILE = path.join(DATA_DIR, 'progress.json');

// Ensure database folders and files exist
function initDb() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
  }

  if (!fs.existsSync(PROGRESS_FILE)) {
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify([], null, 2));
  }
}

initDb();

function readJsonFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
    return [];
  }
}

function writeJsonFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err);
    return false;
  }
}

export const db = {
  // --- USERS TABLE ---
  getUsers() {
    return readJsonFile(USERS_FILE);
  },

  findUserById(id) {
    const users = this.getUsers();
    return users.find(u => u.id === id);
  },

  findUserByEmail(email) {
    const users = this.getUsers();
    return users.find(u => u.email.toLowerCase() === email.toLowerCase());
  },

  createUser(userData) {
    const users = this.getUsers();
    const newUser = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email.toLowerCase(),
      password: userData.password, // already hashed
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    writeJsonFile(USERS_FILE, users);
    
    // Auto-initialize progress record for the user
    this.initProgress(newUser.id);
    
    return newUser;
  },

  // --- PROGRESS TABLE ---
  getProgressList() {
    return readJsonFile(PROGRESS_FILE);
  },

  initProgress(userId) {
    const progressList = this.getProgressList();
    const existing = progressList.find(p => p.userId === userId);
    
    if (!existing) {
      const newProgress = {
        userId,
        streak: 0,
        lastActiveDate: null,
        completedTopics: {}, // format: { 'computer-networks': ['osi-model'], ... }
        activities: [], // recent items: { type: 'complete', subjectId, topicId, title, date }
        activeDays: [] // array of dates 'YYYY-MM-DD' user logged in / learned
      };
      progressList.push(newProgress);
      writeJsonFile(PROGRESS_FILE, progressList);
      return newProgress;
    }
    return existing;
  },

  getUserProgress(userId) {
    this.initProgress(userId); // ensure structure exists
    const progressList = this.getProgressList();
    return progressList.find(p => p.userId === userId);
  },

  saveUserProgress(userId, progressData) {
    const progressList = this.getProgressList();
    const index = progressList.findIndex(p => p.userId === userId);
    
    if (index !== -1) {
      progressList[index] = { ...progressList[index], ...progressData };
      writeJsonFile(PROGRESS_FILE, progressList);
      return progressList[index];
    }
    return null;
  },

  completeTopic(userId, subjectId, topicId, topicTitle, score = null, totalQuestions = null) {
    const progress = this.getUserProgress(userId);
    if (!progress) return null;

    if (!progress.completedTopics[subjectId]) {
      progress.completedTopics[subjectId] = [];
    }

    // Add topic ID if not already in completed list
    if (!progress.completedTopics[subjectId].includes(topicId)) {
      progress.completedTopics[subjectId].push(topicId);
    }

    // Always update/prepend activity record
    const percent = score !== null && totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 100;
    
    // Remove duplicate recent activity for same topic if any
    progress.activities = (progress.activities || []).filter(
      a => !(a.subjectId === subjectId && a.topicId === topicId)
    );

    progress.activities.unshift({
      id: Date.now().toString(),
      type: 'completed',
      subjectId,
      topicId,
      title: topicTitle || topicId,
      score: score !== null ? score : undefined,
      totalQuestions: totalQuestions !== null ? totalQuestions : undefined,
      percentage: percent,
      date: new Date().toISOString()
    });

    // Keep recent activities capped at 20
    if (progress.activities.length > 20) {
      progress.activities = progress.activities.slice(0, 20);
    }

    // Track last active topic
    progress.lastActiveTopic = {
      subjectId,
      topicId,
      title: topicTitle || topicId,
      timestamp: new Date().toISOString()
    };

    // Update streaks and active days
    this.updateStreakAndActivity(progress);
    this.saveUserProgress(userId, progress);
    
    return progress;
  },

  updateStreakAndActivity(progress) {
    const todayStr = new Date().toISOString().split('T')[0];
    
    // Add active day if new
    if (!progress.activeDays.includes(todayStr)) {
      progress.activeDays.push(todayStr);

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      if (progress.lastActiveDate === yesterdayStr) {
        // Increment streak
        progress.streak += 1;
      } else if (progress.lastActiveDate !== todayStr) {
        // Reset streak to 1 if user skipped a day
        progress.streak = 1;
      }

      progress.lastActiveDate = todayStr;
    }
  }
};
