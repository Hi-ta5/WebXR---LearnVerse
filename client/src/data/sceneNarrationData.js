// High-fidelity scene narration scripts for all LearnVerse WebXR 3D Labs
// Specifically explains what is visually happening in each WebXR scene, its models, and controls.

export const SCENE_NARRATION_SCRIPTS = {
  // ──────────────────────────────────────────────────────────────────────────
  // 1. COMPUTER NETWORKS
  // ──────────────────────────────────────────────────────────────────────────
  'computer-networks': {
    'osi-model': {
      title: 'OSI 7-Layer Interactive Stack Lab',
      badge: 'Packet Encapsulation & Decapsulation',
      overview: 'Welcome to the OSI 7-Layer 3D Simulator. In this scene, you see a sender web browser workstation on the left, a transit WAN router cloud across the floor, and a destination server rack on the right.',
      steps: [
        {
          label: 'Layer 7 to 5',
          title: 'Upper Layers: Application, Presentation & Session',
          text: 'Notice the sender workstation generating application payload data. In the 3D space, HTTP headers attach at Layer 7, TLS encryption wraps the payload at Layer 6, and session synchronization markers are bound at Layer 5.'
        },
        {
          label: 'Layer 4 to 2',
          title: 'Lower Layers: Transport, Network & Data Link',
          text: 'Next, the packet platform builds protocol data units. Watch the orange TCP header attach with port 443, followed by the pink IP header containing logical addresses, and finally the emerald Ethernet frame with source and destination MAC addresses.'
        },
        {
          label: 'Transit & Server',
          title: 'Physical Transit & Server Decapsulation',
          text: 'At Layer 1, physical bitstreams pulse across the fiber links through the router nodes. Once reaching the destination rack, each layer header is stripped in reverse order, delivering the original message to the server console.'
        }
      ],
      interactionGuide: 'Use the Continue button below the 3D scene to step through each layer of encapsulation, observe the packet assembly, and watch the transit routing.'
    },

    'physical-layer': {
      title: 'Physical Layer Line Encoding Lab',
      badge: '3D Signal Waveforms & Transceiver',
      overview: 'This WebXR laboratory simulates physical line encoding on digital transmission media. You are viewing a transmitter station generating digital bit sequences and an oscilloscope visualizing electromagnetic waveforms in real-time.',
      steps: [
        {
          label: 'Line Encodings',
          title: 'Waveform Modulation Schemes',
          text: 'Observe the glowing waveform spanning between the transmitter and receiver probes. When switching between NRZ, Manchester, and Polar RZ, watch how the voltage levels transition. Manchester transitions in the middle of every bit to guarantee clock synchronization.'
        },
        {
          label: 'Noise & Media',
          title: 'Physical Transmission Media & Noise',
          text: 'Look at the transmission medium cylinder connecting the two test benches. Adjusting noise parameters introduces gaussian jitter, showing how attenuation and interference degrade signal clarity before reaching the receiver detector.'
        },
        {
          label: 'Clock Sync',
          title: 'Transmitter & Receiver Synchronization',
          text: 'The pulsing green ring on the receiver terminal demonstrates clock recovery. If the signal lacks transitions, baseline wander occurs, which is why schemes like 4B/5B and Manchester are crucial in real-world Ethernet.'
        }
      ],
      interactionGuide: 'Use the left control panel to select encoding schemes like NRZ or Manchester, modify the binary test pattern, and observe the waveform adjustments in the 3D space.'
    },

    'network-topologies': {
      title: 'Network Topologies 3D Simulator',
      badge: 'Star, Bus, Ring & Mesh Architectures',
      overview: 'You are inside the Network Topologies 3D Lab. This scene visualizes how computing devices are physically and logically interconnected across different network layouts.',
      steps: [
        {
          label: 'Star Topology',
          title: 'Central Hub & Radial Spokes',
          text: 'In the Star layout, observe the central network switch glowing at the origin, with dedicated point-to-point links radiating out to each client node. Notice that if one client cable fails, the rest of the network continues communicating unimpeded.'
        },
        {
          label: 'Bus & Ring',
          title: 'Shared Backbone & Token Ring',
          text: 'When viewing the Bus layout, all nodes tap into a single linear backbone cable with terminators at both ends. In the Ring layout, nodes form a closed circular loop where data packets circulate in a single direction from neighbor to neighbor.'
        },
        {
          label: 'Mesh Layout',
          title: 'Full Redundancy & Dynamic Routing',
          text: 'The Mesh topology showcases redundant interconnecting links between all node pairs. Notice how packets can seamlessly route around simulated link failures through alternate geometric paths.'
        }
      ],
      interactionGuide: 'Click the topology selector buttons to switch between Star, Bus, Ring, and Mesh, and click any node to simulate sending a test packet through the network.'
    },

    'tcp-udp': {
      title: 'TCP vs UDP Transport Simulator',
      badge: 'Handshake & Flow Comparison',
      overview: 'This WebXR simulation visually contrasts connection-oriented Transmission Control Protocol against connectionless User Datagram Protocol across two interactive transmission lanes.',
      steps: [
        {
          label: 'TCP Handshake',
          title: 'Three-Way Handshake (SYN, SYN-ACK, ACK)',
          text: 'On the left TCP channel, observe the synchronized three-step connection handshake. The client sends a glowing SYN packet, the server replies with SYN-ACK, and the client finalizes with ACK before any application data streams across.'
        },
        {
          label: 'Reliability & Drops',
          title: 'Sequencing & Packet Retransmission',
          text: 'Watch numbered packet cubes move across the TCP pipeline. When a packet drop is triggered, notice how the receiver pauses, sending duplicate ACKs until the missing sequence number is retransmitted by the sender.'
        },
        {
          label: 'UDP Streaming',
          title: 'Connectionless High-Speed Datagrams',
          text: 'On the right UDP channel, packets fire continuously without establishing a connection or waiting for acknowledgments. If a datagram is dropped, the stream moves forward without delay, which is ideal for real-time gaming and audio.'
        }
      ],
      interactionGuide: 'Click Initiate Handshake to watch TCP establish a connection, send test data packets, and toggle packet drop to see automatic retransmission in action.'
    },

    'routing': {
      title: 'Routing Algorithms 3D Grid',
      badge: 'Dijkstra & Shortest Path Discovery',
      overview: 'You are viewing a dynamic 3D mesh network of autonomous routers. Each spherical node represents an IP router maintaining routing tables and evaluating optimal transmission paths.',
      steps: [
        {
          label: 'Router Graph',
          title: 'Network Graph & Edge Metrics',
          text: 'Notice the interconnecting lines between router spheres, each labeled with bandwidth cost and latency weights. Glowing pulses continuously exchange routing update advertisements between neighboring nodes.'
        },
        {
          label: 'Dijkstra Path',
          title: 'Shortest Path Discovery',
          text: 'When a destination is selected, Dijkstra algorithm highlights the lowest-cost path in bright neon cyan. The packet navigates hop-by-hop along this optimized route to reach the destination terminal.'
        },
        {
          label: 'Link Failure',
          title: 'Dynamic Rerouting & Convergence',
          text: 'If a link is severed, the adjacent routers recalculate metrics and propagate updates through the grid, converging onto an alternative path without dropping subsequent traffic.'
        }
      ],
      interactionGuide: 'Select source and destination router nodes in the 3D graph to see the calculated shortest path, or click a link to simulate link failure and observe dynamic rerouting.'
    },

    'congestion-control': {
      title: 'TCP Congestion Control Simulator',
      badge: 'Slow Start, AIMD & Rate Limiting',
      overview: 'This 3D lab visualizes TCP congestion control mechanics inside an interactive network pipe, illustrating how data flow rates dynamically adapt to network capacity.',
      steps: [
        {
          label: 'Slow Start',
          title: 'Exponential Window Expansion',
          text: 'Look at the glowing cylinder representing the transmission buffer. In Slow Start, the congestion window doubles with each round trip time, sending an exponential burst of packet blocks into the network pipe.'
        },
        {
          label: 'Congestion Avoidance',
          title: 'Linear Increase (Additive Increase)',
          text: 'Once the window reaches the slow-start threshold, notice the rate of window expansion shifts from exponential to linear, cautiously probing for available network bandwidth.'
        },
        {
          label: 'Multiplicative Decrease',
          title: 'Packet Loss & Window Halving',
          text: 'When the bottleneck buffer overflows and a packet drops, observe the congestion window instantly cut in half. This additive increase, multiplicative decrease mechanism prevents network collapse.'
        }
      ],
      interactionGuide: 'Adjust the network bottleneck bandwidth slider and observe how the packet emission rate and congestion window dynamically adapt in the 3D pipeline.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 2. OPERATING SYSTEMS
  // ──────────────────────────────────────────────────────────────────────────
  'operating-systems': {
    'deadlocks': {
      title: 'Deadlock Resource Allocation Graph Lab',
      badge: 'Circular Wait & Graph Analysis',
      overview: 'Welcome to the Deadlock 3D Laboratory. This simulation renders a 3D Resource Allocation Graph consisting of circular process nodes and rectangular resource holding blocks.',
      steps: [
        {
          label: 'Graph Nodes',
          title: 'Processes & Resource Units',
          text: 'Notice the circular glowing spheres representing operating system processes, and the rectangular cuboids representing system resources like printer units, mutexes, and disk channels.'
        },
        {
          label: 'Allocation vs Request',
          title: 'Holding Edges & Request Arrows',
          text: 'Directed solid arrows pointing from a resource to a process signify assigned ownership. Dashed arrows pointing from a process to a resource indicate that the process is currently blocked, waiting for that resource.'
        },
        {
          label: 'Cycle Detection',
          title: 'Circular Wait & Deadlock State',
          text: 'When multiple processes hold resources while waiting on resources held by each other, a closed loop forms. The 3D graph highlights this cycle in pulsing red, signaling a deadlock that halts execution.'
        }
      ],
      interactionGuide: 'Click Allocate or Request on different process nodes to assign resources, and observe how Banker algorithm detects potential deadlocks before circular wait occurs.'
    },

    'threads': {
      title: 'Multi-Threading Concurrent Memory Lab',
      badge: 'Shared Heap & Thread Contexts',
      overview: 'You are observing a multi-threaded process container in 3D. The outer boundary represents the process virtual memory space, containing shared heap memory alongside independent thread stacks.',
      steps: [
        {
          label: 'Shared Memory',
          title: 'Common Process Address Space',
          text: 'Look at the central glowing memory pool representing the process heap and global data segment. All concurrent threads share read and write access to this central region.'
        },
        {
          label: 'Thread Stacks',
          title: 'Independent Program Counters & Stacks',
          text: 'Around the perimeter, individual vertical pillars represent worker threads. Each thread maintains its own private execution stack, program counter, and register state as it executes concurrent code.'
        },
        {
          label: 'Race Conditions',
          title: 'Concurrency & Mutex Synchronization',
          text: 'When two threads attempt to mutate the same heap variable simultaneously, watch the conflict indicator flash. Locking the mutex sphere serializes access, preventing race conditions and race hazards.'
        }
      ],
      interactionGuide: 'Spawn new worker threads, adjust execution concurrency, and toggle mutex locks to observe how thread synchronization safeguards the shared heap.'
    },

    'process-management': {
      title: 'Process Lifecycle & PCB Simulator',
      badge: 'Process States & Context Switching',
      overview: 'This 3D scene visualizes an operating system process management engine, rendering process lifecycle state machines and Process Control Blocks in physical 3D space.',
      steps: [
        {
          label: 'State Machine',
          title: 'Five-State Process Model',
          text: 'Observe the 5 interconnected circular state platforms: New, Ready, Running, Waiting, and Terminated. Process token spheres transition smoothly between these stages based on OS scheduler events.'
        },
        {
          label: 'PCB Inspection',
          title: 'Process Control Block Structure',
          text: 'Hovering over a process token reveals its 3D PCB panel, detailing Process ID, CPU registers, priority level, memory limits, and open file descriptors maintained by the operating system kernel.'
        },
        {
          label: 'Context Switching',
          title: 'CPU Dispatch & Register Save',
          text: 'When an interrupt occurs, the active process moves from Running to Ready or Waiting. Watch the CPU core flush its registers into the PCB and load the context of the next queued process.'
        }
      ],
      interactionGuide: 'Click Create Process to introduce a new task to the Ready queue, trigger I/O interrupts to move processes to the Waiting state, and observe CPU context switching.'
    },

    'cpu-scheduling': {
      title: 'CPU Scheduling Algorithm Lab',
      badge: 'FCFS, Round Robin, SJF & Gantt Charts',
      overview: 'You are viewing the CPU Scheduling Laboratory. In this scene, process tasks line up in a ready queue conveyor and execute on the central CPU core, projecting an interactive Gantt chart.',
      steps: [
        {
          label: 'Ready Queue',
          title: 'Task Queue & Burst Times',
          text: 'Look at the incoming process queue blocks, each color-coded by process ID with height proportional to its required CPU burst time. Processes wait in line for allocation by the OS scheduler.'
        },
        {
          label: 'CPU Execution',
          title: 'Core Dispatch & Preemption',
          text: 'As each process enters the glowing CPU execution bay, its remaining burst time ticks down. Under preemptive algorithms like Round Robin, the process yields the CPU once its time quantum expires.'
        },
        {
          label: 'Gantt Timeline',
          title: 'Real-Time Schedule Visualization',
          text: 'Below the processor, the 3D Gantt chart extends dynamically, logging process execution intervals, waiting times, and turnaround latencies across the timeline.'
        }
      ],
      interactionGuide: 'Switch between FCFS, Shortest Job First, Priority, and Round Robin algorithms, adjust the time quantum slider, and observe how average turnaround time shifts.'
    },

    'memory-management': {
      title: 'Virtual Memory & Paging Simulator',
      badge: 'Page Tables, Frames & TLB Cache',
      overview: 'This 3D lab demonstrates virtual memory architecture, showing virtual address translation into physical RAM frames through page tables and Translation Lookaside Buffers.',
      steps: [
        {
          label: 'Virtual Pages',
          title: 'Process Virtual Address Space',
          text: 'On the left side, notice the segmented virtual memory column where logical program pages reside. Programs reference addresses within this virtual space regardless of physical RAM layout.'
        },
        {
          label: 'Page Table & TLB',
          title: 'Address Translation & Fast Cache',
          text: 'The central glowing grid represents the Page Table and TLB. Incoming virtual page numbers are checked against the TLB cache; on a hit, translation resolves in a single rapid clock cycle.'
        },
        {
          label: 'Physical Frames',
          title: 'Physical RAM & Page Swapping',
          text: 'On the right, physical memory frames accept mapped pages. When a virtual page is not present in physical RAM, a page fault triggers, loading the missing frame from simulated disk storage.'
        }
      ],
      interactionGuide: 'Generate memory read and write requests, observe page table lookups in the 3D grid, and watch page replacement algorithms swap pages when RAM capacity is reached.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 3. DATA STRUCTURES
  // ──────────────────────────────────────────────────────────────────────────
  'data-structures': {
    'arrays': {
      title: 'Contiguous Memory Array Lab',
      badge: 'Index Mapping & Memory Offsets',
      overview: 'Welcome to the 3D Array Visualizer. In this scene, an array is represented as a contiguous sequence of adjacent memory cells allocated side-by-side in computer memory.',
      steps: [
        {
          label: 'Contiguous Cells',
          title: 'Consecutive Address Blocks',
          text: 'Observe the row of glowing cubes aligned horizontally. Each cell stores a value, and its memory address is directly adjacent to its neighbor, calculated as base address plus index times element size.'
        },
        {
          label: 'O(1) Access',
          title: 'Instant Index-Based Lookup',
          text: 'When accessing an element by index, the pointer leaps directly to the target block in constant O(1) time without traversing preceding cells, highlighting the primary advantage of arrays.'
        },
        {
          label: 'Insert & Shift',
          title: 'Element Shifting on Insertion',
          text: 'Watch an insertion at the middle of the array: all subsequent memory blocks must physically shift right one position to open a slot, demonstrating why insertions take linear O(N) time.'
        }
      ],
      interactionGuide: 'Type values into the input panel to insert, delete, or search elements, and watch the 3D memory cells shift and highlight in real-time.'
    },

    'stacks': {
      title: 'LIFO Stack Register Lab',
      badge: 'Last-In First-Out Architecture',
      overview: 'You are viewing the 3D Stack Visualizer. Elements are arranged in a vertical container, operating strictly on the Last-In First-Out principle.',
      steps: [
        {
          label: 'Stack Column',
          title: 'Vertical Storage & Top Pointer',
          text: 'Notice the vertical container housing rectangular memory plates. A glowing marker hovers over the topmost element, representing the Stack Pointer that tracks the current head.'
        },
        {
          label: 'Push Operation',
          title: 'Adding Elements to the Top',
          text: 'During a push operation, a new element drops down into the container and docks directly on top of the previous element, advancing the stack pointer upward in O(1) time.'
        },
        {
          label: 'Pop Operation',
          title: 'Removing from the Top',
          text: 'When pop is triggered, the uppermost element lifts away and disintegrates. Notice that underlying elements cannot be accessed directly without first popping items above them.'
        }
      ],
      interactionGuide: 'Use the Push button to stack new values, Pop to remove the top element, and Peek to inspect the top value without modifying the stack.'
    },

    'queues': {
      title: 'FIFO Queue Pipeline Lab',
      badge: 'First-In First-Out & Circular Buffers',
      overview: 'This scene demonstrates a First-In First-Out Queue pipeline in 3D. Elements enter at the rear and exit from the front, mirroring real-world queues and data buffering.',
      steps: [
        {
          label: 'Queue Pipeline',
          title: 'Linear Conduit with Front & Rear Pointers',
          text: 'Look at the horizontal pipeline with separate Front and Rear indicators. The Front pointer marks where elements are dequeued, while the Rear pointer marks where new elements arrive.'
        },
        {
          label: 'Enqueue',
          title: 'Adding to the Rear',
          text: 'When enqueue is invoked, a new data cube glides into position at the back of the queue, and the rear pointer steps forward to reserve the next available slot.'
        },
        {
          label: 'Dequeue',
          title: 'Serving from the Front',
          text: 'On dequeue, the leading element exits the pipeline to be processed, and the front pointer advances, guaranteeing that items are processed in the exact order they arrived.'
        }
      ],
      interactionGuide: 'Click Enqueue to append values to the rear of the pipeline, Dequeue to extract from the front, and observe how circular wrap-around manages boundary conditions.'
    },

    'linked-lists': {
      title: 'Dynamic Linked List Lab',
      badge: 'Non-Contiguous Nodes & Pointers',
      overview: 'You are observing a Dynamic Linked List in 3D space. Unlike arrays, nodes are scattered across arbitrary memory locations, connected together through directional pointer arrows.',
      steps: [
        {
          label: 'Node Structure',
          title: 'Data Field & Next Pointer',
          text: 'Each visual entity represents a node partitioned into two chambers: a data compartment storing the value, and a pointer sphere storing the memory address of the next node.'
        },
        {
          label: 'Dynamic Chaining',
          title: 'Pointer Links Across Memory',
          text: 'Notice the glowing laser arrows linking consecutive nodes. The first node is identified by the Head pointer, and the final node points to Null, indicating the end of the sequence.'
        },
        {
          label: 'Insertion & Deletion',
          title: 'Pointer Rewiring Without Shifting',
          text: 'Watch how inserting a node between existing items requires only rewiring two pointer arrows. Unlike contiguous arrays, no other elements need to be shifted in memory.'
        }
      ],
      interactionGuide: 'Add nodes at the head, tail, or specific indices, and watch pointer arrows dynamically detach and reconnect to illustrate dynamic memory allocation.'
    },

    'trees': {
      title: 'Binary Search Tree 3D Visualizer',
      badge: 'Hierarchical Nodes & BST Invariant',
      overview: 'Welcome to the 3D Binary Search Tree Lab. This visualizer renders a hierarchical tree structure governed by the BST ordering invariant.',
      steps: [
        {
          label: 'Root & Branches',
          title: 'Tree Hierarchy & Child Edges',
          text: 'At the apex sits the Root node. Directed branches split downward into Left and Right child nodes, organizing data hierarchically across increasing tree depth levels.'
        },
        {
          label: 'BST Invariant',
          title: 'Left is Smaller, Right is Larger',
          text: 'Observe that for any given node, all elements in its left subtree have smaller values, while all elements in its right subtree have larger values, enabling efficient O(log N) lookups.'
        },
        {
          label: 'Traversals',
          title: 'In-Order, Pre-Order & Post-Order',
          text: 'When a traversal runs, a golden light beam navigates the tree. In-order traversal visits left, root, and right in sorted sequence, demonstrating natural sorting capability.'
        }
      ],
      interactionGuide: 'Insert numeric values to observe where new leaf nodes attach, search for keys to trace comparison branches, and trigger in-order traversal to see sorted output.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 4. NATURAL LANGUAGE PROCESSING (NLP)
  // ──────────────────────────────────────────────────────────────────────────
  'nlp': {
    'nlp-intro': {
      title: 'NLP Pipeline Visualizer',
      badge: 'End-to-End Language Processing',
      overview: 'You are inside the NLP Pipeline 3D Laboratory. This simulation illustrates how raw, unstructured human language transforms step-by-step into structured machine-readable features.',
      steps: [
        {
          label: 'Text Ingestion',
          title: 'Raw Text Input to Tokens',
          text: 'At the initial stage, incoming sentences are parsed and fragmented into distinct word and subword tokens, passing through normalization filters in the 3D chamber.'
        },
        {
          label: 'Feature Extraction',
          title: 'Syntactic & Semantic Analysis',
          text: 'Next, tokens pass through part-of-speech taggers, named entity recognizers, and vector embeddings, enriching each word with syntactic and contextual metadata.'
        },
        {
          label: 'Model Inference',
          title: 'Classification & Output',
          text: 'Finally, the numerical feature matrix feeds into downstream neural layers, outputting sentiment scores, translation matrices, or classification probabilities.'
        }
      ],
      interactionGuide: 'Input custom sentences and watch tokens flow along the 3D conveyor pipeline, observing how each stage transforms the textual data.'
    },

    'tokenization': {
      title: 'Tokenization 3D Segmenter',
      badge: 'Word, Subword & Byte-Pair Encoding',
      overview: 'This 3D scene visualizes the tokenization process, breaking complex linguistic strings into fundamental discrete units that language models can process.',
      steps: [
        {
          label: 'Sentence Splitting',
          title: 'Whitespace & Punctuation Splitting',
          text: 'Notice the incoming continuous text stream. Cutting laser planes segment the text along word boundaries, isolating individual lexical elements into distinct blocks.'
        },
        {
          label: 'Subword & BPE',
          title: 'Byte-Pair Encoding Decomposition',
          text: 'When Byte-Pair Encoding is activated, uncommon words split into frequent subword prefixes, roots, and suffixes, ensuring that out-of-vocabulary terms remain representable.'
        },
        {
          label: 'Vocabulary ID',
          title: 'Token-to-ID Index Mapping',
          text: 'Each segment cube receives an integer token ID from the model vocabulary table. These numeric tokens form the foundational vector input for transformer models.'
        }
      ],
      interactionGuide: 'Switch tokenization modes between word, character, and subword, and type sample phrases to inspect how tokens and vocabulary IDs are generated.'
    },

    'text-preprocessing': {
      title: 'Text Preprocessing & Cleaning Chamber',
      badge: 'Normalization, Stopwords & Stemming',
      overview: 'Observe the 3D Text Preprocessing Chamber, where noisy raw text is systematically cleaned, filtered, and normalized before reaching machine learning models.',
      steps: [
        {
          label: 'Case & Punctuation',
          title: 'Lowercasing & Punctuation Removal',
          text: 'Notice the incoming tokens undergoing lowercase conversion, while non-alphanumeric punctuation marks are filtered out by the cleansing barrier.'
        },
        {
          label: 'Stopword Filter',
          title: 'Stopword Elimination',
          text: 'Common grammatical words like "the", "is", and "at" are flagged in amber and ejected from the stream, preserving only semantically rich keywords.'
        },
        {
          label: 'Stemming & Lemmatization',
          title: 'Root Form Reduction',
          text: 'The remaining words pass through a stemmer, stripping suffixes like "-ing" and "-ed" to reduce words to their base linguistic roots.'
        }
      ],
      interactionGuide: 'Toggle individual preprocessing stages like lowercase, stopword removal, and stemming, and watch how the 3D token stream transforms in real-time.'
    },

    'pos-tagging': {
      title: 'Part-of-Speech 3D Tagging Lab',
      badge: 'Syntactic Grammar Categorization',
      overview: 'This lab visualizes Part-of-Speech Tagging in 3D. Each word in a sentence is analyzed within its grammatical context and labeled with its syntactic role.',
      steps: [
        {
          label: 'Syntactic Roles',
          title: 'Nouns, Verbs & Adjectives',
          text: 'Look at the colored tag badges floating above each word cube: blue for nouns, green for verbs, purple for adjectives, and cyan for determiners.'
        },
        {
          label: 'Context Analysis',
          title: 'Disambiguation Based on Context',
          text: 'Observe words with multiple grammatical meanings. The tagger resolves whether a word acts as a noun or verb by analyzing neighboring tokens across the dependency parse.'
        },
        {
          label: 'Tree Hierarchy',
          title: 'Grammar Tree Projection',
          text: 'Connecting arcs project upward to form a constituency tree, demonstrating how noun phrases and verb phrases compose the sentence architecture.'
        }
      ],
      interactionGuide: 'Input sentences with ambiguous words to see how the 3D model accurately categorizes parts of speech based on syntactic context.'
    },

    'ner': {
      title: 'Named Entity Recognition 3D Lab',
      badge: 'Entity Classification & Extraction',
      overview: 'You are viewing the Named Entity Recognition 3D Lab, demonstrating how models detect, highlight, and categorize proper entities within unstructured text streams.',
      steps: [
        {
          label: 'Entity Detection',
          title: 'Boundary Detection in Sentences',
          text: 'Watch glowing bounding boxes encircle specific token spans, isolating entities like names, corporations, geographical locations, and temporal dates.'
        },
        {
          label: 'Classification',
          title: 'Person, Organization & Location Categories',
          text: 'Each entity span is color-coded by class: cyan for Persons, magenta for Organizations, and emerald for Locations, complete with confidence probability gauges.'
        },
        {
          label: 'Information Extraction',
          title: 'Structured Knowledge Graph',
          text: 'Extracted entity nodes project into a 3D knowledge graph, illustrating relationships between detected individuals, companies, and geographical centers.'
        }
      ],
      interactionGuide: 'Type articles or names into the input box to see the 3D entity detector extract and categorize entities across different classes.'
    },

    'bag-of-words': {
      title: 'Bag-of-Words Vector Space Lab',
      badge: 'Vocabulary Histogram & Frequency Vectors',
      overview: 'This scene visualizes the Bag-of-Words model in 3D, stripping grammar and word order to represent documents purely as frequency count distributions over a vocabulary.',
      steps: [
        {
          label: 'Vocabulary Grid',
          title: 'Unique Word Feature Space',
          text: 'Observe the 3D matrix grid on the floor, where each column corresponds to a unique word in the global dictionary, forming a multi-dimensional feature space.'
        },
        {
          label: 'Frequency Bars',
          title: 'Token Count Heights',
          text: 'Above each vocabulary cell, glowing 3D bar pillars rise to heights directly proportional to the occurrence count of that term in the target document.'
        },
        {
          label: 'Sparse Vectors',
          title: 'High-Dimensional Sparse Representation',
          text: 'Notice that most vocabulary columns remain at zero height, visually demonstrating the sparse nature of bag-of-words vectors in natural language processing.'
        }
      ],
      interactionGuide: 'Add or modify text documents to observe how term frequency histograms rise and fall across the 3D vocabulary grid.'
    },

    'tf-idf': {
      title: 'TF-IDF Weighting 3D Visualizer',
      badge: 'Term Frequency vs Inverse Document Frequency',
      overview: 'You are viewing the TF-IDF Visualizer. This lab contrasts simple word occurrence against corpus rarity to identify the most informative keywords in a text.',
      steps: [
        {
          label: 'Term Frequency',
          title: 'Local Frequency in Document',
          text: 'The horizontal dimension represents Term Frequency: how often a word appears inside the active document. High local frequency suggests topical relevance.'
        },
        {
          label: 'Inverse Doc Freq',
          title: 'Corpus Rarity Penalty',
          text: 'The vertical dimension plots Inverse Document Frequency. Common words appearing across every document in the corpus receive heavy mathematical penalties.'
        },
        {
          label: 'Combined Score',
          title: 'Glowing Keyword Importance Spheres',
          text: 'Floating spheres represent terms scored by the product of TF and IDF. Words with both high local frequency and high corpus rarity shine brightly as top keywords.'
        }
      ],
      interactionGuide: 'Select different documents in the corpus to see how TF-IDF scores dynamically emphasize distinctive keywords over generic terms.'
    },

    'word-embeddings': {
      title: 'Word Embeddings Semantic Vector Space',
      badge: 'Word2Vec, GloVe & Geometric Proximity',
      overview: 'Welcome to the Word Embeddings 3D Space. Words are mapped as coordinate points in a dense geometric vector space, where semantic similarity translates into geometric proximity.',
      steps: [
        {
          label: 'Semantic Clusters',
          title: 'Geometric Closeness of Synonyms',
          text: 'Look at the floating word spheres clustered in 3D space. Words with related meanings—such as "king", "queen", "prince", and "crown"—gravitate toward the same regional cluster.'
        },
        {
          label: 'Vector Arithmetic',
          title: 'King - Man + Woman = Queen',
          text: 'Notice the directional vector arrows between words. The displacement vector between "man" and "woman" matches the vector between "king" and "queen", proving linear relational encoding.'
        },
        {
          label: 'Dimensionality Reduction',
          title: 't-SNE / PCA 3D Projections',
          text: 'This 3D visualization projects hundreds of neural embedding dimensions down into three spatial coordinates using t-SNE, preserving local neighborhood relationships.'
        }
      ],
      interactionGuide: 'Click on different word clusters to inspect their vector cosine distances, and search for words to trace vector arithmetic in 3D space.'
    },

    'sentiment-analysis': {
      title: 'Sentiment Analysis Polarity Lab',
      badge: 'Positive, Negative & Neutral Classification',
      overview: 'This 3D scene visualizes Sentiment Analysis, analyzing emotional tone and polarity across text passages using feature weighting and neural classification.',
      steps: [
        {
          label: 'Token Polarity',
          title: 'Positive & Negative Word Weights',
          text: 'Observe individual word cubes highlighted with emotional weights: bright green for positive words like "excellent" and "delightful", and crimson red for negative words like "poor" and "broken".'
        },
        {
          label: 'Polarity Gauge',
          title: 'Overall Sentiment Balance',
          text: 'At the center, a 3D polarity meter tilts between Positive, Neutral, and Negative sectors as words are evaluated, aggregating the net sentiment score.'
        },
        {
          label: 'Confidence Vector',
          title: 'Classification Probabilities',
          text: 'The model outputs a three-dimensional probability distribution, visually displaying the confidence percentage across positive, negative, and neutral categories.'
        }
      ],
      interactionGuide: 'Type review sentences into the input box to watch word polarities light up and see the 3D needle swing toward the predicted sentiment.'
    }
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 5. DATABASE MANAGEMENT SYSTEMS (DBMS)
  // ──────────────────────────────────────────────────────────────────────────
  'dbms': {
    'dbms-intro': {
      title: 'DBMS 3-Tier Architecture Lab',
      badge: 'External, Conceptual & Internal Levels',
      overview: 'Welcome to the DBMS Architecture 3D Laboratory. You are viewing the ANSI-SPARC 3-tier database architecture separating user views, logical schemas, and physical storage.',
      steps: [
        {
          label: 'External Level',
          title: 'User Views & Application Interfaces',
          text: 'At the top tier, multiple floating terminal displays represent customized User Views, showing how different end users see tailored representations of the same database.'
        },
        {
          label: 'Conceptual Level',
          title: 'Logical Schema & Business Rules',
          text: 'The middle tier houses the Conceptual Schema: the logical blueprint of all entities, attributes, relationships, and integrity constraints without concern for physical storage.'
        },
        {
          label: 'Internal Level',
          title: 'Physical Storage & Access Paths',
          text: 'At the bottom, rotating cylinder disks and B-Tree index structures depict the Internal Schema, managing byte-level data blocks, page allocations, and storage optimization.'
        }
      ],
      interactionGuide: 'Click between External, Conceptual, and Internal tiers to see how data abstraction insulates applications from physical storage changes.'
    },

    'relational-model': {
      title: 'Relational Model & Key Constraints Lab',
      badge: 'Tables, Tuples, Primary & Foreign Keys',
      overview: 'This 3D scene illustrates the Relational Data Model, presenting database tables as structured 3D grids composed of rows, columns, and relational key constraints.',
      steps: [
        {
          label: 'Tables & Tuples',
          title: 'Relations, Rows & Attributes',
          text: 'Notice the 3D table platforms. Horizontal slabs represent individual tuples or rows, while vertical columns define typed domain attributes like ID, Name, and Department.'
        },
        {
          label: 'Primary Key',
          title: 'Unique Entity Identification',
          text: 'Look at the highlighted golden column representing the Primary Key. Every value in this column is guaranteed to be strictly unique and non-null, enforcing entity integrity.'
        },
        {
          label: 'Foreign Key Link',
          title: 'Referential Integrity Across Tables',
          text: 'Observe the glowing link line spanning from the Employee table to the Department table. This Foreign Key relationship enforces referential integrity between related entities.'
        }
      ],
      interactionGuide: 'Click on table rows to view individual tuple attributes, and trace foreign key relations between parent and child tables in 3D.'
    },

    'er-model': {
      title: 'Entity-Relationship 3D Diagrammer',
      badge: 'Entities, Attributes & Cardinality',
      overview: 'You are viewing an interactive 3D Entity-Relationship model, transforming abstract database schema designs into physical visual components.',
      steps: [
        {
          label: 'Entities & Diamonds',
          title: 'Rectangular Entities & Relationship Diamonds',
          text: 'Rectangular platforms represent real-world entities like Student and Course. Diamond-shaped connectors between them represent relationships like Enrolls.'
        },
        {
          label: 'Attributes',
          title: 'Oval Attribute Nodes',
          text: 'Orbital spheres attached to each entity represent attributes. Underlined spheres designate primary key attributes, while double-rimmed spheres indicate multivalued properties.'
        },
        {
          label: 'Cardinality',
          title: 'One-to-One, One-to-Many & Many-to-Many',
          text: 'The connecting links are labeled with cardinality ratios: 1:1, 1:N, or M:N, governing how many instances of one entity can relate to instances of another.'
        }
      ],
      interactionGuide: 'Hover over entity platforms and relationship diamonds to highlight connections, and inspect cardinality constraints defining database design.'
    },

    'sql-joins': {
      title: 'SQL Joins 3D Visualizer',
      badge: 'INNER, LEFT, RIGHT & FULL Set Joins',
      overview: 'This 3D lab demonstrates SQL Join operations. Two intersecting relational tables combine rows dynamically based on matching key values.',
      steps: [
        {
          label: 'Table Overlap',
          title: 'Dual Table Intersection',
          text: 'Notice Table A on the left and Table B on the right. The intersecting central zone represents rows that satisfy the join condition ON Table A key equals Table B key.'
        },
        {
          label: 'INNER vs OUTER',
          title: 'Join Variations & NULL Padding',
          text: 'When INNER JOIN is active, only overlapping rows are preserved. Switching to LEFT JOIN retains all rows from Table A, padding missing Table B columns with NULL values.'
        },
        {
          label: 'FULL OUTER',
          title: 'Complete Set Union with Matched Pairs',
          text: 'In FULL OUTER JOIN, all rows from both tables appear in the output dataset, linking matching pairs where available and filling unlinked rows with null placeholders.'
        }
      ],
      interactionGuide: 'Toggle between INNER, LEFT, RIGHT, and FULL JOIN buttons, and observe the resulting 3D row combinations and SQL query syntax in real-time.'
    },

    'sql-lab': {
      title: 'SQL Interactive Query Execution Lab',
      badge: 'SELECT, WHERE, GROUP BY & Aggregations',
      overview: 'Welcome to the SQL Query Execution Lab. Watch SQL statements parse, filter, and aggregate relational data rows in real-time within a 3D execution engine.',
      steps: [
        {
          label: 'Scanning & Filter',
          title: 'FROM & WHERE Clause Filtering',
          text: 'Observe rows stream from the storage table into the query processor. The WHERE clause laser scans each row, eliminating records that fail the predicate.'
        },
        {
          label: 'Grouping & Aggs',
          title: 'GROUP BY & Aggregation Functions',
          text: 'Next, surviving rows cluster into distinct category bins for GROUP BY execution, computing aggregate functions like COUNT, SUM, and AVERAGE for each group.'
        },
        {
          label: 'Projection & Order',
          title: 'SELECT Column Projection & ORDER BY',
          text: 'Finally, the SELECT clause projects only requested columns, and ORDER BY arranges the result set into the final sorted tabular output display.'
        }
      ],
      interactionGuide: 'Run sample SQL queries using the interface buttons to watch query plan execution stages physically process table data in 3D.'
    },

    'normalization': {
      title: 'Database Normalization 3D Lab',
      badge: '1NF, 2NF, 3NF & BCNF Decomposition',
      overview: 'This scene demonstrates Database Normalization, breaking down unnormalized tables with redundant data into refined, anomaly-free normal forms.',
      steps: [
        {
          label: 'Unnormalized Anomalies',
          title: 'Redundancy, Insertion & Deletion Anomalies',
          text: 'Observe the initial unnormalized table plagued by duplicated rows. Updating a department name requires editing multiple records, causing update anomalies.'
        },
        {
          label: '1NF to 2NF',
          title: 'Atomic Values & Partial Dependency Elimination',
          text: 'In First Normal Form, multi-valued attributes are separated into atomic cells. In Second Normal Form, tables split to eliminate partial dependencies on composite keys.'
        },
        {
          label: '3NF & BCNF',
          title: 'Transitive Dependency Elimination',
          text: 'Advancing to Third Normal Form and BCNF decomposes non-key transitive dependencies, producing clean, modular tables linked strictly by foreign keys.'
        }
      ],
      interactionGuide: 'Step through 1NF, 2NF, 3NF, and BCNF buttons to watch monolithic tables physically divide into clean, normalized relational schemas.'
    },

    'transactions': {
      title: 'ACID Transactions & Concurrency Lab',
      badge: 'Atomicity, Consistency, Isolation & Durability',
      overview: 'You are observing an interactive 3D Transaction Engine, demonstrating ACID properties, two-phase locking, and concurrency conflict resolution.',
      steps: [
        {
          label: 'Atomicity & Commit',
          title: 'All-or-Nothing Execution & Rollback',
          text: 'Look at the transaction pipeline. If any sub-operation fails mid-flight, the entire transaction rolls back to its savepoint, guaranteeing all-or-nothing execution.'
        },
        {
          label: 'Isolation & Locks',
          title: 'Shared & Exclusive 2PL Locks',
          text: 'When Transaction A accesses a data item, notice the glowing Shared or Exclusive lock indicator. Concurrent transactions must wait until the lock is released.'
        },
        {
          label: 'Durability',
          title: 'Write-Ahead Logging & Disk Commit',
          text: 'Upon successful commit, changes flush immediately to the write-ahead transaction log and persistent disk platters, guaranteeing data durability against power crashes.'
        }
      ],
      interactionGuide: 'Trigger concurrent transactions, inject simulated server crashes to watch rollback recovery, and toggle lock modes to inspect serializable execution.'
    },

    'indexing': {
      title: 'B+ Tree Index Storage Lab',
      badge: 'Root, Internal Nodes & Leaf Linked Lists',
      overview: 'This 3D scene visualizes a B+ Tree Index structure, demonstrating how disk-based storage engines achieve rapid O(log N) point and range lookups.',
      steps: [
        {
          label: 'Tree Architecture',
          title: 'Root, Internal Branch Nodes & Leaf Nodes',
          text: 'At the top sits the Root index block. Internal branch nodes store search keys and child pointers, guiding searches down to the bottom tier of leaf data nodes.'
        },
        {
          label: 'Logarithmic Search',
          title: 'Binary Branch Traversal in O(log N)',
          text: 'Follow the glowing search probe navigating down the tree. At each node, keys guide the pointer to the appropriate child, finding target rows in very few I/O steps.'
        },
        {
          label: 'Leaf Chaining',
          title: 'Doubly-Linked Leaf Nodes for Range Queries',
          text: 'Notice the horizontal pointer arrows connecting adjacent leaf blocks. This linked chain allows range queries like "WHERE age BETWEEN 20 AND 30" to scan sequentially without backtracking.'
        }
      ],
      interactionGuide: 'Search for specific key values to watch the 3D probe descend through index levels, and execute range queries to see sequential leaf node traversal.'
    }
  }
};

/**
 * Retrieve narration data for a given subject and topic, with safe fallback.
 */
export function getSceneNarration(subjectId, topicId) {
  const subjectData = SCENE_NARRATION_SCRIPTS[subjectId];
  if (subjectData && subjectData[topicId]) {
    return subjectData[topicId];
  }

  // Fallback if topic is aliased or not directly matched
  if (subjectId === 'dbms' && topicId === 'intro') {
    return SCENE_NARRATION_SCRIPTS['dbms']['dbms-intro'];
  }

  // General fallback
  return {
    title: `${topicId?.replace(/-/g, ' ').toUpperCase()} 3D Lab`,
    badge: 'WebXR 3D Simulation',
    overview: `Welcome to the ${topicId?.replace(/-/g, ' ')} 3D visual lab. This interactive simulation illustrates core concepts in real-time 3D space.`,
    steps: [
      {
        label: 'Simulation Lab',
        title: '3D Visual Model Setup',
        text: 'This interactive WebXR simulation visually renders key principles and structural elements in real-time 3D space for intuitive conceptual exploration.'
      },
      {
        label: 'Controls & Interaction',
        title: 'Manipulating Parameters',
        text: 'Use your mouse, touch, or VR controllers to rotate, pan, and zoom around the scene. Use the interactive buttons to trigger simulations and observe state changes.'
      }
    ],
    interactionGuide: 'Rotate around the 3D visualizer using mouse drag or touch, zoom in to inspect details, and interact with the scene controls.'
  };
}
