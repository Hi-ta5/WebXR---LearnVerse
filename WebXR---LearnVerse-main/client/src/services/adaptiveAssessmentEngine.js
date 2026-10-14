/**
 * Adaptive Assessment Engine
 * 
 * Manages question selection and difficulty transitions for module assessments.
 * Operates internally without exposing the word "Adaptive" in user-facing buttons or labels.
 * 
 * Rules:
 * - 3 levels: 'easy', 'medium', 'hard'.
 * - Starts at 'easy' with consecutive correct = 0.
 * - 2 consecutive correct at current difficulty promotes:
 *   easy -> medium
 *   medium -> hard
 *   hard -> hard (max)
 * - An incorrect answer demotes:
 *   hard -> medium
 *   medium -> easy
 *   easy -> easy (min)
 *   and resets consecutive correct counter to 0.
 */

export const DIFFICULTY_LEVELS = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard'
};

export const DIFFICULTY_ORDER = [
  DIFFICULTY_LEVELS.EASY,
  DIFFICULTY_LEVELS.MEDIUM,
  DIFFICULTY_LEVELS.HARD
];

export const DIFFICULTY_RANKS = {
  [DIFFICULTY_LEVELS.EASY]: 0,
  [DIFFICULTY_LEVELS.MEDIUM]: 1,
  [DIFFICULTY_LEVELS.HARD]: 2
};

export const DEFAULT_ASSESSMENT_LENGTH = 5;
export const PASS_THRESHOLD = 0.6; // 60%

export const DIFFICULTY_CONFIG = {
  [DIFFICULTY_LEVELS.EASY]: {
    label: 'Easy',
    color: '#10b981', // Emerald
    textClass: 'text-emerald-400',
    bgClass: 'bg-emerald-500/10',
    borderClass: 'border-emerald-500/30',
    dotClass: 'bg-emerald-400',
    glowClass: 'shadow-[0_0_8px_rgba(16,185,129,0.7)]'
  },
  [DIFFICULTY_LEVELS.MEDIUM]: {
    label: 'Medium',
    color: '#f59e0b', // Amber
    textClass: 'text-amber-400',
    bgClass: 'bg-amber-500/10',
    borderClass: 'border-amber-500/30',
    dotClass: 'bg-amber-400',
    glowClass: 'shadow-[0_0_8px_rgba(245,158,11,0.7)]'
  },
  [DIFFICULTY_LEVELS.HARD]: {
    label: 'Hard',
    color: '#f43f5e', // Rose / Red-Pink
    textClass: 'text-rose-400',
    bgClass: 'bg-rose-500/10',
    borderClass: 'border-rose-500/30',
    dotClass: 'bg-rose-400',
    glowClass: 'shadow-[0_0_8px_rgba(244,63,94,0.7)]'
  }
};

/**
 * Fisher-Yates array shuffle.
 */
export function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[i], a[j]];
  }
  return a;
}

/**
 * Calculate the next difficulty and consecutive correct count given the user's answer result.
 * 
 * @param {string} currentDifficulty - 'easy' | 'medium' | 'hard'
 * @param {number} consecutiveCorrect - Current consecutive correct streak at current level
 * @param {boolean} isCorrect - Whether the user answered the current question correctly
 * @returns {{ nextDifficulty: string, nextConsecutiveCorrect: number }}
 */
export function calculateNextDifficulty(currentDifficulty = DIFFICULTY_LEVELS.EASY, consecutiveCorrect = 0, isCorrect = false) {
  const safeDifficulty = DIFFICULTY_ORDER.includes(currentDifficulty)
    ? currentDifficulty
    : DIFFICULTY_LEVELS.EASY;

  if (isCorrect) {
    const newStreak = consecutiveCorrect + 1;
    if (newStreak >= 2) {
      if (safeDifficulty === DIFFICULTY_LEVELS.EASY) {
        return {
          nextDifficulty: DIFFICULTY_LEVELS.MEDIUM,
          nextConsecutiveCorrect: 0
        };
      }
      if (safeDifficulty === DIFFICULTY_LEVELS.MEDIUM) {
        return {
          nextDifficulty: DIFFICULTY_LEVELS.HARD,
          nextConsecutiveCorrect: 0
        };
      }
      // Already at Hard -> stays Hard
      return {
        nextDifficulty: DIFFICULTY_LEVELS.HARD,
        nextConsecutiveCorrect: newStreak
      };
    }
    // Correct but streak < 2 -> stay at current difficulty
    return {
      nextDifficulty: safeDifficulty,
      nextConsecutiveCorrect: newStreak
    };
  }

  // Incorrect answer -> reset streak and demote difficulty
  if (safeDifficulty === DIFFICULTY_LEVELS.HARD) {
    return {
      nextDifficulty: DIFFICULTY_LEVELS.MEDIUM,
      nextConsecutiveCorrect: 0
    };
  }
  if (safeDifficulty === DIFFICULTY_LEVELS.MEDIUM) {
    return {
      nextDifficulty: DIFFICULTY_LEVELS.EASY,
      nextConsecutiveCorrect: 0
    };
  }
  // Already at Easy -> stay at Easy
  return {
    nextDifficulty: DIFFICULTY_LEVELS.EASY,
    nextConsecutiveCorrect: 0
  };
}

/**
 * Prepares a question by shuffling its options while maintaining correct answer mapping.
 * Ensures both `answerIdx` and `correctAnswer` are present, plus an id and difficulty.
 * 
 * @param {Object} rawQuestion
 * @param {number|string} index
 * @returns {Object} preparedQuestion
 */
export function prepareQuestion(rawQuestion, index = 0) {
  const correctIdx = rawQuestion.correctAnswer !== undefined
    ? rawQuestion.correctAnswer
    : (rawQuestion.answerIdx !== undefined ? rawQuestion.answerIdx : 0);

  const optionsWithMeta = (rawQuestion.options || []).map((text, idx) => ({
    text,
    isCorrect: idx === correctIdx
  }));

  const shuffled = shuffleArray(optionsWithMeta);
  const newCorrectIndex = shuffled.findIndex(opt => opt.isCorrect);

  const safeDifficulty = DIFFICULTY_ORDER.includes(rawQuestion.difficulty)
    ? rawQuestion.difficulty
    : DIFFICULTY_LEVELS.EASY;

  const id = rawQuestion.id !== undefined
    ? rawQuestion.id
    : `q-${index}-${safeDifficulty}-${rawQuestion.question.slice(0, 15).replace(/\s+/g, '_')}`;

  return {
    id,
    question: rawQuestion.question,
    explanation: rawQuestion.explanation || '',
    difficulty: safeDifficulty,
    options: shuffled.map(opt => opt.text),
    answerIdx: newCorrectIndex >= 0 ? newCorrectIndex : 0,
    correctAnswer: newCorrectIndex >= 0 ? newCorrectIndex : 0,
    rawId: rawQuestion.id
  };
}

/**
 * Select the next question from the question bank matching the target difficulty.
 * Falls back to closest available difficulty if no unused questions exist at target difficulty.
 * 
 * @param {Array<Object>} questionBank - Array of prepared questions
 * @param {Set|Array} usedQuestionIds - Set of IDs already used in this session
 * @param {string} targetDifficulty - 'easy' | 'medium' | 'hard'
 * @returns {Object|null}
 */
export function selectNextQuestion(questionBank = [], usedQuestionIds = new Set(), targetDifficulty = DIFFICULTY_LEVELS.EASY) {
  if (!questionBank.length) return null;

  const usedSet = usedQuestionIds instanceof Set ? usedQuestionIds : new Set(usedQuestionIds);

  // 1. Priority: unused question with exact target difficulty
  const exactCandidates = questionBank.filter(
    q => !usedSet.has(q.id) && q.difficulty === targetDifficulty
  );
  if (exactCandidates.length > 0) {
    const pick = exactCandidates[Math.floor(Math.random() * exactCandidates.length)];
    return pick;
  }

  // 2. Fallback: closest difficulty unused questions
  const fallbackOrder = targetDifficulty === DIFFICULTY_LEVELS.EASY
    ? [DIFFICULTY_LEVELS.MEDIUM, DIFFICULTY_LEVELS.HARD]
    : targetDifficulty === DIFFICULTY_LEVELS.HARD
      ? [DIFFICULTY_LEVELS.MEDIUM, DIFFICULTY_LEVELS.EASY]
      : [DIFFICULTY_LEVELS.EASY, DIFFICULTY_LEVELS.HARD];

  for (const diff of fallbackOrder) {
    const candidates = questionBank.filter(
      q => !usedSet.has(q.id) && q.difficulty === diff
    );
    if (candidates.length > 0) {
      return candidates[Math.floor(Math.random() * candidates.length)];
    }
  }

  // 3. Fallback: any unused question
  const anyUnused = questionBank.filter(q => !usedSet.has(q.id));
  if (anyUnused.length > 0) {
    return anyUnused[0];
  }

  // 4. Last resort: if all questions have been used, pick from question bank
  return questionBank[0];
}

/**
 * Calculates the highest difficulty reached in a difficulty history array.
 * 
 * @param {Array<string>} difficultyHistory - e.g. ['easy', 'easy', 'medium', 'hard']
 * @returns {string} - 'easy' | 'medium' | 'hard'
 */
export function getHighestDifficulty(difficultyHistory = []) {
  if (!difficultyHistory || !difficultyHistory.length) return DIFFICULTY_LEVELS.EASY;

  let highest = DIFFICULTY_LEVELS.EASY;
  for (const diff of difficultyHistory) {
    if ((DIFFICULTY_RANKS[diff] || 0) > (DIFFICULTY_RANKS[highest] || 0)) {
      highest = diff;
    }
  }
  return highest;
}
