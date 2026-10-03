import React from 'react';
import { useAuth } from '../context/AuthContext';
import { CircularProgressChart, BarChart, LineChart } from '../components/dashboard/CustomCharts';
import { useNavigate } from 'react-router-dom';
import { SUBJECTS_DATA, getSubjectStats, getOverallStats, getActiveTopic } from '../data/subjectConfig';
import {
  Flame, CheckCircle, Sparkles, BookOpen, Clock, ChevronRight,
  Play, Trophy, Layers, Award, Unlock
} from 'lucide-react';

export default function DashboardPage() {
  const { user, progress } = useAuth();
  const navigate = useNavigate();

  const completedTopics = progress?.completedTopics || {};
  const recentActivities = progress?.activities || [];
  const streak = progress?.streak || 0;
  const activeDays = progress?.activeDays || [];

  // Compute curriculum stats using unified config
  const overall = getOverallStats(completedTopics);

  // Dynamic Chart feed arrays
  const circularSubjects = Object.values(SUBJECTS_DATA).map(sub => {
    const stats = getSubjectStats(sub.id, completedTopics);
    let shortName = sub.name;
    if (sub.id === 'computer-networks') shortName = 'Computer Networks';
    else if (sub.id === 'operating-systems') shortName = 'Operating Systems';
    else if (sub.id === 'data-structures') shortName = 'Data Structures';
    else if (sub.id === 'nlp') shortName = 'NLP';
    else if (sub.id === 'dbms') shortName = 'DBMS';
    return {
      name: shortName,
      percent: stats.percentage,
      completed: stats.completed,
      total: stats.total,
      color: sub.color
    };
  });

  const barData = Object.values(SUBJECTS_DATA).map(sub => {
    const stats = getSubjectStats(sub.id, completedTopics);
    let shortLabel = sub.name;
    if (sub.id === 'computer-networks') shortLabel = 'Networks';
    else if (sub.id === 'operating-systems') shortLabel = 'OS';
    else if (sub.id === 'data-structures') shortLabel = 'DSA';
    else if (sub.id === 'nlp') shortLabel = 'NLP';
    else if (sub.id === 'dbms') shortLabel = 'DBMS';
    return { label: shortLabel, completed: stats.completed, total: stats.total, color: sub.color };
  });

  return (
    <div className="flex flex-col gap-8 pb-10">

      {/* 1. GREETING BANNER */}
      <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-transparent to-neon-cyan/10 pointer-events-none" />

        <div className="flex flex-col gap-2 relative z-10">
          <div className="flex items-center gap-2 text-xs font-orbitron text-neon-cyan uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Learning Dashboard</span>
          </div>
          <h1 className="font-orbitron text-2xl md:text-3xl font-bold tracking-wide">
            WELCOME BACK, <span className="text-neon-cyan glow-text-cyan">{user?.name?.toUpperCase() || 'STUDENT'}</span>
          </h1>
          <p className="text-xs text-white/50 font-sans max-w-xl">
            Track your modular progression, view completed simulations, and resume interactive WebXR labs.
          </p>
        </div>

        {/* Learning Streak Card */}
        <div className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-4 group shrink-0 w-full md:w-auto relative z-10">
          <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
            <Flame className="w-6 h-6 fill-current animate-pulse" />
          </div>
          <div>
            <p className="text-[10px] text-white/40 font-orbitron uppercase tracking-wider">ACTIVE STREAK</p>
            <p className="text-lg font-bold text-white font-orbitron mt-0.5">{streak} {streak === 1 ? 'Day' : 'Days'} In a Row</p>
          </div>
        </div>
      </div>

      {/* 2. STATS ROW OVERVIEW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Total Completed Topics */}
        <div className="glass-card p-5 rounded-xl border border-white/5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-neon-cyan shrink-0">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div className="overflow-hidden">
            <p className="text-[10px] text-white/40 font-orbitron uppercase tracking-wider">COMPLETED MODULES</p>
            <p className="text-xl font-bold font-orbitron text-white mt-0.5">
              {overall.totalCompleted} <span className="text-sm font-normal text-white/40">/ {overall.totalTopics}</span>
            </p>
            <p className="text-[10px] text-neon-cyan font-orbitron mt-0.5">{overall.overallPercentage}% Finished</p>
          </div>
        </div>

        {/* Subject Overview */}
        <div className="glass-card p-5 rounded-xl border border-white/5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center text-neon-purple shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="overflow-hidden">
            <p className="text-[10px] text-white/40 font-orbitron uppercase tracking-wider">ACADEMIC FIELDS</p>
            <p className="text-xl font-bold font-orbitron text-white mt-0.5">{Object.keys(SUBJECTS_DATA).length} Core Subjects</p>
            <p className="text-[10px] text-neon-purple font-orbitron mt-0.5">{overall.totalTopics} Interactive Labs</p>
          </div>
        </div>

        {/* Engaged Days */}
        <div className="glass-card p-5 rounded-xl border border-white/5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div className="overflow-hidden">
            <p className="text-[10px] text-white/40 font-orbitron uppercase tracking-wider">ENGAGED DAYS</p>
            <p className="text-xl font-bold font-orbitron text-white mt-0.5">{activeDays.length} Active</p>
            <p className="text-[10px] text-blue-400 font-orbitron mt-0.5">Daily Progress</p>
          </div>
        </div>

        {/* Mastery Badge */}
        <div className="glass-card p-5 rounded-xl border border-white/5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div className="overflow-hidden">
            <p className="text-[10px] text-white/40 font-orbitron uppercase tracking-wider">LEARNING STATUS</p>
            <p className="text-xl font-bold font-orbitron text-white mt-0.5">
              {overall.overallPercentage === 100 ? 'Master' : overall.overallPercentage >= 50 ? 'Advanced' : 'Novice'}
            </p>
            <p className="text-[10px] text-yellow-400 font-orbitron mt-0.5">
              {overall.totalCompleted} Badges Earned
            </p>
          </div>
        </div>

      </div>

      {/* 3. CHARTS SECTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Ring Chart */}
        <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between overflow-hidden">
          <div>
            <h3 className="font-orbitron font-semibold text-sm text-white tracking-wider uppercase mb-1">Subject Completion Rings</h3>
            <p className="text-[10px] text-white/40 mb-4 uppercase">Overall percentage per academic sector</p>
          </div>
          <CircularProgressChart subjects={circularSubjects} />
        </div>

        {/* Bar Chart */}
        <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between overflow-hidden">
          <div>
            <h3 className="font-orbitron font-semibold text-sm text-white tracking-wider uppercase mb-1">Module Progress Breakdown</h3>
            <p className="text-[10px] text-white/40 mb-4 uppercase">Resolved modules against total nodes</p>
          </div>
          <BarChart data={barData} />
        </div>

        {/* Line Chart */}
        <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between overflow-hidden">
          <div>
            <h3 className="font-orbitron font-semibold text-sm text-white tracking-wider uppercase mb-1">Weekly Activity Index</h3>
            <p className="text-[10px] text-white/40 mb-4 uppercase">Study participation across past 7 days</p>
          </div>
          <LineChart activeDays={activeDays} />
        </div>

      </div>

      {/* 4. ACTIVE MODULES & CURRICULUM PROGRESSION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Academic Subjects with Active Topic */}
        <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-neon-cyan" />
              <h3 className="font-orbitron font-semibold text-sm tracking-wider uppercase text-white">Subject Learning Paths</h3>
            </div>
            <button
              onClick={() => navigate('/subjects')}
              className="text-neon-cyan hover:underline text-[10px] font-orbitron uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              All Subjects <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {Object.values(SUBJECTS_DATA).map((conf) => {
              const stats = getSubjectStats(conf.id, completedTopics);
              const activeNode = getActiveTopic(conf.id, completedTopics);

              return (
                <div
                  key={conf.id}
                  className="p-4 rounded-xl bg-white/2 border border-white/5 hover:border-white/10 transition-all flex flex-col gap-3 group"
                >
                  {/* Top row: Subject Title & Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 shrink-0" style={{ borderColor: conf.color + '40' }}>
                        <img src={conf.image} alt={conf.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-xs text-white group-hover:text-neon-cyan transition-colors">{conf.name}</span>
                        <span className="text-[10px] text-white/40 font-orbitron">{stats.completed} of {stats.total} modules resolved</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-orbitron text-xs font-bold" style={{ color: conf.color }}>{stats.percentage}%</span>
                      {stats.isFinished && <CheckCircle className="w-3.5 h-3.5 text-green-400" />}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${stats.percentage}%`, backgroundColor: conf.color, boxShadow: `0 0 8px ${conf.color}80` }}
                    />
                  </div>

                  {/* Active Module Indicator & Quick Launch */}
                  <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[10px] font-orbitron">
                    {stats.isFinished ? (
                      <div className="flex items-center gap-1.5 text-green-400 font-medium">
                        <Trophy className="w-3 h-3" />
                        <span>All Modules Completed</span>
                      </div>
                    ) : activeNode ? (
                      <div className="flex items-center gap-1.5 text-neon-cyan font-medium truncate max-w-[200px]">
                        <Sparkles className="w-3 h-3 shrink-0 animate-pulse" />
                        <span className="truncate">Active: {activeNode.shortTitle || activeNode.title}</span>
                      </div>
                    ) : (
                      <span className="text-white/40">Ready to start</span>
                    )}

                    <button
                      onClick={() => {
                        if (stats.isFinished || !activeNode) {
                          navigate(`/subjects/${conf.id}`);
                        } else {
                          navigate(`/subjects/${conf.id}/${activeNode.id}`);
                        }
                      }}
                      className="text-white hover:text-neon-cyan flex items-center gap-1 cursor-pointer transition-colors uppercase"
                    >
                      <span>{stats.isFinished ? 'View Roadmap' : 'Continue Learning'}</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent logs & Activity History */}
        <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col gap-4">
          <div className="border-b border-white/5 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              <h3 className="font-orbitron font-semibold text-sm tracking-wider uppercase text-white">Recently Completed Modules</h3>
            </div>
            {recentActivities.length > 0 && (
              <span className="text-[10px] font-orbitron text-white/40">{recentActivities.length} Records</span>
            )}
          </div>

          {recentActivities.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center text-white/35 py-10">
              <Sparkles className="w-10 h-10 text-white/20 mb-3 animate-pulse" />
              <p className="text-xs font-orbitron uppercase tracking-wider font-bold">NO COMPLETED MODULES YET</p>
              <p className="text-xs font-sans text-white/45 mt-1.5 max-w-xs leading-relaxed">
                Complete a module quiz with a score of 60% or higher to record your achievements and unlock subsequent modules.
              </p>
              <button
                onClick={() => navigate('/subjects')}
                className="mt-4 glow-btn-cyan text-white px-5 py-2 rounded-xl text-xs font-orbitron font-bold flex items-center gap-2 cursor-pointer"
              >
                <span>Start First Subject</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto pr-1">
              {recentActivities.map((act) => {
                const subColor = SUBJECTS_DATA[act.subjectId]?.color || '#00f0ff';
                const subName = SUBJECTS_DATA[act.subjectId]?.name || act.subjectId;

                return (
                  <div
                    key={act.id}
                    onClick={() => navigate(`/subjects/${act.subjectId}/${act.topicId}`)}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/2 border border-white/5 hover:border-white/15 hover:bg-white/4 transition-all text-xs cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <p className="font-semibold text-white/95 group-hover:text-neon-cyan transition-colors truncate">{act.title}</p>
                        <p className="text-[10px] text-white/40 font-orbitron">{subName}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      {act.percentage !== undefined && (
                        <span className="text-[10px] font-orbitron font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-md">
                          {act.percentage}%
                        </span>
                      )}
                      <span className="text-[9px] text-white/40 font-orbitron">
                        {new Date(act.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
