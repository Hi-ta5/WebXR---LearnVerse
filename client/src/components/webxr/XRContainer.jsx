import React, { lazy, Suspense } from 'react';
import { Compass, Maximize2, Monitor, Layers } from 'lucide-react';
import XRSceneNarrator from './XRSceneNarrator';

// Lazy load the high-fidelity 3D modular Three.js virtual lab scenes for optimized bundle loading
const PhysicalLayerScene = lazy(() => import('../../webxr/cn/PhysicalLayerScene'));
const TopologyScene = lazy(() => import('../../webxr/cn/TopologyScene'));
const TCPUDPScene = lazy(() => import('../../webxr/cn/TCPUDPScene'));
const ProcessScene = lazy(() => import('../../webxr/os/ProcessScene'));
const SchedulingScene = lazy(() => import('../../webxr/os/SchedulingScene'));
const DataStructureScene = lazy(() => import('../../webxr/dsa/DataStructureScene'));

// Scene metadata — title, description, color theme shown in the header bar above each 3D model
const SCENE_META = {
  'computer-networks': {
    'osi-model':           { title: 'OSI Model — 7-Layer Stack Simulator',         desc: 'Watch packets encapsulate & decapsulate across all 7 OSI layers in real-time', color: '#00f2fe', icon: '3D' },
    'physical-layer':      { title: 'Physical Layer — Signal Encoding Lab',         desc: 'Visualize NRZ, Manchester & 4B/5B line encoding on physical transmission media', color: '#00f2fe', icon: '3D' },
    'network-topologies':  { title: 'Network Topologies — Star / Bus / Ring / Mesh', desc: 'Explore how devices are physically and logically connected in different topologies', color: '#00f2fe', icon: '3D' },
    'tcp-udp':             { title: 'TCP vs UDP — Transport Layer Protocols',        desc: 'Compare connection-oriented TCP handshakes with connectionless UDP datagrams', color: '#00f2fe', icon: '3D' },
    'routing':             { title: 'Routing Algorithms — Path Selection Simulator', desc: 'See how routers determine optimal paths using Dijkstra, RIP & OSPF algorithms', color: '#00f2fe', icon: '3D' },
    'congestion-control':  { title: 'Congestion Control — Flow & Rate Management',  desc: 'Visualize TCP slow start, congestion avoidance and AIMD rate control mechanisms', color: '#00f2fe', icon: '3D' },
  },
  'operating-systems': {
    'threads':             { title: 'Multi-Threading — Concurrent Execution Model', desc: 'See how threads share process resources and execute concurrently on CPU cores', color: '#a78bfa', icon: '3D' },
    'process-management':  { title: 'Process Management — PCB & Lifecycle',         desc: 'Explore process states, PCB structure and context switching between processes', color: '#a78bfa', icon: '3D' },
    'deadlocks':           { title: 'Deadlocks — Resource Allocation Graph',        desc: 'Detect and resolve circular wait conditions in resource allocation scenarios', color: '#a78bfa', icon: '3D' },
    'cpu-scheduling':      { title: 'CPU Scheduling — Algorithm Comparator',        desc: 'Compare FCFS, SJF, Round Robin and Priority scheduling with Gantt charts', color: '#a78bfa', icon: '3D' },
    'memory-management':   { title: 'Memory Management — Virtual Memory & Paging',  desc: 'Visualize page tables, TLB hits/misses and segmentation in virtual memory', color: '#a78bfa', icon: '3D' },
  },
  'data-structures': {
    'arrays':        { title: 'Arrays — Contiguous Memory Storage',    desc: 'Visualize index-based access, insertion and deletion in contiguous memory', color: '#34d399', icon: '3D' },
    'stacks':        { title: 'Stack — LIFO Push & Pop Operations',    desc: 'See LIFO order in action with push, pop, peek and overflow/underflow cases', color: '#34d399', icon: '3D' },
    'queues':        { title: 'Queue — FIFO Enqueue & Dequeue',        desc: 'Watch FIFO ordering with enqueue/dequeue operations and circular queue logic', color: '#34d399', icon: '3D' },
    'linked-lists':  { title: 'Linked List — Dynamic Node Chaining',   desc: 'Traverse, insert and delete nodes in singly and doubly linked list structures', color: '#34d399', icon: '3D' },
    'trees':         { title: 'Binary Tree — Hierarchical Traversal',  desc: 'Explore in-order, pre-order, post-order traversal and BST search/insert/delete', color: '#34d399', icon: '3D' },
  },
  'nlp': {
    'nlp-intro':           { title: 'NLP Pipeline — End-to-End Overview',          desc: 'Walk through the full NLP pipeline from raw text to structured model output', color: '#f59e0b', icon: '3D' },
    'tokenization':        { title: 'Tokenization — Text Segmentation Techniques', desc: 'Compare word, character and subword (BPE) tokenization strategies side-by-side', color: '#f59e0b', icon: '3D' },
    'text-preprocessing':  { title: 'Text Preprocessing — Cleaning & Normalization',desc: 'See stemming, lemmatization, stopword removal and lowercasing in action', color: '#f59e0b', icon: '3D' },
    'pos-tagging':         { title: 'POS Tagging — Part-of-Speech Labeling',       desc: 'Label nouns, verbs, adjectives and other grammatical categories in sentences', color: '#f59e0b', icon: '3D' },
    'ner':                 { title: 'Named Entity Recognition — Entity Extraction', desc: 'Identify and classify named entities like persons, organizations and locations', color: '#f59e0b', icon: '3D' },
    'bag-of-words':        { title: 'Bag of Words — Frequency Vector Model',       desc: 'Convert text documents into numerical frequency vectors for ML models', color: '#f59e0b', icon: '3D' },
    'tf-idf':              { title: 'TF-IDF — Term Frequency-Inverse Document Freq',desc: 'Weigh word importance across a corpus using TF-IDF scoring formula', color: '#f59e0b', icon: '3D' },
    'word-embeddings':     { title: 'Word Embeddings — Semantic Vector Space',     desc: 'Explore how Word2Vec and GloVe map words to dense geometric vector spaces', color: '#f59e0b', icon: '3D' },
    'sentiment-analysis':  { title: 'Sentiment Analysis — Opinion Classification', desc: 'Classify text polarity as positive, negative or neutral using ML techniques', color: '#f59e0b', icon: '3D' },
  },
  'dbms': {
    'dbms-intro':       { title: 'DBMS Architecture — Storage & Access Layers', desc: 'Understand the physical, logical and external levels of the DBMS architecture', color: '#fb923c', icon: '3D' },
    'intro':            { title: 'DBMS Architecture — Storage & Access Layers', desc: 'Understand the physical, logical and external levels of the DBMS architecture', color: '#fb923c', icon: '3D' },
    'relational-model': { title: 'Relational Model — Tables, Keys & Relations',  desc: 'Explore primary keys, foreign keys, candidate keys and functional dependencies', color: '#fb923c', icon: '3D' },
    'er-model':         { title: 'ER Modeling — Entity-Relationship Diagrams',   desc: 'Design entities, attributes, relationships and cardinality constraints visually', color: '#fb923c', icon: '3D' },
    'sql-joins':        { title: 'SQL Joins — INNER / LEFT / RIGHT / FULL',      desc: 'Visualize how different JOIN types combine rows from multiple tables', color: '#fb923c', icon: '3D' },
    'sql-lab':          { title: 'SQL Lab — DDL, DML & Aggregation Queries',     desc: 'Write and execute CREATE, INSERT, SELECT, GROUP BY and HAVING queries interactively', color: '#fb923c', icon: '3D' },
    'normalization':    { title: 'Normalization — 1NF, 2NF, 3NF, BCNF',         desc: 'Eliminate redundancy and anomalies by decomposing tables to higher normal forms', color: '#fb923c', icon: '3D' },
    'transactions':     { title: 'Transactions — ACID Properties & 2PL',        desc: 'Ensure atomicity, consistency, isolation & durability in concurrent transactions', color: '#fb923c', icon: '3D' },
    'indexing':         { title: 'Indexing — B+ Tree Storage Structures',        desc: 'See how B+ tree indexes enable O(log n) lookups and fast range queries on disk', color: '#fb923c', icon: '3D' },
  },
};

/**
 * Wraps any 3D scene (iframe or React component) in a premium labeled container.
 * Shows a header bar with icon, title, description, LIVE badge, and humanized scene voice narrator.
 */
function SceneShell({ meta, subjectId, topicId, height = 660, borderColor, children }) {
  const color = meta?.color || '#00f2fe';
  const shadowColor = color + '22';

  return (
    <div
      className="w-full flex flex-col rounded-2xl overflow-hidden"
      style={{
        border: `1px solid ${color}28`,
        boxShadow: `0 0 40px ${shadowColor}, 0 0 0 1px ${color}10`,
        background: '#030112',
      }}
    >
      {/* Top label bar */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b flex-shrink-0"
        style={{
          borderColor: color + '18',
          background: `linear-gradient(90deg, ${color}08 0%, transparent 100%)`,
        }}
      >
        <div className="flex items-center gap-3 min-w-0">
          {/* Icon bubble */}
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
            style={{ background: color + '12', border: `1px solid ${color}30` }}
          >
            {meta?.icon || '🔬'}
          </div>

          {/* Title + desc */}
          <div className="min-w-0">
            <p
              className="font-orbitron font-bold text-xs uppercase tracking-wider leading-tight truncate"
              style={{ color }}
            >
              {meta?.title || '3D Simulation Lab'}
            </p>
            <p className="text-[9px] text-white/35 font-sans mt-0.5 truncate max-w-[480px]">
              {meta?.desc || 'Interactive 3D learning environment'}
            </p>
          </div>
        </div>

        {/* Right badges */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg" style={{ background: color + '10', border: `1px solid ${color}25` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
            <span className="text-[8px] font-orbitron tracking-widest uppercase" style={{ color }}>LIVE</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-white/20 border border-white/5 px-2 py-1 rounded-lg">
            <Monitor className="w-3 h-3" />
            <span className="text-[8px] font-orbitron">WebXR</span>
          </div>
        </div>
      </div>

      {/* Humanized Voice Narration & Subtitles HUD */}
      <XRSceneNarrator subjectId={subjectId} topicId={topicId} themeColor={color} autoStart={true} />

      {/* Scene content */}
      <div className="w-full" style={{ height }}>
        {children}
      </div>

      {/* Bottom hint bar */}
      <div
        className="px-4 py-2 flex items-center justify-between border-t flex-shrink-0"
        style={{ borderColor: color + '12', background: '#01000a' }}
      >
        <span className="text-[8px] text-white/20 font-mono">
          💡 Interact with the scene using mouse/touch • Scroll to zoom
        </span>
        <span className="text-[8px] font-orbitron text-white/15 uppercase tracking-widest">
          LearnVerse XR Lab
        </span>
      </div>
    </div>
  );
}

/** Standard iframe wrapper */
function IframeScene({ src, title, height = 560 }) {
  return (
    <iframe
      src={src}
      title={title}
      style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
      allow="xr-spatial-tracking; vr; gyroscope; accelerometer"
      allowFullScreen
    />
  );
}

/** React Three.js component wrapper — fills the shell */
function ComponentScene({ children }) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      {children}
    </div>
  );
}

export default function XRContainer({ subjectId, topicId }) {

  const meta = SCENE_META[subjectId]?.[topicId] || null;

  const renderActiveScene = () => {

    // ── COMPUTER NETWORKS ───────────────────────────────────────────────────
    if (subjectId === 'computer-networks') {

      if (topicId === 'osi-model') {
        return (
          <SceneShell meta={meta} subjectId={subjectId} topicId={topicId} height={660}>
            <IframeScene src="/xr-scenes/osi-model/index.html" title="OSI Layer-Lab Simulator 2.0" />
          </SceneShell>
        );
      }

      if (topicId === 'physical-layer') {
        return (
          <SceneShell meta={meta} subjectId={subjectId} topicId={topicId} height={600}>
            <IframeScene src="/xr-scenes/physical-layer.html" title="Physical Layer Encoding Lab" />
          </SceneShell>
        );
      }

      if (topicId === 'network-topologies') {
        return (
          <SceneShell meta={meta} subjectId={subjectId} topicId={topicId} height={600}>
            <ComponentScene><TopologyScene selectedTopology="star" /></ComponentScene>
          </SceneShell>
        );
      }

      if (topicId === 'tcp-udp' || topicId === 'routing' || topicId === 'congestion-control') {
        return (
          <SceneShell meta={meta} subjectId={subjectId} topicId={topicId} height={600}>
            <ComponentScene><TCPUDPScene /></ComponentScene>
          </SceneShell>
        );
      }
    }

    // ── OPERATING SYSTEMS ────────────────────────────────────────────────────
    if (subjectId === 'operating-systems') {

      if (topicId === 'deadlocks') {
        return (
          <SceneShell meta={meta} subjectId={subjectId} topicId={topicId} height={600}>
            <IframeScene src="/xr-scenes/deadlock.html" title="Deadlock Resource Allocation Graph" />
          </SceneShell>
        );
      }

      if (topicId === 'threads' || topicId === 'process-management') {
        return (
          <SceneShell meta={meta} subjectId={subjectId} topicId={topicId} height={600}>
            <ComponentScene><ProcessScene /></ComponentScene>
          </SceneShell>
        );
      }

      if (topicId === 'cpu-scheduling' || topicId === 'memory-management') {
        return (
          <SceneShell meta={meta} subjectId={subjectId} topicId={topicId} height={600}>
            <ComponentScene><SchedulingScene /></ComponentScene>
          </SceneShell>
        );
      }
    }

    // ── DATA STRUCTURES ──────────────────────────────────────────────────────
    if (subjectId === 'data-structures') {
      const fileMap = { arrays: 'array.html', stacks: 'stack.html', queues: 'queue.html', 'linked-lists': 'linked-list.html', trees: 'tree.html' };
      const srcFile = fileMap[topicId] || 'array.html';
      return (
        <SceneShell meta={meta} subjectId={subjectId} topicId={topicId} height={620}>
          <IframeScene src={`/xr-scenes/${srcFile}`} title="DSA Visualizer Simulator" />
        </SceneShell>
      );
    }

    // ── NLP ──────────────────────────────────────────────────────────────────
    if (subjectId === 'nlp') {
      const fileMap = {
        'nlp-intro': 'intro.html', 'tokenization': 'tokenization.html',
        'text-preprocessing': 'textpreprocessing.html', 'pos-tagging': 'pos-tagging.html',
        'ner': 'ner.html', 'bag-of-words': 'boW.html',
        'tf-idf': 'tf-idf.html', 'word-embeddings': 'word-embeddings.html',
        'sentiment-analysis': 'sentiment-analysis.html',
      };
      const srcFile = fileMap[topicId] || 'intro.html';
      return (
        <SceneShell meta={meta} subjectId={subjectId} topicId={topicId} height={620}>
          <IframeScene src={`/xr-scenes/nlp/${srcFile}`} title="NLP Visualizer Simulator" />
        </SceneShell>
      );
    }

    // ── DBMS ─────────────────────────────────────────────────────────────────
    if (subjectId === 'dbms') {
      const fileMap = {
        'dbms-intro': 'intro.html', 'intro': 'intro.html',
        'relational-model': 'relational-model.html', 'er-model': 'er-model.html',
        'sql-joins': 'sql-joins.html', 'sql-lab': 'sql-lab.html',
        'normalization': 'normalization.html', 'transactions': 'transactions.html',
        'indexing': 'indexing.html',
      };
      const srcFile = fileMap[topicId] || 'intro.html';
      return (
        <SceneShell meta={meta} subjectId={subjectId} topicId={topicId} height={620}>
          <IframeScene src={`/xr-scenes/DBMS/${srcFile}`} title="DBMS Visualizer Simulator" />
        </SceneShell>
      );
    }

    // Default fallback
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 bg-[#030112] border border-white/5 rounded-2xl h-[320px]">
        <Compass className="w-8 h-8 text-white/20 mb-3 animate-spin-slow" />
        <p className="text-xs font-orbitron text-white/40 uppercase tracking-widest">Loading VLab Chassis...</p>
        <p className="text-[9px] text-white/20 font-sans mt-1">3D simulation environment initializing</p>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center text-center p-12 bg-[#030112] border border-white/5 rounded-2xl h-[400px] gap-4">
          <div className="w-8 h-8 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin" />
          <div>
            <p className="text-[10px] font-orbitron text-neon-cyan tracking-wider uppercase">Syncing 3D Cognitive Cores...</p>
            <p className="text-[9px] text-white/30 font-sans mt-1">Loading interactive simulation environment</p>
          </div>
        </div>
      }>
        {renderActiveScene()}
      </Suspense>
    </div>
  );
}
