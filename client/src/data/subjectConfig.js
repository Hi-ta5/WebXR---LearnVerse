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
    description: 'System calls, hardware schedulers, deadlocks, virtualization, and memory allocation parameters.',
    topics: [
      { id: 'deadlocks', title: 'Deadlocks & Resource Allocation', shortTitle: 'Deadlocks', level: 'Beginner', desc: 'Banker\'s algorithm, resource allocations, avoidance, and recovery loops.' },
      { id: 'threads', title: 'Multi-Threading & Contexts', shortTitle: 'Threads', level: 'Beginner', desc: 'Multi-threading models, race conditions, synchronization, and mutexes.' },
      { id: 'process-management', title: 'Process Management & Lifecycle', shortTitle: 'Process Management', level: 'Intermediate', desc: 'Process states, contexts, control blocks, PCB schemas, and fork engines.' },
      { id: 'cpu-scheduling', title: 'CPU Scheduling Algorithms', shortTitle: 'CPU Scheduling', level: 'Intermediate', desc: 'First-Come First-Served, Shortest-Job-First, Round Robin timeline analysis.' },
      { id: 'memory-management', title: 'Virtual Memory & Paging', shortTitle: 'Memory Management', level: 'Advanced', desc: 'Virtual memory systems, paging page faults, segmentation, and page swaps.' }
    ]
  },
  'data-structures': {
    id: 'data-structures',
    name: 'Data Structures',
    title: 'Data Structures',
    color: '#3b82f6',
    image: '/dsa.jpg',
    description: 'Master structural contiguous arrays, stacks, queues, dynamic linked lists, and tree hierarchy visuals.',
    topics: [
      { id: 'arrays', title: 'Arrays & Memory Mapping', shortTitle: 'Arrays', level: 'Beginner', desc: 'Contiguous allocations, address mapping offsets, resizing arrays, and access speeds.' },
      { id: 'stacks', title: 'Stack & LIFO Operations', shortTitle: 'Stacks', level: 'Intermediate', desc: 'Last-In First-Out operations, expression parsing, recursion stacks, and memory registers.' },
      { id: 'queues', title: 'Queue & FIFO Architectures', shortTitle: 'Queues', level: 'Intermediate', desc: 'First-In First-Out pathways, buffer queues, priority systems, and ring buffers.' },
      { id: 'linked-lists', title: 'Linked Lists & Node Pointers', shortTitle: 'Linked Lists', level: 'Advanced', desc: 'Dynamic nodes, pointer linkages, singly, doubly, and circular chain lists.' },
      { id: 'trees', title: 'Binary Search Trees & Traversals', shortTitle: 'Trees', level: 'Advanced', desc: 'Hierarchical node clusters, Binary Search Trees, balance factors, traversals.' }
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
      { id: 'dbms-intro', title: 'Introduction to DBMS & Architecture', shortTitle: 'DBMS Intro', level: 'Beginner', desc: 'Core database concepts, 3-tier ANSI-SPARC architecture, data abstraction, and DBMS vs traditional file systems.' },
      { id: 'relational-model', title: 'Relational Data Model & Keys', shortTitle: 'Relational Model', level: 'Beginner', desc: 'Tables, tuples, attributes, domains, primary keys, candidate keys, foreign keys, and integrity constraints.' },
      { id: 'er-model', title: 'Entity-Relationship (ER) Modeling', shortTitle: 'ER Modeling', level: 'Beginner', desc: 'Entities, attributes, relationships, cardinalities (1:1, 1:N, M:N), and ER-to-relational schema mapping.' },
      { id: 'sql-joins', title: 'SQL Queries & Table Joins', shortTitle: 'SQL Joins', level: 'Intermediate', desc: 'INNER JOIN, LEFT/RIGHT OUTER JOIN, FULL JOIN, CROSS JOIN, and relational algebra set operations.' },
      { id: 'sql-lab', title: 'SQL DDL, DML & Aggregations', shortTitle: 'SQL Lab', level: 'Intermediate', desc: 'Data definition, schema modification, CRUD operations, GROUP BY, HAVING, and nested subqueries.' },
      { id: 'normalization', title: 'Database Normalization (1NF to BCNF)', shortTitle: 'Normalization', level: 'Intermediate', desc: 'Functional dependencies, anomalies (insertion, deletion, update), and decomposition into 1NF, 2NF, 3NF, and BCNF.' },
      { id: 'transactions', title: 'Transaction Management & ACID Properties', shortTitle: 'Transactions & ACID', level: 'Advanced', desc: 'Atomicity, Consistency, Isolation, Durability, concurrency control, 2PL, schedules, and serializability.' },
      { id: 'indexing', title: 'Indexing & B+ Tree Storage', shortTitle: 'Indexing & Storage', level: 'Advanced', desc: 'Primary, secondary, clustered indexes, B-Trees, B+ Trees, hashing, and query optimization.' }
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
