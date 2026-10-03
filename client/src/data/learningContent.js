export const LEARNING_CONTENT = {
  'computer-networks': {
    'osi-model': {
      title: 'OSI Model Layers',
      subject: 'Computer Networks',
      description: 'The Open Systems Interconnection (OSI) model is a standardized conceptual framework that divides network communication functions into seven distinct logical layers. Developed by the ISO, it isolates specific communications tasks so different hardware and software vendors can work together seamlessly.',
      keyConcepts: [
        'Layer 7 (Application): Direct interaction interface with end-user applications (HTTP, SMTP, FTP).',
        'Layer 6 (Presentation): Translates, encrypts, and compresses data formatting (JPEG, ASCII, SSL/TLS).',
        'Layer 5 (Session): Establishes, maintains, and terminates dialogues between endpoints.',
        'Layer 4 (Transport): Manages packet segmentation, flow control, and end-to-end reliability (TCP, UDP).',
        'Layer 3 (Network): Determines routing paths and logical addressing (IPv4, IPv6, ICMP).',
        'Layer 2 (Data Link): Organizes packets into frames, checking physical MAC addresses.',
        'Layer 1 (Physical): Transmits raw unstructured bit streams over physical wiring or wireless bands.'
      ],
      realWorldExamples: 'When ordering a parcel online, the order details represent the Application layer. Packing the items into a standard box is the Presentation layer. Establishing the contract with the delivery agent is the Session layer. The delivery agency ensuring all items arrive together is the Transport layer. Labeling the parcel with the shipping address represents the Network layer. Putting the parcel onto a specific container/truck represents the Data Link layer. The actual movement of the wheels on the road is the Physical layer.',
      useCases: [
        'Network Troubleshooting: Isolating faults layer-by-layer (e.g., checking if the link light is on at Layer 1 before debug protocols at Layer 7).',
        'Standardization: Allowing third-party routers (Layer 3) to forward data from any computer vendor.'
      ],
      importantPoints: [
        'Data encapsulation adds control headers as messages move from Layer 7 down to Layer 1.',
        'Each layer depends solely on the services provided by the layer immediately below it.'
      ]
    },
    'physical-layer': {
      title: 'Physical Line Encoding Lab',
      subject: 'Computer Networks',
      description: 'The Physical Layer converts binary data streams (0s and 1s) into electrical, optical, or electromagnetic signals suited for transmission. Line encoding is the process of representing digital data in digital signals. This lab explores schemes like NRZ, Polar RZ, Manchester, and Bipolar AMI.',
      keyConcepts: [
        'Non-Return-to-Zero (NRZ): Binary 1 maps to high voltage, binary 0 maps to low voltage. Easy to implement but lacks clock sync.',
        'Polar RZ (Return-to-Zero): Voltage drops back to 0V mid-bit to help receiver synchronization.',
        'Manchester Encoding: Transitions in the middle of each bit period. A low-to-high transition represents 1, and a high-to-low transition represents 0.',
        'Bipolar AMI: Alternates polarity for binary 1s between +V and -V, while binary 0 stays at 0V. Helps avoid DC offset.'
      ],
      realWorldExamples: 'Traditional Morse code is a physical-layer signal where long and short sound bursts represent codes. Similarly, optical fibers blink light rapidly to represent binary sequences.',
      useCases: [
        'Ethernet cables: Standard networks use Manchester encoding to ensure sync and avoid signal baseline wander.',
        'Long-distance cables: Bipolar schemes are preferred to keep DC balance and protect electrical gear.'
      ],
      importantPoints: [
        'Self-synchronization is crucial for receivers to read signals at the exact rate they are sent.',
        'Different line encodings balance bandwidth consumption against error detection and sync benefits.'
      ]
    },
    'network-topologies': {
      title: 'Different Network Topologies',
      subject: 'Computer Networks',
      description: 'Network topology defines the physical or logical arrangement of links and nodes. Choosing a topology impacts network performance, routing complexity, fault tolerance, and installation costs.',
      keyConcepts: [
        'Star Topology: All nodes connect to a central hub/switch. Very common, easy to manage, but central hub is a single point of failure.',
        'Bus Topology: Nodes share a single main cable run. Cheap to install, but a single backbone break disconnects the whole network.',
        'Ring Topology: Nodes form a closed loop. Packets travel one-way, but a single node failure breaks the entire loop.',
        'Mesh Topology: Redundant point-to-point links. Full mesh connects everything to everything. High resilience but expensive and complex cabling.'
      ],
      realWorldExamples: 'Modern home Wi-Fi and office LANs use Star topology centered on a router. Public transit train lines often mirror Ring/Star combinations to link distant stations.',
      useCases: [
        'Data Centers: Mesh layouts ensure traffic routes around broken cables instantly.',
        'Small Office LANs: Star topology is cheap, clean, and easily expandable.'
      ],
      importantPoints: [
        'Physical topology represents the physical wiring, while logical topology represents actual data flow.',
        'Redundant topologies require active protocols (like Spanning Tree) to avoid infinite loops.'
      ]
    },
    'tcp-udp': {
      title: 'TCP/UDP Protocols',
      subject: 'Computer Networks',
      description: 'The Transport Layer protocols manage end-to-end data delivery. Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) serve different network needs, balancing reliability against speed.',
      keyConcepts: [
        'TCP: Connection-oriented. Requires a three-way handshake (SYN, SYN-ACK, ACK), guarantees in-order delivery, flow control, and error recovery.',
        'UDP: Connectionless and lightweight. Best-effort delivery without handshakes, ordering, or retries.',
        'Three-Way Handshake: Syncs sequence numbers between client and server to establish a safe channel.',
        'Flow Control: Sliding window mechanism limits outstanding packets, protecting slower receivers from being overwhelmed.'
      ],
      realWorldExamples: 'TCP is like registered post: you sign for delivery, and if a package is lost, it is resent. UDP is like a public announcement or broadcast: the speaker sends the voice waves, and if you miss a word, they do not repeat it.',
      useCases: [
        'TCP Use Cases: Web Browsing (HTTP/S), Email (SMTP), File Transfer (FTP) where every bit must arrive correctly.',
        'UDP Use Cases: Video Streaming, Online Gaming, VoIP where speed is critical and dropping a few frames is unnoticeable.'
      ],
      importantPoints: [
        'TCP overhead is high due to headers, handshakes, and acknowledgments.',
        'UDP headers are small (8 bytes vs. TCP\'s minimum 20 bytes), reducing transmission lag.'
      ]
    },
    'routing': {
      title: 'Routing Algorithms',
      subject: 'Computer Networks',
      description: 'Routing is the process of selecting paths across networks. Routers run routing algorithms to update routing tables, choosing optimal pathways based on cost metrics like distance, bandwidth, and hops.',
      keyConcepts: [
        'Static Routing: Manual route table configuration. Secure and predictable, but fails to adapt to network changes.',
        'Dynamic Routing: Algorithms compute optimal routes in real-time.',
        'Link-State Routing: Routers build a map of the entire network and calculate paths using Dijkstra\'s shortest path algorithm (e.g., OSPF).',
        'Distance Vector Routing: Routers share routing tables with direct neighbors periodically using Bellman-Ford algorithms (e.g., RIP).'
      ],
      realWorldExamples: 'Static routing is like driving a fixed route you wrote on paper. Dynamic routing is using GPS navigation that recalculates routes dynamically when a traffic jam is detected ahead.',
      useCases: [
        'Enterprise networks: OSPF computes fast, loop-free paths dynamically when lines go down.',
        'Internet Backbones: BGP manages routing across global autonomous networks.'
      ],
      importantPoints: [
        'Routing happens at Layer 3 (Network Layer) of the OSI model.',
        'Routing algorithms must avoid routing loops, where packets travel in endless circles.'
      ]
    },
    'congestion-control': {
      title: 'Congestion Control',
      subject: 'Computer Networks',
      description: 'Congestion occurs when too much data is sent through a network channel, exceeding router capacity and leading to packet drops. Congestion control algorithms prevent network collapse by throttling sender transmission rates.',
      keyConcepts: [
        'Congestion vs. Flow Control: Flow control protects a single receiver, whereas Congestion control protects the intermediate network switches and links.',
        'Leaky Bucket: Smooths bursty traffic by releasing packets at a constant rate. Excess packets leak out (are dropped) if the bucket overflows.',
        'Token Bucket: Allows bursty traffic up to bucket capacity but enforces a long-term average rate using tokens.',
        'TCP Congestion Control: Features Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery.'
      ],
      realWorldExamples: 'Congestion control is like a ramp meter light at highway entrances that limits cars entering to prevent traffic jams. A Leaky Bucket is like a funnel: no matter how fast you pour water in, it drips out at a steady rate.',
      useCases: [
        'ISP Traffic Shaping: Limiting bursty downloads to keep steady speeds for all users.',
        'Cloud APIs: Rate-limiting clients to prevent service crashes (DoS).'
      ],
      importantPoints: [
        'Packet loss is a primary indicator of network congestion in IP networks.',
        'Throttling must balance link utilization with fairness to other traffic.'
      ]
    }
  },
  'operating-systems': {
    'deadlocks': {
      title: 'Deadlocks & banker\'s Algorithm',
      subject: 'Operating Systems',
      description: 'A deadlock is a situation where a set of processes are blocked because each process holds a resource and waits for another resource held by another process in the set.',
      keyConcepts: [
        'Mutual Exclusion: Resources cannot be shared; only one process can hold a resource at a time.',
        'Hold and Wait: A process holding allocated resources can request additional ones.',
        'No Preemption: Resources cannot be forcibly taken from a process.',
        'Circular Wait: A closed loop of processes exists, where each waits for a resource held by the next.',
        'Banker\'s Algorithm: Avoids deadlocks by dynamically testing resource safety margins before allocating.'
      ],
      realWorldExamples: 'Imagine a narrow single-lane bridge. Two cars drive onto the bridge from opposite sides and meet in the middle. Neither car can move forward without the other backing up, but neither will yield.',
      useCases: [
        'Database Lock Management: Preventing transactions from blocking each other indefinitely.',
        'Embedded Systems: Enforcing strict resource orders to prevent system freezes.'
      ],
      importantPoints: [
        'All four Coffman conditions must hold simultaneously for a deadlock to exist.',
        'We handle deadlocks through Prevention (breaking conditions), Avoidance (Banker\'s), or Detection and Recovery (terminating processes).'
      ]
    },
    'threads': {
      title: 'Multi-Threads & Contexts',
      subject: 'Operating Systems',
      description: 'A thread is the smallest unit of execution within a process. Multi-threading allows programs to run tasks concurrently, sharing resources like memory while maintaining independent execution paths.',
      keyConcepts: [
        'Process vs. Thread: A process is an independent program with its own memory space. Threads exist inside a process and share its heap, files, and code segments.',
        'Thread Context: Each thread has its own Stack, Program Counter (PC), and CPU Registers.',
        'Race Conditions: Occur when multiple threads access shared data concurrently, and the outcome depends on the timing.',
        'Synchronization: Using Mutexes, Semaphores, and Locks to protect critical sections and prevent race conditions.'
      ],
      realWorldExamples: 'Think of a process as a restaurant kitchen. The kitchen has shared appliances, pots, and food stocks (Heap/Resources). Each chef (Thread) works independently on their recipe stack, using their own tools but sharing the space.',
      useCases: [
        'Web Servers: Spawning threads to handle thousands of concurrent client requests.',
        'UI Applications: Keeping the interface responsive on a separate thread while loading files.'
      ],
      importantPoints: [
        'Thread context switches are faster than process context switches because memory page tables do not need to be swapped.',
        'Incorrect synchronization leads to race conditions, deadlocks, or thread starvation.'
      ]
    },
    'process-management': {
      title: 'Process Management & PCB',
      subject: 'Operating Systems',
      description: 'Process management coordinates process execution. The operating system tracks each process using a Process Control Block (PCB), switching processes on and off CPU cores to execute tasks.',
      keyConcepts: [
        'Process States: New, Ready, Running, Waiting, Terminated.',
        'Process Control Block (PCB): Kernel data structure storing PID, state, PC, CPU registers, scheduling queue details, and memory limits.',
        'Context Switching: The OS saves the CPU registers of a running process into its PCB and loads the saved registers of a ready process.',
        'Forking: Spawning child processes from a parent process, creating a separate copy of the memory space.'
      ],
      realWorldExamples: 'Cooking from a recipe book: if the phone rings, you write down your current step number (PC) and put down your spatula (Registers). You answer the phone. When done, you read your note and resume exactly where you left off.',
      useCases: [
        'Multitasking: Swapping processes rapidly to give the illusion that music, chat, and browsers run simultaneously.',
        'Shell Execution: Launching programs from terminal interfaces via fork-and-exec routines.'
      ],
      importantPoints: [
        'Context switching introduces overhead, as the CPU spends time saving/loading states rather than executing programs.',
        'Orphan and Zombie processes occur when parent processes do not clean up child processes properly.'
      ]
    },
    'cpu-scheduling': {
      title: 'CPU Scheduling Algorithms',
      subject: 'Operating Systems',
      description: 'CPU scheduling decides which process in the ready queue gets the CPU core. Different scheduling algorithms optimize metrics like CPU utilization, throughput, turnaround time, waiting time, and response time.',
      keyConcepts: [
        'First-Come, First-Served (FCFS): Non-preemptive. Simple queue execution, but prone to the convoy effect (long tasks delay short ones).',
        'Shortest Job First (SJF): Schedules the task with the shortest CPU burst next. Prone to starving long-running processes.',
        'Round Robin (RR): Preemptive. Each process gets a small slice of CPU time (time quantum) in a circular cycle. Very fair for interactive systems.',
        'Priority Scheduling: CPU goes to the highest-priority process. Solve starvation with aging (raising priority over time).'
      ],
      realWorldExamples: 'FCFS is a checkout queue at the grocery store. SJF is letting someone with one carton of milk skip ahead of you. Round Robin is a card dealer distributing one card at a time to players in a circle.',
      useCases: [
        'Time-Sharing Systems: Round Robin ensures all users get fast responses.',
        'Real-Time Systems: Priority scheduling guarantees critical tasks finish before deadlines.'
      ],
      importantPoints: [
        'Preemptive algorithms can interrupt a running process, whereas non-preemptive algorithms let processes run until they yield or block.',
        'Choosing the right time quantum in Round Robin is key: too large becomes FCFS, too small causes excessive context-switch overhead.'
      ]
    },
    'memory-management': {
      title: 'Memory Management Systems',
      subject: 'Operating Systems',
      description: 'Memory management coordinates the system\'s primary memory (RAM), mapping virtual addresses used by processes to physical memory addresses. It ensures processes run securely without corrupting each other.',
      keyConcepts: [
        'Virtual Memory: Decouples process address space from physical RAM, allowing programs larger than RAM to execute.',
        'Paging: Divides virtual memory into pages and physical memory into frames. Mappings are managed via a Page Table.',
        'Translation Lookaside Buffer (TLB): A hardware cache that stores virtual-to-physical address mappings to speed up lookups.',
        'Page Faults: Occurs when a process accesses a page not loaded in RAM, triggering the OS to load it from the disk.',
        'Page Replacement: Algorithms like FIFO, Least Recently Used (LRU), and Optimal that swap pages when RAM is full.'
      ],
      realWorldExamples: 'A library desk: the desk represents RAM, and the archives represent the hard drive. You fetch books (pages) to read on the desk. If the desk is full and you need another book (page fault), you return the least recently used book (LRU) to the archive.',
      useCases: [
        'RAM Conservation: Sharing system library codes in memory across processes using shared read-only pages.',
        'Protection: Preventing a process from reading or overwriting another process\'s memory range.'
      ],
      importantPoints: [
        'Thrashing occurs when the OS spends more time swapping pages in and out of disk than executing processes.',
        'Virtual memory uses hardware support (Memory Management Unit or MMU) to perform address translations instantly.'
      ]
    }
  },
  'data-structures': {
    'arrays': {
      title: 'Contiguous Array Lab',
      subject: 'Data Structures',
      description: 'An array is a collection of elements stored in contiguous memory locations. Because memory is sequential, the address of any element can be computed immediately from its index.',
      keyConcepts: [
        'Contiguous Memory: Elements are stored side-by-side in memory.',
        'Random Access: Accessing any element by index takes constant time O(1) using: Address = Base + Index * ElementSize.',
        'Insertion/Deletion Cost: Adding or removing elements at intermediate indices requires shifting subsequent elements, costing O(N).',
        'Dynamic Arrays: Resizable arrays (like vectors) that double their capacity when full, averaging O(1) amortized insertion cost.'
      ],
      realWorldExamples: 'A row of locked mailboxes: each mailbox has a sequential number. If you know the number, you can open it immediately (random access). Inserting a new mailbox in the middle requires physically shifting all other mailboxes down.',
      useCases: [
        'Lookup Tables: Storing fixed keys or constant data structures where immediate lookup is needed.',
        'Underlying buffers: Implementing Stacks, Queues, or Heap structures.'
      ],
      importantPoints: [
        'Array sizes are fixed upon allocation unless dynamic structures are used.',
        'Cache Locality: Contiguous layouts optimize CPU cache line loads, making array traversals extremely fast.'
      ]
    },
    'stacks': {
      title: 'LIFO Stack Register',
      subject: 'Data Structures',
      description: 'A stack is a linear data structure that follows the Last-In, First-Out (LIFO) principle. Elements are added and removed from the same end, called the "top" of the stack.',
      keyConcepts: [
        'LIFO Principle: The last element added is the first one removed.',
        'Core Operations: Push (insert on top), Pop (remove from top), and Peek (view top element). All operate in O(1) time.',
        'Call Stack: Used by compilers to track active function calls, local variables, and return addresses during execution.',
        'Stack Overflow: Happens when too many elements are pushed onto a stack with limited size, like deep recursive loops.'
      ],
      realWorldExamples: 'A stack of dinner plates: you put a plate on the top (Push), and you take the plate off the top (Pop). You cannot remove the bottom plate without removing all the plates above it first.',
      useCases: [
        'Undo/Redo: Tracking edits in editors, where hitting undo removes the most recent change.',
        'Expression Parsing: Evaluating nested brackets and arithmetic structures in compilers.',
        'Backtracking: Saving previous coordinates during maze solving or graph searches.'
      ],
      importantPoints: [
        'Stacks can be implemented using either sequential arrays or dynamic linked lists.',
        'Accessing elements below the top requires popping off all elements above them.'
      ]
    },
    'queues': {
      title: 'FIFO Queue Pipeline',
      subject: 'Data Structures',
      description: 'A queue is a linear data structure that follows the First-In, First-Out (FIFO) principle. Elements enter at one end (rear) and exit at the other end (front), ensuring fair processing.',
      keyConcepts: [
        'FIFO Principle: The first element added is the first one removed.',
        'Core Operations: Enqueue (insert at rear) and Dequeue (remove from front). Both run in O(1) time.',
        'Circular Queue: Solves memory waste in array-based queues by wrapping pointers around using modulo arithmetic: `(rear + 1) % Capacity`.',
        'Priority Queue: Elements are processed based on priority, rather than simple arrival sequence.'
      ],
      realWorldExamples: 'A queue of people waiting for a bus: the first person in line gets on the bus first (Dequeue), and new people join the end of the line (Enqueue).',
      useCases: [
        'Task Scheduling: Operating system queues that manage processes waiting for CPU time or printer print jobs.',
        'Network Buffering: Storing router packets in queue buffers before transmission.',
        'Breadth-First Search (BFS): Tracking nodes to visit during level-order tree and graph traversals.'
      ],
      importantPoints: [
        'Simple array queues suffer from shifting overhead unless implemented as circular queues or linked nodes.',
        'Double-Ended Queues (Deques) allow insertion and deletion at both ends.'
      ]
    },
    'linked-lists': {
      title: 'Dynamic Linked Nodes',
      subject: 'Data Structures',
      description: 'A linked list is a linear data structure where elements are not stored in contiguous memory. Instead, elements are stored in separate nodes, and each node links to the next using a memory address pointer.',
      keyConcepts: [
        'Dynamic Allocation: Memory is allocated on-demand in the heap, allowing lists to grow or shrink without resizing overhead.',
        'Node Structure: Contains the data value and a pointer (reference) to the next node.',
        'Types of Lists: Singly Linked (forward links), Doubly Linked (forward and backward links), Circular Linked (last node links back to head).',
        'Access Complexity: Accessing an element requires traversing from the head node, taking O(N) linear time.'
      ],
      realWorldExamples: 'A scavenger hunt: each clue gives you a message (data) and the address of the next clue (pointer). You cannot find the fifth clue without visiting the first four clues first.',
      useCases: [
        'Dynamic Allocation: Creating lists when the total number of items is unknown.',
        'Image Carousel: Implementing circular playlists or carousels using circular linked lists.',
        'Hash Collisions: Chaining key-value items inside hash table buckets.'
      ],
      importantPoints: [
        'Inserting or deleting nodes at a known reference is very fast, taking O(1) pointer updates.',
        'Linked lists do not enjoy CPU cache locality because nodes are scattered in memory.'
      ]
    },
    'trees': {
      title: 'Hierarchical Tree Visualizer',
      subject: 'Data Structures',
      description: 'A tree is a non-linear hierarchical data structure consisting of nodes connected by edges. Trees organize data hierarchically starting from a single node called the root.',
      keyConcepts: [
        'Root & Leaves: The root is the top node. Leaves are terminal nodes with no children.',
        'Binary Search Tree (BST): A binary tree where the left subtree contains values less than the parent, and the right subtree contains values greater.',
        'Balanced Trees (AVL, Red-Black): Adjust heights dynamically during insertions to keep search steps bounded to O(log N).',
        'Traversals: Systematic traversal paths, including In-order (Left-Root-Right), Pre-order (Root-Left-Right), and Post-order (Left-Right-Root).'
      ],
      realWorldExamples: 'A company organization chart: the CEO is at the root, VPS are children, managers are sub-children, down to individual contributors at the leaf nodes.',
      useCases: [
        'File Systems: Directories and folders nested hierarchically.',
        'Database Indexes: B-Trees and B+ Trees optimize index searches to O(log N).',
        'Auto-Complete: Trie structures optimize prefix word searches.'
      ],
      importantPoints: [
        'A skewed BST degenerates into a linear list, turning search speeds into O(N). Self-balancing rules are required.',
        'In-order traversal of a Binary Search Tree always outputs elements in sorted order.'
      ]
    }
  },
  'nlp': {
    'nlp-intro': {
      title: 'Introduction to NLP & Pipeline',
      subject: 'Natural Language Processing',
      description: 'Natural Language Processing (NLP) is an interdisciplinary field at the intersection of computer science, artificial intelligence, and linguistics. It focuses on giving computers the ability to understand, interpret, generate, and manipulate human language in a valuable and contextually accurate manner.',
      keyConcepts: [
        'End-to-End Pipeline: The standardized flow from raw unstructured text input through normalization, syntactic parsing, semantic feature extraction, to model prediction.',
        'Ambiguity in Human Language: Lexical, syntactic, and semantic ambiguities present core challenges where words or phrases possess multiple meanings based on context.',
        'Morphology & Syntax: Studying word structure and sentence grammatical organization governing valid linguistic combinations.',
        'Semantics & Pragmatics: Deciphering the literal and contextual intended meaning behind written sentences.'
      ],
      realWorldExamples: 'When you ask a digital assistant like Siri or Google Assistant a question, the audio is converted to text (STT), parsed through an NLP pipeline to determine user intent and extracted slots, and synthesized into a spoken response.',
      useCases: [
        'Virtual Assistants & Chatbots: Providing automated conversational AI customer support.',
        'Machine Translation: Seamlessly converting text between languages (e.g., English to Spanish).',
        'Information Retrieval: Powering search engines to retrieve contextually relevant documents.'
      ],
      importantPoints: [
        'Computers do not natively understand text; NLP transforms symbolic words into numeric mathematical representations.',
        'Each phase of the pipeline builds upon the structural transformations produced by the previous step.'
      ]
    },
    'tokenization': {
      title: 'Tokenization Techniques',
      subject: 'Natural Language Processing',
      description: 'Tokenization is the foundational step of NLP that segments contiguous text streams into discrete structural units called tokens (such as words, characters, or subwords). These tokens become the atomic vocabulary elements fed into downstream models.',
      keyConcepts: [
        'Word Tokenization: Splitting sentences on whitespace and punctuation into individual words.',
        'Sentence Tokenization (Sentence Boundary Disambiguation): Splitting long paragraphs into standalone sentences using punctuation delimiters.',
        'Subword Tokenization (BPE, WordPiece): Breaking rare or compound words into frequent sub-lexical segments (e.g., "unbreakable" -> "un", "break", "able") to handle out-of-vocabulary (OOV) tokens gracefully.',
        'Character Tokenization: Segmenting text character-by-character to eliminate OOV issues at the cost of losing word-level semantics.'
      ],
      realWorldExamples: 'Modern Large Language Models (LLMs) like GPT and Gemini use Byte-Pair Encoding (BPE) subword tokenizers, converting complex technical terms into digestible sub-token IDs.',
      useCases: [
        'Vocabulary Construction: Building the index dictionary mapping unique tokens to numeric IDs.',
        'Text Chunking: Preparing text sequences of fixed context lengths for transformer models.'
      ],
      importantPoints: [
        'Subword tokenization strikes the optimal balance between character-level flexibility and word-level semantic density.',
        'Handling punctuation, contractions (e.g., "don\'t" -> "do", "n\'t"), and hyphenated terms requires standardized tokenizer rules.'
      ]
    },
    'text-preprocessing': {
      title: 'Text Preprocessing & Cleaning',
      subject: 'Natural Language Processing',
      description: 'Text preprocessing cleans and normalizes raw text to remove noise, reduce vocabulary dimensionality, and eliminate non-informative variations. Standard routines include case normalization, punctuation removal, stop-word filtering, stemming, and lemmatization.',
      keyConcepts: [
        'Case Normalization: Converting all text to lowercase so that "Learn", "LEARN", and "learn" map to a single vocabulary token.',
        'Punctuation & Special Character Stripping: Removing symbols, emojis, and noise that do not contribute to core grammatical or semantic meaning.',
        'Stop-Word Filtering: Removing ubiquitous, high-frequency grammatical words (e.g., "the", "is", "at", "which") that carry minimal discriminative signal in bag-of-words tasks.',
        'Stemming: Heuristic rule-based truncation (e.g., Porter Stemmer) chopping suffixes like "-ing", "-ed", and "-s" to yield word stems (e.g., "studying" -> "studi").',
        'Lemmatization: Morphological vocabulary lookup (e.g., WordNet Lemmatizer) using parts of speech to return genuine dictionary base forms (e.g., "better" -> "good", "was" -> "be").'
      ],
      realWorldExamples: 'Search engines strip common noise words and stem search queries so that searching for "running shoes" immediately retrieves documents containing "run shoe" and "runner shoes".',
      useCases: [
        'Topic Modeling: Reducing feature matrix sparsity before Latent Dirichlet Allocation (LDA).',
        'Spam Filtering: Normalizing email body contents before Naive Bayes classification.'
      ],
      importantPoints: [
        'Stemming is fast but crude (often producing non-words), whereas Lemmatization is linguistically accurate but requires dictionary lookups.',
        'Modern deep learning models often retain punctuation and capitalization for syntax and sentiment cues.'
      ]
    },
    'pos-tagging': {
      title: 'Part-of-Speech (POS) Tagging',
      subject: 'Natural Language Processing',
      description: 'Part-of-Speech (POS) tagging is the process of marking up a word in a text as corresponding to a particular part of speech (Noun, Verb, Adjective, Adverb, Preposition, Pronoun, etc.) based on both its definition and its syntactic context within the sentence.',
      keyConcepts: [
        'Penn Treebank Tagset: Standardized linguistic tags such as NN (singular noun), NNS (plural noun), VB (verb base form), VBD (verb past tense), JJ (adjective), RB (adverb), and IN (preposition).',
        'Syntactic Disambiguation: Resolving words that function as different parts of speech depending on context (e.g., "book a flight" [Verb] vs "read a book" [Noun]).',
        'Statistical Tagging: Using Hidden Markov Models (HMM), Maximum Entropy (MaxEnt), or Bi-LSTM architectures to determine the most probable sequence of tags.',
        'Rule-Based vs Contextual Tagging: Combining lexical dictionaries with surrounding token n-gram probability transitions.'
      ],
      realWorldExamples: 'Grammar checkers like Grammarly use POS tagging to detect syntactic anomalies, such as improper subject-verb agreement or misplaced modifiers in essays.',
      useCases: [
        'Grammar Checking: Identifying syntactic structure to suggest grammatical corrections.',
        'Word Sense Disambiguation: Disambiguating word senses prior to translation.',
        'Named Entity Recognition: Providing prerequisite feature inputs for entity extractors.'
      ],
      importantPoints: [
        'Surrounding word context is vital because homographs (identical spelling) change syntactic function based on sentence placement.',
        'POS tags provide the foundational structural scaffolding needed for dependency parsing and semantic tree generation.'
      ]
    },
    'ner': {
      title: 'Named Entity Recognition (NER)',
      subject: 'Natural Language Processing',
      description: 'Named Entity Recognition (NER) identifies, extracts, and categorizes key information (entities) in unstructured text into predefined classes such as person names, organizations, geographic locations, dates, monetary values, and quantities.',
      keyConcepts: [
        'BIO / IOB Tagging Scheme: Standard sequence labeling where B- prefix denotes the Beginning of an entity, I- denotes Inside the entity, and O denotes Outside any entity.',
        'Standard Entity Classes: PER (Person), ORG (Organization), LOC/GPE (Location/Geopolitical Entity), DATE (Time/Date), and MISC (Miscellaneous).',
        'Sequence Tagging Architecture: Combining contextual token embeddings with Conditional Random Fields (CRF) or Transformer self-attention to maintain entity boundaries.',
        'Knowledge Base Linking: Connecting recognized entity mentions to unique entries in knowledge graphs (e.g., Wikipedia or Wikidata IDs).'
      ],
      realWorldExamples: 'Customer support systems automatically scan incoming customer emails to identify product names (ORG), user account numbers (ID), and dates (DATE) to auto-route tickets to the correct support queue.',
      useCases: [
        'Automated Document Indexing: Extracting key figures, companies, and locations from financial filings.',
        'Medical Information Extraction: Identifying disease symptoms, pharmaceutical drugs, and dosages from doctor notes.',
        'Resume Parsing: Automatically extracting applicant names, universities, companies, and certifications.'
      ],
      importantPoints: [
        'Boundary detection is just as important as entity classification (e.g., identifying "New York University" as a single ORG entity rather than a LOC followed by an ORG).',
        'Context determines entity classification (e.g., "Apple" can be classified as an ORG or a FOOD depending on context).'
      ]
    },
    'bag-of-words': {
      title: 'Bag of Words (BoW) Model',
      subject: 'Natural Language Processing',
      description: 'The Bag of Words (BoW) model is a fundamental text representation technique that simplifies text by converting it into a numeric vector of word frequencies. In this model, grammar and word order are disregarded, retaining only the multiplicity of words within the document.',
      keyConcepts: [
        'Vocabulary Extraction: Identifying the set of all unique words present across an entire document corpus.',
        'Frequency Vectorization: Representing each document as a vector where the index corresponds to a vocabulary term and the value represents the term\'s count in that document.',
        'Sparsity: Since documents contain only a tiny fraction of the global vocabulary, BoW vectors are predominantly zeros (high sparsity).',
        'Loss of Order & Semantics: BoW treats text like a literal "bag of words", meaning "not good, very bad" and "not bad, very good" produce identical vectors.'
      ],
      realWorldExamples: 'Spam filters historically used Bag of Words frequency vectors with Naive Bayes classifiers to score how frequently words like "lottery", "winner", "cash", and "prize" appeared in incoming messages.',
      useCases: [
        'Document Classification: Classifying news articles into categories (Sports, Finance, Tech) based on keyword frequency distributions.',
        'Spam Detection: Scoring incoming emails for characteristic spam token frequencies.'
      ],
      importantPoints: [
        'BoW ignores word order, context, and syntactic relationships.',
        'High-dimensional sparse vectors can cause computational bottlenecks and the curse of dimensionality if the vocabulary is not pruned.'
      ]
    },
    'tf-idf': {
      title: 'TF-IDF Weighting & Vector Space',
      subject: 'Natural Language Processing',
      description: 'Term Frequency-Inverse Document Frequency (TF-IDF) is a numerical statistic intended to reflect how important a word is to a specific document within a collection or corpus. It rewards words that occur frequently in a single document while penalizing words that appear ubiquitously across all documents.',
      keyConcepts: [
        'Term Frequency (TF): Measures how frequently a term t appears in document d: TF(t, d) = count(t, d) / total_words(d).',
        'Inverse Document Frequency (IDF): Measures how rare a term is across all N documents in corpus D: IDF(t, D) = log(N / (1 + count(documents containing t))).',
        'TF-IDF Formula: TF-IDF(t, d, D) = TF(t, d) * IDF(t, D). Common words (like "the", "system") get low IDF, while rare topical keywords get high scores.',
        'Cosine Similarity in Vector Space: Measuring the angle between two normalized TF-IDF document vectors to determine document relevance and topic similarity.'
      ],
      realWorldExamples: 'Search engines use TF-IDF and BM25 algorithms to rank search results by matching user query terms against web documents, scoring rarer query terms with much higher relevance weight.',
      useCases: [
        'Search Engine Ranking: Retrieving and ordering web pages by keyword relevance.',
        'Automated Keyword Extraction: Identifying the top 5 most descriptive topic keywords for a research paper.',
        'Document Similarity & Clustering: Grouping related legal contracts or research studies.'
      ],
      importantPoints: [
        'TF-IDF prevents frequent domain stop-words from dominating document representations.',
        'Like BoW, traditional TF-IDF still suffers from lexical mismatch (synonyms like "automobile" and "car" have orthogonal vectors).'
      ]
    },
    'word-embeddings': {
      title: 'Word Embeddings & Semantic Vectors',
      subject: 'Natural Language Processing',
      description: 'Word Embeddings map words into continuous, dense vector spaces where semantically similar words are located close to each other. Popularized by algorithms like Word2Vec (Skip-Gram, CBOW), GloVe, and FastText, embeddings capture syntactic, semantic, and relational nuances.',
      keyConcepts: [
        'Dense Distributed Representations: Words are represented by low-dimensional continuous vectors (e.g., 100 to 300 dimensions) where every dimension captures latent semantic features.',
        'Distributional Hypothesis: "You shall know a word by the company it keeps" (J.R. Firth). Words appearing in similar contexts share similar vector directions.',
        'Vector Arithmetic & Analogies: Linear vector math captures relationships (e.g., vector("King") - vector("Man") + vector("Woman") ≈ vector("Queen")).',
        'Cosine Similarity: Calculating the cosine of the angle between two word vectors to quantify semantic closeness (ranges from -1 to 1).'
      ],
      realWorldExamples: 'Recommendation engines embed product names and user search queries in the same semantic vector space, allowing them to recommend "raincoat" even if the customer searched for "waterproof jacket".',
      useCases: [
        'Semantic Search: Finding relevant documents based on concept meaning rather than exact keyword matches.',
        'Sentiment & Sentiment Transfer: Preserving semantic connotations across deep neural classifiers.',
        'Language Translation: Mapping vector spaces between multiple languages.'
      ],
      importantPoints: [
        'Dense embeddings overcome the curse of dimensionality and sparsity inherent in one-hot and BoW vectors.',
        'Static embeddings (Word2Vec) assign one vector per word, whereas contextual embeddings (BERT, RoBERTa) adjust word vectors based on surrounding sentence context.'
      ]
    },
    'sentiment-analysis': {
      title: 'Sentiment Analysis & Classification',
      subject: 'Natural Language Processing',
      description: 'Sentiment Analysis (opinion mining) analyzes digital text to determine the underlying emotional tone, attitude, and polarity (positive, negative, neutral) expressed by the author. Approaches range from rule-based lexicons (VADER, SentiWordNet) to deep fine-tuned transformers.',
      keyConcepts: [
        'Polarity Classification: Categorizing text into discrete polarities (Positive, Negative, Neutral) or continuous sentiment scores from -1.0 to +1.0.',
        'Subjectivity vs Objectivity: Distinguishing between factual objective statements and subjective opinions expressing beliefs and emotions.',
        'Aspect-Based Sentiment Analysis (ABSA): Identifying sentiment towards specific product attributes (e.g., "The camera is incredible [Positive], but the battery life is terrible [Negative]").',
        'Handling Negations & Sarcasm: Correctly modeling linguistic modifiers (e.g., "not good", "barely functional") and ironic sarcasm that invert literal word meanings.'
      ],
      realWorldExamples: 'E-commerce platforms like Amazon automatically aggregate thousands of customer reviews to compute average sentiment breakdowns and highlight positive vs negative aspect summaries.',
      useCases: [
        'Brand Reputation Monitoring: Tracking social media mentions and customer sentiment towards brand campaigns.',
        'Financial Market Prediction: Analyzing earnings call transcripts and financial news headlines to assess market mood.',
        'Customer Feedback Triage: Prioritizing urgent negative customer tickets for immediate resolution.'
      ],
      importantPoints: [
        'Negation words ("not", "never", "hardly") flip sentiment polarities and require n-gram or contextual attention parsing.',
        'Domain-specific vocabulary is critical: "unpredictable" may be negative for an operating system, but positive for a mystery novel.'
      ]
    }
  },
  'dbms': {
    'dbms-intro': {
      title: 'Introduction to DBMS & Architecture',
      subject: 'Database Management Systems',
      description: 'A Database Management System (DBMS) is specialized system software designed to create, define, manage, retrieve, and update structured data efficiently. It replaces traditional file processing systems by eliminating data redundancy, ensuring consistency, enforcing security, and providing multi-user transaction guarantees through the 3-tier ANSI-SPARC architecture.',
      keyConcepts: [
        'Three-Level ANSI-SPARC Architecture: External Level (User/View level), Conceptual Level (Logical schema & entity relationships), and Internal Level (Physical byte storage, indexes, and allocation).',
        'Physical Data Independence: Modifying internal physical storage structures without requiring changes to conceptual schemas.',
        'Logical Data Independence: Altering logical schemas (e.g., adding tables/attributes) without breaking external user views or applications.',
        'DBMS vs Traditional File Systems: Solves data isolation, duplicate records (redundancy), concurrency anomalies, unauthorized data access, and lack of atomic transaction support.'
      ],
      realWorldExamples: 'An online banking portal: A customer checks their balance on a mobile app (External View). The bank\'s backend defines accounts, loans, and customer entities (Conceptual Schema). The data center stores these records as partitioned B+ tree blocks on SSD storage arrays (Internal Physical Layer).',
      useCases: [
        'Enterprise Resource Planning (ERP): Centralized corporate database managing inventory, payroll, and supply chain across multiple regional branches.',
        'Airline Reservation Systems: High-concurrency seat booking across millions of global requests without double-booking.'
      ],
      importantPoints: [
        'Data abstraction hides complex storage and hardware details through progressive logical layers.',
        'A Database Administrator (DBA) oversees schema design, security permissions, and query tuning.'
      ]
    },
    'relational-model': {
      title: 'Relational Data Model & Keys',
      subject: 'Database Management Systems',
      description: 'Introduced by E.F. Codd, the Relational Model represents data logically as two-dimensional relations (tables) composed of tuples (rows) and attributes (columns). It provides mathematical rigor based on first-order predicate logic and set theory, governed by primary, candidate, super, and foreign keys.',
      keyConcepts: [
        'Relation Schema & Instance: A schema defines table name and attribute definitions R(A1, A2, ... An); an instance is the set of tuples populated at any given moment.',
        'Candidate Key vs Primary Key: A candidate key is any minimal superkey that uniquely identifies tuples. The DBA selects one candidate key as the Primary Key (must be non-null and unique).',
        'Foreign Key & Referential Integrity: An attribute in a referencing table that matches the primary key of a referenced table, ensuring records cannot point to non-existent parents.',
        'Domain Integrity & Entity Integrity: Domain constraints restrict allowed data types/ranges, while Entity Integrity dictates that primary key attributes cannot contain NULL values.'
      ],
      realWorldExamples: 'A university system: The "Students" table uses Student_ID as the Primary Key. The "Enrollments" table contains Student_ID as a Foreign Key referencing Students, guaranteeing no student can enroll in a course unless their student profile exists.',
      useCases: [
        'Customer Relationship Management (CRM): Linking customer contacts, orders, and support tickets with strict referential integrity.',
        'E-Commerce Cart Management: Linking order line items to specific product catalog SKUs.'
      ],
      importantPoints: [
        'Every relation in a relational database must have at least one candidate key (at worst, all attributes combined).',
        'Cascading actions (ON DELETE CASCADE, ON UPDATE CASCADE) automatically propagate key updates.'
      ]
    },
    'er-model': {
      title: 'Entity-Relationship (ER) Modeling',
      subject: 'Database Management Systems',
      description: 'Entity-Relationship (ER) Modeling is a conceptual database design tool used to visually represent real-world entities, their properties (attributes), and the semantic associations (relationships) between them. ER models are systematically mapped into relational schemas for physical implementation.',
      keyConcepts: [
        'Entities & Entity Sets: Real-world objects with independent existence (e.g., Student, Course). Strong entities have primary keys; Weak entities depend on identifying owner entities for identity.',
        'Attribute Types: Simple vs Composite (e.g., Name -> First, Last), Single-valued vs Multi-valued (e.g., PhoneNumbers), and Derived (e.g., Age derived from DateOfBirth).',
        'Relationship Cardinality & Participation: 1:1 (One-to-One), 1:N (One-to-Many), M:N (Many-to-Many). Participation can be Total (double line) or Partial (single line).',
        'ER-to-Relational Mapping: Strong entities convert to tables; M:N relationships convert to junction/bridge tables containing foreign keys of both participating entities.'
      ],
      realWorldExamples: 'Hospital Management System: "Doctor" and "Patient" are strong entities. The "Consultation" relationship is M:N because a doctor treats many patients, and a patient consults many doctors. The mapping creates a junction table "Appointments(Doctor_ID, Patient_ID, Date, Prescription)".',
      useCases: [
        'Initial Enterprise Architecture: Translating stakeholder business requirements into clean architectural blueprints.',
        'Schema Refactoring: Identifying hidden redundancies and unneeded relationships before coding application backends.'
      ],
      importantPoints: [
        'Weak entities require a partial discriminator attribute and a foreign key from the identifying strong entity.',
        'Multi-valued attributes must be decomposed into separate relations to satisfy 1st Normal Form.'
      ]
    },
    'sql-joins': {
      title: 'SQL Queries & Table Joins',
      subject: 'Database Management Systems',
      description: 'SQL Joins allow relational database engines to combine rows from two or more tables based on matching related columns. Understanding INNER, LEFT, RIGHT, FULL OUTER, and CROSS joins is essential for querying normalized data structures across disparate tables.',
      keyConcepts: [
        'INNER JOIN: Returns only tuples that have matching values in both tables based on the join predicate.',
        'LEFT (OUTER) JOIN: Returns all records from the left table and matched records from the right table; unmatched right attributes become NULL.',
        'RIGHT (OUTER) JOIN: Returns all records from the right table and matched records from the left table with NULL padding where unmatched.',
        'FULL OUTER JOIN: Combines the results of both LEFT and RIGHT joins, returning all rows from both tables with NULLs in non-matching positions.',
        'CROSS JOIN & Natural Join: Cartesian product producing N * M row combinations; Natural Join matches all columns sharing identical names automatically.'
      ],
      realWorldExamples: 'Generating a sales report: An INNER JOIN between "Customers" and "Orders" lists customers who have placed orders. A LEFT JOIN lists all customers, including new registrations who have not placed any orders yet (showing NULL for order totals).',
      useCases: [
        'Financial Analytics: Joining accounts, ledger entries, and merchant codes to compute monthly revenue breakdowns.',
        'Supply Chain Auditing: Left joining warehouse stock tables with active fulfillment orders to identify unfulfilled shipments.'
      ],
      importantPoints: [
        'Indexes on join foreign keys significantly accelerate query execution by avoiding full table scans.',
        'Joining large un-indexed tables without filter conditions can cause severe performance bottlenecks (Cartesian explosion).'
      ]
    },
    'sql-lab': {
      title: 'SQL DDL, DML & Aggregations',
      subject: 'Database Management Systems',
      description: 'Structured Query Language (SQL) is the ANSI standard language for defining, manipulating, and querying relational databases. This lab covers Data Definition Language (DDL), Data Manipulation Language (DML), aggregate functions (SUM, AVG, COUNT), GROUP BY grouping, and HAVING filter clauses.',
      keyConcepts: [
        'DDL vs DML Commands: DDL (CREATE, ALTER, DROP, TRUNCATE) modifies database schema structures; DML (INSERT, UPDATE, DELETE, SELECT) manipulates underlying table data.',
        'Aggregate Functions: COUNT(), SUM(), AVG(), MIN(), MAX() compute scalar summary metrics over columns of records.',
        'GROUP BY Clause: Collapses rows that share identical values in specified columns into summary rows for aggregation.',
        'HAVING vs WHERE: WHERE filters individual tuples before aggregation occurs; HAVING filters grouped summary rows after aggregation is computed.',
        'Subqueries & Nested SELECTs: Scalar, column, and correlated subqueries executing dynamically inside outer queries.'
      ],
      realWorldExamples: 'An HR compensation audit: `SELECT department_id, AVG(salary) AS avg_sal, COUNT(*) AS emp_count FROM Employees WHERE status = "Active" GROUP BY department_id HAVING AVG(salary) > 85000;` calculates average salaries for active employees and filters departments earning above $85k.',
      useCases: [
        'Business Intelligence Dashboards: Grouping daily transactions into monthly totals and KPIs.',
        'Data Warehousing ETL: Aggregating billions of web clickstream events into summary hourly metrics.'
      ],
      importantPoints: [
        'Non-aggregated columns in a SELECT statement must be explicitly included in the GROUP BY clause.',
        'TRUNCATE is a DDL operation (faster, cannot be rolled back in some engines), whereas DELETE is DML (logged row-by-row).'
      ]
    },
    'normalization': {
      title: 'Database Normalization (1NF to BCNF)',
      subject: 'Database Management Systems',
      description: 'Normalization is a systematic technique of decomposing database relations to minimize data redundancy and prevent update, insertion, and deletion anomalies. By analyzing functional dependencies (FDs), schemas are iteratively refined from 1NF through 2NF, 3NF, to Boyce-Codd Normal Form (BCNF).',
      keyConcepts: [
        'Database Anomalies: Insertion anomaly (cannot insert data without dummy values), Deletion anomaly (unintended loss of related facts), Update anomaly (redundant copies cause inconsistency).',
        'First Normal Form (1NF): Eliminates repeating groups and multi-valued attributes; requires all attribute domain values to be atomic.',
        'Second Normal Form (2NF): Must be in 1NF and contain NO partial dependencies (every non-prime attribute must depend on the whole candidate key, not a proper subset).',
        'Third Normal Form (3NF): Must be in 2NF and contain NO transitive dependencies (non-prime attributes cannot determine other non-prime attributes; for X -> Y, X is superkey or Y is prime).',
        'Boyce-Codd Normal Form (BCNF): A stricter version of 3NF where for EVERY functional dependency X -> Y, X must strictly be a Superkey.'
      ],
      realWorldExamples: 'If a table stores (StudentID, CourseID, InstructorName, InstructorOffice), updating an instructor\'s office requires editing hundreds of student rows (Update Anomaly). Normalizing into StudentCourses(StudentID, CourseID) and Courses(CourseID, InstructorName, InstructorOffice) ensures the office is stored in exactly one place.',
      useCases: [
        'Relational Database Architecture: Ensuring high data integrity in OLTP banking, healthcare, and e-commerce platforms.',
        'Schema Refactoring: Migrating messy legacy spreadsheets into clean third-normal-form relational databases.'
      ],
      importantPoints: [
        'Lossless Join Decomposition: Natural join of decomposed tables must reconstruct the original relation without spurious tuples.',
        'Dependency Preservation: All functional dependencies from the original table should be enforceable on individual decomposed relations.'
      ]
    },
    'transactions': {
      title: 'Transaction Management & ACID Properties',
      subject: 'Database Management Systems',
      description: 'A database transaction is a single logical unit of work consisting of one or more read and write operations. To maintain data integrity in multi-user concurrent environments and survive system crashes, transactions must strictly adhere to the ACID properties and concurrency control protocols.',
      keyConcepts: [
        'Atomicity: "All or nothing" execution. If a transaction fails mid-flight, all changes are rolled back using write-ahead logs (WAL).',
        'Consistency: A transaction must transition the database from one valid state satisfying all integrity constraints to another valid state.',
        'Isolation: Concurrent transactions execute independently without interference, preventing dirty reads, unrepeatable reads, and phantom reads.',
        'Durability: Once a transaction commits, its updates are permanently recorded in non-volatile storage, even during hardware crashes.',
        'Concurrency Control & Two-Phase Locking (2PL): Growing Phase (acquiring locks) and Shrinking Phase (releasing locks) guarantees serializability and conflict-free schedules.'
      ],
      realWorldExamples: 'Transferring $500 from Account A to Account B requires two operations: (1) Deduct $500 from A, and (2) Credit $500 to B. If the server crashes after step 1, Atomicity rolls back the debit so the $500 is not lost.',
      useCases: [
        'FinTech & Cryptographic Exchanges: Ensuring accurate ledger balances during high-frequency trading.',
        'Inventory Checkout: Preventing two customers from purchasing the final available warehouse unit at the exact same millisecond.'
      ],
      importantPoints: [
        'Transaction states: Active -> Partially Committed -> Committed (or Failed -> Aborted -> Rolled Back).',
        'Deadlock detection mechanisms use Wait-For Graphs (WFG) and victim selection to resolve circular lock waiting.'
      ]
    },
    'indexing': {
      title: 'Indexing & B+ Tree Storage',
      subject: 'Database Management Systems',
      description: 'An index is a supplementary data structure that improves the speed of data retrieval operations on a database table at the cost of additional storage and write overhead. B+ Trees and hash indexes organize disk block pointers to minimize expensive disk I/O seek operations.',
      keyConcepts: [
        'Primary vs Secondary Index: Primary indexes are built on ordered primary key files; Secondary indexes are built on non-ordering attributes, using additional levels of indirection.',
        'Clustered vs Non-Clustered Index: A clustered index dictates the physical storage order of data records on disk (only 1 per table); non-clustered indexes store pointers to table rows.',
        'B+ Tree Architecture: Balanced search tree where ALL data pointers reside strictly in leaf nodes; internal nodes store routing search keys. Leaves are linked sequentially for blazing-fast range queries.',
        'Query Cost & Index Selectivity: Columns with high cardinality/uniqueness benefit most from indexing; frequent updates on indexed columns increase maintenance overhead.'
      ],
      realWorldExamples: 'A printed telephone directory is physically sorted by Last Name (Clustered Index). The subject index at the back of a textbook lists topics with page numbers (Non-Clustered Index), allowing you to jump directly to the right page without reading the whole book.',
      useCases: [
        'High-Throughput Web Queries: Reducing query lookup times from $O(N)$ full table scans to $O(\\log N)$ B+ tree traversals.',
        'Range Queries & Sorting: Accelerating `WHERE price BETWEEN 10 AND 50 ORDER BY price` queries using sequential B+ leaf node pointers.'
      ],
      importantPoints: [
        'B+ trees keep the tree height shallow ($h \\le 4$), allowing lookups across millions of rows in only 3-4 disk block I/Os.',
        'Over-indexing degrades INSERT, UPDATE, and DELETE performance because every write must update multiple index trees.'
      ]
    }
  }
};
