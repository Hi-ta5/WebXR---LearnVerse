import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import XRSceneLoader from '../components/webxr/XRSceneLoader';
import XRContainer from '../components/webxr/XRContainer';
import ModuleInstructionsModal from '../components/webxr/ModuleInstructionsModal';
import { LEARNING_CONTENT } from '../data/learningContent';
import { SUBJECTS_DATA, isTopicUnlocked, getNextTopic } from '../data/subjectConfig';
import {
  ChevronLeft, Sparkles, BookOpen, Lightbulb, Layers,
  ArrowRight, CheckCircle, Target, Cpu, Globe, Lock, ShieldAlert,
  HelpCircle
} from 'lucide-react';

export default function WebXRModule() {
  const { subjectId, topicId } = useParams();
  const { progress } = useAuth();
  const navigate = useNavigate();

  const [hasStartedModule, setHasStartedModule] = useState(false);
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);

  // Reset instruction view when changing topic
  useEffect(() => {
    setHasStartedModule(false);
  }, [subjectId, topicId]);

  const currentSubject = SUBJECTS_DATA[subjectId];
  const completedTopics = progress?.completedTopics || {};
  const completedList = completedTopics[subjectId] || [];

  // Check if topic is unlocked
  const isUnlocked = isTopicUnlocked(subjectId, topicId, completedTopics);
  const isCompleted = completedList.includes(topicId);
  const nextTopic = getNextTopic(subjectId, topicId);

  // Pull rich learning content from the data store
  const activeTopic = LEARNING_CONTENT[subjectId]?.[topicId] || {
    title: topicId,
    subject: currentSubject?.title || 'Academic Field',
    description: 'Interactive modules map theories onto concept visualizers. Calibrate standard parameters to alter simulations.',
    keyConcepts: [
      'Explore the interactive 3D simulation above.',
      'Use the controls to modify parameters and observe behaviour.',
    ],
    realWorldExamples: 'Abstract theories are brought to life through interactive simulations that mirror real-world engineering systems.',
    useCases: ['Conceptual understanding', 'Visual learning reinforcement'],
    importantPoints: ['Pass the concepts verification check to unlock upcoming sectors.']
  };

  // If node is locked, prevent access and show lock screen
  if (!isUnlocked && currentSubject) {
    const topics = currentSubject.topics;
    const currentIndex = topics.findIndex(t => t.id === topicId);
    const prevTopic = currentIndex > 0 ? topics[currentIndex - 1] : null;

    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] text-center p-8 gap-6 max-w-xl mx-auto">
        <div className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
          <Lock className="w-10 h-10" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-orbitron text-red-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5" />
            ACCESS RESTRICTED — PREREQUISITE REQUIRED
          </span>
          <h2 className="font-orbitron text-2xl font-bold text-white uppercase">
            {activeTopic.title} is Locked
          </h2>
          <p className="text-xs text-white/55 leading-relaxed font-sans mt-1">
            To maintain a sequential learning path, you must complete the assessment quiz for{' '}
            <strong className="text-neon-cyan">{prevTopic?.title || 'the previous topic'}</strong> before unlocking this module.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-2">
          {prevTopic && (
            <button
              onClick={() => navigate(`/subjects/${subjectId}/${prevTopic.id}`)}
              className="glow-btn-cyan text-white px-6 py-3 rounded-xl font-orbitron font-bold text-xs flex items-center gap-2 cursor-pointer"
            >
              <span>Go to {prevTopic.shortTitle || prevTopic.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={() => navigate(`/subjects/${subjectId}`)}
            className="px-6 py-3 rounded-xl border border-white/10 text-white/70 hover:text-white font-orbitron font-bold text-xs flex items-center gap-2 cursor-pointer transition-all bg-white/2"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Subject Roadmap</span>
          </button>
        </div>
      </div>
    );
  }

  const handleProceedToQuiz = () => {
    navigate(`/subjects/${subjectId}/${topicId}/quiz`);
  };

  return (
    <div className="flex flex-col gap-6 pb-10">

      {/* HEADER BREADCRUMB */}
      <div className="flex flex-col gap-1.5">
        <button
          onClick={() => navigate(`/subjects/${subjectId}`)}
          className="flex items-center gap-1.5 text-xs text-white/40 hover:text-neon-cyan transition-colors font-orbitron uppercase tracking-wider cursor-pointer w-fit"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Subject Roadmap</span>
        </button>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-1">
          <div className="flex flex-col">
            <span className="text-[10px] text-neon-cyan font-orbitron uppercase tracking-widest">{activeTopic.subject}</span>
            <h1 className="font-orbitron text-xl font-bold tracking-wide uppercase mt-0.5">{activeTopic.title}</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowInstructionsModal(true)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 font-orbitron font-bold text-[10px] cursor-pointer transition-all shadow-[0_0_12px_rgba(0,240,255,0.2)]"
              title="View quick instructions on how this module works"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>HOW TO PLAY</span>
            </button>
            {isCompleted ? (
              <span className="flex items-center gap-1.5 text-[9px] font-orbitron bg-green-500/10 border border-green-500/30 px-3 py-1 rounded-full text-green-400 font-bold">
                <CheckCircle className="w-3.5 h-3.5 fill-current" />
                MODULE RESOLVED (COMPLETED)
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-[9px] font-orbitron bg-neon-cyan/10 border border-neon-cyan/30 px-3 py-1 rounded-full text-neon-cyan font-bold animate-pulse">
                <Sparkles className="w-3.5 h-3.5" />
                CURRENT ACTIVE MODULE
              </span>
            )}
            <span className="text-[9px] font-mono text-white/30 tracking-widest bg-white/2 border border-white/5 px-2.5 py-1 rounded">
              PORTAL: {topicId?.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-transparent" />

      {/* INSTRUCTION SECTION BEFORE SHOWING MODULE */}
      {!hasStartedModule ? (
        <div className="max-w-2xl mx-auto w-full mt-4 animate-fade-in">
          <ModuleInstructionsModal
            subjectId={subjectId}
            topicId={topicId}
            themeColor={currentSubject?.color || '#00f2fe'}
            isOpen={true}
            onStart={() => setHasStartedModule(true)}
            isModal={false}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-8 w-full animate-fade-in">

          {/* === 3D SIMULATION LAB (VOICE GUIDE AUTO-STARTS WITH SUBTITLES) === */}
          <section className="w-full">
            <XRContainer subjectId={subjectId} topicId={topicId} />
          </section>

          {/* === STEP 2: LEARNING CONTENT === */}
          <section className="flex flex-col gap-6">

            {/* Topic Overview */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/40 to-neon-cyan/0" />
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-neon-cyan" />
                </div>
                <h2 className="font-orbitron font-semibold text-sm text-white uppercase tracking-wider">Topic Overview</h2>
              </div>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                {activeTopic.description}
              </p>
            </div>

            {/* Key Concepts & Real-World Examples side-by-side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Key Concepts */}
              <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col gap-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-purple/0 via-neon-purple/40 to-neon-purple/0" />
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center">
                    <Layers className="w-4 h-4 text-neon-purple" />
                  </div>
                  <h2 className="font-orbitron font-semibold text-sm text-white uppercase tracking-wider">Key Concepts</h2>
                </div>
                <div className="flex flex-col gap-3">
                  {activeTopic.keyConcepts.map((concept, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <span
                        className="w-5 h-5 rounded-md bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-orbitron font-bold text-neon-purple"
                      >
                        {idx + 1}
                      </span>
                      <p className="font-sans text-xs text-white/65 leading-relaxed">{concept}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-World Examples + Use Cases */}
              <div className="flex flex-col gap-6">
                <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col gap-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-blue/0 via-neon-blue/40 to-neon-blue/0" />
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-blue-400" />
                    </div>
                    <h2 className="font-orbitron font-semibold text-sm text-white uppercase tracking-wider">Real-World Analogy</h2>
                  </div>
                  <p className="font-sans text-xs text-white/65 leading-relaxed italic border-l-2 border-blue-500/30 pl-3">
                    {activeTopic.realWorldExamples}
                  </p>
                </div>

                {/* Use Cases */}
                <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col gap-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green-500/0 via-green-500/30 to-green-500/0" />
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                      <Target className="w-4 h-4 text-green-400" />
                    </div>
                    <h2 className="font-orbitron font-semibold text-sm text-white uppercase tracking-wider">Use Cases</h2>
                  </div>
                  <div className="flex flex-col gap-2">
                    {activeTopic.useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0" style={{ boxShadow: '0 0 6px #4ade80' }} />
                        <p className="font-sans text-xs text-white/65 leading-relaxed">{useCase}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Important Points */}
            <div className="glass-panel p-6 rounded-2xl border border-yellow-500/10 flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-yellow-500/2 pointer-events-none" />
              <div className="flex items-center gap-2.5 relative z-10">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-yellow-400" />
                </div>
                <h2 className="font-orbitron font-semibold text-sm text-white uppercase tracking-wider">Important Points to Remember</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
                {activeTopic.importantPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-yellow-500/3 border border-yellow-500/10 rounded-xl p-3.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5 animate-pulse" />
                    <p className="font-sans text-xs text-white/70 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

          </section>

          {/* === STEP 3: PROCEED TO ASSESSMENT === */}
          <section className="glass-panel p-6 rounded-2xl border border-neon-cyan/15 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-neon-purple/5 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-neon-purple/30 via-neon-cyan/50 to-neon-purple/30" />

            <div className="flex flex-col gap-1.5 relative z-10">
              <div className="flex items-center gap-2 text-[10px] font-orbitron text-neon-cyan uppercase tracking-widest font-bold">
                <Sparkles className="w-3 h-3 animate-pulse" />
                <span>{isCompleted ? 'Assessment Completed' : 'Knowledge Check Required'}</span>
              </div>
              <h3 className="font-orbitron font-bold text-lg text-white">
                {isCompleted ? 'Review or Retake Assessment' : 'Take Module Assessment Quiz'}
              </h3>
              <p className="font-sans text-xs text-white/60 max-w-md leading-relaxed">
                {isCompleted
                  ? `You have already resolved this node. You can retake the quiz anytime to practice.`
                  : `Score at least 60% (3 of 5) on the assessment to mark this module as completed and unlock ${nextTopic?.shortTitle || nextTopic?.title || 'the next module'}.`}
              </p>
            </div>

            <button
              onClick={handleProceedToQuiz}
              className="glow-btn-cyan text-white px-8 py-4 rounded-xl font-orbitron font-bold tracking-widest text-xs flex items-center gap-2.5 cursor-pointer shrink-0 relative z-10 whitespace-nowrap shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-105 transition-transform"
            >
              <span>{isCompleted ? 'RETAKE ASSESSMENT' : 'PROCEED TO ASSESSMENT'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </section>

        </div>
      )}

      {/* HOW TO PLAY INSTRUCTIONS MODAL (CAN BE OPENED ANYTIME) */}
      <ModuleInstructionsModal
        subjectId={subjectId}
        topicId={topicId}
        themeColor={currentSubject?.color || '#00f2fe'}
        isOpen={showInstructionsModal}
        onClose={() => setShowInstructionsModal(false)}
        isModal={true}
      />

    </div>
  );
}
