export const QUIZ_QUESTIONS = {
  'computer-networks': {
    'osi-model': [
      {
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
      {
        question: 'Which layer of the OSI model is responsible for data translation, formatting syntax, encryption, and compression?',
        options: [
          'Layer 6 - Presentation Layer',
          'Layer 5 - Session Layer',
          'Layer 7 - Application Layer',
          'Layer 4 - Transport Layer'
        ],
        answerIdx: 0,
        explanation: 'Layer 6, the Presentation Layer, formats, translates, encrypts, and compresses data for presentation to application services.'
      },
      {
        question: 'What is the correct order of data encapsulation units as they travel down the OSI model layers?',
        options: [
          'Data -> Segment -> Packet -> Frame -> Bits',
          'Bits -> Frame -> Packet -> Segment -> Data',
          'Data -> Packet -> Segment -> Frame -> Bits',
          'Segment -> Packet -> Frame -> Bits -> Data'
        ],
        answerIdx: 0,
        explanation: 'Data begins at the Application/Presentation/Session layers, is encapsulated into Segments (Transport), packets/datagrams (Network), frames (Data Link), and finally raw bit streams (Physical).'
      },
      {
        question: 'At which layer of the OSI model do networking devices like standard routers operate?',
        options: [
          'Layer 2 - Data Link Layer',
          'Layer 3 - Network Layer',
          'Layer 4 - Transport Layer',
          'Layer 1 - Physical Layer'
        ],
        answerIdx: 1,
        explanation: 'Routers operate at Layer 3 (Network Layer) where they read IP headers to make intelligent path forwarding decisions.'
      },
      {
        question: 'Which OSI layer manages, synchronizes, and terminates communication dialogues between host processes?',
        options: [
          'Layer 4 - Transport Layer',
          'Layer 5 - Session Layer',
          'Layer 6 - Presentation Layer',
          'Layer 3 - Network Layer'
        ],
        answerIdx: 1,
        explanation: 'Layer 5, the Session Layer, sets up, maintains, and tears down communication sockets between local and remote sessions.'
      }
    ],
    'physical-layer': [
      {
        question: 'What is the primary function of physical layer line encoding schemes like Manchester modulation?',
        options: [
          'To establish secure session authentication keys.',
          'To encapsulate IP header fields into frames.',
          'To sync receiver clocks by placing electrical transition steps inside each bit slot.',
          'To detect CPU scheduler context-switch drops.'
        ],
        answerIdx: 2,
        explanation: 'Manchester encoding places transitions at the midpoint of each bit period to ensure steady synchronization of transmitter and receiver clocks.'
      },
      {
        question: 'In Bipolar AMI (Alternate Mark Inversion) line encoding, how is a binary 0 represented?',
        options: [
          'By a transition from high to low voltage.',
          'By a constant neutral zero-volt level (0V).',
          'By alternating positive and negative voltages.',
          'By a constant high positive voltage (+V).'
        ],
        answerIdx: 1,
        explanation: 'In Bipolar AMI, binary 0s are represented by a neutral 0V baseline, while binary 1s (marks) alternate between positive and negative voltages.'
      },
      {
        question: 'Which of the following line encoding schemes is self-synchronizing (does not suffer from loss of sync during long streams of 0s or 1s)?',
        options: [
          'Unipolar NRZ',
          'Manchester Encoding',
          'Polar NRZ-L',
          'None of the above'
        ],
        answerIdx: 1,
        explanation: 'Manchester encoding transitions mid-bit for every bit, guaranteeing a clock transition for both 0s and 1s, which ensures self-synchronization.'
      },
      {
        question: 'Which physical medium is completely immune to Electromagnetic Interference (EMI)?',
        options: [
          'Coaxial Copper Cable',
          'Shielded Twisted Pair (STP)',
          'Fiber Optic Cable',
          'Unshielded Twisted Pair (UTP)'
        ],
        answerIdx: 2,
        explanation: 'Fiber optic cables transmit data as light pulses through glass fibers, making them completely immune to electromagnetic interference.'
      },
      {
        question: 'What term defines the reduction in strength of a digital signal as it travels through a transmission medium?',
        options: [
          'Attenuation',
          'Dispersion',
          'Distortion',
          'Crosstalk'
        ],
        answerIdx: 0,
        explanation: 'Attenuation is the loss of signal power or amplitude as it propagates through any communication medium.'
      }
    ],
    'network-topologies': [
      {
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
      {
        question: 'What is a major vulnerability of a Star network topology?',
        options: [
          'A single workstation failure crashes the entire network.',
          'The central hub or switch is a single point of failure.',
          'Adding a new node requires rewiring all existing nodes.',
          'Data packets must travel in a one-way loop through all nodes.'
        ],
        answerIdx: 1,
        explanation: 'In a Star topology, all devices link to a central controller. If the central switch/hub fails, the entire network drops.'
      },
      {
        question: 'In a Bus topology, what device is attached to both ends of the shared backbone coaxial trunk to prevent signal reflection?',
        options: [
          'Amplifier',
          'Repeater',
          'Terminator',
          'Router'
        ],
        answerIdx: 2,
        explanation: 'Terminators absorb signals when they reach the end of the bus trunk, preventing them from bouncing back and corrupting incoming packets.'
      },
      {
        question: 'Which topology requires the use of Spanning Tree Protocol (STP) to prevent infinite broadcast loops at Layer 2?',
        options: [
          'Single Bus Topology',
          'Redundant Mesh/Ring Topology',
          'Point-to-Point Link',
          'Star Topology with one switch'
        ],
        answerIdx: 1,
        explanation: 'Redundant paths in switches can cause infinite frame circulation loops. Spanning Tree Protocol disables loops, maintaining a single logical route.'
      },
      {
        question: 'What is the formula to calculate the number of cables required to connect N devices in a physical Full Mesh topology?',
        options: [
          'N',
          'N(N - 1) / 2',
          'N - 1',
          'N²'
        ],
        answerIdx: 1,
        explanation: 'Each of the N devices must connect to N-1 other devices. Since each cable connects two nodes, the total is N(N-1)/2.'
      }
    ],
    'tcp-udp': [
      {
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
      {
        question: 'What sequence of flags is set in the headers of the packets sent during the TCP Three-Way Handshake?',
        options: [
          'SYN -> SYN-ACK -> ACK',
          'SYN -> ACK -> SYN-ACK',
          'SYN -> DATA -> FIN',
          'HELO -> HELO-ACK -> ACK'
        ],
        answerIdx: 0,
        explanation: 'To open a connection, the initiator sends a SYN packet, the receiver replies with a SYN-ACK, and the initiator completes the handshake with an ACK.'
      },
      {
        question: 'Why is UDP preferred over TCP for online multiplayer gaming and streaming media?',
        options: [
          'UDP has built-in congestion avoidance algorithms.',
          'UDP is connectionless and lightweight, reducing header size and transmission latency.',
          'UDP guarantees packet delivery without requiring sequence numbers.',
          'UDP encrypts the payload by default at the transport layer.'
        ],
        answerIdx: 1,
        explanation: 'UDP avoids the overhead of connection handshakes, sequence tracking, and retransmissions, making it faster and lower in latency than TCP.'
      },
      {
        question: 'What is the purpose of the sliding window in TCP?',
        options: [
          'To encrypt transport layer payloads before encapsulation.',
          'To control the rate of data flow between sender and receiver, preventing receiver overload.',
          'To map port numbers to running process IDs.',
          'To randomize IP routing paths.'
        ],
        answerIdx: 1,
        explanation: 'The sliding window mechanism allows the sender to transmit multiple packets before receiving an acknowledgment, managing flow control to match the receiver\'s capacity.'
      },
      {
        question: 'Which of the following field sizes exists in a UDP header but is significantly larger in a TCP header?',
        options: [
          'Destination Port (16 bits)',
          'Source Port (16 bits)',
          'Header Length / Data Offset',
          'The overall header size itself (8 bytes vs. minimum 20 bytes)'
        ],
        answerIdx: 3,
        explanation: 'The UDP header is a fixed 8 bytes. A TCP header is much larger, carrying a minimum of 20 bytes up to 60 bytes to support reliable delivery services.'
      }
    ],
    'routing': [
      {
        question: 'What is a primary distinction between Static Routing and Dynamic Routing protocols?',
        options: [
          'Static routing hardcodes path tables manually, while Dynamic routing computes real-time optimal paths using algorithms like Dijkstra\'s shortest path.',
          'Dynamic routing operates solely at the physical hardware layer, whereas Static routing is a transport layer protocol.',
          'Static routing requires guided glass fiber cables, whereas Dynamic routing is built exclusively for wireless broadcasts.',
          'Both require manual updates, but Dynamic routing runs exclusively on local host collision domains.'
        ],
        answerIdx: 0,
        explanation: 'Static routing involves manually entering routes into tables, which cannot adapt to node changes. Dynamic routing automatically computes optimal routes dynamically (e.g., using Dijkstra\'s link-state cost matrix) when topologies or costs shift.'
      },
      {
        question: 'Which dynamic routing protocol is classified as a Link-State routing protocol and uses Dijkstra\'s shortest path algorithm?',
        options: [
          'Routing Information Protocol (RIP)',
          'Open Shortest Path First (OSPF)',
          'Border Gateway Protocol (BGP)',
          'Address Resolution Protocol (ARP)'
        ],
        answerIdx: 1,
        explanation: 'OSPF is a Link-State routing protocol that maps the entire topology and runs Dijkstra\'s shortest path algorithm to compute optimal routing tables.'
      },
      {
        question: 'What metric is traditionally used by the Routing Information Protocol (RIP) to calculate the cost of a path?',
        options: [
          'Bandwidth',
          'Hop Count',
          'Link Delay',
          'Reliability index'
        ],
        answerIdx: 1,
        explanation: 'RIP is a Distance-Vector protocol that uses Hop Count as its routing metric. The path with the fewest routers (maximum 15 hops) is chosen.'
      },
      {
        question: 'What problem in Distance Vector routing is characterized by RIP routers incrementing metrics endlessly when a link goes down?',
        options: [
          'Count-to-Infinity Problem',
          'Broadcast Storm',
          'Slow Start phase',
          'Race Condition deadlock'
        ],
        answerIdx: 0,
        explanation: 'Distance-Vector protocols can suffer from routing loops causing a "count-to-infinity" problem, where neighbor routers keep incrementing hop counts for a broken route.'
      },
      {
        question: 'Which routing protocol is the standard Exterior Gateway Protocol (EGP) used to route traffic across the global Internet?',
        options: [
          'OSPF',
          'RIP',
          'BGP (Border Gateway Protocol)',
          'ICMP'
        ],
        answerIdx: 2,
        explanation: 'BGP is a path-vector protocol that routes data across different Autonomous Systems (AS) forming the core infrastructure of the Internet.'
      }
    ],
    'congestion-control': [
      {
        question: 'Which of the following statements correctly distinguishes Flow Control from Congestion Control?',
        options: [
          'Flow control prevents a sender from overwhelming a single receiver; Congestion control prevents senders from overwhelming the intermediate network.',
          'Flow control runs at the Network Layer, while Congestion control runs exclusively at the Physical Layer.',
          'Congestion control is handled by the receiver, while Flow control is managed entirely by routers.',
          'Flow control uses tokens, while Congestion control uses queues only.'
        ],
        answerIdx: 0,
        explanation: 'Flow control manages traffic between one sender and one receiver. Congestion control manages aggregate traffic on intermediate links and switches.'
      },
      {
        question: 'How does the Leaky Bucket algorithm handle bursty traffic surges?',
        options: [
          'It lets bursts pass immediately and delays subsequent packets.',
          'It drops packets instantly if the average transmission rate is exceeded.',
          'It buffers packet bursts and releases them at a constant, steady rate, dropping packets if the buffer overflows.',
          'It negotiates a larger window size with the receiving terminal.'
        ],
        answerIdx: 2,
        explanation: 'A Leaky Bucket acts as a traffic shaper. It accepts bursty inputs but releases packets at a constant, smooth rate. If the buffer bucket overflows, excess packets are discarded.'
      },
      {
        question: 'What is a major advantage of the Token Bucket algorithm over the Leaky Bucket algorithm?',
        options: [
          'It completely avoids packet loss.',
          'It allows high-speed bursty transmission up to the bucket capacity when tokens are available.',
          'It operates without any memory buffers.',
          'It runs on Layer 1 hardware only.'
        ],
        answerIdx: 1,
        explanation: 'While Leaky Bucket smooths speed to a strict constant, Token Bucket permits bursty transfers when tokens are saved up, which is ideal for bursty web traffic.'
      },
      {
        question: 'In TCP Congestion Control, what phase is characterized by the congestion window (cwnd) doubling every round-trip time (RTT)?',
        options: [
          'Congestion Avoidance',
          'Slow Start',
          'Fast Recovery',
          'Three-Way Handshake'
        ],
        answerIdx: 1,
        explanation: 'During the TCP Slow Start phase, the congestion window size (cwnd) starts small and increases exponentially (doubling every RTT) until it reaches a threshold.'
      },
      {
        question: 'Which TCP congestion avoidance event triggers the window size to be cut in half (multiplicative decrease) instead of dropping back to 1?',
        options: [
          'A complete Timeout event.',
          'Receiving 3 Duplicate ACKs (triple duplicate ACK).',
          'A successful connection termination.',
          'Opening a new socket.'
        ],
        answerIdx: 1,
        explanation: 'Receiving 3 duplicate ACKs triggers Fast Retransmit and cuts the congestion window in half (multiplicative decrease). A complete timeout is more severe and resets cwnd to 1.'
      }
    ]
  },
  'operating-systems': {
    'deadlocks': [
      {
        question: 'Which of the following is NOT one of the four necessary conditions (Coffman conditions) for a deadlock to occur?',
        options: [
          'Mutual Exclusion - Only one process can use a resource at a time.',
          'Hold and Wait - Processes hold resources while waiting for others.',
          'Preemption - The operating system can forcibly take resources back from holding processes.',
          'Circular Wait - A closed loop of processes waiting for each other\'s resources exists.'
        ],
        answerIdx: 2,
        explanation: 'No Preemption is a necessary condition for deadlocks. If the OS could forcibly preempt (take back) resources, deadlocks could easily be resolved. Thus, Preemption is NOT a condition that allows a deadlock to occur.'
      },
      {
        question: 'What strategy does the Banker\'s Algorithm implement to handle deadlocks?',
        options: [
          'Deadlock Prevention',
          'Deadlock Avoidance',
          'Deadlock Detection and Recovery',
          'Ignorance (Ostrich Algorithm)'
        ],
        answerIdx: 1,
        explanation: 'The Banker\'s Algorithm is a Deadlock Avoidance algorithm. It checks the resource allocation state dynamically to ensure the system remains in a "safe state" before allocating resources.'
      },
      {
        question: 'What is a "safe state" in the context of deadlock avoidance?',
        options: [
          'A state where no process can access memory segments.',
          'An allocation state from which the OS can schedule processes to run and complete without deadlocks.',
          'A hardware configuration protected from power surges.',
          'A state where the CPU has disabled thread interrupts.'
        ],
        answerIdx: 1,
        explanation: 'A safe state exists if there is a scheduling sequence that allows every process to claim its maximum resources and terminate safely without deadlock.'
      },
      {
        question: 'To break a deadlock via process termination (recovery), what is the most cost-effective method?',
        options: [
          'Aborting all deadlocked processes.',
          'Aborting processes one-by-one until the circular wait loop is broken, recalculating after each abort.',
          'Formatting the system disk.',
          'Spawning additional thread locks.'
        ],
        answerIdx: 1,
        explanation: 'Aborting one process at a time and checking for deadlock is more optimal than killing all processes, since it minimizes wasted process computations.'
      },
      {
        question: 'How does Deadlock Prevention differ from Deadlock Avoidance?',
        options: [
          'Prevention ensures deadlocks never occur by structurally breaking one of the Coffman conditions; Avoidance checks states dynamically to stay safe.',
          'Prevention is run by hardware; Avoidance is run by the user.',
          'Avoidance terminates processes; Prevention ignores them.',
          'Prevention requires a database, while Avoidance uses a compiler.'
        ],
        answerIdx: 0,
        explanation: 'Prevention designs the system to invalidate at least one Coffman condition (e.g., ordering resources to break Circular Wait). Avoidance checks requests dynamically (Banker\'s).'
      }
    ],
    'threads': [
      {
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
      {
        question: 'What is a "Critical Section" in multi-threaded programming?',
        options: [
          'A segment of memory containing system system logs.',
          'A block of code that accesses shared mutable resources and must not be executed by multiple threads simultaneously.',
          'A hardware sector running visual calculations.',
          'The initial boot sector of an operating system.'
        ],
        answerIdx: 1,
        explanation: 'A critical section is a block of code accessing shared variables/databases. If entered by multiple threads concurrently, it can lead to race conditions.'
      },
      {
        question: 'Which synchronization tool is a binary lock (value 0 or 1) used to protect a single critical section?',
        options: [
          'Counting Semaphore',
          'Mutex (Mutual Exclusion)',
          'Process Control Block',
          'Message Queue'
        ],
        answerIdx: 1,
        explanation: 'A Mutex is a mutual exclusion lock with two states: locked and unlocked. A thread must acquire the lock before entering a critical section.'
      },
      {
        question: 'What is a "Race Condition"?',
        options: [
          'A scheduler algorithm priority competition.',
          'A bug where system output is dependent on the execution sequence or timing of concurrent threads.',
          'A hardware transmission speed rating.',
          'A rapid process swapping state causing disk thrashing.'
        ],
        answerIdx: 1,
        explanation: 'A race condition occurs when concurrent threads access and modify shared resources, leaving the final values dependent on the scheduling order.'
      },
      {
        question: 'How do Counting Semaphores differ from Binary Semaphores (Mutexes)?',
        options: [
          'Counting Semaphores allow a defined integer limit of multiple threads to access resources concurrently.',
          'Counting Semaphores are built only in the hardware layer.',
          'Binary Semaphores can count up to the number of running processes.',
          'Counting Semaphores do not support wait operations.'
        ],
        answerIdx: 0,
        explanation: 'Counting Semaphores carry an integer value representing available units of a shared resource, allowing multiple concurrent accesses up to that value.'
      }
    ],
    'process-management': [
      {
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
      {
        question: 'What state transition occurs when a process has completed its CPU time slice and is swapped out by the scheduler?',
        options: [
          'Running -> Ready',
          'Ready -> Running',
          'Running -> Waiting',
          'Waiting -> Ready'
        ],
        answerIdx: 0,
        explanation: 'When a running process exceeds its scheduling slot, the OS timer interrupts it, swapping its state from Running back to Ready.'
      },
      {
        question: 'What is a "Context Switch"?',
        options: [
          'Replacing copper wiring with fiber optics.',
          'Saving the execution state of one process and loading the state of another process to resume execution on the CPU.',
          'Formatting a local hard drive partition.',
          'Swapping physical RAM blocks manually.'
        ],
        answerIdx: 1,
        explanation: 'Context switching is saving the active state (registers, PC) of the running process to its PCB and loading a new one to enable multitasking.'
      },
      {
        question: 'In Unix-like systems, what is the purpose of the fork() system call?',
        options: [
          'To terminate the current active process.',
          'To create a new child process by duplicating the address space of the parent process.',
          'To allocate dynamic heaps on the RAM.',
          'To lock critical section threads.'
        ],
        answerIdx: 1,
        explanation: '`fork()` duplicates the parent process, returning 0 to the child and the child\'s PID to the parent process.'
      },
      {
        question: 'What is a "Zombie Process"?',
        options: [
          'A process that continues executing indefinitely in an infinite loop.',
          'A process that has completed execution but still has an entry in the process table because its parent hasn\'t read its exit status.',
          'A process that has been terminated forcibly by the user.',
          'A process waiting for disk I/O.'
        ],
        answerIdx: 1,
        explanation: 'Zombie processes have terminated but wait in the process table until the parent reads their status via the `wait()` system call.'
      }
    ],
    'cpu-scheduling': [
      {
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
      {
        question: 'What is the "Convoy Effect" in CPU scheduling?',
        options: [
          'Many short processes waiting behind a single long process in a First-Come, First-Served queue.',
          'A CPU scheduler getting stuck in an infinite scheduling loop.',
          'Multiple threads accessing the same critical section.',
          'Disk page thrashing causing system lag.'
        ],
        answerIdx: 0,
        explanation: 'The convoy effect happens in FCFS scheduling when short processes wait long periods for one long-running, CPU-bound process to finish.'
      },
      {
        question: 'How does Round Robin (RR) scheduling handle process dispatching?',
        options: [
          'It assigns the CPU based on process file size.',
          'It gives each process a small unit of CPU time (time quantum) in a circular ready queue.',
          'It runs the shortest job until completion.',
          'It executes processes based on alphabetical name ordering.'
        ],
        answerIdx: 1,
        explanation: 'Round Robin is a preemptive algorithm that cycles through the ready queue, granting each process a time quantum slot.'
      },
      {
        question: 'What scheduling mechanism resolves starvation in priority scheduling by gradually increasing process priorities over time?',
        options: [
          'Aging',
          'Context Swapping',
          'Preemption',
          'Spooling'
        ],
        answerIdx: 0,
        explanation: 'Aging is a technique that gradually increases the priority of processes that wait in the system for long periods.'
      },
      {
        question: 'Which CPU scheduling metric represents the total time elapsed from the submission of a process to its completion?',
        options: [
          'Waiting Time',
          'Turnaround Time',
          'Response Time',
          'Throughput'
        ],
        answerIdx: 1,
        explanation: 'Turnaround Time is the sum of times spent waiting in queue, context switching, and executing on the CPU.'
      }
    ],
    'memory-management': [
      {
        question: 'What is the purpose of the Translation Lookaside Buffer (TLB) in virtual memory page tables?',
        options: [
          'To swap process heaps from physical RAM to local hard disks.',
          'To cache virtual-to-physical frame address mappings in fast hardware, bypassing two-step RAM lookups.',
          'To detect infinite loops in thread scheduling contexts.',
          'To compile machine instructions into spatial network frames.'
        ],
        answerIdx: 1,
        explanation: 'The TLB is a high-speed hardware cache that stores recent virtual-to-physical address translations. This avoids having to look up mappings in the page table stored in main memory twice for every access, speeding up address translations.'
      },
      {
        question: 'What event occurs when a process attempts to access a page that is mapped in virtual memory but not currently loaded into physical RAM?',
        options: [
          'Segmentation Fault',
          'Page Fault',
          'Buffer Overflow',
          'Context Switch'
        ],
        answerIdx: 1,
        explanation: 'A page fault is an interrupt raised by hardware when a program accesses a virtual page that is not currently mapped into physical memory.'
      },
      {
        question: 'Which page replacement algorithm replaces the page that has not been used for the longest period of time?',
        options: [
          'First-In, First-Out (FIFO)',
          'Least Recently Used (LRU)',
          'Optimal Page Replacement (OPT)',
          'Least Frequently Used (LFU)'
        ],
        answerIdx: 1,
        explanation: 'LRU tracks page access times and replaces the page that has gone unused for the longest interval.'
      },
      {
        question: 'What is "Thrashing" in memory management?',
        options: [
          'Formatting RAM sectors.',
          'A state where the system spends more time swapping pages in and out of disk than executing useful instructions.',
          'Deleting orphaned cache lines.',
          'A hardware memory leak causing processes to abort.'
        ],
        answerIdx: 1,
        explanation: 'Thrashing occurs when a process has insufficient frames allocated, causing it to page fault repeatedly and bog down the CPU.'
      },
      {
        question: 'Which hardware unit performs the translation of virtual memory addresses to physical RAM addresses in real-time?',
        options: [
          'Arithmetic Logic Unit (ALU)',
          'Memory Management Unit (MMU)',
          'Process Control Block (PCB)',
          'Network Interface Card (NIC)'
        ],
        answerIdx: 1,
        explanation: 'The Memory Management Unit (MMU) is the CPU hardware component that translates virtual addresses to physical coordinates.'
      }
    ]
  },
  'data-structures': {
    'arrays': [
      {
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
      {
        question: 'What is the time complexity to insert a new element at the beginning (index 0) of a static array of size N?',
        options: [
          'O(1)',
          'O(log N)',
          'O(N)',
          'O(N log N)'
        ],
        answerIdx: 2,
        explanation: 'Inserting at the beginning of an array requires shifting all N existing elements one position to the right, which takes O(N) linear time.'
      },
      {
        question: 'How do Dynamic Arrays (like Vectors in C++ or ArrayLists in Java) maintain efficient insertions when they run out of capacity?',
        options: [
          'They convert into a linked list structure.',
          'They allocate a new larger array (typically double the size), copy the elements over, and delete the old array.',
          'They store subsequent elements in virtual swap memory files.',
          'They truncate oldest elements automatically.'
        ],
        answerIdx: 1,
        explanation: 'When capacity is exceeded, dynamic arrays allocate double the memory, copy old items, and release the old array, achieving O(1) amortized insertion cost.'
      },
      {
        question: 'Why do arrays exhibit excellent CPU cache performance compared to linked lists?',
        options: [
          'Array operations are processed directly inside CPU registers.',
          'Arrays store elements in contiguous memory blocks, resulting in high spatial locality of reference.',
          'Arrays carry fewer pointer addresses.',
          'Arrays require less memory allocation.'
        ],
        answerIdx: 1,
        explanation: 'Because array elements are stored contiguously, loading one element pulls subsequent elements into the fast CPU cache line (spatial locality).'
      },
      {
        question: 'What is the memory address of the element at index 4 of an integer array (4 bytes per int) with a base memory address of 1000?',
        options: [
          '1004',
          '1008',
          '1016',
          '1020'
        ],
        answerIdx: 2,
        explanation: 'The memory address is computed as: Base Address + Index * Element Size = 1000 + 4 * 4 = 1016.'
      }
    ],
    'stacks': [
      {
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
      {
        question: 'Which of the following operations on a stack has a time complexity of O(1)?',
        options: [
          'Push',
          'Pop',
          'Peek',
          'All of the above'
        ],
        answerIdx: 3,
        explanation: 'All fundamental stack operations (Push, Pop, Peek) interact only with the top element, requiring constant time O(1).'
      },
      {
        question: 'What error occurs when a program attempts to push an element onto a stack that has exceeded its maximum allocated memory capacity?',
        options: [
          'Stack Underflow',
          'Stack Overflow',
          'Segmentation Fault',
          'Buffer Leak'
        ],
        answerIdx: 1,
        explanation: 'A stack overflow occurs when there is no room left to push new items, often caused by infinite or very deep recursive functions.'
      },
      {
        question: 'Which data structure is best suited to check if brackets (parentheses, braces) are correctly balanced in a code expression?',
        options: [
          'Queue',
          'Stack',
          'Binary Tree',
          'Hash Table'
        ],
        answerIdx: 1,
        explanation: 'A stack is ideal: push open brackets, and pop/match them when close brackets are encountered. The stack must be empty at the end.'
      },
      {
        question: 'What is the prefix representation of the infix expression: A + B * C?',
        options: [
          'A B C * +',
          '+ A * B C',
          '* + A B C',
          '+ * A B C'
        ],
        answerIdx: 1,
        explanation: 'Operator precedence evaluates B*C first (*BC). Then we add A (+A*BC). This forms the prefix representation.'
      }
    ],
    'queues': [
      {
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
      {
        question: 'Which principle governs the order in which elements are inserted and removed from a standard queue?',
        options: [
          'LIFO (Last-In, First-Out)',
          'FIFO (First-In, First-Out)',
          'LILO (Last-In, Last-Out)',
          'Priority-Based Selection'
        ],
        answerIdx: 1,
        explanation: 'A queue operates on First-In, First-Out (FIFO) principles, where elements are enqueued at the rear and dequeued from the front.'
      },
      {
        question: 'What is the time complexity to dequeue an element from a queue implemented with a singly linked list (maintaining both head and tail pointers)?',
        options: [
          'O(1)',
          'O(log N)',
          'O(N)',
          'O(1) to enqueue, O(N) to dequeue'
        ],
        answerIdx: 0,
        explanation: 'Removing from the front (head) of a linked list requires updating the head pointer, which is a constant time O(1) operation.'
      },
      {
        question: 'What is the main limitation of a simple array-based queue?',
        options: [
          'It cannot store primitive data types.',
          'Dequeuing leaves empty spaces at the front of the array that cannot be reused without shifting elements, wasting space.',
          'It takes O(N) to enqueue elements.',
          'Pointers consume more memory than the data values.'
        ],
        answerIdx: 1,
        explanation: 'In a basic array queue, as elements are dequeued, the front pointer moves forward, leaving unusable slots behind unless circular logic is used.'
      },
      {
        question: 'Which variant of a queue allows elements to be inserted and deleted at both the front and rear ends?',
        options: [
          'Deque (Double-Ended Queue)',
          'Circular Queue',
          'Priority Queue',
          'Stack'
        ],
        answerIdx: 0,
        explanation: 'A Deque (Double-Ended Queue) allows enqueue and dequeue operations at both the front and rear boundaries.'
      }
    ],
    'linked-lists': [
      {
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
      {
        question: 'What is the time complexity to search for a value in a sorted Singly Linked List of size N?',
        options: [
          'O(1)',
          'O(log N)',
          'O(N)',
          'O(N log N)'
        ],
        answerIdx: 2,
        explanation: 'Unlike arrays, linked lists do not support index-based random access. We must traverse nodes sequentially, costing O(N) even if sorted.'
      },
      {
        question: 'In a Circular Linked List, what does the next pointer of the last node reference?',
        options: [
          'Null',
          'The Head Node',
          'itself',
          'An undefined memory address'
        ],
        answerIdx: 1,
        explanation: 'In a circular linked list, the tail node\'s next pointer links back to the head node to form a closed loop.'
      },
      {
        question: 'How much memory overhead does a Doubly Linked List node have compared to a Singly Linked List node?',
        options: [
          'None, they are identical.',
          'One additional pointer reference (prev pointer).',
          'Double the data payload size.',
          'Two additional pointers.'
        ],
        answerIdx: 1,
        explanation: 'A singly linked node has one pointer (next). A doubly linked node has two pointers (next and prev), adding one pointer overhead per node.'
      },
      {
        question: 'What is a major disadvantage of linked lists compared to arrays?',
        options: [
          'They cannot grow dynamically.',
          'They consume more memory due to pointer storage and lack direct random access.',
          'Insertions at the head are slow.',
          'They are not compatible with recursive algorithms.'
        ],
        answerIdx: 1,
        explanation: 'Linked lists require extra memory to store pointer addresses for each node, and accessing index `i` requires linear traversal (O(N)).'
      }
    ],
    'trees': [
      {
        question: 'Why does an AVL Tree remain more computationally optimal for searching than a skewed Binary Search Tree (BST) under worst-case insertion sequences?',
        options: [
          'An AVL tree acts as a contiguous array to keep access paths direct.',
          'An AVL tree automatically converts into a LIFO stack to speed up searches.',
          'An AVL tree strictly maintains its balance factor between -1 and 1, keeping height bounded to O(log N).',
          'An AVL tree maps nodes using unique cryptographic hash indices.'
        ],
        answerIdx: 2,
        explanation: 'An AVL tree is a self-balancing BST. By enforcing that the height difference of any node\'s subtrees (balance factor) is at most 1, it performs rotations to guarantee the tree height stays O(log N), avoiding worst-case linear O(N) degenerations of skewed BSTs.'
      },
      {
        question: 'What is the maximum number of nodes in a binary tree of height H (where root is at height 1)?',
        options: [
          '2^H',
          '2^H - 1',
          '2^(H - 1)',
          'H^2'
        ],
        answerIdx: 1,
        explanation: 'A fully saturated binary tree of height H has 2^H - 1 nodes (e.g. height 1 has 1 node, height 2 has 3 nodes).'
      },
      {
        question: 'Which tree traversal visits nodes in the following order: Left Subtree, Right Subtree, Root Node?',
        options: [
          'Pre-order',
          'In-order',
          'Post-order',
          'Level-order'
        ],
        answerIdx: 2,
        explanation: 'Post-order traversal visits children first (Left, Right) and processes the parent node (Root) last.'
      },
      {
        question: 'What is the time complexity of search, insertion, and deletion operations in a balanced Binary Search Tree (like Red-Black or AVL)?',
        options: [
          'O(1)',
          'O(log N)',
          'O(N)',
          'O(N log N)'
        ],
        answerIdx: 1,
        explanation: 'Balanced BSTs guarantee that the height of the tree is proportional to log N, yielding O(log N) search, insert, and delete complexity.'
      },
      {
        question: 'In a Binary Search Tree, which traversal method prints the keys in strictly ascending sorted order?',
        options: [
          'Pre-order',
          'In-order',
          'Post-order',
          'Level-order'
        ],
        answerIdx: 1,
        explanation: 'In-order traversal visits nodes in Left-Root-Right sequence, which matches the sorting rules of a BST, outputting keys in sorted order.'
      }
    ]
  },
  'nlp': {
    'nlp-intro': [
      {
        question: 'What is the primary objective of Natural Language Processing (NLP)?',
        options: [
          'Compiling binary assembly instructions into machine bytecode',
          'Enabling computers to understand, interpret, and generate human languages',
          'Simulating physics particle collisions in real-time engines',
          'Managing routing tables across autonomous network systems'
        ],
        answerIdx: 1,
        explanation: 'NLP focuses on bridging the communication gap between human linguistic patterns and computer-interpretable mathematical representations.'
      },
      {
        question: 'Which of the following describes syntactic ambiguity in human language processing?',
        options: [
          'A single word having multiple distinct definitions (e.g., "bank")',
          'A sentence possessing multiple valid grammatical parse trees (e.g., "I saw the man with the telescope")',
          'Misspelled words causing vocabulary lookup misses',
          'Different audio frequencies resulting in phonetic errors'
        ],
        answerIdx: 1,
        explanation: 'Syntactic (structural) ambiguity occurs when a phrase or sentence can be grammatically parsed into multiple structural interpretations.'
      },
      {
        question: 'In a standard NLP pipeline, which step immediately follows text preprocessing and normalization?',
        options: [
          'Tokenization and feature representation',
          'Physical line wave modulation',
          'Database table index normalization',
          'Packet encapsulation and checksum hashing'
        ],
        answerIdx: 0,
        explanation: 'After cleaning and normalization, text is segmented into tokens and transformed into numeric vector representations for NLP models.'
      },
      {
        question: 'What distinguishes morphology from syntax in linguistic analysis?',
        options: [
          'Morphology analyzes internal word formation rules, while syntax analyzes sentence structure rules',
          'Morphology deals with audio waves, while syntax deals with database schemas',
          'Syntax operates only on single characters, while morphology requires paragraphs',
          'Morphology translates languages, while syntax generates speech'
        ],
        answerIdx: 0,
        explanation: 'Morphology studies how morphemes combine to form words (e.g., prefixes/suffixes), while syntax studies rules governing valid word sequences in sentences.'
      },
      {
        question: 'Which real-world application directly relies on an end-to-end NLP comprehension pipeline?',
        options: [
          'Conversational Virtual Assistants and Intent Parsers',
          'Hard drive disk sector defragmentation',
          'Dynamic RAM memory paging and clock cycles',
          'OSPF Link-State routing packet broadcasts'
        ],
        answerIdx: 0,
        explanation: 'Virtual assistants parse spoken language into text, extract intent and entity slots through NLP, and formulate contextual actions or responses.'
      }
    ],
    'tokenization': [
      {
        question: 'What is the primary function of Tokenization in NLP?',
        options: [
          'Compressing image files into JPEG format',
          'Splitting a continuous stream of text into discrete atomic units called tokens',
          'Allocating contiguous memory blocks in RAM',
          'Hashing passwords with cryptographic salt'
        ],
        answerIdx: 1,
        explanation: 'Tokenization segments contiguous character sequences into words, punctuation marks, or subword units to construct the model vocabulary.'
      },
      {
        question: 'Why do modern LLMs (like GPT and BERT) prefer subword tokenization (e.g., BPE, WordPiece) over word tokenization?',
        options: [
          'It eliminates the need for neural network weights',
          'It balances vocabulary size while effectively handling rare and out-of-vocabulary (OOV) words',
          'It translates text between languages without training',
          'It guarantees zero memory consumption on GPUs'
        ],
        answerIdx: 1,
        explanation: 'Subword algorithms (such as Byte-Pair Encoding) break unfamiliar or compound words into known frequent sub-tokens, preventing OOV breakdown while keeping vocabulary compact.'
      },
      {
        question: 'How does sentence tokenization (Sentence Boundary Disambiguation) handle periods in abbreviations (e.g., "Dr. Smith went to Washington D.C.")?',
        options: [
          'It blindly splits at every period, creating 4 broken sentences',
          'It uses rule-based heuristic patterns and lexicon checks to distinguish abbreviation periods from terminal periods',
          'It removes all letters before capital letters',
          'It converts all periods into exclamation marks'
        ],
        answerIdx: 1,
        explanation: 'Sentence tokenizers use abbreviation lexicons, capitalization checks, and contextual classifiers to avoid false boundary splits at abbreviation periods.'
      },
      {
        question: 'What is an Out-Of-Vocabulary (OOV) word problem in strict word-level tokenization?',
        options: [
          'A word appearing at test time that was never seen in the training vocabulary, resulting in an unknown <UNK> token',
          'A token that contains more than 100 characters',
          'A database collision occurring when indexing dictionary keys',
          'A syntax error thrown when compiling regex patterns'
        ],
        answerIdx: 0,
        explanation: 'When a word-level model encounters an unseen word during inference, it must map it to an uninformative <UNK> token, losing all semantic information.'
      },
      {
        question: 'Given the sentence "We are learning NLP!", which output represents standard whitespace-and-punctuation word tokenization?',
        options: [
          '["We", "are", "learning", "NLP", "!"]',
          '["WearelearningNLP!"]',
          '["W", "e", "a", "r", "e"]',
          '["We are", "learning NLP!"]'
        ],
        answerIdx: 0,
        explanation: 'Word tokenization cleanly separates lexical words and distinct trailing punctuation symbols into discrete array elements.'
      }
    ],
    'text-preprocessing': [
      {
        question: 'What is the primary motivation for Stop-Word removal in traditional NLP tasks (like TF-IDF or Bag-of-Words)?',
        options: [
          'To encrypt the sensitive words in a document',
          'To filter out ubiquitous grammatical words (like "the", "is", "at") that offer little discriminative topical signal',
          'To convert all letters into uppercase hexadecimal values',
          'To force the document length to be an exact power of two'
        ],
        answerIdx: 1,
        explanation: 'Stop words appear with high frequency across nearly all documents, adding noise and dimensionality without providing topical discrimination in bag-of-words models.'
      },
      {
        question: 'What is the key difference between Stemming and Lemmatization?',
        options: [
          'Stemming uses morphological dictionary lookups, while Lemmatization chops off arbitrary endings',
          'Stemming applies crude heuristic rules to chop suffixes (often yielding non-words), while Lemmatization uses vocabulary and grammar to return genuine base lemmas',
          'Stemming operates on audio files, while Lemmatization operates on text',
          'Stemming is used only for numbers, while Lemmatization is for strings'
        ],
        answerIdx: 1,
        explanation: 'Stemming (e.g., Porter stemmer) cuts suffixes heuristically (producing stems like "studi"), while Lemmatization uses morphological analysis and parts of speech to return valid dictionary lemmas (e.g., "studying" -> "study", "better" -> "good").'
      },
      {
        question: 'Why is case normalization (lowercasing) applied during text preprocessing?',
        options: [
          'To reduce GPU temperature during inference',
          'To ensure that words like "Learning", "learning", and "LEARNING" map to the same vocabulary feature index',
          'To convert English words into ASCII binary numbers',
          'To prevent memory leaks in the browser engine'
        ],
        answerIdx: 1,
        explanation: 'Lowercasing prevents redundant vocabulary proliferation by mapping different casing variants of the same word to a single unified token.'
      },
      {
        question: 'Which of the following is a valid base lemma for the word "better" when processed with an adjective POS tag?',
        options: [
          'bet',
          'good',
          'bett',
          'best'
        ],
        answerIdx: 1,
        explanation: 'Lemmatization recognizes that "better" is the comparative form of the adjective "good", returning its true base lemma "good".'
      },
      {
        question: 'Under which scenario might removing punctuation during preprocessing be DETRIMENTAL to model performance?',
        options: [
          'Simple keyword counting in Bag-of-Words',
          'Sentiment Analysis and Question-Answering where punctuation marks (like "!", "?") convey strong emotion or question intent',
          'Alphabetical sorting of a dictionary glossary',
          'Measuring raw byte length of a file'
        ],
        answerIdx: 1,
        explanation: 'In sentiment analysis and conversational tasks, punctuation marks like exclamation points ("!") and question marks ("?") provide vital emotional and syntactic signals.'
      }
    ],
    'pos-tagging': [
      {
        question: 'In the Penn Treebank POS tagset, which tag designates a singular noun?',
        options: [
          'VB',
          'NN',
          'JJ',
          'RB'
        ],
        answerIdx: 1,
        explanation: 'NN represents a singular noun (e.g., "dog", "table"), whereas NNS represents a plural noun.'
      },
      {
        question: 'Consider the word "book" in: (1) "Please book my flight" vs (2) "I bought a book". How does POS tagging resolve this ambiguity?',
        options: [
          'It randomly assigns either noun or verb with 50% probability',
          'It assigns Verb (VB) to sentence 1 and Noun (NN) to sentence 2 based on surrounding syntactic context',
          'It always forces all homographs to be Adjectives (JJ)',
          'It throws a parsing exception because a word cannot have two tags'
        ],
        answerIdx: 1,
        explanation: 'POS taggers analyze surrounding context (e.g., following "Please" vs following the determiner "a") to correctly identify whether a homograph acts as a verb or noun.'
      },
      {
        question: 'Which probabilistic statistical model was widely used for sequence-based POS tagging prior to deep learning transformers?',
        options: [
          'Hidden Markov Model (HMM) using Viterbi decoding',
          'Dijkstra Shortest Path Algorithm',
          'QuickSort recursive partitioning',
          'Round-Robin CPU preemptive scheduler'
        ],
        answerIdx: 0,
        explanation: 'HMMs with Viterbi decoding evaluate transition probabilities between tags and emission probabilities of words to find the most probable sequence of POS tags.'
      },
      {
        question: 'What is the Penn Treebank tag for an adjective modifying a noun (e.g., "innovative" in "innovative platform")?',
        options: [
          'JJ',
          'IN',
          'PRP',
          'CC'
        ],
        answerIdx: 0,
        explanation: 'JJ denotes a standard adjective in the Penn Treebank tagset.'
      },
      {
        question: 'Why is POS tagging a crucial prerequisite step for Named Entity Recognition and syntactic Dependency Parsing?',
        options: [
          'Because POS tags provide the grammatical category structure needed to establish dependency arcs and entity boundaries',
          'Because POS tags compress strings into gzip files',
          'Because POS tags remove all verbs from sentences',
          'Because POS tags calculate cryptographic SHA-256 signatures'
        ],
        answerIdx: 0,
        explanation: 'Knowing whether a token is a proper noun (NNP), verb (VB), or preposition (IN) allows downstream parsers to establish grammatical relationships and identify entity noun phrases.'
      }
    ],
    'ner': [
      {
        question: 'What is the main objective of Named Entity Recognition (NER)?',
        options: [
          'Translating English words into Japanese Kanji characters',
          'Locating and classifying entity mentions in text into predefined categories (e.g., Person, Organization, Location, Date)',
          'Detecting whether an image contains a cat or a dog',
          'Formatting HTML tables into CSS grid layouts'
        ],
        answerIdx: 1,
        explanation: 'NER scans unstructured text to identify specific real-world entities (names of people, companies, cities, monetary values, timestamps) and assign them to predefined categories.'
      },
      {
        question: 'In the standard IOB / BIO sequence labeling format, what does the "B-" prefix indicate?',
        options: [
          'The Beginning of a multi-token or single-token named entity chunk',
          'A Binary background variable',
          'A Boolean assertion error',
          'A Bytecode compiled character'
        ],
        answerIdx: 0,
        explanation: 'In BIO tagging, "B-" marks the Beginning of an entity, "I-" marks tokens Inside an entity chunk, and "O" marks tokens Outside any entity.'
      },
      {
        question: 'In the phrase "Sundar Pichai visited London last Monday", what are the correct entity tags for "Sundar Pichai" and "London"?',
        options: [
          '"Sundar Pichai" = PERSON (PER), "London" = LOCATION (LOC / GPE)',
          '"Sundar Pichai" = LOCATION, "London" = MONEY',
          '"Sundar Pichai" = DATE, "London" = ORGANIZATION',
          '"Sundar Pichai" = MISC, "London" = PERSON'
        ],
        answerIdx: 0,
        explanation: '"Sundar Pichai" is recognized as a PERSON entity, and "London" is recognized as a geopolitical LOCATION (LOC/GPE).'
      },
      {
        question: 'How does contextual ambiguity affect entity recognition for polysemous words like "Apple"?',
        options: [
          'NER models always classify "Apple" as FOOD regardless of surrounding text',
          'Contextual NER models classify "Apple" as ORGANIZATION in "Apple reported record earnings" and as FOOD in "He ate a crisp green apple"',
          'The model halts execution with an ambiguity error',
          'The model replaces the word with a placeholder string'
        ],
        answerIdx: 1,
        explanation: 'Contextual embeddings and attention mechanisms allow modern NER systems to distinguish between corporate organizations and physical fruits based on context.'
      },
      {
        question: 'Which architectural combination was standard state-of-the-art for sequence tagging NER before pure transformer models?',
        options: [
          'Bi-LSTM + CRF (Bidirectional Long Short-Term Memory with Conditional Random Fields)',
          'Single-layer Perceptron without activation functions',
          'Linear Regression with Ordinary Least Squares',
          'K-Means clustering on pixel values'
        ],
        answerIdx: 0,
        explanation: 'BiLSTM-CRF networks combined bidirectional contextual hidden states with CRF transition matrices to ensure globally valid sequence tag transitions.'
      }
    ],
    'bag-of-words': [
      {
        question: 'How does the Bag of Words (BoW) model represent a document mathematically?',
        options: [
          'As an audio waveform frequency spectrogram',
          'As a fixed-length numeric vector of term frequency occurrence counts across a shared vocabulary',
          'As a directed acyclic graph preserving chronological reading order',
          'As an encrypted hash digest'
        ],
        answerIdx: 1,
        explanation: 'BoW constructs a vector where each index corresponds to a distinct vocabulary word and the value represents how many times that word occurs in the document.'
      },
      {
        question: 'What fundamental linguistic property is COMPLETELY DISREGARDED by the standard Bag of Words model?',
        options: [
          'The spelling of each word',
          'Word order, syntax, and contextual grammatical structure',
          'The total count of tokens',
          'The unique vocabulary index list'
        ],
        answerIdx: 1,
        explanation: 'BoW treats a document like a literal unordered bag of words; sentences like "not good, very bad" and "not bad, very good" yield identical BoW count vectors.'
      },
      {
        question: 'Why do Bag of Words document-term matrices typically suffer from high "sparsity"?',
        options: [
          'Because most documents contain only a tiny fraction of the global vocabulary, resulting in matrices filled predominantly with zeros',
          'Because the model deletes all consonant letters',
          'Because floating-point numbers cannot be stored in RAM',
          'Because words are repeated an infinite number of times'
        ],
        answerIdx: 0,
        explanation: 'In a vocabulary of 50,000 words, a typical document of 100 words contains non-zero entries for only ~0.2% of the features, making the matrix extremely sparse.'
      },
      {
        question: 'How can n-grams (e.g., bigrams, trigrams) be incorporated into a Bag of Words representation to partially retain word order?',
        options: [
          'By including contiguous sequences of N words (e.g., "not_good", "very_fast") as distinct features in the vocabulary',
          'By sorting the words alphabetically before counting',
          'By reversing the string order of every document',
          'By converting all numbers to Roman numerals'
        ],
        answerIdx: 0,
        explanation: 'Adding n-gram tokens (e.g., "machine_learning", "not_guilty") allows BoW to capture localized multi-word phrases and contextual negations.'
      },
      {
        question: 'Which machine learning classifier is classically paired with Bag of Words for fast baseline document text classification?',
        options: [
          'Multinomial Naive Bayes',
          'Convolutional Neural Network for Image Segmentation',
          'Dijkstra Routing Table Matrix',
          'Banker\'s Deadlock Avoidance Algorithm'
        ],
        answerIdx: 0,
        explanation: 'Multinomial Naive Bayes applies Bayes\' theorem with conditional independence assumptions directly over discrete BoW word frequency distributions.'
      }
    ],
    'tf-idf': [
      {
        question: 'What is the mathematical definition of Term Frequency (TF) for a term t in a document d?',
        options: [
          'TF(t, d) = total characters in document / number of sentences',
          'TF(t, d) = count of occurrences of term t in document d divided by total words in document d',
          'TF(t, d) = total documents in the library',
          'TF(t, d) = alphabetical position of the first letter of term t'
        ],
        answerIdx: 1,
        explanation: 'Term Frequency measures how frequently a specific word appears within a single document, normalized by the document\'s length.'
      },
      {
        question: 'What does the Inverse Document Frequency (IDF) metric measure across a corpus of documents?',
        options: [
          'The average font size across all PDF files',
          'How rare or informative a term is across the entire collection of documents (penalizing ubiquitous words and rewarding rare topical words)',
          'The time taken to download the corpus over TCP sockets',
          'The number of grammar errors per page'
        ],
        answerIdx: 1,
        explanation: 'IDF takes the logarithm of the ratio of total documents to documents containing the term, giving high weights to rare topical words and near-zero weights to common words.'
      },
      {
        question: 'If the word "algorithm" appears in 5 out of 10,000 documents in a corpus, while the word "system" appears in 9,500 out of 10,000 documents, which word will have a significantly higher IDF score?',
        options: [
          '"system", because it appears in more documents',
          '"algorithm", because it is much rarer across the corpus and carries high discriminative topical signal',
          'Both will have identical IDF scores of exactly 1.0',
          'Neither, IDF is only calculated for numbers'
        ],
        answerIdx: 1,
        explanation: 'Inverse Document Frequency inversely scales with document frequency; rare terms like "algorithm" yield high IDF, whereas ubiquitous terms like "system" receive very low IDF.'
      },
      {
        question: 'How is the final TF-IDF weight of a term in a document computed?',
        options: [
          'TF-IDF = Term Frequency (TF) * Inverse Document Frequency (IDF)',
          'TF-IDF = Term Frequency (TF) + Inverse Document Frequency (IDF)',
          'TF-IDF = Term Frequency (TF) / Inverse Document Frequency (IDF)',
          'TF-IDF = log(TF) - log(IDF)'
        ],
        answerIdx: 0,
        explanation: 'TF-IDF is the product of local term frequency (TF) and global inverse document frequency (IDF).'
      },
      {
        question: 'How is Cosine Similarity used with normalized TF-IDF document vectors in search engine information retrieval?',
        options: [
          'By measuring the cosine of the angle between query and document vectors in multi-dimensional space to rank topical relevance from 0 to 1',
          'By counting the physical distance between servers on a network grid',
          'By checking if the document file format is HTML or TXT',
          'By multiplying the CPU clock speed by the document size'
        ],
        answerIdx: 0,
        explanation: 'Cosine similarity computes the dot product of two normalized TF-IDF vectors, evaluating their directional alignment in vector space irrespective of raw document lengths.'
      }
    ],
    'word-embeddings': [
      {
        question: 'What is the core advantage of continuous dense Word Embeddings (like Word2Vec, GloVe) over sparse One-Hot encodings?',
        options: [
          'They store words as raw uncompressed audio files',
          'They project words into low-dimensional continuous vector spaces where geometric distances capture semantic similarity and conceptual relationships',
          'They guarantee 100% accuracy on every NLP task without training',
          'They eliminate the need for CPU floating point units'
        ],
        answerIdx: 1,
        explanation: 'Dense embeddings map thousands of vocabulary words into 100-300 continuous dimensions where dot products and Euclidean distances represent true semantic proximity.'
      },
      {
        question: 'Which linguistic principle forms the theoretical foundation of Word2Vec and distributed representation models?',
        options: [
          'Distributional Hypothesis: "A word is characterized by the company it keeps" (Firth)',
          'Amdahl\'s Law of parallel computing speedup',
          'Moore\'s Law of transistor density doubling',
          'Shannon\'s Theorem of noisy channel coding'
        ],
        answerIdx: 0,
        explanation: 'The Distributional Hypothesis states that words that occur in similar linguistic contexts tend to have similar semantic meanings.'
      },
      {
        question: 'What are the two primary model architectures introduced in Word2Vec (Mikolov et al.)?',
        options: [
          'Continuous Bag-of-Words (CBOW) and Continuous Skip-Gram',
          'First-Come First-Served and Round-Robin',
          'Bubble Sort and Quick Sort',
          'Dijkstra Shortest Path and Bellman-Ford'
        ],
        answerIdx: 0,
        explanation: 'CBOW predicts a target word given surrounding context words, while Skip-Gram predicts surrounding context words given a single target word.'
      },
      {
        question: 'What famous vector arithmetic analogy demonstrated the semantic structure encoded in Word2Vec vector spaces?',
        options: [
          'vector("King") - vector("Man") + vector("Woman") ≈ vector("Queen")',
          'vector("Car") * vector("Speed") = vector("Crash")',
          'vector("Tree") / vector("Leaf") = vector("Root")',
          'vector("Water") + vector("Fire") = vector("Steam")'
        ],
        answerIdx: 0,
        explanation: 'Linear offsets between word vectors capture relational gender and authority analogies, such that subtracting "Man" from "King" and adding "Woman" lands closest to "Queen".'
      },
      {
        question: 'What is the key difference between static word embeddings (Word2Vec) and contextual embeddings (BERT)?',
        options: [
          'Static embeddings assign one fixed vector per word regardless of context, whereas contextual embeddings dynamically compute vectors based on the full surrounding sentence',
          'Static embeddings work only on numbers, while contextual embeddings work on images',
          'Static embeddings cannot be loaded into Python',
          'Contextual embeddings do not use neural networks'
        ],
        answerIdx: 0,
        explanation: 'In Word2Vec, the word "apple" has one static vector; in BERT, transformer self-attention generates distinct contextual vectors for "Apple Inc." vs "sweet green apple".'
      }
    ],
    'sentiment-analysis': [
      {
        question: 'What is the primary goal of Sentiment Analysis (Opinion Mining)?',
        options: [
          'Detecting syntax and spelling errors in source code',
          'Analyzing subjective text to determine emotional tone, attitude, and polarity (positive, negative, neutral)',
          'Compressing text documents into zip archives',
          'Measuring the reading speed of a human user'
        ],
        answerIdx: 1,
        explanation: 'Sentiment analysis identifies opinion polarities and emotional valence expressed in reviews, social media, and customer support transcripts.'
      },
      {
        question: 'In Aspect-Based Sentiment Analysis (ABSA), what does the system extract beyond overall document polarity?',
        options: [
          'Sentiment targeted at specific named attributes or features (e.g., "Great food [Positive], but slow service [Negative]")',
          'The GPS coordinates of the author\'s computer',
          'The battery percentage of the mobile device',
          'The HTML color hex codes used on the webpage'
        ],
        answerIdx: 0,
        explanation: 'ABSA breaks down reviews into granular aspect-sentiment pairs, capturing distinct sentiment ratings for individual features (e.g., screen quality vs battery life).'
      },
      {
        question: 'How do negation words (e.g., "not", "hardly", "never") challenge simple lexicon-based bag-of-words sentiment analyzers?',
        options: [
          'They invert the polarity of adjacent words (e.g., "not good" is negative despite "good" being a positive lexicon entry)',
          'They cause the browser to crash',
          'They delete all words in the sentence',
          'They double the sentiment score of every noun'
        ],
        answerIdx: 0,
        explanation: 'A naive unigram lexicon sees "good" and adds +1, missing the preceding negation "not" which completely reverses the intended sentiment to negative.'
      },
      {
        question: 'Which of the following sentences exhibits Sarcasm / Irony that poses a major challenge for automated sentiment classification?',
        options: [
          '"I absolutely love when my flight gets delayed for 8 hours in the middle of the night!"',
          '"The movie was engaging and had great visual effects."',
          '"The battery lasted 12 hours on a single charge."',
          '"The customer support agent resolved my issue in five minutes."'
        ],
        answerIdx: 0,
        explanation: 'The sentence uses strongly positive words ("absolutely love") to convey intensely negative frustration, requiring subtle contextual and pragmatic modeling to detect.'
      },
      {
        question: 'Which rule-based sentiment tool is specifically optimized for social media text containing emojis, slangs, and capitalization (e.g., "GREAT!!! :D")?',
        options: [
          'VADER (Valence Aware Dictionary and sEntiment Reasoner)',
          'QuickSort Algorithm',
          'Banker\'s Resource Allocation Matrix',
          'Dijkstra Shortest Path Finder'
        ],
        answerIdx: 0,
        explanation: 'VADER is an empirical rule-based sentiment analysis engine tailored to social media contexts, handling punctuation intensity, capitalization emphasis, and emojis.'
      }
    ]
  },
  'dbms': {
    'dbms-intro': [
      {
        question: 'Which level of the ANSI-SPARC 3-tier architecture describes what data is stored in the database and the relationships among the data without hardware details?',
        options: [
          'Conceptual / Logical Level',
          'Physical / Internal Level',
          'External / View Level',
          'Hardware Register Level'
        ],
        answerIdx: 0,
        explanation: 'The Conceptual (Logical) level describes what data is stored and the semantic relationships among entities, abstracting away underlying physical disk structures.'
      },
      {
        question: 'What is "Physical Data Independence" in modern DBMS architecture?',
        options: [
          'The capacity to change internal physical storage structures without altering conceptual schemas or application logic',
          'The ability to run a database without any physical hard drives or memory',
          'The freedom of users to delete physical server hardware anytime',
          'The capacity to change table column names without updating user views'
        ],
        answerIdx: 0,
        explanation: 'Physical Data Independence isolates conceptual schemas from changes in physical storage configurations, access paths, block sizes, or file organization.'
      },
      {
        question: 'Which of the following is a major disadvantage of traditional File Processing Systems compared to a centralized DBMS?',
        options: [
          'Data redundancy and inconsistency across duplicate files',
          'Higher transaction speed for multi-terabyte queries',
          'Excessive support for automatic ACID transactions',
          'Strict enforcement of referential integrity rules'
        ],
        answerIdx: 0,
        explanation: 'File processing systems scatter data across isolated, application-specific files, resulting in uncontrolled duplication, synchronization lag, and data inconsistency.'
      },
      {
        question: 'Which component of a DBMS is responsible for compiling high-level SQL queries into optimized low-level execution engine plans?',
        options: [
          'Query Optimizer & Processor',
          'Physical Hard Disk Arm',
          'Operating System Terminal',
          'Network Cable Transceiver'
        ],
        answerIdx: 0,
        explanation: 'The Query Processor and Optimizer parses SQL queries, evaluates execution cost heuristics, and selects the most efficient plan (e.g., index scan vs hash join).'
      },
      {
        question: 'What is the role of a Database Administrator (DBA)?',
        options: [
          'Defining schemas, managing user security permissions, monitoring performance, and overseeing backup/recovery protocols',
          'Writing front-end CSS stylesheets and web landing pages',
          'Designing CPU clock circuitry and semiconductor chips',
          'Purchasing domain names and graphic stock photos'
        ],
        answerIdx: 0,
        explanation: 'A DBA is responsible for authorizing access, monitoring resource consumption, configuring backups, schema maintenance, and optimizing query performance.'
      }
    ],
    'relational-model': [
      {
        question: 'In relational database terminology, what mathematical term corresponds to a single row in a table?',
        options: [
          'Tuple',
          'Domain',
          'Attribute',
          'Cardinality'
        ],
        answerIdx: 0,
        explanation: 'In the formal relational model, a row in a table is called a Tuple, a column is an Attribute, and the table itself is a Relation.'
      },
      {
        question: 'What is the definition of a "Candidate Key"?',
        options: [
          'A minimal superkey with no redundant attributes that uniquely identifies every tuple in a relation',
          'Any column that contains NULL values in more than 50% of rows',
          'A column that only stores integer values',
          'A key that can only be defined on foreign tables'
        ],
        answerIdx: 0,
        explanation: 'A Candidate Key is a minimal superkey; removal of any single attribute from it destroys its uniqueness guarantee across all tuples.'
      },
      {
        question: 'What does the "Entity Integrity Constraint" state?',
        options: [
          'No primary key attribute value can be NULL in any valid relation instance',
          'Every foreign key must reference a valid primary key',
          'All table names must begin with a capital letter',
          'Tables must contain fewer than 1,000,000 rows'
        ],
        answerIdx: 0,
        explanation: 'Entity Integrity guarantees that individual tuples are identifiable by ensuring primary key attributes cannot contain NULL values.'
      },
      {
        question: 'What happens when a Foreign Key constraint is configured with "ON DELETE CASCADE"?',
        options: [
          'Deleting a parent row automatically deletes all corresponding child rows referencing that parent',
          'The deletion fails with a foreign key violation error',
          'The foreign key values in child rows are converted to 0',
          'The entire database table is dropped immediately'
        ],
        answerIdx: 0,
        explanation: 'ON DELETE CASCADE propagates parent record deletions down to all dependent child records, maintaining referential integrity automatically.'
      },
      {
        question: 'What is the "Degree" of a relation in relational algebra?',
        options: [
          'The total number of attributes (columns) in the relation schema',
          'The total number of rows (tuples) populated in the relation',
          'The temperature of the database server CPU',
          'The number of foreign keys referencing the relation'
        ],
        answerIdx: 0,
        explanation: 'Degree refers to the number of attributes (columns) in a relation, while Cardinality refers to the number of tuples (rows).'
      }
    ],
    'er-model': [
      {
        question: 'In an ER Diagram, how is a Weak Entity set conventionally depicted using standard Chen notation?',
        options: [
          'A double-outlined rectangle',
          'A dashed circle',
          'A single-outlined rhombus (diamond)',
          'A solid triangle'
        ],
        answerIdx: 0,
        explanation: 'Weak entities (which lack a primary key and depend on an owner entity) are depicted with a double-bordered rectangle.'
      },
      {
        question: 'How is a Many-to-Many (M:N) relationship between two strong entity sets mapped into relational tables?',
        options: [
          'By creating a separate junction (bridge) table containing the primary keys of both participating entity sets as foreign keys',
          'By embedding all columns into a single monolithic CSV string',
          'By placing the primary key of one table directly into the other table as a single column',
          'M:N relationships cannot be converted to relational tables'
        ],
        answerIdx: 0,
        explanation: 'An M:N relationship maps to a new associative/junction table where the composite primary key consists of the foreign keys of both related entities.'
      },
      {
        question: 'What type of attribute can be broken down into smaller, independently meaningful sub-parts (e.g., FullName into FirstName, LastName)?',
        options: [
          'Composite Attribute',
          'Derived Attribute',
          'Multi-valued Attribute',
          'Atomic Key'
        ],
        answerIdx: 0,
        explanation: 'Composite attributes are composed of multiple smaller components (e.g., Address -> Street, City, State, Zip).'
      },
      {
        question: 'In an ER diagram, what does an ellipse with a dashed/dotted border represent?',
        options: [
          'A Derived Attribute (e.g., Age computed from DateOfBirth)',
          'A Primary Key attribute',
          'A Weak Entity set',
          'A Recursive Relationship'
        ],
        answerIdx: 0,
        explanation: 'Derived attributes (values dynamically calculated from stored attributes, such as Age from Date of Birth) are drawn as dashed ellipses.'
      },
      {
        question: 'What does "Total Participation" of an entity set in a relationship indicate?',
        options: [
          'Every entity in the entity set must participate in at least one relationship instance (represented by a double line)',
          'Only half of the entity records participate in the relationship',
          'The relationship is optional for all entities',
          'All columns in the table must have unique names'
        ],
        answerIdx: 0,
        explanation: 'Total Participation (existence dependency) requires every member of an entity set to participate in the relationship, represented by a double line.'
      }
    ],
    'sql-joins': [
      {
        question: 'Which SQL join returns all rows from the Left table, along with matching rows from the Right table, padding with NULLs when there is no match?',
        options: [
          'LEFT OUTER JOIN',
          'INNER JOIN',
          'CROSS JOIN',
          'RIGHT EXCLUSIVE JOIN'
        ],
        answerIdx: 0,
        explanation: 'LEFT OUTER JOIN retains every record from the left-hand table and matches right-hand rows where possible, filling missing right attributes with NULL.'
      },
      {
        question: 'If Table A has 5 rows and Table B has 4 rows, how many rows will a CROSS JOIN (Cartesian product) between Table A and Table B produce?',
        options: [
          '20 rows',
          '9 rows',
          '5 rows',
          '1 row'
        ],
        answerIdx: 0,
        explanation: 'A CROSS JOIN produces a Cartesian product matching every row in A with every row in B: 5 * 4 = 20 rows.'
      },
      {
        question: 'What is the fundamental difference between an INNER JOIN and a FULL OUTER JOIN?',
        options: [
          'INNER JOIN only keeps matched rows; FULL OUTER JOIN returns all rows from both tables, filling non-matching sides with NULL',
          'INNER JOIN deletes unmatched records from the disk permanently',
          'FULL OUTER JOIN only works on numerical primary keys',
          'INNER JOIN requires both tables to have identical column counts'
        ],
        answerIdx: 0,
        explanation: 'INNER JOIN discards non-matching tuples from both relations, whereas FULL OUTER JOIN preserves all tuples from both relations with NULL padding.'
      },
      {
        question: 'In SQL, what is a "Self Join"?',
        options: [
          'Joining a table to itself using table aliases to compare rows within the same relation (e.g., Employee to Manager)',
          'A join that runs automatically without any SQL query',
          'A join between two databases on different physical servers',
          'A join that clones a table into temporary memory'
        ],
        answerIdx: 0,
        explanation: 'A Self Join combines rows from the same table based on related columns, using aliases like `Employees E JOIN Employees M ON E.manager_id = M.emp_id`.'
      },
      {
        question: 'What happens when you perform a NATURAL JOIN on two tables that have no columns with matching names?',
        options: [
          'It degenerates into a Cartesian Product (CROSS JOIN)',
          'It throws a syntax error',
          'It returns 0 rows',
          'It deletes the table schemas'
        ],
        answerIdx: 0,
        explanation: 'A NATURAL JOIN matches all attributes with identical column names; if no common attribute exists, it behaves as a Cartesian Product.'
      }
    ],
    'sql-lab': [
      {
        question: 'Which of the following SQL statements belongs strictly to the Data Definition Language (DDL) category?',
        options: [
          'ALTER TABLE Employees ADD COLUMN department VARCHAR(50);',
          'SELECT * FROM Employees WHERE salary > 50000;',
          'UPDATE Employees SET salary = 60000 WHERE emp_id = 101;',
          'INSERT INTO Employees VALUES (102, "Alice", 75000);'
        ],
        answerIdx: 0,
        explanation: 'DDL commands (CREATE, ALTER, DROP, TRUNCATE) define and modify database schema structures, whereas SELECT, UPDATE, and INSERT are DML.'
      },
      {
        question: 'What is the crucial operational difference between the WHERE clause and the HAVING clause in SQL?',
        options: [
          'WHERE filters individual rows before grouping; HAVING filters aggregated groups after GROUP BY is applied',
          'WHERE only works with string columns; HAVING only works with integers',
          'HAVING executes before WHERE in the SQL logical query processing pipeline',
          'WHERE is DDL, whereas HAVING is DML'
        ],
        answerIdx: 0,
        explanation: 'WHERE filters raw table rows prior to aggregation; HAVING evaluates filter conditions against grouped aggregate results (e.g., `HAVING COUNT(*) > 5`).'
      },
      {
        question: 'What is the effect of executing `TRUNCATE TABLE Orders;` versus `DELETE FROM Orders;`?',
        options: [
          'TRUNCATE is a DDL operation that deallocates data pages quickly with minimal logging; DELETE is a row-by-row logged DML operation',
          'TRUNCATE deletes the table schema definition completely from the database catalog',
          'DELETE is much faster than TRUNCATE for large multi-million row tables',
          'TRUNCATE preserves all foreign key dependencies without validation'
        ],
        answerIdx: 0,
        explanation: 'TRUNCATE deallocates data pages quickly with minimal transaction log overhead, while DELETE removes rows one-by-one and records individual transaction logs.'
      },
      {
        question: 'Which SQL aggregate function computes the total number of non-NULL values in a specific column?',
        options: [
          'COUNT(column_name)',
          'SUM(column_name)',
          'AVG(column_name)',
          'TOTAL(column_name)'
        ],
        answerIdx: 0,
        explanation: '`COUNT(column_name)` tallies all non-NULL values in the specified column, whereas `COUNT(*)` counts all rows regardless of NULL values.'
      },
      {
        question: 'What is a "Correlated Subquery" in SQL?',
        options: [
          'A subquery that references columns from the outer query and must be re-evaluated once for each row processed by the outer query',
          'A subquery that only runs once and caches its scalar result',
          'A subquery that modifies physical hardware configurations',
          'A subquery that executes inside a CREATE TABLE statement'
        ],
        answerIdx: 0,
        explanation: 'A correlated subquery depends on values passed from the outer query for each candidate row, re-executing for every row evaluated by the outer query.'
      }
    ],
    'normalization': [
      {
        question: 'What is the primary requirement for a relation to be in First Normal Form (1NF)?',
        options: [
          'All attribute domain values must be atomic (no multi-valued attributes or repeating groups)',
          'Every non-prime attribute must be functionally dependent on the entire primary key',
          'There must be no transitive dependencies',
          'Every functional dependency determinant must be a candidate key'
        ],
        answerIdx: 0,
        explanation: '1NF mandates atomic attribute values, banning repeating groups, comma-separated lists, and composite arrays within a single cell.'
      },
      {
        question: 'A relation in 1NF has a composite primary key {Student_ID, Course_ID}. If Grade depends on {Student_ID, Course_ID} but Student_Name depends only on {Student_ID}, what normal form is violated?',
        options: [
          'Second Normal Form (2NF) due to Partial Dependency',
          'First Normal Form (1NF) due to Non-Atomic domains',
          'Boyce-Codd Normal Form (BCNF)',
          'Fourth Normal Form (4NF)'
        ],
        answerIdx: 0,
        explanation: '2NF forbids Partial Dependencies where a non-prime attribute depends on a proper subset of a composite candidate key.'
      },
      {
        question: 'In Third Normal Form (3NF), what type of functional dependency is strictly prohibited for non-prime attributes?',
        options: [
          'Transitive Dependency (non-prime attribute determining another non-prime attribute)',
          'Full Functional Dependency',
          'Trivial Functional Dependency',
          'Multi-valued Dependency'
        ],
        answerIdx: 0,
        explanation: '3NF eliminates Transitive Dependencies ($X \\to Y$ where $Y \\to Z$, causing non-key $X$ to determine non-key $Z$). In 3NF, for any $X \\to Y$, $X$ must be a superkey or $Y$ is a prime attribute.'
      },
      {
        question: 'How does Boyce-Codd Normal Form (BCNF) differ from standard 3NF?',
        options: [
          'For EVERY non-trivial functional dependency X -> Y, X must strictly be a Superkey (no exception for prime attributes on the RHS)',
          'BCNF allows partial dependencies on composite keys',
          'BCNF permits multi-valued attributes in cells',
          'BCNF is weaker than 2NF'
        ],
        answerIdx: 0,
        explanation: 'BCNF removes the 3NF loophole allowing $Y$ to be a prime attribute; in BCNF, the left-hand side ($X$) must ALWAYS be a superkey for every dependency $X \\to Y$.'
      },
      {
        question: 'What two properties are essential for a good relational database decomposition during normalization?',
        options: [
          'Lossless Join Decomposition and Dependency Preservation',
          'High Data Redundancy and Rapid Index Duplication',
          'Unconstrained Foreign Keys and Nullable Primary Keys',
          'Denormalized Monolithic Storage and File Pointers'
        ],
        answerIdx: 0,
        explanation: 'A sound normalization decomposition must be Lossless (natural join recreates the exact original relation without phantom tuples) and preserve functional dependencies.'
      }
    ],
    'transactions': [
      {
        question: 'Which ACID property guarantees that if a system crashes during a transaction, all incomplete changes are rolled back completely ("all or nothing")?',
        options: [
          'Atomicity',
          'Consistency',
          'Isolation',
          'Durability'
        ],
        answerIdx: 0,
        explanation: 'Atomicity ensures that either all operations of a transaction execute to completion or none of them take effect, using undo transaction logs.'
      },
      {
        question: 'What is a "Dirty Read" concurrency anomaly in database transaction systems?',
        options: [
          'A transaction reads uncommitted data modified by another concurrent transaction that subsequently aborts/rolls back',
          'A transaction reads from damaged physical disk sectors',
          'A transaction reads identical values repeatedly without error',
          'A transaction reading data from a secondary backup server'
        ],
        answerIdx: 0,
        explanation: 'A Dirty Read occurs when Transaction 1 reads data modified by Transaction 2 before Transaction 2 commits. If Transaction 2 rolls back, Transaction 1 has consumed invalid data.'
      },
      {
        question: 'What does the "Durability" property of ACID guarantee?',
        options: [
          'Once a transaction successfully commits, its changes survive permanently in non-volatile storage even in case of power failure or crash',
          'Database transactions never lock tables for more than 1 second',
          'Hard drives will never physically wear out',
          'Queries execute in constant O(1) time'
        ],
        answerIdx: 0,
        explanation: 'Durability ensures committed transaction changes are permanently written to non-volatile storage (WAL / disk) and survive server reboots.'
      },
      {
        question: 'What is the core rule of the Two-Phase Locking (2PL) protocol?',
        options: [
          'A transaction cannot acquire any new locks once it has released its first lock (Growing Phase followed by Shrinking Phase)',
          'Transactions must lock all tables in alphabetical order',
          'Locks must be renewed every two minutes',
          'Two transactions can hold exclusive write locks on the same record simultaneously'
        ],
        answerIdx: 0,
        explanation: '2PL enforces a Growing Phase (only acquiring locks) and a Shrinking Phase (only releasing locks), guaranteeing conflict serializable execution schedules.'
      },
      {
        question: 'Which data structure is used by database engines to detect Deadlocks among concurrent transactions?',
        options: [
          'Wait-For Graph (WFG) — cycle detection in directed dependency graphs',
          'Binary Search Tree',
          'Hash Table of IP addresses',
          'LIFO Stack Register'
        ],
        answerIdx: 0,
        explanation: 'A Wait-For Graph (WFG) tracks which transaction is waiting for a lock held by another transaction; a cycle in the WFG signals a deadlock.'
      }
    ],
    'indexing': [
      {
        question: 'Why are B+ Trees favored over standard B-Trees and Binary Search Trees for database table indexing on disk storage?',
        options: [
          'All data records reside in linked leaf nodes, enabling fast sequential range queries, while shallow high-fanout trees minimize disk I/O operations',
          'B+ Trees require zero memory and no disk storage space',
          'B+ Trees only work with integer values',
          'Binary Search Trees are much too flat for disk block paging'
        ],
        answerIdx: 0,
        explanation: 'B+ Trees have high fan-out (reducing tree height to 3-4 levels), keep all data pointers in leaves, and connect leaf nodes in a doubly-linked list for ultra-fast range scans.'
      },
      {
        question: 'How many Clustered Indexes can exist on a single relational database table?',
        options: [
          'Exactly 1 (because physical table rows on disk can only be sorted in one physical order)',
          'As many as there are columns in the table',
          'Unlimited, up to 1,024 indexes',
          '0, clustered indexes only exist on memory variables'
        ],
        answerIdx: 0,
        explanation: 'A Clustered Index dictates the actual physical ordering of data pages on disk, meaning a table can have only one clustered index (usually the Primary Key).'
      },
      {
        question: 'What is a "Secondary (Non-Clustered) Index"?',
        options: [
          'An index structure separate from data rows that contains indexed column values paired with pointers (RowIDs / clustering keys) to table rows',
          'A duplicate backup copy of the entire table on a USB drive',
          'An index that only runs when the primary index crashes',
          'An index created exclusively on temporary tables'
        ],
        answerIdx: 0,
        explanation: 'A secondary index is an auxiliary search tree whose leaf nodes store row pointers or primary key lookups back to the actual table data rows.'
      },
      {
        question: 'What is a drawback of creating too many indexes on a write-heavy database table?',
        options: [
          'INSERT, UPDATE, and DELETE operations become slower because every data modification must update multiple index trees',
          'The database engine deletes all primary keys automatically',
          'SELECT queries become completely disabled',
          'Foreign key constraints stop functioning'
        ],
        answerIdx: 0,
        explanation: 'While indexes speed up SELECT lookups, every INSERT, UPDATE, and DELETE must update every affected index structure, incurring significant I/O overhead.'
      },
      {
        question: 'What is "Index Selectivity" and why is it crucial for query optimization?',
        options: [
          'The ratio of distinct values to total rows; high selectivity (near 1.0) means an index is highly effective at filtering specific rows',
          'The number of characters in the index column name',
          'The physical color of the hard disk drive casing',
          'The speed of the network interface card'
        ],
        answerIdx: 0,
        explanation: 'High selectivity columns (e.g., email, UUID, Social Security Number) have unique values, making index tree traversals much faster than full table scans.'
      }
    ]
  }
};
