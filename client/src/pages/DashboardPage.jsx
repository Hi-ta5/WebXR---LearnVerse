import React from 'react';
import { useAuth } from '../context/AuthContext';
import { CircularProgressChart, BarChart, LineChart } from '../components/dashboard/CustomCharts';
import { useNavigate } from 'react-router-dom';
import { Flame, CheckCircle, Sparkles, BookOpen, Clock, ChevronRight } from 'lucide-react';

export default function DashboardPage() {
  const { user, progress } = useAuth();
  const navigate = useNavigate();

  // Curriculum totals config
  const CURRICULUM = {
    'computer-networks': { name: 'Computer Networks', total: 6, color: '#00f0ff', image: '/cn.jpg' },
    'operating-systems': { name: 'Operating Systems', total: 5, color: '#bc3bf0', image: '/os.jpg' },
    'data-structures': { name: 'Data Structures', total: 5, color: '#3b82f6', image: '/dsa.jpg' }
  };

  const SUBJECT_TOPICS = {
    'computer-networks': ['osi-model', 'physical-layer', 'network-topologies', 'tcp-udp', 'routing', 'congestion-control'],
    'operating-systems': ['deadlocks', 'threads', 'process-management', 'cpu-scheduling', 'memory-management'],
    'data-structures': ['arrays', 'stacks', 'queues', 'linked-lists', 'trees']
  };

  const getCompletedCount = (subId) => {
    const list = progress?.completedTopics?.[subId] || [];
    const validList = list.filter(topicId => SUBJECT_TOPICS[subId]?.includes(topicId));
    return validList.length;
  };

  // Compile subject specific metrics
  const netCompleted = getCompletedCount('computer-networks');
  const osCompleted = getCompletedCount('operating-systems');
  const dsaCompleted = getCompletedCount('data-structures');

  const netPercent = Math.round((netCompleted / CURRICULUM['computer-networks'].total) * 100) || 0;
  const osPercent = Math.round((osCompleted / CURRICULUM['operating-systems'].total) * 100) || 0;
  const dsaPercent = Math.round((dsaCompleted / CURRICULUM['data-structures'].total) * 100) || 0;

  const totalCompleted = netCompleted + osCompleted + dsaCompleted;
  const totalTopics = 16; // 6 + 5 + 5
  const overallPercent = Math.round((totalCompleted / totalTopics) * 100) || 0;

  // Chart feed arrays
  const circularSubjects = [
    { name: 'Networks', percent: netPercent },
    { name: 'Systems', percent: osPercent },
    { name: 'Structures', percent: dsaPercent }
  ];

  const barData = [
    { label: 'Networks', completed: netCompleted, total: CURRICULUM['computer-networks'].total, color: '#00f0ff' },
    { label: 'OS', completed: osCompleted, total: CURRICULUM['operating-systems'].total, color: '#bc3bf0' },
    { label: 'DSA', completed: dsaCompleted, total: CURRICULUM['data-structures'].total, color: '#3b82f6' }
  ];

  const recentActivities = progress?.activities || [];
  const streak = progress?.streak || 0;
  const activeDays = progress?.activeDays || [];

  return (
    <div className="flex flex-col gap-8">

      {/* 1. GREETING BANNER */}
      <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-transparent to-neon-cyan/10 pointer-events-none" />

        <div className="flex flex-col gap-2 relative">
          <h1 className="font-orbitron text-2xl md:text-3xl font-bold tracking-wide">
            WELCOME BACK, <span className="text-neon-cyan glow-text-cyan">{user?.name?.toUpperCase()}</span>
          </h1>
        </div>

        {/* Learning Streak Card */}
        <div className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-4 group shrink-0 w-full md:w-auto">
          <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
            <Flame className="w-6 h-6 fill-current animate-pulse" />
          </div>
          <div>
            <p className="text-[10px] text-white/40 font-orbitron uppercase tracking-wider">ACTIVE STREAK</p>
            <p className="text-lg font-bold text-white font-orbitron mt-0.5">{streak} Days In a Row</p>
          </div>
        </div>
      </div>

      {/* 2. STATS ROW OVERVIEW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="glass-card p-5 rounded-xl border border-white/5 flex items-center gap-4">
          <div className="w-11 h-11 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-neon-cyan">
            <CheckCircle className="w-5.5 h-5.5" />
          </div>
          <div>
            <p className="text-[10px] text-white/40 font-orbitron uppercase">COMPLETED TOPICS</p>
            <p className="text-lg font-bold font-orbitron text-white">{totalCompleted} / {totalTopics}</p>
          </div>
        </div>

        <div className="glass-card p-5 rounded-xl border border-white/5 flex items-center gap-4">
          <div className="w-11 h-11 rounded-lg bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center text-neon-purple">
            <BookOpen className="w-5.5 h-5.5" />
          </div>
          <div>
            <p className="text-[10px] text-white/40 font-orbitron uppercase">SUBJECT OVERVIEW</p>
            <p className="text-lg font-bold font-orbitron text-white">3 Core Fields</p>
          </div>
        </div>

        <div className="glass-card p-5 rounded-xl border border-white/5 flex items-center gap-4">
          <div className="w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <Clock className="w-5.5 h-5.5" />
          </div>
          <div>
            <p className="text-[10px] text-white/40 font-orbitron uppercase">ENGAGED DAYS</p>
            <p className="text-lg font-bold font-orbitron text-white">{activeDays.length} Active Days</p>
          </div>
        </div>

      </div>

      {/* 3. CHARTS SECTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Ring Chart */}
        <div className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col justify-between">
          <div>
            <h3 className="font-orbitron font-semibold text-sm text-white tracking-wider uppercase mb-1">Subjects</h3>
            <p className="text-[10px] text-white/40 mb-4 uppercase">Overall Percent completion</p>
          </div>
          <CircularProgressChart subjects={circularSubjects} />
        </div>

        {/* Bar Chart */}
        <div className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col justify-between">
          <div>
            <h3 className="font-orbitron font-semibold text-sm text-white tracking-wider uppercase mb-1">Overall Progress</h3>
            <p className="text-[10px] text-white/40 mb-4 uppercase">Topics completed against subject totals</p>
          </div>
          <BarChart data={barData} />
        </div>

        {/* Line Chart */}
        <div className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col justify-between">
          <div>
            <h3 className="font-orbitron font-semibold text-sm text-white tracking-wider uppercase mb-1">Active Status</h3>
            <p className="text-[10px] text-white/40 mb-4 uppercase">Learning index</p>
          </div>
          <LineChart activeDays={activeDays} />
        </div>

      </div>

      {/* 4. RECENT ACTIVITY & RESUME LEARNING */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Core subjects shortcuts */}
        <div className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <h3 className="font-orbitron font-semibold text-sm tracking-wider uppercase text-white">Academic Subjects</h3>
            <button
              onClick={() => navigate('/subjects')}
              className="text-neon-cyan hover:underline text-[10px] font-orbitron uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              All Subjects <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex flex-col gap-3.5">
            {Object.entries(CURRICULUM).map(([subId, conf]) => {
              const comp = getCompletedCount(subId);
              const perc = Math.round((comp / conf.total) * 100);
              return (
                <div
                  key={subId}
                  onClick={() => navigate(`/subjects/${subId}`)}
                  className="p-3.5 rounded-xl bg-white/2 border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 shrink-0">
                      <img src={conf.image} alt={conf.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-xs text-white/95 group-hover:text-neon-cyan transition-colors">{conf.name}</span>
                      <span className="text-[10px] text-white/40 font-orbitron">{comp} of {conf.total} nodes unlocked</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-20 bg-white/5 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${perc}%`, backgroundColor: conf.color }} />
                    </div>
                    <span className="font-orbitron text-xs font-bold" style={{ color: conf.color }}>{perc}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent logs */}
        <div className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col gap-4">
          <div className="border-b border-white/5 pb-3">
            <h3 className="font-orbitron font-semibold text-sm tracking-wider uppercase text-white">Last Studied Topics</h3>
          </div>

          {recentActivities.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center text-white/35 py-8">
              <Sparkles className="w-8 h-8 text-white/20 mb-2 animate-pulse" />
              <p className="text-xs font-orbitron uppercase tracking-wider">NO PREVIOUS DATA FOUND</p>
              <p className="text-[10px] font-sans text-white/40 mt-1 max-w-xs">Complete a topic node inside the subject roadmap.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3 max-h-[220px] overflow-y-auto pr-1">
              {recentActivities.map((act) => (
                <div key={act.id} className="flex items-center justify-between p-3 rounded-lg bg-white/2 border border-white/3 text-xs">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{
                        backgroundColor: act.subjectId === 'computer-networks' ? '#00f0ff' : act.subjectId === 'operating-systems' ? '#bc3bf0' : '#3b82f6',
                        boxShadow: `0 0 6px ${act.subjectId === 'computer-networks' ? '#00f0ff' : act.subjectId === 'operating-systems' ? '#bc3bf0' : '#3b82f6'}`
                      }}
                    />
                    <div className="truncate">
                      <p className="font-semibold text-white/90 truncate">{act.title}</p>
                      <p className="text-[10px] text-white/35 font-orbitron">{CURRICULUM[act.subjectId]?.name}</p>
                    </div>
                  </div>
                  <span className="text-[9px] text-white/40 font-orbitron shrink-0 ml-4">
                    {new Date(act.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
