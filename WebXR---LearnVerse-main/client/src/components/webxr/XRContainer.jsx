import React, { lazy, Suspense, useEffect } from 'react';
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
    'osi-model':           { title: 'OSI Model Layers — 7-Layer Communication Lab', desc: "Watch data travel down Alice's stack (data to bits), cross the cable, and unwrap up Bob's stack", color: '#00f2fe', icon: '3D' },
    'physical-layer':      { title: 'Line Encoding & Modulation Lab',         desc: 'Inspect NRZ-L, NRZ-I, Manchester, AMI digital encodings and ASK, FSK, PSK carrier waves', color: '#00f2fe', icon: '3D' },
    'network-topologies':  { title: 'Network Topologies — Bus / Star / Ring / Mesh', desc: 'Rearrange 6 PCs into Bus, Star, Ring, and Mesh layouts and test cable failures and rerouting', color: '#00f2fe', icon: '3D' },
    'tcp-udp':             { title: 'TCP vs UDP — Transport Layer Protocols',        desc: 'Contrast careful TCP handshakes and retransmissions with fast connectionless UDP datagrams', color: '#00f2fe', icon: '3D' },
    'routing':             { title: 'Routing Algorithms — Dijkstra & Distance Vector', desc: 'Explore link costs, Dijkstra shortest paths, link failures, RIP rounds, and Autonomous Systems', color: '#00f2fe', icon: '3D' },
    'congestion-control':  { title: 'Congestion Control — Traffic Flow Management',  desc: 'Simulate queue jams, Leaky Bucket, Token Bucket, Choke packets, and TCP window AIMD sawtooth', color: '#00f2fe', icon: '3D' },
  },
  'operating-systems': {
    'user-kernel-mode':           { title: 'User Mode & Kernel Mode — Dual-Mode CPU & Syscalls', desc: 'Step through user mode vs kernel mode (mode bits 0/1), trap interrupts, and system call gates', color: '#bc3bf0', icon: '3D' },
    'process-states':             { title: 'Process States — 5-State Transition Lifecycle', desc: 'Interactive state transitions: New, Admit, Ready, Dispatch, Timeout, I/O Wait, I/O Done, and Exit', color: '#bc3bf0', icon: '3D' },
    'process-management':         { title: 'Process States — 5-State Transition Lifecycle', desc: 'Interactive state transitions: New, Admit, Ready, Dispatch, Timeout, I/O Wait, I/O Done, and Exit', color: '#bc3bf0', icon: '3D' },
    'cpu-scheduling':             { title: 'CPU Scheduling — FCFS, SJF & Round Robin Comparator', desc: 'Observe arrival times, burst durations, Gantt charts, convoy effects, and average waiting time', color: '#bc3bf0', icon: '3D' },
    'critical-section-mutex':     { title: 'Critical Section & Mutex — Race Conditions & Locks', desc: 'Simulate lost updates with two concurrent threads and resolve race conditions with a mutex lock', color: '#bc3bf0', icon: '3D' },
    'threads':                    { title: 'Critical Section & Mutex — Race Conditions & Locks', desc: 'Simulate lost updates with two concurrent threads and resolve race conditions with a mutex lock', color: '#bc3bf0', icon: '3D' },
    'deadlocks':                  { title: 'Deadlocks — Resource Allocation Graph & 4 Conditions', desc: 'Visualize Coffman conditions, circular wait cycles, prevention via resource ordering, and recovery', color: '#bc3bf0', icon: '3D' },
    'deadlock':                   { title: 'Deadlocks — Resource Allocation Graph & 4 Conditions', desc: 'Visualize Coffman conditions, circular wait cycles, prevention via resource ordering, and recovery', color: '#bc3bf0', icon: '3D' },
    'paging-address-translation': { title: 'Paging & Address Translation — Pages, Frames & MMU', desc: 'Translate logical addresses (page + offset) to physical frames using page tables with no external fragmentation', color: '#bc3bf0', icon: '3D' },
    'memory-management':          { title: 'Paging & Address Translation — Pages, Frames & MMU', desc: 'Translate logical addresses (page + offset) to physical frames using page tables with no external fragmentation', color: '#bc3bf0', icon: '3D' },
    'page-replacement':           { title: 'Page Replacement — Virtual Memory FIFO vs LRU', desc: 'Trace 12 reference strings across 3 memory frames, count page faults, and contrast FIFO vs LRU eviction', color: '#bc3bf0', icon: '3D' },
    'disk-scheduling':            { title: 'Disk Scheduling — FCFS, SSTF & SCAN Elevator', desc: 'Analyze mechanical hard disk seek times, head movements across cylinders 0-199, and track path efficiency', color: '#bc3bf0', icon: '3D' },
  },
  'data-structures': {
    'arrays':        { title: 'Arrays — Contiguous Memory Storage',    desc: 'Visualize index-based access, insertion and deletion in contiguous memory', color: '#34d399', icon: '3D' },
    'array':         { title: 'Arrays — Contiguous Memory Storage',    desc: 'Visualize index-based access, insertion and deletion in contiguous memory', color: '#34d399', icon: '3D' },
    'stacks':        { title: 'Stack — LIFO Push & Pop Operations',    desc: 'See LIFO order in action with push, pop, peek and overflow/underflow cases', color: '#34d399', icon: '3D' },
    'stack':         { title: 'Stack — LIFO Push & Pop Operations',    desc: 'See LIFO order in action with push, pop, peek and overflow/underflow cases', color: '#34d399', icon: '3D' },
    'queues':        { title: 'Queue — FIFO Enqueue & Dequeue',        desc: 'Watch FIFO ordering with enqueue/dequeue operations and circular queue logic', color: '#34d399', icon: '3D' },
    'queue':         { title: 'Queue — FIFO Enqueue & Dequeue',        desc: 'Watch FIFO ordering with enqueue/dequeue operations and circular queue logic', color: '#34d399', icon: '3D' },
    'linked-lists':  { title: 'Linked List — Dynamic Node Chaining',   desc: 'Traverse, insert and delete nodes in singly and doubly linked list structures', color: '#34d399', icon: '3D' },
    'linked-list':   { title: 'Linked List — Dynamic Node Chaining',   desc: 'Traverse, insert and delete nodes in singly and doubly linked list structures', color: '#34d399', icon: '3D' },
    'trees':         { title: 'Binary Tree — Hierarchical Traversal',  desc: 'Explore in-order, pre-order, post-order traversal and BST search/insert/delete', color: '#34d399', icon: '3D' },
    'tree':          { title: 'Binary Tree — Hierarchical Traversal',  desc: 'Explore in-order, pre-order, post-order traversal and BST search/insert/delete', color: '#34d399', icon: '3D' },
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
    'data-abstraction-independence': { title: 'Data Abstraction & Independence — 3-Level Architecture', desc: 'Interact with External View, Conceptual Logical, and Internal Physical levels, and simulate data independence', color: '#fb923c', icon: '3D' },
    'dbms-intro':                    { title: 'Data Abstraction & Independence — 3-Level Architecture', desc: 'Interact with External View, Conceptual Logical, and Internal Physical levels, and simulate data independence', color: '#fb923c', icon: '3D' },
    'intro':                         { title: 'Data Abstraction & Independence — 3-Level Architecture', desc: 'Interact with External View, Conceptual Logical, and Internal Physical levels, and simulate data independence', color: '#fb923c', icon: '3D' },
    'ddl-dml':                       { title: 'DDL & DML Commands — Schema Definition & Table Operations', desc: 'Execute CREATE, ALTER, DROP (DDL) and INSERT, UPDATE, DELETE (DML) live table mutations in VR', color: '#fb923c', icon: '3D' },
    'sql-lab':                       { title: 'DDL & DML Commands — Schema Definition & Table Operations', desc: 'Execute CREATE, ALTER, DROP (DDL) and INSERT, UPDATE, DELETE (DML) live table mutations in VR', color: '#fb923c', icon: '3D' },
    'er-model':                      { title: 'ER Model — Entities, Attributes & Relational Mapping', desc: 'Examine entities, key/simple/multivalued attributes, M:N relationship cardinalities, and relational mapping', color: '#fb923c', icon: '3D' },
    'data-models':                   { title: 'Data Models — Network, Relational & Object-Oriented', desc: 'Explore graph-based Network pointers, tabular Relational schemas with keys, and class-based OO models', color: '#fb923c', icon: '3D' },
    'relational-model':              { title: 'Data Models — Network, Relational & Object-Oriented', desc: 'Explore graph-based Network pointers, tabular Relational schemas with keys, and class-based OO models', color: '#fb923c', icon: '3D' },
    'integrity-constraints':         { title: 'Integrity Constraints — Entity, Key, Referential & Domain', desc: 'Live constraint validation engine testing PK non-null, key uniqueness, FK references, and CHECK rules', color: '#fb923c', icon: '3D' },
    'sql-joins':                     { title: 'SQL Joins — INNER / LEFT / RIGHT / FULL', desc: 'Visualize how different JOIN types combine rows from multiple tables', color: '#fb923c', icon: '3D' },
    'relational-algebra-calculus':   { title: 'Relational Algebra & Calculus — Operator Simulator', desc: 'Interact with Selection (σ), Projection (π), Natural Join, Cartesian Product, Set Ops, and Relational Calculus (TRC/DRC)', color: '#fb923c', icon: '3D' },
    'relational-algebra':            { title: 'Relational Algebra & Calculus — Operator Simulator', desc: 'Interact with Selection (σ), Projection (π), Natural Join, Cartesian Product, Set Ops, and Relational Calculus (TRC/DRC)', color: '#fb923c', icon: '3D' },
    'normalization':                 { title: 'Dependencies & Normal Forms — 1NF to BCNF', desc: 'Explore Functional Dependencies, Armstrong’s Axioms, and lossless decompositions across UNF, 1NF, 2NF, 3NF, and BCNF', color: '#fb923c', icon: '3D' },
    'normalization-dependencies':    { title: 'Dependencies & Normal Forms — 1NF to BCNF', desc: 'Explore Functional Dependencies, Armstrong’s Axioms, and lossless decompositions across UNF, 1NF, 2NF, 3NF, and BCNF', color: '#fb923c', icon: '3D' },
    'query-processing-optimization': { title: 'Query Processing & Optimization — Tree & Plan Engine', desc: 'Step through naive vs optimized algebraic query trees (pushing selections down) and Nested-Loop, Sort-Merge, and Hash Joins', color: '#fb923c', icon: '3D' },
    'query-optimization':            { title: 'Query Processing & Optimization — Tree & Plan Engine', desc: 'Step through naive vs optimized algebraic query trees (pushing selections down) and Nested-Loop, Sort-Merge, and Hash Joins', color: '#fb923c', icon: '3D' },
    'transactions':                  { title: 'Relational Algebra & Calculus — Operator Simulator', desc: 'Interact with Selection (σ), Projection (π), Natural Join, Cartesian Product, Set Ops, and Relational Calculus (TRC/DRC)', color: '#fb923c', icon: '3D' },
    'indexing':                      { title: 'Query Processing & Optimization — Tree & Plan Engine', desc: 'Step through naive vs optimized algebraic query trees (pushing selections down) and Nested-Loop, Sort-Merge, and Hash Joins', color: '#fb923c', icon: '3D' },
  },
  'blockchain': {
    'blocks-and-blockchain':    { title: 'Blocks and the Blockchain — Hash Linkage Lab', desc: 'Interactive 3D chain: examine blocks, previous hash links, and tamper detection', color: '#f59e0b', icon: '3D' },
    'cryptographic-hashing':    { title: 'Cryptographic Hash Functions — Fingerprint Lab', desc: 'Input text, run hashing machine, observe determinism, avalanche effect, and fixed size', color: '#f59e0b', icon: '3D' },
    'proof-of-work':            { title: 'Proof of Work & Mining — Nonce Guessing Rig', desc: 'Simulate slot-reel brute force mining, difficulty targets, and fast verification', color: '#f59e0b', icon: '3D' },
    'digital-signatures':       { title: 'Digital Signatures — Asymmetric Cryptosystem', desc: 'Alice signs with private key, Bob verifies with public key, lamp detects hacking', color: '#f59e0b', icon: '3D' },
    'transactions-network':     { title: 'Transactions & Network — P2P Consensus Ledger', desc: '6-node peer network, mempool, validation checks, and double-spend rejection', color: '#f59e0b', icon: '3D' },
    'merkle-trees':             { title: 'Merkle Trees — Cryptographic Root Proofs', desc: 'Pairwise hash aggregation, Merkle root commitment, and lightweight audit verification', color: '#f59e0b', icon: '3D' },
    'merkle-tree':              { title: 'Merkle Trees — Cryptographic Root Proofs', desc: 'Pairwise hash aggregation, Merkle root commitment, and lightweight audit verification', color: '#f59e0b', icon: '3D' },
    'consensus-proof-of-stake': { title: 'Proof of Stake — Capital Staking & Voting', desc: 'Pillar deposits, weighted raffle lottery, block proposal, and 2/3 supermajority voting', color: '#f59e0b', icon: '3D' },
    'proof-of-stake':           { title: 'Proof of Stake — Capital Staking & Voting', desc: 'Pillar deposits, weighted raffle lottery, block proposal, and 2/3 supermajority voting', color: '#f59e0b', icon: '3D' },
    'smart-contracts':          { title: 'Smart Contracts — Autonomous Code Execution', desc: 'Automated crowdfunding vending machine: pledge validation, goal evaluation, payout/refund', color: '#f59e0b', icon: '3D' },
    'smart-contract':           { title: 'Smart Contracts — Autonomous Code Execution', desc: 'Automated crowdfunding vending machine: pledge validation, goal evaluation, payout/refund', color: '#f59e0b', icon: '3D' },
  },
};

/**
 * Wraps any 3D scene (iframe or React component) in a premium labeled container.
 * Shows a header bar with icon, title, description, and humanized scene voice narrator.
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
          <div className="hidden sm:flex items-center gap-1 text-white/20 border border-white/5 px-2 py-1 rounded-lg">
            <Monitor className="w-3 h-3" />
            <span className="text-[8px] font-orbitron">WebXR</span>
          </div>
        </div>
      </div>

      {/* Humanized Voice Narration & Subtitles HUD (defaults to OFF, explicit click only) */}
      <XRSceneNarrator subjectId={subjectId} topicId={topicId} themeColor={color} autoStart={false} />

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

  // Cleanup speech synthesis on scene unmount or module/topic change
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [subjectId, topicId]);

  const renderActiveScene = () => {

    // ── COMPUTER NETWORKS ───────────────────────────────────────────────────
    if (subjectId === 'computer-networks') {
      const fileMap = {
        'osi-model': '1_osi_model_layers.html',
        'physical-layer': '2_line_encoding_modulation.html',
        'network-topologies': '3_network_topologies.html',
        'tcp-udp': '4_tcp_vs_udp.html',
        'routing': '5_routing_algorithms.html',
        'congestion-control': '6_congestion_control.html',
      };
      const srcFile = fileMap[topicId] || '1_osi_model_layers.html';
      return (
        <SceneShell meta={meta} subjectId={subjectId} topicId={topicId} height={640}>
          <IframeScene src={`/xr-scenes/networks-vr-lab/${srcFile}`} title="Computer Networks VR Lab" />
        </SceneShell>
      );
    }

    // ── OPERATING SYSTEMS ────────────────────────────────────────────────────
    if (subjectId === 'operating-systems') {
      const fileMap = {
        'user-kernel-mode': '1_user_kernel_mode.html',
        'process-states': '2_process_states.html',
        'process-management': '2_process_states.html',
        'cpu-scheduling': '3_cpu_scheduling.html',
        'critical-section-mutex': '4_critical_section_mutex.html',
        'threads': '4_critical_section_mutex.html',
        'deadlocks': '5_deadlock.html',
        'deadlock': '5_deadlock.html',
        'paging-address-translation': '6_paging_address_translation.html',
        'memory-management': '6_paging_address_translation.html',
        'page-replacement': '7_page_replacement.html',
        'disk-scheduling': '8_disk_scheduling.html',
      };
      const srcFile = fileMap[topicId] || '1_user_kernel_mode.html';
      return (
        <SceneShell meta={meta} subjectId={subjectId} topicId={topicId} height={640}>
          <IframeScene src={`/xr-scenes/os/${srcFile}`} title="Operating Systems VR Lab" />
        </SceneShell>
      );
    }

    // ── DATA STRUCTURES ──────────────────────────────────────────────────────
    if (subjectId === 'data-structures') {
      const fileMap = {
        arrays: 'array.html',
        array: 'array.html',
        stacks: 'stack.html',
        stack: 'stack.html',
        queues: 'queue.html',
        queue: 'queue.html',
        'linked-lists': 'linked-list.html',
        'linked-list': 'linked-list.html',
        trees: 'tree.html',
        tree: 'tree.html',
      };
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
        'nlp-intro': '1_nlp_intro_pipeline.html',
        'tokenization': '2_tokenization.html',
        'text-preprocessing': '3_text_preprocessing.html',
        'pos-tagging': '4_pos_tagging.html',
        'ner': '5_named_entity_recognition.html',
        'bag-of-words': '6_bag_of_words.html',
        'tf-idf': '7_tfidf.html',
        'word-embeddings': '8_word_embeddings.html',
        'sentiment-analysis': '9_sentiment_analysis.html',
      };
      const srcFile = fileMap[topicId] || '1_nlp_intro_pipeline.html';
      return (
        <SceneShell meta={meta} subjectId={subjectId} topicId={topicId} height={620}>
          <IframeScene src={`/xr-scenes/nlp/${srcFile}`} title="NLP Visualizer Simulator" />
        </SceneShell>
      );
    }

    // ── DBMS ─────────────────────────────────────────────────────────────────
    if (subjectId === 'dbms') {
      const fileMap = {
        'data-abstraction-independence': 'data-abstraction-independence.html',
        'dbms-intro': 'data-abstraction-independence.html',
        'intro': 'data-abstraction-independence.html',
        'ddl-dml': 'ddl-dml.html',
        'sql-lab': 'ddl-dml.html',
        'er-model': 'er-model.html',
        'data-models': 'data-models.html',
        'relational-model': 'data-models.html',
        'integrity-constraints': 'integrity-constraints.html',
        'sql-joins': 'integrity-constraints.html',
        'relational-algebra-calculus': 'relational-algebra-calculus.html',
        'relational-algebra': 'relational-algebra-calculus.html',
        'normalization': 'normalization.html',
        'normalization-dependencies': 'normalization.html',
        'query-processing-optimization': 'query-processing-optimization.html',
        'query-optimization': 'query-processing-optimization.html',
        'transactions': 'relational-algebra-calculus.html',
        'indexing': 'query-processing-optimization.html',
      };
      const srcFile = fileMap[topicId] || 'intro.html';
      return (
        <SceneShell meta={meta} subjectId={subjectId} topicId={topicId} height={620}>
          <IframeScene src={`/xr-scenes/DBMS/${srcFile}`} title="DBMS Visualizer Simulator" />
        </SceneShell>
      );
    }

    // ── BLOCKCHAIN TECHNOLOGY ────────────────────────────────────────────────
    if (subjectId === 'blockchain') {
      const fileMap = {
        'blocks-and-blockchain': '1_blocks_and_chain.html',
        'blocks-and-chain': '1_blocks_and_chain.html',
        'cryptographic-hashing': '2_cryptographic_hashing.html',
        'proof-of-work': '3_proof_of_work.html',
        'digital-signatures': '4_digital_signatures.html',
        'transactions-network': '5_transactions_network.html',
        'transactions-and-network': '5_transactions_network.html',
        'merkle-trees': '6_merkle_tree.html',
        'merkle-tree': '6_merkle_tree.html',
        'consensus-proof-of-stake': '7_consensus_proof_of_stake.html',
        'proof-of-stake': '7_consensus_proof_of_stake.html',
        'smart-contracts': '8_smart_contracts.html',
        'smart-contract': '8_smart_contracts.html',
      };
      const srcFile = fileMap[topicId] || '1_blocks_and_chain.html';
      return (
        <SceneShell meta={meta} subjectId={subjectId} topicId={topicId} height={640}>
          <IframeScene src={`/xr-scenes/blockchain-vr-lab/${srcFile}`} title="Blockchain Technology VR Lab" />
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
