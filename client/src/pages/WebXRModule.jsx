import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import XRSceneLoader from '../components/webxr/XRSceneLoader';
import XRContainer from '../components/webxr/XRContainer';
import XRQuizSection from '../components/webxr/XRQuizSection';
import { ChevronLeft, Compass, Sparkles, BookOpen, AlertCircle, CheckCircle, RefreshCw } from 'lucide-react';

export default function WebXRModule() {
  const { subjectId, topicId } = useParams();
  const { progress, completeTopicNode } = useAuth();
  const navigate = useNavigate();

  // State to simulate spatial headset compiler loading
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const [moduleCompleted, setModuleCompleted] = useState(false);

  // 1. CURRICULUM RICH CONTEXTS
  const DATA_MATRIX = {
    'computer-networks': {
      'osi-model': {
        title: 'OSI Model Layers',
        subject: 'Computer Networks',
        details: [
          'The 7-Layer Open Systems Interconnection model outlines standard packet encapsulation.',
          'Data Link Layer (Layer 2) groups frames and maps MAC address coordinates.',
          'Network Layer (Layer 3) handles IP address routing across nodes.'
        ]
      },
      'physical-layer': {
        title: 'Physical Line Encoding Lab',
        subject: 'Computer Networks',
        details: [
          'Line encoding translates binary data streams into digital electrical signals matching transmission mediums, as per IIT Roorkee Virtual Lab Experiment 6.',
          'Select NRZ-L (level high/low), Polar RZ (returns to zero volts mid-bit), Manchester (transitions mid-bit), or Bipolar AMI (alternates mark polarity) in the simulation panel.',
          'Enter a custom 8-bit binary code in the transmitter console to dynamically graph voltage timelines (+V, 0V, -V) and watch pulse waves travel along the cable.'
        ]
      },
      'network-topologies': {
        title: 'Different Network Topologies',
        subject: 'Computer Networks',
        details: [
          'Network topologies define how links and nodes are geometrically connected, matching IIT Roorkee Virtual Lab Experiment 7.',
          'Compare Star (central hub spokes), Bus (shared backbone coaxial trunk), Ring (one-directional loops), and Mesh (fully redundant point-to-point links).',
          'Select a sender and receiver host in the active topology grid, click Transmit, and follow packet propagation pathways visually.'
        ]
      }
    },
    'operating-systems': {
      'threads': {
        title: 'Multi-Threads & Contexts',
        subject: 'Operating Systems',
        details: [
          'Threads share memory spaces (heaps) inside parent processes but run independent stacks.',
          'Critical sections require mutex locks to avoid race conditions.',
          'Context switches between threads are faster than process context switches.'
        ]
      },
      'process-management': {
        title: 'Process Management & PCB',
        subject: 'Operating Systems',
        details: [
          'A process is an active program thread in system execution.',
          'Processes are controlled by Process Control Blocks (PCBs) holding state registers.',
          'The OS handles process context switching when swapping cores.'
        ]
      },
      'deadlocks': {
        title: 'Deadlocks & Resource Allocation',
        subject: 'Operating Systems',
        details: [
          'A deadlock occurs when a set of processes are blocked because each process is holding a resource and waiting for another resource held by some other process.',
          'The four necessary Coffman conditions for a deadlock are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.',
          'Deadlock handling strategies include Prevention (Havender\'s ordering rules), Avoidance (Banker\'s algorithm), and Detection and Recovery (terminating/killing processes to break loops).'
        ]
      },
      'cpu-scheduling': {
        title: 'CPU Scheduling Algorithms',
        subject: 'Operating Systems',
        details: [
          'FCFS queues processes sequentially, leading to high wait times (convoy effect).',
          'SJF processes shortest durations next, which can cause process starvation.',
          'Round Robin limits execution slots to CPU quantums, swapping threads steadily.'
        ]
      },
      'memory-management': {
        title: 'Memory Management Systems',
        subject: 'Operating Systems',
        details: [
          'Memory management maps process virtual addresses to physical RAM allocations.',
          'Paging divides virtual memory into pages and physical memory into frames, managing translation via page tables.',
          'Page replacement algorithms like FIFO, LRU, and Optimal resolve page faults to balance performance.'
        ]
      }
    },
    'data-structures': {
      'arrays': {
        title: 'Contiguous Array Lab',
        subject: 'Data Structures',
        details: [
          'Arrays allocate data elements in sequential contiguous memory spaces.',
          'Allows immediate index-based offsets access executing at O(1) runtime complexity.',
          'Inserting or removing intermediate elements requires cell shifting at O(N) cost.'
        ]
      },
      'stacks': {
        title: 'LIFO Stack Register',
        subject: 'Data Structures',
        details: [
          'Stacks organize elements via LIFO (Last-In First-Out) sequences.',
          'Supports dynamic Push (insert on top), Pop (remove from top), and Peek (read top).',
          'Crucial for call recursion control, nested bracket parses, and backtracking routes.'
        ]
      },
      'queues': {
        title: 'FIFO Queue Pipeline',
        subject: 'Data Structures',
        details: [
          'Queues enforce structural FIFO (First-In First-Out) transaction lanes.',
          'Data enqueues onto the Rear pointer, and dequeues from the Front portal.',
          'Drives multi-thread pipelines, priority process pools, and network stream buffers.'
        ]
      },
      'linked-lists': {
        title: 'Dynamic Linked Nodes',
        subject: 'Data Structures',
        details: [
          'Linked lists join separate dynamic nodes in memory using pointer address links.',
          'Supports Singly-linked forward vectors, Doubly bidirectional paths, or Circular loop chains.',
          'Allows dynamic node additions or deletions at O(1) cost by altering pointer references.'
        ]
      },
      'trees': {
        title: 'Hierarchical Tree Visualizer',
        subject: 'Data Structures',
        details: [
          'Trees store hierarchical data branches starting at a single Root node.',
          'Includes Binary Search Trees (BST), AVL balanced heights, and binary Heap orderings.',
          'Optimizes search, insertion, and deletion paths to highly efficient O(log N) runtime.'
        ]
      }
    }
  };

  const activeTopic = DATA_MATRIX[subjectId]?.[topicId] || {
    title: 'Visual Core Simulator',
    subject: 'Academic Field',
    details: [
      'Interactive modules map theories onto concept visualizers.',
      'Calibrate standard parameters to alter simulations.',
      'Pass the concepts verification check to unlock upcoming sectors.'
    ]
  };

  const handlePassQuiz = async () => {
    // Call Context to update API backend progress
    await completeTopicNode(subjectId, topicId, activeTopic.title);
    setModuleCompleted(true);
  };

  const handleResumeRoadmap = () => {
    navigate(`/subjects/${subjectId}`);
  };

  return (
    <div className="flex flex-col gap-6">

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
            <h2 className="font-orbitron text-xl font-bold tracking-wide uppercase mt-0.5">{activeTopic.title}</h2>
          </div>
          <span className="text-[9px] font-mono text-white/30 tracking-widest bg-white/2 border border-white/5 px-2.5 py-1 rounded">
            PORTAL_ID: {topicId?.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-transparent" />

      {/* RENDER IN-PORTAL SIMULATORS OR LOADER PORTAL */}
      {!sceneLoaded ? (
        <div className="max-w-xl mx-auto w-full mt-4">
          <XRSceneLoader onComplete={() => setSceneLoaded(true)} />
        </div>
      ) : moduleCompleted ? (
        // --- VICTORY CONGRATULATORY CARD ---
        <div className="max-w-xl mx-auto w-full mt-4 glass-panel p-8 rounded-2xl border border-green-500/25 flex flex-col items-center justify-center text-center gap-6 animate-fade-in relative overflow-hidden">
          <div className="absolute inset-0 bg-green-500/5 pointer-events-none" />

          <div className="w-16 h-16 rounded-full bg-green-500/10 border-2 border-green-500 text-green-400 flex items-center justify-center animate-pulse">
            <CheckCircle className="w-8 h-8 fill-current" />
          </div>

          <div className="flex flex-col gap-2 relative z-10">
            <div className="flex items-center justify-center gap-2 text-neon-cyan text-[10px] font-orbitron tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COGNITIVE MATRIX SYNCED</span>
            </div>
            <h3 className="font-orbitron font-bold text-xl text-white uppercase tracking-wide">
              NODE COMPLETED SUCCESSFULLY!
            </h3>
            <p className="text-xs text-white/55 leading-relaxed font-sans max-w-sm">
              Your concept calibration score is registered on the database. The upcoming subject segment is now unlocked.
            </p>
          </div>

          <button
            onClick={handleResumeRoadmap}
            className="glow-btn-cyan text-white px-8 py-3.5 rounded-xl font-orbitron font-bold tracking-widest text-xs flex items-center gap-1.5 cursor-pointer mt-2"
          >
            <span>RESUME SUBJECT ROADMAP</span>
            <ChevronLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>
      ) : (
        // --- IN-FLIGHT SIMULATOR COCKPIT WORKSPACE ---
        <div className="flex flex-col gap-6 w-full">

          {/* TOP SECTION: MASSIVE XR SIMULATOR */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center justify-between px-1">
              <span className="text-[10px] text-white/40 font-orbitron uppercase tracking-widest flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-neon-cyan animate-spin-slow" />
                Active Simulation Port
              </span>
              <span className="text-[10px] text-neon-cyan font-orbitron tracking-wider">FULL SCREEN SPACE VIEW</span>
            </div>
            <XRContainer subjectId={subjectId} topicId={topicId} />
          </div>

          {/* LOWER SECTION: SPLIT CONCEPT & EVALUATION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

            {/* LEFT CONTAINER: CONCEPTUAL RESOURCES */}
            <div className="glass-panel p-5 rounded-2xl border border-white/5 flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-white/5 pb-2.5">
                <BookOpen className="w-4.5 h-4.5 text-neon-cyan" />
                <h4 className="font-orbitron font-semibold text-xs text-white uppercase tracking-wider">Concept details</h4>
              </div>

              <div className="flex flex-col gap-3 font-sans text-xs text-white/60 leading-relaxed">
                {activeTopic.details.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-1.5 shrink-0" style={{ boxShadow: '0 0 6px #00f0ff' }} />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CONTAINER: CONCEPT CHECK QUIZ */}
            <XRQuizSection topicId={topicId} subjectId={subjectId} onPassComplete={handlePassQuiz} />

          </div>

        </div>
      )}

    </div>
  );
}
