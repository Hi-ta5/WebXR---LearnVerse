import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { SUBJECTS_DATA, getSubjectStats, getActiveTopic } from '../data/subjectConfig';
import { Network, Cpu, Binary, ChevronRight, CheckCircle, Sparkles, Trophy, Brain, Database } from 'lucide-react';

export default function SubjectsPage() {
  const { progress } = useAuth();
  const navigate = useNavigate();

  const iconMap = {
    'computer-networks': Network,
    'operating-systems': Cpu,
    'data-structures': Binary,
    'nlp': Brain,
    'dbms': Database
  };

  const completedTopics = progress?.completedTopics || {};

  return (
    <div className="flex flex-col gap-6 pb-10">

      {/* HEADER TITLE */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-xs font-orbitron text-neon-cyan uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curriculum Directory</span>
        </div>
        <h2 className="font-orbitron text-2xl font-bold tracking-wide uppercase">Academic Subjects</h2>
        <p className="text-xs text-white/50 leading-relaxed font-sans max-w-xl">
          Choose a subject below to open detailed interactive roadmaps. Unlock modules sequentially from beginner to advanced.
        </p>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-neon-purple/30 via-neon-cyan/20 to-transparent my-2" />

      {/* CORE SUBJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {Object.values(SUBJECTS_DATA).map((sub) => {
          const Icon = iconMap[sub.id] || Network;
          const stats = getSubjectStats(sub.id, completedTopics);
          const activeNode = getActiveTopic(sub.id, completedTopics);

          return (
            <div
              key={sub.id}
              onClick={() => navigate(`/subjects/${sub.id}`)}
              className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between gap-6 group hover:scale-[1.02] cursor-pointer relative overflow-hidden"
            >
              <div className="flex flex-col gap-4">

                {/* HEADER: IMAGE BESIDE NAME */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-xl bg-white/3 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-105 overflow-hidden shrink-0"
                    style={{
                      borderColor: sub.color + '40',
                      boxShadow: `0 0 10px ${sub.color}15`
                    }}
                  >
                    <img src={sub.image} alt={sub.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-orbitron font-semibold text-lg text-white group-hover:text-neon-cyan transition-colors leading-tight">
                      {sub.title}
                    </h3>
                    <div className="w-fit flex items-center gap-1.5 bg-white/2 border border-white/5 px-2.5 py-0.5 rounded-full text-[9px] font-orbitron text-white/60">
                      <span>{stats.total} NODES</span>
                    </div>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="font-sans text-xs text-white/45 leading-relaxed">
                  {sub.description}
                </p>

                {/* ACTIVE MODULE HIGHLIGHT */}
                {stats.isFinished ? (
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-orbitron">
                    <Trophy className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>All {stats.total} Modules Resolved!</span>
                  </div>
                ) : activeNode ? (
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-neon-cyan/8 border border-neon-cyan/20 text-neon-cyan text-xs font-orbitron">
                    <Sparkles className="w-3.5 h-3.5 shrink-0 animate-pulse" />
                    <span className="truncate">Active: {activeNode.title}</span>
                  </div>
                ) : null}
              </div>

              {/* PROGRESS AND ACTION BUTTON */}
              <div className="flex flex-col gap-4 mt-2">

                {/* Progress bar */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[10px] font-orbitron">
                    <span className="text-white/40 uppercase">SECTOR PROGRESS</span>
                    <span className="font-bold" style={{ color: sub.color }}>{stats.percentage}%</span>
                  </div>

                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${stats.percentage}%`,
                        backgroundColor: sub.color,
                        boxShadow: `0 0 8px ${sub.color}60`
                      }}
                    />
                  </div>

                  <span className="text-[9px] text-white/30 font-sans mt-0.5">
                    {stats.completed} of {stats.total} core roadmap segments resolved
                  </span>
                </div>

                {/* Explore Action button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/subjects/${sub.id}`);
                  }}
                  className="w-full py-3 rounded-xl bg-white/2 border border-white/5 group-hover:border-white/15 group-hover:bg-white/5 transition-all text-xs font-orbitron uppercase text-white/80 group-hover:text-white flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                >
                  <span>Launch Roadmap</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
