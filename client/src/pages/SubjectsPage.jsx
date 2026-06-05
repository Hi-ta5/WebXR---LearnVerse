import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Network, Cpu, Binary, ChevronRight, Flame } from 'lucide-react';

export default function SubjectsPage() {
  const { progress } = useAuth();
  const navigate = useNavigate();

  const subjects = [
    {
      id: 'computer-networks',
      title: 'Computer Networks',
      icon: Network,
      image: '/cn.jpg',
      color: '#00f0ff',
      glowClass: 'glow-border-cyan',
      textGlowClass: 'glow-text-cyan',
      description: 'Analyze data streams, topologies, congestion controls, and study packet transmission behaviors across structural OSI layer modules.',
      topicsCount: 6
    },
    {
      id: 'operating-systems',
      title: 'Operating Systems',
      icon: Cpu,
      image: '/os.jpg',
      color: '#bc3bf0',
      glowClass: 'glow-border-purple',
      textGlowClass: 'glow-text-purple',
      description: 'Deep-dive into processor cores, multi-thread schedulers, CPU timelines, deadlocks, and dynamic memory allocation algorithms.',
      topicsCount: 5
    },
    {
      id: 'data-structures',
      title: 'Data Structures',
      icon: Binary,
      image: '/dsa.jpg',
      color: '#3b82f6',
      glowClass: 'glow-border-cyan', // Uses cyan accent glow
      textGlowClass: 'glow-text-cyan',
      description: 'Master structural arrays, stack, queue, dynamic linked list, and tree visually in 3D WebXR space.',
      topicsCount: 5
    }
  ];

  const SUBJECT_TOPICS = {
    'computer-networks': ['osi-model', 'physical-layer', 'network-topologies', 'tcp-udp', 'routing', 'congestion-control'],
    'operating-systems': ['deadlocks', 'threads', 'process-management', 'cpu-scheduling', 'memory-management'],
    'data-structures': ['arrays', 'stacks', 'queues', 'linked-lists', 'trees']
  };

  const getCompletedCount = (subjectId) => {
    const list = progress?.completedTopics?.[subjectId] || [];
    const validList = list.filter(topicId => SUBJECT_TOPICS[subjectId]?.includes(topicId));
    return validList.length;
  };

  const getPercentage = (subjectId, total) => {
    const comp = getCompletedCount(subjectId);
    return Math.round((comp / total) * 100) || 0;
  };

  return (
    <div className="flex flex-col gap-6">

      {/* HEADER TITLE */}
      <div className="flex flex-col gap-1">
        <h2 className="font-orbitron text-2xl font-bold tracking-wide uppercase">Academic Courses</h2>
        <p className="text-xs text-white/50 leading-relaxed font-sans max-w-xl">
          Choose a subject below to open detailed interactive roadmaps. Unlock modules sequentially from beginner to advanced.
        </p>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-neon-purple/30 via-neon-cyan/20 to-transparent my-2" />

      {/* CORE SUBJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {subjects.map((sub) => {
          const Icon = sub.icon;
          const completedCount = getCompletedCount(sub.id);
          const percentage = getPercentage(sub.id, sub.topicsCount);

          return (
            <div
              key={sub.id}
              onClick={() => navigate(`/subjects/${sub.id}`)}
              className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between gap-6 group hover:scale-[1.02] cursor-pointer"
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
                    <h3 className="font-orbitron font-semibold text-lg text-white group-hover:text-white/95 transition-colors leading-tight">
                      {sub.title}
                    </h3>
                    <div className="w-fit flex items-center gap-1.5 bg-white/2 border border-white/5 px-2.5 py-0.5 rounded-full text-[9px] font-orbitron text-white/60">
                      <span>{sub.topicsCount} NODES</span>
                    </div>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="font-sans text-xs text-white/45 leading-relaxed">
                  {sub.description}
                </p>
              </div>

              {/* PROGRESS AND ACTION BUTTON */}
              <div className="flex flex-col gap-4 mt-2">

                {/* Progress bar */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[10px] font-orbitron">
                    <span className="text-white/40 uppercase">SECTOR PROGRESS</span>
                    <span className="font-bold" style={{ color: sub.color }}>{percentage}%</span>
                  </div>

                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: sub.color,
                        boxShadow: `0 0 8px ${sub.color}60`
                      }}
                    />
                  </div>

                  <span className="text-[9px] text-white/30 font-sans mt-0.5">
                    {completedCount} of {sub.topicsCount} core roadmap segments resolved
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
