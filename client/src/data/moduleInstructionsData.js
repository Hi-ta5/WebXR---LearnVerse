// Simple, kid-friendly module instructions for all LearnVerse WebXR topics
// Explains what each module is about in 1-2 easy sentences with clear, simple steps.

export const MODULE_INSTRUCTIONS = {
  // ── 1. COMPUTER NETWORKS ──────────────────────────────────────────────────
  'computer-networks': {
    'osi-model': {
      title: 'OSI 7 Layers',
      emoji: '💌',
      simpleExplanation: 'Computers send messages by wrapping them in layers, just like putting a letter inside several protective envelopes before mailing it!',
      howItWorks: 'Watch your message travel from a web browser on the left, pass through internet routers, and get unpacked at the server on the right.',
      funFact: 'Every single photo or text you send on your phone goes through all 7 layers in less than a second!'
    },
    'physical-layer': {
      title: 'Physical Layer & Signals',
      emoji: '⚡',
      simpleExplanation: 'Computer 1s and 0s turn into glowing electric waves and pulses that zoom through wires and radio waves.',
      howItWorks: 'Use the buttons to change the wave shape and see how electricity carries digital data from one computer to another.',
      funFact: 'Undersea fiber-optic cables carry internet signals across entire oceans at the speed of light!'
    },
    'network-topologies': {
      title: 'Network Topologies',
      emoji: '🕸️',
      simpleExplanation: 'Discover how computers connect in shapes like stars, circles, and webs so they can share files and play games together.',
      howItWorks: 'Switch between Star, Ring, Bus, and Mesh shapes to see which design is strongest if one wire gets unplugged.',
      funFact: 'In a Star network, everything connects to a central switch—just like planets orbiting the sun!'
    },
    'tcp-udp': {
      title: 'TCP vs UDP Protocols',
      emoji: '📦',
      simpleExplanation: 'Learn the difference between careful delivery (like tracked mail that checks every box) and fast delivery (like live video streaming)!',
      howItWorks: 'Click the handshake button to watch TCP check in with the server, or watch UDP blast data through without waiting.',
      funFact: 'Online multiplayer games often use UDP so your gameplay never lags!'
    },
    'routing': {
      title: 'Routing Algorithms',
      emoji: '🧭',
      simpleExplanation: 'Help smart digital routers find the fastest, shortest shortcut road across a giant map of computers.',
      howItWorks: 'Click any router node on the map to see Dijkstra algorithm highlight the quickest path in bright glowing light.',
      funFact: 'GPS maps on your phone use the exact same algorithm to find the quickest route home!'
    },
    'congestion-control': {
      title: 'Congestion Control',
      emoji: '🚦',
      simpleExplanation: 'See how the internet manages heavy traffic jams so data packets don’t crash into each other.',
      howItWorks: 'Adjust the pipe slider to see packets slow down when the pipe gets crowded and speed back up when it clears.',
      funFact: 'Just like cars on a highway during rush hour, data packets slow down safely to prevent network crashes!'
    }
  },

  // ── 2. OPERATING SYSTEMS ──────────────────────────────────────────────────
  'operating-systems': {
    'deadlocks': {
      title: 'Deadlocks & Resource Traffic',
      emoji: '🛑',
      simpleExplanation: 'Learn what happens when two programs get stuck waiting for each other, and how computers break the traffic jam!',
      howItWorks: 'Watch processes hold resources while asking for more. When a circular loop forms, the system turns red to alert you.',
      funFact: 'A deadlock is like two polite people standing in a doorway each saying: "No, after you!" forever!'
    },
    'threads': {
      title: 'Multi-Threading Helpers',
      emoji: '👩‍🍳',
      simpleExplanation: 'Imagine multiple chefs sharing the same kitchen! Threads are helper workers sharing memory to finish chores much faster.',
      howItWorks: 'Watch worker threads run side-by-side in 3D. See what happens when two helpers try to edit the same memory at once.',
      funFact: 'When you play a video game, one thread plays music while another thread draws 3D graphics!'
    },
    'process-management': {
      title: 'Process Lifecycle & Tasks',
      emoji: '📋',
      simpleExplanation: 'See how your computer wakes up an app, gives it time to do work on the CPU, and safely puts it to sleep when finished.',
      howItWorks: 'Click to spawn a new process and follow its journey through New, Ready, Running, and Done platforms.',
      funFact: 'Your computer has hundreds of quiet background processes working right now to keep things running!'
    },
    'cpu-scheduling': {
      title: 'CPU Scheduling & Turns',
      emoji: '⏳',
      simpleExplanation: 'Watch the computer’s brain (the CPU) decide which app gets to run next, just like taking turns on a playground slide!',
      howItWorks: 'Watch colored task blocks line up in queue. See how Round Robin gives each task an equal turn to execute.',
      funFact: 'A modern CPU switches between tasks millions of times each second so everything feels instant!'
    },
    'memory-management': {
      title: 'Virtual Memory & Pages',
      emoji: '📖',
      simpleExplanation: 'Explore the computer’s memory library, where books (pages of data) are organized and swapped onto shelves.',
      howItWorks: 'Watch the computer look up memory addresses in a page table and swap pages in and out of fast RAM storage.',
      funFact: 'Virtual memory lets your computer pretend it has much more memory than the physical chips inside it!'
    }
  },

  // ── 3. DATA STRUCTURES ────────────────────────────────────────────────────
  'data-structures': {
    'arrays': {
      title: 'Arrays & Memory Boxes',
      emoji: '🔢',
      simpleExplanation: 'Think of an egg carton with numbered slots! Learn how computers store and instantly find items using numbers.',
      howItWorks: 'Click on any index number to store, read, or replace an item stored in contiguous memory boxes.',
      funFact: 'Computer scientists start counting array slots at 0 instead of 1!'
    },
    'stacks': {
      title: 'Stack (LIFO)',
      emoji: '🥞',
      simpleExplanation: 'Like a stack of pancakes or cafeteria plates! The last plate you put on top is always the first one you eat (Last-In, First-Out).',
      howItWorks: 'Click Push to drop a new plate onto the stack, and click Pop to take the top plate away.',
      funFact: 'The "Undo" button in your favorite drawing app uses a stack to remember your previous steps!'
    },
    'queues': {
      title: 'Queue (FIFO)',
      emoji: '🍦',
      simpleExplanation: 'Just like waiting in line for delicious ice cream! The first kid to arrive is the first kid served (First-In, First-Out).',
      howItWorks: 'Click Enqueue to join the back of the line, and Dequeue to let the first person at the front step forward.',
      funFact: 'When you click Print on your computer, documents wait politely in a queue for the printer!'
    },
    'linked-lists': {
      title: 'Linked Lists',
      emoji: '🗺️',
      simpleExplanation: 'A fun treasure hunt where each box contains an item and a magic pointer arrow pointing to the very next box!',
      howItWorks: 'Follow the glowing arrows connecting nodes. Add or remove nodes to see how easy it is to grow the chain.',
      funFact: 'Music playlists work just like linked lists, where each song points to the next track!'
    },
    'trees': {
      title: 'Binary Search Trees',
      emoji: '🌳',
      simpleExplanation: 'An upside-down tree with branches! Smaller numbers branch to the left, and bigger numbers branch to the right.',
      howItWorks: 'Search for a number and watch the glowing spotlight climb down the branches in just a few quick steps.',
      funFact: 'Tree structures help computers search through billions of web pages in milliseconds!'
    }
  },

  // ── 4. NATURAL LANGUAGE PROCESSING (NLP) ──────────────────────────────────
  'nlp': {
    'nlp-intro': {
      title: 'Introduction to NLP',
      emoji: '🤖',
      simpleExplanation: 'Discover how computers learn to read books, understand questions, and speak human languages like English!',
      howItWorks: 'Follow a sentence as it enters the digital pipeline, gets cleaned up, analyzed, and turned into smart answers.',
      funFact: 'Voice assistants like Siri and Alexa use NLP to understand what you say!'
    },
    'tokenization': {
      title: 'Tokenization Puzzle',
      emoji: '🧩',
      simpleExplanation: 'Watch sentences get sliced into friendly bite-sized word puzzle pieces so computers can read them one-by-one.',
      howItWorks: 'Type a sentence and watch it instantly break apart into individual word tokens and punctuation tags.',
      funFact: 'Computers cannot read full paragraphs at once—they always break them into tokens first!'
    },
    'text-preprocessing': {
      title: 'Text Cleaning & Preprocessing',
      emoji: '🧼',
      simpleExplanation: 'Learn how computers tidy up messy words by removing punctuation, taking out boring filler words, and fixing letters.',
      howItWorks: 'See text transform: capital letters become lowercase, punctuation vanishes, and words shrink to their base root.',
      funFact: 'Words like "the", "is", and "at" are called stop words and are usually thrown out to save time!'
    },
    'pos-tagging': {
      title: 'Part-of-Speech Tagging',
      emoji: '🏷️',
      simpleExplanation: 'Label words with colorful badges showing if they are Actions (verbs), Things (nouns), or Descriptions (adjectives)!',
      howItWorks: 'Hover over words in a sentence to see their grammatical tags light up with definitions.',
      funFact: 'The same word "play" can be a noun ("a stage play") or a verb ("to play a game")!'
    },
    'ner': {
      title: 'Named Entity Recognition',
      emoji: '🔍',
      simpleExplanation: 'Be a digital detective! Spot famous people, cities, and important dates hidden inside stories.',
      howItWorks: 'Watch the AI highlight names in blue, locations in green, and organizations in gold.',
      funFact: 'News websites use NER to automatically link articles to maps of mentioned cities!'
    },
    'bag-of-words': {
      title: 'Bag of Words',
      emoji: '🎒',
      simpleExplanation: 'Toss all the words of a story into a magic counting basket to see which words appear most often.',
      howItWorks: 'Watch word frequency counters tally up each word to give the computer a summary fingerprint of the text.',
      funFact: 'Spam filters use word counts to catch junk emails filled with suspicious words!'
    },
    'tf-idf': {
      title: 'TF-IDF Word Weights',
      emoji: '⚖️',
      simpleExplanation: 'Find the rarest, most special words in a document that reveal what the story is really all about.',
      howItWorks: 'Compare common words with rare words to see how the mathematical score highlights true keywords.',
      funFact: 'Search engines use TF-IDF to find the most relevant articles when you search the web!'
    },
    'word-embeddings': {
      title: 'Word Embeddings in 3D',
      emoji: '🌌',
      simpleExplanation: 'See words floating in a 3D universe where words with similar meanings (like "cat" and "kitten") float close together!',
      howItWorks: 'Rotate around the 3D semantic cloud to see how computers learn that "king" is to "queen" as "man" is to "woman".',
      funFact: 'Computers understand word meanings using geometry and distances in multidimensional space!'
    },
    'sentiment-analysis': {
      title: 'Sentiment & Mood Analysis',
      emoji: '🎭',
      simpleExplanation: 'A digital mood ring! Watch the computer guess whether a sentence is happy, sad, or neutral.',
      howItWorks: 'Type or choose a message to see the emotion meter react with happy green, sad red, or neutral blue lights.',
      funFact: 'Movie studios use sentiment analysis to find out what fans think of new movie trailers!'
    }
  },

  // ── 5. DATABASE MANAGEMENT SYSTEMS (DBMS) ─────────────────────────────────
  'dbms': {
    'dbms-intro': {
      title: 'DBMS Architecture',
      emoji: '🏛️',
      simpleExplanation: 'Explore a giant digital vault that safely stores and organizes huge mountains of important information!',
      howItWorks: 'Look at the 3 tiers: the user screen at the top, the logic brain in the middle, and the hard drive storage below.',
      funFact: 'Every time you like a video or save a high score in a game, a database records it!'
    },
    'intro': {
      title: 'DBMS Architecture',
      emoji: '🏛️',
      simpleExplanation: 'Explore a giant digital vault that safely stores and organizes huge mountains of important information!',
      howItWorks: 'Look at the 3 tiers: the user screen at the top, the logic brain in the middle, and the hard drive storage below.',
      funFact: 'Every time you like a video or save a high score in a game, a database records it!'
    },
    'relational-model': {
      title: 'Relational Data Tables',
      emoji: '📊',
      simpleExplanation: 'Learn how information is arranged in colorful tables with rows and columns, just like a neat chart!',
      howItWorks: 'Inspect student records and primary keys—special unique numbers that prevent mixing up people with the same name.',
      funFact: 'Your school uses relational tables to match students with their classes and grades!'
    },
    'er-model': {
      title: 'Entity-Relationship Diagrams',
      emoji: '📐',
      simpleExplanation: 'Draw visual blueprints that show how different items, people, and places connect together.',
      howItWorks: 'Connect entities (like Students and Courses) using relationship diamonds and cardinality lines (1-to-Many).',
      funFact: 'Before building any giant app, software engineers always draw ER diagrams first!'
    },
    'sql-joins': {
      title: 'SQL Table Joins',
      emoji: '🔗',
      simpleExplanation: 'Snap together matching puzzle pieces from two different tables to see the whole story at once!',
      howItWorks: 'Compare Inner Join, Left Join, and Full Join to see which rows stay and which rows disappear.',
      funFact: 'Joins allow you to keep customer names in one table and their orders in another without repeating yourself!'
    },
    'sql-lab': {
      title: 'Interactive SQL Lab',
      emoji: '💻',
      simpleExplanation: 'Type simple instructions to create tables, save new items, and find answers in seconds!',
      howItWorks: 'Run SELECT, INSERT, and GROUP BY commands interactively and watch the 3D data table update instantly.',
      funFact: 'SQL stands for Structured Query Language and was invented way back in 1974!'
    },
    'normalization': {
      title: 'Database Normalization',
      emoji: '🧹',
      simpleExplanation: 'Tidy up your room! Organize messy tables so you don’t keep duplicate toys in multiple drawers.',
      howItWorks: 'Step through 1NF, 2NF, and 3NF to split clunky tables into sleek, tidy tables with zero waste.',
      funFact: 'Normalization prevents confusing bugs where someone changes an address in one place but forgets another!'
    },
    'transactions': {
      title: 'Transactions & ACID',
      emoji: '🏦',
      simpleExplanation: 'Bank rules! When you transfer money, either the whole transfer works or nothing changes—no half-done mistakes!',
      howItWorks: 'Simulate a bank transfer: watch Atomicity cancel the whole transfer safely if the power goes out midway.',
      funFact: 'ACID stands for Atomicity, Consistency, Isolation, and Durability!'
    },
    'indexing': {
      title: 'B+ Tree Indexing',
      emoji: '📚',
      simpleExplanation: 'Like an index at the back of a huge book—skip right to the exact page without reading every single line!',
      howItWorks: 'Search for a record and watch the B+ Tree probe hop down branches in just 3 fast hops.',
      funFact: 'Without indexes, finding one photo among billions would take minutes instead of a fraction of a second!'
    }
  }
};

/**
 * Helper to fetch kid-friendly instructions for any module with safe fallbacks
 */
export function getModuleInstructions(subjectId, topicId) {
  const subjectGroup = MODULE_INSTRUCTIONS[subjectId];
  if (subjectGroup && subjectGroup[topicId]) {
    return subjectGroup[topicId];
  }

  // Safe fallback if topic is not explicitly listed
  const cleanTitle = (topicId || '3D Lab')
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: cleanTitle,
    emoji: '🚀',
    simpleExplanation: `Welcome! In this 3D module, you will explore how ${cleanTitle} works in real-time.`,
    howItWorks: 'Interact with the 3D scene, look around using your mouse or finger, and listen as the voice guide explains each part.',
    funFact: 'Hands-on 3D learning helps your brain understand concepts much faster!'
  };
}
