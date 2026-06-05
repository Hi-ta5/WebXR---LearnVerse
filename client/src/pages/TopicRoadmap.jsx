import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Unlock, CheckCircle, ChevronLeft, Play, AlertCircle } from 'lucide-react';

export default function TopicRoadmap() {
  const { subjectId } = useParams();
  const { progress } = useAuth();
  const navigate = useNavigate();

  // 1. TOPICS CONFIG
  const SUBJECTS_CONFIG = {
    'computer-networks': {
      title: 'Computer Networks',
      description: 'Routing protocols, layered architectures, packet routing systems, and congestion avoidance theories.',
      color: '#00f0ff',
      topics: [
        { id: 'osi-model', title: 'OSI Model', level: 'Beginner', desc: 'Deep-dive into the 7-layer architecture, encapsulation, and packet formats.' },
        { id: 'physical-layer', title: 'Physical Layer', level: 'Intermediate', desc: 'Encoding methods, spatial line configurations, modulations, and media.' },
        { id: 'network-topologies', title: 'Network Topologies', level: 'Intermediate', desc: 'Analyzing Star, Ring, Mesh, and Bus grid structures and failures.' },
        { id: 'tcp-udp', title: 'TCP/UDP', level: 'Advanced', desc: 'Transmission protocols, reliability controls, handshakes, and port channels.' },
        { id: 'routing', title: 'Routing', level: 'Advanced', desc: 'Packet routing algorithms, Dijkstra, distance vectors, and autonomous grids.' },
        { id: 'congestion-control', title: 'Congestion Control', level: 'Expert', desc: 'Leaky bucket, token systems, chokes, and algorithmic buffer flows.' }
      ]
    },
    'operating-systems': {
      title: 'Operating Systems',
      description: 'System calls, hardware schedulers, deadlocks, virtualization, and memory allocation parameters.',
      color: '#bc3bf0',
      topics: [
        { id: 'deadlocks', title: 'Deadlocks', level: 'Beginner', desc: 'Banker\'s algorithm, resource allocations, avoidance, and recovery loops.' },
        { id: 'threads', title: 'Threads', level: 'Beginner', desc: 'Multi-threading models, race conditions, synchronization, and mutexes.' },
        { id: 'process-management', title: 'Process Management', level: 'Intermediate', desc: 'Process states, contexts, control blocks, PCB schemas, and fork engines.' },
        { id: 'cpu-scheduling', title: 'CPU Scheduling', level: 'Intermediate', desc: 'First-Come First-Served, Shortest-Job-First, Round Robin timeline analysis.' },
        { id: 'memory-management', title: 'Memory Management', level: 'Advanced', desc: 'Virtual memory systems, paging page faults, segmentation, and page swaps.' }
      ]
    },
    'data-structures': {
      title: 'Data Structures',
      description: 'Master structural contiguous arrays, stacks, queues, dynamic linked lists, and tree hierarchy visuals.',
      color: '#3b82f6',
      topics: [
        { id: 'arrays', title: 'Array', level: 'Beginner', desc: 'Contiguous allocations, address mapping offsets, resizing arrays, and access speeds.' },
        { id: 'stacks', title: 'Stack', level: 'Intermediate', desc: 'Last-In First-Out operations, expression parsing, recursion stacks, and memory registers.' },
        { id: 'queues', title: 'Queue', level: 'Intermediate', desc: 'First-In First-Out pathways, buffer queues, priority systems, and ring buffers.' },
        { id: 'linked-lists', title: 'Linked List', level: 'Advanced', desc: 'Dynamic nodes, pointer linkages, singly, doubly, and circular chain lists.' },
        { id: 'trees', title: 'Tree', level: 'Advanced', desc: 'Hierarchical node clusters, Binary Search Trees, balance factors, traversals.' }
      ]
    }
  };

  const currentSubject = SUBJECTS_CONFIG[subjectId];

  if (!currentSubject) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 gap-4 min-h-[400px]">
        <AlertCircle className="w-12 h-12 text-red-400 animate-bounce" />
        <h3 className="font-orbitron text-lg font-bold text-white">INVALID COORDINATES</h3>
        <p className="text-xs text-white/50">The requested subject roadmap is located outside mapped galactic sectors.</p>
        <Link to="/subjects" className="text-neon-cyan hover:underline text-xs font-orbitron">RETURN TO SUBJECT CHASSIS</Link>
      </div>
    );
  }

  const completedList = (progress?.completedTopics?.[subjectId] || []).filter(topicId => 
    currentSubject.topics.some(t => t.id === topicId)
  );

  // Determine if a specific topic index is unlocked
  const isNodeUnlocked = (index) => {
    if (index === 0) return true; // First topic is always unlocked
    const previousTopicId = currentSubject.topics[index - 1].id;
    return completedList.includes(previousTopicId);
  };

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
            <span>Back</span>
          </button>

          <div className="flex items-center gap-4 mt-2">
            <div className="w-12 h-12 rounded-xl border border-white/10 overflow-hidden shrink-0" style={{ borderColor: currentSubject.color + '40' }}>
              <img src={subjectId === 'computer-networks' ? '/cn.jpg' : subjectId === 'operating-systems' ? '/os.jpg' : '/dsa.jpg'} alt={currentSubject.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <h2 className="font-orbitron text-2xl font-bold tracking-wide uppercase">
                {currentSubject.title} Roadmap
              </h2>
              <p className="text-xs text-white/55 leading-relaxed font-sans max-w-2xl">
                {currentSubject.description} Click an unlocked node to enter the visual simulated portal module.
              </p>
            </div>
          </div>
        </div>

        {/* COMPLETED COUNT CHIP */}
        <div className="bg-white/2 border border-white/5 px-4 py-2.5 rounded-xl text-xs font-orbitron flex flex-col gap-1 items-end shrink-0 w-full md:w-auto">
          <span className="text-white/45 text-[9px] uppercase tracking-widest">ROADMAP PROGRESSION</span>
          <span className="font-bold" style={{ color: currentSubject.color }}>
            {completedList.length} of {currentSubject.topics.length} Nodes Resolved
          </span>
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
            const isUnlocked = isNodeUnlocked(index);
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
                    className={`glass-card p-5 rounded-2xl border transition-all duration-300 relative group flex flex-col gap-3 ${isUnlocked
                      ? 'cursor-pointer hover:scale-[1.03] border-white/10 hover:border-neon-cyan/30'
                      : 'opacity-40 cursor-not-allowed border-white/5'
                      }`}
                    style={{
                      boxShadow: isCompleted ? `0 0 20px ${currentSubject.color}08` : ''
                    }}
                  >
                    {/* Glowing side accent line for unlocked nodes */}
                    {isUnlocked && (
                      <div className="absolute left-0 top-4 bottom-4 w-1 rounded-r-lg" style={{ backgroundColor: currentSubject.color }} />
                    )}

                    {/* TOP CAP */}
                    <div className="flex items-center justify-between text-[10px] font-orbitron">
                      <span className="text-white/40 uppercase font-medium">{topic.level}</span>
                      {isCompleted ? (
                        <span className="flex items-center gap-1 font-bold text-green-400">
                          <CheckCircle className="w-3.5 h-3.5 fill-current" />
                          RESOLVED
                        </span>
                      ) : isUnlocked ? (
                        <span className="flex items-center gap-1 font-bold text-neon-cyan animate-pulse">
                          <Unlock className="w-3.5 h-3.5" />
                          UNLOCKED
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 font-bold text-white/30">
                          <Lock className="w-3.5 h-3.5" />
                          LOCKED
                        </span>
                      )}
                    </div>

                    {/* TITLE */}
                    <div className="flex flex-col gap-1">
                      <h4 className="font-orbitron font-semibold text-md text-white group-hover:text-neon-cyan transition-colors">
                        {index + 1}. {topic.title}
                      </h4>
                      <p className="font-sans text-xs text-white/45 leading-relaxed">
                        {topic.desc}
                      </p>
                    </div>

                    {/* LAUNCH BUTTON (if unlocked) */}
                    {isUnlocked && (
                      <button className="self-end px-3 py-1.5 rounded-lg bg-white/3 border border-white/5 group-hover:border-neon-cyan/30 group-hover:bg-neon-cyan/10 text-white group-hover:text-neon-cyan transition-all text-[10px] font-orbitron uppercase tracking-wider flex items-center gap-1 mt-1 cursor-pointer">
                        <span>Launch Simulation</span>
                        <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                      </button>
                    )}

                  </div>
                </div>

                {/* 2. CHRONO CONNECTOR BULB */}
                <div className="relative flex items-center justify-center w-12 shrink-0 h-12">
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 font-orbitron font-bold text-xs ${isCompleted
                      ? 'bg-green-500/10 border-green-500 text-green-400 shadow-[0_0_12px_rgba(34,197,94,0.3)]'
                      : isUnlocked
                        ? 'bg-space-black border-neon-cyan text-neon-cyan shadow-[0_0_12px_rgba(0,240,255,0.2)] animate-pulse'
                        : 'bg-[#02000a] border-white/10 text-white/30'
                      }`}
                  >
                    {isCompleted ? '✓' : index + 1}
                  </div>
                </div>

                {/* 3. SYMMETRIC BUFFER SPACE (Hidden on mobile, maintains center on desktop) */}
                <div className="hidden md:block w-[45%]" />

              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
