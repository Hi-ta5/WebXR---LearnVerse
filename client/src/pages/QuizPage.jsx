import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { LEARNING_CONTENT } from '../data/learningContent';
import { SUBJECTS_DATA, getNextTopic } from '../data/subjectConfig';
import {
  ChevronLeft, CheckCircle2, AlertTriangle, ArrowRight,
  RefreshCw, Trophy, Sparkles, Shield, CheckCircle,
  XCircle, BookOpen, BarChart2, Unlock, Play
} from 'lucide-react';

const PASS_THRESHOLD = 0.6; // 60% to pass

// Fisher-Yates shuffle to randomize array
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[i], a[j]];
  }
  return a;
}

export default function QuizPage() {
  const { subjectId, topicId } = useParams();
  const { completeTopicNode, progress } = useAuth();
  const navigate = useNavigate();

  const activeTopic = LEARNING_CONTENT[subjectId]?.[topicId] || {
    title: topicId,
    subject: SUBJECTS_DATA[subjectId]?.title || 'Subject'
  };
  const rawQuestions = QUIZ_QUESTIONS[subjectId]?.[topicId] || [];
  const nextTopic = getNextTopic(subjectId, topicId);

  // Randomize questions AND their answer options once on mount
  const quizSet = useMemo(() => {
    return shuffleArray(rawQuestions).map((q) => {
      const optionsWithMeta = q.options.map((opt, idx) => ({
        text: opt,
        isCorrect: idx === q.answerIdx,
      }));
      const shuffledOptions = shuffleArray(optionsWithMeta);
      return {
        question: q.question,
        explanation: q.explanation,
        options: shuffledOptions.map(o => o.text),
        answerIdx: shuffledOptions.findIndex(o => o.isCorrect),
      };
    });
  }, [subjectId, topicId, rawQuestions]);

  const [currentQ, setCurrentQ] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [answeredMap, setAnsweredMap] = useState({}); // { qIndex: selectedIdx }
  const [submitted, setSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const autoSaveTriggered = useRef(false);

  const isCompleted = (progress?.completedTopics?.[subjectId] || []).includes(topicId);

  // Calculate score
  const score = useMemo(() => {
    if (!submitted) return 0;
    return quizSet.reduce((acc, q, idx) => {
      return acc + (answeredMap[idx] === q.answerIdx ? 1 : 0);
    }, 0);
  }, [submitted, answeredMap, quizSet]);

  const totalQs = quizSet.length;
  const passed = submitted && totalQs > 0 && score / totalQs >= PASS_THRESHOLD;

  // AUTO-SAVE PROGRESS IMMEDIATELY UPON PASSING
  useEffect(() => {
    if (submitted && passed && !autoSaveTriggered.current) {
      autoSaveTriggered.current = true;
      const saveNow = async () => {
        try {
          setIsSaving(true);
          await completeTopicNode(subjectId, topicId, activeTopic.title, score, totalQs);
          setIsSaving(false);
        } catch (err) {
          console.error("Auto-save progress error:", err);
          setSaveError("Auto-save encountered an issue, but you can retry syncing below.");
          setIsSaving(false);
        }
      };
      saveNow();
    }
  }, [submitted, passed, subjectId, topicId, activeTopic?.title, score, totalQs, completeTopicNode]);

  const handleSelect = (idx) => {
    if (submitted) return;
    setSelectedIdx(idx);
  };

  const handleNext = () => {
    if (selectedIdx === null) return;
    setAnsweredMap(prev => ({ ...prev, [currentQ]: selectedIdx }));
    if (currentQ < totalQs - 1) {
      const nextIndex = currentQ + 1;
      setCurrentQ(nextIndex);
      setSelectedIdx(answeredMap[nextIndex] ?? null);
    }
  };

  const handleSubmit = () => {
    if (selectedIdx === null) return;
    const finalMap = { ...answeredMap, [currentQ]: selectedIdx };
    setAnsweredMap(finalMap);
    setSubmitted(true);
  };

  const handleManualSave = async () => {
    try {
      setIsSaving(true);
      setSaveError(null);
      await completeTopicNode(subjectId, topicId, activeTopic.title, score, totalQs);
      setIsSaving(false);
    } catch (err) {
      console.error("Manual save progress error:", err);
      setSaveError("Failed to sync progress. Please try again.");
      setIsSaving(false);
    }
  };

  const handleRetry = () => {
    autoSaveTriggered.current = false;
    setCurrentQ(0);
    setSelectedIdx(null);
    setAnsweredMap({});
    setSubmitted(false);
    setSaveError(null);
  };

  if (!rawQuestions.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-center">
        <AlertTriangle className="w-12 h-12 text-yellow-400 animate-bounce" />
        <h3 className="font-orbitron text-lg font-bold text-white">No Questions Found</h3>
        <p className="text-xs text-white/50">No quiz data is available for this topic yet.</p>
        <button
          onClick={() => navigate(`/subjects/${subjectId}/${topicId}`)}
          className="glow-btn-cyan text-white px-6 py-3 rounded-xl font-orbitron font-bold text-xs flex items-center gap-2 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          Return to Learning
        </button>
      </div>
    );
  }

  const currentQuestion = quizSet[currentQ];
  const progressPct = Math.round(((currentQ + 1) / totalQs) * 100);

  // ─── RESULTS SCREEN ───────────────────────────────────────────────
  if (submitted) {
    const pct = Math.round((score / totalQs) * 100);
    const updatedCompletedList = progress?.completedTopics?.[subjectId] || [];
    const isNowCompleted = updatedCompletedList.includes(topicId) || passed;

    return (
      <div className="flex flex-col gap-6 pb-10">

        {/* Header */}
        <div className="flex flex-col gap-1.5">
          <button
            onClick={() => navigate(`/subjects/${subjectId}/${topicId}`)}
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-neon-cyan transition-colors font-orbitron uppercase tracking-wider cursor-pointer w-fit"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Module</span>
          </button>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-[10px] text-neon-cyan font-orbitron uppercase tracking-widest">{activeTopic?.subject}</span>
            <span className="text-white/20">›</span>
            <span className="text-[10px] text-white/40 font-orbitron uppercase tracking-widest">Assessment Results</span>
          </div>
          <h1 className="font-orbitron text-xl font-bold uppercase">{activeTopic?.title} — Assessment</h1>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-transparent" />

        {/* Score Banner */}
        <div className={`glass-panel rounded-2xl p-8 border flex flex-col md:flex-row items-center gap-6 relative overflow-hidden
          ${passed ? 'border-green-500/30' : 'border-red-500/30'}`}>
          <div className={`absolute inset-0 pointer-events-none ${passed ? 'bg-green-500/5' : 'bg-red-500/5'}`} />

          {/* Score Ring */}
          <div className={`w-28 h-28 rounded-full flex flex-col items-center justify-center border-4 shrink-0 relative z-10
            ${passed ? 'border-green-500 bg-green-500/10 text-green-400' : 'border-red-500 bg-red-500/10 text-red-400'}`}>
            {passed
              ? <Trophy className="w-8 h-8 mb-1 animate-bounce" />
              : <AlertTriangle className="w-8 h-8 mb-1 animate-pulse" />}
            <span className="font-orbitron font-bold text-2xl leading-none">{pct}%</span>
          </div>

          {/* Score Details */}
          <div className="flex flex-col gap-2 relative z-10 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`font-orbitron text-[10px] uppercase tracking-widest flex items-center gap-1.5 font-bold ${passed ? 'text-green-400' : 'text-red-400'}`}>
                <Sparkles className="w-3.5 h-3.5" />
                {passed ? 'CALIBRATION RESOLVED — PASSED & UNLOCKED' : 'FREQUENCY ERROR — NEEDS RETRY'}
              </span>

              {passed && (
                <span className="text-[9px] font-orbitron bg-green-500/15 border border-green-500/30 text-green-300 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  {isSaving ? 'SYNCING PROGRESS...' : 'PROGRESS SAVED & PERSISTED'}
                </span>
              )}
            </div>

            <h2 className="font-orbitron font-bold text-xl text-white">
              Score: {score} / {totalQs} Correct
            </h2>

            <p className="text-xs text-white/60 leading-relaxed font-sans max-w-xl">
              {passed
                ? `Outstanding work! You scored ${pct}% and successfully mastered ${activeTopic.title}. Your progress is saved to your account and the next module is now unlocked.`
                : `You scored ${pct}% (${score}/${totalQs}). A minimum score of 60% (at least 3 correct answers) is required to resolve this node and unlock the next module.`}
            </p>

            {saveError && (
              <p className="text-xs text-red-400 font-sans mt-1">{saveError}</p>
            )}

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-3 mt-3">
              {/* If passed and next topic exists: Highlighted Next Module Button */}
              {passed && nextTopic && (
                <button
                  onClick={() => navigate(`/subjects/${subjectId}/${nextTopic.id}`)}
                  className="glow-btn-cyan text-white px-7 py-3 rounded-xl font-orbitron font-bold text-xs flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-105 transition-transform"
                >
                  <Unlock className="w-4 h-4" />
                  <span>CONTINUE TO NEXT MODULE ({nextTopic.shortTitle || nextTopic.title})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {/* If passed and last topic in subject */}
              {passed && !nextTopic && (
                <button
                  onClick={() => navigate(`/subjects/${subjectId}`)}
                  className="glow-btn-cyan text-white px-7 py-3 rounded-xl font-orbitron font-bold text-xs flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                >
                  <Trophy className="w-4 h-4" />
                  <span>SUBJECT COMPLETED — VIEW ROADMAP</span>
                </button>
              )}

              {/* Retry button */}
              <button
                onClick={handleRetry}
                className="glow-btn-purple text-white px-5 py-2.5 rounded-xl font-orbitron font-bold text-xs flex items-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>RETRY QUIZ</span>
              </button>

              {/* Back to current module */}
              <button
                onClick={() => navigate(`/subjects/${subjectId}/${topicId}`)}
                className="px-5 py-2.5 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-white/20 font-orbitron font-bold text-xs flex items-center gap-2 cursor-pointer transition-all bg-white/2"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>REVIEW MODULE NOTES</span>
              </button>

              {/* Subject Roadmap */}
              <button
                onClick={() => navigate(`/subjects/${subjectId}`)}
                className="px-5 py-2.5 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-white/20 font-orbitron font-bold text-xs flex items-center gap-2 cursor-pointer transition-all bg-white/2"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>SUBJECT ROADMAP</span>
              </button>

              {/* Return to Dashboard */}
              <button
                onClick={() => navigate('/dashboard')}
                className="px-5 py-2.5 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-white/20 font-orbitron font-bold text-xs flex items-center gap-2 cursor-pointer transition-all bg-white/2"
              >
                <span>DASHBOARD</span>
              </button>
            </div>
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="flex items-center gap-3 px-1 mt-2">
          <BarChart2 className="w-4 h-4 text-neon-cyan" />
          <span className="font-orbitron text-xs text-white/60 uppercase tracking-widest">Question Review & Explanations</span>
        </div>

        <div className="flex flex-col gap-4">
          {quizSet.map((q, qIdx) => {
            const userAns = answeredMap[qIdx];
            const isRight = userAns === q.answerIdx;
            return (
              <div
                key={qIdx}
                className={`glass-panel rounded-2xl border p-5 flex flex-col gap-4 relative overflow-hidden
                  ${isRight ? 'border-green-500/20 bg-green-500/2' : 'border-red-500/20 bg-red-500/2'}`}
              >
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${isRight
                  ? 'bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0'
                  : 'bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0'}`} />

                {/* Question Header */}
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5
                    ${isRight ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
                    {isRight
                      ? <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                      : <XCircle className="w-3.5 h-3.5 text-red-400" />}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className={`text-[9px] font-orbitron uppercase tracking-widest ${isRight ? 'text-green-400' : 'text-red-400'}`}>
                      Question {qIdx + 1} — {isRight ? 'Correct' : 'Incorrect'}
                    </span>
                    <p className="font-sans text-sm text-white/90 font-medium leading-relaxed">{q.question}</p>
                  </div>
                </div>

                {/* Options Review */}
                <div className="flex flex-col gap-2 pl-9">
                  {q.options.map((opt, oIdx) => {
                    const isCorrectOpt = oIdx === q.answerIdx;
                    const isUserChoice = oIdx === userAns;
                    return (
                      <div
                        key={oIdx}
                        className={`px-3.5 py-2.5 rounded-xl border text-xs font-sans flex items-center gap-3
                          ${isCorrectOpt
                            ? 'bg-green-500/10 border-green-500/40 text-green-300 font-medium'
                            : isUserChoice && !isCorrectOpt
                              ? 'bg-red-500/10 border-red-500/40 text-red-300'
                              : 'bg-white/2 border-white/5 text-white/40'}`}
                      >
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0
                          ${isCorrectOpt ? 'border-green-500 bg-green-500/20'
                            : isUserChoice ? 'border-red-500 bg-red-500/20'
                              : 'border-white/20'}`}>
                          {isCorrectOpt && <div className="w-1.5 h-1.5 rounded-full bg-green-400" />}
                          {isUserChoice && !isCorrectOpt && <div className="w-1.5 h-1.5 rounded-full bg-red-400" />}
                        </div>
                        <span className="flex-1">{opt}</span>
                        {isCorrectOpt && <span className="ml-auto text-[9px] font-orbitron text-green-400 shrink-0 font-bold">✓ CORRECT</span>}
                        {isUserChoice && !isCorrectOpt && <span className="ml-auto text-[9px] font-orbitron text-red-400 shrink-0 font-bold">✗ YOUR CHOICE</span>}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="pl-9">
                  <div className="flex items-start gap-2 bg-white/3 border border-white/5 rounded-xl p-3">
                    <BookOpen className="w-3.5 h-3.5 text-neon-cyan shrink-0 mt-0.5" />
                    <p className="font-sans text-xs text-white/60 leading-relaxed">{q.explanation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    );
  }

  // ─── QUIZ IN PROGRESS ────────────────────────────────────────────
  return (
    <div className="flex flex-col gap-6 pb-10">

      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <button
          onClick={() => navigate(`/subjects/${subjectId}/${topicId}`)}
          className="flex items-center gap-1.5 text-xs text-white/40 hover:text-neon-cyan transition-colors font-orbitron uppercase tracking-wider cursor-pointer w-fit"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Learning</span>
        </button>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-[10px] text-neon-cyan font-orbitron uppercase tracking-widest">{activeTopic?.subject}</span>
          <span className="text-white/20">›</span>
          <span className="text-[10px] text-white/40 font-orbitron uppercase tracking-widest">Assessment</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-orbitron text-xl font-bold uppercase">{activeTopic?.title}</h1>
          <div className="flex items-center gap-2 text-[9px] font-orbitron text-white/40 bg-white/2 border border-white/5 px-3 py-1.5 rounded-lg">
            <Shield className="w-3 h-3 text-neon-purple" />
            <span>AI TOOLS DISABLED — ASSESSMENT MODE</span>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-transparent" />

      {/* Progress Bar */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-[10px] font-orbitron">
          <span className="text-white/40 uppercase tracking-widest">Question {currentQ + 1} of {totalQs}</span>
          <span className="text-neon-cyan font-bold">{progressPct}%</span>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progressPct}%`,
              background: 'linear-gradient(90deg, #bc3bf0, #00f0ff)',
              boxShadow: '0 0 10px rgba(0,240,255,0.4)'
            }}
          />
        </div>
        {/* Question dot indicators */}
        <div className="flex items-center gap-1.5 mt-1 flex-wrap">
          {quizSet.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentQ
                ? 'w-6 bg-neon-cyan shadow-[0_0_6px_rgba(0,240,255,0.6)]'
                : answeredMap[idx] !== undefined
                  ? answeredMap[idx] === quizSet[idx].answerIdx ? 'w-3 bg-green-400' : 'w-3 bg-red-400'
                  : 'w-3 bg-white/15'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Question Card */}
      <div className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col gap-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-purple/0 via-neon-cyan/40 to-neon-purple/0" />

        {/* Question */}
        <div className="flex items-start gap-4">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-neon-purple/20 to-neon-cyan/20 border border-neon-cyan/20 flex items-center justify-center shrink-0">
            <span className="font-orbitron font-bold text-sm text-neon-cyan">{currentQ + 1}</span>
          </div>
          <p className="font-sans text-base text-white/90 font-medium leading-relaxed pt-1.5">
            {currentQuestion.question}
          </p>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {currentQuestion.options.map((opt, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`p-4 rounded-xl border text-sm font-sans transition-all cursor-pointer select-none flex items-center gap-4 group
                ${selectedIdx === idx
                  ? 'bg-neon-cyan/8 border-neon-cyan text-white shadow-[0_0_20px_rgba(0,240,255,0.08)]'
                  : 'bg-white/2 border-white/5 text-white/60 hover:border-white/15 hover:text-white/85 hover:bg-white/4'
                }`}
            >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all
                ${selectedIdx === idx ? 'border-neon-cyan bg-neon-cyan/20' : 'border-white/25 group-hover:border-white/40'}`}>
                {selectedIdx === idx && <div className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_6px_rgba(0,240,255,0.8)]" />}
              </div>
              <span className="flex-1">{opt}</span>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <button
            onClick={() => {
              if (currentQ > 0) {
                if (selectedIdx !== null) setAnsweredMap(prev => ({ ...prev, [currentQ]: selectedIdx }));
                const prevIndex = currentQ - 1;
                setCurrentQ(prevIndex);
                setSelectedIdx(answeredMap[prevIndex] ?? null);
              }
            }}
            disabled={currentQ === 0}
            className="px-5 py-2.5 rounded-xl border border-white/5 text-white/40 font-orbitron text-xs disabled:opacity-30 hover:text-white hover:border-white/15 transition-all cursor-pointer disabled:cursor-not-allowed"
          >
            ← PREVIOUS
          </button>

          {currentQ < totalQs - 1 ? (
            <button
              onClick={handleNext}
              disabled={selectedIdx === null}
              className="glow-btn-cyan text-white px-6 py-2.5 rounded-xl font-orbitron font-bold text-xs flex items-center gap-2 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span>NEXT QUESTION</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={selectedIdx === null}
              className="glow-btn-purple text-white px-6 py-2.5 rounded-xl font-orbitron font-bold text-xs flex items-center gap-2 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>SUBMIT ASSESSMENT</span>
            </button>
          )}
        </div>
      </div>

    </div>
  );
}
