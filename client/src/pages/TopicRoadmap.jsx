import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { SUBJECTS_DATA, isTopicUnlocked, getActiveTopic, getSubjectStats } from '../data/subjectConfig';
import { Lock, Unlock, CheckCircle, ChevronLeft, Play, AlertCircle, Sparkles, Trophy } from 'lucide-react';

export default function TopicRoadmap() {
  const { subjectId } = useParams();
  const { progress } = useAuth();
  const navigate = useNavigate();

  const currentSubject = SUBJECTS_DATA[subjectId];

  if (!currentSubject) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 gap-4 min-h-[400px]">
        <AlertCircle className="w-12 h-12 text-red-400 animate-bounce" />
        <h3 className="font-orbitron text-lg font-bold text-white">INVALID SUBJECT</h3>
        <p className="text-xs text-white/50">The requested subject roadmap could not be found.</p>
        <Link to="/subjects" className="text-neon-cyan hover:underline text-xs font-orbitron">RETURN TO SUBJECTS</Link>
      </div>
    );
  }

  const completedTopics = progress?.completedTopics || {};
  const completedList = (completedTopics[subjectId] || []).filter(topicId => 
    currentSubject.topics.some(t => t.id === topicId)
  );
  
  const stats = getSubjectStats(subjectId, completedTopics);
  const activeTopic = getActiveTopic(subjectId, completedTopics);

  return (
    <div className="flex flex-col gap-8 relative pb-16">

      {/* HEADER ANCHOR */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <button
            onClick={() => navigate('/subjects')}
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-neon-cyan transition-colors font-orbitron uppercase tracking-wider cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>All Subjects</span>
          </button>

          <div className="flex items-center gap-4 mt-2">
            <div className="w-14 h-14 rounded-xl border border-white/10 overflow-hidden shrink-0" style={{ borderColor: currentSubject.color + '40' }}>
              <img src={currentSubject.image} alt={currentSubject.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <h2 className="font-orbitron text-2xl font-bold tracking-wide uppercase">
                {currentSubject.title} Roadmap
              </h2>
              <p className="text-xs text-white/55 leading-relaxed font-sans max-w-2xl">
                {currentSubject.description} Complete each module quiz to unlock subsequent modules.
              </p>
            </div>
          </div>
        </div>

        {/* PROGRESS METRIC CHIP */}
        <div className="bg-white/2 border border-white/5 px-5 py-3 rounded-xl text-xs font-orbitron flex flex-col gap-1.5 items-end shrink-0 w-full md:w-auto">
          <div className="flex items-center gap-2">
            {stats.isFinished && <Trophy className="w-4 h-4 text-yellow-400 animate-bounce" />}
            <span className="text-white/45 text-[9px] uppercase tracking-widest">ROADMAP PROGRESSION</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-24 bg-white/5 h-2 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${stats.percentage}%`,
                  backgroundColor: currentSubject.color,
                  boxShadow: `0 0 8px ${currentSubject.color}80`
                }}
              />
            </div>
            <span className="font-bold text-sm" style={{ color: currentSubject.color }}>
              {stats.percentage}% ({stats.completed}/{stats.total})
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-transparent" />

      {/* ROADMAP TIMELINE */}
      <div className="relative flex flex-col items-center mt-6 w-full max-w-3xl mx-auto px-4">

        {/* Central connecting backbone cyber-line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white/5 z-0" />

        {/* Glow progress backbone trail */}
        <div
          className="absolute top-0 w-0.5 bg-gradient-to-b from-neon-purple to-neon-cyan z-0 transition-all duration-1000"
          style={{
            height: `${currentSubject.topics.length > 1
              ? (completedList.length / currentSubject.topics.length) * 100
              : 0}%`
          }}
        />

        {/* TOPIC NODE CARDS */}
        <div className="flex flex-col gap-12 w-full relative z-10">
          {currentSubject.topics.map((topic, index) => {
            const isCompleted = completedList.includes(topic.id);
            const isUnlocked = isTopicUnlocked(subjectId, topic.id, completedTopics);
            const isActive = activeTopic?.id === topic.id;
            const isOdd = index % 2 !== 0;

            return (
              <div
                key={topic.id}
                className={`flex flex-col md:flex-row items-center w-full ${isOdd ? 'md:flex-row-reverse' : ''} gap-4`}
              >

                {/* 1. NODE CONTENT BLOCK */}
                <div className="w-full md:w-[45%] flex flex-col">
                  <div
                    onClick={() => isUnlocked && navigate(`/subjects/${subjectId}/${topic.id}`)}
                    className={`glass-card p-5 rounded-2xl border transition-all duration-300 relative group flex flex-col gap-3 ${
                      isActive
                        ? 'border-neon-cyan shadow-[0_0_25px_rgba(0,240,255,0.15)] bg-neon-cyan/5 cursor-pointer hover:scale-[1.03]'
                        : isCompleted
                          ? 'border-green-500/30 bg-green-500/3 cursor-pointer hover:scale-[1.02]'
                          : isUnlocked
                            ? 'border-white/10 hover:border-neon-cyan/30 cursor-pointer hover:scale-[1.02]'
                            : 'opacity-40 cursor-not-allowed border-white/5'
                      }`}
                  >
                    {/* Glowing side accent line */}
                    {isUnlocked && (
                      <div
                        className="absolute left-0 top-4 bottom-4 w-1 rounded-r-lg"
                        style={{ backgroundColor: isCompleted ? '#4ade80' : currentSubject.color }}
                      />
                    )}

                    {/* TOP CAP */}
                    <div className="flex items-center justify-between text-[10px] font-orbitron">
                      <span className="text-white/40 uppercase font-medium">{topic.level}</span>
                      {isCompleted ? (
                        <span className="flex items-center gap-1 font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                          <CheckCircle className="w-3 h-3 fill-current" />
                          COMPLETED
                        </span>
                      ) : isActive ? (
                        <span className="flex items-center gap-1 font-bold text-neon-cyan bg-neon-cyan/15 px-2.5 py-0.5 rounded-full border border-neon-cyan/30 animate-pulse">
                          <Sparkles className="w-3 h-3" />
                          ACTIVE MODULE
                        </span>
                      ) : isUnlocked ? (
                        <span className="flex items-center gap-1 font-bold text-white/70">
                          <Unlock className="w-3 h-3" />
                          UNLOCKED
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 font-bold text-white/30">
                          <Lock className="w-3 h-3" />
                          LOCKED
                        </span>
                      )}
                    </div>

                    {/* TITLE */}
                    <div className="flex flex-col gap-1">
                      <h4 className="font-orbitron font-semibold text-base text-white group-hover:text-neon-cyan transition-colors">
                        {index + 1}. {topic.title}
                      </h4>
                      <p className="font-sans text-xs text-white/50 leading-relaxed">
                        {topic.desc}
                      </p>
                    </div>

                    {/* ACTION BUTTON */}
                    {isUnlocked && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/subjects/${subjectId}/${topic.id}`);
                        }}
                        className={`self-end px-3.5 py-1.5 rounded-lg border text-[10px] font-orbitron uppercase tracking-wider flex items-center gap-1.5 mt-1 cursor-pointer transition-all ${
                          isActive
                            ? 'bg-neon-cyan text-black font-bold border-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.4)]'
                            : isCompleted
                              ? 'bg-white/5 border-white/10 text-green-300 hover:border-green-400'
                              : 'bg-white/3 border-white/5 text-white hover:text-neon-cyan hover:border-neon-cyan/30 hover:bg-neon-cyan/10'
                        }`}
                      >
                        <span>{isCompleted ? 'Review Module' : isActive ? 'Start Learning' : 'Launch Simulation'}</span>
                        <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                      </button>
                    )}

                    {!isUnlocked && (
                      <div className="text-[10px] font-orbitron text-white/30 flex items-center gap-1 self-start mt-1">
                        <Lock className="w-3 h-3" />
                        <span>Requires {currentSubject.topics[index - 1]?.shortTitle || currentSubject.topics[index - 1]?.title}</span>
                      </div>
                    )}

                  </div>
                </div>

                {/* 2. CHRONO CONNECTOR BULB */}
                <div className="relative flex items-center justify-center w-12 shrink-0 h-12">
                  <div
                    className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all duration-300 font-orbitron font-bold text-xs ${
                      isCompleted
                        ? 'bg-green-500/15 border-green-500 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.4)]'
                        : isActive
                          ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan shadow-[0_0_15px_rgba(0,240,255,0.5)] animate-pulse scale-110'
                          : isUnlocked
                            ? 'bg-space-black border-white/30 text-white/70'
                            : 'bg-[#02000a] border-white/10 text-white/20'
                      }`}
                  >
                    {isCompleted ? '✓' : index + 1}
                  </div>
                </div>

                {/* 3. SYMMETRIC BUFFER SPACE */}
                <div className="hidden md:block w-[45%]" />

              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
