import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, ArrowRight, RefreshCw, Trophy, Sparkles } from 'lucide-react';

export default function XRQuizSection({ topicId, subjectId, onPassComplete }) {
  // 1. DYNAMIC DATA BANK FOR QUIZZES
  const QUIZ_DATA = {
    'computer-networks': {
      'osi-model': {
        question: 'Which OSI layer handles route determination, logical addressing (IP), and packet forwarding?',
        options: [
          'Layer 4 - Transport Layer',
          'Layer 3 - Network Layer',
          'Layer 2 - Data Link Layer',
          'Layer 7 - Application Layer'
        ],
        answerIdx: 1,
        explanation: 'Layer 3, the Network Layer, routes packets between physical structures using logical addresses (IPs) and routing algorithms.'
      },
      'physical-layer': {
        question: 'What is the primary function of physical layer encoding schemes like Manchester modulation?',
        options: [
          'To establish a secure SSL socket session.',
          'To encapsulate IP headers into frame segments.',
          'To sync receiver clocks by placing electrical transition steps inside each bit slot.',
          'To detect deadlocks in multi-thread CPU registers.'
        ],
        answerIdx: 2,
        explanation: 'Manchester encoding places transitions at the midpoint of each bit period to ensure steady synchronization of transmitter and receiver clocks.'
      },
      'network-topologies': {
        question: 'Which network topology features maximum redundancy and structural resilience at the cost of high cable complexity?',
        options: [
          'Star Topology',
          'Bus Topology',
          'Mesh Topology',
          'Ring Topology'
        ],
        answerIdx: 2,
        explanation: 'In a Mesh topology, every node connects directly to every other node, providing maximum redundancy but requiring O(N²) physical cables.'
      },
      'tcp-udp': {
        question: 'In Go-Back-N (GBN) ARQ Flow Control, if Frame 2 in a sliding window of 4 (F0, F1, F2, F3) is lost during transmission, how does the system recover?',
        options: [
          'The receiver stores F3 and sends a NACK, prompting the sender to retransmit only the lost Frame 2.',
          'The sender times out on Frame 2 and must retransmit Frame 2 and all subsequent frames in the window (F2 and F3).',
          'The sender ignores the drop and continues transmitting the next window since flow control handles collision recovery automatically.',
          'The receiver generates a protocol bridge that forces all copper line clocks to resynchronize.'
        ],
        answerIdx: 1,
        explanation: 'In Go-Back-N, the receiver discards all out-of-order frames after a lost frame (F2). Upon timeout, the sender must retransmit the lost frame and all subsequent frames in the active sliding window (F2 and F3).'
      },
      'routing': {
        question: 'What is a primary distinction between Static Routing and Dynamic Routing protocols?',
        options: [
          'Static routing hardcodes path tables manually, while Dynamic routing computes real-time optimal paths using algorithms like Dijkstra\'s shortest path.',
          'Dynamic routing operates solely at the physical hardware layer, whereas Static routing is a transport layer protocol.',
          'Static routing requires guided glass fiber cables, whereas Dynamic routing is built exclusively for wireless broadcasts.',
          'Both require manual updates, but Dynamic routing runs exclusively on local host collision domains.'
        ],
        answerIdx: 0,
        explanation: 'Static routing involves manually entering routes into tables, which cannot adapt to node changes. Dynamic routing automatically computes optimal routes dynamically (e.g., using Dijkstra\'s link-state cost matrix) when topologies or costs shift.'
      }
    },
    'operating-systems': {
      'threads': {
        question: 'What memory resource is uniquely allocated to individual threads rather than shared globally within a process?',
        options: [
          'Global code segments',
          'Heap memory space',
          'System files descriptors',
          'Execution stack and program counter registers'
        ],
        answerIdx: 3,
        explanation: 'Threads share a process\'s heap, code, and file descriptors but hold independent stack space and program counters to track execution paths.'
      },
      'process-management': {
        question: 'What is stored inside a Process Control Block (PCB)?',
        options: [
          'HTML frames and CSS layout models.',
          'Only global variable declarations.',
          'System register states, CPU scheduling indexes, and page mapping structures.',
          'Headset telemetry and spatial coordinates.'
        ],
        answerIdx: 2,
        explanation: 'A PCB contains critical kernel descriptors: PID, program counter, register snapshots, CPU schedules, and memory map pointers.'
      },
      'deadlocks': {
        question: 'Which of the following is NOT one of the four necessary conditions (Coffman conditions) for a circular deadlock to occur?',
        options: [
          'Mutual Exclusion - Only one process can use a resource at a time.',
          'Hold and Wait - Processes hold resources while waiting for others.',
          'Preemption - The operating system can forcibly take resources back from holding processes.',
          'Circular Wait - A closed loop of processes waiting for each other\'s resources exists.'
        ],
        answerIdx: 2,
        explanation: 'No Preemption is a necessary condition for deadlocks. If the OS could forcibly preempt (take back) resources, deadlocks could easily be resolved. Thus, Preemption is NOT a condition that allows a deadlock to occur.'
      },
      'cpu-scheduling': {
        question: 'Which scheduling algorithm is susceptible to "starvation" for long-running CPU-bound processes?',
        options: [
          'Round Robin (RR)',
          'Shortest Job First (SJF)',
          'First-Come First-Served (FCFS)',
          'Multilevel Queue with equal priority'
        ],
        answerIdx: 1,
        explanation: 'Shortest Job First (SJF) schedules the shortest job next, which can starve longer processes if shorter processes keep arriving.'
      },
      'memory-management': {
        question: 'What is the purpose of the Translation Lookaside Buffer (TLB) in virtual memory page tables?',
        options: [
          'To swap process heaps from physical RAM to local hard disks.',
          'To cache virtual-to-physical frame address mappings in fast hardware, bypassing two-step RAM lookups.',
          'To detect infinite loops in thread scheduling contexts.',
          'To compile machine instructions into spatial network frames.'
        ],
        answerIdx: 1,
        explanation: 'The TLB is a high-speed hardware cache that stores recent virtual-to-physical address translations. This avoids having to look up mappings in the page table stored in main memory twice for every access, speeding up address translations.'
      }
    },
    'data-structures': {
      'arrays': {
        question: 'Which of the following properties guarantees O(1) constant time random access for elements in an array structure?',
        options: [
          'The elements are linked sequentially using dynamic heap-allocated pointer chains.',
          'The elements are stored in a contiguous block of memory, allowing direct index address offsets calculations.',
          'The elements are dynamically sorted in ascending order during each access operation.',
          'The elements are stored inside high-fidelity key-value hash slots.'
        ],
        answerIdx: 1,
        explanation: 'Arrays allocate sequential, contiguous memory locations. Because the memory is contiguous, the computer can instantly calculate the direct memory address of any element at a given index in O(1) constant time using: Address = Base Address + Index * Element Size.'
      },
      'stacks': {
        question: 'Which memory organization protocol and structural behavior does a call stack or recursive register record?',
        options: [
          'FIFO (First-In First-Out) where the earliest caller finishes execution first.',
          'LIFO (Last-In First-Out) where the most recently pushed frame is popped and resolved first.',
          'Dynamic Priority Allocation where the fastest executing thread is dispatched first.',
          'Hierarchical Branching where all caller frames execute in parallel.'
        ],
        answerIdx: 1,
        explanation: 'A Stack operates strictly on LIFO principles. In runtime environments, calling a function pushes its activation frame onto the top of the call stack, and completing a function pops it off, ensuring the last active sub-routine finishes before returning to its parent caller.'
      },
      'queues': {
        question: 'In a Circular Queue of size K, how does the enqueue pointer wrap around to index 0 when it exceeds the array boundaries?',
        options: [
          'It triggers a dynamic array resizing routine that doubles the memory capacity.',
          'It uses a bitwise subtraction offset on the base memory pointer.',
          'It uses the modulo operator: (rear + 1) % K to cycle back to the first index.',
          'It clears all existing active queue elements to reset the pointers.'
        ],
        answerIdx: 2,
        explanation: 'Circular queues use the modulo arithmetic formula (rear + 1) % K to dynamically wrap the rear pointer back to 0 once it reaches the end of the array, preventing memory wastage and enabling efficient reuse of empty slots.'
      },
      'linked-lists': {
        question: 'What is the principal performance advantage of a Doubly Linked List over a Singly Linked List during deletion operations?',
        options: [
          'It requires half the memory storage footprint since pointer references are compressed.',
          'It enables O(1) deletion of a node when given only a direct reference to that node, without traversing from the head.',
          'It allows O(log N) binary search traversal across non-contiguous memory segments.',
          'It automatically maintains sorted node orders without requiring comparison operations.'
        ],
        answerIdx: 1,
        explanation: 'In a Singly Linked List, deleting a node requires finding its predecessor, which takes O(N) traversal. A Doubly Linked List node stores both next and prev pointers, allowing the node to be unlinked in O(1) constant time without needing a full traversal from the head.'
      },
      'trees': {
        question: 'Why does an AVL Tree remain more computationally optimal for searching than a skewed Binary Search Tree (BST) under worst-case insertion sequences?',
        options: [
          'An AVL tree acts as a contiguous array to keep access paths direct.',
          'An AVL tree automatically converts into a LIFO stack to speed up searches.',
          'An AVL tree strictly maintains its balance factor between -1 and 1, keeping height bounded to O(log N).',
          'An AVL tree maps nodes using unique cryptographic hash indices.'
        ],
        answerIdx: 2,
        explanation: 'An AVL tree is a self-balancing BST. By enforcing that the height difference of any node\'s subtrees (balance factor) is at most 1, it performs rotations to guarantee the tree height stays O(log N), avoiding worst-case linear O(N) degenerations of skewed BSTs.'
      }
    }
  };

  // Fallback default quiz if topic is not custom matched
  const currentQuiz = QUIZ_DATA[subjectId]?.[topicId] || {
    question: 'How do visual containers improve engineering comprehension?',
    options: [
      'By offering dynamic diagrams that show real-time process flows.',
      'By replacing coding exercises completely.',
      'By compiling heavy binary libraries locally.',
      'They do not help with learning.'
    ],
    answerIdx: 0,
    explanation: 'Interactive simulators allow visual context mapping, turning abstract theories into memorable conceptual models.'
  };

  const [selectedIdx, setSelectedIdx] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [passed, setPassed] = useState(false);

  const handleSelect = (idx) => {
    if (submitted) return;
    setSelectedIdx(idx);
  };

  const handleSubmit = () => {
    if (selectedIdx === null || submitted) return;
    setSubmitted(true);
    if (selectedIdx === currentQuiz.answerIdx) {
      setPassed(true);
    }
  };

  const handleReset = () => {
    setSelectedIdx(null);
    setSubmitted(false);
    setPassed(false);
  };

  return (
    <div className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col gap-5">
      <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/5 to-transparent pointer-events-none" />

      {/* HEADER SECTION */}
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-neon-purple animate-pulse" />
          <h3 className="font-orbitron font-semibold text-sm tracking-wider uppercase text-white">Spatial Evaluation Card</h3>
        </div>
        <span className="text-[9px] font-orbitron bg-neon-purple/10 border border-neon-purple/20 px-2 py-0.5 rounded text-neon-purple">
          CONCEPT CHECK
        </span>
      </div>

      {!submitted ? (
        // --- IN-FLIGHT QUESTIONS ---
        <div className="flex flex-col gap-4">
          <p className="font-sans text-sm text-white/90 font-medium leading-relaxed">
            {currentQuiz.question}
          </p>

          <div className="flex flex-col gap-3">
            {currentQuiz.options.map((opt, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-3.5 rounded-xl border text-xs font-sans transition-all cursor-pointer select-none flex items-center gap-3 ${
                  selectedIdx === idx
                    ? 'bg-neon-purple/10 border-neon-purple text-white shadow-[0_0_12px_rgba(188,59,240,0.15)]'
                    : 'bg-white/2 border-white/5 text-white/60 hover:border-white/10 hover:text-white/80'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                    selectedIdx === idx ? 'border-neon-purple bg-neon-purple/20' : 'border-white/20'
                  }`}
                >
                  {selectedIdx === idx && <div className="w-1.5 h-1.5 rounded-full bg-neon-purple" />}
                </div>
                <span>{opt}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            disabled={selectedIdx === null}
            className="glow-btn-purple text-white py-3 rounded-xl font-orbitron font-bold tracking-widest text-xs mt-2 flex items-center justify-center gap-2 disabled:opacity-40 cursor-pointer"
          >
            <span>SUBMIT SECTOR SIGNAL</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        // --- SCORE & FEEDBACK RESPONSE ---
        <div className="flex flex-col gap-5 animate-fade-in">
          
          <div className="flex items-center gap-4 p-4 rounded-xl border bg-white/2 border-white/5">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
              passed ? 'bg-green-500/10 text-green-400 border border-green-500/25' : 'bg-red-500/10 text-red-400 border border-red-500/25'
            }`}>
              {passed ? <Trophy className="w-6 h-6 animate-bounce" /> : <AlertTriangle className="w-6 h-6 animate-pulse" />}
            </div>
            <div>
              <p className="font-orbitron font-bold text-xs uppercase text-white/95">
                {passed ? 'CALIBRATION METRICS RESOLVED' : 'COORDINATE FREQUENCY ERROR'}
              </p>
              <p className="text-[10px] text-white/40 mt-0.5">
                {passed ? 'Your concepts sync seamlessly with active parameters.' : 'Your telemetry indicates partial understanding. Sync again.'}
              </p>
            </div>
          </div>

          {/* QUESTION SUMMARY */}
          <div className="flex flex-col gap-2.5">
            <p className="text-xs text-white/50 font-orbitron uppercase">Correct Answer Coordinates:</p>
            <div className="p-3.5 rounded-xl bg-green-500/5 border border-green-500/10 text-xs text-green-300 font-sans">
              {currentQuiz.options[currentQuiz.answerIdx]}
            </div>
            
            <p className="text-xs text-white/50 font-orbitron uppercase mt-1">Stellar Explanation:</p>
            <p className="text-xs text-white/60 leading-relaxed bg-white/2 border border-white/3 p-3.5 rounded-xl font-sans">
              {currentQuiz.explanation}
            </p>
          </div>

          {/* DOCK ACTION TRIGGERS */}
          {passed ? (
            <button
              onClick={onPassComplete}
              className="glow-btn-cyan text-white py-3 rounded-xl font-orbitron font-bold tracking-widest text-xs mt-2 flex items-center justify-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-4.5 h-4.5" />
              <span>MARK NODE COMPLETE & SYNC STATS</span>
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="glow-btn-purple text-white py-3 rounded-xl font-orbitron font-bold tracking-widest text-xs mt-2 flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-4.5 h-4.5" />
              <span>RE-RUN COGNITIVE CALIBRATION</span>
            </button>
          )}

        </div>
      )}

    </div>
  );
}
