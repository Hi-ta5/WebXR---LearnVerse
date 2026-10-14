// Step-by-step Audio Narration Scripts for LearnVerse 3D WebXR Scenes
export const SCENE_NARRATION_SCRIPTS = {
  "computer-networks": {
    "osi-model": {
      "title": "OSI 7 Layers Lab",
      "badge": "Encapsulation & Decapsulation Across 7 Layers",
      "overview": "Welcome to the OSI 7-Layer 3D Lab. You see Alice's PC on the left, Bob's PC on the right, and a cable between them. Data travels down Alice's tower, races across the cable as bits, and climbs up Bob's tower. Think of it like sending a letter inside nested envelopes!",
      "steps": [
        {
          "label": "Alice sends a message",
          "title": "Alice Sends a Message",
          "text": "Step 1: Alice sends a message. Alice types 'Hello Bob!' in an application. At Layer 7, it is plain data. Think of it like writing a letter."
        },
        {
          "label": "Layers 6 and 5",
          "title": "Layers 6 and 5",
          "text": "Step 2: Layers 6 and 5. Layer 6 formats and encrypts the data. Layer 5 opens a session with Bob. It is still treated as data. Think of it like checking the letter and booking a phone call."
        },
        {
          "label": "Layer 4: add TCP",
          "title": "Layer 4: Add TCP Header",
          "text": "Step 3: Layer 4 adds a TCP header with port numbers, like port 51000 to port 80. Data plus this header is a SEGMENT. Think of it like putting the letter in an envelope with an apartment number."
        },
        {
          "label": "Layer 3: add IP",
          "title": "Layer 3: Add IP Header",
          "text": "Step 4: Layer 3 adds an IP header with sender and receiver IP addresses. Now it is a PACKET. Think of it like writing the street address on a bigger envelope."
        },
        {
          "label": "Layer 2: add frame",
          "title": "Layer 2: Add Frame",
          "text": "Step 5: Layer 2 adds MAC addresses and an error check trailer called FCS. Now it is a FRAME. Think of it like putting the parcel in a delivery van."
        },
        {
          "label": "Layer 1: bits on wire",
          "title": "Layer 1: Bits on the Wire",
          "text": "Step 6: Layer 1 turns the frame into raw bits. Watch the packet cross the cable as electric pulses or light flashes! Think of it like the van driving along the road."
        },
        {
          "label": "Bob unwraps it",
          "title": "Bob Unwraps It",
          "text": "Step 7: Bob unwraps it. As the message climbs Bob's tower, each layer reads its own header, removes it, and passes the inner data up: Frame to Packet, Packet to Segment, and Segment to Data. Think of it like opening the envelopes one by one."
        },
        {
          "label": "Bob reads it",
          "title": "Bob Reads It",
          "text": "Step 8: Bob reads it. Bob sees 'Hello Bob!'. Each layer only talks to the same layer on the other computer using headers as notes. Think of it like every envelope opened, and the letter is finally read!"
        }
      ],
      "interactionGuide": "Click Next step or Run all to watch the message travel from Alice to Bob. Click any colored layer box on either computer to inspect its function, hardware device, and data unit."
    },
    "physical-layer": {
      "title": "Line Encoding and Modulation Lab",
      "badge": "Digital Waveforms & Carrier Modulation",
      "overview": "Welcome to the Line Encoding and Modulation 3D Lab. Computers send 1s and 0s, and this lab turns bits into physical signals that travel on a wire or through the air. Think of it like turning words into Morse code!",
      "steps": [
        {
          "label": "Bits to send",
          "title": "Bits to Send",
          "text": "Step 1: Bits to send. These 8 bits are the data. The wire only understands voltage, light, or radio waves. Think of it like turning words into Morse code."
        },
        {
          "label": "NRZ-L: high or low",
          "title": "NRZ-L: High or Low",
          "text": "Step 2: NRZ-L. A binary 1 is high voltage and a 0 is low voltage. It is simple, but long runs of equal bits produce flat lines. Think of it like a light switch: on for 1, off for 0."
        },
        {
          "label": "NRZ-I: flip on 1",
          "title": "NRZ-I: Flip on 1",
          "text": "Step 3: NRZ-I. The voltage flips on every 1 and stays flat for a 0. These flips help the receiver stay in step. Think of it like flipping a switch each time you hear a 1."
        },
        {
          "label": "Manchester",
          "title": "Manchester Encoding",
          "text": "Step 4: Manchester. Every bit changes in the middle: rising for 1, falling for 0. The clock is built right into the signal! Think of it like a metronome hidden inside the signal."
        },
        {
          "label": "AMI: three levels",
          "title": "AMI: Three Levels",
          "text": "Step 5: AMI. A 0 is zero volts, while 1s alternate between positive and negative voltages. This keeps average DC voltage at zero. Think of it like taking turns: up, down, up, down."
        },
        {
          "label": "ASK: loud or quiet",
          "title": "ASK: Loud or Quiet",
          "text": "Step 6: ASK. Modulation puts bits on a carrier wave. Amplitude Shift Keying changes wave height: a strong wave is 1, a weak wave is 0. Think of it like whispering or shouting."
        },
        {
          "label": "FSK: slow or fast",
          "title": "FSK: Slow or Fast",
          "text": "Step 7: FSK. Frequency Shift Keying changes the wave speed: a fast wave means 1 and a slow wave means 0. Think of it like singing a high or low note."
        },
        {
          "label": "PSK: flip the wave",
          "title": "PSK: Flip the Wave",
          "text": "Step 8: PSK. Phase Shift Keying flips the wave upside down by 180 degrees for a 0. Wi-Fi and mobile phones use this! Think of it like turning a wave upside down."
        },
        {
          "label": "Send over a cable",
          "title": "Send Over a Cable",
          "text": "Step 9: Send over a cable. Watch the signal sweep across the wire as electricity, light, or radio. Noise can distort it on the way. Think of it like a message passing along a rope."
        }
      ],
      "interactionGuide": "Click Next step or Run all to explore digital encodings and carrier modulations. Click New bits to test different bit patterns, or click Send to animate the signal across the wire."
    },
    "network-topologies": {
      "title": "Network Topologies Lab",
      "badge": "Bus, Star, Ring & Mesh Architecture",
      "overview": "Welcome to the Network Topologies 3D Lab. A topology is the shape of a network: how the computers are connected. Watch PC1 send a packet to PC4 across different layouts. Think of it like different road layouts for a city!",
      "steps": [
        {
          "label": "Bus: shared cable",
          "title": "Bus: One Shared Cable",
          "text": "Step 1: Bus shared cable. All PCs share one cable. PC1 sends to PC4 along it. It is cheap and simple, but only one PC can talk at a time. Think of it like one hallway with many doors."
        },
        {
          "label": "Bus cable breaks",
          "title": "Bus: The Cable Breaks",
          "text": "Step 2: Bus cable breaks. The cable is cut between PC3 and PC4. The bus splits in two, so PC1 can no longer reach PC4. Think of it like a blocked hallway."
        },
        {
          "label": "Star: central hub",
          "title": "Star: Central Hub",
          "text": "Step 3: Star central hub. Every PC connects to a hub in the middle. PC1 sends via the hub to PC4. One bad cable only hurts one PC. Think of it like an airport hub where flights connect in the middle."
        },
        {
          "label": "Star: hub fails",
          "title": "Star: The Hub Fails",
          "text": "Step 4: Star hub fails. The hub is down, so no PC can reach any other computer. The hub is a single point of failure. Think of it like closing the airport."
        },
        {
          "label": "Ring: pass it around",
          "title": "Ring: Pass It Around",
          "text": "Step 5: Ring pass it around. PCs form a circle. Data travels one way around the ring hop by hop: PC1, PC2, PC3, PC4. Think of it like passing a note around a circle."
        },
        {
          "label": "Ring: one break",
          "title": "Ring: One Break",
          "text": "Step 6: Ring one break. One cable in the one-way ring breaks and the token cannot pass. A dual ring fixes this by looping back. Think of it like a broken chain of people."
        },
        {
          "label": "Mesh: many paths",
          "title": "Mesh: Many Paths",
          "text": "Step 7: Mesh many paths. Every PC links to every other PC. PC1 reaches PC4 directly in 1 hop. It is very reliable, but costly. Think of it like a city grid with many roads."
        },
        {
          "label": "Mesh: reroute",
          "title": "Mesh: Reroute",
          "text": "Step 8: Mesh reroute. The direct link is cut, but the packet finds another path and still arrives! Meshes heal themselves. Think of it like taking a detour around a closed road."
        },
        {
          "label": "Compare them",
          "title": "Compare Them",
          "text": "Step 9: Compare them. Bus is cheap but easy to break. Star is easy to manage but has a hub risk. Ring is fair but one break hurts. Mesh is reliable but costly. Think of it like choosing a road network for a city."
        }
      ],
      "interactionGuide": "Click Next step to step through topologies, or click the Topology button to switch layouts. Click any cable or PC in 3D to break or repair it, then click Send to test packet delivery!"
    },
    "tcp-udp": {
      "title": "TCP vs UDP Protocols Lab",
      "badge": "Connection Handshakes, ACKs & Ports",
      "overview": "Welcome to the TCP vs UDP 3D Lab. Both protocols carry data between applications. TCP is careful and reliable, while UDP is fast but makes no promises. Think of it like registered mail versus a postcard!",
      "steps": [
        {
          "label": "Two ways to send",
          "title": "Two Ways to Send",
          "text": "Step 1: Two ways to send. The top lane is TCP, and the bottom lane is UDP. Both send data from client to server. Watch how differently they behave. Think of it like a tracked parcel versus a postcard."
        },
        {
          "label": "TCP: 3-way handshake",
          "title": "TCP: 3-Way Handshake",
          "text": "Step 2: TCP 3-way handshake. TCP first shakes hands: SYN (shall we talk?), SYN+ACK (yes!), ACK (great). Now both sides are ESTABLISHED. Think of it like saying hello before talking."
        },
        {
          "label": "TCP: data and ACKs",
          "title": "TCP: Data and ACKs",
          "text": "Step 3: TCP data and ACKs. TCP sends numbered segments: 1, 2, 3. The server replies with an ACK receipt for each one it receives. Think of it like sending parcels and getting a receipt for each."
        },
        {
          "label": "TCP: lost packet fixed",
          "title": "TCP: Lost Packet Fixed",
          "text": "Step 4: TCP lost packet fixed. Segment 4 is lost! No ACK arrives, so the sender times out and sends segment 4 again. Nothing is missed! Think of it like a parcel is lost, so you post it again."
        },
        {
          "label": "UDP: just send",
          "title": "UDP: Just Send",
          "text": "Step 5: UDP just send. UDP has no handshake and no ACKs. Datagram 2 is lost and nobody notices or resends it! It is fast but unreliable. Think of it like dropping postcards into a post box."
        },
        {
          "label": "Ports: the right app",
          "title": "Ports: The Right App",
          "text": "Step 6: Ports the right app. The IP address finds the computer, but the port number delivers them to the right app: port 80 for HTTP, port 443 for HTTPS, port 53 for DNS, port 25 for SMTP. Think of it like apartment numbers inside a building."
        },
        {
          "label": "When to use which",
          "title": "When to Use Which",
          "text": "Step 7: When to use which. Use TCP for web pages, email, and file downloads where every byte must arrive. Use UDP for video calls, games, and DNS where speed matters more. Think of it like registered mail versus a postcard or phone call."
        }
      ],
      "interactionGuide": "Click Next step to watch connection handshakes, ACK receipts, and lost packet recovery. Click Replay to rerun any step."
    },
    "routing": {
      "title": "Routing Algorithms Lab",
      "badge": "Dijkstra Shortest Paths & Distance Vector",
      "overview": "Welcome to the Routing Algorithms 3D Lab. Routers must pick the best path for each packet. The numbers on the links are their costs, like delay. Think of it like a road map: finding the quickest route!",
      "steps": [
        {
          "label": "The network map",
          "title": "The Network Map",
          "text": "Step 1: The network map. Six routers (A to F) are joined by links. The number on a link is its cost. The goal is to send a packet from A to F cheaply. Think of it like a road map with travel times."
        },
        {
          "label": "Dijkstra explores",
          "title": "Dijkstra Explores",
          "text": "Step 2: Dijkstra explores. Start at A with cost 0. Repeatedly visit the closest unvisited router and update its neighbours. Think of it like ripples spreading out from A."
        },
        {
          "label": "The shortest path",
          "title": "The Shortest Path",
          "text": "Step 3: The shortest path. The shortest path from A to F is A > B > D > F with total cost 9. Watch the packet follow the glowing gold path! Think of it like following the fastest road on the map."
        },
        {
          "label": "A link fails",
          "title": "A Link Fails",
          "text": "Step 4: A link fails. Link B-D fails and turns red. Routers run Dijkstra again and find a new detour path. Routing adapts by itself! Think of it like taking a detour around a closed road."
        },
        {
          "label": "Distance vector",
          "title": "Distance Vector (RIP)",
          "text": "Step 5: Distance vector. In RIP, each router shares what it knows with neighbours. After a few rounds, router A knows the distance to every node. Think of it like rumours spreading until everyone knows."
        },
        {
          "label": "Autonomous systems",
          "title": "Autonomous Systems",
          "text": "Step 6: Autonomous systems. The Internet is split into Autonomous Systems. Inside an AS, routers use OSPF or RIP. Between ASes, they use BGP. Think of it like countries with their own roads and treaties."
        }
      ],
      "interactionGuide": "Click Next step to trace Dijkstra's search and distance vector rounds. Click any link in 3D to cut or repair it, click Send packet to watch routing in action, or click New costs to test different link costs."
    },
    "congestion-control": {
      "title": "Congestion Control Lab",
      "badge": "Traffic Shaping, Choke Packets & AIMD",
      "overview": "Welcome to the Congestion Control 3D Lab. When too much data enters a network, queues overflow and packets are lost. Congestion control keeps traffic flowing smoothly. Think of it like a traffic jam and the tools that prevent it!",
      "steps": [
        {
          "label": "The problem: a jam",
          "title": "The Problem: A Traffic Jam",
          "text": "Step 1: The problem: a jam. The sender sends 4 packets per tick, but the router passes only 2. The queue fills up and extra packets are dropped in red. Think of it like a traffic jam at a toll booth."
        },
        {
          "label": "Leaky bucket",
          "title": "Leaky Bucket",
          "text": "Step 2: Leaky bucket. Bursts pour in, but packets leave at one steady rate. If the bucket is full, extra packets spill and are dropped. Think of it like a bucket with a small hole."
        },
        {
          "label": "Token bucket",
          "title": "Token Bucket",
          "text": "Step 3: Token bucket. One token arrives each tick. A packet needs a token to leave, so saved tokens allow short bursts of traffic! Think of it like a bag of tickets you can spend when you like."
        },
        {
          "label": "Choke packets",
          "title": "Choke Packets",
          "text": "Step 4: Choke packets. When the queue is dangerously full, the router sends a red choke packet back. The sender halves its rate, preventing further drops! Think of it like a traffic officer waving cars to slow down."
        },
        {
          "label": "TCP window (AIMD)",
          "title": "TCP Window (AIMD)",
          "text": "Step 5: TCP window AIMD. TCP grows its window fast in slow start, adds +1 per round trip in congestion avoidance, and halves on loss. The result is a sawtooth wave! Think of it like filling a pool but stopping before it overflows."
        }
      ],
      "interactionGuide": "Click Next step or Run all to compare Leaky Bucket, Token Bucket, Choke packets, and AIMD. Click Burst! to inject packet bursts, or click Replay to run the simulation again."
    }
  },
  "operating-systems": {
    "user-kernel-mode": {
      "title": "User Mode & Kernel Mode Dual-Mode Lab",
      "badge": "Privilege Levels & System Calls",
      "overview": "Welcome to the Dual-Mode CPU Simulator. In this scene, you see user space applications on the left, the golden System Call Gate in the center, and the privileged OS Kernel and hardware disk on the right.",
      "steps": [
        {
          "label": "User Mode",
          "title": "Restricted User Space Execution",
          "text": "Notice your application running in User Mode (CPU mode bit 1). When an app tries to directly access the raw disk cylinder without kernel permission, the CPU instantly triggers an Access Denied block."
        },
        {
          "label": "System Call Gate",
          "title": "System Calls & Mode Switch Trap",
          "text": "To read a file properly, the app issues a system call like read(). A hardware trap switches the CPU mode bit to Kernel Mode (bit 0), opening the golden system call gate."
        },
        {
          "label": "Kernel Privileges",
          "title": "Privileged I/O & Safe Return",
          "text": "The trusted kernel verifies permissions, reads the data from the disk cylinder, closes the gate, and safely returns the data back to user mode."
        }
      ],
      "interactionGuide": "Click 'Try cheat' to watch direct hardware access get blocked, or click 'Next step' / 'Run all' to follow the complete system call journey."
    },
    "process-states": {
      "title": "Process States & Lifecycle Simulator",
      "badge": "5-State Transitions & Queuing",
      "overview": "Welcome to the Process States 3D Lab. Here you observe process P1 moving across the five classic states: New, Ready, Running, Waiting, and Terminated.",
      "steps": [
        {
          "label": "New to Ready",
          "title": "Process Creation & Admission",
          "text": "A newly started process is admitted into the Ready queue where it waits alongside other processes (P2, P3) for CPU allocation."
        },
        {
          "label": "Running & Timeout",
          "title": "CPU Dispatch & Timer Preemption",
          "text": "The scheduler dispatches P1 to the Running state on the CPU. When a timer interrupt occurs, P1 yields and returns to the Ready queue."
        },
        {
          "label": "I/O & Exit",
          "title": "I/O Blocking, Resumption & Termination",
          "text": "When P1 requests file or network I/O, it moves to the Waiting state. When I/O finishes, it rejoins Ready, gets dispatched again, and finally Exits to Terminated."
        }
      ],
      "interactionGuide": "Click Next step to watch P1 progress through its full lifecycle, or click individual arrow paths directly to test valid state transitions."
    },
    "process-management": {
      "title": "Process States & Lifecycle Simulator",
      "badge": "5-State Transitions & Queuing",
      "overview": "Welcome to the Process States 3D Lab. Here you observe process P1 moving across the five classic states: New, Ready, Running, Waiting, and Terminated.",
      "steps": [
        {
          "label": "New to Ready",
          "title": "Process Creation & Admission",
          "text": "A newly started process is admitted into the Ready queue where it waits alongside other processes (P2, P3) for CPU allocation."
        },
        {
          "label": "Running & Timeout",
          "title": "CPU Dispatch & Timer Preemption",
          "text": "The scheduler dispatches P1 to the Running state on the CPU. When a timer interrupt occurs, P1 yields and returns to the Ready queue."
        },
        {
          "label": "I/O & Exit",
          "title": "I/O Blocking, Resumption & Termination",
          "text": "When P1 requests file or network I/O, it moves to the Waiting state. When I/O finishes, it rejoins Ready, gets dispatched again, and finally Exits to Terminated."
        }
      ],
      "interactionGuide": "Click Next step to watch P1 progress through its full lifecycle, or click individual arrow paths directly to test valid state transitions."
    },
    "cpu-scheduling": {
      "title": "CPU Scheduling Algorithm Comparator",
      "badge": "FCFS, SJF & Round Robin Gantt Charts",
      "overview": "Welcome to the CPU Scheduling Simulator. Four processes (P1 through P4) with different arrival and burst times compete for the single CPU processor core.",
      "steps": [
        {
          "label": "Process Queue",
          "title": "Arrivals & CPU Burst Times",
          "text": "Inspect the process cards: P1 needs 6 time units, P2 needs 3, P3 needs 1, and P4 needs 2. Notice their staggered arrival times at 0, 1, 2, and 3."
        },
        {
          "label": "FCFS Execution",
          "title": "Arrival Order & Convoy Effect",
          "text": "In First-Come First-Served, processes run strictly in arrival order. Because P1 has a long burst of 6, P2 and P3 must wait, leading to an average wait of 5.75 units."
        },
        {
          "label": "SJF & Round Robin",
          "title": "Shortest Job vs Quantum Turns",
          "text": "Shortest Job First picks the smallest remaining job, dropping average wait to 3.25. Round Robin gives each process a fair 2-unit quantum, achieving 4.75 average wait."
        }
      ],
      "interactionGuide": "Click Next step to trace each scheduling algorithm step-by-step, or click 'Switch alg' to compare Gantt charts and average waiting times."
    },
    "critical-section-mutex": {
      "title": "Critical Section & Mutex Synchronization Lab",
      "badge": "Race Conditions & Lost Updates",
      "overview": "Welcome to the Concurrency Synchronization Lab. Threads A and B are attempting to increment a shared counter starting at 5 simultaneously.",
      "steps": [
        {
          "label": "Race Condition",
          "title": "Unsynchronized Interleaving & Lost Updates",
          "text": "Without a lock, both threads enter the critical section concurrently. Both read 5, both calculate 6 in local registers, and both write 6 back—losing one update completely!"
        },
        {
          "label": "Mutex Lock",
          "title": "Mutual Exclusion Lock Key",
          "text": "A mutex is a mutual exclusion key. Only the thread holding the key is permitted into the critical section; all other contending threads must wait outside."
        },
        {
          "label": "Serialized Access",
          "title": "Orderly Turns & Accurate Result",
          "text": "With the lock turned ON, Thread A takes the key and increments 5 to 6. Thread B waits patiently until A releases the key, then increments 6 to 7 for the correct final answer."
        }
      ],
      "interactionGuide": "Click 'Run both' with Lock OFF to observe the race condition in red, then toggle 'Lock On/Off' and click 'Run both' to see synchronized execution in green."
    },
    "threads": {
      "title": "Critical Section & Mutex Synchronization Lab",
      "badge": "Race Conditions & Lost Updates",
      "overview": "Welcome to the Concurrency Synchronization Lab. Threads A and B are attempting to increment a shared counter starting at 5 simultaneously.",
      "steps": [
        {
          "label": "Race Condition",
          "title": "Unsynchronized Interleaving & Lost Updates",
          "text": "Without a lock, both threads enter the critical section concurrently. Both read 5, both calculate 6 in local registers, and both write 6 back—losing one update completely!"
        },
        {
          "label": "Mutex Lock",
          "title": "Mutual Exclusion Lock Key",
          "text": "A mutex is a mutual exclusion key. Only the thread holding the key is permitted into the critical section; all other contending threads must wait outside."
        },
        {
          "label": "Serialized Access",
          "title": "Orderly Turns & Accurate Result",
          "text": "With the lock turned ON, Thread A takes the key and increments 5 to 6. Thread B waits patiently until A releases the key, then increments 6 to 7 for the correct final answer."
        }
      ],
      "interactionGuide": "Click 'Run both' with Lock OFF to observe the race condition in red, then toggle 'Lock On/Off' and click 'Run both' to see synchronized execution in green."
    },
    "deadlocks": {
      "title": "Deadlock Resource Allocation Graph Lab",
      "badge": "Coffman Conditions & Circular Wait",
      "overview": "Welcome to the Deadlock 3D Laboratory. Processes P1 and P2 compete for shared hardware resources R1 (printer) and R2 (scanner).",
      "steps": [
        {
          "label": "Hold & Request",
          "title": "Resource Allocation & Request Edges",
          "text": "P1 acquires and holds resource R1 (green arrow). P2 acquires and holds resource R2 (green arrow). Next, P1 requests R2 while P2 requests R1 (orange arrows)."
        },
        {
          "label": "Circular Deadlock",
          "title": "Circular Wait Cycle & Freeze",
          "text": "A closed circular loop forms where each process holds one resource while waiting on the other. All 4 Coffman conditions are satisfied, and execution freezes in DEADLOCK."
        },
        {
          "label": "Prevention & Fixes",
          "title": "Resource Ordering & Process Recovery",
          "text": "Prevention breaks circular wait by enforcing resource ordering (always acquire R1 before R2). Recovery resolves deadlocks by terminating a process or preempting resources."
        }
      ],
      "interactionGuide": "Click Next step to watch the circular deadlock cycle form in red, and see how resource ordering and recovery allow processes to finish successfully."
    },
    "paging-address-translation": {
      "title": "Paging & Memory Address Translation Lab",
      "badge": "Pages, Frames & Page Table Lookups",
      "overview": "Welcome to the Paging Simulator. Here you see how the operating system cuts programs into equal logical pages and physical RAM into equal frames.",
      "steps": [
        {
          "label": "Pages & Frames",
          "title": "Logical Pages and Physical Frames",
          "text": "The program is split into 4 pages (Page 0 to 3). Physical memory contains 8 equal frames (F0 to F7), each sized to 8 words."
        },
        {
          "label": "Page Table",
          "title": "Non-Contiguous Memory Mapping",
          "text": "The OS maintains a Page Table mapping each page to its current frame. Notice that pages can be scattered anywhere in physical RAM without needing to be contiguous."
        },
        {
          "label": "MMU Translation",
          "title": "Logical to Physical Address Translation",
          "text": "For logical address 21 (Page 2, Offset 5), the MMU looks up Page 2 in the table (Frame 7) and calculates Physical Address = 7 * 8 + 5 = 61."
        }
      ],
      "interactionGuide": "Click Next step to step through address translation, or click 'Next address' to test translating different logical memory addresses."
    },
    "memory-management": {
      "title": "Paging & Memory Address Translation Lab",
      "badge": "Pages, Frames & Page Table Lookups",
      "overview": "Welcome to the Paging Simulator. Here you see how the operating system cuts programs into equal logical pages and physical RAM into equal frames.",
      "steps": [
        {
          "label": "Pages & Frames",
          "title": "Logical Pages and Physical Frames",
          "text": "The program is split into 4 pages (Page 0 to 3). Physical memory contains 8 equal frames (F0 to F7), each sized to 8 words."
        },
        {
          "label": "Page Table",
          "title": "Non-Contiguous Memory Mapping",
          "text": "The OS maintains a Page Table mapping each page to its current frame. Notice that pages can be scattered anywhere in physical RAM without needing to be contiguous."
        },
        {
          "label": "MMU Translation",
          "title": "Logical to Physical Address Translation",
          "text": "For logical address 21 (Page 2, Offset 5), the MMU looks up Page 2 in the table (Frame 7) and calculates Physical Address = 7 * 8 + 5 = 61."
        }
      ],
      "interactionGuide": "Click Next step to step through address translation, or click 'Next address' to test translating different logical memory addresses."
    },
    "page-replacement": {
      "title": "Page Replacement & Virtual Memory Lab",
      "badge": "FIFO vs LRU Page Eviction",
      "overview": "Welcome to the Page Replacement Simulator. Memory has only 3 physical frames, but the program references a stream of 12 pages in sequence.",
      "steps": [
        {
          "label": "Faults vs Hits",
          "title": "Page Hits and Page Fault Traps",
          "text": "When a referenced page is already in one of the 3 frames, a Page Hit occurs (shown in green). If the page is missing, a Page Fault occurs (shown in red)."
        },
        {
          "label": "FIFO Eviction",
          "title": "Oldest Arrival Eviction Policy",
          "text": "First-In First-Out evicts the page that has been in memory the longest. In this reference string, FIFO generates 9 page faults."
        },
        {
          "label": "LRU Eviction",
          "title": "Least Recently Used Locality Policy",
          "text": "Least Recently Used replaces the page that has remained untouched for the longest duration, taking advantage of temporal locality to achieve fewer page faults."
        }
      ],
      "interactionGuide": "Click Next step or Run all to trace FIFO and LRU page streams, and click Replay to re-watch page hit and fault animations."
    },
    "disk-scheduling": {
      "title": "Disk Scheduling Algorithm Lab",
      "badge": "FCFS, SSTF & SCAN Elevator",
      "overview": "Welcome to the Disk Scheduling Laboratory. A mechanical hard disk read/write head starting at track 50 must service 8 queued track requests across cylinders 0 to 199.",
      "steps": [
        {
          "label": "Track Requests",
          "title": "Initial Position & Cylinders",
          "text": "Inspect the requested cylinders: 98, 183, 37, 122, 14, 124, 65, 67. The head starts at cylinder 50."
        },
        {
          "label": "FCFS Zigzag",
          "title": "Arrival Order & High Seek Distance",
          "text": "First-Come First-Served visits tracks in exact arrival order, causing the disk arm to zigzag back and forth across 640 total cylinders of movement."
        },
        {
          "label": "SSTF & SCAN",
          "title": "Greedy Shortest Seek vs Smooth Elevator Sweep",
          "text": "Shortest Seek Time First visits the nearest cylinder next (236 tracks moved, but risks starvation). SCAN sweeps smoothly across like an elevator (208 tracks moved, starvation-free)."
        }
      ],
      "interactionGuide": "Click Next step or Run all to watch the disk arm trace its seek trajectory, compare total head movement, and click Replay to review."
    }
  },
  "data-structures": {
    "arrays": {
      "title": "Contiguous Memory Array Lab",
      "badge": "Index Mapping & Memory Offsets",
      "overview": "Welcome to the 3D Array Visualizer. In this scene, an array is represented as a contiguous sequence of adjacent memory cells allocated side-by-side in computer memory.",
      "steps": [
        {
          "label": "Contiguous Cells",
          "title": "Consecutive Address Blocks",
          "text": "Observe the row of glowing cubes aligned horizontally. Each cell stores a value, and its memory address is directly adjacent to its neighbor, calculated as base address plus index times element size."
        },
        {
          "label": "O(1) Access",
          "title": "Instant Index-Based Lookup",
          "text": "When accessing an element by index, the pointer leaps directly to the target block in constant O(1) time without traversing preceding cells, highlighting the primary advantage of arrays."
        },
        {
          "label": "Insert & Shift",
          "title": "Element Shifting on Insertion",
          "text": "Watch an insertion at the middle of the array: all subsequent memory blocks must physically shift right one position to open a slot, demonstrating why insertions take linear O(N) time."
        }
      ],
      "interactionGuide": "Type values into the input panel to insert, delete, or search elements, and watch the 3D memory cells shift and highlight in real-time."
    },
    "stacks": {
      "title": "LIFO Stack Register Lab",
      "badge": "Last-In First-Out Architecture",
      "overview": "You are viewing the 3D Stack Visualizer. Elements are arranged in a vertical container, operating strictly on the Last-In First-Out principle.",
      "steps": [
        {
          "label": "Stack Column",
          "title": "Vertical Storage & Top Pointer",
          "text": "Notice the vertical container housing rectangular memory plates. A glowing marker hovers over the topmost element, representing the Stack Pointer that tracks the current head."
        },
        {
          "label": "Push Operation",
          "title": "Adding Elements to the Top",
          "text": "During a push operation, a new element drops down into the container and docks directly on top of the previous element, advancing the stack pointer upward in O(1) time."
        },
        {
          "label": "Pop Operation",
          "title": "Removing from the Top",
          "text": "When pop is triggered, the uppermost element lifts away and disintegrates. Notice that underlying elements cannot be accessed directly without first popping items above them."
        }
      ],
      "interactionGuide": "Use the Push button to stack new values, Pop to remove the top element, and Peek to inspect the top value without modifying the stack."
    },
    "queues": {
      "title": "FIFO Queue Pipeline Lab",
      "badge": "First-In First-Out & Circular Buffers",
      "overview": "This scene demonstrates a First-In First-Out Queue pipeline in 3D. Elements enter at the rear and exit from the front, mirroring real-world queues and data buffering.",
      "steps": [
        {
          "label": "Queue Pipeline",
          "title": "Linear Conduit with Front & Rear Pointers",
          "text": "Look at the horizontal pipeline with separate Front and Rear indicators. The Front pointer marks where elements are dequeued, while the Rear pointer marks where new elements arrive."
        },
        {
          "label": "Enqueue",
          "title": "Adding to the Rear",
          "text": "When enqueue is invoked, a new data cube glides into position at the back of the queue, and the rear pointer steps forward to reserve the next available slot."
        },
        {
          "label": "Dequeue",
          "title": "Serving from the Front",
          "text": "On dequeue, the leading element exits the pipeline to be processed, and the front pointer advances, guaranteeing that items are processed in the exact order they arrived."
        }
      ],
      "interactionGuide": "Click Enqueue to append values to the rear of the pipeline, Dequeue to extract from the front, and observe how circular wrap-around manages boundary conditions."
    },
    "linked-lists": {
      "title": "Dynamic Linked List Lab",
      "badge": "Non-Contiguous Nodes & Pointers",
      "overview": "You are observing a Dynamic Linked List in 3D space. Unlike arrays, nodes are scattered across arbitrary memory locations, connected together through directional pointer arrows.",
      "steps": [
        {
          "label": "Node Structure",
          "title": "Data Field & Next Pointer",
          "text": "Each visual entity represents a node partitioned into two chambers: a data compartment storing the value, and a pointer sphere storing the memory address of the next node."
        },
        {
          "label": "Dynamic Chaining",
          "title": "Pointer Links Across Memory",
          "text": "Notice the glowing laser arrows linking consecutive nodes. The first node is identified by the Head pointer, and the final node points to Null, indicating the end of the sequence."
        },
        {
          "label": "Insertion & Deletion",
          "title": "Pointer Rewiring Without Shifting",
          "text": "Watch how inserting a node between existing items requires only rewiring two pointer arrows. Unlike contiguous arrays, no other elements need to be shifted in memory."
        }
      ],
      "interactionGuide": "Add nodes at the head, tail, or specific indices, and watch pointer arrows dynamically detach and reconnect to illustrate dynamic memory allocation."
    },
    "trees": {
      "title": "Binary Search Tree 3D Visualizer",
      "badge": "Hierarchical Nodes & BST Invariant",
      "overview": "Welcome to the 3D Binary Search Tree Lab. This visualizer renders a hierarchical tree structure governed by the BST ordering invariant.",
      "steps": [
        {
          "label": "Root & Branches",
          "title": "Tree Hierarchy & Child Edges",
          "text": "At the apex sits the Root node. Directed branches split downward into Left and Right child nodes, organizing data hierarchically across increasing tree depth levels."
        },
        {
          "label": "BST Invariant",
          "title": "Left is Smaller, Right is Larger",
          "text": "Observe that for any given node, all elements in its left subtree have smaller values, while all elements in its right subtree have larger values, enabling efficient O(log N) lookups."
        },
        {
          "label": "Traversals",
          "title": "In-Order, Pre-Order & Post-Order",
          "text": "When a traversal runs, a golden light beam navigates the tree. In-order traversal visits left, root, and right in sorted sequence, demonstrating natural sorting capability."
        }
      ],
      "interactionGuide": "Insert numeric values to observe where new leaf nodes attach, search for keys to trace comparison branches, and trigger in-order traversal to see sorted output."
    }
  },
  "nlp": {
    "nlp-intro": {
      "title": "NLP Pipeline Visualizer",
      "badge": "End-to-End Language Processing",
      "overview": "Welcome to the NLP Pipeline 3D Laboratory. You are observing how raw human text transforms step-by-step through 5 distinct pipeline stations: Raw text, Tokenize, Clean, Features, and Model output.",
      "steps": [
        {
          "label": "Raw text",
          "title": "Stage 1: Raw Character Stream",
          "text": "The pipeline receives an unstructured string of characters: \"Book me a flight to Mumbai tomorrow!\". At this stage, the computer sees only raw text with no semantic understanding."
        },
        {
          "label": "Tokenize",
          "title": "Stage 2: Word Tokenization",
          "text": "The text stream is segmented into word tokens: [\"Book\", \"me\", \"a\", \"flight\", \"to\", \"Mumbai\", \"tomorrow\"]. Punctuation is separated or filtered so grammatical boundaries are identified."
        },
        {
          "label": "Clean",
          "title": "Stage 3: Normalization & Stop Words",
          "text": "Tokens are lowercased and filtered against a stop word lexicon. Common function words like \"me\", \"a\", and \"to\" are removed, retaining core content words: [\"book\", \"flight\", \"mumbai\", \"tomorrow\"]."
        },
        {
          "label": "Features",
          "title": "Stage 4: Numerical Feature Mapping",
          "text": "Cleaned words are mapped to numerical vocabulary index IDs: [0, 1, 2, 3]. Machine learning models operate on numerical vectors and tensors rather than character strings."
        },
        {
          "label": "Model output",
          "title": "Stage 5: Intent Classification Output",
          "text": "The classification model evaluates the numerical feature representation. Because \"book\" and \"flight\" are detected, the model outputs the intent: BOOK_FLIGHT."
        }
      ]
    },
    "tokenization": {
      "title": "Tokenization Techniques Lab",
      "badge": "Sentence, Word & Subword Segmentation",
      "overview": "Welcome to the Tokenization 3D Laboratory. Watch how raw input text is cut into atomic units across 5 stations: Raw text, Sentence split, Word tokens, Subword tokens, and Token IDs.",
      "steps": [
        {
          "label": "Raw text",
          "title": "Stage 1: Character Sequence",
          "text": "The input is loaded as a continuous character sequence: \"Tokenizers split unbelievable text. Don't panic, it's easy!\"."
        },
        {
          "label": "Sentence split",
          "title": "Stage 2: Sentence Boundary Detection",
          "text": "Sentence tokenization cuts the text after terminal punctuation marks (. ! ?), segmenting the passage into 2 complete sentences."
        },
        {
          "label": "Word tokens",
          "title": "Stage 3: Word & Punctuation Tokens",
          "text": "The sentence is broken into word tokens. Crucially, punctuation marks like \".\" and \"!\" become distinct standalone tokens rather than clinging to trailing words."
        },
        {
          "label": "Subword tokens",
          "title": "Stage 4: Subword Decomposition (WordPiece)",
          "text": "Rare or complex words are broken down into known subwords. In \"unbelievable\", the prefix is \"un\", followed by continuation pieces \"##believ\" and \"##able\". The \"##\" prefix signifies continuation."
        },
        {
          "label": "Token IDs",
          "title": "Stage 5: Integer Vocabulary Mapping",
          "text": "Each subword token is mapped to an integer identifier from the vocabulary table (e.g. un:100, ##believ:101). This numeric ID sequence is fed directly into neural network embedding layers."
        }
      ]
    },
    "text-preprocessing": {
      "title": "Text Preprocessing & Cleaning Lab",
      "badge": "Normalization, Stop Words, Stemming & Lemmatization",
      "overview": "Welcome to the Text Preprocessing 3D Laboratory. Observe how raw noisy text is cleaned and standardized across 5 stations: Raw text, Lower + punct., Stop words, Stemming, and Lemmatization.",
      "steps": [
        {
          "label": "Raw text",
          "title": "Stage 1: Noisy Input String",
          "text": "The raw sentence is received: \"The children were running and playing in the gardens, buying flights!!\". Capital letters, exclamation marks, and inflectional endings introduce noise."
        },
        {
          "label": "Lower + punct.",
          "title": "Stage 2: Lowercasing & Punctuation Removal",
          "text": "Case folding converts all characters to lowercase so \"The\" matches \"the\". Punctuation marks like \"!!\" are stripped away, yielding clean lowercase words."
        },
        {
          "label": "Stop words",
          "title": "Stage 3: Stop-Word Filtering",
          "text": "Common function words with low information content (such as \"the\", \"were\", \"and\", \"in\") are highlighted in red and eliminated, leaving content-bearing words in green."
        },
        {
          "label": "Stemming",
          "title": "Stage 4: Rule-Based Suffix Chopping",
          "text": "Stemming applies heuristic rules to chop suffixes: \"running\" > \"run\", \"playing\" > \"play\", and \"apples\" > \"appl\". It is fast, but frequently produces non-dictionary truncated stems."
        },
        {
          "label": "Lemmatization",
          "title": "Stage 5: Vocabulary & Morphological Lemmatization",
          "text": "Lemmatization uses a lexicon to return the true grammatical base lemma: \"children\" becomes \"child\", \"mice\" becomes \"mouse\", and \"better\" becomes \"good\"."
        }
      ]
    },
    "pos-tagging": {
      "title": "Part-of-Speech Tagging Lab",
      "badge": "Grammatical Role Disambiguation",
      "overview": "Welcome to the Part-of-Speech (POS) Tagging 3D Laboratory. See how words receive grammatical role labels across 5 stations: Raw text, Tokens, Dictionary lookup, Suffix rules, and Tagged output.",
      "steps": [
        {
          "label": "Raw text",
          "title": "Stage 1: Input Sentence",
          "text": "The input sentence is loaded: \"The quick fox quickly jumped over Mumbai bridges.\". The goal is to annotate every token with its syntactic category."
        },
        {
          "label": "Tokens",
          "title": "Stage 2: Token Segmentation",
          "text": "The sentence is tokenized into individual word tokens and punctuation marks, establishing sequence boundaries for grammatical parsing."
        },
        {
          "label": "Dictionary lookup",
          "title": "Stage 3: Lexicon Lookup",
          "text": "Known words receive tags from the lexicon: \"The\" is DET, \"quick\" is ADJ, \"over\" is ADP. Unseen words receive a \"?\" placeholder requiring morphological heuristics or context."
        },
        {
          "label": "Suffix rules",
          "title": "Stage 4: Morphological Suffix & Casing Rules",
          "text": "Unknown words are resolved using morphological patterns: words ending in \"-ly\" become ADV (\"quickly\"), \"-ed\" becomes VERB (\"jumped\"), capitalized mid-sentence words become PROPN (\"Mumbai\"), and others default to NOUN."
        },
        {
          "label": "Tagged output",
          "title": "Stage 5: POS Annotated Sequence",
          "text": "The tagged output sequence is displayed: The/DET quick/ADJ fox/NOUN quickly/ADV jumped/VERB over/ADP Mumbai/PROPN bridges/NOUN ./PUNCT."
        }
      ]
    },
    "ner": {
      "title": "Named Entity Recognition Lab",
      "badge": "Information Extraction & Entity Typing",
      "overview": "Welcome to the Named Entity Recognition (NER) 3D Laboratory. Explore how real-world entities are extracted across 5 stations: Raw text, Tokens, Gazetteer lookup, Pattern rules, and Entities.",
      "steps": [
        {
          "label": "Raw text",
          "title": "Stage 1: Input Document",
          "text": "The text is loaded: \"Sundar Pichai met Google teams in Mumbai on 12 March 2026.\". Our goal is to extract people, organizations, locations, dates, and currency."
        },
        {
          "label": "Tokens",
          "title": "Stage 2: Candidate Tokenization",
          "text": "The stream is tokenized. Capitalized words are identified as prime candidates for named entity mentions."
        },
        {
          "label": "Gazetteer lookup",
          "title": "Stage 3: Gazetteer Matching",
          "text": "Candidate spans are matched against a gazetteer: \"Sundar Pichai\" is recognized as PERSON, \"Google\" as ORG, and \"Mumbai\" as LOCATION."
        },
        {
          "label": "Pattern rules",
          "title": "Stage 4: Regular Expression Rules",
          "text": "Regex patterns extract entities that cannot be exhaustively listed in gazetteers: date patterns identify \"12 March 2026\" as DATE, and currency patterns identify monetary values."
        },
        {
          "label": "Entities",
          "title": "Stage 5: Labeled Entity Spans",
          "text": "The final tagged output highlights extracted entities with distinct category colors: [Sundar Pichai | PERSON], [Google | ORG], [Mumbai | LOCATION], [12 March 2026 | DATE]."
        }
      ]
    },
    "bag-of-words": {
      "title": "Bag of Words Model Lab",
      "badge": "Vector Space & Document-Term Matrix",
      "overview": "Welcome to the Bag of Words (BoW) 3D Laboratory. Observe how a collection of documents is converted into numerical word-count vectors across 5 stations: Documents, Vocabulary, Count words, Matrix, and Compare docs.",
      "steps": [
        {
          "label": "Documents",
          "title": "Stage 1: Document Collection & Stop Words",
          "text": "The corpus is loaded: D1: \"I love NLP\", D2: \"I love machine learning\", D3: \"NLP loves data\". Stop words (like \"I\") are removed first, leaving clean tokens."
        },
        {
          "label": "Vocabulary",
          "title": "Stage 2: Unique Vocabulary (A \"Bag\")",
          "text": "All unique words across the corpus are collected into a shared vocabulary: [\"love\", \"nlp\", \"machine\", \"learning\", \"loves\", \"data\"]. Word order and grammar are completely ignored (a \"bag\")."
        },
        {
          "label": "Count words",
          "title": "Stage 3: Term Frequency Counting",
          "text": "Each vocabulary word is counted in each document: D1 has [love: 1, nlp: 1], D2 has [love: 1, machine: 1, learning: 1], D3 has [nlp: 1, loves: 1, data: 1]. Notice \"love\" and \"loves\" count as different words, motivating stemming."
        },
        {
          "label": "Matrix",
          "title": "Stage 4: Document-Term Matrix",
          "text": "Documents become rows and vocabulary words become columns: D1 = [1, 1, 0, 0, 0, 0], D2 = [1, 0, 1, 1, 0, 0], D3 = [0, 1, 0, 0, 1, 1]."
        },
        {
          "label": "Compare docs",
          "title": "Stage 5: Cosine Similarity Comparison",
          "text": "Cosine similarity measures angular orientation: D1 vs D2 = 0.41 (they share \"love\"), while D2 vs D3 = 0.00 (they share zero vocabulary tokens)."
        }
      ]
    },
    "tf-idf": {
      "title": "TF-IDF Weighting & Vector Space Lab",
      "badge": "Term Frequency & Inverse Document Frequency",
      "overview": "Welcome to the TF-IDF 3D Laboratory. See how statistical weighting separates distinctive topical keywords from corpus-wide noise across 5 stations: Documents, TF, IDF, TF x IDF, and Top keywords.",
      "steps": [
        {
          "label": "Documents",
          "title": "Stage 1: Document Corpus",
          "text": "We analyze 3 documents: D1: \"data science uses data\", D2: \"machine learning uses data\", D3: \"art uses color and data\". The word \"data\" appears in all 3 documents."
        },
        {
          "label": "TF",
          "title": "Stage 2: Term Frequency (TF)",
          "text": "TF measures local frequency: count / total words in document. In D1, \"data\" appears 2 out of 4 words, giving TF = 0.50."
        },
        {
          "label": "IDF",
          "title": "Stage 3: Inverse Document Frequency (IDF)",
          "text": "IDF = ln(N / documents containing the word). Because \"data\" appears in all 3 documents, IDF = ln(3/3) = ln(1) = 0.00! A word in every document cannot distinguish documents."
        },
        {
          "label": "TF x IDF",
          "title": "Stage 4: TF-IDF Weight Calculation",
          "text": "Weight = TF x IDF. In D1, \"data\" drops to 0.50 x 0.00 = 0.00! Meanwhile, rare distinctive words like \"science\" retain high weights of ~0.28."
        },
        {
          "label": "Top keywords",
          "title": "Stage 5: Top Keywords Extraction",
          "text": "The highest TF-IDF word represents each document's top keyword: D1 is \"science\", D2 is \"machine\", and D3 is \"art\"."
        }
      ]
    },
    "word-embeddings": {
      "title": "Word Embeddings & Semantic Vectors Lab",
      "badge": "Dense Semantic Representations & Vector Analogies",
      "overview": "Welcome to the Word Embeddings 3D Laboratory. Explore dense continuous vectors and vector arithmetic across 5 stations: Words, Embedding lookup, Cosine similarity, Vector math, and Result.",
      "steps": [
        {
          "label": "Words",
          "title": "Stage 1: Vocabulary & Analogy Query",
          "text": "We select words from our 10-word toy vocabulary: king, queen, prince, princess, man, woman, cat, dog, apple, banana."
        },
        {
          "label": "Embedding lookup",
          "title": "Stage 2: Toy 4-D Semantic Vectors",
          "text": "Each word is mapped to continuous coordinates along [royalty, male, animal, food]: king=[0.9, 0.8, 0.1, 0], queen=[0.9, -0.8, 0.1, 0], man=[0.1, 0.9, 0.2, 0], woman=[0.1, -0.9, 0.2, 0]."
        },
        {
          "label": "Cosine similarity",
          "title": "Stage 3: Vector Cosine Similarity",
          "text": "Cosine similarity evaluates the angle between vectors (1 = same direction). Semantically related words point in similar directions: \"cat\" is closest to \"dog\" with cosine 0.99."
        },
        {
          "label": "Vector math",
          "title": "Stage 4: Semantic Vector Arithmetic",
          "text": "We subtract one meaning direction and add another: king - man + woman = [0.9, -1.0, 0.1, 0]. Likewise, prince - man + woman applies the same gender translation."
        },
        {
          "label": "Result",
          "title": "Stage 5: Nearest Word Retrieval",
          "text": "The closest vocabulary word to the result vector is \"queen\" (cosine 0.99)! For prince, the result is \"princess\". Meaning is captured as distance and direction."
        }
      ]
    },
    "sentiment-analysis": {
      "title": "Sentiment Analysis & Classification Lab",
      "badge": "Valence Scoring & Negation Handling",
      "overview": "Welcome to the Sentiment Analysis 3D Laboratory. Observe how subjective opinion polarity is calculated across 5 stations: Raw text, Clean + tokens, Lexicon scores, Negation + sum, and Label.",
      "steps": [
        {
          "label": "Raw text",
          "title": "Stage 1: Review Input",
          "text": "We evaluate opinions such as \"The movie was not good, it was boring and slow.\" to determine if they are POSITIVE, NEGATIVE, or NEUTRAL."
        },
        {
          "label": "Clean + tokens",
          "title": "Stage 2: Tokenization (Keeping Negation)",
          "text": "The text is lowercased and tokenized. Crucially, negation words like \"not\" are NEVER removed: negation flips the meaning of subsequent words!"
        },
        {
          "label": "Lexicon scores",
          "title": "Stage 3: Sentiment Lexicon Lookup",
          "text": "Words are looked up in a sentiment dictionary: \"good\" has valence +2, \"boring\" has -2, \"slow\" has -1. Neutral words receive 0."
        },
        {
          "label": "Negation + sum",
          "title": "Stage 4: Negation Flipping, Intensifier Boost & Sum",
          "text": "A word after \"not\" flips sign (\"good\" becomes -2), and words like \"very\" boost scores. In our movie review, summing (-2) + (-2) + (-1) yields a total score of -5."
        },
        {
          "label": "Label",
          "title": "Stage 5: Classification Label",
          "text": "A total score < 0 outputs NEGATIVE; > 0 outputs POSITIVE; 0 outputs NEUTRAL. Modern classifiers learn these weights directly from labelled datasets."
        }
      ]
    }
  },
  "dbms": {
    "data-abstraction-independence": {
      "title": "Data Abstraction & Independence Lab",
      "badge": "External, Conceptual & Internal Levels",
      "overview": "Welcome to the Data Abstraction 3D Laboratory. You are viewing the 3-tier ANSI-SPARC architecture separating user views, logical schemas, and physical storage blocks.",
      "steps": [
        {
          "label": "View (External) Level",
          "title": "Tailored User Views",
          "text": "The top blue box represents the External/View level. Different users see only their authorized data subset (e.g. students see marks, not salaries), providing security and simplicity."
        },
        {
          "label": "Logical (Conceptual) Level",
          "title": "Global Database Blueprint",
          "text": "The middle green box represents the Logical level: all tables, attributes, primary/foreign keys, and integrity constraints designed by the DBA, hiding storage details."
        },
        {
          "label": "Physical (Internal) Level",
          "title": "Storage & Hardware Structures",
          "text": "The purple box represents the Physical level: bytes on disk, block allocations, B+ tree indexes, and file compression techniques."
        },
        {
          "label": "Data Independence",
          "title": "Physical & Logical Independence",
          "text": "Click \"Change physical\" to see how adding disk indexes does not alter the logical schema. Click \"Change logical\" to see how modifying schemas preserves external user views."
        }
      ],
      "interactionGuide": "Click on the View, Logical, and Physical boxes, or trigger the \"Change physical\" and \"Change logical\" buttons to observe schema mapping isolation."
    },
    "dbms-intro": {
      "title": "Data Abstraction & Independence Lab",
      "badge": "External, Conceptual & Internal Levels",
      "overview": "Welcome to the Data Abstraction 3D Laboratory. You are viewing the 3-tier ANSI-SPARC architecture separating user views, logical schemas, and physical storage blocks.",
      "steps": [
        {
          "label": "View Level",
          "title": "Tailored User Views",
          "text": "The top blue box represents the External/View level. Different users see only their authorized data subset, providing security and simplicity."
        },
        {
          "label": "Logical Level",
          "title": "Global Database Blueprint",
          "text": "The middle green box represents the Logical level: tables, attributes, keys, and constraints designed by the DBA."
        },
        {
          "label": "Physical Level",
          "title": "Storage & Hardware Structures",
          "text": "The purple box represents the Physical level: bytes on disk, block allocations, and B+ tree indexes."
        }
      ],
      "interactionGuide": "Click on the View, Logical, and Physical boxes to see how data abstraction insulates applications from physical storage changes."
    },
    "ddl-dml": {
      "title": "DDL & DML Interactive Engine",
      "badge": "CREATE, ALTER, DROP vs INSERT, UPDATE, DELETE",
      "overview": "This interactive 3D laboratory demonstrates the clear boundary between Data Definition Language (structure/schema) and Data Manipulation Language (tuples/data).",
      "steps": [
        {
          "label": "DDL Operations",
          "title": "Defining & Modifying Table Structure",
          "text": "Click CREATE to generate the STUDENT schema in the data dictionary. Click ALTER to add the dept column. Click DROP to completely remove structure and records."
        },
        {
          "label": "DML Operations",
          "title": "Manipulating Table Tuples",
          "text": "Click INSERT to add student records to the active table. Click UPDATE to modify existing attribute values. Click DELETE to remove tuples while preserving the schema."
        },
        {
          "label": "State Feedback",
          "title": "Real-Time Table Board",
          "text": "Notice how the floating 3D table terminal instantly updates its columns, headers, and rows in response to your executed SQL statements."
        }
      ],
      "interactionGuide": "Click DDL buttons (CREATE, ALTER, DROP) to shape the table structure, then click DML buttons (INSERT, UPDATE, DELETE) to manage data records."
    },
    "data-models": {
      "title": "Data Models Comparator Lab",
      "badge": "Network, Relational & Object-Oriented Models",
      "overview": "Explore and compare the three pivotal data modeling paradigms: graph-based Network pointers, tabular Relational schemas with keys, and class-based Object-Oriented models.",
      "steps": [
        {
          "label": "Network Model",
          "title": "Graph Nodes & Pointer Navigation",
          "text": "Click the Network button to view records linked by sets in a graph. Records can have multiple parent nodes (natural M:N modeling), navigated using CODASYL pointers."
        },
        {
          "label": "Relational Model",
          "title": "Tables, Tuples & Foreign Keys",
          "text": "Click the Relational button to view 2D tables of rows and columns. Relationships are established via primary key and foreign key values rather than physical pointers."
        },
        {
          "label": "Object-Oriented Model",
          "title": "Classes, Objects & Inheritance",
          "text": "Click the Object-Oriented button to view Person and Student classes. Data encapsulates both attributes and methods, supporting \"is-a\" inheritance and Object IDs."
        }
      ],
      "interactionGuide": "Click the \"Network\", \"Relational\", and \"Object-Oriented\" buttons to dynamically switch 3D models and examine their structural differences."
    },
    "relational-model": {
      "title": "Data Models Comparator Lab",
      "badge": "Network, Relational & Object-Oriented Models",
      "overview": "Explore and compare the three pivotal data modeling paradigms: graph-based Network pointers, tabular Relational schemas with keys, and class-based Object-Oriented models.",
      "steps": [
        {
          "label": "Network Model",
          "title": "Graph Nodes & Pointer Navigation",
          "text": "Click the Network button to view records linked by sets in a graph. Records can have multiple parent nodes, navigated using CODASYL pointers."
        },
        {
          "label": "Relational Model",
          "title": "Tables, Tuples & Foreign Keys",
          "text": "Click the Relational button to view 2D tables of rows and columns, linked by key values queried via SQL."
        },
        {
          "label": "Object-Oriented Model",
          "title": "Classes, Objects & Inheritance",
          "text": "Click the Object-Oriented button to view classes with inheritance, encapsulation, and methods."
        }
      ],
      "interactionGuide": "Click the model selector buttons to compare how Network, Relational, and Object-Oriented architectures structure data."
    },
    "integrity-constraints": {
      "title": "Integrity Constraints Live Validator",
      "badge": "Entity, Key, Referential & Domain Constraints",
      "overview": "This 3D lab tests database integrity rules in real time. Submit test insert operations and observe whether the integrity validation engine accepts or rejects the transaction.",
      "steps": [
        {
          "label": "Entity Integrity",
          "title": "Primary Key Cannot Be NULL",
          "text": "Click \"Entity\" to simulate inserting a record with a NULL primary key. The engine rejects it (red light) because every entity must be uniquely identifiable."
        },
        {
          "label": "Key & Referential Integrity",
          "title": "Uniqueness & Valid Foreign Key References",
          "text": "Click \"Key\" to test duplicate IDs (rejected). Click \"Referential\" to test a foreign key dept_id that does not exist in DEPT (rejected to prevent orphan records)."
        },
        {
          "label": "Domain & Valid Insert",
          "title": "Check Constraints & Successful Insertion",
          "text": "Click \"Domain\" to test age=-5 violating CHECK(age>0) (rejected). Click \"Valid row\" to submit a row satisfying all constraints—the validation lamp turns green and appends the row!"
        }
      ],
      "interactionGuide": "Click each constraint button to test violation scenarios and observe the validation lamp and terminal readout."
    },
    "er-model": {
      "title": "Entity-Relationship 3D Diagrammer",
      "badge": "Entities, Attributes & Cardinality",
      "overview": "You are viewing an interactive 3D Entity-Relationship model, transforming abstract database schema designs into physical visual components.",
      "steps": [
        {
          "label": "Entities & Diamonds",
          "title": "Rectangular Entities & Relationship Diamonds",
          "text": "Rectangular platforms represent real-world entities like Student and Course. Diamond-shaped connectors between them represent relationships like Enrolls."
        },
        {
          "label": "Attributes",
          "title": "Oval Attribute Nodes",
          "text": "Orbital spheres attached to each entity represent attributes. Underlined spheres designate primary key attributes, while double-rimmed spheres indicate multivalued properties."
        },
        {
          "label": "Cardinality",
          "title": "One-to-One, One-to-Many & Many-to-Many",
          "text": "The connecting links are labeled with cardinality ratios: 1:1, 1:N, or M:N, governing how many instances of one entity can relate to instances of another."
        }
      ],
      "interactionGuide": "Hover over entity platforms and relationship diamonds to highlight connections, and inspect cardinality constraints defining database design."
    },
    "sql-joins": {
      "title": "SQL Joins 3D Visualizer",
      "badge": "INNER, LEFT, RIGHT & FULL Set Joins",
      "overview": "This 3D lab demonstrates SQL Join operations. Two intersecting relational tables combine rows dynamically based on matching key values.",
      "steps": [
        {
          "label": "Table Overlap",
          "title": "Dual Table Intersection",
          "text": "Notice Table A on the left and Table B on the right. The intersecting central zone represents rows that satisfy the join condition ON Table A key equals Table B key."
        },
        {
          "label": "INNER vs OUTER",
          "title": "Join Variations & NULL Padding",
          "text": "When INNER JOIN is active, only overlapping rows are preserved. Switching to LEFT JOIN retains all rows from Table A, padding missing Table B columns with NULL values."
        },
        {
          "label": "FULL OUTER",
          "title": "Complete Set Union with Matched Pairs",
          "text": "In FULL OUTER JOIN, all rows from both tables appear in the output dataset, linking matching pairs where available and filling unlinked rows with null placeholders."
        }
      ],
      "interactionGuide": "Toggle between INNER, LEFT, RIGHT, and FULL JOIN buttons, and observe the resulting 3D row combinations and SQL query syntax in real-time."
    },
    "sql-lab": {
      "title": "SQL Interactive Query Execution Lab",
      "badge": "SELECT, WHERE, GROUP BY & Aggregations",
      "overview": "Welcome to the SQL Query Execution Lab. Watch SQL statements parse, filter, and aggregate relational data rows in real-time within a 3D execution engine.",
      "steps": [
        {
          "label": "Scanning & Filter",
          "title": "FROM & WHERE Clause Filtering",
          "text": "Observe rows stream from the storage table into the query processor. The WHERE clause laser scans each row, eliminating records that fail the predicate."
        },
        {
          "label": "Grouping & Aggs",
          "title": "GROUP BY & Aggregation Functions",
          "text": "Next, surviving rows cluster into distinct category bins for GROUP BY execution, computing aggregate functions like COUNT, SUM, and AVERAGE for each group."
        },
        {
          "label": "Projection & Order",
          "title": "SELECT Column Projection & ORDER BY",
          "text": "Finally, the SELECT clause projects only requested columns, and ORDER BY arranges the result set into the final sorted tabular output display."
        }
      ],
      "interactionGuide": "Run sample SQL queries using the interface buttons to watch query plan execution stages physically process table data in 3D."
    },
    "normalization": {
      "title": "Database Normalization 3D Lab",
      "badge": "1NF, 2NF, 3NF & BCNF Decomposition",
      "overview": "This scene demonstrates Database Normalization, breaking down unnormalized tables with redundant data into refined, anomaly-free normal forms.",
      "steps": [
        {
          "label": "Unnormalized Anomalies",
          "title": "Redundancy, Insertion & Deletion Anomalies",
          "text": "Observe the initial unnormalized table plagued by duplicated rows. Updating a department name requires editing multiple records, causing update anomalies."
        },
        {
          "label": "1NF to 2NF",
          "title": "Atomic Values & Partial Dependency Elimination",
          "text": "In First Normal Form, multi-valued attributes are separated into atomic cells. In Second Normal Form, tables split to eliminate partial dependencies on composite keys."
        },
        {
          "label": "3NF & BCNF",
          "title": "Transitive Dependency Elimination",
          "text": "Advancing to Third Normal Form and BCNF decomposes non-key transitive dependencies, producing clean, modular tables linked strictly by foreign keys."
        }
      ],
      "interactionGuide": "Step through 1NF, 2NF, 3NF, and BCNF buttons to watch monolithic tables physically divide into clean, normalized relational schemas."
    },
    "relational-algebra-calculus": {
      "title": "Relational Algebra & Calculus Lab",
      "badge": "Selection, Projection, Join, Product, Set Ops & TRC/DRC",
      "overview": "Welcome to the Relational Algebra and Calculus 3D Laboratory. Explore procedural algebraic operators (Selection, Projection, Join, Cartesian Product, Set Operations) alongside declarative Relational Calculus (TRC and DRC).",
      "steps": [
        {
          "label": "Selection & Projection",
          "title": "Row Selection (σ) & Column Projection (π)",
          "text": "Notice relation R with students and relation S with departments. Clicking Select filters only rows where dept_id=10. Clicking Project extracts requested column attributes, automatically discarding duplicate tuples."
        },
        {
          "label": "Joins & Cartesian Product",
          "title": "Cartesian Product (×) vs Natural Join (⋈)",
          "text": "Cartesian Product pairs every row of R with every row of S, producing 3 × 2 = 6 combinations. The Join operator combines Cartesian product with a selection filter on matching foreign key dept_id."
        },
        {
          "label": "Set Ops & Calculus",
          "title": "Union Compatibility & TRC / DRC Calculus",
          "text": "Set operators compute Union, Intersection, and Difference across union-compatible relations. Meanwhile, Relational Calculus declares WHAT tuples satisfy the condition without dictating procedural steps."
        }
      ],
      "interactionGuide": "Click Select, Project, Join, Product, Set ops, and Calculus to observe how algebraic operators transform tabular tuples in real time."
    },
    "relational-algebra": {
      "title": "Relational Algebra & Calculus Lab",
      "badge": "Selection, Projection, Join, Product, Set Ops & TRC/DRC",
      "overview": "Welcome to the Relational Algebra and Calculus 3D Laboratory. Explore procedural algebraic operators (Selection, Projection, Join, Cartesian Product, Set Operations) alongside declarative Relational Calculus (TRC and DRC).",
      "steps": [
        {
          "label": "Selection & Projection",
          "title": "Row Selection (σ) & Column Projection (π)",
          "text": "Notice relation R with students and relation S with departments. Clicking Select filters only rows where dept_id=10. Clicking Project extracts requested column attributes, automatically discarding duplicate tuples."
        },
        {
          "label": "Joins & Cartesian Product",
          "title": "Cartesian Product (×) vs Natural Join (⋈)",
          "text": "Cartesian Product pairs every row of R with every row of S, producing 3 × 2 = 6 combinations. The Join operator combines Cartesian product with a selection filter on matching foreign key dept_id."
        },
        {
          "label": "Set Ops & Calculus",
          "title": "Union Compatibility & TRC / DRC Calculus",
          "text": "Set operators compute Union, Intersection, and Difference across union-compatible relations. Meanwhile, Relational Calculus declares WHAT tuples satisfy the condition without dictating procedural steps."
        }
      ],
      "interactionGuide": "Click Select, Project, Join, Product, Set ops, and Calculus to observe how algebraic operators transform tabular tuples in real time."
    },
    "query-processing-optimization": {
      "title": "Query Processing & Optimization Lab",
      "badge": "Heuristic Query Trees & Join Algorithms",
      "overview": "Welcome to the Query Processing and Optimization Visualizer. Examine how database engines transform high-level declarative SQL into optimized relational algebra operator trees and choose cost-effective execution algorithms.",
      "steps": [
        {
          "label": "Naive vs Optimized",
          "title": "Pushing Selection Down the Query Tree",
          "text": "In the naive plan, the engine joins all 10,000 rows of R with S first before filtering. Click Optimize to watch Selection push down below the join, dramatically shrinking intermediate tuple volume before the expensive join."
        },
        {
          "label": "Algebraic Equivalence",
          "title": "Equivalence Transformation Rules",
          "text": "The query optimizer leverages equivalence rule σ_c(R ⋈ S) = (σ_c(R)) ⋈ S whenever predicate c references only R attributes, guaranteeing mathematically identical results with far lower memory and I/O costs."
        },
        {
          "label": "Join Algorithms",
          "title": "Nested-Loop, Sort-Merge & Hash Joins",
          "text": "Compare physical join execution strategies: Nested-Loop Join scans inner tables per outer row, Sort-Merge Join efficiently steps two pointers through pre-sorted keys, and Hash Join builds an in-memory hash table on the smaller relation for O(1) probing."
        }
      ],
      "interactionGuide": "Toggle between Naive plan and Optimize to watch the 3D operator tree dynamically rearrange, and inspect Nested-Loop, Sort-Merge, and Hash Join algorithms."
    },
    "query-optimization": {
      "title": "Query Processing & Optimization Lab",
      "badge": "Heuristic Query Trees & Join Algorithms",
      "overview": "Welcome to the Query Processing and Optimization Visualizer. Examine how database engines transform high-level declarative SQL into optimized relational algebra operator trees and choose cost-effective execution algorithms.",
      "steps": [
        {
          "label": "Naive vs Optimized",
          "title": "Pushing Selection Down the Query Tree",
          "text": "In the naive plan, the engine joins all 10,000 rows of R with S first before filtering. Click Optimize to watch Selection push down below the join, dramatically shrinking intermediate tuple volume before the expensive join."
        },
        {
          "label": "Algebraic Equivalence",
          "title": "Equivalence Transformation Rules",
          "text": "The query optimizer leverages equivalence rule σ_c(R ⋈ S) = (σ_c(R)) ⋈ S whenever predicate c references only R attributes, guaranteeing mathematically identical results with far lower memory and I/O costs."
        },
        {
          "label": "Join Algorithms",
          "title": "Nested-Loop, Sort-Merge & Hash Joins",
          "text": "Compare physical join execution strategies: Nested-Loop Join scans inner tables per outer row, Sort-Merge Join efficiently steps two pointers through pre-sorted keys, and Hash Join builds an in-memory hash table on the smaller relation for O(1) probing."
        }
      ],
      "interactionGuide": "Toggle between Naive plan and Optimize to watch the 3D operator tree dynamically rearrange, and inspect Nested-Loop, Sort-Merge, and Hash Join algorithms."
    },
    "transactions": {
      "title": "Relational Algebra & Calculus Lab",
      "badge": "Selection, Projection, Join, Product, Set Ops & TRC/DRC",
      "overview": "Welcome to the Relational Algebra and Calculus 3D Laboratory. Explore procedural algebraic operators (Selection, Projection, Join, Cartesian Product, Set Operations) alongside declarative Relational Calculus (TRC and DRC).",
      "steps": [
        {
          "label": "Selection & Projection",
          "title": "Row Selection (σ) & Column Projection (π)",
          "text": "Notice relation R with students and relation S with departments. Clicking Select filters only rows where dept_id=10. Clicking Project extracts requested column attributes, automatically discarding duplicate tuples."
        },
        {
          "label": "Joins & Cartesian Product",
          "title": "Cartesian Product (×) vs Natural Join (⋈)",
          "text": "Cartesian Product pairs every row of R with every row of S, producing 3 × 2 = 6 combinations. The Join operator combines Cartesian product with a selection filter on matching foreign key dept_id."
        },
        {
          "label": "Set Ops & Calculus",
          "title": "Union Compatibility & TRC / DRC Calculus",
          "text": "Set operators compute Union, Intersection, and Difference across union-compatible relations. Meanwhile, Relational Calculus declares WHAT tuples satisfy the condition without dictating procedural steps."
        }
      ],
      "interactionGuide": "Click Select, Project, Join, Product, Set ops, and Calculus to observe how algebraic operators transform tabular tuples in real time."
    },
    "indexing": {
      "title": "Query Processing & Optimization Lab",
      "badge": "Heuristic Query Trees & Join Algorithms",
      "overview": "Welcome to the Query Processing and Optimization Visualizer. Examine how database engines transform high-level declarative SQL into optimized relational algebra operator trees and choose cost-effective execution algorithms.",
      "steps": [
        {
          "label": "Naive vs Optimized",
          "title": "Pushing Selection Down the Query Tree",
          "text": "In the naive plan, the engine joins all 10,000 rows of R with S first before filtering. Click Optimize to watch Selection push down below the join, dramatically shrinking intermediate tuple volume before the expensive join."
        },
        {
          "label": "Algebraic Equivalence",
          "title": "Equivalence Transformation Rules",
          "text": "The query optimizer leverages equivalence rule σ_c(R ⋈ S) = (σ_c(R)) ⋈ S whenever predicate c references only R attributes, guaranteeing mathematically identical results with far lower memory and I/O costs."
        },
        {
          "label": "Join Algorithms",
          "title": "Nested-Loop, Sort-Merge & Hash Joins",
          "text": "Compare physical join execution strategies: Nested-Loop Join scans inner tables per outer row, Sort-Merge Join efficiently steps two pointers through pre-sorted keys, and Hash Join builds an in-memory hash table on the smaller relation for O(1) probing."
        }
      ],
      "interactionGuide": "Toggle between Naive plan and Optimize to watch the 3D operator tree dynamically rearrange, and inspect Nested-Loop, Sort-Merge, and Hash Join algorithms."
    }
  },
  "blockchain": {
    "blocks-and-blockchain": {
      "title": "Blocks & The Blockchain Lab",
      "badge": "Sequential Hash Linkage & Tamper Evidence",
      "overview": "Welcome to the Blocks and Blockchain 3D Lab. In this scene, you see sequential blocks linked together by cryptographic hashes. Notice that every block stores its own payload data, a pointer linking back to the previous block's hash, and its own calculated hash.",
      "steps": [
        {
          "label": "First block",
          "title": "Genesis Block Initialization",
          "text": "Block 1 is created holding initial transaction data. It has a previous hash link of zeros, and its own cryptographic hash sealing its contents."
        },
        {
          "label": "Chain the blocks",
          "title": "Cryptographic Block Chaining",
          "text": "Each subsequent block records the exact cryptographic hash of the block before it. This previous hash pointer creates an unbreakable chain linking every block to its predecessor."
        },
        {
          "label": "All is well",
          "title": "Ledger Integrity Verification",
          "text": "Notice all blocks and link cones glow vibrant green. Every hash matches the cryptographic seal it was locked with, confirming the entire chain is valid and untampered."
        },
        {
          "label": "Try to cheat",
          "title": "Tampering with Block 2",
          "text": "Watch what happens when Block 2 is edited. Its cryptographic hash instantly changes, which breaks the link on Block 3. Notice all subsequent blocks turn red to signal an invalid broken chain."
        },
        {
          "label": "Why it is safe",
          "title": "Immutability & Re-mining Cost",
          "text": "To conceal a tamper, an attacker must recalculate the cryptographic hash for that block and every single block that comes after it across the whole network. In a real blockchain, this is computationally impossible."
        }
      ],
      "interactionGuide": "Use the Next step and Run all buttons to advance the simulation. Click any 3D block to tamper with its data and watch the broken chain turn red, or click again to restore it."
    },
    "cryptographic-hashing": {
      "title": "Cryptographic Hash Functions Lab",
      "badge": "One-Way Digests & The Avalanche Effect",
      "overview": "Welcome to the Cryptographic Hash Functions 3D Lab. Here you see an interactive hashing machine with input data on the left, mechanical hashing gears in the center, and two rows of hexadecimal tiles comparing outputs.",
      "steps": [
        {
          "label": "Pick some data",
          "title": "Arbitrary Input Data",
          "text": "Any digital data can enter a cryptographic hash function, whether it is a small payment note or a massive multi-gigabyte file."
        },
        {
          "label": "Make the fingerprint",
          "title": "One-Way Digest Generation",
          "text": "The hashing machine processes the data and generates a fixed-length hexadecimal fingerprint. Cryptographic hash functions are strictly one-way: you cannot reverse-engineer the original data from its hash."
        },
        {
          "label": "Do it again",
          "title": "Deterministic Consistency",
          "text": "Notice the bottom row of tiles turns completely green. Feeding the exact same input into the hash function will always produce the exact same fingerprint, enabling instant independent verification."
        },
        {
          "label": "Change one letter",
          "title": "The Avalanche Effect",
          "text": "Notice we changed just the last character of the message. The new hash is completely transformed, marked by red mismatching tiles. This avalanche effect ensures even the slightest alteration is instantly detectable."
        },
        {
          "label": "Always same size",
          "title": "Fixed Digest Length",
          "text": "Even if the input text is multiplied thirty times over, the resulting hash remains exactly the same fixed length—8 hexadecimal digits in this demo, and 64 hex characters (256 bits) in real-world SHA-256."
        }
      ],
      "interactionGuide": "Click Next step to watch the gears turn. Click New text to test different input phrases, and click Flip char to trigger the avalanche effect."
    },
    "proof-of-work": {
      "title": "Proof of Work & Mining Lab",
      "badge": "Cryptographic Nonce Lotteries & Asymmetric Verification",
      "overview": "Welcome to the Proof of Work 3D Rig. This scene visualizes computational mining as a slot machine with 8 reels, a block header, and high-speed cooling fans attempting nonces to hit the target hash.",
      "steps": [
        {
          "label": "The goal",
          "title": "Difficulty Target & Leading Zeros",
          "text": "To seal a block, the network requires its hash to fall below a target value, meaning it must start with a specified number of leading zeros. Because hashes are unpredictable, only brute-force guessing can find a match."
        },
        {
          "label": "Make one guess",
          "title": "Evaluating Nonce Zero",
          "text": "Testing nonce guess 0 produces a candidate hash. Notice the first reels do not match the required leading zeros, so the candidate block is rejected by the network protocol."
        },
        {
          "label": "Keep guessing",
          "title": "Brute-Force Mining Loop",
          "text": "Watch the cooling fans spin and the reels flicker as the miner increments nonces at high speed. The tries counter increments until a lucky nonce yields the required leading zeros."
        },
        {
          "label": "Block sealed",
          "title": "Golden Nonce & Block Commitment",
          "text": "The winning nonce is discovered and locked into the block header! The reels turn green, confirming the block is sealed and ready for broadcast across the peer-to-peer network."
        },
        {
          "label": "Checking is easy",
          "title": "Asymmetric Work Verification",
          "text": "Notice the immense asymmetry of Proof of Work: finding the valid nonce took hundreds of trial guesses, but any node on the network can verify the solution with a single hash computation."
        }
      ],
      "interactionGuide": "Click Next step or Run all to watch the mining rig work. Click Difficulty to cycle between 1, 2, or 3 leading zeros, and click New data to mine different transaction payloads."
    },
    "digital-signatures": {
      "title": "Digital Signatures & Cryptography Lab",
      "badge": "Asymmetric Keypairs & Integrity Lamps",
      "overview": "Welcome to the Digital Signatures 3D Lab. On the left stands Alice holding her private secret key, on the right stands Bob holding the public key, and in the center sits an interactive message envelope with a verification lamp.",
      "steps": [
        {
          "label": "Alice writes a note",
          "title": "Drafting the Payment Message",
          "text": "Alice creates an unauthenticated payment note: \"Alice pays Bob 10\". Anyone could read or forge this note without cryptographic proof of authorship."
        },
        {
          "label": "Make its fingerprint",
          "title": "Message Digest Compression",
          "text": "The plaintext note is passed through a cryptographic hash function to produce a compact numerical message digest, acting as the document's unique fingerprint."
        },
        {
          "label": "Seal with SECRET key",
          "title": "Private Key Signing",
          "text": "Alice combines the message digest with her private secret key using modular exponentiation. Only Alice possesses this secret key, so only she could have generated this mathematical signature."
        },
        {
          "label": "Send to Bob",
          "title": "Public Network Transmission",
          "text": "Watch the envelope fly across the room to Bob. The transaction message and signature travel publicly over the network—anyone can read them, but nobody can forge the seal."
        },
        {
          "label": "Bob checks the seal",
          "title": "Public Key Verification",
          "text": "Bob decrypts the signature using Alice's public key and compares it to the hash of the received note. They match perfectly, and the verification lamp turns glowing green to signal a genuine transaction."
        },
        {
          "label": "A hacker cheats",
          "title": "Malicious Tamper Detection",
          "text": "Watch what happens when an attacker modifies the payment note in transit. The reconstructed hash no longer matches the signature, and the verification lamp flashes bright red to reject the forgery."
        }
      ],
      "interactionGuide": "Click Next step to watch the envelope animate from Alice to Bob. Click Hacker to toggle message tampering and observe how the verify lamp switches between green GENUINE and red FAKE."
    },
    "transactions-network": {
      "title": "Transactions & The Network Lab",
      "badge": "P2P Gossip Broadcast & Double-Spend Validation",
      "overview": "Welcome to the Peer-to-Peer Transactions 3D Lab. You see six interconnected computer nodes arranged in a network ring, a central mempool waiting room, and a ledger board tracking balances.",
      "steps": [
        {
          "label": "Write the payment",
          "title": "Transaction Creation & Signing",
          "text": "Node PC1 originates a new transaction. The sender signs the transfer with their private key, creating an authentic payment packet."
        },
        {
          "label": "Tell everyone",
          "title": "Peer-to-Peer Gossip Broadcast",
          "text": "Follow the golden packet as it hops from computer to computer across the ring. Every node turns gold as it receives the announcement, demonstrating decentralized gossip without any central server."
        },
        {
          "label": "Everyone checks",
          "title": "Decentralized Balance & Rule Validation",
          "text": "Each individual node checks its local copy of the ledger to confirm the sender has enough coins and that no double-spend has occurred. Nodes turn green if the transfer is valid, or red if insufficient funds exist."
        },
        {
          "label": "Put it in a block",
          "title": "Mempool to Block Inclusion",
          "text": "Approved transactions are collected from the waiting room mempool and packaged into a candidate block. Rejected transactions are discarded from the chain."
        },
        {
          "label": "Update balances",
          "title": "Distributed Ledger Balance Updates",
          "text": "Once the block is committed, every node updates its local ledger state. Starting balances of Alice 50, Bob 20, and Carol 0 update seamlessly across all peers."
        }
      ],
      "interactionGuide": "Use Next step or Run all to trace the gossip broadcast. Click Next txs to cycle through valid payments, insufficient balance errors, and attempted double-spending."
    },
    "merkle-trees": {
      "title": "Merkle Trees & Proofs Lab",
      "badge": "Pairwise Hash Trees & SPV Audit Paths",
      "overview": "Welcome to the Merkle Trees 3D Laboratory. Four payments, T1 through T4, sit in the bottom row. A Merkle tree squeezes many payments into one short fingerprint called the root. Think of it like a tournament bracket where only the final winner is announced!",
      "steps": [
        {
          "label": "Hash each payment",
          "title": "Hash Each Payment",
          "text": "Every payment gets its own cryptographic fingerprint. These four form the bottom row of the tree. Think of it like one fingerprint per student."
        },
        {
          "label": "Join in pairs",
          "title": "Join in Pairs",
          "text": "Two fingerprints are joined together and hashed again. Four hashes become two parent hashes. Think of it like the first round of matches in a tournament bracket."
        },
        {
          "label": "The root",
          "title": "The Root",
          "text": "Joining the last two parent hashes gives one root fingerprint that stands for all four payments, stored directly in the block header. Think of it like announcing the tournament winner!"
        },
        {
          "label": "Prove T2 is inside",
          "title": "Prove T2 is Inside",
          "text": "To prove payment T2 is in the block, green traces its path to the root, while orange shows the only other hashes you need as proof. Think of it like proving your result using only two other tournament scores. A short proof of about log 2 N hashes proves a payment is inside without needing every payment in the ledger!"
        },
        {
          "label": "Try to cheat",
          "title": "Try to Cheat",
          "text": "When payment T2 is edited, its hash, its parent, and the root all turn red! The root no longer matches the block header, so cheating is spotted immediately. Think of it like a changed score changing the final winner!"
        }
      ],
      "interactionGuide": "Click Next step to build the tree layer by layer, or click Run all to play the full sequence. Click any bottom box to select it and view its proof path, or click the Tamper button to toggle an edit."
    },
    "merkle-tree": {
      "title": "Merkle Trees & Proofs Lab",
      "badge": "Pairwise Hash Trees & SPV Audit Paths",
      "overview": "Welcome to the Merkle Trees 3D Laboratory. Four payments, T1 through T4, sit in the bottom row. A Merkle tree squeezes many payments into one short fingerprint called the root. Think of it like a tournament bracket where only the final winner is announced!",
      "steps": [
        {
          "label": "Hash each payment",
          "title": "Hash Each Payment",
          "text": "Every payment gets its own cryptographic fingerprint. These four form the bottom row of the tree. Think of it like one fingerprint per student."
        },
        {
          "label": "Join in pairs",
          "title": "Join in Pairs",
          "text": "Two fingerprints are joined together and hashed again. Four hashes become two parent hashes. Think of it like the first round of matches in a tournament bracket."
        },
        {
          "label": "The root",
          "title": "The Root",
          "text": "Joining the last two parent hashes gives one root fingerprint that stands for all four payments, stored directly in the block header. Think of it like announcing the tournament winner!"
        },
        {
          "label": "Prove T2 is inside",
          "title": "Prove T2 is Inside",
          "text": "To prove payment T2 is in the block, green traces its path to the root, while orange shows the only other hashes you need as proof. Think of it like proving your result using only two other tournament scores. A short proof of about log 2 N hashes proves a payment is inside without needing every payment in the ledger!"
        },
        {
          "label": "Try to cheat",
          "title": "Try to Cheat",
          "text": "When payment T2 is edited, its hash, its parent, and the root all turn red! The root no longer matches the block header, so cheating is spotted immediately. Think of it like a changed score changing the final winner!"
        }
      ],
      "interactionGuide": "Click Next step to build the tree layer by layer, or click Run all to play the full sequence. Click any bottom box to select it and view its proof path, or click the Tamper button to toggle an edit."
    },
    "consensus-proof-of-stake": {
      "title": "Proof of Stake Consensus Lab",
      "badge": "Validator Staking & 2/3 Supermajority Voting",
      "overview": "Welcome to the Proof of Stake 3D Lab. Validators Asha, Ravi, and Meera put coins at stake. A lottery picks one to propose a block and the others vote. In contrast with Proof of Work, chance depends on coins instead of computing power, so it uses far less energy. Think of it like a raffle where more tickets give more chances!",
      "steps": [
        {
          "label": "Put coins at stake",
          "title": "Put Coins at Stake",
          "text": "Each validator locks some coins as a deposit. A taller pillar means more coins at stake. If anyone cheats, they lose their deposit! Think of it like a security deposit."
        },
        {
          "label": "Raffle slices",
          "title": "Raffle Slices",
          "text": "Each validator gets a slice of the wheel as big as its share of total coins. Think of it like more raffle tickets give more chances!"
        },
        {
          "label": "Spin the wheel",
          "title": "Spin the Wheel",
          "text": "The wheel spins and the pointer lands on one validator, shown as a gold pillar. That validator proposes the next block! Think of it like drawing the winning raffle ticket."
        },
        {
          "label": "Everyone votes",
          "title": "Everyone Votes",
          "text": "The other validators check the block and vote. In this demo, the last validator is faulty and votes NO with a red lamp. Click any pillar to flip its vote! Think of it like a jury voting on the block."
        },
        {
          "label": "Count the votes",
          "title": "Count the Votes",
          "text": "At least two-thirds of total coins must say YES for the block to be accepted. The green bar must pass the white marker line, otherwise the block is rejected! Think of it like a two-thirds majority rule."
        }
      ],
      "interactionGuide": "Click Next step to watch the wheel spin and select a proposer. Click Stakes to test different distribution models, and click any validator pillar to toggle their YES or NO vote."
    },
    "proof-of-stake": {
      "title": "Proof of Stake Consensus Lab",
      "badge": "Validator Staking & 2/3 Supermajority Voting",
      "overview": "Welcome to the Proof of Stake 3D Lab. Validators Asha, Ravi, and Meera put coins at stake. A lottery picks one to propose a block and the others vote. In contrast with Proof of Work, chance depends on coins instead of computing power, so it uses far less energy. Think of it like a raffle where more tickets give more chances!",
      "steps": [
        {
          "label": "Put coins at stake",
          "title": "Put Coins at Stake",
          "text": "Each validator locks some coins as a deposit. A taller pillar means more coins at stake. If anyone cheats, they lose their deposit! Think of it like a security deposit."
        },
        {
          "label": "Raffle slices",
          "title": "Raffle Slices",
          "text": "Each validator gets a slice of the wheel as big as its share of total coins. Think of it like more raffle tickets give more chances!"
        },
        {
          "label": "Spin the wheel",
          "title": "Spin the Wheel",
          "text": "The wheel spins and the pointer lands on one validator, shown as a gold pillar. That validator proposes the next block! Think of it like drawing the winning raffle ticket."
        },
        {
          "label": "Everyone votes",
          "title": "Everyone Votes",
          "text": "The other validators check the block and vote. In this demo, the last validator is faulty and votes NO with a red lamp. Click any pillar to flip its vote! Think of it like a jury voting on the block."
        },
        {
          "label": "Count the votes",
          "title": "Count the Votes",
          "text": "At least two-thirds of total coins must say YES for the block to be accepted. The green bar must pass the white marker line, otherwise the block is rejected! Think of it like a two-thirds majority rule."
        }
      ],
      "interactionGuide": "Click Next step to watch the wheel spin and select a proposer. Click Stakes to test different distribution models, and click any validator pillar to toggle their YES or NO vote."
    },
    "smart-contracts": {
      "title": "Smart Contracts 3D Lab",
      "badge": "Autonomous Code Execution & Conditional Escrow",
      "overview": "Welcome to the Smart Contracts 3D Lab. A smart contract is a program on the blockchain that follows its rules exactly, with no bank, boss, or middleman. The code runs by itself and is transparent. Think of it like a vending machine: right coins in, and it just works!",
      "steps": [
        {
          "label": "Install the contract",
          "title": "Install the Contract",
          "text": "The contract goes live on the blockchain and cannot be changed. Its rule requires reaching the goal of 100 coins: if total is greater than or equal to goal, the owner is paid; otherwise everyone is refunded. Think of it like plugging in a vending machine."
        },
        {
          "label": "Alice pledges 60",
          "title": "Alice Pledges 60",
          "text": "Alice pledges 60 coins into the contract. The contract checks that amount is greater than zero, accepts the coins, and raises the balance to 60. Think of it like putting coins in the machine."
        },
        {
          "label": "Bob pledges 30",
          "title": "Bob Pledges 30",
          "text": "Bob pledges 30 coins into the contract. The machine accepts the deposit, and the green balance bar climbs to 90 coins. Think of it like another person adding coins."
        },
        {
          "label": "Carol pledges 20",
          "title": "Carol Pledges 20",
          "text": "Carol pledges 20 coins, bringing the total balance to 110 coins, which reaches our goal of 100! Think of it like one more person adding coins."
        },
        {
          "label": "Deadline arrives",
          "title": "Deadline Arrives",
          "text": "The deadline arrives! Since 110 is greater than or equal to 100, the door opens and the owner is paid automatically with no bank needed! With goal 150 everyone is refunded. Notice that clicking Dan pledges 0 coins, which the contract rejects because amount greater than zero fails! Think of it like the machine dispensing by itself."
        }
      ],
      "interactionGuide": "Click Next step or Run all to walk through pledges. Click the coins on the left to test individual pledges, click the New goal button to switch goals, or click Finish to force the deadline."
    },
    "smart-contract": {
      "title": "Smart Contracts 3D Lab",
      "badge": "Autonomous Code Execution & Conditional Escrow",
      "overview": "Welcome to the Smart Contracts 3D Lab. A smart contract is a program on the blockchain that follows its rules exactly, with no bank, boss, or middleman. The code runs by itself and is transparent. Think of it like a vending machine: right coins in, and it just works!",
      "steps": [
        {
          "label": "Install the contract",
          "title": "Install the Contract",
          "text": "The contract goes live on the blockchain and cannot be changed. Its rule requires reaching the goal of 100 coins: if total is greater than or equal to goal, the owner is paid; otherwise everyone is refunded. Think of it like plugging in a vending machine."
        },
        {
          "label": "Alice pledges 60",
          "title": "Alice Pledges 60",
          "text": "Alice pledges 60 coins into the contract. The contract checks that amount is greater than zero, accepts the coins, and raises the balance to 60. Think of it like putting coins in the machine."
        },
        {
          "label": "Bob pledges 30",
          "title": "Bob Pledges 30",
          "text": "Bob pledges 30 coins into the contract. The machine accepts the deposit, and the green balance bar climbs to 90 coins. Think of it like another person adding coins."
        },
        {
          "label": "Carol pledges 20",
          "title": "Carol Pledges 20",
          "text": "Carol pledges 20 coins, bringing the total balance to 110 coins, which reaches our goal of 100! Think of it like one more person adding coins."
        },
        {
          "label": "Deadline arrives",
          "title": "Deadline Arrives",
          "text": "The deadline arrives! Since 110 is greater than or equal to 100, the door opens and the owner is paid automatically with no bank needed! With goal 150 everyone is refunded. Notice that clicking Dan pledges 0 coins, which the contract rejects because amount greater than zero fails! Think of it like the machine dispensing by itself."
        }
      ],
      "interactionGuide": "Click Next step or Run all to walk through pledges. Click the coins on the left to test individual pledges, click the New goal button to switch goals, or click Finish to force the deadline."
    }
  }
};

export function getSceneNarration(subjectId, topicId) {
  return SCENE_NARRATION_SCRIPTS[subjectId]?.[topicId] || null;
}
