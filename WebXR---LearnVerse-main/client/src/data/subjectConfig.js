export const SUBJECTS_DATA = {
  'computer-networks': {
    id: 'computer-networks',
    name: 'Computer Networks',
    title: 'Computer Networks',
    color: '#00f0ff',
    image: '/cn.jpg',
    description: 'Routing protocols, layered architectures, packet transmission, and congestion avoidance systems.',
    topics: [
      { id: 'osi-model', title: 'OSI Model Layers', shortTitle: 'OSI Model', level: 'Beginner', desc: 'Deep-dive into the 7-layer architecture, encapsulation, and packet formats.' },
      { id: 'physical-layer', title: 'Physical Line Encoding Lab', shortTitle: 'Physical Layer', level: 'Intermediate', desc: 'Encoding methods, spatial line configurations, modulations, and media.' },
      { id: 'network-topologies', title: 'Network Topologies', shortTitle: 'Topologies', level: 'Intermediate', desc: 'Analyzing Star, Ring, Mesh, and Bus grid structures and failures.' },
      { id: 'tcp-udp', title: 'TCP vs UDP Protocols', shortTitle: 'TCP/UDP', level: 'Advanced', desc: 'Transmission protocols, reliability controls, handshakes, and port channels.' },
      { id: 'routing', title: 'Routing Algorithms', shortTitle: 'Routing', level: 'Advanced', desc: 'Packet routing algorithms, Dijkstra, distance vectors, and autonomous grids.' },
      { id: 'congestion-control', title: 'Congestion Control', shortTitle: 'Congestion Control', level: 'Expert', desc: 'Leaky bucket, token systems, chokes, and algorithmic buffer flows.' }
    ]
  },
  'operating-systems': {
    id: 'operating-systems',
    name: 'Operating Systems',
    title: 'Operating Systems',
    color: '#bc3bf0',
    image: '/os.jpg',
    description: 'User and kernel modes, process lifecycle states, CPU scheduling, concurrency synchronization, deadlocks, paging address translation, page replacement, and disk scheduling.',
    topics: [
      { id: 'user-kernel-mode', title: 'User Mode and Kernel Mode', shortTitle: 'User & Kernel Mode', level: 'Beginner', desc: 'Dual-mode CPU execution, system calls, mode bit transitions, and hardware protection.' },
      { id: 'process-states', title: 'Process States & Lifecycle', shortTitle: 'Process States', level: 'Beginner', desc: 'The 5-state process lifecycle: New, Ready, Running, Waiting, and Terminated transitions.' },
      { id: 'cpu-scheduling', title: 'CPU Scheduling Algorithms', shortTitle: 'CPU Scheduling', level: 'Intermediate', desc: 'FCFS, Shortest Job First (SJF), and Round Robin (RR) with Gantt charts and average waiting times.' },
      { id: 'critical-section-mutex', title: 'Critical Section & Mutex Locks', shortTitle: 'Critical Section', level: 'Intermediate', desc: 'Race conditions, mutual exclusion locks, lost updates, and counting semaphores.' },
      { id: 'deadlocks', title: 'Deadlock & Resource Allocation', shortTitle: 'Deadlocks', level: 'Intermediate', desc: 'Coffman conditions, Resource Allocation Graphs, circular waits, prevention, and recovery.' },
      { id: 'paging-address-translation', title: 'Paging and Address Translation', shortTitle: 'Paging', level: 'Advanced', desc: 'Dividing programs into pages and memory into frames, page tables, and MMU address translation.' },
      { id: 'page-replacement', title: 'Page Replacement Algorithms', shortTitle: 'Page Replacement', level: 'Advanced', desc: 'Virtual memory demand paging, page faults, and comparing FIFO vs LRU eviction policies.' },
      { id: 'disk-scheduling', title: 'Disk Scheduling Algorithms', shortTitle: 'Disk Scheduling', level: 'Advanced', desc: 'Seek time minimization and head movement analysis using FCFS, SSTF, and SCAN (Elevator).' }
    ]
  },
  'data-structures': {
    id: 'data-structures',
    name: 'Data Structures',
    title: 'Data Structures',
    color: '#3b82f6',
    image: '/dsa.jpg',
    description: 'Contiguous arrays, LIFO stacks, FIFO queues, dynamic linked lists, and binary search trees with interactive 3D WebXR labs.',
    topics: [
      { id: 'arrays', title: 'Arrays & Memory Mapping', shortTitle: 'Arrays', level: 'Beginner', desc: 'Contiguous allocations, address mapping offsets, resizing arrays, and access speeds.' },
      { id: 'stacks', title: 'Stack & LIFO Operations', shortTitle: 'Stacks', level: 'Intermediate', desc: 'Last-In First-Out operations, expression parsing, recursion stacks, and memory registers.' },
      { id: 'queues', title: 'Queue & FIFO Operations', shortTitle: 'Queues', level: 'Intermediate', desc: 'First-In First-Out operations, pipeline buffering, circular queues, and front/rear pointer tracking.' },
      { id: 'linked-lists', title: 'Linked Lists & Dynamic Nodes', shortTitle: 'Linked Lists', level: 'Advanced', desc: 'Dynamic node chaining, pointer manipulation, singly and doubly linked list traversals.' },
      { id: 'trees', title: 'Binary Search Trees & Traversal', shortTitle: 'Trees', level: 'Expert', desc: 'Hierarchical tree structures, BST search/insert invariants, and in-order/pre-order traversals.' }
    ]
  },
  'nlp': {
    id: 'nlp',
    name: 'Natural Language Processing',
    title: 'Natural Language Processing',
    color: '#10b981',
    image: '/nlp.jpg',
    description: 'Tokenization, text normalization, syntactic parsing, entity extraction, vector spaces, and sentiment models.',
    topics: [
      { id: 'nlp-intro', title: 'Introduction to NLP & Pipeline', shortTitle: 'NLP Intro', level: 'Beginner', desc: 'Explore the end-to-end NLP pipeline converting human language into machine representations.' },
      { id: 'tokenization', title: 'Tokenization Techniques', shortTitle: 'Tokenization', level: 'Beginner', desc: 'Word, sentence, and subword tokenization dividing text into atomic linguistic units.' },
      { id: 'text-preprocessing', title: 'Text Preprocessing & Cleaning', shortTitle: 'Preprocessing', level: 'Beginner', desc: 'Lowercasing, punctuation removal, stop words, stemming, and lemmatization.' },
      { id: 'pos-tagging', title: 'Part-of-Speech (POS) Tagging', shortTitle: 'POS Tagging', level: 'Intermediate', desc: 'Grammatical categorization assigning syntactic roles to tokens across sentences.' },
      { id: 'ner', title: 'Named Entity Recognition (NER)', shortTitle: 'NER', level: 'Intermediate', desc: 'Identifying and classifying named entities like people, organizations, and locations.' },
      { id: 'bag-of-words', title: 'Bag of Words (BoW) Model', shortTitle: 'Bag of Words', level: 'Intermediate', desc: 'Document representation using vocabulary frequency matrices and occurrence counts.' },
      { id: 'tf-idf', title: 'TF-IDF Weighting & Vector Space', shortTitle: 'TF-IDF', level: 'Advanced', desc: 'Evaluating word importance across corpora with Term Frequency-Inverse Document Frequency.' },
      { id: 'word-embeddings', title: 'Word Embeddings & Semantic Vectors', shortTitle: 'Word Embeddings', level: 'Advanced', desc: 'Dense vector representations capturing semantic similarity, distances, and analogies.' },
      { id: 'sentiment-analysis', title: 'Sentiment Analysis & Classification', shortTitle: 'Sentiment Analysis', level: 'Advanced', desc: 'Classifying subjective text into positive, negative, and neutral sentiment polarities.' }
    ]
  },
  'dbms': {
    id: 'dbms',
    name: 'Database Management Systems',
    title: 'Database Management Systems',
    color: '#f59e0b',
    image: '/dbms.jpg',
    description: 'Relational data models, ER diagrams, SQL joins & aggregations, normalization from 1NF to BCNF, ACID transactions, and B+ tree indexing.',
    topics: [
      { id: 'data-abstraction-independence', title: 'Data Abstraction & Data Independence', shortTitle: 'Data Independence', level: 'Beginner', desc: 'Explore the external/view, conceptual/logical, and internal/physical levels of data abstraction, and master logical and physical data independence.' },
      { id: 'ddl-dml', title: 'DDL and DML Commands', shortTitle: 'DDL & DML', level: 'Beginner', desc: 'Master Data Definition Language (CREATE, ALTER, DROP) and Data Manipulation Language (INSERT, UPDATE, DELETE) with live table modifications.' },
      { id: 'er-model', title: 'Entity-Relationship (ER) Model', shortTitle: 'ER Model', level: 'Beginner', desc: 'Entities, attributes (simple, key, multivalued), relationship sets, M:N cardinalities, and ER-to-relational schema mapping rules.' },
      { id: 'data-models', title: 'Network, Relational & Object-Oriented Data Models', shortTitle: 'Data Models', level: 'Intermediate', desc: 'Comparative study of pointer-linked Network models (CODASYL), tabular Relational models (tables/keys), and class-based Object-Oriented models.' },
      { id: 'integrity-constraints', title: 'Integrity Constraints', shortTitle: 'Integrity Constraints', level: 'Intermediate', desc: 'Enforce Entity integrity (PK non-null), key uniqueness, Referential integrity (FK/cascades), and Domain check constraints.' },
      { id: 'relational-algebra-calculus', title: 'Relational Algebra & Calculus', shortTitle: 'Relational Algebra', level: 'Intermediate', desc: 'Execute Selection (σ), Projection (π), Natural Join (⋈), Cartesian Product (×), Set operations, and Tuple/Domain Relational Calculus.' },
      { id: 'normalization', title: 'Dependencies and Normal Forms (1NF to BCNF)', shortTitle: 'Normal Forms', level: 'Intermediate', desc: 'Functional dependencies, Armstrong’s axioms, and multi-tier normalization from UNF to 1NF, 2NF, 3NF, and BCNF with lossless join verification.' },
      { id: 'query-processing-optimization', title: 'Query Processing & Optimization', shortTitle: 'Query Optimization', level: 'Advanced', desc: 'Query compilation trees, heuristic algebraic optimization (pushing selections/projections down), and join algorithms: Nested-Loop, Sort-Merge, and Hash Joins.' }
    ]
  },
  'blockchain': {
    id: 'blockchain',
    name: 'Blockchain Technology',
    title: 'Blockchain Technology',
    color: '#f59e0b',
    image: '/blockchain.jpg',
    description: 'Decentralized ledgers, cryptographic hashing, Proof of Work mining, asymmetric signatures, peer-to-peer networks, Merkle trees, Proof of Stake consensus, and autonomous smart contracts.',
    topics: [
      { id: 'blocks-and-blockchain', title: 'Blocks and the Blockchain', shortTitle: 'Blocks & Chain', level: 'Beginner', desc: 'Explore cryptographic hash linkage between chronological blocks and understand how altering any past block breaks the chain.' },
      { id: 'cryptographic-hashing', title: 'Cryptographic Hash Functions', shortTitle: 'Hash Functions', level: 'Beginner', desc: 'Inspect deterministic one-way data fingerprinting, fixed-length digests, and the avalanche effect when flipping a single character.' },
      { id: 'proof-of-work', title: 'Proof of Work and Mining', shortTitle: 'Proof of Work', level: 'Intermediate', desc: 'Simulate brute-force nonce searching against target zero difficulties and observe fast verification across network nodes.' },
      { id: 'digital-signatures', title: 'Public-Key Cryptography and Digital Signatures', shortTitle: 'Digital Signatures', level: 'Intermediate', desc: 'Sign payment messages using private keys and verify authenticity with public keys while detecting malicious payload tampering.' },
      { id: 'transactions-network', title: 'Transactions and the Network', shortTitle: 'Transactions & Network', level: 'Intermediate', desc: 'Broadcast transactions across a peer-to-peer ring of nodes, validate account balances, and prevent double-spending in blocks.' },
      { id: 'merkle-trees', title: 'Merkle Trees & Cryptographic Proofs', shortTitle: 'Merkle Trees', level: 'Advanced', desc: 'Condense multiple transactions into a single cryptographic Merkle root and prove transaction inclusion using lightweight sibling audit paths.' },
      { id: 'consensus-proof-of-stake', title: 'Consensus: Proof of Stake and Voting', shortTitle: 'Proof of Stake', level: 'Advanced', desc: 'Lock validator stake deposits, run weighted proposer lotteries, and vote with a 2/3 supermajority to commit new blocks.' },
      { id: 'smart-contracts', title: 'Smart Contracts & Autonomous Execution', shortTitle: 'Smart Contracts', level: 'Advanced', desc: 'Deploy deterministic code on the blockchain that autonomously enforces rules, collects conditional pledges, and settles funds without intermediaries.' }
    ]
  }
};

/**
 * Check if a topic in a subject is unlocked based on completed topics list.
 * Topic 0 (first topic) is always unlocked. Subsequent topics unlock when the preceding topic is in completedTopics.
 */
export function isTopicUnlocked(subjectId, topicId, completedTopics = {}) {
  const subject = SUBJECTS_DATA[subjectId];
  if (!subject) return false;

  const topics = subject.topics;
  const index = topics.findIndex(t => t.id === topicId);
  if (index <= 0) return true; // First topic or not found defaults to unlocked

  const completedList = completedTopics[subjectId] || [];
  const prevTopicId = topics[index - 1].id;
  return completedList.includes(prevTopicId);
}

/**
 * Get the next topic in the subject sequence after currentTopicId.
 * Returns null if current topic is the last topic in the subject.
 */
export function getNextTopic(subjectId, currentTopicId) {
  const subject = SUBJECTS_DATA[subjectId];
  if (!subject) return null;

  const topics = subject.topics;
  const index = topics.findIndex(t => t.id === currentTopicId);
  if (index === -1 || index >= topics.length - 1) return null;

  return topics[index + 1];
}

/**
 * Find the currently active (next uncompleted unlocked) topic for a subject.
 */
export function getActiveTopic(subjectId, completedTopics = {}) {
  const subject = SUBJECTS_DATA[subjectId];
  if (!subject) return null;

  const completedList = completedTopics[subjectId] || [];
  for (const topic of subject.topics) {
    if (!completedList.includes(topic.id)) {
      return topic;
    }
  }
  return null; // All topics completed
}

/**
 * Compute completion statistics for a subject.
 */
export function getSubjectStats(subjectId, completedTopics = {}) {
  const subject = SUBJECTS_DATA[subjectId];
  if (!subject) return { completed: 0, total: 0, percentage: 0, isFinished: false };

  const total = subject.topics.length;
  const completedList = (completedTopics[subjectId] || []).filter(tId => 
    subject.topics.some(t => t.id === tId)
  );
  const completed = completedList.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  const isFinished = completed >= total;

  return { completed, total, percentage, isFinished };
}

/**
 * Compute overall curriculum statistics.
 */
export function getOverallStats(completedTopics = {}) {
  let totalTopics = 0;
  let totalCompleted = 0;

  for (const subjectId of Object.keys(SUBJECTS_DATA)) {
    const stats = getSubjectStats(subjectId, completedTopics);
    totalTopics += stats.total;
    totalCompleted += stats.completed;
  }

  const overallPercentage = totalTopics > 0 ? Math.round((totalCompleted / totalTopics) * 100) : 0;
  return { totalCompleted, totalTopics, overallPercentage };
}
