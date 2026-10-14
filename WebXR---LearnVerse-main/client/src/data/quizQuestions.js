// Question Bank for Adaptive Assessment Engine
export const QUIZ_QUESTIONS = {
  "computer-networks": {
    "osi-model": [
      {
        "id": "computer-networks-osi-model-1",
        "question": "In the OSI 7-layer model lab, what real-life comparison is used to explain how data travels through the layers?",
        "options": [
          "A train moving through tunnels",
          "A letter placed inside nested protective envelopes",
          "A tree growing branches in a forest",
          "Water flowing through a water wheel"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "The lab compares the 7 OSI layers to writing a letter and placing it inside nested envelopes; each envelope adds new addressing and instructions."
      },
      {
        "id": "computer-networks-osi-model-2",
        "question": "What message does Alice type at Layer 7 (Application Layer) in the 3D lab simulation?",
        "options": [
          "PING 127.0.0.1",
          "\"Hello Bob!\"",
          "GET /index.html",
          "CONNECT 192.168.1.1"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "In Step 1, Alice types \"Hello Bob!\" into an application at Layer 7, where it begins its journey as pure data."
      },
      {
        "id": "computer-networks-osi-model-3",
        "question": "What is the correct data unit name at Layer 4 (Transport Layer) after a TCP header is added?",
        "options": [
          "Packet",
          "Frame",
          "Segment",
          "Bits"
        ],
        "correctAnswer": 2,
        "answerIdx": 2,
        "difficulty": "easy",
        "explanation": "At Layer 4 (Transport), the data plus TCP header is known as a Segment."
      },
      {
        "id": "computer-networks-osi-model-4",
        "question": "What networking device operates primarily at Layer 3 (Network Layer) to route packets using IP addresses?",
        "options": [
          "Hub",
          "Switch",
          "Router",
          "Repeater"
        ],
        "correctAnswer": 2,
        "answerIdx": 2,
        "difficulty": "easy",
        "explanation": "Routers operate at Layer 3 (Network Layer), using IP addresses to find the optimal path across networks."
      },
      {
        "id": "computer-networks-osi-model-5",
        "question": "What header is added at Layer 3 in the lab, and what sample IP addresses are shown in the packet?",
        "options": [
          "MAC header (00:1A:2B to FF:EE:DD)",
          "IP header (192.168.1.5 to 10.0.0.8)",
          "HTTP header (GET /hello to 80)",
          "DNS header (ns1.root to ns2.root)"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "In Step 4, Layer 3 adds an IP header containing sender and receiver IP addresses (192.168.1.5 to 10.0.0.8), creating a Packet."
      },
      {
        "id": "computer-networks-osi-model-6",
        "question": "What information is attached at Layer 2 (Data Link Layer) to turn a packet into a Frame?",
        "options": [
          "Only process thread IDs",
          "MAC addresses and an error check (FCS trailer)",
          "A TCP handshake token",
          "An encryption session cookie"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Layer 2 adds a header with hardware MAC addresses and a Frame Check Sequence (FCS) trailer for error checking."
      },
      {
        "id": "computer-networks-osi-model-7",
        "question": "What happens when the data reaches Bob's PC in the OSI lab?",
        "options": [
          "The packet is discarded and requested again",
          "Data travels UP from Layer 1 to 7, with each layer removing its own header",
          "All headers are saved into a database without opening",
          "The entire frame is displayed directly without reading headers"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "On the receiving side (Bob), data travels up the stack. Each layer reads and removes its matching header before passing the data upward."
      },
      {
        "id": "computer-networks-osi-model-8",
        "question": "In the peer-to-peer concept of the OSI model, which layer on Bob's PC reads the TCP header added by Alice's Layer 4?",
        "options": [
          "Bob's Layer 1 (Physical)",
          "Bob's Layer 3 (Network)",
          "Bob's Layer 4 (Transport)",
          "Bob's Layer 7 (Application)"
        ],
        "correctAnswer": 2,
        "answerIdx": 2,
        "difficulty": "medium",
        "explanation": "Each layer communicates logically with the identical peer layer on the receiver: Alice's Layer 4 header is read and stripped by Bob's Layer 4."
      },
      {
        "id": "computer-networks-osi-model-9",
        "question": "What is the correct downward encapsulation sequence of data units as Alice sends her message?",
        "options": [
          "Bits -> Frame -> Packet -> Segment -> Data",
          "Data -> Segment -> Packet -> Frame -> Bits",
          "Frame -> Packet -> Segment -> Bits -> Data",
          "Data -> Packet -> Frame -> Segment -> Bits"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "As data moves down the stack, the protocol data units are: Data (App) -> Segment (Transport) -> Packet (Network) -> Frame (Data Link) -> Bits (Physical)."
      },
      {
        "id": "computer-networks-osi-model-10",
        "question": "What port numbers are displayed at Layer 4 in the lab when the TCP segment is built?",
        "options": [
          "Port 21 to Port 22",
          "Port 51000 to Port 80",
          "Port 443 to Port 8080",
          "Port 25 to Port 110"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "In Step 3, Layer 4 adds a TCP header specifying ephemeral client port 51000 to web server port 80."
      },
      {
        "id": "computer-networks-osi-model-11",
        "question": "Which two OSI layers handle formatting/encryption and opening/maintaining communication sessions before Layer 4 adds the transport header?",
        "options": [
          "Layers 1 and 2",
          "Layers 6 (Presentation) and 5 (Session)",
          "Layers 3 (Network) and 4 (Transport)",
          "Layers 7 (Application) and 1 (Physical)"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "Layer 6 (Presentation) formats, translates, and encrypts data, while Layer 5 (Session) establishes and manages dialogues between endpoints."
      },
      {
        "id": "computer-networks-osi-model-12",
        "question": "What hardware devices and transmission media operate at Layer 1 (Physical Layer) in the simulation?",
        "options": [
          "Web browsers and email clients",
          "Layer 3 core routers and BGP peers",
          "Cables, hubs, and electrical/optical/radio signals",
          "Layer 2 Ethernet switches and bridges"
        ],
        "correctAnswer": 2,
        "answerIdx": 2,
        "difficulty": "hard",
        "explanation": "Layer 1 represents the physical cables, hubs, and signaling (voltage, light, or radio) that transmit raw bit streams."
      },
      {
        "id": "computer-networks-osi-model-13",
        "question": "Why does Layer 2 add an FCS (Frame Check Sequence) trailer to the frame?",
        "options": [
          "To assign the computer a dynamic IP address",
          "To encrypt the payload with TLS",
          "To allow the receiver to detect bit errors caused by cable noise",
          "To open a three-way handshake session"
        ],
        "correctAnswer": 2,
        "answerIdx": 2,
        "difficulty": "hard",
        "explanation": "The Frame Check Sequence (FCS) uses a cyclic redundancy check (CRC) algorithm to verify that bits were not corrupted during transit over the cable."
      }
    ],
    "physical-layer": [
      {
        "id": "computer-networks-physical-layer-1",
        "question": "What real-life comparison is used in the Line Encoding and Modulation lab?",
        "options": [
          "A highway with traffic lights",
          "Turning words into Morse code",
          "Writing letters in different envelopes",
          "Passing a basketball around a circle"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "The lab introduces line encoding as turning computer words and bits into electrical Morse code for transmission over media."
      },
      {
        "id": "computer-networks-physical-layer-2",
        "question": "In NRZ-L (Non-Return to Zero Level) encoding shown in the lab, how are binary 1 and 0 represented?",
        "options": [
          "1 is high voltage, 0 is low voltage",
          "1 is a wave phase flip, 0 is zero volts",
          "1 alternates positive and negative, 0 is high",
          "1 and 0 both use the same voltage"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "In NRZ-L, binary 1 is mapped directly to a high voltage level and binary 0 is mapped to a low voltage level."
      },
      {
        "id": "computer-networks-physical-layer-3",
        "question": "What does the \"New bits\" button do in the 3D Line Encoding lab?",
        "options": [
          "Clears the screen and stops the simulation",
          "Cycles to a new pattern of 8 bits to encode",
          "Switches the network topology to Mesh",
          "Disconnects the sender's cable"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "Clicking \"New bits\" cycles through different 8-bit test patterns, allowing the learner to observe how encoding schemes handle various bit sequences."
      },
      {
        "id": "computer-networks-physical-layer-4",
        "question": "How does Manchester encoding represent bits in the 3D lab?",
        "options": [
          "Every bit has a transition in the middle: rising for 1, falling for 0",
          "A 1 is high voltage for the entire bit duration, 0 is low",
          "Only 1s cause an electrical transition at the start",
          "0 is zero volts and 1s alternate between + and -"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "In Manchester encoding, every bit transitions at mid-interval: a rising transition represents binary 1, and a falling transition represents binary 0."
      },
      {
        "id": "computer-networks-physical-layer-5",
        "question": "How does NRZ-I (Non-Return to Zero Inverted) represent a binary 1?",
        "options": [
          "The voltage stays completely flat",
          "The signal voltage flips (inverts) for every 1",
          "The signal drops to zero volts",
          "The frequency doubles"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "In NRZ-I, the signal inverts/flips whenever a 1 occurs, and remains unchanged when a 0 occurs."
      },
      {
        "id": "computer-networks-physical-layer-6",
        "question": "In Bipolar AMI (Alternate Mark Inversion), how is a binary 0 represented?",
        "options": [
          "By alternating between + and - volts",
          "By a neutral zero-volt level (0V)",
          "By a high frequency sine wave",
          "By a 180-degree phase shift"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "In Bipolar AMI, binary 0 is represented by a neutral 0V level, while binary 1s alternate between positive and negative voltages."
      },
      {
        "id": "computer-networks-physical-layer-7",
        "question": "Why is Manchester encoding called \"self-clocking\" in network engineering?",
        "options": [
          "It uses an external battery to power the receiver",
          "Every single bit has a mid-bit transition, embedding the clock signal directly into the data",
          "It does not require any transmission medium",
          "It only transmits when a timer goes off"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Because every bit period contains a guaranteed transition in the center, the receiver can recover and synchronize its clock directly from the data signal."
      },
      {
        "id": "computer-networks-physical-layer-8",
        "question": "In Amplitude Shift Keying (ASK) modulation, how are 1s and 0s distinguished?",
        "options": [
          "By changing the wave frequency",
          "By a strong wave amplitude for 1 and a weak wave for 0",
          "By reversing the direction of travel",
          "By changing the cable color"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "ASK modulates the amplitude of the carrier wave: a strong amplitude wave indicates binary 1, and a weak amplitude wave indicates binary 0."
      },
      {
        "id": "computer-networks-physical-layer-9",
        "question": "In Frequency Shift Keying (FSK), what changes to represent a 1 versus a 0?",
        "options": [
          "The height of the wave",
          "The frequency: a fast wave for 1 and a slow wave for 0",
          "The polarity of the ground wire",
          "The length of the cable"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "FSK changes carrier frequency: a higher frequency (faster wave) represents 1, and a lower frequency (slower wave) represents 0."
      },
      {
        "id": "computer-networks-physical-layer-10",
        "question": "In Phase Shift Keying (PSK), what indicates a binary 0 in the waveform?",
        "options": [
          "The wave completely stops oscillating",
          "The phase flips 180 degrees (starts upside down)",
          "The wave changes into square DC pulses",
          "The voltage stays at zero"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "PSK flips the wave phase: a 180-degree phase shift (starting upside down) indicates a binary 0."
      },
      {
        "id": "computer-networks-physical-layer-11",
        "question": "When sending bits over a transmission medium, what physical signals correspond to copper, fiber-optic, and wireless channels?",
        "options": [
          "Copper = sound, fiber = radio, wireless = light",
          "Copper = electricity, fiber = light pulses, wireless = radio waves",
          "Copper = light, fiber = electricity, wireless = magnetism",
          "All three media transmit identical acoustic pulses"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "Data propagates as electric voltage pulses through copper cables, light pulses through glass fiber optics, and radio waves through the air."
      },
      {
        "id": "computer-networks-physical-layer-12",
        "question": "Why can long consecutive runs of 0s or 1s cause problems in simple NRZ-L encoding?",
        "options": [
          "The signal overheats the computer motherboard",
          "The receiver clock drifts because there are no voltage transitions to stay synchronized",
          "The packet changes its destination IP address",
          "The router buffer immediately overflows"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "Long runs of identical bits keep the line at a constant voltage without transitions, causing receiver clocks to drift out of synchronization."
      },
      {
        "id": "computer-networks-physical-layer-13",
        "question": "What happens when you click the \"Send\" button in the Line Encoding 3D scene?",
        "options": [
          "A cursor sweeps across the waveform and pulses through the bits to simulate transmission",
          "The 3D scene switches to a router graph",
          "A TCP three-way handshake begins",
          "The 8 bits are permanently erased"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Clicking \"Send\" animates a scanning cursor moving across the waveform and highlights the corresponding bits sequentially along the cable."
      },
      {
        "id": "computer-networks-physical-layer-14",
        "question": "In Bipolar AMI, how does the alternating rule (+V and -V for 1s) help detect transmission errors?",
        "options": [
          "If two consecutive 1s have the same polarity (bipolar violation), the receiver knows noise corrupted the signal",
          "It prevents all noise from entering the cable",
          "It doubles the bandwidth capacity of the wire",
          "It eliminates the need for parity bits"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "If noise alters a bit such that two consecutive 1s share the same voltage sign, a bipolar violation is detected, alerting the receiver of corruption."
      }
    ],
    "network-topologies": [
      {
        "id": "computer-networks-network-topologies-1",
        "question": "What real-life comparison is used in the Network Topologies lab?",
        "options": [
          "Different road layouts for a city",
          "A row of dominoes falling down",
          "A set of nested Russian dolls",
          "Water flowing through a funnel"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The lab compares network topologies to city road layouts: bus like a single hallway, star like an airport hub, ring like a roundabout, mesh like a city grid."
      },
      {
        "id": "computer-networks-network-topologies-2",
        "question": "In the 3D lab simulation, between which two computers does a packet travel?",
        "options": [
          "From PC1 to PC4",
          "From PC6 to PC1",
          "From HUB to Router",
          "From Server to Gateway"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Throughout the topology demonstrations, PC1 sends test packets targeted to PC4."
      },
      {
        "id": "computer-networks-network-topologies-3",
        "question": "What major vulnerability of Star topology is demonstrated when the central hub is switched off?",
        "options": [
          "The cables catch fire",
          "The entire network stops; no PC can reach any other PC (single point of failure)",
          "Only PC1 stops working while other PCs talk normally",
          "The topology automatically turns into a Mesh"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "In a Star topology, all communications pass through the central hub. If the hub fails, it represents a single point of failure that downs the entire network."
      },
      {
        "id": "computer-networks-network-topologies-4",
        "question": "How many hops does a packet take from PC1 to PC4 in a healthy Full Mesh topology?",
        "options": [
          "5 hops",
          "1 hop (direct link)",
          "3 hops through the central hub",
          "10 hops around the circle"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "In a Full Mesh topology, every computer has a dedicated direct link to every other computer, allowing 1-hop delivery."
      },
      {
        "id": "computer-networks-network-topologies-5",
        "question": "In the Bus topology step of the lab, what happens when the shared backbone cable breaks between PC3 and PC4?",
        "options": [
          "The packet jumps through the air wirelessly",
          "The bus splits in two, so PC1 can no longer reach PC4",
          "The central hub takes over transmission",
          "PC4 sends an ACK back to PC1"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Because a bus topology relies on a single shared trunk cable, a cut splits the bus into two isolated segments."
      },
      {
        "id": "computer-networks-network-topologies-6",
        "question": "In a standard one-way Ring topology, what happens when a single cable breaks?",
        "options": [
          "Packets automatically travel in reverse immediately",
          "The token cannot pass around the loop, so communication stops completely",
          "The ring doubles its speed",
          "The broken PC becomes the new master hub"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "In a unidirectional ring, data travels sequentially in one direction. Any severed link breaks the closed loop, halting token circulation."
      },
      {
        "id": "computer-networks-network-topologies-7",
        "question": "What mechanism in advanced ring networks (like dual rings) resolves the single cable break problem?",
        "options": [
          "A secondary counter-rotating ring wraps with the primary ring to restore a complete loop",
          "All PCs convert to Wi-Fi",
          "Every PC installs two hubs in the middle",
          "Packets are converted into UDP datagrams"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Dual-ring architectures (such as FDDI) use a secondary counter-rotating ring that wraps around fault boundaries to re-establish a continuous loop."
      },
      {
        "id": "computer-networks-network-topologies-8",
        "question": "What happens in the Mesh topology when the direct link between PC1 and PC4 is cut in the 3D lab?",
        "options": [
          "The simulation crashes and resets",
          "The packet finds another path through intermediate PCs and still arrives (self-healing)",
          "The packet is permanently lost and never arrives",
          "PC1 stops sending forever"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Meshes provide redundant paths: if the direct link fails, packets automatically reroute through intermediate nodes to reach the destination."
      },
      {
        "id": "computer-networks-network-topologies-9",
        "question": "How can a learner interactively simulate faults in the 3D Network Topologies scene?",
        "options": [
          "By clicking on any cable or PC to cut/switch off or repair it",
          "By editing the source code in a terminal window",
          "By dragging the screen with three fingers",
          "By clicking the Reload Browser button"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Clicking any cable in the scene cuts or repairs it, and clicking any PC toggles it on or off, allowing immediate hands-on fault testing."
      },
      {
        "id": "computer-networks-network-topologies-10",
        "question": "How many total cables are needed to fully connect N devices in a physical Full Mesh topology?",
        "options": [
          "N - 1",
          "N(N - 1) / 2",
          "2N",
          "N²"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "Every node links to N - 1 other nodes. Since each cable connects two nodes, the total number of physical cables is N(N - 1) / 2."
      },
      {
        "id": "computer-networks-network-topologies-11",
        "question": "In a Star topology, why does a break in an individual workstation's cable have less impact than in a Bus topology?",
        "options": [
          "Each workstation has a dedicated link to the central hub, so only that one workstation is isolated",
          "Star topology does not use physical cables",
          "The hub replicates the broken workstation in RAM",
          "Signals in a Star network travel along ground wires"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "In a Star network, each node connects independently to the hub via its own cable, so a cable break only isolates that specific endpoint."
      },
      {
        "id": "computer-networks-network-topologies-12",
        "question": "In the 3D lab comparison step, which topology offers the highest reliability through multiple redundant paths at the cost of high cabling expense?",
        "options": [
          "Bus",
          "Star",
          "Ring",
          "Mesh"
        ],
        "correctAnswer": 3,
        "answerIdx": 3,
        "difficulty": "hard",
        "explanation": "Full Mesh topologies offer peerless fault tolerance because alternate routes always exist, but they are the most expensive and complex to cable."
      },
      {
        "id": "computer-networks-network-topologies-13",
        "question": "What device sits at the center of the Star topology in the 3D scene?",
        "options": [
          "A central HUB (orange sphere labeled HUB)",
          "A telephone modem",
          "A satellite dish",
          "A mainframe tape drive"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "In Step 3, all 6 PCs reposition around a central orange HUB sphere through which all packets are relayed."
      },
      {
        "id": "computer-networks-network-topologies-14",
        "question": "In the 3D Ring topology, what order of nodes does a packet visit when traveling from PC1 to PC4?",
        "options": [
          "PC1 -> HUB -> PC4",
          "PC1 -> PC2 -> PC3 -> PC4",
          "PC1 -> PC6 -> PC5 -> PC4",
          "PC1 directly to PC4 in 0 hops"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "In the unidirectional ring simulation, the packet hops node by node around the circle: PC1 -> PC2 -> PC3 -> PC4."
      }
    ],
    "tcp-udp": [
      {
        "id": "computer-networks-tcp-udp-1",
        "question": "What everyday comparison is used in the 3D lab to explain TCP vs UDP?",
        "options": [
          "A sports car vs a bicycle",
          "Registered mail (TCP) versus a postcard (UDP)",
          "A telephone call vs a text message",
          "A paved highway vs a dirt road"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "The lab introduces TCP as registered mail (tracked with receipts and resends) and UDP as a postcard (fast and simple with no delivery guarantees)."
      },
      {
        "id": "computer-networks-tcp-udp-2",
        "question": "What three packets make up the TCP Three-Way Handshake in the 3D scene?",
        "options": [
          "SYN, SYN+ACK, ACK",
          "HELLO, WELCOME, THANKS",
          "START, SEND, FINISH",
          "PING, PONG, ACK"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The TCP handshake consists of SYN from client to server, SYN+ACK from server to client, and ACK from client back to server."
      },
      {
        "id": "computer-networks-tcp-udp-3",
        "question": "What state does the TCP client reach after the 3-way handshake completes successfully in the lab?",
        "options": [
          "CLOSED",
          "SYN_SENT",
          "ESTABLISHED",
          "TIME_WAIT"
        ],
        "correctAnswer": 2,
        "answerIdx": 2,
        "difficulty": "easy",
        "explanation": "Once the final ACK is received, the connection state changes from SYN_SENT to ESTABLISHED."
      },
      {
        "id": "computer-networks-tcp-udp-4",
        "question": "What does the server send back to the client for every received TCP data segment?",
        "options": [
          "A fresh SYN request",
          "An ACK (acknowledgment receipt)",
          "A choke packet",
          "A new port assignment"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "TCP is reliable: for every segment received (#1, #2, #3), the server responds with a matching ACK receipt."
      },
      {
        "id": "computer-networks-tcp-udp-5",
        "question": "In the TCP lost packet step of the lab, how does TCP recover when Segment #4 is lost in transit?",
        "options": [
          "The connection drops permanently",
          "The sender detects a timeout because no ACK arrived and retransmits Segment #4",
          "The receiver estimates the lost data using artificial intelligence",
          "UDP takes over the transmission"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "When Segment #4 is lost, no ACK arrives. The sender times out and automatically retransmits \"#4 again\", ensuring zero data loss."
      },
      {
        "id": "computer-networks-tcp-udp-6",
        "question": "What happens in the UDP lane when Datagram #2 is lost during transmission?",
        "options": [
          "The sender waits for a timeout and retransmits it",
          "Nobody notices or requests a retransmission; it is lost forever",
          "The server sends a NACK asking for datagram 2",
          "The entire stream pauses until the packet is recovered"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "UDP has no acknowledgment mechanism. If Datagram 2 is lost, the sender never knows and the receiver simply skips it."
      },
      {
        "id": "computer-networks-tcp-udp-7",
        "question": "What is the main operational difference between how IP addresses and Port numbers work in networking?",
        "options": [
          "IP addresses find the correct computer; Port numbers find the specific application on that computer",
          "IP addresses are used for UDP; Port numbers are used only for TCP",
          "IP addresses change every second; Port numbers never change",
          "Port numbers are physical cables; IP addresses are software"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The IP address delivers data to the correct host machine, whereas the port number delivers it to the specific running application process."
      },
      {
        "id": "computer-networks-tcp-udp-8",
        "question": "Match the standard port numbers shown in the 3D lab: Port 80 and Port 53.",
        "options": [
          "Port 80 is HTTP (web); Port 53 is DNS (domain lookups)",
          "Port 80 is SMTP (email); Port 53 is HTTPS (secure web)",
          "Port 80 is SSH; Port 53 is FTP",
          "Port 80 is DNS; Port 53 is HTTP"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Port 80 is the well-known port for unencrypted HTTP web traffic, and Port 53 is used for DNS name resolution queries."
      },
      {
        "id": "computer-networks-tcp-udp-9",
        "question": "Which application types shown in the lab are best suited for TCP?",
        "options": [
          "Live video calls and fast-paced multiplayer games",
          "Web browsing (HTTP/HTTPS), email (SMTP), and file downloads where every byte must arrive intact",
          "Broadcasting radio over FM frequencies",
          "Unencrypted wireless sensors"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "TCP guarantees reliable byte-for-byte delivery, making it ideal for web pages, file downloads, and email."
      },
      {
        "id": "computer-networks-tcp-udp-10",
        "question": "Which application types benefit most from UDP rather than TCP?",
        "options": [
          "Bank transfers and database backups",
          "Online video calls, multiplayer gaming, and DNS where speed and low latency matter more than perfect retransmission",
          "Operating system software updates",
          "Encrypted email attachments"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "UDP eliminates handshake delay and retransmissions, making it ideal for real-time video, audio, and gaming where low latency is critical."
      },
      {
        "id": "computer-networks-tcp-udp-11",
        "question": "What are the header sizes of UDP compared to TCP?",
        "options": [
          "UDP is fixed at 8 bytes; TCP has a minimum of 20 bytes",
          "UDP is 64 bytes; TCP is 8 bytes",
          "Both headers are always exactly 16 bytes",
          "UDP has no header at all"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "The lightweight UDP header is fixed at 8 bytes, whereas TCP requires at least 20 bytes to manage sequence numbers, ACKs, flags, and window sizes."
      },
      {
        "id": "computer-networks-tcp-udp-12",
        "question": "What port numbers are demonstrated in the lab for HTTPS (secure web) and SMTP (email)?",
        "options": [
          "Port 22 and Port 23",
          "Port 443 for HTTPS and Port 25 for SMTP",
          "Port 110 and Port 995",
          "Port 8080 and Port 3000"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "In Step 6 of the lab, HTTPS maps to port 443 and email (SMTP) maps to port 25 on the server."
      },
      {
        "id": "computer-networks-tcp-udp-13",
        "question": "What button in the TCP vs UDP 3D lab allows learners to re-run the current step's animation?",
        "options": [
          "The Replay button",
          "The Topology button",
          "The New Costs button",
          "The Burst button"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Clicking the 'Replay' button reruns the active packet animation for that step so learners can observe the packet flow again."
      },
      {
        "id": "computer-networks-tcp-udp-14",
        "question": "Why does TCP experience higher latency compared to UDP during initial packet delivery?",
        "options": [
          "TCP packets travel at half the speed of light",
          "TCP requires a round-trip 3-way handshake before any application data can be transmitted",
          "TCP requires a physical operator to confirm delivery",
          "TCP encrypts data with 4096-bit keys by default"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "TCP must establish connection state with a full three-way handshake (SYN, SYN+ACK, ACK) before user payload data can be sent."
      }
    ],
    "routing": [
      {
        "id": "computer-networks-routing-1",
        "question": "What real-life comparison is used in the Routing Algorithms lab?",
        "options": [
          "A road map with travel times / distances",
          "A post office sorting letters",
          "A water pipe network with valves",
          "A library catalog shelf"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The lab introduces routing algorithms as reading a road map where roads have travel times and routers pick the quickest path."
      },
      {
        "id": "computer-networks-routing-2",
        "question": "In the 3D Routing Algorithms lab, what are the names of the six routers shown on the map?",
        "options": [
          "Routers 1 to 6",
          "Routers A to F",
          "Routers Alpha to Zeta",
          "Routers North, South, East, West, Central, Gateway"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "The 3D scene displays six router nodes labeled A, B, C, D, E, and F."
      },
      {
        "id": "computer-networks-routing-3",
        "question": "What do the numbers displayed on the links between routers represent in the lab?",
        "options": [
          "The router IP addresses",
          "The link costs (such as travel time, delay, or distance)",
          "The number of cables installed",
          "The CPU temperature of the routers"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "Each link displays a numerical cost representing physical metrics like latency, distance, or bandwidth."
      },
      {
        "id": "computer-networks-routing-4",
        "question": "What algorithm is used to find the shortest path from Router A to Router F in the 3D lab?",
        "options": [
          "Binary Search",
          "Dijkstra's shortest path algorithm",
          "Bubble Sort",
          "QuickSelect"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "Dijkstra's shortest path algorithm calculates the lowest-cost path from source Router A to destination Router F."
      },
      {
        "id": "computer-networks-routing-5",
        "question": "What is the optimal shortest path and total cost from Router A to Router F in the initial map configuration?",
        "options": [
          "A > C > E > F with cost 13",
          "A > B > D > F with total cost 9",
          "A > B > C > D > F with cost 15",
          "A directly to F with cost 20"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "In Step 3, the shortest path found is A > B > D > F with total cost 9 (A-B=2, B-D=4, D-F=3)."
      },
      {
        "id": "computer-networks-routing-6",
        "question": "How does Dijkstra's algorithm explore the network step by step in the lab?",
        "options": [
          "It randomly picks routers until it finds the destination",
          "It starts at A (cost 0), repeatedly visits the closest unvisited router, and updates (relaxes) its neighbors' distances",
          "It sends broadcast pings to all routers simultaneously",
          "It sorts all routers by name alphabetically"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Dijkstra's algorithm begins at source A with distance 0, greedily marks the lowest-distance unvisited node, and relaxes the distances to its adjacent neighbors."
      },
      {
        "id": "computer-networks-routing-7",
        "question": "In the \"A link fails\" step of the 3D lab, what happens when link B-D fails (highlighted in red)?",
        "options": [
          "Router A crashes and shuts down",
          "Routers recalculate using Dijkstra to find a new best path, adapting automatically",
          "Packets stop traveling completely until the user reboots the computer",
          "Link costs are reset to zero"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "When link B-D is cut, the routers rerun Dijkstra to dynamically determine an alternate lowest-cost path to F."
      },
      {
        "id": "computer-networks-routing-8",
        "question": "How does Distance Vector routing (such as RIP) share routing knowledge across routers?",
        "options": [
          "Every router broadcasts satellite coordinates",
          "Each router periodically shares its own distance table with immediate neighbors over successive rounds",
          "A single central server computes all routes and pushes them down",
          "Routers only communicate when a user types a command"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "In Distance Vector routing (RIP), routers iteratively exchange their distance estimates with adjacent neighbors until all tables converge."
      },
      {
        "id": "computer-networks-routing-9",
        "question": "In the Autonomous Systems step of the lab, what protocol is used to route packets between different Autonomous Systems (AS 1 and AS 2)?",
        "options": [
          "RIP",
          "OSPF",
          "BGP (Border Gateway Protocol)",
          "ARP"
        ],
        "correctAnswer": 2,
        "answerIdx": 2,
        "difficulty": "medium",
        "explanation": "Exterior routing between Autonomous Systems uses Border Gateway Protocol (BGP)."
      },
      {
        "id": "computer-networks-routing-10",
        "question": "Which routing protocol is typically used inside an Autonomous System (Interior Gateway Protocol) in modern networks?",
        "options": [
          "BGP",
          "OSPF (Open Shortest Path First)",
          "DNS",
          "HTTP"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "Inside an Autonomous System, link-state protocols like OSPF (or RIP) manage interior routing."
      },
      {
        "id": "computer-networks-routing-11",
        "question": "How can the learner test dynamic rerouting on custom paths in the 3D Routing scene?",
        "options": [
          "By clicking on any link to cut or repair it, or clicking 'Send packet' to see the packet follow the new shortest path",
          "By pressing the spacebar to drop packets",
          "By dragging routers into different positions",
          "By zooming in until the screen resets"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Learners can click any link in the 3D graph to toggle it cut (red) or repaired, and click 'Send packet' to watch packets follow the recomputed path."
      },
      {
        "id": "computer-networks-routing-12",
        "question": "What does the \"New costs\" button do in the 3D Routing Algorithms lab?",
        "options": [
          "Loads an alternate set of link costs between routers so learners can see new shortest paths calculated",
          "Charges money to the user's account",
          "Deletes all routing tables",
          "Changes the names of the routers"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "The 'New costs' button toggles to an alternate cost configuration, triggering fresh Dijkstra computations and different optimal routes."
      },
      {
        "id": "computer-networks-routing-13",
        "question": "Why does Distance Vector (RIP) take multiple rounds to converge, as shown in the on-screen display box?",
        "options": [
          "Because each router only learns about more distant nodes as its immediate neighbors pass along their updated tables",
          "Because routers must wait for nighttime to communicate",
          "Because RIP packets are limited to 1 byte per second",
          "Because cables can only transmit one bit per minute"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Knowledge ripples across the network hop by hop: in Round 1 a router only knows its neighbors; by Round 3 distant path costs have propagated."
      },
      {
        "id": "computer-networks-routing-14",
        "question": "If all paths between Router A and Router F are severed by cutting links, what message does the 3D lab display?",
        "options": [
          "\"System rebooting...\"",
          "\"No path from A to F! The network is split.\"",
          "\"Error 404: Page not found\"",
          "\"Packet delivered successfully\""
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "When no valid path exists to router F, the lab alerts the learner: 'No path from A to F! The network is split.'"
      }
    ],
    "congestion-control": [
      {
        "id": "computer-networks-congestion-control-1",
        "question": "What real-life comparison is used in the Congestion Control 3D lab?",
        "options": [
          "A traffic jam and the tools used to prevent it",
          "An airplane runway during bad weather",
          "A supermarket checkout line",
          "A library book return slot"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The lab introduces network congestion as a highway traffic jam where too many cars enter at once, and explores tools to prevent gridlock."
      },
      {
        "id": "computer-networks-congestion-control-2",
        "question": "What causes congestion in the initial problem demonstration of the 3D lab?",
        "options": [
          "The sender transmits 4 packets per tick, but the router can only process 2 packets per tick, causing the queue to overflow and drop packets",
          "The cables are unplugged",
          "The receiver has powered down",
          "A hacker intercepted the transmission"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "When arrival rate (4 packets/tick) exceeds processing rate (2 packets/tick), queue buffers fill up until packets are discarded."
      },
      {
        "id": "computer-networks-congestion-control-3",
        "question": "In the 3D lab, what maximum queue capacity causes the router buffer to overflow and discard excess packets?",
        "options": [
          "3 packets",
          "8 packets",
          "50 packets",
          "1000 packets"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "In Step 1 of the lab, the router queue buffer holds a maximum of 8 packets before overflowing and dropping newly arriving packets."
      },
      {
        "id": "computer-networks-congestion-control-4",
        "question": "How does the Leaky Bucket algorithm manage outgoing packet flow?",
        "options": [
          "It releases packets in unpredictable bursts",
          "It smooths traffic into a steady, constant output rate (like water dripping from a hole in a bucket), spilling excess packets when full",
          "It doubles the speed whenever the buffer fills",
          "It halts all traffic permanently"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "A Leaky Bucket acts as a strict traffic shaper: bursts are held in a buffer and released at a constant, steady drain rate."
      },
      {
        "id": "computer-networks-congestion-control-5",
        "question": "How does the Token Bucket algorithm differ from the Leaky Bucket algorithm?",
        "options": [
          "Token Bucket never drops packets under any condition",
          "Token Bucket accumulates tokens at a steady rate, allowing high-speed bursts whenever accumulated tokens are available",
          "Token Bucket only operates on wireless connections",
          "Token Bucket does not use any memory buffers"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Unlike Leaky Bucket which forces constant speed, Token Bucket stores tokens at a fixed rate and allows bursts of traffic as long as tokens are available."
      },
      {
        "id": "computer-networks-congestion-control-6",
        "question": "What is a \"Choke Packet\" as demonstrated in the 3D lab?",
        "options": [
          "A packet that permanently disables a computer",
          "A warning packet sent by a congested router back to the sender telling it to cut its transmission rate in half",
          "A packet with corrupted checksum headers",
          "A token that gives priority to VIP traffic"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "A choke packet is an explicit feedback signal sent by a congested intermediate router instructing the source to throttle its transmission rate."
      },
      {
        "id": "computer-networks-congestion-control-7",
        "question": "In the lab simulation, when does the router emit a red Choke Packet back to the sender?",
        "options": [
          "When the router queue length reaches 5 or more packets",
          "Only when the queue is completely empty",
          "Every 60 seconds regardless of traffic",
          "When the user clicks the Reset button"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In Step 4 of the lab, as soon as the router queue reaches 5 packets, a red choke packet is fired back to the sender to halve its transmission rate."
      },
      {
        "id": "computer-networks-congestion-control-8",
        "question": "What does AIMD stand for in TCP congestion control?",
        "options": [
          "Adaptive Internet Monitoring Device",
          "Additive Increase, Multiplicative Decrease",
          "Asynchronous Input, Multiple Delivery",
          "Automated IP Multiplexing Domain"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "AIMD stands for Additive Increase, Multiplicative Decrease, the core rate-adjustment algorithm in TCP."
      },
      {
        "id": "computer-networks-congestion-control-9",
        "question": "How does the TCP window size behave during the AIMD cycle shown in the 3D lab?",
        "options": [
          "It stays at a constant flat line throughout transmission",
          "It increases gradually (+1 each round trip), and immediately halves when packet loss occurs, producing a distinctive sawtooth waveform",
          "It doubles continuously until the computer crashes",
          "It alternates randomly between 0 and 100"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "AIMD increases the congestion window linearly (+1 per RTT) while probing for bandwidth, and cuts it in half when packet loss occurs, creating a sawtooth pattern."
      },
      {
        "id": "computer-networks-congestion-control-10",
        "question": "What occurs during TCP's initial \"Slow Start\" phase before entering congestion avoidance?",
        "options": [
          "The sender transmits 1 packet every hour",
          "The congestion window (cwnd) doubles every round-trip time (RTT), growing exponentially",
          "The router rejects all connections",
          "The sender requires manual user authorization for each packet"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "Despite its name, Slow Start rapidly ramps up transmission by doubling the congestion window each round-trip time until reaching a threshold."
      },
      {
        "id": "computer-networks-congestion-control-11",
        "question": "What interactive button in the 3D Congestion Control lab allows the learner to trigger an immediate traffic surge?",
        "options": [
          "The 'Burst!' button",
          "The 'Topology' button",
          "The 'New Bits' button",
          "The 'Cut Link' button"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Learners can click the 'Burst!' button to inject sudden bursts of packets and observe how queue buffers and traffic shapers respond."
      },
      {
        "id": "computer-networks-congestion-control-12",
        "question": "What is the fundamental difference between Flow Control and Congestion Control?",
        "options": [
          "Flow control prevents a sender from overwhelming a single receiver; Congestion control prevents senders from overwhelming intermediate routers and network links",
          "Flow control is handled by routers; Congestion control is handled by the physical cable",
          "Flow control applies only to UDP; Congestion control applies only to Ethernet",
          "There is no difference; they are identical mechanisms"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Flow control protects the destination host buffer from overflow, whereas Congestion control protects intermediate network routers and links from collapse."
      },
      {
        "id": "computer-networks-congestion-control-13",
        "question": "Why does the AIMD sawtooth pattern achieve fairness and efficiency when multiple TCP senders share a bottleneck link?",
        "options": [
          "Because additive increase probes gently for spare bandwidth, while multiplicative decrease backs off rapidly to clear congestion without causing collapse",
          "Because routers prioritize older connections over newer ones",
          "Because it forces all senders to use UDP datagrams",
          "Because it removes the router's queue buffer completely"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Gentle linear probing (+1) discovers extra capacity without sudden spikes, while rapid backoff (/2) quickly relieves shared buffer strain and converges to fair bandwidth sharing."
      },
      {
        "id": "computer-networks-congestion-control-14",
        "question": "In the 3D lab's AIMD simulation, how does the sender react when a packet drop is detected?",
        "options": [
          "The sender halves its congestion window and resumes additive increase",
          "The sender restarts the computer",
          "The sender switches from TCP to UDP",
          "The sender doubles its window to push past the drop"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Upon detecting packet loss (drop), the sender cuts its congestion window in half and returns to adding +1 packet per round-trip time."
      }
    ]
  },
  "operating-systems": {
    "user-kernel-mode": [
      {
        "id": "operating-systems-user-kernel-mode-1",
        "question": "What is the primary reason operating systems and CPUs enforce dual execution modes (User Mode and Kernel Mode)?",
        "options": [
          "To speed up the GPU clock frequency during gaming.",
          "To protect the operating system and hardware from faulty or malicious user applications.",
          "To allow computer monitors to display multiple resolution profiles.",
          "To reduce electrical power consumption on battery-powered laptops."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "Dual modes protect system stability and security. User programs run with restricted privileges so a bug or exploit in an app cannot crash the OS, modify kernel memory, or tamper with other programs."
      },
      {
        "id": "operating-systems-user-kernel-mode-2",
        "question": "In dual-mode CPUs, which mode bit value typically designates Kernel Mode?",
        "options": [
          "Mode bit 0",
          "Mode bit 1",
          "Mode bit 255",
          "Mode bit -1"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "By convention in x86 and modern architectures, mode bit 0 represents privileged Kernel Mode (Ring 0), while mode bit 1 represents restricted User Mode (Ring 3)."
      },
      {
        "id": "operating-systems-user-kernel-mode-3",
        "question": "When an application in User Mode attempts to access hardware (such as reading a disk cylinder) directly, what happens?",
        "options": [
          "The CPU immediately allows the operation with reduced bandwidth.",
          "The CPU hardware blocks the access, raises an exception, and denies permission.",
          "The computer automatically restarts into safe mode.",
          "The disk drive formats itself to prevent corruption."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "User mode code lacks the hardware privileges to execute direct I/O instructions. If attempted, the CPU raises an illegal instruction or protection fault and blocks the operation."
      },
      {
        "id": "operating-systems-user-kernel-mode-4",
        "question": "How does a user-mode program legitimately request the operating system to perform a privileged action like reading a file?",
        "options": [
          "By writing directly to physical CPU registers.",
          "By making a polite System Call (e.g. read()).",
          "By disabling CPU clock interrupts.",
          "By altering the BIOS boot sequence."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "Applications make system calls (like read(), write(), open()). This requests the kernel to execute the hardware access safely on the application's behalf."
      },
      {
        "id": "operating-systems-user-kernel-mode-5",
        "question": "What hardware mechanism transitions the CPU from User Mode to Kernel Mode during a system call?",
        "options": [
          "A TRAP (software interrupt)",
          "A thermal sensor cutoff",
          "A network packet broadcast",
          "A memory page leak"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "A TRAP is a software interrupt triggered by an instruction (such as 'syscall' or 'int 0x80') that switches the CPU mode bit to kernel mode and vectors execution to a predefined kernel entry point."
      },
      {
        "id": "operating-systems-user-kernel-mode-6",
        "question": "In the bank analogy presented in the simulation, who represents the OS Kernel?",
        "options": [
          "The visitor in the lobby waiting to deposit money.",
          "The bank teller/clerk who unlocks the security vault to fetch documents.",
          "The security camera recording the parking lot.",
          "The cleaning crew washing windows after hours."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "In the bank analogy, user applications are customers in the public lobby, system calls are order slips, the kernel is the trusted clerk/teller with vault keys, and hardware is the locked vault."
      },
      {
        "id": "operating-systems-user-kernel-mode-7",
        "question": "What happens to the CPU mode after the kernel finishes reading the requested data from disk for a user program?",
        "options": [
          "The CPU remains permanently in kernel mode until reboot.",
          "The CPU returns the data and switches back to User Mode (mode bit 1).",
          "The CPU enters sleep mode for 5 seconds.",
          "The CPU spawns a new motherboard BIOS thread."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Once the kernel finishes the privileged task and copies the data into the application's buffer, it executes a return-from-trap instruction, switching the CPU back to User Mode."
      },
      {
        "id": "operating-systems-user-kernel-mode-8",
        "question": "Which of the following is considered a privileged instruction that CANNOT be executed in User Mode?",
        "options": [
          "Adding two numbers in CPU registers (ADD R1, R2)",
          "Halting the CPU (HLT) or directly configuring device I/O ports",
          "Calling a local in-memory math function",
          "Multiplying two floating point numbers"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Instructions that halt the processor, modify control registers, disable interrupts, or perform direct port I/O are privileged and restricted strictly to kernel mode."
      },
      {
        "id": "operating-systems-user-kernel-mode-9",
        "question": "What is the primary trade-off or cost associated with frequent system calls and mode switches?",
        "options": [
          "Decreased hard drive storage capacity.",
          "CPU execution overhead due to saving registers, context switching, and cache invalidation.",
          "Permanent damage to physical RAM transistors.",
          "Loss of network Wi-Fi connectivity."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "Each transition between user and kernel mode involves saving CPU registers, validating parameters, flushing pipelines, and switching stacks, which incurs performance overhead."
      },
      {
        "id": "operating-systems-user-kernel-mode-10",
        "question": "If an evil or buggy application gets stuck in an infinite loop in User Mode, how does the OS regain control?",
        "options": [
          "The OS cannot regain control and the computer must be unplugged.",
          "A periodic hardware timer interrupt fires, forcing a trap into the kernel scheduler.",
          "The power supply automatically lowers the motherboard voltage.",
          "The user application voluntarily surrenders its source code."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "The hardware timer regularly interrupts user-mode execution, switching the CPU to kernel mode so the scheduler can regain control and preempt uncooperative processes."
      }
    ],
    "process-states": [
      {
        "id": "operating-systems-process-states-1",
        "question": "What is the official definition of an Operating System process?",
        "options": [
          "A passive file stored on secondary storage.",
          "A program in active execution.",
          "A hardware circuit inside the power supply.",
          "A network cable transmitting data packets."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "A process is a program in execution, including its program counter, registers, memory stack, and heap."
      },
      {
        "id": "operating-systems-process-states-2",
        "question": "In the classic 5-state process model, what are the five states?",
        "options": [
          "Start, Pause, Fast, Slow, Stop",
          "New, Ready, Running, Waiting (Blocked), Terminated",
          "Input, Process, Output, Storage, Network",
          "Read, Write, Execute, Delete, Copy"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "The classic 5-state process lifecycle consists of New, Ready, Running, Waiting (Blocked), and Terminated."
      },
      {
        "id": "operating-systems-process-states-3",
        "question": "What transition moves a process from the READY state to the RUNNING state?",
        "options": [
          "Admit",
          "Dispatch by the scheduler",
          "Timer interrupt",
          "I/O completion"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "When a CPU core becomes available, the scheduler dispatches the next process from the Ready queue into the Running state."
      },
      {
        "id": "operating-systems-process-states-4",
        "question": "What happens when a running process experiences a timer interrupt (time slice expiration)?",
        "options": [
          "It is immediately terminated.",
          "It is moved back to the READY queue to wait for its next turn.",
          "It moves to the WAITING state for disk I/O.",
          "It is demoted to the NEW state."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Under preemptive scheduling, when a process exhausts its allotted time slice, a timer interrupt moves it from Running back to the Ready queue."
      },
      {
        "id": "operating-systems-process-states-5",
        "question": "When a running process initiates a file read or waits for user keyboard input, to which state does it move?",
        "options": [
          "TERMINATED",
          "WAITING (BLOCKED)",
          "READY",
          "NEW"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Because I/O is slow, the process cannot continue computing and moves to the Waiting (Blocked) state, freeing the CPU core for other tasks."
      },
      {
        "id": "operating-systems-process-states-6",
        "question": "When a waiting process's I/O operation finishes, where does the operating system place it?",
        "options": [
          "Straight back onto the CPU in the RUNNING state.",
          "Into the READY queue.",
          "Into the TERMINATED state.",
          "Back to the NEW state."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "A process never jumps directly from Waiting to Running. Once I/O completes, it joins the Ready queue to wait its turn for CPU scheduling."
      },
      {
        "id": "operating-systems-process-states-7",
        "question": "In a single-core processor system, how many processes can be in the RUNNING state at any single instant?",
        "options": [
          "At most 1",
          "Exactly 5",
          "Unlimited",
          "Zero"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "A single CPU core can only physically execute instructions for one process at any given instant."
      },
      {
        "id": "operating-systems-process-states-8",
        "question": "Which kernel data structure stores a process's PID, register values, program counter, and execution state?",
        "options": [
          "PCB (Process Control Block)",
          "MBR (Master Boot Record)",
          "FAT (File Allocation Table)",
          "TLB (Translation Lookaside Buffer)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The Process Control Block (PCB) contains all bookkeeping data for a process, including process state, registers, program counter, and memory limits."
      },
      {
        "id": "operating-systems-process-states-9",
        "question": "In the bank customer analogy from the interactive simulator, what does 'taking a queue ticket and waiting in the lobby' correspond to?",
        "options": [
          "The NEW state",
          "The READY state",
          "The RUNNING state",
          "The TERMINATED state"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "Waiting in the lobby with a ticket corresponds to the Ready state: the process is ready to be served as soon as the teller (CPU) becomes available."
      },
      {
        "id": "operating-systems-process-states-10",
        "question": "What final action occurs during the transition to the TERMINATED state?",
        "options": [
          "The process is admitted into the Ready queue.",
          "The OS frees the process's allocated memory, closes open files, and cleans up its PCB.",
          "The process requests a disk I/O transfer.",
          "The process multiplies its priority score."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Upon termination, the operating system releases all physical memory, closes handles/descriptors, and deallocates the process's PCB."
      }
    ],
    "cpu-scheduling": [
      {
        "id": "operating-systems-cpu-scheduling-1",
        "question": "What is the primary purpose of the CPU scheduler in an operating system?",
        "options": [
          "To defragment the hard disk platter.",
          "To select which ready process executes on the CPU core and manage their run times.",
          "To encrypt files before saving to flash storage.",
          "To monitor motherboard cooling fan speeds."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "The CPU scheduler selects from among the processes in the Ready queue and allocates a CPU core to one of them."
      },
      {
        "id": "operating-systems-cpu-scheduling-2",
        "question": "What is the 'Convoy Effect' commonly observed in First-Come, First-Served (FCFS) scheduling?",
        "options": [
          "Multiple CPU cores executing instructions simultaneously.",
          "A long CPU-bound process holding the CPU and causing all subsequent short processes to wait a long time.",
          "Processes communicating over high-speed local network sockets.",
          "Threads synchronizing through mutual exclusion locks."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "In FCFS, when a long burst process runs first, all shorter processes are stuck waiting behind it like cars behind a slow truck, drastically worsening average waiting time."
      },
      {
        "id": "operating-systems-cpu-scheduling-3",
        "question": "Which scheduling algorithm is mathematically proven to produce the minimal average waiting time for a given set of processes?",
        "options": [
          "First-Come, First-Served (FCFS)",
          "Shortest Job First (SJF)",
          "Priority Scheduling without aging",
          "Longest Job First (LJF)"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "SJF is provably optimal because scheduling short jobs first reduces the waiting time of subsequent jobs by the greatest amount."
      },
      {
        "id": "operating-systems-cpu-scheduling-4",
        "question": "What is the main drawback or risk of the Shortest Job First (SJF) algorithm?",
        "options": [
          "It causes high context switching overhead.",
          "Long-running processes may starve if short processes keep arriving.",
          "It cannot be implemented with Gantt charts.",
          "It requires double the physical RAM."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "If short jobs continuously arrive in the Ready queue, long-running processes will continuously be deferred and may suffer starvation."
      },
      {
        "id": "operating-systems-cpu-scheduling-5",
        "question": "How does Round Robin (RR) scheduling ensure fairness among competing processes?",
        "options": [
          "By running the shortest job to completion first.",
          "By allocating each process a fixed time quantum before preempting and moving it to the back of the queue.",
          "By sorting processes alphabetically by program name.",
          "By assigning higher priority to older processes."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "Round Robin grants each process a small slice of CPU time (quantum). If incomplete when time expires, it is preempted to the back of the queue, giving every process an equal turn."
      },
      {
        "id": "operating-systems-cpu-scheduling-6",
        "question": "In Round Robin scheduling, what happens if the time quantum is chosen to be extremely large (larger than the longest job burst)?",
        "options": [
          "The system deadlocks immediately.",
          "Round Robin behaves identically to First-Come, First-Served (FCFS).",
          "The average waiting time drops to zero.",
          "Context switching overhead increases exponentially."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "If the time quantum is larger than any job's burst time, no process is ever preempted, and Round Robin degenerates into standard FCFS."
      },
      {
        "id": "operating-systems-cpu-scheduling-7",
        "question": "What is the formula used to calculate a process's Turnaround Time?",
        "options": [
          "Turnaround Time = Completion Time - Arrival Time",
          "Turnaround Time = Burst Time - Waiting Time",
          "Turnaround Time = Arrival Time + Priority",
          "Turnaround Time = Quantum * Number of Threads"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Turnaround time measures the total elapsed interval from when the process arrived to when it completed (Completion Time - Arrival Time)."
      },
      {
        "id": "operating-systems-cpu-scheduling-8",
        "question": "If a process has a Turnaround Time of 10 ms and a CPU Burst Time of 4 ms, what was its Waiting Time?",
        "options": [
          "14 ms",
          "6 ms",
          "2.5 ms",
          "40 ms"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Waiting Time = Turnaround Time - Burst Time = 10 ms - 4 ms = 6 ms."
      },
      {
        "id": "operating-systems-cpu-scheduling-9",
        "question": "In the simulation with processes P1(6), P2(3), P3(1), P4(2), why did SJF achieve an average wait time of 3.25 compared to FCFS's 5.75?",
        "options": [
          "SJF increased the CPU clock speed.",
          "SJF scheduled P3(1) and P4(2) before continuing long bursts, rapidly clearing short jobs from the waiting queue.",
          "SJF removed P1 from memory entirely.",
          "SJF doubled the size of the ready queue."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "By prioritizing smaller burst requirements, fewer processes spent long periods waiting, minimizing the aggregate waiting time."
      },
      {
        "id": "operating-systems-cpu-scheduling-10",
        "question": "What visual diagram is universally used to depict CPU scheduling decisions and timeline allocations?",
        "options": [
          "Gantt Chart",
          "Venn Diagram",
          "Entity-Relationship Diagram",
          "Scatter Plot"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "A Gantt chart illustrates the scheduling timeline, showing start and finish times for each process on the CPU."
      }
    ],
    "critical-section-mutex": [
      {
        "id": "operating-systems-critical-section-mutex-1",
        "question": "What is a 'Race Condition' in concurrent programming?",
        "options": [
          "A contest between CPU cores to see which calculates fastest.",
          "A scenario where multiple threads access shared data concurrently and the outcome depends on the order of execution.",
          "A network bandwidth test across Ethernet cables.",
          "An algorithm that accelerates graphics rendering."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "A race condition occurs when concurrent threads manipulate shared data without synchronization, causing non-deterministic and buggy results."
      },
      {
        "id": "operating-systems-critical-section-mutex-2",
        "question": "What is the 'Critical Section' of a program?",
        "options": [
          "The code that runs during computer startup.",
          "The segment of code that accesses and modifies shared variables or resources.",
          "The section where comments are written.",
          "The error logging routine executed upon shutdown."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "A critical section is any piece of code that accesses shared resources (like shared memory or files) that must not be concurrently accessed by more than one thread."
      },
      {
        "id": "operating-systems-critical-section-mutex-3",
        "question": "In the interactive counter demonstration (counter starts at 5), what happened when Threads A and B ran WITHOUT a lock?",
        "options": [
          "The counter correctly reached 7.",
          "Both threads read 5, computed 6, and wrote 6 back, resulting in a lost update.",
          "The computer restarted automatically.",
          "The counter overflowed to 65535."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Because both threads read 5 before either wrote back their update, both incremented 5 to 6, resulting in a lost update where counter became 6 instead of 7."
      },
      {
        "id": "operating-systems-critical-section-mutex-4",
        "question": "What does 'Mutual Exclusion' guarantee in concurrency control?",
        "options": [
          "Only one thread at a time can execute inside the critical section.",
          "All threads are terminated when an error occurs.",
          "Threads must execute on different computers.",
          "Threads share memory without any restrictions."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Mutual exclusion guarantees that if one thread is executing in its critical section, no other thread is allowed into that critical section."
      },
      {
        "id": "operating-systems-critical-section-mutex-5",
        "question": "How does a Mutex (mutual exclusion lock) solve the lost update problem?",
        "options": [
          "It doubles the amount of RAM.",
          "It acts like a key: Thread A acquires the lock, enters alone, updates to 6, and only then releases the key for Thread B to update to 7.",
          "It runs all threads backwards in time.",
          "It deletes the counter variable."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "A mutex serializes critical section access. Thread B is forced to wait outside until Thread A finishes and releases the lock, ensuring both increments succeed."
      },
      {
        "id": "operating-systems-critical-section-mutex-6",
        "question": "Which of the following is NOT one of the three classic requirements for a valid Critical Section solution?",
        "options": [
          "Mutual Exclusion",
          "Progress",
          "Bounded Waiting",
          "Unlimited Recursion"
        ],
        "correctAnswer": 3,
        "answerIdx": 3,
        "difficulty": "hard",
        "explanation": "The three fundamental requirements for solving the critical-section problem are Mutual Exclusion, Progress, and Bounded Waiting."
      },
      {
        "id": "operating-systems-critical-section-mutex-7",
        "question": "What is a 'Semaphore' in operating systems?",
        "options": [
          "A synchronization tool consisting of an integer value accessed only through atomic wait() and signal() operations.",
          "A physical light bulb on the computer chassis.",
          "A network cable termination plug.",
          "A CPU instruction that clears cache lines."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "A semaphore is an integer variable used for synchronization, modified only by atomic wait() (P) and signal() (V) operations."
      },
      {
        "id": "operating-systems-critical-section-mutex-8",
        "question": "What is the difference between a Binary Semaphore and a Counting Semaphore?",
        "options": [
          "A binary semaphore has values 0 or 1 (like a mutex), while a counting semaphore can range over an unrestricted domain to manage multiple resource instances.",
          "Binary semaphores are written in assembly; counting semaphores are written in Python.",
          "Counting semaphores are only used for network packets.",
          "Binary semaphores do not require CPU memory."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Binary semaphores restrict access to a single entity (0 or 1), whereas counting semaphores manage access to a resource pool with multiple identical units."
      },
      {
        "id": "operating-systems-critical-section-mutex-9",
        "question": "What dangerous condition can arise if two threads acquire multiple locks in opposite orders (e.g. Thread 1 locks A then B, while Thread 2 locks B then A)?",
        "options": [
          "Deadlock",
          "Buffer underflow",
          "Paging fault",
          "Cache acceleration"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Acquiring locks in conflicting orders creates circular wait dependencies, which can deadlock both threads permanently."
      },
      {
        "id": "operating-systems-critical-section-mutex-10",
        "question": "In the bathroom key analogy, what represents a thread that is waiting for the mutex lock?",
        "options": [
          "A person waiting in line outside the bathroom door until the occupant returns the key.",
          "A person walking out of the building.",
          "A person turning off the lights.",
          "The bathroom mirror."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The locked bathroom represents the critical section; a person waiting outside represents a contending thread blocked until the lock holder releases the key."
      }
    ],
    "deadlocks": [
      {
        "id": "operating-systems-deadlocks-1",
        "question": "What is a 'Deadlock' in an operating system?",
        "options": [
          "A state where processes wait indefinitely for resources held by each other, causing execution to permanently freeze.",
          "A broken CPU cooling fan.",
          "A corrupted master boot sector on a flash drive.",
          "A forgotten user password on the login screen."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "A deadlock occurs when two or more processes are unable to proceed because each is waiting for the other to release a resource."
      },
      {
        "id": "operating-systems-deadlocks-2",
        "question": "How many Coffman conditions must hold simultaneously for a deadlock to occur?",
        "options": [
          "Any 1 condition",
          "Exactly 2 conditions",
          "All 4 conditions",
          "None; deadlocks happen randomly"
        ],
        "correctAnswer": 2,
        "answerIdx": 2,
        "difficulty": "easy",
        "explanation": "Deadlock can arise if and only if all four Coffman conditions (Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait) hold simultaneously."
      },
      {
        "id": "operating-systems-deadlocks-3",
        "question": "Which of the following is NOT one of the four Coffman conditions?",
        "options": [
          "Mutual Exclusion",
          "Hold and Wait",
          "Preemption",
          "Circular Wait"
        ],
        "correctAnswer": 2,
        "answerIdx": 2,
        "difficulty": "medium",
        "explanation": "No Preemption is the necessary condition. If resources CAN be preempted (forcibly revoked), deadlocks can be broken easily."
      },
      {
        "id": "operating-systems-deadlocks-4",
        "question": "In a Resource Allocation Graph (RAG), what does a directed edge from Resource R to Process P signify?",
        "options": [
          "Process P is waiting for Resource R.",
          "Resource R is currently allocated (held by) Process P.",
          "Process P is terminating Resource R.",
          "Resource R is broken."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "An edge from R -> P is an assignment edge indicating that resource R is currently held by process P."
      },
      {
        "id": "operating-systems-deadlocks-5",
        "question": "In a Resource Allocation Graph (RAG), what does a directed edge from Process P to Resource R signify?",
        "options": [
          "Process P has requested and is currently waiting for Resource R.",
          "Process P owns Resource R.",
          "Resource R has been deleted.",
          "Process P is compiling Resource R."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "An edge from P -> R is a request edge indicating that process P is currently blocked, waiting to acquire resource R."
      },
      {
        "id": "operating-systems-deadlocks-6",
        "question": "In the narrow bridge analogy from the simulation, why did deadlock occur?",
        "options": [
          "Two cars drove from opposite directions onto a single-lane bridge and neither could move forward or would reverse.",
          "The bridge collapsed into the water.",
          "Both cars ran out of fuel simultaneously.",
          "The bridge was closed for maintenance."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Each car holds half the single-lane bridge while requiring the half held by the oncoming car, creating a circular wait where neither can proceed."
      },
      {
        "id": "operating-systems-deadlocks-7",
        "question": "How does the 'Resource Ordering' technique prevent deadlocks?",
        "options": [
          "It assigns a global numeric order to all resources and requires processes to request resources only in strictly increasing order, preventing circular wait.",
          "It randomly deletes processes.",
          "It doubles the number of printers and scanners.",
          "It restarts the computer every 10 minutes."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Enforcing a global linear order on resource acquisitions breaks the Circular Wait condition, making deadlocks mathematically impossible."
      },
      {
        "id": "operating-systems-deadlocks-8",
        "question": "Which classic algorithm is used for Deadlock Avoidance by dynamically evaluating resource safety states?",
        "options": [
          "Banker's Algorithm",
          "Dijkstra's Shortest Path Algorithm",
          "Binary Search Algorithm",
          "Quicksort Algorithm"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Dijkstra's Banker's Algorithm avoids deadlocks by simulating the allocation of predetermined maximum claims and ensuring the system never enters an unsafe state."
      },
      {
        "id": "operating-systems-deadlocks-9",
        "question": "What is the primary difference between Deadlock Prevention and Deadlock Avoidance?",
        "options": [
          "Prevention structurally invalidates at least one Coffman condition; Avoidance dynamically monitors resource allocations to avoid unsafe states.",
          "Prevention only works on Linux; Avoidance only works on Windows.",
          "Prevention requires hardware reboot; Avoidance runs in user space.",
          "There is no difference; they are synonyms."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Deadlock prevention imposes static rules to prevent one of the four necessary conditions, whereas deadlock avoidance dynamically monitors allocations."
      },
      {
        "id": "operating-systems-deadlocks-10",
        "question": "If a deadlock is detected in a system, what is the most common recovery strategy?",
        "options": [
          "Terminating one or more deadlocked processes to break the circular dependency cycle.",
          "Increasing CPU clock frequency.",
          "Downloading new device drivers.",
          "Formatting the secondary disk drive."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Recovery typically involves aborting one or more deadlocked processes or preempting resources until the circular cycle is resolved."
      }
    ],
    "paging-address-translation": [
      {
        "id": "operating-systems-paging-1",
        "question": "What is the primary goal of Paging in operating systems?",
        "options": [
          "To eliminate external fragmentation and allow a program's memory to be allocated non-contiguously in physical RAM.",
          "To print documents on paper pages.",
          "To speed up internet download rates.",
          "To organize folders on the desktop."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Paging permits a process's physical address space to be non-contiguous, completely eliminating external fragmentation."
      },
      {
        "id": "operating-systems-paging-2",
        "question": "In paging terminology, what are 'Pages' and 'Frames'?",
        "options": [
          "Pages are fixed-size blocks of virtual memory; Frames are fixed-size blocks of physical RAM of identical size.",
          "Pages are web pages; Frames are picture frames.",
          "Pages are disk sectors; Frames are network packets.",
          "Pages reside in CPU registers; Frames reside on flash drives."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Logical memory is divided into fixed-size chunks called Pages; physical memory is divided into equal-sized blocks called Frames."
      },
      {
        "id": "operating-systems-paging-3",
        "question": "What hardware component is responsible for translating logical memory addresses into physical RAM addresses in real-time?",
        "options": [
          "MMU (Memory Management Unit)",
          "GPU (Graphics Processing Unit)",
          "NIC (Network Interface Card)",
          "PSU (Power Supply Unit)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The Memory Management Unit (MMU) is the hardware device that maps virtual addresses to physical addresses at runtime."
      },
      {
        "id": "operating-systems-paging-4",
        "question": "A logical address generated by the CPU is divided into which two parts?",
        "options": [
          "Page Number (p) and Offset (d)",
          "Host ID and Subnet Mask",
          "Process ID and User ID",
          "Sector and Platter"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Every logical address consists of a page number (used as an index into the page table) and an offset (displacement within the page)."
      },
      {
        "id": "operating-systems-paging-5",
        "question": "Given a page size of 8 words, what are the page number and offset for logical address 21?",
        "options": [
          "Page 2, Offset 5 (since 21 / 8 = 2 with remainder 5)",
          "Page 5, Offset 2",
          "Page 21, Offset 0",
          "Page 3, Offset 3"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Page number = 21 / 8 = 2; Offset = 21 % 8 = 5."
      },
      {
        "id": "operating-systems-paging-6",
        "question": "If Page 2 maps to Frame 7 in the Page Table and the page size is 8 words, what is the physical address for logical address 21 (offset 5)?",
        "options": [
          "Physical Address = 7 * 8 + 5 = 61",
          "Physical Address = 2 * 8 + 7 = 23",
          "Physical Address = 21 + 7 = 28",
          "Physical Address = 7 * 21 = 147"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Physical Address = Frame * PageSize + Offset = 7 * 8 + 5 = 61. The offset remains identical in both logical and physical addresses."
      },
      {
        "id": "operating-systems-paging-7",
        "question": "Why does Paging completely eliminate External Fragmentation?",
        "options": [
          "Because every free frame in RAM can be assigned to any page, regardless of its physical location.",
          "Because all files are compressed before execution.",
          "Because processes are only allowed to use 1 MB of RAM.",
          "Because virtual memory is disabled when external fragmentation is detected."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Since memory is allocated in uniform, fixed-size frames, any free frame can be given to any process, eliminating external gaps."
      },
      {
        "id": "operating-systems-paging-8",
        "question": "What type of memory fragmentation can still occur in a paged system?",
        "options": [
          "Internal Fragmentation (unused memory in the last allocated page)",
          "External Fragmentation",
          "Sector Fragmentation",
          "Network Fragmentation"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Because memory is allocated in full frame increments, a process whose memory is not an exact multiple of the page size wastes unused bytes in its final frame."
      },
      {
        "id": "operating-systems-paging-9",
        "question": "What high-speed hardware cache is used to speed up page table lookups?",
        "options": [
          "TLB (Translation Lookaside Buffer)",
          "DRAM Cache",
          "Disk Buffer",
          "PCIe Bridge"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The TLB is an associative hardware cache that stores recent virtual-to-physical address translations to avoid slow memory lookups."
      },
      {
        "id": "operating-systems-paging-10",
        "question": "In the book and library shelf analogy from the simulation, what represents the Page Table?",
        "options": [
          "An index card showing which shelf slot holds each chapter.",
          "The library front door.",
          "The book's front cover art.",
          "The study table in the lobby."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The index card records where each chapter (page) is placed on the shelves (frames), acting as the page table."
      }
    ],
    "page-replacement": [
      {
        "id": "operating-systems-page-replacement-1",
        "question": "In virtual memory with demand paging, what is a 'Page Fault'?",
        "options": [
          "A hardware interrupt that occurs when a process references a page not currently resident in physical RAM.",
          "A damaged physical memory chip.",
          "A syntax error in program code.",
          "A web browser failing to load a URL."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "When an accessed page has its valid bit set to 0 (meaning it is on disk rather than in RAM), a page fault trap occurs."
      },
      {
        "id": "operating-systems-page-replacement-2",
        "question": "What happens when a 'Page Hit' occurs?",
        "options": [
          "The requested page is already resident in a physical RAM frame, allowing immediate memory access without disk I/O.",
          "The operating system crashes.",
          "A page is evicted to disk.",
          "The CPU frequency is throttled."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "A page hit means the requested data is already in RAM, so the CPU accesses it immediately without incurring disk delay."
      },
      {
        "id": "operating-systems-page-replacement-3",
        "question": "What is the primary role of a Page Replacement Algorithm?",
        "options": [
          "To decide which resident page to evict from physical memory when all frames are full and a new page must be loaded.",
          "To sort files alphabetically on disk.",
          "To compile source code into machine binaries.",
          "To distribute network packets evenly."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "When physical frames are completely occupied, the replacement algorithm chooses which page to swap out to secondary storage."
      },
      {
        "id": "operating-systems-page-replacement-4",
        "question": "How does the First-In, First-Out (FIFO) page replacement algorithm select a page for eviction?",
        "options": [
          "It evicts the page that has resided in physical memory for the longest duration.",
          "It evicts the page accessed most recently.",
          "It randomly selects a page.",
          "It evicts the largest page."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "FIFO maintains a queue of loaded pages and replaces the oldest resident page when a new page must be loaded."
      },
      {
        "id": "operating-systems-page-replacement-5",
        "question": "What is 'Belady's Anomaly', which can occur in FIFO page replacement?",
        "options": [
          "Allocating more physical frames to a process can counterintuitively cause MORE page faults for certain reference strings.",
          "RAM usage dropping to zero.",
          "The CPU running twice as fast with fewer frames.",
          "Programs completing before their arrival time."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Belady's Anomaly shows that for certain reference patterns, increasing the number of memory frames under FIFO increases the page fault count."
      },
      {
        "id": "operating-systems-page-replacement-6",
        "question": "How does the Least Recently Used (LRU) algorithm choose which page to evict?",
        "options": [
          "It evicts the page that has not been referenced for the longest period of time.",
          "It evicts the page that was loaded first.",
          "It evicts the page with the highest memory address.",
          "It evicts the page that was accessed most recently."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "LRU looks backward in time and evicts the page that has gone unreferenced for the longest time, exploiting temporal locality."
      },
      {
        "id": "operating-systems-page-replacement-7",
        "question": "Why does LRU generally perform better than FIFO in real-world computer systems?",
        "options": [
          "Because real programs exhibit 'Locality of Reference'—recently accessed data is very likely to be accessed again soon.",
          "Because LRU bypasses the MMU.",
          "Because LRU stores pages on the GPU.",
          "Because FIFO requires internet access."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Locality of reference dictates that code and data accessed recently will be referenced again, making LRU a strong heuristic."
      },
      {
        "id": "operating-systems-page-replacement-8",
        "question": "In the simulation of 12 requests [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3] across 3 frames, why did LRU achieve fewer page faults than FIFO?",
        "options": [
          "LRU kept active, frequently referenced pages (like 0 and 3) in memory instead of blindly evicting them based on age.",
          "LRU doubled the number of physical frames.",
          "LRU deleted the number 7.",
          "FIFO skipped page 4."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "FIFO evicts pages purely by arrival order, often evicting active pages like 0, while LRU retains recently referenced pages."
      },
      {
        "id": "operating-systems-page-replacement-9",
        "question": "What is the theoretical Optimal Page Replacement (OPT) algorithm?",
        "options": [
          "An algorithm that replaces the page that will not be used for the longest period of time in the future.",
          "An algorithm that never evicts any pages.",
          "An algorithm implemented in all modern hardware chips.",
          "An algorithm that runs on quantum computers only."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "OPT looks forward in time and evicts the page that will not be needed for the longest future duration, serving as the ultimate benchmark."
      },
      {
        "id": "operating-systems-page-replacement-10",
        "question": "What severe system condition occurs when an operating system spends more time swapping pages to and from disk than executing actual code?",
        "options": [
          "Thrashing",
          "Spooling",
          "Aging",
          "Formatting"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Thrashing occurs when memory is overcommitted, causing continuous page faults and near-zero CPU execution throughput."
      }
    ],
    "disk-scheduling": [
      {
        "id": "operating-systems-disk-scheduling-1",
        "question": "What is the primary physical performance bottleneck when accessing data on a mechanical hard disk drive (HDD)?",
        "options": [
          "Seek Time (the mechanical time required to move the read/write head arm to the desired cylinder/track).",
          "The speed of light in the SATA cable.",
          "The monitor refresh rate.",
          "The color of the drive casing."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Moving a physical mechanical read/write arm between tracks (seek time) takes milliseconds, which is orders of magnitude slower than electronic RAM."
      },
      {
        "id": "operating-systems-disk-scheduling-2",
        "question": "In disk scheduling, what is 'Seek Time'?",
        "options": [
          "The time taken for the read/write head arm to travel to the requested track/cylinder.",
          "The time taken for the platter to rotate the sector under the head.",
          "The time taken to copy data into RAM.",
          "The time taken to turn on the computer."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Seek time is the mechanical duration needed to position the read/write head assembly over the specified cylinder."
      },
      {
        "id": "operating-systems-disk-scheduling-3",
        "question": "What is 'Rotational Latency' in disk performance?",
        "options": [
          "The time spent waiting for the spinning platter to rotate the desired disk sector beneath the read/write head.",
          "The time taken for the fan to cool the drive.",
          "The time spent moving the head arm between cylinders.",
          "The delay before the operating system boots."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Once the head is over the correct cylinder, rotational latency is the time spent waiting for the disk platter to spin the desired sector under the head."
      },
      {
        "id": "operating-systems-disk-scheduling-4",
        "question": "How does the First-Come, First-Served (FCFS) disk scheduling algorithm operate?",
        "options": [
          "It services disk I/O requests strictly in the order they arrived in the queue.",
          "It services requests based on file size.",
          "It always moves the head to track 0 first.",
          "It sorts requests by process priority."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "FCFS processes track requests in exact arrival sequence, which is fair but frequently results in extensive head zigzagging."
      },
      {
        "id": "operating-systems-disk-scheduling-5",
        "question": "In the simulation starting at track 50 with requests [98, 183, 37, 122, 14, 124, 65, 67], why did FCFS produce 640 tracks of total movement?",
        "options": [
          "Because the head was forced to zigzag wildly back and forth across the platters (e.g. from 183 down to 37, up to 122, down to 14).",
          "Because the disk arm broke down.",
          "Because tracks 0 and 199 were damaged.",
          "Because the head stopped at every single track on the disk."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Servicing requests in random arrival order forces the head arm to travel across the entire width of the disk repeatedly."
      },
      {
        "id": "operating-systems-disk-scheduling-6",
        "question": "How does the Shortest Seek Time First (SSTF) algorithm choose the next track request to service?",
        "options": [
          "It selects the request closest to the current head position (requiring the minimum seek distance).",
          "It selects the request with the smallest track number.",
          "It selects the request with the largest data payload.",
          "It selects the oldest request in the queue."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "SSTF greedily chooses the request closest to the current head position to minimize seek distance for that step."
      },
      {
        "id": "operating-systems-disk-scheduling-7",
        "question": "What is the primary danger or weakness of the Shortest Seek Time First (SSTF) algorithm?",
        "options": [
          "Distant track requests can starve indefinitely if new requests continually arrive close to the current head position.",
          "It generates more total head movement than FCFS.",
          "It causes physical head crashes onto the platter.",
          "It cannot be calculated on modern CPUs."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Because SSTF is greedy, requests on outer tracks may suffer starvation if an influx of requests keeps the head centered on inner tracks."
      },
      {
        "id": "operating-systems-disk-scheduling-8",
        "question": "Why is the SCAN algorithm commonly known as the 'Elevator Algorithm'?",
        "options": [
          "Because the head moves continuously in one direction servicing requests along the way until it hits the end, then reverses direction—just like a passenger elevator.",
          "Because it was invented inside an elevator manufacturing company.",
          "Because it lifts the platters physically upward.",
          "Because it operates at high elevations."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Like an elevator visiting floors in one direction before reversing, SCAN sweeps across tracks servicing requests smoothly without erratic zigzagging."
      },
      {
        "id": "operating-systems-disk-scheduling-9",
        "question": "How does the Circular SCAN (C-SCAN) algorithm differ from the standard SCAN algorithm?",
        "options": [
          "C-SCAN services requests in one direction only; when it reaches the far end, it returns directly to the beginning without servicing requests on the return trip.",
          "C-SCAN spins the platter in reverse.",
          "C-SCAN services requests in a random spiral pattern.",
          "C-SCAN requires circular magnetic tracks."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "C-SCAN provides more uniform wait times by only servicing requests during its forward pass, returning to track 0 as quickly as possible."
      },
      {
        "id": "operating-systems-disk-scheduling-10",
        "question": "Why do Solid-State Drives (SSDs) NOT rely on algorithms like SCAN or SSTF?",
        "options": [
          "SSDs contain flash memory chips with electronic random access and no moving mechanical heads or seek times.",
          "SSDs are too fast for operating systems to schedule.",
          "SSDs do not have tracks or cylinders.",
          "SSDs are only used for temporary swap files."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Because SSDs have no physical moving parts or mechanical arm delay, seek time minimization is irrelevant; flash controllers focus on wear leveling instead."
      }
    ],
    "process-management": [
      {
        "id": "operating-systems-process-states-1",
        "question": "What is the official definition of an Operating System process?",
        "options": [
          "A passive file stored on secondary storage.",
          "A program in active execution.",
          "A hardware circuit inside the power supply.",
          "A network cable transmitting data packets."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "A process is a program in execution, including its program counter, registers, memory stack, and heap."
      },
      {
        "id": "operating-systems-process-states-2",
        "question": "In the classic 5-state process model, what are the five states?",
        "options": [
          "Start, Pause, Fast, Slow, Stop",
          "New, Ready, Running, Waiting (Blocked), Terminated",
          "Input, Process, Output, Storage, Network",
          "Read, Write, Execute, Delete, Copy"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "The classic 5-state process lifecycle consists of New, Ready, Running, Waiting (Blocked), and Terminated."
      },
      {
        "id": "operating-systems-process-states-3",
        "question": "What transition moves a process from the READY state to the RUNNING state?",
        "options": [
          "Admit",
          "Dispatch by the scheduler",
          "Timer interrupt",
          "I/O completion"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "When a CPU core becomes available, the scheduler dispatches the next process from the Ready queue into the Running state."
      },
      {
        "id": "operating-systems-process-states-4",
        "question": "What happens when a running process experiences a timer interrupt (time slice expiration)?",
        "options": [
          "It is immediately terminated.",
          "It is moved back to the READY queue to wait for its next turn.",
          "It moves to the WAITING state for disk I/O.",
          "It is demoted to the NEW state."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Under preemptive scheduling, when a process exhausts its allotted time slice, a timer interrupt moves it from Running back to the Ready queue."
      },
      {
        "id": "operating-systems-process-states-5",
        "question": "When a running process initiates a file read or waits for user keyboard input, to which state does it move?",
        "options": [
          "TERMINATED",
          "WAITING (BLOCKED)",
          "READY",
          "NEW"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Because I/O is slow, the process cannot continue computing and moves to the Waiting (Blocked) state, freeing the CPU core for other tasks."
      },
      {
        "id": "operating-systems-process-states-6",
        "question": "When a waiting process's I/O operation finishes, where does the operating system place it?",
        "options": [
          "Straight back onto the CPU in the RUNNING state.",
          "Into the READY queue.",
          "Into the TERMINATED state.",
          "Back to the NEW state."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "A process never jumps directly from Waiting to Running. Once I/O completes, it joins the Ready queue to wait its turn for CPU scheduling."
      },
      {
        "id": "operating-systems-process-states-7",
        "question": "In a single-core processor system, how many processes can be in the RUNNING state at any single instant?",
        "options": [
          "At most 1",
          "Exactly 5",
          "Unlimited",
          "Zero"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "A single CPU core can only physically execute instructions for one process at any given instant."
      },
      {
        "id": "operating-systems-process-states-8",
        "question": "Which kernel data structure stores a process's PID, register values, program counter, and execution state?",
        "options": [
          "PCB (Process Control Block)",
          "MBR (Master Boot Record)",
          "FAT (File Allocation Table)",
          "TLB (Translation Lookaside Buffer)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The Process Control Block (PCB) contains all bookkeeping data for a process, including process state, registers, program counter, and memory limits."
      },
      {
        "id": "operating-systems-process-states-9",
        "question": "In the bank customer analogy from the interactive simulator, what does 'taking a queue ticket and waiting in the lobby' correspond to?",
        "options": [
          "The NEW state",
          "The READY state",
          "The RUNNING state",
          "The TERMINATED state"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "Waiting in the lobby with a ticket corresponds to the Ready state: the process is ready to be served as soon as the teller (CPU) becomes available."
      },
      {
        "id": "operating-systems-process-states-10",
        "question": "What final action occurs during the transition to the TERMINATED state?",
        "options": [
          "The process is admitted into the Ready queue.",
          "The OS frees the process's allocated memory, closes open files, and cleans up its PCB.",
          "The process requests a disk I/O transfer.",
          "The process multiplies its priority score."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Upon termination, the operating system releases all physical memory, closes handles/descriptors, and deallocates the process's PCB."
      }
    ],
    "threads": [
      {
        "id": "operating-systems-critical-section-mutex-1",
        "question": "What is a 'Race Condition' in concurrent programming?",
        "options": [
          "A contest between CPU cores to see which calculates fastest.",
          "A scenario where multiple threads access shared data concurrently and the outcome depends on the order of execution.",
          "A network bandwidth test across Ethernet cables.",
          "An algorithm that accelerates graphics rendering."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "A race condition occurs when concurrent threads manipulate shared data without synchronization, causing non-deterministic and buggy results."
      },
      {
        "id": "operating-systems-critical-section-mutex-2",
        "question": "What is the 'Critical Section' of a program?",
        "options": [
          "The code that runs during computer startup.",
          "The segment of code that accesses and modifies shared variables or resources.",
          "The section where comments are written.",
          "The error logging routine executed upon shutdown."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "A critical section is any piece of code that accesses shared resources (like shared memory or files) that must not be concurrently accessed by more than one thread."
      },
      {
        "id": "operating-systems-critical-section-mutex-3",
        "question": "In the interactive counter demonstration (counter starts at 5), what happened when Threads A and B ran WITHOUT a lock?",
        "options": [
          "The counter correctly reached 7.",
          "Both threads read 5, computed 6, and wrote 6 back, resulting in a lost update.",
          "The computer restarted automatically.",
          "The counter overflowed to 65535."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Because both threads read 5 before either wrote back their update, both incremented 5 to 6, resulting in a lost update where counter became 6 instead of 7."
      },
      {
        "id": "operating-systems-critical-section-mutex-4",
        "question": "What does 'Mutual Exclusion' guarantee in concurrency control?",
        "options": [
          "Only one thread at a time can execute inside the critical section.",
          "All threads are terminated when an error occurs.",
          "Threads must execute on different computers.",
          "Threads share memory without any restrictions."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Mutual exclusion guarantees that if one thread is executing in its critical section, no other thread is allowed into that critical section."
      },
      {
        "id": "operating-systems-critical-section-mutex-5",
        "question": "How does a Mutex (mutual exclusion lock) solve the lost update problem?",
        "options": [
          "It doubles the amount of RAM.",
          "It acts like a key: Thread A acquires the lock, enters alone, updates to 6, and only then releases the key for Thread B to update to 7.",
          "It runs all threads backwards in time.",
          "It deletes the counter variable."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "A mutex serializes critical section access. Thread B is forced to wait outside until Thread A finishes and releases the lock, ensuring both increments succeed."
      },
      {
        "id": "operating-systems-critical-section-mutex-6",
        "question": "Which of the following is NOT one of the three classic requirements for a valid Critical Section solution?",
        "options": [
          "Mutual Exclusion",
          "Progress",
          "Bounded Waiting",
          "Unlimited Recursion"
        ],
        "correctAnswer": 3,
        "answerIdx": 3,
        "difficulty": "hard",
        "explanation": "The three fundamental requirements for solving the critical-section problem are Mutual Exclusion, Progress, and Bounded Waiting."
      },
      {
        "id": "operating-systems-critical-section-mutex-7",
        "question": "What is a 'Semaphore' in operating systems?",
        "options": [
          "A synchronization tool consisting of an integer value accessed only through atomic wait() and signal() operations.",
          "A physical light bulb on the computer chassis.",
          "A network cable termination plug.",
          "A CPU instruction that clears cache lines."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "A semaphore is an integer variable used for synchronization, modified only by atomic wait() (P) and signal() (V) operations."
      },
      {
        "id": "operating-systems-critical-section-mutex-8",
        "question": "What is the difference between a Binary Semaphore and a Counting Semaphore?",
        "options": [
          "A binary semaphore has values 0 or 1 (like a mutex), while a counting semaphore can range over an unrestricted domain to manage multiple resource instances.",
          "Binary semaphores are written in assembly; counting semaphores are written in Python.",
          "Counting semaphores are only used for network packets.",
          "Binary semaphores do not require CPU memory."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Binary semaphores restrict access to a single entity (0 or 1), whereas counting semaphores manage access to a resource pool with multiple identical units."
      },
      {
        "id": "operating-systems-critical-section-mutex-9",
        "question": "What dangerous condition can arise if two threads acquire multiple locks in opposite orders (e.g. Thread 1 locks A then B, while Thread 2 locks B then A)?",
        "options": [
          "Deadlock",
          "Buffer underflow",
          "Paging fault",
          "Cache acceleration"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Acquiring locks in conflicting orders creates circular wait dependencies, which can deadlock both threads permanently."
      },
      {
        "id": "operating-systems-critical-section-mutex-10",
        "question": "In the bathroom key analogy, what represents a thread that is waiting for the mutex lock?",
        "options": [
          "A person waiting in line outside the bathroom door until the occupant returns the key.",
          "A person walking out of the building.",
          "A person turning off the lights.",
          "The bathroom mirror."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The locked bathroom represents the critical section; a person waiting outside represents a contending thread blocked until the lock holder releases the key."
      }
    ],
    "memory-management": [
      {
        "id": "operating-systems-paging-1",
        "question": "What is the primary goal of Paging in operating systems?",
        "options": [
          "To eliminate external fragmentation and allow a program's memory to be allocated non-contiguously in physical RAM.",
          "To print documents on paper pages.",
          "To speed up internet download rates.",
          "To organize folders on the desktop."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Paging permits a process's physical address space to be non-contiguous, completely eliminating external fragmentation."
      },
      {
        "id": "operating-systems-paging-2",
        "question": "In paging terminology, what are 'Pages' and 'Frames'?",
        "options": [
          "Pages are fixed-size blocks of virtual memory; Frames are fixed-size blocks of physical RAM of identical size.",
          "Pages are web pages; Frames are picture frames.",
          "Pages are disk sectors; Frames are network packets.",
          "Pages reside in CPU registers; Frames reside on flash drives."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Logical memory is divided into fixed-size chunks called Pages; physical memory is divided into equal-sized blocks called Frames."
      },
      {
        "id": "operating-systems-paging-3",
        "question": "What hardware component is responsible for translating logical memory addresses into physical RAM addresses in real-time?",
        "options": [
          "MMU (Memory Management Unit)",
          "GPU (Graphics Processing Unit)",
          "NIC (Network Interface Card)",
          "PSU (Power Supply Unit)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The Memory Management Unit (MMU) is the hardware device that maps virtual addresses to physical addresses at runtime."
      },
      {
        "id": "operating-systems-paging-4",
        "question": "A logical address generated by the CPU is divided into which two parts?",
        "options": [
          "Page Number (p) and Offset (d)",
          "Host ID and Subnet Mask",
          "Process ID and User ID",
          "Sector and Platter"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Every logical address consists of a page number (used as an index into the page table) and an offset (displacement within the page)."
      },
      {
        "id": "operating-systems-paging-5",
        "question": "Given a page size of 8 words, what are the page number and offset for logical address 21?",
        "options": [
          "Page 2, Offset 5 (since 21 / 8 = 2 with remainder 5)",
          "Page 5, Offset 2",
          "Page 21, Offset 0",
          "Page 3, Offset 3"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Page number = 21 / 8 = 2; Offset = 21 % 8 = 5."
      },
      {
        "id": "operating-systems-paging-6",
        "question": "If Page 2 maps to Frame 7 in the Page Table and the page size is 8 words, what is the physical address for logical address 21 (offset 5)?",
        "options": [
          "Physical Address = 7 * 8 + 5 = 61",
          "Physical Address = 2 * 8 + 7 = 23",
          "Physical Address = 21 + 7 = 28",
          "Physical Address = 7 * 21 = 147"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Physical Address = Frame * PageSize + Offset = 7 * 8 + 5 = 61. The offset remains identical in both logical and physical addresses."
      },
      {
        "id": "operating-systems-paging-7",
        "question": "Why does Paging completely eliminate External Fragmentation?",
        "options": [
          "Because every free frame in RAM can be assigned to any page, regardless of its physical location.",
          "Because all files are compressed before execution.",
          "Because processes are only allowed to use 1 MB of RAM.",
          "Because virtual memory is disabled when external fragmentation is detected."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Since memory is allocated in uniform, fixed-size frames, any free frame can be given to any process, eliminating external gaps."
      },
      {
        "id": "operating-systems-paging-8",
        "question": "What type of memory fragmentation can still occur in a paged system?",
        "options": [
          "Internal Fragmentation (unused memory in the last allocated page)",
          "External Fragmentation",
          "Sector Fragmentation",
          "Network Fragmentation"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Because memory is allocated in full frame increments, a process whose memory is not an exact multiple of the page size wastes unused bytes in its final frame."
      },
      {
        "id": "operating-systems-paging-9",
        "question": "What high-speed hardware cache is used to speed up page table lookups?",
        "options": [
          "TLB (Translation Lookaside Buffer)",
          "DRAM Cache",
          "Disk Buffer",
          "PCIe Bridge"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The TLB is an associative hardware cache that stores recent virtual-to-physical address translations to avoid slow memory lookups."
      },
      {
        "id": "operating-systems-paging-10",
        "question": "In the book and library shelf analogy from the simulation, what represents the Page Table?",
        "options": [
          "An index card showing which shelf slot holds each chapter.",
          "The library front door.",
          "The book's front cover art.",
          "The study table in the lobby."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The index card records where each chapter (page) is placed on the shelves (frames), acting as the page table."
      }
    ]
  },
  "data-structures": {
    "arrays": [
      {
        "id": "data-structures-arrays-1",
        "question": "Which of the following properties guarantees O(1) constant time random access for elements in an array structure?",
        "options": [
          "The elements are linked sequentially using dynamic heap-allocated pointer chains.",
          "The elements are stored in a contiguous block of memory, allowing direct index address offsets calculations.",
          "The elements are dynamically sorted in ascending order during each access operation.",
          "The elements are stored inside high-fidelity key-value hash slots."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "Arrays allocate sequential, contiguous memory locations. Because the memory is contiguous, the computer can instantly calculate the direct memory address of any element at a given index in O(1) constant time using: Address = Base Address + Index * Element Size."
      },
      {
        "id": "data-structures-arrays-2",
        "question": "What is the time complexity to insert a new element at the beginning (index 0) of a static array of size N?",
        "options": [
          "O(1)",
          "O(log N)",
          "O(N)",
          "O(N log N)"
        ],
        "correctAnswer": 2,
        "answerIdx": 2,
        "difficulty": "easy",
        "explanation": "Inserting at the beginning of an array requires shifting all N existing elements one position to the right, which takes O(N) linear time."
      },
      {
        "id": "data-structures-arrays-3",
        "question": "How do Dynamic Arrays (like Vectors in C++ or ArrayLists in Java) maintain efficient insertions when they run out of capacity?",
        "options": [
          "They convert into a linked list structure.",
          "They allocate a new larger array (typically double the size), copy the elements over, and delete the old array.",
          "They store subsequent elements in virtual swap memory files.",
          "They truncate oldest elements automatically."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "When capacity is exceeded, dynamic arrays allocate double the memory, copy old items, and release the old array, achieving O(1) amortized insertion cost."
      },
      {
        "id": "data-structures-arrays-4",
        "question": "Why do arrays exhibit excellent CPU cache performance compared to linked lists?",
        "options": [
          "Array operations are processed directly inside CPU registers.",
          "Arrays store elements in contiguous memory blocks, resulting in high spatial locality of reference.",
          "Arrays carry fewer pointer addresses.",
          "Arrays require less memory allocation."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "Because array elements are stored contiguously, loading one element pulls subsequent elements into the fast CPU cache line (spatial locality)."
      },
      {
        "id": "data-structures-arrays-5",
        "question": "What is the memory address of the element at index 4 of an integer array (4 bytes per int) with a base memory address of 1000?",
        "options": [
          "1004",
          "1008",
          "1016",
          "1020"
        ],
        "correctAnswer": 2,
        "answerIdx": 2,
        "difficulty": "hard",
        "explanation": "The memory address is computed as: Base Address + Index * Element Size = 1000 + 4 * 4 = 1016."
      },
      {
        "id": "data-structures-arrays-6",
        "question": "What is the time complexity to access an element at a known index in a standard array?",
        "options": [
          "O(1) Constant Time",
          "O(N) Linear Time",
          "O(log N) Logarithmic Time",
          "O(N^2) Quadratic Time"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Arrays store elements in contiguous memory slots, allowing immediate O(1) direct address arithmetic: Base + (Index * ElementSize)."
      },
      {
        "id": "data-structures-arrays-7",
        "question": "What is the time complexity to search for an arbitrary element in an UNSORTED array of size N?",
        "options": [
          "O(N) Linear Time",
          "O(1) Constant Time",
          "O(log N) Logarithmic Time",
          "O(N log N) Linearithmic Time"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Searching an unsorted array requires checking each element sequentially in the worst case, requiring O(N) operations."
      },
      {
        "id": "data-structures-arrays-8",
        "question": "In a 2D array declared as `int matrix[R][C]`, what is the formula to calculate the offset of `matrix[i][j]` under Row-Major order?",
        "options": [
          "Offset = (i * C + j) * sizeof(int)",
          "Offset = (j * R + i) * sizeof(int)",
          "Offset = (i + j) * sizeof(int)",
          "Offset = (i * j) * sizeof(int)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In Row-Major layout (used by C/C++), full rows of length C are laid out consecutively, so element (i, j) is at index i * C + j."
      },
      {
        "id": "data-structures-arrays-9",
        "question": "Why does doubling array capacity when resizing a dynamic array yield an amortized O(1) insertion time, whereas incrementing by a fixed constant c yields O(N)?",
        "options": [
          "Geometric expansion divides the copy cost over an exponentially increasing number of cheap insertions; constant resizing copies on every c insertions, accumulating O(N^2) total work.",
          "Constant resizing causes CPU cache line invalidations on every instruction.",
          "Geometric expansion disables garbage collection in the runtime.",
          "Doubling the array allows pointer swizzling without physical memory copies."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Geometric doubling ensures total copy cost over N insertions is N + N/2 + N/4 + ... <= 2N, giving O(2N/N) = O(1) amortized time per append."
      },
      {
        "id": "data-structures-arrays-10",
        "question": "What is the time complexity to access an element at a known index in a standard array?",
        "options": [
          "O(1) Constant Time",
          "O(N) Linear Time",
          "O(log N) Logarithmic Time",
          "O(N^2) Quadratic Time"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Arrays store elements in contiguous memory slots, allowing immediate O(1) direct address arithmetic: Base + (Index * ElementSize)."
      },
      {
        "id": "data-structures-arrays-11",
        "question": "What is the time complexity to search for an arbitrary element in an UNSORTED array of size N?",
        "options": [
          "O(N) Linear Time",
          "O(1) Constant Time",
          "O(log N) Logarithmic Time",
          "O(N log N) Linearithmic Time"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Searching an unsorted array requires checking each element sequentially in the worst case, requiring O(N) operations."
      },
      {
        "id": "data-structures-arrays-12",
        "question": "In a 2D array declared as `int matrix[R][C]`, what is the formula to calculate the offset of `matrix[i][j]` under Row-Major order?",
        "options": [
          "Offset = (i * C + j) * sizeof(int)",
          "Offset = (j * R + i) * sizeof(int)",
          "Offset = (i + j) * sizeof(int)",
          "Offset = (i * j) * sizeof(int)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In Row-Major layout (used by C/C++), full rows of length C are laid out consecutively, so element (i, j) is at index i * C + j."
      },
      {
        "id": "data-structures-arrays-13",
        "question": "Why does doubling array capacity when resizing a dynamic array yield an amortized O(1) insertion time, whereas incrementing by a fixed constant c yields O(N)?",
        "options": [
          "Geometric expansion divides the copy cost over an exponentially increasing number of cheap insertions; constant resizing copies on every c insertions, accumulating O(N^2) total work.",
          "Constant resizing causes CPU cache line invalidations on every instruction.",
          "Geometric expansion disables garbage collection in the runtime.",
          "Doubling the array allows pointer swizzling without physical memory copies."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Geometric doubling ensures total copy cost over N insertions is N + N/2 + N/4 + ... <= 2N, giving O(2N/N) = O(1) amortized time per append."
      }
    ],
    "stacks": [
      {
        "id": "data-structures-stacks-1",
        "question": "Which memory organization protocol and structural behavior does a call stack or recursive register record?",
        "options": [
          "FIFO (First-In First-Out) where the earliest caller finishes execution first.",
          "LIFO (Last-In First-Out) where the most recently pushed frame is popped and resolved first.",
          "Dynamic Priority Allocation where the fastest executing thread is dispatched first.",
          "Hierarchical Branching where all caller frames execute in parallel."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "A Stack operates strictly on LIFO principles. In runtime environments, calling a function pushes its activation frame onto the top of the call stack, and completing a function pops it off, ensuring the last active sub-routine finishes before returning to its parent caller."
      },
      {
        "id": "data-structures-stacks-2",
        "question": "Which of the following operations on a stack has a time complexity of O(1)?",
        "options": [
          "Push",
          "Pop",
          "Peek",
          "All of the above"
        ],
        "correctAnswer": 3,
        "answerIdx": 3,
        "difficulty": "easy",
        "explanation": "All fundamental stack operations (Push, Pop, Peek) interact only with the top element, requiring constant time O(1)."
      },
      {
        "id": "data-structures-stacks-3",
        "question": "What error occurs when a program attempts to push an element onto a stack that has exceeded its maximum allocated memory capacity?",
        "options": [
          "Stack Underflow",
          "Stack Overflow",
          "Segmentation Fault",
          "Buffer Leak"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "A stack overflow occurs when there is no room left to push new items, often caused by infinite or very deep recursive functions."
      },
      {
        "id": "data-structures-stacks-4",
        "question": "Which data structure is best suited to check if brackets (parentheses, braces) are correctly balanced in a code expression?",
        "options": [
          "Queue",
          "Stack",
          "Binary Tree",
          "Hash Table"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "A stack is ideal: push open brackets, and pop/match them when close brackets are encountered. The stack must be empty at the end."
      },
      {
        "id": "data-structures-stacks-5",
        "question": "What is the prefix representation of the infix expression: A + B * C?",
        "options": [
          "A B C * +",
          "+ A * B C",
          "* + A B C",
          "+ * A B C"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "Operator precedence evaluates B*C first (*BC). Then we add A (+A*BC). This forms the prefix representation."
      },
      {
        "id": "data-structures-stacks-6",
        "question": "Which of the following real-world scenarios represents a Stack (LIFO) data structure?",
        "options": [
          "The \"Undo\" functionality in text editors and browser backward navigation.",
          "Customers standing in a line at a supermarket checkout.",
          "Cars driving through a one-way tunnel.",
          "Printer spooler printing jobs in arrival order."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Undo operations reverse actions in reverse chronological order, matching the Last-In First-Out (LIFO) property of a stack."
      },
      {
        "id": "data-structures-stacks-7",
        "question": "What is the postfix (Reverse Polish) evaluation of the expression: `5 3 + 2 *`?",
        "options": [
          "16",
          "11",
          "25",
          "30"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Push 5, push 3. Encounter '+': pop 3 and 5, add -> 8, push 8. Push 2. Encounter '*': pop 2 and 8, multiply -> 16."
      },
      {
        "id": "data-structures-stacks-8",
        "question": "How can a stack be implemented using a singly linked list such that both `push` and `pop` achieve O(1) time complexity?",
        "options": [
          "By inserting and removing elements strictly at the head node of the linked list.",
          "By inserting at the tail and traversing from the head on each pop.",
          "By sorting the linked list after every push.",
          "By allocating a new linked list for every element."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Inserting and removing at the head of a linked list takes O(1) constant time without requiring any list traversal."
      },
      {
        "id": "data-structures-stacks-9",
        "question": "What is the time and auxiliary space complexity to find the Next Greater Element for all elements in an array of size N using a Monotonic Stack?",
        "options": [
          "O(N) Time and O(N) Auxiliary Space",
          "O(N^2) Time and O(1) Space",
          "O(N log N) Time and O(N) Space",
          "O(1) Time and O(N) Space"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Each element is pushed and popped from the monotonic stack at most once, resulting in total O(N) linear time and O(N) space."
      },
      {
        "id": "data-structures-stacks-10",
        "question": "Which of the following real-world scenarios represents a Stack (LIFO) data structure?",
        "options": [
          "The \"Undo\" functionality in text editors and browser backward navigation.",
          "Customers standing in a line at a supermarket checkout.",
          "Cars driving through a one-way tunnel.",
          "Printer spooler printing jobs in arrival order."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Undo operations reverse actions in reverse chronological order, matching the Last-In First-Out (LIFO) property of a stack."
      },
      {
        "id": "data-structures-stacks-11",
        "question": "What is the postfix (Reverse Polish) evaluation of the expression: `5 3 + 2 *`?",
        "options": [
          "16",
          "11",
          "25",
          "30"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Push 5, push 3. Encounter '+': pop 3 and 5, add -> 8, push 8. Push 2. Encounter '*': pop 2 and 8, multiply -> 16."
      },
      {
        "id": "data-structures-stacks-12",
        "question": "How can a stack be implemented using a singly linked list such that both `push` and `pop` achieve O(1) time complexity?",
        "options": [
          "By inserting and removing elements strictly at the head node of the linked list.",
          "By inserting at the tail and traversing from the head on each pop.",
          "By sorting the linked list after every push.",
          "By allocating a new linked list for every element."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Inserting and removing at the head of a linked list takes O(1) constant time without requiring any list traversal."
      },
      {
        "id": "data-structures-stacks-13",
        "question": "What is the time and auxiliary space complexity to find the Next Greater Element for all elements in an array of size N using a Monotonic Stack?",
        "options": [
          "O(N) Time and O(N) Auxiliary Space",
          "O(N^2) Time and O(1) Space",
          "O(N log N) Time and O(N) Space",
          "O(1) Time and O(N) Space"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Each element is pushed and popped from the monotonic stack at most once, resulting in total O(N) linear time and O(N) space."
      }
    ],
    "queues": [
      {
        "id": "data-structures-queues-1",
        "question": "In a Circular Queue of size K, how does the enqueue pointer wrap around to index 0 when it exceeds the array boundaries?",
        "options": [
          "It triggers a dynamic array resizing routine that doubles the memory capacity.",
          "It uses a bitwise subtraction offset on the base memory pointer.",
          "It uses the modulo operator: (rear + 1) % K to cycle back to the first index.",
          "It clears all existing active queue elements to reset the pointers."
        ],
        "correctAnswer": 2,
        "answerIdx": 2,
        "difficulty": "hard",
        "explanation": "Circular queues use the modulo arithmetic formula (rear + 1) % K to dynamically wrap the rear pointer back to 0 once it reaches the end of the array, preventing memory wastage and enabling efficient reuse of empty slots."
      },
      {
        "id": "data-structures-queues-2",
        "question": "Which principle governs the order in which elements are inserted and removed from a standard queue?",
        "options": [
          "LIFO (Last-In, First-Out)",
          "FIFO (First-In, First-Out)",
          "LILO (Last-In, Last-Out)",
          "Priority-Based Selection"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "A queue operates on First-In, First-Out (FIFO) principles, where elements are enqueued at the rear and dequeued from the front."
      },
      {
        "id": "data-structures-queues-3",
        "question": "What is the time complexity to dequeue an element from a queue implemented with a singly linked list (maintaining both head and tail pointers)?",
        "options": [
          "O(1)",
          "O(log N)",
          "O(N)",
          "O(1) to enqueue, O(N) to dequeue"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Removing from the front (head) of a linked list requires updating the head pointer, which is a constant time O(1) operation."
      },
      {
        "id": "data-structures-queues-4",
        "question": "What is the main limitation of a simple array-based queue?",
        "options": [
          "It cannot store primitive data types.",
          "Dequeuing leaves empty spaces at the front of the array that cannot be reused without shifting elements, wasting space.",
          "It takes O(N) to enqueue elements.",
          "Pointers consume more memory than the data values."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "In a basic array queue, as elements are dequeued, the front pointer moves forward, leaving unusable slots behind unless circular logic is used."
      },
      {
        "id": "data-structures-queues-5",
        "question": "Which variant of a queue allows elements to be inserted and deleted at both the front and rear ends?",
        "options": [
          "Deque (Double-Ended Queue)",
          "Circular Queue",
          "Priority Queue",
          "Stack"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "A Deque (Double-Ended Queue) allows enqueue and dequeue operations at both the front and rear boundaries."
      },
      {
        "id": "data-structures-queues-6",
        "question": "What is the defining behavioral principle of a standard Queue data structure?",
        "options": [
          "First-In, First-Out (FIFO)",
          "Last-In, First-Out (LIFO)",
          "First-In, Last-Out (FILO)",
          "Random-In, Random-Out (RIRO)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Queues enforce FIFO (First-In, First-Out): the first element added is the first element removed."
      },
      {
        "id": "data-structures-queues-7",
        "question": "In which of the following graph algorithms is a FIFO Queue strictly required for node traversal?",
        "options": [
          "Breadth-First Search (BFS)",
          "Depth-First Search (DFS)",
          "Prim's Minimum Spanning Tree",
          "Dijkstra's Shortest Path"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Breadth-First Search (BFS) explores graph nodes level-by-level using a FIFO queue to sequence adjacent visits."
      },
      {
        "id": "data-structures-queues-8",
        "question": "What is the time complexity to insert into and extract the minimum element from a Binary Min-Heap Priority Queue with N elements?",
        "options": [
          "O(log N) for insert and O(log N) for extract-min",
          "O(1) for insert and O(N) for extract-min",
          "O(N) for insert and O(1) for extract-min",
          "O(1) for both insert and extract-min"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In a binary heap of size N, heapify-up on insert and heapify-down on extraction both traverse at most tree height O(log N)."
      },
      {
        "id": "data-structures-queues-9",
        "question": "How can a FIFO Queue be implemented using two LIFO Stacks (Stack1 and Stack2) while maintaining amortized O(1) time per operation?",
        "options": [
          "Push all new elements onto Stack1; on dequeue, if Stack2 is empty, pop all elements from Stack1 onto Stack2 and pop from Stack2.",
          "Pop elements back and forth between both stacks on every single enqueue and dequeue.",
          "Sort both stacks after every operation.",
          "Stacks cannot be used to implement a queue under any conditions."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Each element is pushed onto Stack1 once, moved to Stack2 once, and popped from Stack2 once: 3 operations per element, yielding amortized O(1)."
      },
      {
        "id": "data-structures-queues-10",
        "question": "What is the defining behavioral principle of a standard Queue data structure?",
        "options": [
          "First-In, First-Out (FIFO)",
          "Last-In, First-Out (LIFO)",
          "First-In, Last-Out (FILO)",
          "Random-In, Random-Out (RIRO)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Queues enforce FIFO (First-In, First-Out): the first element added is the first element removed."
      },
      {
        "id": "data-structures-queues-11",
        "question": "In which of the following graph algorithms is a FIFO Queue strictly required for node traversal?",
        "options": [
          "Breadth-First Search (BFS)",
          "Depth-First Search (DFS)",
          "Prim's Minimum Spanning Tree",
          "Dijkstra's Shortest Path"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Breadth-First Search (BFS) explores graph nodes level-by-level using a FIFO queue to sequence adjacent visits."
      },
      {
        "id": "data-structures-queues-12",
        "question": "What is the time complexity to insert into and extract the minimum element from a Binary Min-Heap Priority Queue with N elements?",
        "options": [
          "O(log N) for insert and O(log N) for extract-min",
          "O(1) for insert and O(N) for extract-min",
          "O(N) for insert and O(1) for extract-min",
          "O(1) for both insert and extract-min"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In a binary heap of size N, heapify-up on insert and heapify-down on extraction both traverse at most tree height O(log N)."
      },
      {
        "id": "data-structures-queues-13",
        "question": "How can a FIFO Queue be implemented using two LIFO Stacks (Stack1 and Stack2) while maintaining amortized O(1) time per operation?",
        "options": [
          "Push all new elements onto Stack1; on dequeue, if Stack2 is empty, pop all elements from Stack1 onto Stack2 and pop from Stack2.",
          "Pop elements back and forth between both stacks on every single enqueue and dequeue.",
          "Sort both stacks after every operation.",
          "Stacks cannot be used to implement a queue under any conditions."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Each element is pushed onto Stack1 once, moved to Stack2 once, and popped from Stack2 once: 3 operations per element, yielding amortized O(1)."
      }
    ],
    "linked-lists": [
      {
        "id": "data-structures-linked-lists-1",
        "question": "What is the principal performance advantage of a Doubly Linked List over a Singly Linked List during deletion operations?",
        "options": [
          "It requires half the memory storage footprint since pointer references are compressed.",
          "It enables O(1) deletion of a node when given only a direct reference to that node, without traversing from the head.",
          "It allows O(log N) binary search traversal across non-contiguous memory segments.",
          "It automatically maintains sorted node orders without requiring comparison operations."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "In a Singly Linked List, deleting a node requires finding its predecessor, which takes O(N) traversal. A Doubly Linked List node stores both next and prev pointers, allowing the node to be unlinked in O(1) constant time without needing a full traversal from the head."
      },
      {
        "id": "data-structures-linked-lists-2",
        "question": "What is the time complexity to search for a value in a sorted Singly Linked List of size N?",
        "options": [
          "O(1)",
          "O(log N)",
          "O(N)",
          "O(N log N)"
        ],
        "correctAnswer": 2,
        "answerIdx": 2,
        "difficulty": "easy",
        "explanation": "Unlike arrays, linked lists do not support index-based random access. We must traverse nodes sequentially, costing O(N) even if sorted."
      },
      {
        "id": "data-structures-linked-lists-3",
        "question": "In a Circular Linked List, what does the next pointer of the last node reference?",
        "options": [
          "Null",
          "The Head Node",
          "itself",
          "An undefined memory address"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "In a circular linked list, the tail node's next pointer links back to the head node to form a closed loop."
      },
      {
        "id": "data-structures-linked-lists-4",
        "question": "How much memory overhead does a Doubly Linked List node have compared to a Singly Linked List node?",
        "options": [
          "None, they are identical.",
          "One additional pointer reference (prev pointer).",
          "Double the data payload size.",
          "Two additional pointers."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "A singly linked node has one pointer (next). A doubly linked node has two pointers (next and prev), adding one pointer overhead per node."
      },
      {
        "id": "data-structures-linked-lists-5",
        "question": "What is a major disadvantage of linked lists compared to arrays?",
        "options": [
          "They cannot grow dynamically.",
          "They consume more memory due to pointer storage and lack direct random access.",
          "Insertions at the head are slow.",
          "They are not compatible with recursive algorithms."
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "hard",
        "explanation": "Linked lists require extra memory to store pointer addresses for each node, and accessing index `i` requires linear traversal (O(N))."
      },
      {
        "id": "data-structures-linked-lists-6",
        "question": "What does each node in a standard Singly Linked List contain at minimum?",
        "options": [
          "Data value and a pointer/reference to the next node.",
          "Data value and pointers to both next and previous nodes.",
          "Two data values and no pointers.",
          "A memory array index and a file descriptor."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "A singly linked list node contains a payload (data) and a single `next` pointer pointing to the successive node."
      },
      {
        "id": "data-structures-linked-lists-7",
        "question": "Why does inserting an element at the beginning (head) of a linked list take O(1) time, while in an array it takes O(N)?",
        "options": [
          "The linked list only needs to update head and next pointers, whereas the array must physically shift all existing N elements by one position.",
          "Linked lists use hardware acceleration on modern CPUs.",
          "Arrays do not support inserting elements at the beginning.",
          "Linked lists store elements in contiguous CPU cache lines."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Inserting at linked list head only requires updating two pointer assignments, whereas an array must shift elements right to make room."
      },
      {
        "id": "data-structures-linked-lists-8",
        "question": "Which algorithmic pattern detects whether a singly linked list contains a cycle in O(N) time and O(1) auxiliary space?",
        "options": [
          "Floyd's Tortoise and Hare Cycle-Finding Algorithm (slow and fast pointers)",
          "Binary Search pointer splitting",
          "Dijkstra's shortest path algorithm",
          "Merge sort linked list partitioning"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Floyd's algorithm moves a slow pointer by 1 step and a fast pointer by 2 steps; if a cycle exists, they must collide inside the loop in O(N) time."
      },
      {
        "id": "data-structures-linked-lists-9",
        "question": "What is the time complexity to find the middle node of a singly linked list in a SINGLE pass using slow and fast pointers?",
        "options": [
          "O(N) Time and O(1) Auxiliary Space",
          "O(N^2) Time and O(N) Space",
          "O(log N) Time and O(1) Space",
          "O(1) Time and O(N) Space"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Fast pointer advances 2 nodes while slow advances 1; when fast reaches the end, slow is at the midpoint in a single O(N) scan using O(1) space."
      },
      {
        "id": "data-structures-linked-lists-10",
        "question": "What does each node in a standard Singly Linked List contain at minimum?",
        "options": [
          "Data value and a pointer/reference to the next node.",
          "Data value and pointers to both next and previous nodes.",
          "Two data values and no pointers.",
          "A memory array index and a file descriptor."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "A singly linked list node contains a payload (data) and a single `next` pointer pointing to the successive node."
      },
      {
        "id": "data-structures-linked-lists-11",
        "question": "Why does inserting an element at the beginning (head) of a linked list take O(1) time, while in an array it takes O(N)?",
        "options": [
          "The linked list only needs to update head and next pointers, whereas the array must physically shift all existing N elements by one position.",
          "Linked lists use hardware acceleration on modern CPUs.",
          "Arrays do not support inserting elements at the beginning.",
          "Linked lists store elements in contiguous CPU cache lines."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Inserting at linked list head only requires updating two pointer assignments, whereas an array must shift elements right to make room."
      },
      {
        "id": "data-structures-linked-lists-12",
        "question": "Which algorithmic pattern detects whether a singly linked list contains a cycle in O(N) time and O(1) auxiliary space?",
        "options": [
          "Floyd's Tortoise and Hare Cycle-Finding Algorithm (slow and fast pointers)",
          "Binary Search pointer splitting",
          "Dijkstra's shortest path algorithm",
          "Merge sort linked list partitioning"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Floyd's algorithm moves a slow pointer by 1 step and a fast pointer by 2 steps; if a cycle exists, they must collide inside the loop in O(N) time."
      },
      {
        "id": "data-structures-linked-lists-13",
        "question": "What is the time complexity to find the middle node of a singly linked list in a SINGLE pass using slow and fast pointers?",
        "options": [
          "O(N) Time and O(1) Auxiliary Space",
          "O(N^2) Time and O(N) Space",
          "O(log N) Time and O(1) Space",
          "O(1) Time and O(N) Space"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Fast pointer advances 2 nodes while slow advances 1; when fast reaches the end, slow is at the midpoint in a single O(N) scan using O(1) space."
      }
    ],
    "trees": [
      {
        "id": "data-structures-trees-1",
        "question": "Why does an AVL Tree remain more computationally optimal for searching than a skewed Binary Search Tree (BST) under worst-case insertion sequences?",
        "options": [
          "An AVL tree acts as a contiguous array to keep access paths direct.",
          "An AVL tree automatically converts into a LIFO stack to speed up searches.",
          "An AVL tree strictly maintains its balance factor between -1 and 1, keeping height bounded to O(log N).",
          "An AVL tree maps nodes using unique cryptographic hash indices."
        ],
        "correctAnswer": 2,
        "answerIdx": 2,
        "difficulty": "hard",
        "explanation": "An AVL tree is a self-balancing BST. By enforcing that the height difference of any node's subtrees (balance factor) is at most 1, it performs rotations to guarantee the tree height stays O(log N), avoiding worst-case linear O(N) degenerations of skewed BSTs."
      },
      {
        "id": "data-structures-trees-2",
        "question": "What is the maximum number of nodes in a binary tree of height H (where root is at height 1)?",
        "options": [
          "2^H",
          "2^H - 1",
          "2^(H - 1)",
          "H^2"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "medium",
        "explanation": "A fully saturated binary tree of height H has 2^H - 1 nodes (e.g. height 1 has 1 node, height 2 has 3 nodes)."
      },
      {
        "id": "data-structures-trees-3",
        "question": "Which tree traversal visits nodes in the following order: Left Subtree, Right Subtree, Root Node?",
        "options": [
          "Pre-order",
          "In-order",
          "Post-order",
          "Level-order"
        ],
        "correctAnswer": 2,
        "answerIdx": 2,
        "difficulty": "easy",
        "explanation": "Post-order traversal visits children first (Left, Right) and processes the parent node (Root) last."
      },
      {
        "id": "data-structures-trees-4",
        "question": "What is the time complexity of search, insertion, and deletion operations in a balanced Binary Search Tree (like Red-Black or AVL)?",
        "options": [
          "O(1)",
          "O(log N)",
          "O(N)",
          "O(N log N)"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "Balanced BSTs guarantee that the height of the tree is proportional to log N, yielding O(log N) search, insert, and delete complexity."
      },
      {
        "id": "data-structures-trees-5",
        "question": "In a Binary Search Tree, which traversal method prints the keys in strictly ascending sorted order?",
        "options": [
          "Pre-order",
          "In-order",
          "Post-order",
          "Level-order"
        ],
        "correctAnswer": 1,
        "answerIdx": 1,
        "difficulty": "easy",
        "explanation": "In-order traversal visits nodes in Left-Root-Right sequence, which matches the sorting rules of a BST, outputting keys in sorted order."
      },
      {
        "id": "data-structures-trees-6",
        "question": "What is the \"Root\" node in a tree data structure?",
        "options": [
          "The top-most node in the hierarchy that has no parent.",
          "The bottom-most leaf nodes that have no children.",
          "A node with exactly three child branches.",
          "The deepest level of a binary tree."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The root is the foundational top node in a tree hierarchy from which all child branches originate; it has no parent."
      },
      {
        "id": "data-structures-trees-7",
        "question": "In a Binary Search Tree (BST), where are all values smaller than the current node located?",
        "options": [
          "Exclusively in the Left Subtree.",
          "Exclusively in the Right Subtree.",
          "Randomly distributed across both subtrees.",
          "At the parent node position."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The BST property mandates that all keys in the left subtree are smaller than the node, and all keys in the right subtree are greater."
      },
      {
        "id": "data-structures-trees-8",
        "question": "What is the height of a full binary tree containing N nodes?",
        "options": [
          "O(log2(N))",
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In a balanced full binary tree, the number of nodes doubles at each level, resulting in height H = log2(N + 1)."
      },
      {
        "id": "data-structures-trees-9",
        "question": "In Red-Black Trees, what invariant ensures that the longest path from the root to any leaf is no more than twice the length of the shortest path?",
        "options": [
          "No two red nodes can appear consecutively, and every simple path from a node to descendant leaves contains the same number of black nodes.",
          "All nodes must be colored red.",
          "The root must be red and all leaves must be white.",
          "Every node must have a balance factor between -1 and +1."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Red-Black tree properties (no adjacent red nodes, equal black-height on all paths) mathematically guarantee height <= 2 * log2(N + 1)."
      },
      {
        "id": "data-structures-trees-10",
        "question": "What is the \"Root\" node in a tree data structure?",
        "options": [
          "The top-most node in the hierarchy that has no parent.",
          "The bottom-most leaf nodes that have no children.",
          "A node with exactly three child branches.",
          "The deepest level of a binary tree."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The root is the foundational top node in a tree hierarchy from which all child branches originate; it has no parent."
      },
      {
        "id": "data-structures-trees-11",
        "question": "In a Binary Search Tree (BST), where are all values smaller than the current node located?",
        "options": [
          "Exclusively in the Left Subtree.",
          "Exclusively in the Right Subtree.",
          "Randomly distributed across both subtrees.",
          "At the parent node position."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The BST property mandates that all keys in the left subtree are smaller than the node, and all keys in the right subtree are greater."
      },
      {
        "id": "data-structures-trees-12",
        "question": "What is the height of a full binary tree containing N nodes?",
        "options": [
          "O(log2(N))",
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In a balanced full binary tree, the number of nodes doubles at each level, resulting in height H = log2(N + 1)."
      },
      {
        "id": "data-structures-trees-13",
        "question": "In Red-Black Trees, what invariant ensures that the longest path from the root to any leaf is no more than twice the length of the shortest path?",
        "options": [
          "No two red nodes can appear consecutively, and every simple path from a node to descendant leaves contains the same number of black nodes.",
          "All nodes must be colored red.",
          "The root must be red and all leaves must be white.",
          "Every node must have a balance factor between -1 and +1."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Red-Black tree properties (no adjacent red nodes, equal black-height on all paths) mathematically guarantee height <= 2 * log2(N + 1)."
      },
      {
        "id": "data-structures-trees-14",
        "question": "In an AVL Tree, what are the only permissible Balance Factor values for any node in the tree?",
        "options": [
          "-1, 0, or +1",
          "-2, -1, 0, +1, or +2",
          "Strictly 0",
          "Any integer <= 3"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "AVL trees maintain the strict invariant that the balance factor (Height(Left) - Height(Right)) of every node must be -1, 0, or +1."
      }
    ]
  },
  "nlp": {
    "nlp-intro": [
      {
        "id": "nlp-intro-1",
        "question": "What is the primary objective of Natural Language Processing (NLP)?",
        "options": [
          "Enabling computers to process, understand, and generate human spoken and written language",
          "Converting analog audio signals exclusively into binary transistor voltages",
          "Designing physical hardware keyboards and computer monitors",
          "Encrypting text files using mathematical hashing algorithms"
        ],
        "correct": 0,
        "explanation": "NLP bridges human communication and computer computation, enabling machines to understand and generate natural text.",
        "difficulty": "easy"
      },
      {
        "id": "nlp-intro-2",
        "question": "In the VR NLP Pipeline demonstration, what is the initial input provided to the system?",
        "options": [
          "A pre-trained neural network weight matrix",
          "The raw text string: 'Book me a flight to Mumbai tomorrow!'",
          "A compiled binary executable file",
          "An encrypted SQL database query"
        ],
        "correct": 1,
        "explanation": "The VR pipeline demonstration begins with raw text: 'Book me a flight to Mumbai tomorrow!'.",
        "difficulty": "easy"
      },
      {
        "id": "nlp-intro-3",
        "question": "Which sequence correctly represents the 5 stages of the NLP pipeline shown in the VR lab?",
        "options": [
          "Raw text -> Tokenize -> Clean -> Features -> Model output",
          "Raw text -> Model output -> Clean -> Tokenize -> Features",
          "Tokenize -> Model output -> Features -> Raw text -> Clean",
          "Features -> Clean -> Tokenize -> Model output -> Raw text"
        ],
        "correct": 0,
        "explanation": "The glowing packet travels through: Raw text, Tokenize, Clean, Features, and Model output.",
        "difficulty": "easy"
      },
      {
        "id": "nlp-intro-4",
        "question": "In the final stage of the VR pipeline demo, what intent does the model predict for the flight booking sentence?",
        "options": [
          "GET_WEATHER",
          "POSITIVE_FEEDBACK",
          "BOOK_FLIGHT",
          "UNKNOWN"
        ],
        "correct": 2,
        "explanation": "Because the cleaned features contain 'book' and 'flight', the model classifies the intent as BOOK_FLIGHT.",
        "difficulty": "easy"
      },
      {
        "id": "nlp-intro-5",
        "question": "During the 'Clean' stage of the VR lab, which words are removed as stop words from 'Book me a flight to Mumbai tomorrow!'?",
        "options": [
          "'book', 'flight', 'mumbai'",
          "'me', 'a', 'to'",
          "'flight', 'tomorrow'",
          "Only punctuation marks"
        ],
        "correct": 1,
        "explanation": "Words like 'me', 'a', and 'to' are grammatical stop words with little semantic intent and are filtered out.",
        "difficulty": "medium"
      },
      {
        "id": "nlp-intro-6",
        "question": "Why can machine learning models NOT process raw text directly without a feature extraction stage?",
        "options": [
          "Text files are too large to fit in physical RAM",
          "Machine learning algorithms operate strictly on mathematical numerical tensors, not character strings",
          "Natural languages have no grammatical rules",
          "Character strings cause operating system kernel panics"
        ],
        "correct": 1,
        "explanation": "Mathematical algorithms require numeric vectors and tensors; feature extraction converts strings into numerical representations.",
        "difficulty": "medium"
      },
      {
        "id": "nlp-intro-7",
        "question": "In the VR lab, how are features represented in the 'Features' station?",
        "options": [
          "Each word is mapped to a vocabulary index ID (e.g. book=0, flight=1, etc.)",
          "Words are converted to audio frequencies",
          "Words are translated into Morse code",
          "Words are replaced with random hexadecimal color codes"
        ],
        "correct": 0,
        "explanation": "The Features station maps each cleaned token to a unique vocabulary index ID.",
        "difficulty": "medium"
      },
      {
        "id": "nlp-intro-8",
        "question": "Which of the following is considered an upstream prerequisite step for text classification in an NLP pipeline?",
        "options": [
          "Model deployment and API hosting",
          "Tokenization and text cleaning",
          "A/B testing on live production traffic",
          "Database indexing of model weights"
        ],
        "correct": 1,
        "explanation": "Tokenization and preprocessing are upstream steps that prepare unstructured text for feature extraction and modeling.",
        "difficulty": "medium"
      },
      {
        "id": "nlp-intro-9",
        "question": "If the sample text in the VR lab is changed to 'What is the weather in Pune today?', what intent is predicted?",
        "options": [
          "BOOK_FLIGHT",
          "GET_WEATHER",
          "POSITIVE_FEEDBACK",
          "CANCEL_ORDER"
        ],
        "correct": 1,
        "explanation": "The VR pipeline inspects cleaned tokens and identifies 'weather', outputting the intent GET_WEATHER.",
        "difficulty": "medium"
      },
      {
        "id": "nlp-intro-10",
        "question": "What happens if an upstream stage in an NLP pipeline produces low-quality or corrupt tokens?",
        "options": [
          "The model automatically repairs the input text without loss of accuracy",
          "Errors cascade downstream, resulting in inaccurate features and flawed model predictions",
          "The pipeline skips directly to output generation",
          "The vocabulary size decreases to zero"
        ],
        "correct": 1,
        "explanation": "Pipelines are sequential; mistakes in early tokenization or cleaning cascade into flawed features and incorrect predictions.",
        "difficulty": "medium"
      },
      {
        "id": "nlp-intro-11",
        "question": "Why is human language inherently ambiguous and challenging for classical rule-based computer programs?",
        "options": [
          "Computers lack sufficient storage for dictionaries",
          "Human language features polysemy, syntactic ambiguity, sarcasm, and evolving slang dependent on context",
          "All natural languages use the exact same 26 letters",
          "Grammar rules never change across generations"
        ],
        "correct": 1,
        "explanation": "Words carry multiple meanings (polysemy), syntax can be ambiguous, and meaning relies heavily on pragmatic and contextual cues.",
        "difficulty": "hard"
      },
      {
        "id": "nlp-intro-12",
        "question": "What is the key difference between rule-based NLP systems and modern statistical/machine learning NLP pipelines?",
        "options": [
          "Rule-based systems use manual regular expressions and heuristics, whereas ML pipelines learn probabilistic patterns from training corpora",
          "Rule-based systems require GPUs while ML pipelines run only on pen and paper",
          "Rule-based systems handle unseen slang better than deep neural networks",
          "ML pipelines cannot perform tokenization"
        ],
        "correct": 0,
        "explanation": "Classical systems relied on handcrafted linguistic rules, whereas modern NLP learns representations and weights from vast datasets.",
        "difficulty": "hard"
      },
      {
        "id": "nlp-intro-13",
        "question": "In production conversational AI (e.g. Alexa or Siri), which two primary outputs does an NLU pipeline extract from a query like 'Book me a flight to Mumbai tomorrow!'?",
        "options": [
          "Intent (BOOK_FLIGHT) and Entities/Slots (destination: Mumbai, date: tomorrow)",
          "Byte offset and CPU cache hits",
          "Compiler AST and bytecode assembly",
          "Sentiment polarity and color palette"
        ],
        "correct": 0,
        "explanation": "Spoken language understanding (SLU/NLU) extracts both the overarching Intent (what the user wants) and Entities/Slots (parameters).",
        "difficulty": "hard"
      },
      {
        "id": "nlp-intro-14",
        "question": "How do modern end-to-end transformer architectures differ from classical multi-stage pipelines?",
        "options": [
          "Transformers eliminate tokenization completely and read raw audio",
          "Transformers use subword tokenization and learn joint representations end-to-end rather than requiring isolated heuristic cleaning steps",
          "Transformers cannot perform classification tasks",
          "Classical pipelines perform faster and achieve higher accuracy on complex reasoning"
        ],
        "correct": 1,
        "explanation": "Modern transformers use subword tokenizers and learn contextual representations end-to-end across stacked self-attention layers.",
        "difficulty": "hard"
      }
    ],
    "tokenization": [
      {
        "id": "tokenization-1",
        "question": "What is tokenization in Natural Language Processing?",
        "options": [
          "The process of breaking a continuous stream of text into smaller atomic units called tokens",
          "Compressing text files using gzip encryption",
          "Translating English sentences directly into Spanish",
          "Checking computer RAM for hardware memory leaks"
        ],
        "correct": 0,
        "explanation": "Tokenization segments raw text strings into words, subwords, or characters for downstream processing.",
        "difficulty": "easy"
      },
      {
        "id": "tokenization-2",
        "question": "In the VR Tokenization lab, what is the primary sample sentence processed through the stations?",
        "options": [
          "'Tokenizers split unbelievable text. Don't panic, it's easy!'",
          "'Deep learning models require billion parameter matrices.'",
          "'The database query returned zero rows.'",
          "'Quick brown fox jumped over the lazy sleeping dog.'"
        ],
        "correct": 0,
        "explanation": "The VR scene loads: 'Tokenizers split unbelievable text. Don't panic, it's easy!'.",
        "difficulty": "easy"
      },
      {
        "id": "tokenization-3",
        "question": "In the 'Word tokens' station of the VR lab, how is punctuation handled?",
        "options": [
          "Punctuation is completely deleted from memory",
          "Punctuation marks (like '.' and '!') become their own individual tokens",
          "Punctuation is combined with the preceding word into one single token",
          "Punctuation is replaced with numbers"
        ],
        "correct": 1,
        "explanation": "Punctuation marks are separated as distinct tokens so grammatical boundaries are preserved.",
        "difficulty": "easy"
      },
      {
        "id": "tokenization-4",
        "question": "In subword tokenization (WordPiece/BERT style), what does the prefix '##' indicate?",
        "options": [
          "A hashtag or social media mention",
          "A continuation subword piece that attaches to the preceding root subword",
          "A corrupted or corrupted character error",
          "A stop word marked for deletion"
        ],
        "correct": 1,
        "explanation": "The '##' prefix in WordPiece signifies that the subword continues a word rather than beginning a new one.",
        "difficulty": "easy"
      },
      {
        "id": "tokenization-5",
        "question": "In the VR lab, how does the word 'unbelievable' get broken down in the 'Subword tokens' station?",
        "options": [
          "['u', 'n', 'b', 'e', 'l', 'i', 'e', 'v', 'a', 'b', 'l', 'e']",
          "['un', '##believ', '##able']",
          "['unbelievable'] as an unknown token [UNK]",
          "['unbeliev', 'able']"
        ],
        "correct": 1,
        "explanation": "The simplified WordPiece tokenizer splits the word into prefix 'un', root continuation '##believ', and suffix '##able'.",
        "difficulty": "medium"
      },
      {
        "id": "tokenization-6",
        "question": "Why does simple whitespace splitting (e.g. string.split(' ')) fail for robust NLP?",
        "options": [
          "It attaches punctuation to words (e.g. 'text.' instead of 'text' and '.') and fails on contractions like 'Don't'",
          "Whitespace splitting is too slow to execute on modern computers",
          "Whitespace splitting deletes all vowel letters",
          "Python and JavaScript do not support whitespace splitting"
        ],
        "correct": 0,
        "explanation": "Splitting on spaces glues trailing punctuation to words and cannot properly decompose contractions or hyphenated compounds.",
        "difficulty": "medium"
      },
      {
        "id": "tokenization-7",
        "question": "What is the final station in the VR Tokenization lab?",
        "options": [
          "Raw text",
          "Sentence split",
          "Subword tokens",
          "Token IDs"
        ],
        "correct": 3,
        "explanation": "The final station is 'Token IDs', which maps each token to an integer identifier from the vocabulary.",
        "difficulty": "medium"
      },
      {
        "id": "tokenization-8",
        "question": "In the VR lab's 'Sentence split' stage, how many sentences are created from 'Tokenizers split unbelievable text. Don't panic, it's easy!'?",
        "options": [
          "1 sentence",
          "2 sentences",
          "4 sentences",
          "8 sentences"
        ],
        "correct": 1,
        "explanation": "It splits after the terminal punctuation ('.') resulting in 2 sentences.",
        "difficulty": "medium"
      },
      {
        "id": "tokenization-9",
        "question": "What major problem with word-level vocabularies does subword tokenization (BPE/WordPiece) solve?",
        "options": [
          "High GPU power consumption",
          "The Out-Of-Vocabulary (OOV) problem and ballooning vocabulary sizes",
          "Hardware disk fragmentation",
          "Slow internet bandwidth"
        ],
        "correct": 1,
        "explanation": "Subword algorithms can assemble any unknown or rare word from smaller known subword chunks, avoiding the [UNK] token.",
        "difficulty": "medium"
      },
      {
        "id": "tokenization-10",
        "question": "How does Byte Pair Encoding (BPE) build its subword vocabulary during training?",
        "options": [
          "By randomly deleting characters until the vocabulary size matches a limit",
          "By iteratively merging the most frequently occurring pair of adjacent characters/tokens in the corpus",
          "By consulting human linguists to write grammatical rules",
          "By sorting all words in alphabetical order"
        ],
        "correct": 1,
        "explanation": "BPE starts at the character level and iteratively merges the most frequent byte/character pairs into new vocabulary tokens.",
        "difficulty": "medium"
      },
      {
        "id": "tokenization-11",
        "question": "How does SentencePiece differ from traditional tokenizers when processing non-segmented languages like Japanese or Chinese?",
        "options": [
          "It treats the raw input as a continuous byte/character stream without requiring language-specific whitespace assumptions",
          "It requires spaces to be inserted manually before every ideogram",
          "It translates all characters to English before tokenizing",
          "It cannot be used with neural networks"
        ],
        "correct": 0,
        "explanation": "SentencePiece treats text as a raw stream of characters (replacing spaces with meta-symbols like '_') without language-specific pre-tokenization.",
        "difficulty": "hard"
      },
      {
        "id": "tokenization-12",
        "question": "In the VR lab's Token IDs station, why must tokens be mapped to integers (e.g. 'un:100', '##believ:101')?",
        "options": [
          "Computers can only store 8-bit integers",
          "Integer IDs serve as matrix indices into the neural network's embedding lookup table",
          "Floating point numbers cannot represent words",
          "To comply with web browser HTML5 specifications"
        ],
        "correct": 1,
        "explanation": "Embedding layers require integer indices to look up the corresponding continuous vector for each token.",
        "difficulty": "hard"
      },
      {
        "id": "tokenization-13",
        "question": "What is a potential failure mode of Byte Pair Encoding (BPE) tokenizers when handling code or arithmetic?",
        "options": [
          "Numbers may be split into inconsistent digit chunks depending on training frequency, impeding mathematical reasoning",
          "BPE cannot tokenize numbers greater than 100",
          "Code comments are automatically erased",
          "Indentation is converted into emojis"
        ],
        "correct": 0,
        "explanation": "Arbitrary subword splits of multi-digit numbers can fragment numerals irregularly, hindering numeric understanding.",
        "difficulty": "hard"
      },
      {
        "id": "tokenization-14",
        "question": "What is the computational trade-off when choosing a very small vocabulary size versus a very large vocabulary size in subword tokenizers?",
        "options": [
          "Small vocabularies increase sequence lengths and memory quadratic cost in attention, while large vocabularies expand embedding matrix parameters",
          "Small vocabularies require more GPU RAM than large vocabularies",
          "Vocabulary size has no impact on sequence length or model memory",
          "Large vocabularies always produce faster generation speeds regardless of context"
        ],
        "correct": 0,
        "explanation": "Smaller vocabularies fragment text into more tokens (longer sequences), increasing quadratic self-attention cost; larger vocabularies inflate parameter count in embeddings.",
        "difficulty": "hard"
      }
    ],
    "text-preprocessing": [
      {
        "id": "text-preprocessing-1",
        "question": "What is the primary goal of text preprocessing and cleaning in NLP?",
        "options": [
          "Removing noise, standardizing variations, and reducing vocabulary complexity so models focus on meaningful signals",
          "Increasing text length by appending random words",
          "Converting plain text files into 3D video animations",
          "Encrypting text documents so hackers cannot read them"
        ],
        "correct": 0,
        "explanation": "Preprocessing eliminates noise (casing, punctuation, filler words) and standardizes morphological variations.",
        "difficulty": "easy"
      },
      {
        "id": "text-preprocessing-2",
        "question": "In the VR Preprocessing lab, what is the primary sample sentence?",
        "options": [
          "'The children were running and playing in the gardens, buying flights!!'",
          "'Artificial intelligence will transform all software engineering.'",
          "'Select student_id, name from database_records where score > 90;'",
          "'Quantum computers operate on superpositions of qubits.'"
        ],
        "correct": 0,
        "explanation": "The VR lab loads: 'The children were running and playing in the gardens, buying flights!!'.",
        "difficulty": "easy"
      },
      {
        "id": "text-preprocessing-3",
        "question": "In the VR lab's 'Stop words' station, how are removed stop words visually distinguished?",
        "options": [
          "They are highlighted in bright red",
          "They are invisible and hidden from view",
          "They turn into golden rotating stars",
          "They are rendered in 3D wireframe boxes"
        ],
        "correct": 0,
        "explanation": "The VR scene shows stop words in red to denote removal, while kept words remain green.",
        "difficulty": "easy"
      },
      {
        "id": "text-preprocessing-4",
        "question": "Which of the following is a classic example of a stop word in English?",
        "options": [
          "'photosynthesis'",
          "'the'",
          "'algorithm'",
          "'microcontroller'"
        ],
        "correct": 1,
        "explanation": "'the' is an extremely common grammatical article that conveys minimal distinct semantic topic information.",
        "difficulty": "easy"
      },
      {
        "id": "text-preprocessing-5",
        "question": "What is the difference between Stemming and Lemmatization as demonstrated in the VR lab?",
        "options": [
          "Stemming applies heuristic chopping rules (often producing non-words like 'apples' > 'appl'), whereas Lemmatization uses morphological dictionaries to return valid lemma roots ('mice' > 'mouse')",
          "Stemming uses deep neural networks, while lemmatization uses regular expressions",
          "Stemming is only for nouns, while lemmatization is only for punctuation",
          "Stemming produces valid dictionary words, whereas lemmatization never does"
        ],
        "correct": 0,
        "explanation": "Stemming uses crude suffix stripping (e.g. Porter stemmer), while Lemmatization maps words to their true lexical dictionary base (lemma).",
        "difficulty": "medium"
      },
      {
        "id": "text-preprocessing-6",
        "question": "In the VR lab's Lemmatization station, what is the lemma output for the word 'children'?",
        "options": [
          "'childs'",
          "'child'",
          "'childrens'",
          "'chld'"
        ],
        "correct": 1,
        "explanation": "Lemmatization uses a lexicon to correctly identify that the base singular form of 'children' is 'child'.",
        "difficulty": "medium"
      },
      {
        "id": "text-preprocessing-7",
        "question": "In the VR lab's Stemming station, what does 'apples' get reduced to?",
        "options": [
          "'apple'",
          "'appl'",
          "'app'",
          "'fruit'"
        ],
        "correct": 1,
        "explanation": "A rule-based stemmer chops the suffix '-es', producing the crude stem 'appl'.",
        "difficulty": "medium"
      },
      {
        "id": "text-preprocessing-8",
        "question": "Why is case folding (lowercasing text) commonly applied during classical text normalization?",
        "options": [
          "To ensure that 'The', 'the', and 'THE' map to the same vocabulary entry rather than 3 separate tokens",
          "Because computer memory cannot store uppercase letters",
          "To convert text into binary numbers directly",
          "Uppercase letters cause division-by-zero errors in classifiers"
        ],
        "correct": 0,
        "explanation": "Lowercasing standardizes capitalization so identical words with different casing share the same feature.",
        "difficulty": "medium"
      },
      {
        "id": "text-preprocessing-9",
        "question": "In sentiment analysis, why might aggressive stop word removal be harmful?",
        "options": [
          "It removes punctuation that indicates file size",
          "It might remove critical negation words like 'not', 'never', or 'no', completely inverting sentence sentiment",
          "It makes text unreadable to humans",
          "It doubles the training time of neural models"
        ],
        "correct": 1,
        "explanation": "Removing 'not' from 'not good' leaves only 'good', turning negative sentiment into positive sentiment.",
        "difficulty": "medium"
      },
      {
        "id": "text-preprocessing-10",
        "question": "What is 'over-stemming' in rule-based stemmers?",
        "options": [
          "Stemming so aggressively that distinct words with different meanings are collapsed into the same root (e.g. 'universe' and 'university' -> 'univers')",
          "Stemming taking longer than 10 seconds per sentence",
          "Stemming words that are already in past tense",
          "Stemming text that contains numbers"
        ],
        "correct": 0,
        "explanation": "Over-stemming occurs when distinct words with unrelated meanings are erroneously chopped to the same root.",
        "difficulty": "medium"
      },
      {
        "id": "text-preprocessing-11",
        "question": "Why does Lemmatization typically require Part-of-Speech (POS) information to produce accurate lemmas?",
        "options": [
          "Because a word's base lemma depends on its syntactic role (e.g. 'meeting' as a NOUN remains 'meeting', but as a VERB lemmatizes to 'meet')",
          "Because lemmatizers cannot parse nouns without vowels",
          "POS tags prevent lemmatizers from encountering infinite loops",
          "Lemmatization without POS tags always deletes the word"
        ],
        "correct": 0,
        "explanation": "Words like 'meeting' or 'leaves' have different lemmas depending on whether they act as nouns or verbs.",
        "difficulty": "hard"
      },
      {
        "id": "text-preprocessing-12",
        "question": "In what modern NLP context is aggressive text cleaning (lowercasing, stop word removal, stemming) actually DISCOURAGED?",
        "options": [
          "Building simple keyword search engines",
          "Pre-training modern bidirectional Transformer language models (like BERT, RoBERTa, GPT)",
          "Computing raw word count histograms",
          "Sorting text alphabetically"
        ],
        "correct": 1,
        "explanation": "Transformers learn deep contextual nuances from exact casing, punctuation, and function words, so stripping them degrades performance.",
        "difficulty": "hard"
      },
      {
        "id": "text-preprocessing-13",
        "question": "In the VR lab sample 'She studies better and went to buy movies', what is the lemma of 'better'?",
        "options": [
          "'better'",
          "'good'",
          "'best'",
          "'well'"
        ],
        "correct": 1,
        "explanation": "Irregular adjectives like 'better' lemmatize to their positive base form 'good'.",
        "difficulty": "hard"
      },
      {
        "id": "text-preprocessing-14",
        "question": "What is 'under-stemming'?",
        "options": [
          "When words that share the same conceptual root are not reduced to the same stem due to overly conservative rules (e.g. 'adhere' and 'adhesion')",
          "Failing to lowercase text before tokenization",
          "Using a GPU instead of a CPU for stemming",
          "Adding extra suffixes to existing words"
        ],
        "correct": 0,
        "explanation": "Under-stemming occurs when morphological variants fail to be merged into a common root.",
        "difficulty": "hard"
      }
    ],
    "pos-tagging": [
      {
        "id": "pos-tagging-1",
        "question": "What is the primary objective of Part-of-Speech (POS) tagging in NLP?",
        "options": [
          "Assigning a grammatical tag (e.g. NOUN, VERB, ADJ) to each token in a sentence based on its syntactic function",
          "Translating words into different human languages",
          "Counting the total number of characters in a document",
          "Deleting all adjectives and adverbs from text"
        ],
        "correct": 0,
        "explanation": "POS tagging labels each word token with its grammatical category (part of speech).",
        "difficulty": "easy"
      },
      {
        "id": "pos-tagging-2",
        "question": "In the VR POS Tagging lab, what is the primary sample sentence?",
        "options": [
          "'The quick fox quickly jumped over Mumbai bridges.'",
          "'Deep learning models run on neural hardware.'",
          "'Database transactions guarantee ACID properties.'",
          "'Photosynthesis converts sunlight into glucose.'"
        ],
        "correct": 0,
        "explanation": "The VR scene loads: 'The quick fox quickly jumped over Mumbai bridges.'.",
        "difficulty": "easy"
      },
      {
        "id": "pos-tagging-3",
        "question": "In the Universal POS tagset, what does the tag 'VERB' represent?",
        "options": [
          "An action, occurrence, or state of being (e.g. 'jumped', 'is', 'running')",
          "A person, place, or thing",
          "A modifying word for a noun",
          "A punctuation symbol"
        ],
        "correct": 0,
        "explanation": "VERB denotes an action, state, or relation in syntax.",
        "difficulty": "easy"
      },
      {
        "id": "pos-tagging-4",
        "question": "In the VR lab, what does a question mark '?' indicate during the 'Dictionary lookup' station?",
        "options": [
          "A grammatical error in the sentence",
          "An unknown word not present in the static dictionary, requiring morphological rules or context",
          "An end of sentence punctuation mark",
          "A stop word scheduled for deletion"
        ],
        "correct": 1,
        "explanation": "The lexicon lookup tags known words; unknown words receive '?' until the suffix heuristic resolves them.",
        "difficulty": "easy"
      },
      {
        "id": "pos-tagging-5",
        "question": "In the VR lab's 'Suffix rules' station, how is the word 'quickly' tagged?",
        "options": [
          "NOUN",
          "ADV (Adverb, because it ends in '-ly')",
          "VERB",
          "ADP"
        ],
        "correct": 1,
        "explanation": "The suffix heuristic recognizes '-ly' as a characteristic adverb (ADV) ending.",
        "difficulty": "medium"
      },
      {
        "id": "pos-tagging-6",
        "question": "In the VR lab, how does the suffix rule classify capitalized unknown words like 'Mumbai'?",
        "options": [
          "PROPN (Proper Noun)",
          "PUNCT (Punctuation)",
          "DET (Determiner)",
          "CONJ (Conjunction)"
        ],
        "correct": 0,
        "explanation": "A capitalized word appearing in mid-sentence is identified as a proper noun (PROPN).",
        "difficulty": "medium"
      },
      {
        "id": "pos-tagging-7",
        "question": "Why is POS tagging challenging when dealing with homographs like 'book'?",
        "options": [
          "'book' cannot be tokenized",
          "'book' can function as a NOUN ('I read a book') or as a VERB ('Book a flight') depending entirely on context",
          "The word 'book' has no dictionary definition",
          "All taggers crash when processing 4-letter words"
        ],
        "correct": 1,
        "explanation": "Syntactic ambiguity means the exact same word token can play different grammatical roles in different sentences.",
        "difficulty": "medium"
      },
      {
        "id": "pos-tagging-8",
        "question": "In the VR lab sample sentence, what is the POS tag assigned to 'The'?",
        "options": [
          "DET (Determiner)",
          "NOUN (Noun)",
          "ADJ (Adjective)",
          "VERB (Verb)"
        ],
        "correct": 0,
        "explanation": "'The' is a determiner (DET).",
        "difficulty": "medium"
      },
      {
        "id": "pos-tagging-9",
        "question": "What algorithmic approach is used in Hidden Markov Model (HMM) POS taggers to find the most probable sequence of tags?",
        "options": [
          "Viterbi algorithm (dynamic programming)",
          "Bubble sort",
          "Depth-first brute force search",
          "Binary search tree insertion"
        ],
        "correct": 0,
        "explanation": "The Viterbi algorithm uses dynamic programming to find the optimal hidden state (tag) path in linear time with sequence length.",
        "difficulty": "medium"
      },
      {
        "id": "pos-tagging-10",
        "question": "In the VR lab sample 'The quick fox quickly jumped over Mumbai bridges.', what tag is given to 'jumped'?",
        "options": [
          "VERB (Verb, ending in '-ed')",
          "NOUN",
          "ADJ",
          "PRON"
        ],
        "correct": 0,
        "explanation": "'-ed' suffix heuristic and grammatical role classify 'jumped' as VERB.",
        "difficulty": "medium"
      },
      {
        "id": "pos-tagging-11",
        "question": "In a Hidden Markov Model (HMM) for POS tagging, what are the two core probability distributions learned from training data?",
        "options": [
          "Emission probabilities P(word|tag) and Transition probabilities P(tag_i|tag_{i-1})",
          "Prior probability of letters and posterior probability of fonts",
          "Hard drive read speed and write latency",
          "Entropy of vocabulary and standard deviation of token lengths"
        ],
        "correct": 0,
        "explanation": "HMMs model the probability of emitting a word given a tag, and transitioning from one tag state to the next.",
        "difficulty": "hard"
      },
      {
        "id": "pos-tagging-12",
        "question": "Why do Maximum Entropy Markov Models (MEMMs) suffer from the 'label bias problem', and how do Linear-Chain CRFs overcome it?",
        "options": [
          "MEMMs normalize probabilities locally at each state transition, whereas CRFs compute global sequence-level normalization over all possible state sequences",
          "MEMMs use too many GPUs while CRFs run on CPUs",
          "CRFs do not use features",
          "MEMMs can only tag sentences with fewer than 5 words"
        ],
        "correct": 0,
        "explanation": "CRFs resolve label bias by using a global partition function Z(x) across the entire sequence rather than per-state local normalizations.",
        "difficulty": "hard"
      },
      {
        "id": "pos-tagging-13",
        "question": "In the Penn Treebank tagset, how are singular proper nouns typically differentiated from plural proper nouns?",
        "options": [
          "NNP (singular) and NNPS (plural)",
          "VB and VBD",
          "JJ and JJR",
          "RB and RBR"
        ],
        "correct": 0,
        "explanation": "In Penn Treebank, NNP stands for singular proper noun and NNPS stands for plural proper noun.",
        "difficulty": "hard"
      },
      {
        "id": "pos-tagging-14",
        "question": "How do modern Transformer-based taggers (like BERT) achieve near 98%+ accuracy on POS tagging benchmarks?",
        "options": [
          "By relying strictly on regular expressions",
          "By utilizing multi-head self-attention to encode bidirectional contextual representations of words across full sentences simultaneously",
          "By memorizing every sentence in Wikipedia",
          "By converting text to audio signals"
        ],
        "correct": 0,
        "explanation": "Bidirectional self-attention layers capture long-range contextual dependencies and nuances across the entire sentence simultaneously.",
        "difficulty": "hard"
      }
    ],
    "ner": [
      {
        "id": "ner-1",
        "question": "What is Named Entity Recognition (NER) in NLP?",
        "options": [
          "Identifying and classifying key entities in text into predefined categories such as PERSON, LOCATION, ORG, DATE, and MONEY",
          "Correcting spelling errors in student essays",
          "Compressing text files into ZIP archives",
          "Translating words from English to French"
        ],
        "correct": 0,
        "explanation": "NER seeks to locate mentions of real-world entities in text and classify them into predetermined categories.",
        "difficulty": "easy"
      },
      {
        "id": "ner-2",
        "question": "In the VR NER lab, what is the primary sample sentence?",
        "options": [
          "'Sundar Pichai met Google teams in Mumbai on 12 March 2026.'",
          "'Natural language processing requires big neural networks.'",
          "'Database transactions must satisfy ACID properties.'",
          "'The internet connects routers across global optical cables.'"
        ],
        "correct": 0,
        "explanation": "The VR scene loads: 'Sundar Pichai met Google teams in Mumbai on 12 March 2026.'.",
        "difficulty": "easy"
      },
      {
        "id": "ner-3",
        "question": "In the VR lab, what entity type is assigned to 'Google'?",
        "options": [
          "ORG (Organization)",
          "PERSON",
          "LOCATION",
          "DATE"
        ],
        "correct": 0,
        "explanation": "'Google' is categorized as an ORG (Organization).",
        "difficulty": "easy"
      },
      {
        "id": "ner-4",
        "question": "What entity type is assigned to 'Mumbai' in the VR lab?",
        "options": [
          "LOCATION",
          "MONEY",
          "PERSON",
          "DATE"
        ],
        "correct": 0,
        "explanation": "'Mumbai' is categorized as a LOCATION.",
        "difficulty": "easy"
      },
      {
        "id": "ner-5",
        "question": "In the VR lab's 'Gazetteer lookup' station, what is a gazetteer?",
        "options": [
          "A pre-compiled dictionary or list of known entity names (e.g. people, cities, companies)",
          "A specialized hardware graphics card",
          "An algorithm for sorting numbers",
          "A database index for primary keys"
        ],
        "correct": 0,
        "explanation": "A gazetteer is a geographical or named entity dictionary used for lookup-based entity identification.",
        "difficulty": "medium"
      },
      {
        "id": "ner-6",
        "question": "In the VR lab, why are regular expression patterns used in the 'Pattern rules' station instead of a gazetteer for DATE and MONEY?",
        "options": [
          "Because dates and monetary amounts follow infinite numeric combinations and syntactic patterns that no finite list can enumerate",
          "Because regular expressions are faster than computer memory",
          "Because gazetteers cannot store numbers",
          "Because dates cannot be tokenized"
        ],
        "correct": 0,
        "explanation": "Numeric formats like '12 March 2026' or 'Rs 60,000' have infinite combinations, best captured by regex patterns.",
        "difficulty": "medium"
      },
      {
        "id": "ner-7",
        "question": "In the VR lab sample, what entity category is detected by pattern rules for '12 March 2026'?",
        "options": [
          "DATE",
          "MONEY",
          "ORG",
          "PERSON"
        ],
        "correct": 0,
        "explanation": "The date regex matches '12 March 2026' and tags it as DATE.",
        "difficulty": "medium"
      },
      {
        "id": "ner-8",
        "question": "In standard BIO (Begin, Inside, Outside) chunking notation for NER, what does the tag 'B-PER' mean?",
        "options": [
          "The beginning of a Person entity mention",
          "A token inside a Person entity that is not the start",
          "A token outside any named entity",
          "A binary punctuation error"
        ],
        "correct": 0,
        "explanation": "In BIO tagging, 'B-' marks the first token of an entity, while 'I-' marks subsequent tokens within the same multi-token entity.",
        "difficulty": "medium"
      },
      {
        "id": "ner-9",
        "question": "How would the multi-word entity 'Sundar Pichai' be represented using BIO tagging?",
        "options": [
          "Sundar: B-PER, Pichai: I-PER",
          "Sundar: I-PER, Pichai: B-PER",
          "Sundar: O, Pichai: O",
          "Sundar: B-LOC, Pichai: I-LOC"
        ],
        "correct": 0,
        "explanation": "'Sundar' begins the person entity (B-PER), and 'Pichai' continues it (I-PER).",
        "difficulty": "medium"
      },
      {
        "id": "ner-10",
        "question": "In the second VR lab sample 'Priya joined Infosys in Pune and earns Rs 60,000', what entity label is assigned to 'Rs 60,000'?",
        "options": [
          "MONEY",
          "DATE",
          "ORG",
          "LOCATION"
        ],
        "correct": 0,
        "explanation": "Currency symbols followed by numbers are detected by regex patterns and tagged as MONEY.",
        "difficulty": "medium"
      },
      {
        "id": "ner-11",
        "question": "What is the primary limitation of relying solely on gazetteers (dictionaries) for Named Entity Recognition in real-world applications?",
        "options": [
          "Gazetteers cannot generalize to novel, unseen entity names, and they cannot resolve ambiguous entity names that depend on context (e.g. 'Apple' as company vs fruit)",
          "Gazetteers are too fast for modern CPUs",
          "Gazetteers only work on French text",
          "Gazetteers corrupt the computer's hard drive"
        ],
        "correct": 0,
        "explanation": "Gazetteers fail on Out-Of-Vocabulary entities and cannot disambiguate polysemous names without syntactic context.",
        "difficulty": "hard"
      },
      {
        "id": "ner-12",
        "question": "What is Entity Linking (or Entity Disambiguation) following NER extraction?",
        "options": [
          "Mapping an extracted entity mention (e.g. 'Mumbai') to a unique knowledge base identifier (e.g. Wikidata Q1156)",
          "Connecting two words with a hyphen",
          "Sorting entities in alphabetical order",
          "Deleting entities from the database"
        ],
        "correct": 0,
        "explanation": "Entity Linking grounds extracted text strings to canonical entities in a knowledge graph (like Wikidata or DBpedia).",
        "difficulty": "hard"
      },
      {
        "id": "ner-13",
        "question": "Why are bidirectional neural models (BiLSTM-CRF or BERT) superior to unidirectional left-to-right models for NER tagging?",
        "options": [
          "Because identifying whether a word is an entity often depends on trailing words that appear after the mention as well as preceding context",
          "Because unidirectional models cannot process punctuation",
          "Because bidirectional models do not require any training data",
          "Because unidirectional models only support numbers"
        ],
        "correct": 0,
        "explanation": "Context from both the left (e.g. 'met with...') and the right (e.g. '...CEO of...') provides vital clues for entity identification.",
        "difficulty": "hard"
      },
      {
        "id": "ner-14",
        "question": "In the VR lab sample 'The Reserve Bank of India announced new rules in Delhi on 5 June', how is nested entity ambiguity ('India' inside 'Reserve Bank of India') handled?",
        "options": [
          "The longer matching span is prioritized ('Reserve Bank of India' as ORG), preventing the shorter substring from splitting the organization name",
          "Both entities are deleted",
          "The system crashes and reboots",
          "The entire sentence is tagged as LOCATION"
        ],
        "correct": 0,
        "explanation": "Longer multi-token organization spans take precedence over nested sub-locations to avoid erroneous fragmentations.",
        "difficulty": "hard"
      }
    ],
    "bag-of-words": [
      {
        "id": "bag-of-words-1",
        "question": "What is the core concept of the Bag of Words (BoW) model in Natural Language Processing?",
        "options": [
          "Representing text as a collection of word counts, completely ignoring word order and grammar",
          "Sorting words into alphabetical anagrams",
          "Translating text using bilingual grammar rules",
          "Compressing text files using Huffman binary trees"
        ],
        "correct": 0,
        "explanation": "BoW treats each document as an unordered 'bag' of words, retaining only term frequencies.",
        "difficulty": "easy"
      },
      {
        "id": "bag-of-words-2",
        "question": "In the VR Bag of Words lab, what preprocessing step is applied before building the vocabulary?",
        "options": [
          "Lowercasing and stop-word removal (e.g. 'i', 'the', 'on', 'and' are removed)",
          "Converting words to audio signals",
          "Adding random punctuation marks",
          "Capitalizing all consonants"
        ],
        "correct": 0,
        "explanation": "Common stop words like 'i', 'the', 'on', and 'and' are filtered out first.",
        "difficulty": "easy"
      },
      {
        "id": "bag-of-words-3",
        "question": "What are the 5 sequential stations shown in the VR Bag of Words lab?",
        "options": [
          "Documents -> Vocabulary -> Count words -> Matrix -> Compare docs",
          "Vocabulary -> Documents -> Compare docs -> Count words -> Matrix",
          "Count words -> Matrix -> Documents -> Vocabulary -> Compare docs",
          "Compare docs -> Documents -> Vocabulary -> Count words -> Matrix"
        ],
        "correct": 0,
        "explanation": "The glowing packet travels through: Documents, Vocabulary, Count words, Matrix, and Compare docs.",
        "difficulty": "easy"
      },
      {
        "id": "bag-of-words-4",
        "question": "Why do sentences with identical words in different order (e.g. 'cat sat on mat' vs 'mat sat on cat') get identical Bag of Words representations?",
        "options": [
          "Because the model counts word frequencies and completely discards sequential word order",
          "Because the tokenizer deletes all nouns",
          "Because grammar rules are strictly enforced",
          "Because both sentences have the same character count"
        ],
        "correct": 0,
        "explanation": "Because word order is discarded, any permutation of the same words yields the exact same count vector.",
        "difficulty": "easy"
      },
      {
        "id": "bag-of-words-5",
        "question": "In the VR lab sample 'I love NLP | I love machine learning | NLP loves data', why do 'love' and 'loves' count as two distinct vocabulary entries?",
        "options": [
          "Because Bag of Words treats different inflected forms as separate words without stemming or lemmatization",
          "Because one word is capitalized and the other is not",
          "Because the model only allows 4-letter words",
          "Because 'loves' is classified as an adjective"
        ],
        "correct": 0,
        "explanation": "Without stemming/lemmatization, morphological variants ('love' vs 'loves') remain distinct vocabulary columns, motivating stemming upstream.",
        "difficulty": "medium"
      },
      {
        "id": "bag-of-words-6",
        "question": "In the VR lab, after stop-word removal on 'I love NLP | I love machine learning | NLP loves data', what is the vocabulary size and D1's vector?",
        "options": [
          "Vocabulary has 6 unique words (['love', 'nlp', 'machine', 'learning', 'loves', 'data']), and D1 = [1, 1, 0, 0, 0, 0]",
          "Vocabulary has 3 words, and D1 = [3, 0, 0]",
          "Vocabulary has 15 words, and D1 = [1, 1, 1, 1, 1, 1]",
          "Vocabulary has 10 words, and D1 = [0, 0, 0, 0, 0, 0]"
        ],
        "correct": 0,
        "explanation": "With 'i' removed as a stop word, the vocabulary has 6 words and D1 ('love nlp') has vector [1, 1, 0, 0, 0, 0].",
        "difficulty": "medium"
      },
      {
        "id": "bag-of-words-7",
        "question": "In the VR lab's 'Compare docs' station, what is the Cosine Similarity between D2 ('I love machine learning') and D3 ('NLP loves data')?",
        "options": [
          "0.00 (they share zero vocabulary words because 'love' and 'loves' are distinct)",
          "0.50",
          "1.00",
          "0.85"
        ],
        "correct": 0,
        "explanation": "D2 and D3 share no common vocabulary words, so their dot product is 0, giving cosine similarity 0.00.",
        "difficulty": "medium"
      },
      {
        "id": "bag-of-words-8",
        "question": "In the second VR lab sample 'the cat sat on the mat | the dog sat on the log | cats and dogs', how are 'cat' and 'cats' treated?",
        "options": [
          "As separate unique vocabulary words, again demonstrating why stemming is needed",
          "They are merged into a single token by default",
          "Both words are deleted as stop words",
          "They are replaced with numbers"
        ],
        "correct": 0,
        "explanation": "'cat' and 'cats' remain separate tokens in standard BoW unless morphological stemming is applied.",
        "difficulty": "medium"
      },
      {
        "id": "bag-of-words-9",
        "question": "What metric is used in the VR lab's 'Compare docs' station to compare document vectors?",
        "options": [
          "Cosine Similarity: cos(A, B) = (A · B) / (||A|| * ||B||)",
          "Euclidean Distance: ||A - B||",
          "Manhattan Distance: sum(|A - B|)",
          "Hamming Distance"
        ],
        "correct": 0,
        "explanation": "Cosine similarity evaluates the cosine of the angle between document count vectors.",
        "difficulty": "medium"
      },
      {
        "id": "bag-of-words-10",
        "question": "In the VR lab, what does a Cosine Similarity of 1.0 indicate between two document vectors?",
        "options": [
          "Identical word distribution direction in vector space",
          "The documents share zero words",
          "One document is twice as long as the other",
          "Both documents contain only stop words"
        ],
        "correct": 0,
        "explanation": "Cosine similarity of 1.0 means the vectors point in the exact same direction, indicating identical word distributions.",
        "difficulty": "medium"
      },
      {
        "id": "bag-of-words-11",
        "question": "Why is the Document-Term Matrix (DTM) for a large corpus typically sparse (mostly zeros)?",
        "options": [
          "Because any individual document uses only a tiny fraction of the total vocabulary across the entire corpus",
          "Because stop-word removal deletes all nouns",
          "Because computers cannot store non-zero numbers in matrices",
          "Because DTM algorithms zero out words with fewer than 5 letters"
        ],
        "correct": 0,
        "explanation": "Large corpora have tens of thousands of unique words, but typical documents contain only a few dozen, making most matrix cells 0.",
        "difficulty": "hard"
      },
      {
        "id": "bag-of-words-12",
        "question": "How does the N-gram approach address the primary limitation of the Bag of Words model?",
        "options": [
          "By grouping contiguous sequences of N words (e.g. bigrams like 'machine_learning', 'not_good'), preserving local word order and phrase context",
          "By sorting all words in alphabetical order",
          "By removing all vowels from documents",
          "By converting text into 3D polygon meshes"
        ],
        "correct": 0,
        "explanation": "N-grams capture local word order and multi-word collocations that unigram BoW models discard.",
        "difficulty": "hard"
      },
      {
        "id": "bag-of-words-13",
        "question": "Why does Cosine Similarity handle documents of varying lengths better than Euclidean Distance in BoW?",
        "options": [
          "Cosine similarity measures vector angle rather than magnitude, so a long document and short document on the same topic remain close",
          "Euclidean distance cannot be computed on integers",
          "Cosine similarity ignores negative numbers while Euclidean distance requires them",
          "Cosine similarity converts matrices into binary numbers"
        ],
        "correct": 0,
        "explanation": "Cosine similarity normalizes for document length by evaluating angular orientation rather than Euclidean coordinate displacement.",
        "difficulty": "hard"
      },
      {
        "id": "bag-of-words-14",
        "question": "What is the primary semantic shortcoming of BoW when dealing with synonyms like 'physician' and 'doctor'?",
        "options": [
          "BoW maps them to completely orthogonal dimensions with 0 similarity, failing to capture their shared meaning",
          "BoW deletes one of the synonyms as a duplicate",
          "BoW crashes if two words share the same definition",
          "BoW automatically replaces 'physician' with 'doctor'"
        ],
        "correct": 0,
        "explanation": "BoW treats every distinct word as an orthogonal basis vector with 0 overlap, regardless of synonymous meaning.",
        "difficulty": "hard"
      }
    ],
    "tf-idf": [
      {
        "id": "tf-idf-1",
        "question": "What does the acronym TF-IDF stand for in Natural Language Processing?",
        "options": [
          "Term Frequency - Inverse Document Frequency",
          "Text Formatting - Integrated Data Framework",
          "Token Filtering - Indexed Document File",
          "Total Frequency - Initialized Direct Function"
        ],
        "correct": 0,
        "explanation": "TF-IDF stands for Term Frequency - Inverse Document Frequency.",
        "difficulty": "easy"
      },
      {
        "id": "tf-idf-2",
        "question": "What is the primary purpose of TF-IDF weighting compared to raw word counts?",
        "options": [
          "Penalizing ubiquitous words that appear across all documents while highlighting distinctive topical keywords",
          "Compressing text documents into ZIP files",
          "Translating foreign words into English",
          "Counting total characters in text files"
        ],
        "correct": 0,
        "explanation": "TF-IDF down-weights common corpus-wide words while promoting terms that occur frequently in specific documents.",
        "difficulty": "easy"
      },
      {
        "id": "tf-idf-3",
        "question": "In the VR TF-IDF lab, what are the 5 sequential stations?",
        "options": [
          "Documents -> TF -> IDF -> TF x IDF -> Top keywords",
          "Documents -> Vocabulary -> Count words -> Matrix -> Compare docs",
          "TF -> IDF -> Top keywords -> Documents -> TF x IDF",
          "Top keywords -> TF x IDF -> IDF -> TF -> Documents"
        ],
        "correct": 0,
        "explanation": "The VR stations progress through: Documents, TF, IDF, TF x IDF, and Top keywords.",
        "difficulty": "easy"
      },
      {
        "id": "tf-idf-4",
        "question": "In the VR TF-IDF lab, what is the formula used for Inverse Document Frequency (IDF)?",
        "options": [
          "IDF = ln(N / documents containing the word)",
          "IDF = N * documents containing the word",
          "IDF = documents containing the word / N",
          "IDF = 1 / (N + documents containing the word)"
        ],
        "correct": 0,
        "explanation": "IDF = ln(N / documents containing the word), where N is the total number of documents.",
        "difficulty": "easy"
      },
      {
        "id": "tf-idf-5",
        "question": "In the VR lab sample 'data science uses data | machine learning uses data | art uses color and data', which word appears in every single document?",
        "options": [
          "'data' (and 'uses')",
          "'science'",
          "'machine'",
          "'art'"
        ],
        "correct": 0,
        "explanation": "Both 'data' and 'uses' appear in all 3 documents across the corpus.",
        "difficulty": "medium"
      },
      {
        "id": "tf-idf-6",
        "question": "What happens to the IDF and TF-IDF weight of a word that appears in every single document in the corpus?",
        "options": [
          "IDF = ln(N/N) = ln(1) = 0, so its TF-IDF weight drops to exactly 0 (it cannot distinguish documents)",
          "Its weight becomes 10.0 (the highest possible weight)",
          "Its weight becomes negative",
          "Its weight doubles with each document"
        ],
        "correct": 0,
        "explanation": "A word present in all documents has df = N, giving ln(1) = 0; multiplying by 0 eliminates it as a distinctive keyword.",
        "difficulty": "medium"
      },
      {
        "id": "tf-idf-7",
        "question": "In the VR lab, how is Term Frequency (TF) calculated for Document 1 ('data science uses data')?",
        "options": [
          "TF = count of word in document / total words in document (e.g. 'data' appears 2 times out of 4 words, giving TF = 0.50)",
          "TF = total characters in word",
          "TF = total documents containing word",
          "TF = number of vowels in word"
        ],
        "correct": 0,
        "explanation": "TF = count / total words in document. For 'data' in D1: 2 / 4 = 0.50.",
        "difficulty": "medium"
      },
      {
        "id": "tf-idf-8",
        "question": "In the VR lab, what is the top keyword identified for Document 1 ('data science uses data') in the final station?",
        "options": [
          "'science' (highest TF-IDF score, because 'data' drops to weight 0)",
          "'data'",
          "'uses'",
          "'computer'"
        ],
        "correct": 0,
        "explanation": "'science' is specific to D1 and achieves the highest TF-IDF score (0.28), while 'data' has weight 0.00.",
        "difficulty": "medium"
      },
      {
        "id": "tf-idf-9",
        "question": "In Document 2 ('machine learning uses data') and Document 3 ('art uses color and data'), what are the top keywords?",
        "options": [
          "D2: 'machine' (or 'learning'), D3: 'art' (or 'color')",
          "D2: 'data', D3: 'data'",
          "D2: 'uses', D3: 'uses'",
          "D2: 'and', D3: 'and'"
        ],
        "correct": 0,
        "explanation": "'machine'/'learning' are signature keywords for D2, and 'art'/'color' are top keywords for D3.",
        "difficulty": "medium"
      },
      {
        "id": "tf-idf-10",
        "question": "In the second VR lab sample 'the cat chased the mouse | the dog chased the cat | the mouse ate cheese', which word appears in all 3 documents?",
        "options": [
          "None (after stop-word removal, 'cat', 'mouse', and 'dog' have df < 3, so all have positive IDF)",
          "'the'",
          "'cheese'",
          "'dog'"
        ],
        "correct": 0,
        "explanation": "After removing stop words like 'the', terms appear in subsets of documents, receiving non-zero IDF weights.",
        "difficulty": "medium"
      },
      {
        "id": "tf-idf-11",
        "question": "Why do production information retrieval engines (like Lucene and Elasticsearch) use BM25 instead of raw TF-IDF?",
        "options": [
          "BM25 applies asymptotic saturation to term frequency and normalizes for document length relative to average corpus length",
          "BM25 uses GPUs while TF-IDF only runs on paper",
          "BM25 ignores inverse document frequency completely",
          "BM25 requires documents to be fewer than 5 words"
        ],
        "correct": 0,
        "explanation": "BM25 improves on TF-IDF by adding non-linear term frequency saturation and document length normalization.",
        "difficulty": "hard"
      },
      {
        "id": "tf-idf-12",
        "question": "In the scikit-learn TfidfVectorizer implementation, why is smoothing (+1) applied to the denominator: ln((1 + N) / (1 + df)) + 1?",
        "options": [
          "To prevent division by zero for out-of-vocabulary terms and ensure words in all documents do not get an IDF of exactly zero",
          "To compress files on disk",
          "To convert floating point weights to integers",
          "To sort terms alphabetically"
        ],
        "correct": 0,
        "explanation": "Smoothing prevents division by zero and ensures common terms retain a small non-zero weight rather than being completely erased.",
        "difficulty": "hard"
      },
      {
        "id": "tf-idf-13",
        "question": "What is the primary computational advantage of TF-IDF representations for sparse inverted indices in search engines?",
        "options": [
          "Query matching requires evaluating only posting lists for words present in the query, enabling sub-millisecond retrieval across millions of documents",
          "TF-IDF matrices require zero RAM",
          "TF-IDF models never need training data",
          "TF-IDF requires no CPU cycles"
        ],
        "correct": 0,
        "explanation": "Inverted indices map terms to posting lists with TF-IDF weights, allowing rapid candidate document scoring without scanning the full corpus.",
        "difficulty": "hard"
      },
      {
        "id": "tf-idf-14",
        "question": "What is a major limitation of TF-IDF that led to the development of dense Word Embeddings?",
        "options": [
          "TF-IDF relies strictly on lexical surface string matches and cannot understand that 'automobile' and 'car' share the same meaning",
          "TF-IDF cannot handle English grammar",
          "TF-IDF produces non-numeric outputs",
          "TF-IDF is too slow for modern computers"
        ],
        "correct": 0,
        "explanation": "TF-IDF is strictly lexical; if a document uses 'automobile' and a query uses 'car', their TF-IDF dot product is zero.",
        "difficulty": "hard"
      }
    ],
    "word-embeddings": [
      {
        "id": "word-embeddings-1",
        "question": "What are word embeddings in Natural Language Processing?",
        "options": [
          "Dense continuous numerical vectors where meaning is captured as geometric distance and direction",
          "Sparse one-hot vectors containing thousands of zeros",
          "Encrypted database passwords",
          "Physical silicon transistors on microchips"
        ],
        "correct": 0,
        "explanation": "Word embeddings represent words as dense continuous vectors that encode semantic relationships geometrically.",
        "difficulty": "easy"
      },
      {
        "id": "word-embeddings-2",
        "question": "In the VR Word Embeddings lab, what semantic dimensions make up the toy 4-D embedding space?",
        "options": [
          "[royalty, male, animal, food]",
          "[red, green, blue, alpha]",
          "[x, y, z, time]",
          "[noun, verb, adjective, adverb]"
        ],
        "correct": 0,
        "explanation": "The VR lab uses a toy 4-D semantic vector space: [royalty, male, animal, food].",
        "difficulty": "easy"
      },
      {
        "id": "word-embeddings-3",
        "question": "What are the 10 toy words included in the VR lab's vocabulary?",
        "options": [
          "king, queen, prince, princess, man, woman, cat, dog, apple, banana",
          "north, south, east, west, up, down, left, right, top, bottom",
          "one, two, three, four, five, six, seven, eight, nine, ten",
          "red, blue, green, yellow, orange, purple, black, white, gray, brown"
        ],
        "correct": 0,
        "explanation": "The VR scene defines a 10-word toy vocabulary: king, queen, prince, princess, man, woman, cat, dog, apple, banana.",
        "difficulty": "easy"
      },
      {
        "id": "word-embeddings-4",
        "question": "What classic vector arithmetic analogy is demonstrated in the VR lab?",
        "options": [
          "king - man + woman = queen",
          "apple + orange = banana",
          "dog - cat = lion",
          "car + bus = airplane"
        ],
        "correct": 0,
        "explanation": "The famous semantic analogy vector operation demonstrated is: king - man + woman = queen.",
        "difficulty": "easy"
      },
      {
        "id": "word-embeddings-5",
        "question": "In the VR lab, when performing vector math: prince - man + woman, what is the closest resulting word?",
        "options": [
          "'princess' (title analogy equivalence)",
          "'queen'",
          "'cat'",
          "'banana'"
        ],
        "correct": 0,
        "explanation": "Applying the gender translation vector (- man + woman) to 'prince' yields 'princess'.",
        "difficulty": "medium"
      },
      {
        "id": "word-embeddings-6",
        "question": "In the VR lab, when evaluating the single word query 'cat', which word is closest in vector space?",
        "options": [
          "'dog' (highest cosine similarity, both share the animal dimension)",
          "'apple'",
          "'king'",
          "'man'"
        ],
        "correct": 0,
        "explanation": "'cat' and 'dog' both have high coordinates in the animal dimension (0.9), yielding cosine similarity 0.99.",
        "difficulty": "medium"
      },
      {
        "id": "word-embeddings-7",
        "question": "In the VR lab, what are the toy 4-D coordinates for 'king' along [royalty, male, animal, food]?",
        "options": [
          "[0.9, 0.8, 0.1, 0] (high royalty, high male)",
          "[0, 0, 0, 0.9]",
          "[0, 0, 0.9, 0]",
          "[0.1, -0.9, 0.2, 0]"
        ],
        "correct": 0,
        "explanation": "In the scene's embedding table, 'king' is [0.9, 0.8, 0.1, 0].",
        "difficulty": "medium"
      },
      {
        "id": "word-embeddings-8",
        "question": "What are the 5 sequential stations shown in the VR Word Embeddings lab?",
        "options": [
          "Words -> Embedding lookup -> Cosine similarity -> Vector math -> Result",
          "Words -> Vector math -> Result -> Cosine similarity -> Embedding lookup",
          "Embedding lookup -> Words -> Vector math -> Result -> Cosine similarity",
          "Result -> Words -> Embedding lookup -> Vector math -> Cosine similarity"
        ],
        "correct": 0,
        "explanation": "The packet travels through: Words, Embedding lookup, Cosine similarity, Vector math, and Result.",
        "difficulty": "medium"
      },
      {
        "id": "word-embeddings-9",
        "question": "What foundational linguistic principle underpins word embeddings?",
        "options": [
          "Firth's Distributional Hypothesis: 'You shall know a word by the company it keeps'",
          "Chomsky's Universal Grammar",
          "Moore's Law",
          "Shannon's Entropy Theorem"
        ],
        "correct": 0,
        "explanation": "The distributional hypothesis states that words appearing in similar linguistic contexts have similar meanings.",
        "difficulty": "medium"
      },
      {
        "id": "word-embeddings-10",
        "question": "In the VR lab, what does Cosine Similarity evaluate between two word embeddings?",
        "options": [
          "The cosine of the angle between their vectors (1 = same direction, 0 = orthogonal)",
          "The difference in their character counts",
          "The number of syllables",
          "The alphabetical distance between first letters"
        ],
        "correct": 0,
        "explanation": "Cosine similarity measures the orientation angle between two word vectors in geometric space.",
        "difficulty": "medium"
      },
      {
        "id": "word-embeddings-11",
        "question": "What are the two training architectures introduced in Mikolov et al.'s Word2Vec (2013)?",
        "options": [
          "Continuous Bag of Words (CBOW, predicts target from context) and Skip-gram (predicts context from target)",
          "CNN and RNN",
          "Decision Trees and Random Forests",
          "SVM and K-Means"
        ],
        "correct": 0,
        "explanation": "Word2Vec introduced CBOW (context predicting center word) and Skip-gram (center word predicting context).",
        "difficulty": "hard"
      },
      {
        "id": "word-embeddings-12",
        "question": "How does GloVe (Global Vectors) derive word embeddings compared to Word2Vec?",
        "options": [
          "GloVe factorizes a global log-bilinear word co-occurrence matrix across the entire corpus, combining global statistics with local window models",
          "GloVe randomly assigns numbers to words",
          "GloVe reads dictionary definitions with regular expressions",
          "GloVe only works on sentences shorter than 5 words"
        ],
        "correct": 0,
        "explanation": "GloVe leverages global corpus-wide co-occurrence statistics to optimize log-bilinear dot products.",
        "difficulty": "hard"
      },
      {
        "id": "word-embeddings-13",
        "question": "What is the primary limitation of static embeddings (like Word2Vec and GloVe) that motivated Transformer models (like BERT)?",
        "options": [
          "Polysemy: static embeddings assign a single fixed vector per word, collapsing distinct meanings (e.g. 'bank' as river bank vs financial institution) into one compromise vector",
          "Static embeddings cannot be stored on hard drives",
          "Static embeddings only support 3-letter words",
          "Static embeddings produce non-numeric vectors"
        ],
        "correct": 0,
        "explanation": "Static embeddings cannot handle context-dependent word senses (polysemy); contextual embeddings (like BERT) generate dynamic vectors based on surrounding text.",
        "difficulty": "hard"
      },
      {
        "id": "word-embeddings-14",
        "question": "How does FastText improve upon Word2Vec when encountering Out-Of-Vocabulary (OOV) words?",
        "options": [
          "FastText represents words as bags of character n-grams (subwords), allowing unseen or misspelled words to be assembled from known subword embeddings",
          "FastText deletes unknown words completely",
          "FastText prompts the user to define the word",
          "FastText assigns a vector of all zeros"
        ],
        "correct": 0,
        "explanation": "FastText learns embeddings for character n-grams, enabling it to represent rare, morphologically inflected, or unseen words.",
        "difficulty": "hard"
      }
    ],
    "sentiment-analysis": [
      {
        "id": "sentiment-analysis-1",
        "question": "What is the primary objective of Sentiment Analysis in Natural Language Processing?",
        "options": [
          "Determining whether text expresses a POSITIVE, NEGATIVE, or NEUTRAL opinion or attitude",
          "Counting vowels and consonants in text",
          "Correcting spelling and punctuation errors",
          "Translating English sentences into German"
        ],
        "correct": 0,
        "explanation": "Sentiment analysis identifies the emotional tone, polarity, and subjective attitude expressed in text.",
        "difficulty": "easy"
      },
      {
        "id": "sentiment-analysis-2",
        "question": "What are the 5 sequential stations shown in the VR Sentiment Analysis lab?",
        "options": [
          "Raw text -> Clean + tokens -> Lexicon scores -> Negation + sum -> Label",
          "Label -> Raw text -> Clean + tokens -> Lexicon scores -> Negation + sum",
          "Lexicon scores -> Clean + tokens -> Negation + sum -> Raw text -> Label",
          "Clean + tokens -> Raw text -> Label -> Negation + sum -> Lexicon scores"
        ],
        "correct": 0,
        "explanation": "The stations are: Raw text, Clean + tokens, Lexicon scores, Negation + sum, and Label.",
        "difficulty": "easy"
      },
      {
        "id": "sentiment-analysis-3",
        "question": "In the VR lab's 'Clean + tokens' station, why must negation words like 'not' be KEPT rather than removed as stop words?",
        "options": [
          "Because negation words flip the sentiment sign of subsequent words (e.g. 'not good' becomes negative)",
          "Because 'not' is an adjective",
          "Because computer memory requires the word 'not'",
          "Because 'not' is capitalized"
        ],
        "correct": 0,
        "explanation": "Filtering out 'not' would leave only 'good', erroneously converting a negative review into a positive one.",
        "difficulty": "easy"
      },
      {
        "id": "sentiment-analysis-4",
        "question": "In the VR lab, how does the model classify a sentence with a total sentiment score of 0 (e.g. 'It arrived on Monday.')?",
        "options": [
          "NEUTRAL",
          "POSITIVE",
          "NEGATIVE",
          "SARCASTIC"
        ],
        "correct": 0,
        "explanation": "A total score of 0 indicates neutral sentiment (neither positive nor negative).",
        "difficulty": "easy"
      },
      {
        "id": "sentiment-analysis-5",
        "question": "In the VR lab sample 'The movie was not good, it was boring and slow.', what is the final score and label?",
        "options": [
          "Total score = -5, Label = NEGATIVE ('not good' = -2, 'boring' = -2, 'slow' = -1)",
          "Total score = +2, Label = POSITIVE",
          "Total score = 0, Label = NEUTRAL",
          "Total score = +10, Label = POSITIVE"
        ],
        "correct": 0,
        "explanation": "'not' flips 'good' (+2) to -2; adding 'boring' (-2) and 'slow' (-1) gives -5 (NEGATIVE).",
        "difficulty": "medium"
      },
      {
        "id": "sentiment-analysis-6",
        "question": "In the VR lab sample 'I love this phone, the camera is amazing!', what is the total score and label?",
        "options": [
          "Total score = +6, Label = POSITIVE ('love' = +3, 'amazing' = +3)",
          "Total score = -5, Label = NEGATIVE",
          "Total score = 0, Label = NEUTRAL",
          "Total score = +1, Label = NEUTRAL"
        ],
        "correct": 0,
        "explanation": "'love' (+3) and 'amazing' (+3) sum to +6, classifying the sentence as POSITIVE.",
        "difficulty": "medium"
      },
      {
        "id": "sentiment-analysis-7",
        "question": "In the VR lab's 'Negation + sum' station, what effect does an intensifier like 'very' have on the following word?",
        "options": [
          "It boosts the sentiment magnitude by multiplying the score (e.g. by 1.5x)",
          "It flips the sign of the word to negative",
          "It zeroes out the word's score",
          "It deletes the word from the sentence"
        ],
        "correct": 0,
        "explanation": "Intensifiers (like 'very' or 'really') amplify the emotional intensity of the following word.",
        "difficulty": "medium"
      },
      {
        "id": "sentiment-analysis-8",
        "question": "What list of negation words is checked in the VR lab's negation logic?",
        "options": [
          "['not', 'no', 'never', \"isn't\", \"wasn't\", \"don't\", \"didn't\", \"can't\"]",
          "['and', 'or', 'but', 'so']",
          "['the', 'a', 'an']",
          "['in', 'on', 'at', 'to']"
        ],
        "correct": 0,
        "explanation": "The VR lab checks common negation words and contractions to invert the sign of the subsequent emotive token.",
        "difficulty": "medium"
      },
      {
        "id": "sentiment-analysis-9",
        "question": "How do modern machine learning sentiment classifiers differ from simple fixed-lexicon rule engines?",
        "options": [
          "Modern classifiers learn contextual weights directly from labelled training corpora rather than relying on a static handcrafted lexicon",
          "Modern classifiers cannot classify negative text",
          "Modern classifiers require human beings to score every word manually",
          "Modern classifiers only work on single-word sentences"
        ],
        "correct": 0,
        "explanation": "Machine learning models learn complex contextual weights and semantic dependencies directly from training data.",
        "difficulty": "medium"
      },
      {
        "id": "sentiment-analysis-10",
        "question": "In the VR lab, what individual scores are assigned to 'love' and 'boring' in the lexicon?",
        "options": [
          "'love' = +3 (positive), 'boring' = -2 (negative)",
          "'love' = 0, 'boring' = 0",
          "'love' = -3, 'boring' = +2",
          "'love' = +10, 'boring' = -10"
        ],
        "correct": 0,
        "explanation": "In the VR lexicon table: love has valence +3, and boring has valence -2.",
        "difficulty": "medium"
      },
      {
        "id": "sentiment-analysis-11",
        "question": "Why does sarcasm pose an acute challenge for lexicon-based sentiment analysis?",
        "options": [
          "Sarcastic text uses explicitly positive surface words (e.g. 'Oh fantastic, another delayed flight!') to convey deeply negative intent",
          "Sarcastic sentences contain no words",
          "Sarcasm is only used in spoken audio, never written text",
          "Sarcastic text crashes web browsers"
        ],
        "correct": 0,
        "explanation": "Sarcasm inverts meaning pragmatically without explicit negation words, confounding lexical analyzers that score positive words positively.",
        "difficulty": "hard"
      },
      {
        "id": "sentiment-analysis-12",
        "question": "What is Aspect-Based Sentiment Analysis (ABSA)?",
        "options": [
          "Extracting fine-grained sentiment polarity for specific entities or features (e.g. 'The food was delicious (+), but the service was terrible (-)')",
          "Measuring the aspect ratio of images in online reviews",
          "Counting total adjectives in customer feedback",
          "Classifying reviews strictly by star rating"
        ],
        "correct": 0,
        "explanation": "ABSA breaks down sentiment by target aspect or feature rather than assigning a single global document polarity.",
        "difficulty": "hard"
      },
      {
        "id": "sentiment-analysis-13",
        "question": "In VADER (Valence Aware Dictionary and sEntiment Reasoner), how do punctuation marks ('!!!') and capitalization ('GREAT') affect scores?",
        "options": [
          "VADER applies heuristic boosting rules that amplify valence intensity for exclamation marks and full capitalization",
          "They cause the sentence to be ignored",
          "They flip positive words into negative words",
          "They set the total score to zero"
        ],
        "correct": 0,
        "explanation": "VADER incorporates heuristic booster rules: capitalization and multiple punctuation marks magnify valence intensity.",
        "difficulty": "hard"
      },
      {
        "id": "sentiment-analysis-14",
        "question": "Why do fine-tuned Transformer models (like BERT or RoBERTa) achieve higher accuracy on sentiment benchmarks than lexicon methods?",
        "options": [
          "Self-attention models complex syntactic dependencies, negation scope across multi-clause boundaries, and nuanced contextual pragmatic cues",
          "Transformers only process positive text",
          "Transformers memorize every review on the internet",
          "Transformers do not use numerical vectors"
        ],
        "correct": 0,
        "explanation": "Bidirectional self-attention models capture multi-clause negation scope, idioms, and subtle contextual nuances.",
        "difficulty": "hard"
      }
    ]
  },
  "dbms": {
    "data-abstraction-independence": [
      {
        "id": "dbms-data-abstraction-1",
        "question": "In the ANSI/SPARC three-level DBMS architecture, which level describes HOW data is actually stored on physical storage devices?",
        "options": [
          "Physical (Internal) Level",
          "Conceptual (Logical) Level",
          "External (View) Level",
          "Application Program Level"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The Physical (Internal) level is the lowest level of data abstraction and specifies how data blocks, indexes, record layouts, and storage files are organized on physical media."
      },
      {
        "id": "dbms-data-abstraction-2",
        "question": "Which level of data abstraction is customized for end users, hiding unnecessary data from specific roles (e.g., student view vs. payroll view)?",
        "options": [
          "External (View) Level",
          "Internal Level",
          "Physical Level",
          "Network Level"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The External or View level provides customized views of the database for different user groups, showing only relevant fields and shielding confidential data."
      },
      {
        "id": "dbms-data-abstraction-3",
        "question": "What is Physical Data Independence in database management systems?",
        "options": [
          "The ability to modify the physical storage structures (like adding an index) without altering the logical schema or user views.",
          "The ability to delete database hard drives without losing running applications.",
          "The ability to change column definitions without notifying the database administrator.",
          "The decoupling of operating systems from computer hardware."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Physical Data Independence allows DBAs to tune or reorganize physical storage (e.g., changing file block layouts or indexes) without altering the conceptual logical schema."
      },
      {
        "id": "dbms-data-abstraction-4",
        "question": "Who is primarily responsible for designing and maintaining the global Conceptual (Logical) schema of an enterprise database?",
        "options": [
          "Database Administrator (DBA)",
          "End Users",
          "Network Hardware Vendors",
          "External Web Consumers"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The Database Administrator (DBA) designs and maintains the global conceptual schema, defining all entities, relations, keys, and security rules."
      },
      {
        "id": "dbms-data-abstraction-5",
        "question": "What is Logical Data Independence, and how does it compare in difficulty to Physical Data Independence?",
        "options": [
          "The capacity to alter the conceptual schema (e.g., adding an attribute) without altering external views; it is harder to achieve than physical data independence.",
          "The capacity to change physical disks without restarting queries; it is easier to achieve than physical data independence.",
          "The automatic compilation of SQL queries into machine bytecode; it requires no mappings.",
          "The separation of database tables across independent network routers."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Logical Data Independence protects existing external views and application programs when the conceptual schema evolves. It is significantly harder to achieve because applications are closely tied to logical table structures."
      },
      {
        "id": "dbms-data-abstraction-6",
        "question": "In the 3-schema architecture, what is the role of the Conceptual-to-Internal Mapping?",
        "options": [
          "It translates logical records and relationships into physical storage addresses, blocks, and file pointers.",
          "It converts external HTML web pages into SQL select statements.",
          "It authenticates user passwords using salted cryptographic hashes.",
          "It maps user interface button clicks directly to CPU registers."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The Conceptual-to-Internal mapping defines the correspondence between conceptual logical entities and their actual internal physical storage representations on disk."
      },
      {
        "id": "dbms-data-abstraction-7",
        "question": "If a DBA decides to partition a large table across two SSD storage volumes and create a new B+ tree secondary index, which level is altered and what mapping must be updated?",
        "options": [
          "Physical level is altered; only the Conceptual-to-Internal mapping must be updated.",
          "View level is altered; the External-to-Conceptual mapping is updated.",
          "Conceptual level is altered; application programs must be rewritten.",
          "All three levels must be completely recreated from scratch."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Adding an index or changing storage drives is a physical level modification. Thanks to physical data independence, only the Conceptual-to-Internal mapping changes; conceptual schemas and user views remain intact."
      },
      {
        "id": "dbms-data-abstraction-8",
        "question": "Which of the following modifications is an example of exercising Logical Data Independence?",
        "options": [
          "Adding a new optional 'emergency_contact' column to a Student table without modifying existing grade-checking view queries.",
          "Moving database files from an HDD array to an NVMe SSD cluster.",
          "Switching the internal B-tree indexing order to improve disk block seek time.",
          "Enabling hardware compression at the disk controller layer."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Adding a column or table to the conceptual schema without breaking existing external applications is a prime example of logical data independence."
      },
      {
        "id": "dbms-data-abstraction-9",
        "question": "Why do relational database management systems use multi-level data abstraction rather than exposing physical storage directly to programmers?",
        "options": [
          "To prevent software applications from breaking whenever internal physical file formats or hardware storage devices are upgraded or reorganized.",
          "To artificially increase CPU utilization and storage consumption.",
          "Because operating systems cannot read files from disk drives directly.",
          "To force all database queries to be written in assembly language."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Without data abstraction, every change in hardware, disk blocks, or indexing would require rewriting application software, creating unmanageable maintenance costs."
      },
      {
        "id": "dbms-data-abstraction-10",
        "question": "How many conceptual schemas and external schemas typically exist for a single database in the ANSI/SPARC architecture?",
        "options": [
          "Exactly one Conceptual schema, but potentially many External schemas.",
          "Many Conceptual schemas, but only one External schema.",
          "Exactly one External schema and exactly one Internal schema.",
          "One External schema for each hard drive installed in the server."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "A database has exactly one global Conceptual schema (and one Internal schema), but can have numerous External schemas (views) tailored to various user groups."
      },
      {
        "id": "dbms-data-abstraction-11",
        "question": "Suppose an enterprise splits an existing conceptual relation EMP(emp_id, name, address, salary) into EMP_PUBLIC(emp_id, name) and EMP_PRIVATE(emp_id, address, salary). Which mapping preserves legacy applications querying EMP?",
        "options": [
          "The External-to-Conceptual mapping, by defining a View named EMP that computes the natural join of EMP_PUBLIC and EMP_PRIVATE.",
          "The Conceptual-to-Internal mapping, by storing both tables in the same disk block cluster.",
          "The Physical Data Independence layer, by disabling relational integrity checking.",
          "The Storage Engine layer, by converting the query into an unindexed full table scan."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Logical data independence allows creating a view `CREATE VIEW EMP AS SELECT * FROM EMP_PUBLIC NATURAL JOIN EMP_PRIVATE`, preserving legacy programs without code changes."
      },
      {
        "id": "dbms-data-abstraction-12",
        "question": "Why is Logical Data Independence significantly more difficult to achieve in database systems than Physical Data Independence?",
        "options": [
          "Because application programs and SQL queries explicitly reference logical attribute names and table structures; if conceptual schemas change, mappings can only hide additive or non-destructive changes.",
          "Because physical disk drives have more cache memory than database query compilers.",
          "Because the ANSI/SPARC standard strictly forbids defining more than two external views.",
          "Because conceptual schemas are stored in hardware ROM chips."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Application code is fundamentally coupled to entity attribute definitions. While views can shield additions and some decompositions, profound logical schema restructuring inevitably impacts application logic."
      },
      {
        "id": "dbms-data-abstraction-13",
        "question": "When a user executes a query on an External View, what sequence of transformations does the DBMS query processor perform to retrieve data blocks from disk?",
        "options": [
          "External View Query -> (External/Conceptual Mapping) -> Conceptual Logical Query -> (Conceptual/Internal Mapping) -> Internal Physical Storage Addresses.",
          "Physical Storage Addresses -> External View Query -> Conceptual Logical Query.",
          "External View Query -> CPU Machine Code -> Operating System File Buffer -> Conceptual Mapping.",
          "Conceptual Query -> External View Query -> Hardware Register Allocation."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "The query processor resolves external view definitions against the conceptual schema, and then maps conceptual predicates to physical block/index retrieval routines using the internal schema."
      },
      {
        "id": "dbms-data-abstraction-14",
        "question": "In the context of the ANSI/SPARC framework, what is the 'catalog' or 'data dictionary'?",
        "options": [
          "The repository of metadata describing the schemas, mappings, constraints, and authorization rules across all abstraction levels.",
          "A printed user guide supplied with the database installation disc.",
          "The physical storage sector where user JPEG and video blobs are stored.",
          "An external spreadsheet used by marketing to track database software licensing costs."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "The database catalog (data dictionary) stores system metadata: external views, conceptual tables/keys, internal index mappings, and access privileges."
      }
    ],
    "dbms-intro": [
      {
        "id": "dbms-data-abstraction-1",
        "question": "In the ANSI/SPARC three-level DBMS architecture, which level describes HOW data is actually stored on physical storage devices?",
        "options": [
          "Physical (Internal) Level",
          "Conceptual (Logical) Level",
          "External (View) Level",
          "Application Program Level"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The Physical (Internal) level is the lowest level of data abstraction and specifies how data blocks, indexes, record layouts, and storage files are organized on physical media."
      },
      {
        "id": "dbms-data-abstraction-2",
        "question": "Which level of data abstraction is customized for end users, hiding unnecessary data from specific roles (e.g., student view vs. payroll view)?",
        "options": [
          "External (View) Level",
          "Internal Level",
          "Physical Level",
          "Network Level"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The External or View level provides customized views of the database for different user groups, showing only relevant fields and shielding confidential data."
      },
      {
        "id": "dbms-data-abstraction-3",
        "question": "What is Physical Data Independence in database management systems?",
        "options": [
          "The ability to modify the physical storage structures (like adding an index) without altering the logical schema or user views.",
          "The ability to delete database hard drives without losing running applications.",
          "The ability to change column definitions without notifying the database administrator.",
          "The decoupling of operating systems from computer hardware."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Physical Data Independence allows DBAs to tune or reorganize physical storage (e.g., changing file block layouts or indexes) without altering the conceptual logical schema."
      },
      {
        "id": "dbms-data-abstraction-4",
        "question": "Who is primarily responsible for designing and maintaining the global Conceptual (Logical) schema of an enterprise database?",
        "options": [
          "Database Administrator (DBA)",
          "End Users",
          "Network Hardware Vendors",
          "External Web Consumers"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The Database Administrator (DBA) designs and maintains the global conceptual schema, defining all entities, relations, keys, and security rules."
      },
      {
        "id": "dbms-data-abstraction-5",
        "question": "What is Logical Data Independence, and how does it compare in difficulty to Physical Data Independence?",
        "options": [
          "The capacity to alter the conceptual schema (e.g., adding an attribute) without altering external views; it is harder to achieve than physical data independence.",
          "The capacity to change physical disks without restarting queries; it is easier to achieve than physical data independence.",
          "The automatic compilation of SQL queries into machine bytecode; it requires no mappings.",
          "The separation of database tables across independent network routers."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Logical Data Independence protects existing external views and application programs when the conceptual schema evolves. It is significantly harder to achieve because applications are closely tied to logical table structures."
      },
      {
        "id": "dbms-data-abstraction-6",
        "question": "In the 3-schema architecture, what is the role of the Conceptual-to-Internal Mapping?",
        "options": [
          "It translates logical records and relationships into physical storage addresses, blocks, and file pointers.",
          "It converts external HTML web pages into SQL select statements.",
          "It authenticates user passwords using salted cryptographic hashes.",
          "It maps user interface button clicks directly to CPU registers."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The Conceptual-to-Internal mapping defines the correspondence between conceptual logical entities and their actual internal physical storage representations on disk."
      },
      {
        "id": "dbms-data-abstraction-7",
        "question": "If a DBA decides to partition a large table across two SSD storage volumes and create a new B+ tree secondary index, which level is altered and what mapping must be updated?",
        "options": [
          "Physical level is altered; only the Conceptual-to-Internal mapping must be updated.",
          "View level is altered; the External-to-Conceptual mapping is updated.",
          "Conceptual level is altered; application programs must be rewritten.",
          "All three levels must be completely recreated from scratch."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Adding an index or changing storage drives is a physical level modification. Thanks to physical data independence, only the Conceptual-to-Internal mapping changes; conceptual schemas and user views remain intact."
      },
      {
        "id": "dbms-data-abstraction-8",
        "question": "Which of the following modifications is an example of exercising Logical Data Independence?",
        "options": [
          "Adding a new optional 'emergency_contact' column to a Student table without modifying existing grade-checking view queries.",
          "Moving database files from an HDD array to an NVMe SSD cluster.",
          "Switching the internal B-tree indexing order to improve disk block seek time.",
          "Enabling hardware compression at the disk controller layer."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Adding a column or table to the conceptual schema without breaking existing external applications is a prime example of logical data independence."
      },
      {
        "id": "dbms-data-abstraction-9",
        "question": "Why do relational database management systems use multi-level data abstraction rather than exposing physical storage directly to programmers?",
        "options": [
          "To prevent software applications from breaking whenever internal physical file formats or hardware storage devices are upgraded or reorganized.",
          "To artificially increase CPU utilization and storage consumption.",
          "Because operating systems cannot read files from disk drives directly.",
          "To force all database queries to be written in assembly language."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Without data abstraction, every change in hardware, disk blocks, or indexing would require rewriting application software, creating unmanageable maintenance costs."
      },
      {
        "id": "dbms-data-abstraction-10",
        "question": "How many conceptual schemas and external schemas typically exist for a single database in the ANSI/SPARC architecture?",
        "options": [
          "Exactly one Conceptual schema, but potentially many External schemas.",
          "Many Conceptual schemas, but only one External schema.",
          "Exactly one External schema and exactly one Internal schema.",
          "One External schema for each hard drive installed in the server."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "A database has exactly one global Conceptual schema (and one Internal schema), but can have numerous External schemas (views) tailored to various user groups."
      },
      {
        "id": "dbms-data-abstraction-11",
        "question": "Suppose an enterprise splits an existing conceptual relation EMP(emp_id, name, address, salary) into EMP_PUBLIC(emp_id, name) and EMP_PRIVATE(emp_id, address, salary). Which mapping preserves legacy applications querying EMP?",
        "options": [
          "The External-to-Conceptual mapping, by defining a View named EMP that computes the natural join of EMP_PUBLIC and EMP_PRIVATE.",
          "The Conceptual-to-Internal mapping, by storing both tables in the same disk block cluster.",
          "The Physical Data Independence layer, by disabling relational integrity checking.",
          "The Storage Engine layer, by converting the query into an unindexed full table scan."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Logical data independence allows creating a view `CREATE VIEW EMP AS SELECT * FROM EMP_PUBLIC NATURAL JOIN EMP_PRIVATE`, preserving legacy programs without code changes."
      },
      {
        "id": "dbms-data-abstraction-12",
        "question": "Why is Logical Data Independence significantly more difficult to achieve in database systems than Physical Data Independence?",
        "options": [
          "Because application programs and SQL queries explicitly reference logical attribute names and table structures; if conceptual schemas change, mappings can only hide additive or non-destructive changes.",
          "Because physical disk drives have more cache memory than database query compilers.",
          "Because the ANSI/SPARC standard strictly forbids defining more than two external views.",
          "Because conceptual schemas are stored in hardware ROM chips."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Application code is fundamentally coupled to entity attribute definitions. While views can shield additions and some decompositions, profound logical schema restructuring inevitably impacts application logic."
      },
      {
        "id": "dbms-data-abstraction-13",
        "question": "When a user executes a query on an External View, what sequence of transformations does the DBMS query processor perform to retrieve data blocks from disk?",
        "options": [
          "External View Query -> (External/Conceptual Mapping) -> Conceptual Logical Query -> (Conceptual/Internal Mapping) -> Internal Physical Storage Addresses.",
          "Physical Storage Addresses -> External View Query -> Conceptual Logical Query.",
          "External View Query -> CPU Machine Code -> Operating System File Buffer -> Conceptual Mapping.",
          "Conceptual Query -> External View Query -> Hardware Register Allocation."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "The query processor resolves external view definitions against the conceptual schema, and then maps conceptual predicates to physical block/index retrieval routines using the internal schema."
      },
      {
        "id": "dbms-data-abstraction-14",
        "question": "In the context of the ANSI/SPARC framework, what is the 'catalog' or 'data dictionary'?",
        "options": [
          "The repository of metadata describing the schemas, mappings, constraints, and authorization rules across all abstraction levels.",
          "A printed user guide supplied with the database installation disc.",
          "The physical storage sector where user JPEG and video blobs are stored.",
          "An external spreadsheet used by marketing to track database software licensing costs."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "The database catalog (data dictionary) stores system metadata: external views, conceptual tables/keys, internal index mappings, and access privileges."
      }
    ],
    "ddl-dml": [
      {
        "id": "dbms-ddl-dml-1",
        "question": "Which of the following SQL commands is classified as a Data Definition Language (DDL) command?",
        "options": [
          "CREATE TABLE",
          "INSERT INTO",
          "UPDATE",
          "DELETE FROM"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "CREATE TABLE is a DDL command because it defines a new relation schema in the database catalog. INSERT, UPDATE, and DELETE are DML commands."
      },
      {
        "id": "dbms-ddl-dml-2",
        "question": "Which SQL command is used to add new rows of data into an existing database table?",
        "options": [
          "INSERT INTO",
          "ALTER TABLE",
          "CREATE TABLE",
          "MODIFY ROW"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "INSERT INTO is a Data Manipulation Language (DML) command used to insert new record tuples into an existing table."
      },
      {
        "id": "dbms-ddl-dml-3",
        "question": "Which SQL command permanently removes a table along with its entire structure and metadata from the database catalog?",
        "options": [
          "DROP TABLE",
          "DELETE FROM",
          "REMOVE TABLE",
          "CLEAR TABLE"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "DROP TABLE is a DDL command that deletes both the table schema definition and all its data permanently from the data dictionary."
      },
      {
        "id": "dbms-ddl-dml-4",
        "question": "Which command is used to modify the structure of an existing table (such as adding or dropping a column)?",
        "options": [
          "ALTER TABLE",
          "UPDATE TABLE",
          "CHANGE DATA",
          "REVISE TABLE"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "ALTER TABLE is a DDL command used to add columns, remove columns, or modify constraints on an existing table schema."
      },
      {
        "id": "dbms-ddl-dml-5",
        "question": "What is the key difference between DROP TABLE and TRUNCATE TABLE?",
        "options": [
          "DROP deletes the table structure and its metadata; TRUNCATE deletes all rows but preserves the empty table structure for future inserts.",
          "DROP only deletes data rows; TRUNCATE deletes the database software.",
          "DROP can be rolled back without logging; TRUNCATE cannot.",
          "There is no difference; they are exact synonyms in ANSI SQL."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "DROP TABLE destroys the table definition and schema metadata completely. TRUNCATE TABLE removes all rows rapidly by deallocating data pages while preserving the table structure."
      },
      {
        "id": "dbms-ddl-dml-6",
        "question": "What happens if you execute an UPDATE statement without specifying a WHERE clause (e.g., `UPDATE student SET marks = 100;`)?",
        "options": [
          "Every single row in the student table will have its marks updated to 100.",
          "The DBMS will throw a syntax error and reject the query.",
          "Only the first row in the table will be updated.",
          "The database engine will prompt the user for confirmation."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "An UPDATE statement without a WHERE filter applies the SET clause unconditionally to all tuples in the specified table."
      },
      {
        "id": "dbms-ddl-dml-7",
        "question": "Why is TRUNCATE TABLE generally much faster than DELETE FROM table_name without a WHERE clause?",
        "options": [
          "TRUNCATE deallocates data pages directly with minimal logging; DELETE scans and removes rows one by one, recording each in the transaction log.",
          "TRUNCATE executes in client memory, while DELETE executes on the server.",
          "DELETE requires rebuilding the operating system file system.",
          "TRUNCATE encrypts the data instead of deleting it."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "TRUNCATE is a DDL operation that deallocates entire data pages, generating minimal log records. DELETE is a DML operation that logs individual row deletions."
      },
      {
        "id": "dbms-ddl-dml-8",
        "question": "Which of the following statements correctly differentiates DDL from DML?",
        "options": [
          "DDL commands (CREATE, ALTER, DROP) modify database schemas; DML commands (INSERT, UPDATE, DELETE) manipulate data within schemas.",
          "DDL commands are used by end users; DML commands are used only by hardware engineers.",
          "DDL commands operate exclusively on network packets; DML commands manage hard drive partitions.",
          "DDL can be rolled back at any time; DML commands can never be rolled back."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "DDL defines and alters database schema objects (tables, views, indexes), whereas DML queries and manipulates the tuples stored within those schemas."
      },
      {
        "id": "dbms-ddl-dml-9",
        "question": "Consider the command: `ALTER TABLE student ADD gpa DECIMAL(3,2);`. What type of command is this, and what is its effect?",
        "options": [
          "It is a DDL command that adds a new column named 'gpa' to the existing student table schema.",
          "It is a DML command that inserts a student named 'gpa' into the database.",
          "It is a DCL command that grants permission to calculate GPA.",
          "It is a TCL command that commits a transaction."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "ALTER TABLE ... ADD is a DDL statement that updates the schema metadata in the data dictionary to include a new column."
      },
      {
        "id": "dbms-ddl-dml-10",
        "question": "What is the expected result of executing `DELETE FROM student WHERE id = 1;`?",
        "options": [
          "Only the tuple where id = 1 is removed; the table and other tuples remain intact.",
          "The entire student table schema is dropped from the database.",
          "All students except id = 1 are removed.",
          "The id column is dropped from the table."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "DELETE FROM with a WHERE clause removes only the matching rows, leaving the schema and other rows intact."
      },
      {
        "id": "dbms-ddl-dml-11",
        "question": "In many relational database management systems (such as MySQL and Oracle), what transactional behavior occurs when a DDL command (like CREATE or ALTER) is executed?",
        "options": [
          "The DBMS issues an implicit COMMIT before and after the DDL statement, preventing it from being rolled back in an active transaction.",
          "The DDL command is placed in a rollback queue that executes only upon system restart.",
          "The DDL command runs as an uncommitted dirty read across all connected sessions.",
          "The DBMS crashes if any other transactions are active."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "In systems like MySQL and Oracle, DDL statements cause an implicit COMMIT, finalizing any preceding uncommitted DML changes and making the DDL irreversible via ROLLBACK."
      },
      {
        "id": "dbms-ddl-dml-12",
        "question": "A developer runs: `BEGIN TRANSACTION; DELETE FROM orders WHERE status = 'CANCELLED'; ROLLBACK;`. What is the state of the orders table afterwards?",
        "options": [
          "The cancelled orders are fully restored because DML DELETE statements are logged and reversible inside a transaction block.",
          "The cancelled orders are permanently deleted because DELETE cannot be rolled back.",
          "The orders table structure is dropped.",
          "The database enters read-only emergency recovery mode."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "DELETE is a DML statement. When executed within an explicit transaction that is followed by ROLLBACK, all deleted rows are restored via the undo log."
      },
      {
        "id": "dbms-ddl-dml-13",
        "question": "Which of the following operations will FAIL if a table contains 10,000 existing rows with duplicate values in column 'phone'?",
        "options": [
          "`ALTER TABLE users ADD CONSTRAINT unq_phone UNIQUE (phone);`",
          "`SELECT phone, COUNT(*) FROM users GROUP BY phone;`",
          "`UPDATE users SET phone = phone WHERE phone IS NOT NULL;`",
          "`ALTER TABLE users ADD address VARCHAR(100);`"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Adding a UNIQUE constraint via ALTER TABLE requires validating existing rows. If duplicate phone values exist, the DDL command fails with a constraint violation."
      },
      {
        "id": "dbms-ddl-dml-14",
        "question": "Why does ANSI SQL prevent TRUNCATE TABLE from operating on a table referenced by an active Foreign Key constraint in another table?",
        "options": [
          "Because TRUNCATE does not fire row-level triggers or evaluate individual foreign key constraints row-by-row, risking orphan records in child tables.",
          "Because TRUNCATE permanently corrupts disk sectors.",
          "Because foreign keys convert tables into read-only files.",
          "Because child tables must always be truncated first before any parent table is created."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "TRUNCATE bypasses row-level checks and triggers for speed. Allowing it on a referenced parent table would violate referential integrity without firing cascading actions."
      }
    ],
    "sql-lab": [
      {
        "id": "dbms-ddl-dml-1",
        "question": "Which of the following SQL commands is classified as a Data Definition Language (DDL) command?",
        "options": [
          "CREATE TABLE",
          "INSERT INTO",
          "UPDATE",
          "DELETE FROM"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "CREATE TABLE is a DDL command because it defines a new relation schema in the database catalog. INSERT, UPDATE, and DELETE are DML commands."
      },
      {
        "id": "dbms-ddl-dml-2",
        "question": "Which SQL command is used to add new rows of data into an existing database table?",
        "options": [
          "INSERT INTO",
          "ALTER TABLE",
          "CREATE TABLE",
          "MODIFY ROW"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "INSERT INTO is a Data Manipulation Language (DML) command used to insert new record tuples into an existing table."
      },
      {
        "id": "dbms-ddl-dml-3",
        "question": "Which SQL command permanently removes a table along with its entire structure and metadata from the database catalog?",
        "options": [
          "DROP TABLE",
          "DELETE FROM",
          "REMOVE TABLE",
          "CLEAR TABLE"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "DROP TABLE is a DDL command that deletes both the table schema definition and all its data permanently from the data dictionary."
      },
      {
        "id": "dbms-ddl-dml-4",
        "question": "Which command is used to modify the structure of an existing table (such as adding or dropping a column)?",
        "options": [
          "ALTER TABLE",
          "UPDATE TABLE",
          "CHANGE DATA",
          "REVISE TABLE"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "ALTER TABLE is a DDL command used to add columns, remove columns, or modify constraints on an existing table schema."
      },
      {
        "id": "dbms-ddl-dml-5",
        "question": "What is the key difference between DROP TABLE and TRUNCATE TABLE?",
        "options": [
          "DROP deletes the table structure and its metadata; TRUNCATE deletes all rows but preserves the empty table structure for future inserts.",
          "DROP only deletes data rows; TRUNCATE deletes the database software.",
          "DROP can be rolled back without logging; TRUNCATE cannot.",
          "There is no difference; they are exact synonyms in ANSI SQL."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "DROP TABLE destroys the table definition and schema metadata completely. TRUNCATE TABLE removes all rows rapidly by deallocating data pages while preserving the table structure."
      },
      {
        "id": "dbms-ddl-dml-6",
        "question": "What happens if you execute an UPDATE statement without specifying a WHERE clause (e.g., `UPDATE student SET marks = 100;`)?",
        "options": [
          "Every single row in the student table will have its marks updated to 100.",
          "The DBMS will throw a syntax error and reject the query.",
          "Only the first row in the table will be updated.",
          "The database engine will prompt the user for confirmation."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "An UPDATE statement without a WHERE filter applies the SET clause unconditionally to all tuples in the specified table."
      },
      {
        "id": "dbms-ddl-dml-7",
        "question": "Why is TRUNCATE TABLE generally much faster than DELETE FROM table_name without a WHERE clause?",
        "options": [
          "TRUNCATE deallocates data pages directly with minimal logging; DELETE scans and removes rows one by one, recording each in the transaction log.",
          "TRUNCATE executes in client memory, while DELETE executes on the server.",
          "DELETE requires rebuilding the operating system file system.",
          "TRUNCATE encrypts the data instead of deleting it."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "TRUNCATE is a DDL operation that deallocates entire data pages, generating minimal log records. DELETE is a DML operation that logs individual row deletions."
      },
      {
        "id": "dbms-ddl-dml-8",
        "question": "Which of the following statements correctly differentiates DDL from DML?",
        "options": [
          "DDL commands (CREATE, ALTER, DROP) modify database schemas; DML commands (INSERT, UPDATE, DELETE) manipulate data within schemas.",
          "DDL commands are used by end users; DML commands are used only by hardware engineers.",
          "DDL commands operate exclusively on network packets; DML commands manage hard drive partitions.",
          "DDL can be rolled back at any time; DML commands can never be rolled back."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "DDL defines and alters database schema objects (tables, views, indexes), whereas DML queries and manipulates the tuples stored within those schemas."
      },
      {
        "id": "dbms-ddl-dml-9",
        "question": "Consider the command: `ALTER TABLE student ADD gpa DECIMAL(3,2);`. What type of command is this, and what is its effect?",
        "options": [
          "It is a DDL command that adds a new column named 'gpa' to the existing student table schema.",
          "It is a DML command that inserts a student named 'gpa' into the database.",
          "It is a DCL command that grants permission to calculate GPA.",
          "It is a TCL command that commits a transaction."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "ALTER TABLE ... ADD is a DDL statement that updates the schema metadata in the data dictionary to include a new column."
      },
      {
        "id": "dbms-ddl-dml-10",
        "question": "What is the expected result of executing `DELETE FROM student WHERE id = 1;`?",
        "options": [
          "Only the tuple where id = 1 is removed; the table and other tuples remain intact.",
          "The entire student table schema is dropped from the database.",
          "All students except id = 1 are removed.",
          "The id column is dropped from the table."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "DELETE FROM with a WHERE clause removes only the matching rows, leaving the schema and other rows intact."
      },
      {
        "id": "dbms-ddl-dml-11",
        "question": "In many relational database management systems (such as MySQL and Oracle), what transactional behavior occurs when a DDL command (like CREATE or ALTER) is executed?",
        "options": [
          "The DBMS issues an implicit COMMIT before and after the DDL statement, preventing it from being rolled back in an active transaction.",
          "The DDL command is placed in a rollback queue that executes only upon system restart.",
          "The DDL command runs as an uncommitted dirty read across all connected sessions.",
          "The DBMS crashes if any other transactions are active."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "In systems like MySQL and Oracle, DDL statements cause an implicit COMMIT, finalizing any preceding uncommitted DML changes and making the DDL irreversible via ROLLBACK."
      },
      {
        "id": "dbms-ddl-dml-12",
        "question": "A developer runs: `BEGIN TRANSACTION; DELETE FROM orders WHERE status = 'CANCELLED'; ROLLBACK;`. What is the state of the orders table afterwards?",
        "options": [
          "The cancelled orders are fully restored because DML DELETE statements are logged and reversible inside a transaction block.",
          "The cancelled orders are permanently deleted because DELETE cannot be rolled back.",
          "The orders table structure is dropped.",
          "The database enters read-only emergency recovery mode."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "DELETE is a DML statement. When executed within an explicit transaction that is followed by ROLLBACK, all deleted rows are restored via the undo log."
      },
      {
        "id": "dbms-ddl-dml-13",
        "question": "Which of the following operations will FAIL if a table contains 10,000 existing rows with duplicate values in column 'phone'?",
        "options": [
          "`ALTER TABLE users ADD CONSTRAINT unq_phone UNIQUE (phone);`",
          "`SELECT phone, COUNT(*) FROM users GROUP BY phone;`",
          "`UPDATE users SET phone = phone WHERE phone IS NOT NULL;`",
          "`ALTER TABLE users ADD address VARCHAR(100);`"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Adding a UNIQUE constraint via ALTER TABLE requires validating existing rows. If duplicate phone values exist, the DDL command fails with a constraint violation."
      },
      {
        "id": "dbms-ddl-dml-14",
        "question": "Why does ANSI SQL prevent TRUNCATE TABLE from operating on a table referenced by an active Foreign Key constraint in another table?",
        "options": [
          "Because TRUNCATE does not fire row-level triggers or evaluate individual foreign key constraints row-by-row, risking orphan records in child tables.",
          "Because TRUNCATE permanently corrupts disk sectors.",
          "Because foreign keys convert tables into read-only files.",
          "Because child tables must always be truncated first before any parent table is created."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "TRUNCATE bypasses row-level checks and triggers for speed. Allowing it on a referenced parent table would violate referential integrity without firing cascading actions."
      }
    ],
    "er-model": [
      {
        "id": "dbms-er-model-1",
        "question": "In standard Peter Chen Entity-Relationship (ER) diagrams, which geometric shape represents an Entity Set?",
        "options": [
          "Rectangle",
          "Ellipse",
          "Diamond",
          "Double Circle"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "In ER diagrams, rectangles represent Entity Sets (real-world objects like Student or Course)."
      },
      {
        "id": "dbms-er-model-2",
        "question": "Which geometric shape in an ER diagram represents a Relationship between entities?",
        "options": [
          "Diamond",
          "Rectangle",
          "Ellipse",
          "Triangle"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Diamonds represent Relationships (associations between entity sets, such as 'Enrolls' or 'Works_In')."
      },
      {
        "id": "dbms-er-model-3",
        "question": "How is a Key Attribute (Primary Key candidate) visually distinguished in an ER diagram?",
        "options": [
          "Its attribute name inside the ellipse is underlined.",
          "It is enclosed in a square inside a circle.",
          "It is drawn with dashed red borders.",
          "It is placed inside a double rectangle."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Key attributes that uniquely identify each entity instance (e.g., roll_no, course_id) have their names underlined inside the ellipse."
      },
      {
        "id": "dbms-er-model-4",
        "question": "What type of attribute can hold more than one value for a single entity instance (e.g., multiple phone numbers for one student)?",
        "options": [
          "Multivalued Attribute",
          "Composite Attribute",
          "Derived Attribute",
          "Atomic Attribute"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Multivalued attributes (represented by double ellipses) can hold multiple distinct values for a single entity instance."
      },
      {
        "id": "dbms-er-model-5",
        "question": "In an ER diagram, how is a Multivalued Attribute visually represented?",
        "options": [
          "Double Ellipse",
          "Dashed Ellipse",
          "Double Rectangle",
          "Double Diamond"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "A double ellipse (concentric ellipses) denotes a multivalued attribute, such as phone numbers or educational degrees."
      },
      {
        "id": "dbms-er-model-6",
        "question": "What is a Derived Attribute in an ER model, and how is it drawn?",
        "options": [
          "An attribute computed dynamically from other stored attributes (e.g., Age from DateOfBirth); drawn with a dashed ellipse.",
          "An attribute inherited from a foreign database; drawn with a hexagon.",
          "A primary key composed of multiple columns; drawn with a double rectangle.",
          "An attribute stored in encrypted form; drawn with a padlock symbol."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Derived attributes are calculated from other stored data (e.g., Age calculated from DOB and CurrentDate) and are represented by dashed ellipses."
      },
      {
        "id": "dbms-er-model-7",
        "question": "When mapping an ER diagram to Relational tables, how is a Many-to-Many (M:N) relationship between Student and Course converted?",
        "options": [
          "It becomes a separate junction table containing the primary keys of both entities (roll_no FK, course_id FK) as a composite primary key.",
          "A foreign key is added only to the Student table.",
          "A foreign key is added only to the Course table.",
          "Both entities are merged into a single non-normalized flat table."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Many-to-many relationships cannot be represented by a single foreign key without violating 1NF. They must be mapped to a separate junction/bridge table containing both foreign keys."
      },
      {
        "id": "dbms-er-model-8",
        "question": "When mapping an ER diagram to a relational database schema, how is a Multivalued Attribute (e.g., Student phone numbers) converted?",
        "options": [
          "It is mapped into a separate relation containing the entity's primary key (as a foreign key) and the multivalued attribute value.",
          "It is stored as a comma-separated text string in the original entity table.",
          "It is converted into a view and deleted from disk.",
          "It is merged with the primary key column."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "To preserve First Normal Form (atomic domains), multivalued attributes map to a new table (e.g., Student_Phone(roll_no FK, phone)) with a composite primary key."
      },
      {
        "id": "dbms-er-model-9",
        "question": "What does Total Participation (represented by a double line between an entity set and relationship set) indicate?",
        "options": [
          "Every entity instance in the entity set must participate in at least one relationship instance.",
          "Only half of the entity instances participate.",
          "The relationship is many-to-many.",
          "The entity has no primary key."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Total participation (existence dependency) means every entity in the set must participate in the relationship (e.g., every Loan must belong to a Customer)."
      },
      {
        "id": "dbms-er-model-10",
        "question": "What is a Composite Attribute in ER modeling?",
        "options": [
          "An attribute that can be subdivided into smaller, independent sub-attributes (e.g., Name divided into First_Name and Last_Name).",
          "An attribute that holds multiple values of the same type.",
          "An attribute composed of data from two different database servers.",
          "A primary key generated by a sequence generator."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Composite attributes can be divided into smaller meaningful subparts (e.g., Address broken into Street, City, State, Zip)."
      },
      {
        "id": "dbms-er-model-11",
        "question": "Consider an ER diagram where entity Department has a 1:N relationship 'Employs' with entity Employee (one department has many employees, each employee belongs to one department). What is the optimal relational mapping rule?",
        "options": [
          "Place the Primary Key of Department (dept_id) as a Foreign Key in the Employee relation.",
          "Place the Primary Key of Employee as a Foreign Key in the Department relation.",
          "Create a mandatory junction table Department_Employee with two foreign keys.",
          "Merge Department and Employee into one table with repeating columns."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "In a 1:N relationship, the primary key of the '1-side' relation (Department) is placed as a foreign key into the 'N-side' relation (Employee) to avoid nulls or junction table overhead."
      },
      {
        "id": "dbms-er-model-12",
        "question": "What is a Weak Entity in an ER model, and what attributes form its Primary Key upon relational mapping?",
        "options": [
          "An entity that lacks a primary key of its own; its primary key is formed by combining the primary key of its identifying strong entity with its own partial key (discriminator).",
          "An entity that has no attributes whatsoever.",
          "An entity whose rows are automatically deleted every 24 hours.",
          "An entity that cannot participate in any relationships."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "A weak entity depends on an identifying strong entity. In relational mapping, its primary key is the composite of the identifying entity's primary key (as a foreign key) and the weak entity's partial key."
      },
      {
        "id": "dbms-er-model-13",
        "question": "Suppose an ER diagram contains a ternary relationship involving Doctor, Patient, and Medication, where a doctor prescribes a medication to a patient. How is this mapped to relational tables?",
        "options": [
          "A single relationship table is created with Foreign Keys referencing Doctor, Patient, and Medication, whose primary key depends on the cardinality constraints of the association.",
          "Three separate 1:1 tables are generated with circular foreign keys.",
          "The relationship is dissolved and replaced with separate independent tables.",
          "Ternary relationships cannot be modeled in relational databases."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "N-ary relationships map to a distinct relational table containing foreign keys referencing each participating entity, with descriptive relationship attributes included as columns."
      },
      {
        "id": "dbms-er-model-14",
        "question": "If an attribute 'date_of_birth' is stored in the Student table, and 'age' is computed as `CURRENT_DATE - date_of_birth`, how should 'age' be handled during ER-to-Relational mapping to prevent data redundancy and anomalies?",
        "options": [
          "Omit 'age' as a stored column in the relational table, and compute it dynamically via a SQL query or View when requested.",
          "Store 'age' in a separate unlinked table.",
          "Update 'age' manually using daily batch UPDATE jobs.",
          "Make 'age' the Primary Key of the Student table."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Derived attributes are usually not stored as physical columns in normalized relational schemas to prevent update anomalies and inconsistency; they are calculated dynamically via views or generated columns."
      }
    ],
    "data-models": [
      {
        "id": "dbms-data-models-1",
        "question": "In the Relational Data Model introduced by E.F. Codd, how is data fundamentally organized?",
        "options": [
          "In two-dimensional tables (relations) consisting of rows (tuples) and columns (attributes).",
          "In tree hierarchies where each child record can have strictly one parent.",
          "In binary machine byte streams without schema definitions.",
          "In linked lists stored directly across physical CPU cache lines."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The Relational Model represents all data in two-dimensional tables (relations) of rows (tuples) and columns (attributes), interconnected by matching key values."
      },
      {
        "id": "dbms-data-models-2",
        "question": "In the Network Data Model (CODASYL DBTG), how are relationships between records represented?",
        "options": [
          "As a graph of records (nodes) connected by sets and physical/logical pointer links.",
          "As flat CSV text files separated by commas.",
          "As mathematical matrices evaluated using linear algebra.",
          "As document JSON files indexed by B-trees."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The Network Model represents data as a general graph of record types connected by owner-member sets using pointers."
      },
      {
        "id": "dbms-data-models-3",
        "question": "Which data model incorporates programming paradigms like classes, inheritance ('is-a' relationships), and methods directly into database persistence?",
        "options": [
          "Object-Oriented Data Model (OODBMS)",
          "Hierarchical Data Model",
          "Flat File Model",
          "Network Data Model"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The Object-Oriented Data Model stores entities as objects with encapsulated state (attributes) and behavior (methods), supporting inheritance and polymorphism."
      },
      {
        "id": "dbms-data-models-4",
        "question": "Unlike the Hierarchical model where each child record can only have ONE parent, what allows the Network Model to naturally model Many-to-Many relationships?",
        "options": [
          "A member (child) record can have multiple owner (parent) records across different sets.",
          "It disables data integrity constraints entirely.",
          "It duplicates records onto separate magnetic tapes.",
          "It uses SQL relational joins."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "In the Network model graph structure, a member record can participate in multiple sets and have multiple owner (parent) records, modeling M:N relationships directly."
      },
      {
        "id": "dbms-data-models-5",
        "question": "What is a major advantage of the Relational Model over the Network Model for application developers?",
        "options": [
          "Declarative querying (SQL): developers specify WHAT data they want, rather than writing procedural code navigating physical storage pointers.",
          "Relational databases do not require primary keys or unique identifiers.",
          "Relational databases run without an operating system.",
          "Relational databases consume zero disk storage space."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The Relational Model provides high data independence via declarative SQL. In the Network model, programmers had to navigate pointers procedural path by procedural path."
      },
      {
        "id": "dbms-data-models-6",
        "question": "What is the 'Object-Relational Impedance Mismatch' that Object-Oriented Databases were designed to solve?",
        "options": [
          "The friction and complexity of mapping rich, nested, polymorphic OOP objects and class hierarchies into flat tabular relational rows and columns.",
          "The electrical impedance difference between copper network cables and optical fibers.",
          "The conflict between 32-bit and 64-bit CPU architecture instructions.",
          "The delay caused by converting SQL queries into HTML web pages."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The Object-Relational Impedance Mismatch describes the conceptual and performance challenges of translating complex object graphs (with methods and inheritance) into flat relational tables."
      },
      {
        "id": "dbms-data-models-7",
        "question": "How are relationships established between different tables in the Relational Data Model?",
        "options": [
          "By matching values between Foreign Key columns in one table and Primary Key columns in another table.",
          "By storing memory hardware RAM addresses inside data rows.",
          "By drawing visual lines between rows in a GUI interface.",
          "By storing all tables inside a single combined file without columns."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In the relational model, tables are linked purely by value associations: a foreign key column in a referencing relation contains values matching the primary key of a referenced relation."
      },
      {
        "id": "dbms-data-models-8",
        "question": "In an Object-Oriented DBMS, how is an object's unique identity maintained across its entire lifecycle?",
        "options": [
          "Through a system-generated, immutable Object Identifier (OID) that is independent of the object's attribute values.",
          "By hashing the user's login password.",
          "By concatenating all string attributes together.",
          "By using the physical sector number on the hard disk drive."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In OODBMS, each object is assigned a system-generated, unique, and immutable Object Identifier (OID) that identifies it even if all its attribute values change."
      },
      {
        "id": "dbms-data-models-9",
        "question": "For which of the following application domains are Object-Oriented Databases typically better suited than traditional Relational Databases?",
        "options": [
          "Computer-Aided Design (CAD/CAM), Geographic Information Systems (GIS), and complex multimedia repositories.",
          "Simple accounting ledger tables with fixed numbers of integer columns.",
          "Basic payroll applications requiring only basic tabular lookups.",
          "Storing comma-separated phone books."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "OODBMS excels in domains with highly complex data structures, deep nesting, inheritance hierarchies, and custom behavioral methods, such as CAD, GIS, and multimedia."
      },
      {
        "id": "dbms-data-models-10",
        "question": "Why did the Network Data Model largely fall out of favor in mainstream commercial enterprise applications?",
        "options": [
          "Navigating pointer networks procedurally was extremely complex, error-prone, and tightly coupled application programs to internal physical storage paths.",
          "It could not store more than 100 records in total.",
          "It did not support any numbers or dates.",
          "It could only run on supercomputers with quantum processors."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Network databases lacked physical data independence. Applications relied on procedural pointer traversal, making schema evolution extraordinarily painful and costly."
      },
      {
        "id": "dbms-data-models-11",
        "question": "How does query optimization differ fundamentally between the Network Model and the Relational Model?",
        "options": [
          "In the Relational Model, a cost-based Query Optimizer chooses the access path automatically; in the Network Model, the programmer must manually specify the exact navigation path using pointer instructions.",
          "In the Network Model, queries are optimized using machine learning neural networks.",
          "In the Relational Model, queries can only execute sequentially from the first row to the last.",
          "There is no difference; both use identical SQL query compilers."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Relational engines include sophisticated query optimizers that evaluate relational algebra trees, join algorithms, and indexes. In CODASYL network models, developers coded access paths manually."
      },
      {
        "id": "dbms-data-models-12",
        "question": "In an Object-Oriented database, how is an 'is-a' inheritance relationship represented and queried?",
        "options": [
          "A subclass inherits both attributes and methods from its superclass, allowing instances of the subclass to be queried polymorphically.",
          "A subclass table duplicates every record of the parent table with a separate primary key.",
          "An 'is-a' relationship requires writing an INNER JOIN across all parent class tables.",
          "Inheritance is simulated by converting all objects into text strings."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "OODBMS directly models type inheritance: a Student object inherits attributes and methods from Person, and querying Persons can polymorphically return Students."
      },
      {
        "id": "dbms-data-models-13",
        "question": "What architectural evolution emerged to bridge the commercial strengths of Relational Databases with the modeling capabilities of Object-Oriented Databases?",
        "options": [
          "Object-Relational DBMS (ORDBMS) and Object-Relational Mapping (ORM) frameworks like Hibernate and Prisma.",
          "Disabling SQL in favor of binary shell scripts.",
          "Replacing all relational tables with flat XML documents.",
          "Reverting to CODASYL network database mainframes."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "To combine relational tables and ACID robustness with OOP object graphs, the industry developed ORDBMS (e.g., PostgreSQL custom types) and ORM frameworks (Hibernate, Entity Framework)."
      },
      {
        "id": "dbms-data-models-14",
        "question": "Consider a relation in Codd's Relational Model: R(A, B, C). Why does relational theory strictly forbid duplicate rows (tuples) from existing in R?",
        "options": [
          "Because a relation is mathematically defined as a SET of tuples, and mathematical sets cannot contain duplicate elements by definition.",
          "Because hard disk controllers cannot write identical bytes twice in succession.",
          "Because SQL keywords cannot process more than one row at a time.",
          "Because operating system file handles crash when reading duplicate values."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "In relational theory, a relation is a mathematical set of tuples. Since sets by definition contain distinct elements, every relation must possess at least one candidate key that uniquely identifies each tuple."
      }
    ],
    "relational-model": [
      {
        "id": "dbms-data-models-1",
        "question": "In the Relational Data Model introduced by E.F. Codd, how is data fundamentally organized?",
        "options": [
          "In two-dimensional tables (relations) consisting of rows (tuples) and columns (attributes).",
          "In tree hierarchies where each child record can have strictly one parent.",
          "In binary machine byte streams without schema definitions.",
          "In linked lists stored directly across physical CPU cache lines."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The Relational Model represents all data in two-dimensional tables (relations) of rows (tuples) and columns (attributes), interconnected by matching key values."
      },
      {
        "id": "dbms-data-models-2",
        "question": "In the Network Data Model (CODASYL DBTG), how are relationships between records represented?",
        "options": [
          "As a graph of records (nodes) connected by sets and physical/logical pointer links.",
          "As flat CSV text files separated by commas.",
          "As mathematical matrices evaluated using linear algebra.",
          "As document JSON files indexed by B-trees."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The Network Model represents data as a general graph of record types connected by owner-member sets using pointers."
      },
      {
        "id": "dbms-data-models-3",
        "question": "Which data model incorporates programming paradigms like classes, inheritance ('is-a' relationships), and methods directly into database persistence?",
        "options": [
          "Object-Oriented Data Model (OODBMS)",
          "Hierarchical Data Model",
          "Flat File Model",
          "Network Data Model"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The Object-Oriented Data Model stores entities as objects with encapsulated state (attributes) and behavior (methods), supporting inheritance and polymorphism."
      },
      {
        "id": "dbms-data-models-4",
        "question": "Unlike the Hierarchical model where each child record can only have ONE parent, what allows the Network Model to naturally model Many-to-Many relationships?",
        "options": [
          "A member (child) record can have multiple owner (parent) records across different sets.",
          "It disables data integrity constraints entirely.",
          "It duplicates records onto separate magnetic tapes.",
          "It uses SQL relational joins."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "In the Network model graph structure, a member record can participate in multiple sets and have multiple owner (parent) records, modeling M:N relationships directly."
      },
      {
        "id": "dbms-data-models-5",
        "question": "What is a major advantage of the Relational Model over the Network Model for application developers?",
        "options": [
          "Declarative querying (SQL): developers specify WHAT data they want, rather than writing procedural code navigating physical storage pointers.",
          "Relational databases do not require primary keys or unique identifiers.",
          "Relational databases run without an operating system.",
          "Relational databases consume zero disk storage space."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The Relational Model provides high data independence via declarative SQL. In the Network model, programmers had to navigate pointers procedural path by procedural path."
      },
      {
        "id": "dbms-data-models-6",
        "question": "What is the 'Object-Relational Impedance Mismatch' that Object-Oriented Databases were designed to solve?",
        "options": [
          "The friction and complexity of mapping rich, nested, polymorphic OOP objects and class hierarchies into flat tabular relational rows and columns.",
          "The electrical impedance difference between copper network cables and optical fibers.",
          "The conflict between 32-bit and 64-bit CPU architecture instructions.",
          "The delay caused by converting SQL queries into HTML web pages."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The Object-Relational Impedance Mismatch describes the conceptual and performance challenges of translating complex object graphs (with methods and inheritance) into flat relational tables."
      },
      {
        "id": "dbms-data-models-7",
        "question": "How are relationships established between different tables in the Relational Data Model?",
        "options": [
          "By matching values between Foreign Key columns in one table and Primary Key columns in another table.",
          "By storing memory hardware RAM addresses inside data rows.",
          "By drawing visual lines between rows in a GUI interface.",
          "By storing all tables inside a single combined file without columns."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In the relational model, tables are linked purely by value associations: a foreign key column in a referencing relation contains values matching the primary key of a referenced relation."
      },
      {
        "id": "dbms-data-models-8",
        "question": "In an Object-Oriented DBMS, how is an object's unique identity maintained across its entire lifecycle?",
        "options": [
          "Through a system-generated, immutable Object Identifier (OID) that is independent of the object's attribute values.",
          "By hashing the user's login password.",
          "By concatenating all string attributes together.",
          "By using the physical sector number on the hard disk drive."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In OODBMS, each object is assigned a system-generated, unique, and immutable Object Identifier (OID) that identifies it even if all its attribute values change."
      },
      {
        "id": "dbms-data-models-9",
        "question": "For which of the following application domains are Object-Oriented Databases typically better suited than traditional Relational Databases?",
        "options": [
          "Computer-Aided Design (CAD/CAM), Geographic Information Systems (GIS), and complex multimedia repositories.",
          "Simple accounting ledger tables with fixed numbers of integer columns.",
          "Basic payroll applications requiring only basic tabular lookups.",
          "Storing comma-separated phone books."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "OODBMS excels in domains with highly complex data structures, deep nesting, inheritance hierarchies, and custom behavioral methods, such as CAD, GIS, and multimedia."
      },
      {
        "id": "dbms-data-models-10",
        "question": "Why did the Network Data Model largely fall out of favor in mainstream commercial enterprise applications?",
        "options": [
          "Navigating pointer networks procedurally was extremely complex, error-prone, and tightly coupled application programs to internal physical storage paths.",
          "It could not store more than 100 records in total.",
          "It did not support any numbers or dates.",
          "It could only run on supercomputers with quantum processors."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Network databases lacked physical data independence. Applications relied on procedural pointer traversal, making schema evolution extraordinarily painful and costly."
      },
      {
        "id": "dbms-data-models-11",
        "question": "How does query optimization differ fundamentally between the Network Model and the Relational Model?",
        "options": [
          "In the Relational Model, a cost-based Query Optimizer chooses the access path automatically; in the Network Model, the programmer must manually specify the exact navigation path using pointer instructions.",
          "In the Network Model, queries are optimized using machine learning neural networks.",
          "In the Relational Model, queries can only execute sequentially from the first row to the last.",
          "There is no difference; both use identical SQL query compilers."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Relational engines include sophisticated query optimizers that evaluate relational algebra trees, join algorithms, and indexes. In CODASYL network models, developers coded access paths manually."
      },
      {
        "id": "dbms-data-models-12",
        "question": "In an Object-Oriented database, how is an 'is-a' inheritance relationship represented and queried?",
        "options": [
          "A subclass inherits both attributes and methods from its superclass, allowing instances of the subclass to be queried polymorphically.",
          "A subclass table duplicates every record of the parent table with a separate primary key.",
          "An 'is-a' relationship requires writing an INNER JOIN across all parent class tables.",
          "Inheritance is simulated by converting all objects into text strings."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "OODBMS directly models type inheritance: a Student object inherits attributes and methods from Person, and querying Persons can polymorphically return Students."
      },
      {
        "id": "dbms-data-models-13",
        "question": "What architectural evolution emerged to bridge the commercial strengths of Relational Databases with the modeling capabilities of Object-Oriented Databases?",
        "options": [
          "Object-Relational DBMS (ORDBMS) and Object-Relational Mapping (ORM) frameworks like Hibernate and Prisma.",
          "Disabling SQL in favor of binary shell scripts.",
          "Replacing all relational tables with flat XML documents.",
          "Reverting to CODASYL network database mainframes."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "To combine relational tables and ACID robustness with OOP object graphs, the industry developed ORDBMS (e.g., PostgreSQL custom types) and ORM frameworks (Hibernate, Entity Framework)."
      },
      {
        "id": "dbms-data-models-14",
        "question": "Consider a relation in Codd's Relational Model: R(A, B, C). Why does relational theory strictly forbid duplicate rows (tuples) from existing in R?",
        "options": [
          "Because a relation is mathematically defined as a SET of tuples, and mathematical sets cannot contain duplicate elements by definition.",
          "Because hard disk controllers cannot write identical bytes twice in succession.",
          "Because SQL keywords cannot process more than one row at a time.",
          "Because operating system file handles crash when reading duplicate values."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "In relational theory, a relation is a mathematical set of tuples. Since sets by definition contain distinct elements, every relation must possess at least one candidate key that uniquely identifies each tuple."
      }
    ],
    "integrity-constraints": [
      {
        "id": "dbms-integrity-constraints-1",
        "question": "What does the Entity Integrity Constraint strictly state regarding Primary Keys in relational databases?",
        "options": [
          "Primary key attributes cannot contain NULL values and must uniquely identify every tuple in the relation.",
          "Primary keys must be stored in alphabetical order.",
          "Every table must have at least three primary keys.",
          "Primary keys must always be numeric integers."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Entity Integrity dictates that no primary key attribute value may be NULL, ensuring every individual entity instance is distinctly identifiable."
      },
      {
        "id": "dbms-integrity-constraints-2",
        "question": "What does the Referential Integrity Constraint enforce between referencing and referenced tables?",
        "options": [
          "A foreign key in a child table must match an existing primary key in the referenced parent table, or be NULL.",
          "Foreign keys must always be greater than zero.",
          "Every foreign key column must have the same name as the table it belongs to.",
          "Tables can only reference other tables located on the same physical hard drive."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Referential Integrity ensures that foreign key values in a child table correspond to valid primary keys in the parent table, preventing orphan records."
      },
      {
        "id": "dbms-integrity-constraints-3",
        "question": "What is a Domain Constraint in a relational database?",
        "options": [
          "A rule specifying the permissible data type, format, range, or check condition for column values (e.g., `CHECK (age > 0)`).",
          "A rule restricting database access to specific internet domain names (.edu, .com).",
          "A constraint that prevents tables from exceeding 1 gigabyte in size.",
          "A security policy requiring biometric authentication for queries."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Domain constraints enforce valid data types, atomic value formats, and check conditions (e.g. `age > 0`) for attributes."
      },
      {
        "id": "dbms-integrity-constraints-4",
        "question": "What happens if a user attempts to execute an INSERT statement that violates a Primary Key uniqueness constraint?",
        "options": [
          "The DBMS rejects the INSERT statement, throws an error, and the database remains in its previous consistent state.",
          "The database overwrites the existing record automatically without warning.",
          "The new row is saved to a hidden emergency text file.",
          "The database server crashes and restarts."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "When an integrity constraint is violated, the DBMS transaction aborts the operation, issues a constraint violation error, and preserves data consistency."
      },
      {
        "id": "dbms-integrity-constraints-5",
        "question": "Given tables `DEPT(dept_id PK, dname)` and `STUDENT(id PK, name, age, dept_id FK)`, what constraint is violated if you run: `INSERT INTO STUDENT VALUES (NULL, 'Kiran', 20, 10);`?",
        "options": [
          "Entity Integrity Constraint, because the Primary Key (id) cannot be NULL.",
          "Referential Integrity Constraint, because dept_id 10 is missing.",
          "Domain Constraint, because name 'Kiran' is invalid.",
          "Key Constraint, because age 20 is already taken."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Entity Integrity prohibits NULL values in Primary Key attributes; inserting a NULL id causes an immediate Entity Integrity violation."
      },
      {
        "id": "dbms-integrity-constraints-6",
        "question": "Given `DEPT(dept_id PK)` with rows {10, 20}, what constraint is violated by: `INSERT INTO STUDENT(id, name, age, dept_id) VALUES (4, 'Kiran', 20, 99);`?",
        "options": [
          "Referential Integrity Constraint, because foreign key value 99 does not exist in the parent DEPT table.",
          "Entity Integrity Constraint, because id 4 is invalid.",
          "Domain Constraint, because age 20 is not permitted.",
          "Physical Storage Constraint, because table STUDENT is full."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Foreign key dept_id=99 references a non-existent department in DEPT, violating Referential Integrity."
      },
      {
        "id": "dbms-integrity-constraints-7",
        "question": "If a column 'age' has the constraint `CHECK (age > 0)`, what constraint is violated by: `INSERT INTO STUDENT VALUES (4, 'Kiran', -5, 10);`?",
        "options": [
          "Domain Constraint (CHECK condition violated).",
          "Referential Integrity Constraint.",
          "Entity Integrity Constraint.",
          "Foreign Key Cascade Constraint."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "A CHECK constraint enforces allowable domain values; an age of -5 violates `CHECK (age > 0)`, which is a Domain Constraint violation."
      },
      {
        "id": "dbms-integrity-constraints-8",
        "question": "In referential actions, what does `ON DELETE CASCADE` specify when a parent row in a referenced table is deleted?",
        "options": [
          "All child rows in referencing tables that reference the deleted parent row are automatically deleted as well.",
          "The delete operation is blocked and an error is raised.",
          "The foreign keys in child rows are reset to NULL.",
          "The parent row is moved to an archive table."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "ON DELETE CASCADE automatically propagates the deletion of a parent record down to all referencing child tuples."
      },
      {
        "id": "dbms-integrity-constraints-9",
        "question": "What is the difference between `ON DELETE RESTRICT` and `ON DELETE SET NULL` when deleting a referenced parent record?",
        "options": [
          "RESTRICT rejects the deletion if referencing child rows exist; SET NULL allows the parent deletion and sets the child foreign key values to NULL.",
          "RESTRICT deletes all child rows; SET NULL deletes the parent table.",
          "RESTRICT converts child rows into views; SET NULL converts them into indexes.",
          "There is no difference; both delete all child rows."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "RESTRICT prevents deletion of the parent if any child rows reference it. SET NULL permits deletion of the parent while updating the child foreign keys to NULL."
      },
      {
        "id": "dbms-integrity-constraints-10",
        "question": "Why does relational database theory permit Foreign Key columns in child tables to contain NULL values (unless explicitly marked NOT NULL)?",
        "options": [
          "To represent an entity that does not currently participate in a relationship (e.g., a newly hired employee who has not yet been assigned to any department).",
          "Because primary keys also permit NULL values.",
          "Because foreign keys cannot store integers.",
          "To save disk storage space."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "A NULL foreign key indicates that the referencing entity currently has no association with a parent entity (e.g., an unassigned department)."
      },
      {
        "id": "dbms-integrity-constraints-11",
        "question": "Suppose table `DEPT` has dept_id=10 and child table `STUDENT` has 5 rows with dept_id=10. The foreign key constraint is configured with `ON DELETE NO ACTION`. What happens when executing `DELETE FROM DEPT WHERE dept_id = 10;`?",
        "options": [
          "The DBMS raises a foreign key violation error and the deletion is rolled back, because active child references exist.",
          "The 5 student rows are deleted automatically.",
          "The 5 student rows have their dept_id set to 0.",
          "The DEPT table is dropped from the database."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "With NO ACTION (or RESTRICT), attempting to delete a referenced parent row while referencing child rows exist triggers a referential integrity violation error."
      },
      {
        "id": "dbms-integrity-constraints-12",
        "question": "Can a table have multiple UNIQUE constraints and multiple PRIMARY KEY constraints in standard ANSI SQL?",
        "options": [
          "A table can have multiple UNIQUE constraints, but strictly only ONE PRIMARY KEY constraint.",
          "A table can have multiple PRIMARY KEY constraints, but only one UNIQUE constraint.",
          "A table can have unlimited PRIMARY KEY and unlimited UNIQUE constraints.",
          "A table can have neither; constraints are only defined on database views."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "ANSI SQL allows multiple UNIQUE constraints on different candidate key columns, but each table can designate strictly ONE Primary Key."
      },
      {
        "id": "dbms-integrity-constraints-13",
        "question": "Consider a circular referential integrity scenario: Table A has a foreign key referencing Table B, and Table B has a foreign key referencing Table A, both with NOT NULL constraints. How can initial records be inserted into these tables without constraint violations?",
        "options": [
          "By executing the INSERTs within a transaction with DEFERRABLE constraints (checked at COMMIT rather than statement execution).",
          "By disabling the operating system firewall during the insert.",
          "By dropping both tables and recreating them without primary keys.",
          "It is mathematically impossible to insert data into mutually referencing tables."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Circular foreign key dependencies require DEFERRABLE constraint checking: constraints are evaluated at transaction COMMIT rather than after each individual INSERT."
      },
      {
        "id": "dbms-integrity-constraints-14",
        "question": "What is an 'orphan record' in relational database management systems, and which integrity constraint prevents its creation?",
        "options": [
          "A child record whose foreign key references a non-existent or deleted parent record; prevented by the Referential Integrity Constraint.",
          "A table that has no indexes; prevented by the Physical Storage Constraint.",
          "A record with duplicate primary keys; prevented by Entity Integrity.",
          "A database user with no administrative privileges."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Orphan records occur when child foreign keys point to non-existent parent rows. The Referential Integrity constraint ensures orphan records cannot be created."
      }
    ],
    "sql-joins": [
      {
        "id": "dbms-integrity-constraints-1",
        "question": "What does the Entity Integrity Constraint strictly state regarding Primary Keys in relational databases?",
        "options": [
          "Primary key attributes cannot contain NULL values and must uniquely identify every tuple in the relation.",
          "Primary keys must be stored in alphabetical order.",
          "Every table must have at least three primary keys.",
          "Primary keys must always be numeric integers."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Entity Integrity dictates that no primary key attribute value may be NULL, ensuring every individual entity instance is distinctly identifiable."
      },
      {
        "id": "dbms-integrity-constraints-2",
        "question": "What does the Referential Integrity Constraint enforce between referencing and referenced tables?",
        "options": [
          "A foreign key in a child table must match an existing primary key in the referenced parent table, or be NULL.",
          "Foreign keys must always be greater than zero.",
          "Every foreign key column must have the same name as the table it belongs to.",
          "Tables can only reference other tables located on the same physical hard drive."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Referential Integrity ensures that foreign key values in a child table correspond to valid primary keys in the parent table, preventing orphan records."
      },
      {
        "id": "dbms-integrity-constraints-3",
        "question": "What is a Domain Constraint in a relational database?",
        "options": [
          "A rule specifying the permissible data type, format, range, or check condition for column values (e.g., `CHECK (age > 0)`).",
          "A rule restricting database access to specific internet domain names (.edu, .com).",
          "A constraint that prevents tables from exceeding 1 gigabyte in size.",
          "A security policy requiring biometric authentication for queries."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Domain constraints enforce valid data types, atomic value formats, and check conditions (e.g. `age > 0`) for attributes."
      },
      {
        "id": "dbms-integrity-constraints-4",
        "question": "What happens if a user attempts to execute an INSERT statement that violates a Primary Key uniqueness constraint?",
        "options": [
          "The DBMS rejects the INSERT statement, throws an error, and the database remains in its previous consistent state.",
          "The database overwrites the existing record automatically without warning.",
          "The new row is saved to a hidden emergency text file.",
          "The database server crashes and restarts."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "When an integrity constraint is violated, the DBMS transaction aborts the operation, issues a constraint violation error, and preserves data consistency."
      },
      {
        "id": "dbms-integrity-constraints-5",
        "question": "Given tables `DEPT(dept_id PK, dname)` and `STUDENT(id PK, name, age, dept_id FK)`, what constraint is violated if you run: `INSERT INTO STUDENT VALUES (NULL, 'Kiran', 20, 10);`?",
        "options": [
          "Entity Integrity Constraint, because the Primary Key (id) cannot be NULL.",
          "Referential Integrity Constraint, because dept_id 10 is missing.",
          "Domain Constraint, because name 'Kiran' is invalid.",
          "Key Constraint, because age 20 is already taken."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Entity Integrity prohibits NULL values in Primary Key attributes; inserting a NULL id causes an immediate Entity Integrity violation."
      },
      {
        "id": "dbms-integrity-constraints-6",
        "question": "Given `DEPT(dept_id PK)` with rows {10, 20}, what constraint is violated by: `INSERT INTO STUDENT(id, name, age, dept_id) VALUES (4, 'Kiran', 20, 99);`?",
        "options": [
          "Referential Integrity Constraint, because foreign key value 99 does not exist in the parent DEPT table.",
          "Entity Integrity Constraint, because id 4 is invalid.",
          "Domain Constraint, because age 20 is not permitted.",
          "Physical Storage Constraint, because table STUDENT is full."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Foreign key dept_id=99 references a non-existent department in DEPT, violating Referential Integrity."
      },
      {
        "id": "dbms-integrity-constraints-7",
        "question": "If a column 'age' has the constraint `CHECK (age > 0)`, what constraint is violated by: `INSERT INTO STUDENT VALUES (4, 'Kiran', -5, 10);`?",
        "options": [
          "Domain Constraint (CHECK condition violated).",
          "Referential Integrity Constraint.",
          "Entity Integrity Constraint.",
          "Foreign Key Cascade Constraint."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "A CHECK constraint enforces allowable domain values; an age of -5 violates `CHECK (age > 0)`, which is a Domain Constraint violation."
      },
      {
        "id": "dbms-integrity-constraints-8",
        "question": "In referential actions, what does `ON DELETE CASCADE` specify when a parent row in a referenced table is deleted?",
        "options": [
          "All child rows in referencing tables that reference the deleted parent row are automatically deleted as well.",
          "The delete operation is blocked and an error is raised.",
          "The foreign keys in child rows are reset to NULL.",
          "The parent row is moved to an archive table."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "ON DELETE CASCADE automatically propagates the deletion of a parent record down to all referencing child tuples."
      },
      {
        "id": "dbms-integrity-constraints-9",
        "question": "What is the difference between `ON DELETE RESTRICT` and `ON DELETE SET NULL` when deleting a referenced parent record?",
        "options": [
          "RESTRICT rejects the deletion if referencing child rows exist; SET NULL allows the parent deletion and sets the child foreign key values to NULL.",
          "RESTRICT deletes all child rows; SET NULL deletes the parent table.",
          "RESTRICT converts child rows into views; SET NULL converts them into indexes.",
          "There is no difference; both delete all child rows."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "RESTRICT prevents deletion of the parent if any child rows reference it. SET NULL permits deletion of the parent while updating the child foreign keys to NULL."
      },
      {
        "id": "dbms-integrity-constraints-10",
        "question": "Why does relational database theory permit Foreign Key columns in child tables to contain NULL values (unless explicitly marked NOT NULL)?",
        "options": [
          "To represent an entity that does not currently participate in a relationship (e.g., a newly hired employee who has not yet been assigned to any department).",
          "Because primary keys also permit NULL values.",
          "Because foreign keys cannot store integers.",
          "To save disk storage space."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "A NULL foreign key indicates that the referencing entity currently has no association with a parent entity (e.g., an unassigned department)."
      },
      {
        "id": "dbms-integrity-constraints-11",
        "question": "Suppose table `DEPT` has dept_id=10 and child table `STUDENT` has 5 rows with dept_id=10. The foreign key constraint is configured with `ON DELETE NO ACTION`. What happens when executing `DELETE FROM DEPT WHERE dept_id = 10;`?",
        "options": [
          "The DBMS raises a foreign key violation error and the deletion is rolled back, because active child references exist.",
          "The 5 student rows are deleted automatically.",
          "The 5 student rows have their dept_id set to 0.",
          "The DEPT table is dropped from the database."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "With NO ACTION (or RESTRICT), attempting to delete a referenced parent row while referencing child rows exist triggers a referential integrity violation error."
      },
      {
        "id": "dbms-integrity-constraints-12",
        "question": "Can a table have multiple UNIQUE constraints and multiple PRIMARY KEY constraints in standard ANSI SQL?",
        "options": [
          "A table can have multiple UNIQUE constraints, but strictly only ONE PRIMARY KEY constraint.",
          "A table can have multiple PRIMARY KEY constraints, but only one UNIQUE constraint.",
          "A table can have unlimited PRIMARY KEY and unlimited UNIQUE constraints.",
          "A table can have neither; constraints are only defined on database views."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "ANSI SQL allows multiple UNIQUE constraints on different candidate key columns, but each table can designate strictly ONE Primary Key."
      },
      {
        "id": "dbms-integrity-constraints-13",
        "question": "Consider a circular referential integrity scenario: Table A has a foreign key referencing Table B, and Table B has a foreign key referencing Table A, both with NOT NULL constraints. How can initial records be inserted into these tables without constraint violations?",
        "options": [
          "By executing the INSERTs within a transaction with DEFERRABLE constraints (checked at COMMIT rather than statement execution).",
          "By disabling the operating system firewall during the insert.",
          "By dropping both tables and recreating them without primary keys.",
          "It is mathematically impossible to insert data into mutually referencing tables."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Circular foreign key dependencies require DEFERRABLE constraint checking: constraints are evaluated at transaction COMMIT rather than after each individual INSERT."
      },
      {
        "id": "dbms-integrity-constraints-14",
        "question": "What is an 'orphan record' in relational database management systems, and which integrity constraint prevents its creation?",
        "options": [
          "A child record whose foreign key references a non-existent or deleted parent record; prevented by the Referential Integrity Constraint.",
          "A table that has no indexes; prevented by the Physical Storage Constraint.",
          "A record with duplicate primary keys; prevented by Entity Integrity.",
          "A database user with no administrative privileges."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Orphan records occur when child foreign keys point to non-existent parent rows. The Referential Integrity constraint ensures orphan records cannot be created."
      }
    ],
    "relational-algebra-calculus": [
      {
        "id": "dbms-relational-algebra-1",
        "question": "In Relational Algebra, which unary operator is used to filter and select rows (tuples) that satisfy a specified predicate condition?",
        "options": [
          "Selection (σ)",
          "Projection (π)",
          "Cartesian Product (×)",
          "Natural Join (⋈)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Selection (denoted by Greek letter sigma σ) selects tuples that satisfy a given predicate condition, corresponding to the SQL WHERE clause."
      },
      {
        "id": "dbms-relational-algebra-2",
        "question": "Which Relational Algebra operator extracts specified columns (attributes) from a relation and automatically eliminates duplicate rows?",
        "options": [
          "Projection (π)",
          "Selection (σ)",
          "Intersection (∩)",
          "Division (÷)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Projection (denoted by Greek letter pi π) selects specified columns and discards others, automatically eliminating duplicates to enforce set semantics."
      },
      {
        "id": "dbms-relational-algebra-3",
        "question": "If relation R has 4 tuples and relation S has 3 tuples, how many tuples will be produced by their Cartesian Product (R × S)?",
        "options": [
          "12 tuples",
          "7 tuples",
          "1 tuple",
          "0 tuples"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The Cartesian Product combines every tuple of R with every tuple of S, producing |R| × |S| = 4 × 3 = 12 tuples."
      },
      {
        "id": "dbms-relational-algebra-4",
        "question": "What is the primary difference between Relational Algebra and Relational Calculus?",
        "options": [
          "Relational Algebra is procedural (specifies HOW to retrieve data); Relational Calculus is declarative (specifies WHAT data to retrieve).",
          "Relational Algebra only works on numbers; Relational Calculus only works on text.",
          "Relational Algebra cannot perform joins; Relational Calculus cannot perform selections.",
          "There is no difference; they are identical syntactically and procedurally."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Relational Algebra provides a procedural recipe of operations evaluating HOW to compute the result. Relational Calculus is non-procedural/declarative, specifying WHAT properties the result must satisfy."
      },
      {
        "id": "dbms-relational-algebra-5",
        "question": "What condition must two relations R and S satisfy before Set operations like Union (∪), Intersection (∩), or Set Difference (−) can be applied to them?",
        "options": [
          "They must be Union-Compatible (have the same number of attributes with matching/compatible domain types).",
          "They must have identical Primary Keys.",
          "They must reside on the same physical hard disk partition.",
          "Both relations must have an equal number of rows."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Union compatibility requires both relations to have the same degree (number of attributes) and corresponding attributes to have compatible domains."
      },
      {
        "id": "dbms-relational-algebra-6",
        "question": "How can the Natural Join (R ⋈ S) be formally expressed using basic fundamental relational algebra operators?",
        "options": [
          "A Cartesian Product (R × S) followed by a Selection (σ on matching common attributes) and a Projection (π to remove duplicate common columns).",
          "A Union (R ∪ S) followed by an Intersection (R ∩ S).",
          "A Set Difference (R − S) followed by a Division (R ÷ S).",
          "A Selection (σ) followed by an outer join without Cartesian product."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Natural join is a derived operator defined as Cartesian product followed by equality selection on matching attribute names and projecting out duplicate columns."
      },
      {
        "id": "dbms-relational-algebra-7",
        "question": "Consider relation R(id, name, dept_id). Which relational algebra expression selects students enrolled in department 10 and returns only their names?",
        "options": [
          "π_name (σ_dept_id=10 (R))",
          "σ_dept_id=10 (π_name (R))",
          "π_dept_id (σ_name=10 (R))",
          "σ_name (R ⋈ dept_id=10)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The inner expression σ_dept_id=10(R) filters rows where dept_id=10, and the outer projection π_name extracts the name column."
      },
      {
        "id": "dbms-relational-algebra-8",
        "question": "Which of the following relational algebra operations is NOT commutative?",
        "options": [
          "Set Difference (R − S ≠ S − R)",
          "Natural Join (R ⋈ S = S ⋈ R)",
          "Cartesian Product (R × S = S × R in information content)",
          "Union (R ∪ S = S ∪ R)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Set difference is non-commutative: R − S removes tuples of S from R, whereas S − R removes tuples of R from S."
      },
      {
        "id": "dbms-relational-algebra-9",
        "question": "In Tuple Relational Calculus (TRC), what does the expression `{ t | t ∈ R ∧ t.dept_id = 10 }` represent?",
        "options": [
          "The set of all tuples t in relation R where the dept_id attribute equals 10.",
          "A loop that updates dept_id to 10 for all tuples.",
          "The deletion of all tuples where dept_id is 10.",
          "The projection of dept_id 10 onto all relations."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In TRC, `{ t | P(t) }` defines the set of all tuples t satisfying predicate P(t). Here, it declaratively retrieves rows in R with dept_id = 10."
      },
      {
        "id": "dbms-relational-algebra-10",
        "question": "What does it mean for a database query language to be 'Relationally Complete' according to E.F. Codd?",
        "options": [
          "It is at least as expressive as first-order Relational Algebra (any query expressible in basic relational algebra can be expressed in that language).",
          "It can solve any mathematically undecidable problem.",
          "It can execute queries without requiring CPU memory.",
          "It supports infinite table columns."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Codd defined a language as relationally complete if it can express any query that can be formulated in standard relational algebra."
      },
      {
        "id": "dbms-relational-algebra-11",
        "question": "What is an 'Unsafe' query in Relational Calculus, and how do database systems prevent it?",
        "options": [
          "A query with an infinite result set (e.g., `{ t | ¬(t ∈ R) }` which returns all possible tuples in the universe not in R); prevented by restricting queries to safe expressions bound to the active domain.",
          "A query containing division by zero; prevented by hardware interrupts.",
          "A query executed by an unauthenticated user; prevented by firewalls.",
          "A query that modifies the database schema without DBA permissions."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "An unsafe calculus expression can yield infinite relations if not bound to relation values. Safe relational calculus restricts variable domains to constants appearing in the database relations (the active domain)."
      },
      {
        "id": "dbms-relational-algebra-12",
        "question": "Which relational algebra operator is specifically designed to answer queries involving 'for all' or 'every' (e.g., 'Find students who have enrolled in ALL courses offered by the CS department')?",
        "options": [
          "Division (÷)",
          "Theta Join (⋈_θ)",
          "Outer Join (⟕)",
          "Intersection (∩)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "The Division operator (÷) is used for universal quantification ('for all' queries). R ÷ S returns tuples in R that are associated with EVERY tuple in S."
      },
      {
        "id": "dbms-relational-algebra-13",
        "question": "How does Domain Relational Calculus (DRC) fundamentally differ from Tuple Relational Calculus (TRC)?",
        "options": [
          "DRC uses variables that range over individual attribute domain values `{ <x1, x2, ... xn> | P(...) }`, whereas TRC uses variables that range over entire tuples `{ t | P(t) }`.",
          "DRC is procedural whereas TRC is declarative.",
          "DRC cannot perform selections, while TRC can.",
          "DRC was invented for graph databases, while TRC is for document stores."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "In TRC, variables range over rows/tuples. In DRC (formulated by Lacroix and Pirotte), variables range over column domains, forming the basis of Query-by-Example (QBE)."
      },
      {
        "id": "dbms-relational-algebra-14",
        "question": "According to Codd's Theorem, what is the exact relationship between Relational Algebra, Safe Tuple Relational Calculus, and Safe Domain Relational Calculus?",
        "options": [
          "They are all mathematically equivalent in expressive power.",
          "Relational Algebra is strictly more expressive than Relational Calculus.",
          "Domain Relational Calculus is strictly more expressive than Tuple Relational Calculus.",
          "None of them can express joins."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Codd's Theorem proves that basic Relational Algebra, Safe TRC, and Safe DRC possess identical expressive power."
      }
    ],
    "relational-algebra": [
      {
        "id": "dbms-relational-algebra-1",
        "question": "In Relational Algebra, which unary operator is used to filter and select rows (tuples) that satisfy a specified predicate condition?",
        "options": [
          "Selection (σ)",
          "Projection (π)",
          "Cartesian Product (×)",
          "Natural Join (⋈)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Selection (denoted by Greek letter sigma σ) selects tuples that satisfy a given predicate condition, corresponding to the SQL WHERE clause."
      },
      {
        "id": "dbms-relational-algebra-2",
        "question": "Which Relational Algebra operator extracts specified columns (attributes) from a relation and automatically eliminates duplicate rows?",
        "options": [
          "Projection (π)",
          "Selection (σ)",
          "Intersection (∩)",
          "Division (÷)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Projection (denoted by Greek letter pi π) selects specified columns and discards others, automatically eliminating duplicates to enforce set semantics."
      },
      {
        "id": "dbms-relational-algebra-3",
        "question": "If relation R has 4 tuples and relation S has 3 tuples, how many tuples will be produced by their Cartesian Product (R × S)?",
        "options": [
          "12 tuples",
          "7 tuples",
          "1 tuple",
          "0 tuples"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The Cartesian Product combines every tuple of R with every tuple of S, producing |R| × |S| = 4 × 3 = 12 tuples."
      },
      {
        "id": "dbms-relational-algebra-4",
        "question": "What is the primary difference between Relational Algebra and Relational Calculus?",
        "options": [
          "Relational Algebra is procedural (specifies HOW to retrieve data); Relational Calculus is declarative (specifies WHAT data to retrieve).",
          "Relational Algebra only works on numbers; Relational Calculus only works on text.",
          "Relational Algebra cannot perform joins; Relational Calculus cannot perform selections.",
          "There is no difference; they are identical syntactically and procedurally."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Relational Algebra provides a procedural recipe of operations evaluating HOW to compute the result. Relational Calculus is non-procedural/declarative, specifying WHAT properties the result must satisfy."
      },
      {
        "id": "dbms-relational-algebra-5",
        "question": "What condition must two relations R and S satisfy before Set operations like Union (∪), Intersection (∩), or Set Difference (−) can be applied to them?",
        "options": [
          "They must be Union-Compatible (have the same number of attributes with matching/compatible domain types).",
          "They must have identical Primary Keys.",
          "They must reside on the same physical hard disk partition.",
          "Both relations must have an equal number of rows."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Union compatibility requires both relations to have the same degree (number of attributes) and corresponding attributes to have compatible domains."
      },
      {
        "id": "dbms-relational-algebra-6",
        "question": "How can the Natural Join (R ⋈ S) be formally expressed using basic fundamental relational algebra operators?",
        "options": [
          "A Cartesian Product (R × S) followed by a Selection (σ on matching common attributes) and a Projection (π to remove duplicate common columns).",
          "A Union (R ∪ S) followed by an Intersection (R ∩ S).",
          "A Set Difference (R − S) followed by a Division (R ÷ S).",
          "A Selection (σ) followed by an outer join without Cartesian product."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Natural join is a derived operator defined as Cartesian product followed by equality selection on matching attribute names and projecting out duplicate columns."
      },
      {
        "id": "dbms-relational-algebra-7",
        "question": "Consider relation R(id, name, dept_id). Which relational algebra expression selects students enrolled in department 10 and returns only their names?",
        "options": [
          "π_name (σ_dept_id=10 (R))",
          "σ_dept_id=10 (π_name (R))",
          "π_dept_id (σ_name=10 (R))",
          "σ_name (R ⋈ dept_id=10)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The inner expression σ_dept_id=10(R) filters rows where dept_id=10, and the outer projection π_name extracts the name column."
      },
      {
        "id": "dbms-relational-algebra-8",
        "question": "Which of the following relational algebra operations is NOT commutative?",
        "options": [
          "Set Difference (R − S ≠ S − R)",
          "Natural Join (R ⋈ S = S ⋈ R)",
          "Cartesian Product (R × S = S × R in information content)",
          "Union (R ∪ S = S ∪ R)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Set difference is non-commutative: R − S removes tuples of S from R, whereas S − R removes tuples of R from S."
      },
      {
        "id": "dbms-relational-algebra-9",
        "question": "In Tuple Relational Calculus (TRC), what does the expression `{ t | t ∈ R ∧ t.dept_id = 10 }` represent?",
        "options": [
          "The set of all tuples t in relation R where the dept_id attribute equals 10.",
          "A loop that updates dept_id to 10 for all tuples.",
          "The deletion of all tuples where dept_id is 10.",
          "The projection of dept_id 10 onto all relations."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In TRC, `{ t | P(t) }` defines the set of all tuples t satisfying predicate P(t). Here, it declaratively retrieves rows in R with dept_id = 10."
      },
      {
        "id": "dbms-relational-algebra-10",
        "question": "What does it mean for a database query language to be 'Relationally Complete' according to E.F. Codd?",
        "options": [
          "It is at least as expressive as first-order Relational Algebra (any query expressible in basic relational algebra can be expressed in that language).",
          "It can solve any mathematically undecidable problem.",
          "It can execute queries without requiring CPU memory.",
          "It supports infinite table columns."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Codd defined a language as relationally complete if it can express any query that can be formulated in standard relational algebra."
      },
      {
        "id": "dbms-relational-algebra-11",
        "question": "What is an 'Unsafe' query in Relational Calculus, and how do database systems prevent it?",
        "options": [
          "A query with an infinite result set (e.g., `{ t | ¬(t ∈ R) }` which returns all possible tuples in the universe not in R); prevented by restricting queries to safe expressions bound to the active domain.",
          "A query containing division by zero; prevented by hardware interrupts.",
          "A query executed by an unauthenticated user; prevented by firewalls.",
          "A query that modifies the database schema without DBA permissions."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "An unsafe calculus expression can yield infinite relations if not bound to relation values. Safe relational calculus restricts variable domains to constants appearing in the database relations (the active domain)."
      },
      {
        "id": "dbms-relational-algebra-12",
        "question": "Which relational algebra operator is specifically designed to answer queries involving 'for all' or 'every' (e.g., 'Find students who have enrolled in ALL courses offered by the CS department')?",
        "options": [
          "Division (÷)",
          "Theta Join (⋈_θ)",
          "Outer Join (⟕)",
          "Intersection (∩)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "The Division operator (÷) is used for universal quantification ('for all' queries). R ÷ S returns tuples in R that are associated with EVERY tuple in S."
      },
      {
        "id": "dbms-relational-algebra-13",
        "question": "How does Domain Relational Calculus (DRC) fundamentally differ from Tuple Relational Calculus (TRC)?",
        "options": [
          "DRC uses variables that range over individual attribute domain values `{ <x1, x2, ... xn> | P(...) }`, whereas TRC uses variables that range over entire tuples `{ t | P(t) }`.",
          "DRC is procedural whereas TRC is declarative.",
          "DRC cannot perform selections, while TRC can.",
          "DRC was invented for graph databases, while TRC is for document stores."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "In TRC, variables range over rows/tuples. In DRC (formulated by Lacroix and Pirotte), variables range over column domains, forming the basis of Query-by-Example (QBE)."
      },
      {
        "id": "dbms-relational-algebra-14",
        "question": "According to Codd's Theorem, what is the exact relationship between Relational Algebra, Safe Tuple Relational Calculus, and Safe Domain Relational Calculus?",
        "options": [
          "They are all mathematically equivalent in expressive power.",
          "Relational Algebra is strictly more expressive than Relational Calculus.",
          "Domain Relational Calculus is strictly more expressive than Tuple Relational Calculus.",
          "None of them can express joins."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Codd's Theorem proves that basic Relational Algebra, Safe TRC, and Safe DRC possess identical expressive power."
      }
    ],
    "normalization": [
      {
        "id": "dbms-normalization-1",
        "question": "What is the primary requirement for a relation to be in First Normal Form (1NF)?",
        "options": [
          "Every attribute value in every row must be atomic, with no multivalued attributes or repeating groups.",
          "The table must have at least five columns.",
          "All foreign keys must reference primary keys on the same disk.",
          "No non-key attribute may be numeric."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "1NF requires that all attribute values are atomic (indivisible) and that there are no repeating groups or multivalued arrays in cells."
      },
      {
        "id": "dbms-normalization-2",
        "question": "What type of dependency is forbidden in Second Normal Form (2NF)?",
        "options": [
          "Partial Dependency (a non-prime attribute depending on only part of a composite candidate key).",
          "Transitive Dependency.",
          "Trivial Functional Dependency.",
          "Referential Dependency."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "2NF requires that the relation is in 1NF and contains NO Partial Dependencies; every non-prime attribute must depend on the whole candidate key."
      },
      {
        "id": "dbms-normalization-3",
        "question": "What is an Insertion Anomaly in database design?",
        "options": [
          "The inability to insert certain data without inserting unrelated dummy values (e.g., cannot add a new course until a student enrolls).",
          "An error caused by filling the hard disk storage.",
          "A syntax error caused by misspelling the INSERT statement.",
          "The automatic generation of duplicate primary keys."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "An insertion anomaly occurs when a fact cannot be recorded without artificially fabricating other unrelated data due to poor schema design."
      },
      {
        "id": "dbms-normalization-4",
        "question": "Which normal form requires eliminating Transitive Dependencies (where a non-prime attribute determines another non-prime attribute: X → Y → Z)?",
        "options": [
          "Third Normal Form (3NF)",
          "First Normal Form (1NF)",
          "Unnormalized Form (UNF)",
          "Physical Storage Form"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Third Normal Form (3NF) requires 2NF and the removal of transitive dependencies among non-prime attributes."
      },
      {
        "id": "dbms-normalization-5",
        "question": "What does the Reflexivity rule in Armstrong's Axioms state for functional dependencies?",
        "options": [
          "If Y is a subset of X (Y ⊆ X), then X → Y.",
          "If X → Y, then Y → X.",
          "If X → Y, then XZ → YZ.",
          "If X → Y and Y → Z, then X → Z."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Reflexivity states that if attribute set Y is a subset of attribute set X, then X functionally determines Y (X → Y)."
      },
      {
        "id": "dbms-normalization-6",
        "question": "Why is Boyce-Codd Normal Form (BCNF) strictly stronger than Third Normal Form (3NF)?",
        "options": [
          "In BCNF, for EVERY non-trivial FD X → A, X must strictly be a Superkey, whereas 3NF permits A to be a prime attribute even if X is not a superkey.",
          "BCNF allows repeating groups whereas 3NF does not.",
          "BCNF only applies to tables with two columns.",
          "BCNF does not require candidate keys."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "3NF allows X → A if X is a superkey OR A is a prime attribute. BCNF removes the second condition: X MUST be a superkey for every non-trivial FD."
      },
      {
        "id": "dbms-normalization-7",
        "question": "What condition guarantees that decomposing relation R into R1 and R2 is a 'Lossless Join Decomposition'?",
        "options": [
          "The common attribute set (R1 ∩ R2) must functionally determine R1 or R2 (i.e., (R1 ∩ R2) is a superkey of R1 or R2).",
          "R1 and R2 must have an identical number of rows.",
          "R1 and R2 must not share any attributes.",
          "The union of R1 and R2 must be empty."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Decomposition into R1 and R2 is lossless if and only if R1 ∩ R2 → R1 or R1 ∩ R2 → R2. This ensures no spurious tuples appear upon re-joining."
      },
      {
        "id": "dbms-normalization-8",
        "question": "Given relation `STUDENT(sid, cid, sname, dept, hod, grade)` where key is `(sid, cid)` and `dept → hod`. What normal form is violated by `dept → hod`?",
        "options": [
          "3NF (and 2NF), because `dept → hod` represents a transitive dependency (sid → dept and dept → hod).",
          "Only 1NF, because hod is a name.",
          "No normal form is violated; the table is in BCNF.",
          "Only Domain Integrity."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "`dept → hod` is a dependency between non-prime attributes, violating 3NF because dept is not a superkey and hod is not prime."
      },
      {
        "id": "dbms-normalization-9",
        "question": "What is a 'Spurious Tuple' in database decomposition?",
        "options": [
          "A false, erroneous record generated during a lossy natural join that was not present in the original relation.",
          "A tuple that has been deleted by an administrator.",
          "A tuple that contains negative numbers.",
          "A temporary cache entry stored in RAM."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "When a relation is decomposed lossily, performing a natural join reconstructs the original records plus false invalid combinations called spurious tuples."
      },
      {
        "id": "dbms-normalization-10",
        "question": "What is the Augmentation rule in Armstrong's Axioms?",
        "options": [
          "If X → Y, then XZ → YZ for any attribute set Z.",
          "If X → Y and Y → Z, then X → Z.",
          "If Y ⊆ X, then X → Y.",
          "If X → Y and X → Z, then X → YZ."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Augmentation states that if X functionally determines Y, then adding attribute set Z to both sides preserves the dependency: XZ → YZ."
      },
      {
        "id": "dbms-normalization-11",
        "question": "What trade-off can occur when normalizing a relation all the way to BCNF instead of stopping at 3NF?",
        "options": [
          "BCNF guarantees lossless join but may sometimes fail to preserve all functional dependencies; 3NF always guarantees both lossless join and dependency preservation.",
          "BCNF causes disk space to quadruple.",
          "3NF prevents all joins, whereas BCNF requires Cartesian products.",
          "BCNF is vulnerable to deletion anomalies, whereas 3NF is not."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "While 3NF always permits a decomposition that is both lossless and dependency-preserving, achieving BCNF can occasionally sacrifice dependency preservation."
      },
      {
        "id": "dbms-normalization-12",
        "question": "Given relation R(A, B, C) with FDs: `AB → C` and `C → B`. What are the candidate keys of R, and what normal form is R in?",
        "options": [
          "Candidate keys are AB and AC; R is in 3NF but NOT in BCNF (because in C → B, C is not a superkey, though B is a prime attribute).",
          "Candidate key is only A; R is in 1NF only.",
          "Candidate keys are AB and BC; R is in BCNF.",
          "Candidate key is ABC; R is unnormalized."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "AB+ = {A,B,C} and AC+ = {A,B,C}. Prime attributes are A, B, C. In `C → B`, C is not a superkey, but B is prime, satisfying 3NF. However, since C is not a superkey, it violates BCNF."
      },
      {
        "id": "dbms-normalization-13",
        "question": "How is the attribute closure `X+` under a set of functional dependencies F used to determine whether X is a Superkey?",
        "options": [
          "If the attribute closure X+ contains every attribute in the relation schema R, then X is a Superkey.",
          "If X+ contains only one attribute, then X is a Superkey.",
          "If X+ is an empty set, then X is a Superkey.",
          "If X+ has no prime attributes, then X is a Superkey."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "By definition, X is a superkey of relation R if its functional closure X+ includes all attributes of R."
      },
      {
        "id": "dbms-normalization-14",
        "question": "What is a 'Minimal Cover' (or Canonical Cover) of a set of functional dependencies F?",
        "options": [
          "An equivalent simplified set of FDs with singleton right-hand sides, no redundant FDs, and no extraneous left-hand side attributes.",
          "A list of all possible subsets of attributes in R.",
          "The primary index built on the relation.",
          "A backup file stored in the data dictionary."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "A minimal cover is a streamlined canonical representation of functional dependencies that has the same closure as F but contains zero redundant dependencies or extraneous attributes."
      }
    ],
    "normalization-dependencies": [
      {
        "id": "dbms-normalization-1",
        "question": "What is the primary requirement for a relation to be in First Normal Form (1NF)?",
        "options": [
          "Every attribute value in every row must be atomic, with no multivalued attributes or repeating groups.",
          "The table must have at least five columns.",
          "All foreign keys must reference primary keys on the same disk.",
          "No non-key attribute may be numeric."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "1NF requires that all attribute values are atomic (indivisible) and that there are no repeating groups or multivalued arrays in cells."
      },
      {
        "id": "dbms-normalization-2",
        "question": "What type of dependency is forbidden in Second Normal Form (2NF)?",
        "options": [
          "Partial Dependency (a non-prime attribute depending on only part of a composite candidate key).",
          "Transitive Dependency.",
          "Trivial Functional Dependency.",
          "Referential Dependency."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "2NF requires that the relation is in 1NF and contains NO Partial Dependencies; every non-prime attribute must depend on the whole candidate key."
      },
      {
        "id": "dbms-normalization-3",
        "question": "What is an Insertion Anomaly in database design?",
        "options": [
          "The inability to insert certain data without inserting unrelated dummy values (e.g., cannot add a new course until a student enrolls).",
          "An error caused by filling the hard disk storage.",
          "A syntax error caused by misspelling the INSERT statement.",
          "The automatic generation of duplicate primary keys."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "An insertion anomaly occurs when a fact cannot be recorded without artificially fabricating other unrelated data due to poor schema design."
      },
      {
        "id": "dbms-normalization-4",
        "question": "Which normal form requires eliminating Transitive Dependencies (where a non-prime attribute determines another non-prime attribute: X → Y → Z)?",
        "options": [
          "Third Normal Form (3NF)",
          "First Normal Form (1NF)",
          "Unnormalized Form (UNF)",
          "Physical Storage Form"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Third Normal Form (3NF) requires 2NF and the removal of transitive dependencies among non-prime attributes."
      },
      {
        "id": "dbms-normalization-5",
        "question": "What does the Reflexivity rule in Armstrong's Axioms state for functional dependencies?",
        "options": [
          "If Y is a subset of X (Y ⊆ X), then X → Y.",
          "If X → Y, then Y → X.",
          "If X → Y, then XZ → YZ.",
          "If X → Y and Y → Z, then X → Z."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Reflexivity states that if attribute set Y is a subset of attribute set X, then X functionally determines Y (X → Y)."
      },
      {
        "id": "dbms-normalization-6",
        "question": "Why is Boyce-Codd Normal Form (BCNF) strictly stronger than Third Normal Form (3NF)?",
        "options": [
          "In BCNF, for EVERY non-trivial FD X → A, X must strictly be a Superkey, whereas 3NF permits A to be a prime attribute even if X is not a superkey.",
          "BCNF allows repeating groups whereas 3NF does not.",
          "BCNF only applies to tables with two columns.",
          "BCNF does not require candidate keys."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "3NF allows X → A if X is a superkey OR A is a prime attribute. BCNF removes the second condition: X MUST be a superkey for every non-trivial FD."
      },
      {
        "id": "dbms-normalization-7",
        "question": "What condition guarantees that decomposing relation R into R1 and R2 is a 'Lossless Join Decomposition'?",
        "options": [
          "The common attribute set (R1 ∩ R2) must functionally determine R1 or R2 (i.e., (R1 ∩ R2) is a superkey of R1 or R2).",
          "R1 and R2 must have an identical number of rows.",
          "R1 and R2 must not share any attributes.",
          "The union of R1 and R2 must be empty."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Decomposition into R1 and R2 is lossless if and only if R1 ∩ R2 → R1 or R1 ∩ R2 → R2. This ensures no spurious tuples appear upon re-joining."
      },
      {
        "id": "dbms-normalization-8",
        "question": "Given relation `STUDENT(sid, cid, sname, dept, hod, grade)` where key is `(sid, cid)` and `dept → hod`. What normal form is violated by `dept → hod`?",
        "options": [
          "3NF (and 2NF), because `dept → hod` represents a transitive dependency (sid → dept and dept → hod).",
          "Only 1NF, because hod is a name.",
          "No normal form is violated; the table is in BCNF.",
          "Only Domain Integrity."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "`dept → hod` is a dependency between non-prime attributes, violating 3NF because dept is not a superkey and hod is not prime."
      },
      {
        "id": "dbms-normalization-9",
        "question": "What is a 'Spurious Tuple' in database decomposition?",
        "options": [
          "A false, erroneous record generated during a lossy natural join that was not present in the original relation.",
          "A tuple that has been deleted by an administrator.",
          "A tuple that contains negative numbers.",
          "A temporary cache entry stored in RAM."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "When a relation is decomposed lossily, performing a natural join reconstructs the original records plus false invalid combinations called spurious tuples."
      },
      {
        "id": "dbms-normalization-10",
        "question": "What is the Augmentation rule in Armstrong's Axioms?",
        "options": [
          "If X → Y, then XZ → YZ for any attribute set Z.",
          "If X → Y and Y → Z, then X → Z.",
          "If Y ⊆ X, then X → Y.",
          "If X → Y and X → Z, then X → YZ."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Augmentation states that if X functionally determines Y, then adding attribute set Z to both sides preserves the dependency: XZ → YZ."
      },
      {
        "id": "dbms-normalization-11",
        "question": "What trade-off can occur when normalizing a relation all the way to BCNF instead of stopping at 3NF?",
        "options": [
          "BCNF guarantees lossless join but may sometimes fail to preserve all functional dependencies; 3NF always guarantees both lossless join and dependency preservation.",
          "BCNF causes disk space to quadruple.",
          "3NF prevents all joins, whereas BCNF requires Cartesian products.",
          "BCNF is vulnerable to deletion anomalies, whereas 3NF is not."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "While 3NF always permits a decomposition that is both lossless and dependency-preserving, achieving BCNF can occasionally sacrifice dependency preservation."
      },
      {
        "id": "dbms-normalization-12",
        "question": "Given relation R(A, B, C) with FDs: `AB → C` and `C → B`. What are the candidate keys of R, and what normal form is R in?",
        "options": [
          "Candidate keys are AB and AC; R is in 3NF but NOT in BCNF (because in C → B, C is not a superkey, though B is a prime attribute).",
          "Candidate key is only A; R is in 1NF only.",
          "Candidate keys are AB and BC; R is in BCNF.",
          "Candidate key is ABC; R is unnormalized."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "AB+ = {A,B,C} and AC+ = {A,B,C}. Prime attributes are A, B, C. In `C → B`, C is not a superkey, but B is prime, satisfying 3NF. However, since C is not a superkey, it violates BCNF."
      },
      {
        "id": "dbms-normalization-13",
        "question": "How is the attribute closure `X+` under a set of functional dependencies F used to determine whether X is a Superkey?",
        "options": [
          "If the attribute closure X+ contains every attribute in the relation schema R, then X is a Superkey.",
          "If X+ contains only one attribute, then X is a Superkey.",
          "If X+ is an empty set, then X is a Superkey.",
          "If X+ has no prime attributes, then X is a Superkey."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "By definition, X is a superkey of relation R if its functional closure X+ includes all attributes of R."
      },
      {
        "id": "dbms-normalization-14",
        "question": "What is a 'Minimal Cover' (or Canonical Cover) of a set of functional dependencies F?",
        "options": [
          "An equivalent simplified set of FDs with singleton right-hand sides, no redundant FDs, and no extraneous left-hand side attributes.",
          "A list of all possible subsets of attributes in R.",
          "The primary index built on the relation.",
          "A backup file stored in the data dictionary."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "A minimal cover is a streamlined canonical representation of functional dependencies that has the same closure as F but contains zero redundant dependencies or extraneous attributes."
      }
    ],
    "query-processing-optimization": [
      {
        "id": "dbms-query-optimization-1",
        "question": "In relational query optimization, what is the primary purpose of 'Pushing Selection Down' the operator tree?",
        "options": [
          "To filter and eliminate non-matching rows as early as possible, minimizing the size of intermediate tables before expensive joins.",
          "To delay filtering until the final user display.",
          "To convert SQL queries into machine bytecode.",
          "To delete rows permanently from the hard disk."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Pushing selections down applies filter conditions directly to base relations, reducing the number of tuples passed to costly upstream joins."
      },
      {
        "id": "dbms-query-optimization-2",
        "question": "What is the simplest physical join algorithm that compares each tuple of an outer relation with every tuple of an inner relation in a nested loop?",
        "options": [
          "Nested-Loop Join",
          "Hash Join",
          "Sort-Merge Join",
          "B+ Tree Join"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Nested-Loop Join uses nested loops: for each tuple in the outer relation, it scans the inner relation looking for matching join keys."
      },
      {
        "id": "dbms-query-optimization-3",
        "question": "What are the core stages of query processing in a relational database management system?",
        "options": [
          "Parsing & Translation -> Optimization -> Execution (Code Generation)",
          "Encryption -> Compaction -> Transmission",
          "Data Insertion -> Index Deletion -> Crash Recovery",
          "HTML Formatting -> CSS Styling -> Web Hosting"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Query processing consists of Parsing and translation into relational algebra, Query Optimization, and Execution of the chosen plan."
      },
      {
        "id": "dbms-query-optimization-4",
        "question": "Which join algorithm requires both input relations to be sorted on the join attributes before merging them using two cursor pointers?",
        "options": [
          "Sort-Merge Join",
          "Nested-Loop Join",
          "Cartesian Join",
          "Hash Bucket Probe"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Sort-Merge Join requires both relations to be ordered by join key; it then walks two pointers synchronously through both streams."
      },
      {
        "id": "dbms-query-optimization-5",
        "question": "How does a Hash Join execute an equi-join between two tables R and S where S is the smaller table?",
        "options": [
          "It builds an in-memory hash table on smaller table S using the join key, then streams each row of R to probe the hash table for matches.",
          "It sorts both tables in alphabetical order and performs binary search.",
          "It computes the Cartesian product on disk and hashes the file names.",
          "It executes an external merge sort on all non-join columns."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In a Hash Join, the build phase creates an in-memory hash table on the smaller relation S. In the probe phase, the larger relation R scans and probes the hash table."
      },
      {
        "id": "dbms-query-optimization-6",
        "question": "Consider query equivalence rule: `σ_c (R ⋈ S) ≡ (σ_c (R)) ⋈ S`. Under what condition is this transformation mathematically valid?",
        "options": [
          "When condition c references only attributes belonging to relation R.",
          "When condition c contains no arithmetic comparisons.",
          "When relation S has more columns than relation R.",
          "Only when both relations are stored in the same database table."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Selection can commute with join `σ_c(R ⋈ S) ≡ (σ_c(R)) ⋈ S` if and only if predicate c involves only attributes of relation R."
      },
      {
        "id": "dbms-query-optimization-7",
        "question": "Suppose table R has 10,000 tuples and table S has 500 tuples. Why is a 'Naive Plan' that executes `(R ⋈ S)` before filtering by `R.dept_id = 10` inefficient?",
        "options": [
          "Because joining all 10,000 tuples produces a massive intermediate result that consumes extensive memory and I/O before most tuples are discarded by the filter.",
          "Because MySQL cannot join tables with more than 100 rows.",
          "Because SQL syntax requires filters to be executed after sorting.",
          "Because Cartesian products cannot be computed on integers."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Joining all 10,000 rows first wastes massive CPU and buffer memory creating intermediate tuples that are immediately thrown away by the subsequent filter."
      },
      {
        "id": "dbms-query-optimization-8",
        "question": "What statistics does a Cost-Based Query Optimizer (CBO) retrieve from the system catalog to estimate execution plan costs?",
        "options": [
          "Table cardinalities (n_R), number of disk blocks (b_R), attribute histograms, and index heights.",
          "The screen resolution and operating system wallpaper of the user.",
          "The length of the programmer's SQL variable names.",
          "The network IP address of the database web client."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "A cost-based optimizer uses catalog metadata: tuple counts ($n_R$), block counts ($b_R$), distinct attribute values, and value distribution histograms."
      },
      {
        "id": "dbms-query-optimization-9",
        "question": "In addition to pushing selections down, why do query optimizers also 'Push Projections Down' the operator tree?",
        "options": [
          "To eliminate unnecessary columns early, reducing tuple width and the volume of bytes transferred between disk blocks and RAM buffers.",
          "To convert integers into floating point numbers.",
          "To format output strings with uppercase letters.",
          "To prevent users from seeing database table names."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Pushing projections down discards unneeded columns early, narrowing row size and packing more tuples per memory buffer page."
      },
      {
        "id": "dbms-query-optimization-10",
        "question": "When is Sort-Merge Join typically preferred over Hash Join by database query optimizers?",
        "options": [
          "When both input relations are already sorted on the join key (e.g., via clustered B+ tree indexes) or when the query specifies an `ORDER BY` clause on the join attribute.",
          "When both relations fit completely in CPU registers.",
          "When the join condition uses the `!=` inequality operator.",
          "When the database runs in single-user mode."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "If inputs are already sorted by an index or prior step, Sort-Merge Join runs in linear time $O(b_R + b_S)$ without hash table build overhead, producing naturally sorted results."
      },
      {
        "id": "dbms-query-optimization-11",
        "question": "What is the I/O cost of Block Nested-Loop Join between outer relation R (b_R blocks) and inner relation S (b_S blocks) when M memory buffer pages are available?",
        "options": [
          "Cost = b_R + ⌈b_R / (M − 2)⌉ × b_S disk block accesses.",
          "Cost = b_R × b_S × M accesses.",
          "Cost = b_R + b_S accesses unconditionally.",
          "Cost = 2 × (b_R + b_S) × log(M) accesses."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Block nested-loop join loads $M - 2$ blocks of the outer relation into buffer memory per pass, requiring $lceil b_R / (M-2) \rceil$ full scans of inner relation $S$."
      },
      {
        "id": "dbms-query-optimization-12",
        "question": "Why does the Grace Hash Join algorithm partition relations into disk buckets using a hash function h1 before probing?",
        "options": [
          "To handle cases where neither relation fits entirely in available main memory, ensuring each pair of hash buckets fits into RAM during the build and probe phase.",
          "To encrypt data against unauthorized network sniffing.",
          "To remove NULL values from the join attributes.",
          "To convert the join into a Cartesian product."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Grace Hash Join partitions large relations into disk-based buckets that individually fit in RAM, avoiding memory overflow and thrashing."
      },
      {
        "id": "dbms-query-optimization-13",
        "question": "In heuristic algebraic query optimization, why is the order of joins among three or more tables (e.g., R ⋈ S ⋈ T) critical to overall query latency?",
        "options": [
          "Because different join tree shapes (left-deep, right-deep, bushy) and join orderings produce vastly different intermediate result sizes, changing execution times from milliseconds to hours.",
          "Because SQL engines only permit joins from left to right in alphabetical order.",
          "Because outer joins cannot be combined with inner joins.",
          "Because join ordering alters the final mathematical result."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Join ordering determines the sizes of intermediate relations. Joining highly selective tables first drastically shrinks intermediate data volumes."
      },
      {
        "id": "dbms-query-optimization-14",
        "question": "What is the primary limitation of Hash Join compared to Nested-Loop Join?",
        "options": [
          "Hash Join can ONLY be used for equi-joins (equality comparisons like `R.id = S.id`), whereas Nested-Loop Join can evaluate arbitrary theta join conditions (like `<, <=, >`).",
          "Hash Join cannot process more than 100 rows.",
          "Hash Join does not support primary keys.",
          "Hash Join requires all columns to be string types."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Hashing relies on identical hash keys for equality matching. Therefore, Hash Join only works for equi-joins, while Nested-Loop Join can test any arbitrary predicate."
      }
    ],
    "query-optimization": [
      {
        "id": "dbms-query-optimization-1",
        "question": "In relational query optimization, what is the primary purpose of 'Pushing Selection Down' the operator tree?",
        "options": [
          "To filter and eliminate non-matching rows as early as possible, minimizing the size of intermediate tables before expensive joins.",
          "To delay filtering until the final user display.",
          "To convert SQL queries into machine bytecode.",
          "To delete rows permanently from the hard disk."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Pushing selections down applies filter conditions directly to base relations, reducing the number of tuples passed to costly upstream joins."
      },
      {
        "id": "dbms-query-optimization-2",
        "question": "What is the simplest physical join algorithm that compares each tuple of an outer relation with every tuple of an inner relation in a nested loop?",
        "options": [
          "Nested-Loop Join",
          "Hash Join",
          "Sort-Merge Join",
          "B+ Tree Join"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Nested-Loop Join uses nested loops: for each tuple in the outer relation, it scans the inner relation looking for matching join keys."
      },
      {
        "id": "dbms-query-optimization-3",
        "question": "What are the core stages of query processing in a relational database management system?",
        "options": [
          "Parsing & Translation -> Optimization -> Execution (Code Generation)",
          "Encryption -> Compaction -> Transmission",
          "Data Insertion -> Index Deletion -> Crash Recovery",
          "HTML Formatting -> CSS Styling -> Web Hosting"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Query processing consists of Parsing and translation into relational algebra, Query Optimization, and Execution of the chosen plan."
      },
      {
        "id": "dbms-query-optimization-4",
        "question": "Which join algorithm requires both input relations to be sorted on the join attributes before merging them using two cursor pointers?",
        "options": [
          "Sort-Merge Join",
          "Nested-Loop Join",
          "Cartesian Join",
          "Hash Bucket Probe"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Sort-Merge Join requires both relations to be ordered by join key; it then walks two pointers synchronously through both streams."
      },
      {
        "id": "dbms-query-optimization-5",
        "question": "How does a Hash Join execute an equi-join between two tables R and S where S is the smaller table?",
        "options": [
          "It builds an in-memory hash table on smaller table S using the join key, then streams each row of R to probe the hash table for matches.",
          "It sorts both tables in alphabetical order and performs binary search.",
          "It computes the Cartesian product on disk and hashes the file names.",
          "It executes an external merge sort on all non-join columns."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In a Hash Join, the build phase creates an in-memory hash table on the smaller relation S. In the probe phase, the larger relation R scans and probes the hash table."
      },
      {
        "id": "dbms-query-optimization-6",
        "question": "Consider query equivalence rule: `σ_c (R ⋈ S) ≡ (σ_c (R)) ⋈ S`. Under what condition is this transformation mathematically valid?",
        "options": [
          "When condition c references only attributes belonging to relation R.",
          "When condition c contains no arithmetic comparisons.",
          "When relation S has more columns than relation R.",
          "Only when both relations are stored in the same database table."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Selection can commute with join `σ_c(R ⋈ S) ≡ (σ_c(R)) ⋈ S` if and only if predicate c involves only attributes of relation R."
      },
      {
        "id": "dbms-query-optimization-7",
        "question": "Suppose table R has 10,000 tuples and table S has 500 tuples. Why is a 'Naive Plan' that executes `(R ⋈ S)` before filtering by `R.dept_id = 10` inefficient?",
        "options": [
          "Because joining all 10,000 tuples produces a massive intermediate result that consumes extensive memory and I/O before most tuples are discarded by the filter.",
          "Because MySQL cannot join tables with more than 100 rows.",
          "Because SQL syntax requires filters to be executed after sorting.",
          "Because Cartesian products cannot be computed on integers."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Joining all 10,000 rows first wastes massive CPU and buffer memory creating intermediate tuples that are immediately thrown away by the subsequent filter."
      },
      {
        "id": "dbms-query-optimization-8",
        "question": "What statistics does a Cost-Based Query Optimizer (CBO) retrieve from the system catalog to estimate execution plan costs?",
        "options": [
          "Table cardinalities (n_R), number of disk blocks (b_R), attribute histograms, and index heights.",
          "The screen resolution and operating system wallpaper of the user.",
          "The length of the programmer's SQL variable names.",
          "The network IP address of the database web client."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "A cost-based optimizer uses catalog metadata: tuple counts ($n_R$), block counts ($b_R$), distinct attribute values, and value distribution histograms."
      },
      {
        "id": "dbms-query-optimization-9",
        "question": "In addition to pushing selections down, why do query optimizers also 'Push Projections Down' the operator tree?",
        "options": [
          "To eliminate unnecessary columns early, reducing tuple width and the volume of bytes transferred between disk blocks and RAM buffers.",
          "To convert integers into floating point numbers.",
          "To format output strings with uppercase letters.",
          "To prevent users from seeing database table names."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Pushing projections down discards unneeded columns early, narrowing row size and packing more tuples per memory buffer page."
      },
      {
        "id": "dbms-query-optimization-10",
        "question": "When is Sort-Merge Join typically preferred over Hash Join by database query optimizers?",
        "options": [
          "When both input relations are already sorted on the join key (e.g., via clustered B+ tree indexes) or when the query specifies an `ORDER BY` clause on the join attribute.",
          "When both relations fit completely in CPU registers.",
          "When the join condition uses the `!=` inequality operator.",
          "When the database runs in single-user mode."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "If inputs are already sorted by an index or prior step, Sort-Merge Join runs in linear time $O(b_R + b_S)$ without hash table build overhead, producing naturally sorted results."
      },
      {
        "id": "dbms-query-optimization-11",
        "question": "What is the I/O cost of Block Nested-Loop Join between outer relation R (b_R blocks) and inner relation S (b_S blocks) when M memory buffer pages are available?",
        "options": [
          "Cost = b_R + ⌈b_R / (M − 2)⌉ × b_S disk block accesses.",
          "Cost = b_R × b_S × M accesses.",
          "Cost = b_R + b_S accesses unconditionally.",
          "Cost = 2 × (b_R + b_S) × log(M) accesses."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Block nested-loop join loads $M - 2$ blocks of the outer relation into buffer memory per pass, requiring $lceil b_R / (M-2) \rceil$ full scans of inner relation $S$."
      },
      {
        "id": "dbms-query-optimization-12",
        "question": "Why does the Grace Hash Join algorithm partition relations into disk buckets using a hash function h1 before probing?",
        "options": [
          "To handle cases where neither relation fits entirely in available main memory, ensuring each pair of hash buckets fits into RAM during the build and probe phase.",
          "To encrypt data against unauthorized network sniffing.",
          "To remove NULL values from the join attributes.",
          "To convert the join into a Cartesian product."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Grace Hash Join partitions large relations into disk-based buckets that individually fit in RAM, avoiding memory overflow and thrashing."
      },
      {
        "id": "dbms-query-optimization-13",
        "question": "In heuristic algebraic query optimization, why is the order of joins among three or more tables (e.g., R ⋈ S ⋈ T) critical to overall query latency?",
        "options": [
          "Because different join tree shapes (left-deep, right-deep, bushy) and join orderings produce vastly different intermediate result sizes, changing execution times from milliseconds to hours.",
          "Because SQL engines only permit joins from left to right in alphabetical order.",
          "Because outer joins cannot be combined with inner joins.",
          "Because join ordering alters the final mathematical result."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Join ordering determines the sizes of intermediate relations. Joining highly selective tables first drastically shrinks intermediate data volumes."
      },
      {
        "id": "dbms-query-optimization-14",
        "question": "What is the primary limitation of Hash Join compared to Nested-Loop Join?",
        "options": [
          "Hash Join can ONLY be used for equi-joins (equality comparisons like `R.id = S.id`), whereas Nested-Loop Join can evaluate arbitrary theta join conditions (like `<, <=, >`).",
          "Hash Join cannot process more than 100 rows.",
          "Hash Join does not support primary keys.",
          "Hash Join requires all columns to be string types."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Hashing relies on identical hash keys for equality matching. Therefore, Hash Join only works for equi-joins, while Nested-Loop Join can test any arbitrary predicate."
      }
    ],
    "transactions": [
      {
        "id": "dbms-relational-algebra-1",
        "question": "In Relational Algebra, which unary operator is used to filter and select rows (tuples) that satisfy a specified predicate condition?",
        "options": [
          "Selection (σ)",
          "Projection (π)",
          "Cartesian Product (×)",
          "Natural Join (⋈)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Selection (denoted by Greek letter sigma σ) selects tuples that satisfy a given predicate condition, corresponding to the SQL WHERE clause."
      },
      {
        "id": "dbms-relational-algebra-2",
        "question": "Which Relational Algebra operator extracts specified columns (attributes) from a relation and automatically eliminates duplicate rows?",
        "options": [
          "Projection (π)",
          "Selection (σ)",
          "Intersection (∩)",
          "Division (÷)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Projection (denoted by Greek letter pi π) selects specified columns and discards others, automatically eliminating duplicates to enforce set semantics."
      },
      {
        "id": "dbms-relational-algebra-3",
        "question": "If relation R has 4 tuples and relation S has 3 tuples, how many tuples will be produced by their Cartesian Product (R × S)?",
        "options": [
          "12 tuples",
          "7 tuples",
          "1 tuple",
          "0 tuples"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The Cartesian Product combines every tuple of R with every tuple of S, producing |R| × |S| = 4 × 3 = 12 tuples."
      },
      {
        "id": "dbms-relational-algebra-4",
        "question": "What is the primary difference between Relational Algebra and Relational Calculus?",
        "options": [
          "Relational Algebra is procedural (specifies HOW to retrieve data); Relational Calculus is declarative (specifies WHAT data to retrieve).",
          "Relational Algebra only works on numbers; Relational Calculus only works on text.",
          "Relational Algebra cannot perform joins; Relational Calculus cannot perform selections.",
          "There is no difference; they are identical syntactically and procedurally."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Relational Algebra provides a procedural recipe of operations evaluating HOW to compute the result. Relational Calculus is non-procedural/declarative, specifying WHAT properties the result must satisfy."
      },
      {
        "id": "dbms-relational-algebra-5",
        "question": "What condition must two relations R and S satisfy before Set operations like Union (∪), Intersection (∩), or Set Difference (−) can be applied to them?",
        "options": [
          "They must be Union-Compatible (have the same number of attributes with matching/compatible domain types).",
          "They must have identical Primary Keys.",
          "They must reside on the same physical hard disk partition.",
          "Both relations must have an equal number of rows."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Union compatibility requires both relations to have the same degree (number of attributes) and corresponding attributes to have compatible domains."
      },
      {
        "id": "dbms-relational-algebra-6",
        "question": "How can the Natural Join (R ⋈ S) be formally expressed using basic fundamental relational algebra operators?",
        "options": [
          "A Cartesian Product (R × S) followed by a Selection (σ on matching common attributes) and a Projection (π to remove duplicate common columns).",
          "A Union (R ∪ S) followed by an Intersection (R ∩ S).",
          "A Set Difference (R − S) followed by a Division (R ÷ S).",
          "A Selection (σ) followed by an outer join without Cartesian product."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Natural join is a derived operator defined as Cartesian product followed by equality selection on matching attribute names and projecting out duplicate columns."
      },
      {
        "id": "dbms-relational-algebra-7",
        "question": "Consider relation R(id, name, dept_id). Which relational algebra expression selects students enrolled in department 10 and returns only their names?",
        "options": [
          "π_name (σ_dept_id=10 (R))",
          "σ_dept_id=10 (π_name (R))",
          "π_dept_id (σ_name=10 (R))",
          "σ_name (R ⋈ dept_id=10)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The inner expression σ_dept_id=10(R) filters rows where dept_id=10, and the outer projection π_name extracts the name column."
      },
      {
        "id": "dbms-relational-algebra-8",
        "question": "Which of the following relational algebra operations is NOT commutative?",
        "options": [
          "Set Difference (R − S ≠ S − R)",
          "Natural Join (R ⋈ S = S ⋈ R)",
          "Cartesian Product (R × S = S × R in information content)",
          "Union (R ∪ S = S ∪ R)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Set difference is non-commutative: R − S removes tuples of S from R, whereas S − R removes tuples of R from S."
      },
      {
        "id": "dbms-relational-algebra-9",
        "question": "In Tuple Relational Calculus (TRC), what does the expression `{ t | t ∈ R ∧ t.dept_id = 10 }` represent?",
        "options": [
          "The set of all tuples t in relation R where the dept_id attribute equals 10.",
          "A loop that updates dept_id to 10 for all tuples.",
          "The deletion of all tuples where dept_id is 10.",
          "The projection of dept_id 10 onto all relations."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In TRC, `{ t | P(t) }` defines the set of all tuples t satisfying predicate P(t). Here, it declaratively retrieves rows in R with dept_id = 10."
      },
      {
        "id": "dbms-relational-algebra-10",
        "question": "What does it mean for a database query language to be 'Relationally Complete' according to E.F. Codd?",
        "options": [
          "It is at least as expressive as first-order Relational Algebra (any query expressible in basic relational algebra can be expressed in that language).",
          "It can solve any mathematically undecidable problem.",
          "It can execute queries without requiring CPU memory.",
          "It supports infinite table columns."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Codd defined a language as relationally complete if it can express any query that can be formulated in standard relational algebra."
      },
      {
        "id": "dbms-relational-algebra-11",
        "question": "What is an 'Unsafe' query in Relational Calculus, and how do database systems prevent it?",
        "options": [
          "A query with an infinite result set (e.g., `{ t | ¬(t ∈ R) }` which returns all possible tuples in the universe not in R); prevented by restricting queries to safe expressions bound to the active domain.",
          "A query containing division by zero; prevented by hardware interrupts.",
          "A query executed by an unauthenticated user; prevented by firewalls.",
          "A query that modifies the database schema without DBA permissions."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "An unsafe calculus expression can yield infinite relations if not bound to relation values. Safe relational calculus restricts variable domains to constants appearing in the database relations (the active domain)."
      },
      {
        "id": "dbms-relational-algebra-12",
        "question": "Which relational algebra operator is specifically designed to answer queries involving 'for all' or 'every' (e.g., 'Find students who have enrolled in ALL courses offered by the CS department')?",
        "options": [
          "Division (÷)",
          "Theta Join (⋈_θ)",
          "Outer Join (⟕)",
          "Intersection (∩)"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "The Division operator (÷) is used for universal quantification ('for all' queries). R ÷ S returns tuples in R that are associated with EVERY tuple in S."
      },
      {
        "id": "dbms-relational-algebra-13",
        "question": "How does Domain Relational Calculus (DRC) fundamentally differ from Tuple Relational Calculus (TRC)?",
        "options": [
          "DRC uses variables that range over individual attribute domain values `{ <x1, x2, ... xn> | P(...) }`, whereas TRC uses variables that range over entire tuples `{ t | P(t) }`.",
          "DRC is procedural whereas TRC is declarative.",
          "DRC cannot perform selections, while TRC can.",
          "DRC was invented for graph databases, while TRC is for document stores."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "In TRC, variables range over rows/tuples. In DRC (formulated by Lacroix and Pirotte), variables range over column domains, forming the basis of Query-by-Example (QBE)."
      },
      {
        "id": "dbms-relational-algebra-14",
        "question": "According to Codd's Theorem, what is the exact relationship between Relational Algebra, Safe Tuple Relational Calculus, and Safe Domain Relational Calculus?",
        "options": [
          "They are all mathematically equivalent in expressive power.",
          "Relational Algebra is strictly more expressive than Relational Calculus.",
          "Domain Relational Calculus is strictly more expressive than Tuple Relational Calculus.",
          "None of them can express joins."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Codd's Theorem proves that basic Relational Algebra, Safe TRC, and Safe DRC possess identical expressive power."
      }
    ],
    "indexing": [
      {
        "id": "dbms-query-optimization-1",
        "question": "In relational query optimization, what is the primary purpose of 'Pushing Selection Down' the operator tree?",
        "options": [
          "To filter and eliminate non-matching rows as early as possible, minimizing the size of intermediate tables before expensive joins.",
          "To delay filtering until the final user display.",
          "To convert SQL queries into machine bytecode.",
          "To delete rows permanently from the hard disk."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Pushing selections down applies filter conditions directly to base relations, reducing the number of tuples passed to costly upstream joins."
      },
      {
        "id": "dbms-query-optimization-2",
        "question": "What is the simplest physical join algorithm that compares each tuple of an outer relation with every tuple of an inner relation in a nested loop?",
        "options": [
          "Nested-Loop Join",
          "Hash Join",
          "Sort-Merge Join",
          "B+ Tree Join"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Nested-Loop Join uses nested loops: for each tuple in the outer relation, it scans the inner relation looking for matching join keys."
      },
      {
        "id": "dbms-query-optimization-3",
        "question": "What are the core stages of query processing in a relational database management system?",
        "options": [
          "Parsing & Translation -> Optimization -> Execution (Code Generation)",
          "Encryption -> Compaction -> Transmission",
          "Data Insertion -> Index Deletion -> Crash Recovery",
          "HTML Formatting -> CSS Styling -> Web Hosting"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Query processing consists of Parsing and translation into relational algebra, Query Optimization, and Execution of the chosen plan."
      },
      {
        "id": "dbms-query-optimization-4",
        "question": "Which join algorithm requires both input relations to be sorted on the join attributes before merging them using two cursor pointers?",
        "options": [
          "Sort-Merge Join",
          "Nested-Loop Join",
          "Cartesian Join",
          "Hash Bucket Probe"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Sort-Merge Join requires both relations to be ordered by join key; it then walks two pointers synchronously through both streams."
      },
      {
        "id": "dbms-query-optimization-5",
        "question": "How does a Hash Join execute an equi-join between two tables R and S where S is the smaller table?",
        "options": [
          "It builds an in-memory hash table on smaller table S using the join key, then streams each row of R to probe the hash table for matches.",
          "It sorts both tables in alphabetical order and performs binary search.",
          "It computes the Cartesian product on disk and hashes the file names.",
          "It executes an external merge sort on all non-join columns."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In a Hash Join, the build phase creates an in-memory hash table on the smaller relation S. In the probe phase, the larger relation R scans and probes the hash table."
      },
      {
        "id": "dbms-query-optimization-6",
        "question": "Consider query equivalence rule: `σ_c (R ⋈ S) ≡ (σ_c (R)) ⋈ S`. Under what condition is this transformation mathematically valid?",
        "options": [
          "When condition c references only attributes belonging to relation R.",
          "When condition c contains no arithmetic comparisons.",
          "When relation S has more columns than relation R.",
          "Only when both relations are stored in the same database table."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Selection can commute with join `σ_c(R ⋈ S) ≡ (σ_c(R)) ⋈ S` if and only if predicate c involves only attributes of relation R."
      },
      {
        "id": "dbms-query-optimization-7",
        "question": "Suppose table R has 10,000 tuples and table S has 500 tuples. Why is a 'Naive Plan' that executes `(R ⋈ S)` before filtering by `R.dept_id = 10` inefficient?",
        "options": [
          "Because joining all 10,000 tuples produces a massive intermediate result that consumes extensive memory and I/O before most tuples are discarded by the filter.",
          "Because MySQL cannot join tables with more than 100 rows.",
          "Because SQL syntax requires filters to be executed after sorting.",
          "Because Cartesian products cannot be computed on integers."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Joining all 10,000 rows first wastes massive CPU and buffer memory creating intermediate tuples that are immediately thrown away by the subsequent filter."
      },
      {
        "id": "dbms-query-optimization-8",
        "question": "What statistics does a Cost-Based Query Optimizer (CBO) retrieve from the system catalog to estimate execution plan costs?",
        "options": [
          "Table cardinalities (n_R), number of disk blocks (b_R), attribute histograms, and index heights.",
          "The screen resolution and operating system wallpaper of the user.",
          "The length of the programmer's SQL variable names.",
          "The network IP address of the database web client."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "A cost-based optimizer uses catalog metadata: tuple counts ($n_R$), block counts ($b_R$), distinct attribute values, and value distribution histograms."
      },
      {
        "id": "dbms-query-optimization-9",
        "question": "In addition to pushing selections down, why do query optimizers also 'Push Projections Down' the operator tree?",
        "options": [
          "To eliminate unnecessary columns early, reducing tuple width and the volume of bytes transferred between disk blocks and RAM buffers.",
          "To convert integers into floating point numbers.",
          "To format output strings with uppercase letters.",
          "To prevent users from seeing database table names."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Pushing projections down discards unneeded columns early, narrowing row size and packing more tuples per memory buffer page."
      },
      {
        "id": "dbms-query-optimization-10",
        "question": "When is Sort-Merge Join typically preferred over Hash Join by database query optimizers?",
        "options": [
          "When both input relations are already sorted on the join key (e.g., via clustered B+ tree indexes) or when the query specifies an `ORDER BY` clause on the join attribute.",
          "When both relations fit completely in CPU registers.",
          "When the join condition uses the `!=` inequality operator.",
          "When the database runs in single-user mode."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "If inputs are already sorted by an index or prior step, Sort-Merge Join runs in linear time $O(b_R + b_S)$ without hash table build overhead, producing naturally sorted results."
      },
      {
        "id": "dbms-query-optimization-11",
        "question": "What is the I/O cost of Block Nested-Loop Join between outer relation R (b_R blocks) and inner relation S (b_S blocks) when M memory buffer pages are available?",
        "options": [
          "Cost = b_R + ⌈b_R / (M − 2)⌉ × b_S disk block accesses.",
          "Cost = b_R × b_S × M accesses.",
          "Cost = b_R + b_S accesses unconditionally.",
          "Cost = 2 × (b_R + b_S) × log(M) accesses."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Block nested-loop join loads $M - 2$ blocks of the outer relation into buffer memory per pass, requiring $lceil b_R / (M-2) \rceil$ full scans of inner relation $S$."
      },
      {
        "id": "dbms-query-optimization-12",
        "question": "Why does the Grace Hash Join algorithm partition relations into disk buckets using a hash function h1 before probing?",
        "options": [
          "To handle cases where neither relation fits entirely in available main memory, ensuring each pair of hash buckets fits into RAM during the build and probe phase.",
          "To encrypt data against unauthorized network sniffing.",
          "To remove NULL values from the join attributes.",
          "To convert the join into a Cartesian product."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Grace Hash Join partitions large relations into disk-based buckets that individually fit in RAM, avoiding memory overflow and thrashing."
      },
      {
        "id": "dbms-query-optimization-13",
        "question": "In heuristic algebraic query optimization, why is the order of joins among three or more tables (e.g., R ⋈ S ⋈ T) critical to overall query latency?",
        "options": [
          "Because different join tree shapes (left-deep, right-deep, bushy) and join orderings produce vastly different intermediate result sizes, changing execution times from milliseconds to hours.",
          "Because SQL engines only permit joins from left to right in alphabetical order.",
          "Because outer joins cannot be combined with inner joins.",
          "Because join ordering alters the final mathematical result."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Join ordering determines the sizes of intermediate relations. Joining highly selective tables first drastically shrinks intermediate data volumes."
      },
      {
        "id": "dbms-query-optimization-14",
        "question": "What is the primary limitation of Hash Join compared to Nested-Loop Join?",
        "options": [
          "Hash Join can ONLY be used for equi-joins (equality comparisons like `R.id = S.id`), whereas Nested-Loop Join can evaluate arbitrary theta join conditions (like `<, <=, >`).",
          "Hash Join cannot process more than 100 rows.",
          "Hash Join does not support primary keys.",
          "Hash Join requires all columns to be string types."
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Hashing relies on identical hash keys for equality matching. Therefore, Hash Join only works for equi-joins, while Nested-Loop Join can test any arbitrary predicate."
      }
    ]
  },
  "blockchain": {
    "blocks-and-blockchain": [
      {
        "id": "blockchain-blocks-and-blockchain-1",
        "question": "In a blockchain, what creates the cryptographic 'chain' linking consecutive blocks together?",
        "options": [
          "Each new block stores the cryptographic hash of the previous block ('links to')",
          "Blocks are connected by physical fiber optic cables in a data center",
          "An encrypted master password held by a central server",
          "Sequential integer IDs without any cryptographic hashes"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The cryptographic link is established because every block header incorporates the hash digest of the immediate predecessor block."
      },
      {
        "id": "blockchain-blocks-and-blockchain-2",
        "question": "In the 3D lab, what happens when Block 2 is edited/tampered with?",
        "options": [
          "Block 2's hash changes, causing Block 3 and all subsequent blocks to break and turn red",
          "Block 1 turns red while Block 3 stays green",
          "The entire blockchain automatically fixes itself without any hash changes",
          "Only Block 2 turns red; later blocks are unaffected"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Because Block 3 stores Block 2's original hash, changing Block 2 alters its hash, creating a mismatch that invalidates Block 3 and all later blocks."
      },
      {
        "id": "blockchain-blocks-and-blockchain-3",
        "question": "What previous hash value does the Genesis Block (Block 1) link to?",
        "options": [
          "An initial reference of zeros ('000000')",
          "The hash of the final block in the chain",
          "A random number generated by a central bank",
          "The IP address of the first miner"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The Genesis block is the very first block in the blockchain, so it has no predecessor; its previous hash pointer is set to zeros."
      },
      {
        "id": "blockchain-blocks-and-blockchain-4",
        "question": "Why is it practically impossible for an attacker to tamper with an old block on a real blockchain?",
        "options": [
          "To conceal the edit, the attacker must recompute and re-mine the edited block and every subsequent block across the distributed network",
          "Blockchains store all data in read-only CD-ROMs",
          "Attackers cannot access internet connections",
          "Old blocks are deleted after 24 hours"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Because every block depends on the previous block's hash, altering any past block invalidates all downstream blocks, requiring the attacker to redo all subsequent computational work."
      },
      {
        "id": "blockchain-blocks-and-blockchain-5",
        "question": "In the VR lab, what does a green block and green status text 'OK' indicate?",
        "options": [
          "The block's calculated hash perfectly matches its sealed hash and the link to the previous block is unbroken",
          "The block has zero transactions inside it",
          "The block is waiting for an administrator's signature",
          "The block has been deleted from memory"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Green denotes that data integrity is intact and every hash matches the cryptographic seal it was verified with."
      }
    ],
    "cryptographic-hashing": [
      {
        "id": "blockchain-cryptographic-hashing-1",
        "question": "In the Cryptographic Hash Functions lab, what happens when you run the hash machine on the exact same input text twice?",
        "options": [
          "It produces the exact same fingerprint, turning all output tiles green",
          "It generates a random new hash each time",
          "The output length doubles in size",
          "The hash machine overheats and crashes"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Cryptographic hash functions are deterministic; identical input data will always produce the identical output digest."
      },
      {
        "id": "blockchain-cryptographic-hashing-2",
        "question": "In the 3D scene, what is demonstrated when clicking the 'Flip char' button to alter just one character?",
        "options": [
          "The Avalanche Effect: changing a single character causes the output fingerprint to completely change (red tiles)",
          "The output length decreases by one digit",
          "The previous hash is restored automatically",
          "Only one corresponding tile changes color while the rest stay identical"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The avalanche effect ensures that even a tiny 1-character alteration causes a radical, unpredictable transformation of the entire output hash."
      },
      {
        "id": "blockchain-cryptographic-hashing-3",
        "question": "What property of cryptographic hash functions prevents working backwards from an output digest to discover the original input data?",
        "options": [
          "Pre-image resistance (strictly one-way)",
          "Linear reversibility",
          "Commutative property",
          "Symmetrical decryption"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Pre-image resistance means that given an output hash y, finding any input x such that H(x) = y is computationally infeasible."
      },
      {
        "id": "blockchain-cryptographic-hashing-4",
        "question": "If an input message is repeated 30 times so it becomes much larger, what happens to the size of the resulting hash?",
        "options": [
          "The hash remains the exact same fixed length (8 hex digits in the demo; 64 hex characters in SHA-256)",
          "The hash expands to 30 times its original length",
          "The hash becomes an empty string",
          "The hash switches to floating point notation"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Hash functions compress arbitrary-sized input streams into a strictly fixed-size digest (e.g. 256 bits / 64 hex characters in SHA-256)."
      },
      {
        "id": "blockchain-cryptographic-hashing-5",
        "question": "Which of the following is the standard cryptographic hash function widely used in the Bitcoin blockchain protocol?",
        "options": [
          "SHA-256 (Secure Hash Algorithm 256-bit)",
          "MD5",
          "Base64 encoding",
          "AES-128"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Bitcoin uses double SHA-256 (SHA256(SHA256(data))) for block header hashing, address creation, and transaction identification."
      }
    ],
    "proof-of-work": [
      {
        "id": "blockchain-proof-of-work-1",
        "question": "What is the primary objective of a miner when attempting to seal a block in Proof of Work?",
        "options": [
          "Find a guess number (nonce) such that the resulting block hash begins with a required number of leading zeros",
          "Guess the private key of the network administrator",
          "Connect the highest number of physical computer monitors",
          "Download the entire internet onto a single hard drive"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "In PoW, a valid block hash must fall below the target threshold, which means it must start with a designated number of leading zeros."
      },
      {
        "id": "blockchain-proof-of-work-2",
        "question": "In hexadecimal notation, approximately how much more computational work is required for each additional leading zero added to the difficulty?",
        "options": [
          "Approximately 16 times more hashing attempts",
          "2 times more work",
          "10 times more work",
          "The exact same amount of work"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "In base-16 (hexadecimal), each additional leading zero represents a 1/16 probability reduction, requiring on average 16 times more nonces to be tested."
      },
      {
        "id": "blockchain-proof-of-work-3",
        "question": "Why is Proof of Work described as having an 'asymmetric' computational workload?",
        "options": [
          "Finding the winning nonce requires brute-forcing hundreds to trillions of guesses, but verifying it takes only ONE single hash calculation",
          "Miners can only guess numbers on the left side of the block",
          "Verification requires more electrical power than mining",
          "Larger computers cannot verify small blocks"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Asymmetry is the core strength of PoW: high cost to create, trivial and instantaneous cost to verify."
      },
      {
        "id": "blockchain-proof-of-work-4",
        "question": "What is a 'nonce' in blockchain mining terminology?",
        "options": [
          "'Number used once': an arbitrary scalar counter incremented by miners to alter the block header hash",
          "A digital signature created by a government bank",
          "The total number of transactions in the mempool",
          "The IP address of the network router"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Nonce stands for 'number used once', an incrementing value miners adjust repeatedly until the block hash satisfies the difficulty target."
      },
      {
        "id": "blockchain-proof-of-work-5",
        "question": "In the 3D mining rig, what visual indicator signals that a valid block has been discovered and sealed?",
        "options": [
          "The slot reels match the required leading zeros and turn glowing green, while the cooling fans stop",
          "The reels turn bright red and explode",
          "The tries counter resets to zero and locks",
          "The difficulty decreases to zero"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "In the simulation, hitting a hash that meets the target turns the matching reels and target label green, signaling the block is sealed."
      }
    ],
    "digital-signatures": [
      {
        "id": "blockchain-digital-signatures-1",
        "question": "In public-key cryptography, which key must Alice keep strictly confidential to generate digital signatures?",
        "options": [
          "Her Secret / Private Key",
          "Her Public Key",
          "Bob's Public Key",
          "The network router's MAC address"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The private key is the secret credential used to sign messages and prove ownership. It must never be shared."
      },
      {
        "id": "blockchain-digital-signatures-2",
        "question": "Why is a message passed through a cryptographic hash function before being signed with the private key?",
        "options": [
          "To produce a short, fixed-length fingerprint (m) that is fast and secure to sign",
          "To convert the message into an audio file",
          "To make the message invisible to Bob",
          "To delete the sender's identity"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Signing a compact cryptographic hash digest (m = H(message)) ensures uniform computational performance regardless of message length and prevents mathematical manipulation."
      },
      {
        "id": "blockchain-digital-signatures-3",
        "question": "In the 3D lab, what does Bob use to verify that the message sent by Alice is authentic and unaltered?",
        "options": [
          "Alice's Public Key",
          "Alice's Secret Private Key",
          "A password known only to hackers",
          "Bob's own Private Key"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Anyone on the network can verify a digital signature using the signer's widely published Public Key (v = s^e mod n)."
      },
      {
        "id": "blockchain-digital-signatures-4",
        "question": "In the simulation, what happens when the 'Hacker' button is clicked to alter Alice's payment note in transit?",
        "options": [
          "Bob's verification calculation fails to match the signature, and the verify lamp turns bright red ('FAKE')",
          "The lamp turns green and Bob accepts the altered payment",
          "The envelope flies back to Alice automatically",
          "Alice's secret key is exposed on screen"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Modifying the plaintext alters its hash digest. Decrypting the original signature with the public key yields a mismatch, turning the verify lamp red."
      },
      {
        "id": "blockchain-digital-signatures-5",
        "question": "While the demo uses small RSA keys (n = 3233), what cryptographic algorithm is standardly used for digital signatures in real-world Bitcoin and Ethereum?",
        "options": [
          "ECDSA (Elliptic Curve Digital Signature Algorithm)",
          "DES (Data Encryption Standard)",
          "Caesar Cipher",
          "MD5 checksums"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Modern blockchains utilize elliptic curve cryptography (ECDSA on secp256k1 or Ed25519) for compact, highly secure keypairs and signatures."
      }
    ],
    "transactions-network": [
      {
        "id": "blockchain-transactions-network-1",
        "question": "In the Transactions and Network lab, how is a new payment announced across the six computers in the ring?",
        "options": [
          "Broadcast via peer-to-peer gossip: the payment packet hops from node to node until all six nodes turn gold",
          "Sent to a central mainframe server that pushes it to dumb terminals",
          "Transmitted via a private satellite owned by a single bank",
          "Stored on a USB stick and physically mailed"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Blockchain networks utilize decentralized peer-to-peer gossip protocols where nodes relay transactions to peers without a central server."
      },
      {
        "id": "blockchain-transactions-network-2",
        "question": "In the simulation, what are the starting account balances for the three users?",
        "options": [
          "Alice: 50, Bob: 20, Carol: 0",
          "Alice: 100, Bob: 100, Carol: 100",
          "Alice: 0, Bob: 0, Carol: 0",
          "Alice: 10, Bob: 50, Carol: 20"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The lab explicitly initializes the ledger balances to Alice: 50, Bob: 20, and Carol: 0."
      },
      {
        "id": "blockchain-transactions-network-3",
        "question": "What occurs when a sender attempts to execute a 'double spend' (e.g. Alice pays Bob 40 and Carol 40 when she only has 50)?",
        "options": [
          "Nodes approve the first valid transaction and reject the conflicting duplicate (turning nodes red/orange)",
          "Both transactions are approved and Alice's balance goes negative",
          "The network awards Alice 30 free coins to cover the difference",
          "All six computers immediately shut down"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Network nodes independently track state; once a transaction spends available funds, any subsequent transaction attempting to spend the same coins is rejected."
      },
      {
        "id": "blockchain-transactions-network-4",
        "question": "What is the 'Waiting Room' (Mempool) in a blockchain network?",
        "options": [
          "An in-memory pool where valid, unconfirmed transactions wait before being bundled into a new block",
          "A chat room where miners talk to each other",
          "A database of banned IP addresses",
          "A cold storage vault for retired nodes"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The mempool (memory pool) holds valid broadcast transactions that are waiting for a miner or validator to assemble them into a block."
      },
      {
        "id": "blockchain-transactions-network-5",
        "question": "When do account balances actually update on the ledger board in the 3D lab?",
        "options": [
          "Only after approved payments are packaged into a valid block and committed to the ledger",
          "The instant the user clicks their keyboard before broadcasting",
          "Whenever a transaction is rejected",
          "Once every 24 hours at midnight"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "Transactions do not mutate the official ledger state until they are successfully validated, approved, and sealed into a block."
      }
    ],
    "merkle-trees": [
      {
        "id": "blockchain-merkle-trees-1",
        "question": "What is a Merkle Tree in blockchain technology?",
        "options": [
          "A hierarchical binary tree where leaf transactions are hashed pairwise until a single Merkle Root is produced",
          "A botanical database tracking environmental carbon credits",
          "A linked list where nodes only have one child",
          "A centralized relational database index owned by Oracle"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "A Merkle tree aggregates transactions into paired hashes layer-by-layer up to a single cryptographic root."
      },
      {
        "id": "blockchain-merkle-trees-2",
        "question": "Where is the Merkle Root stored in a blockchain?",
        "options": [
          "In the block header, acting as a compact 32-byte cryptographic summary of all transactions in the block",
          "In every user's private crypto wallet",
          "On an external web server hosted by Google",
          "It is discarded once the block is mined"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The Merkle root is committed directly into the block header, allowing anyone to verify block transactions without altering header size."
      },
      {
        "id": "blockchain-merkle-trees-3",
        "question": "In the 3D lab, to prove that Transaction 2 (T2) is included in the block, what hashes does a verifier need?",
        "options": [
          "Only the orange sibling hashes along the path (H1 and P1) to reconstruct the Root",
          "All other transactions in the entire blockchain",
          "The private keys of all four transacting parties",
          "Zero hashes; inclusion cannot be proven"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "A Merkle audit proof (SPV) requires only the sibling hashes along the branch (the orange boxes) to recompute the root with O(log N) complexity."
      },
      {
        "id": "blockchain-merkle-trees-4",
        "question": "What happens in the 3D scene when the 'Tamper' button is clicked to modify Transaction 2?",
        "options": [
          "T2's leaf hash, its parent hash, and the Merkle Root all turn red because the recalculated root no longer matches",
          "Only T1 turns red while T2 stays green",
          "The Merkle tree automatically deletes T2 without notice",
          "The tree rebalances itself to hide the edit"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Modifying any leaf node cascades up through its parent hashes to the Merkle Root, causing an immediate mismatch against the sealed block header."
      },
      {
        "id": "blockchain-merkle-trees-5",
        "question": "Why are Merkle trees critical for mobile cryptocurrency wallets (Simplified Payment Verification - SPV)?",
        "options": [
          "They allow phones to verify payments with a tiny audit proof without downloading hundreds of gigabytes of ledger history",
          "They make smartphones charge faster",
          "They eliminate the need for an internet connection",
          "They bypass digital signature checks"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "SPV clients download only the 80-byte block headers and request small Merkle branches to verify specific payments with minimal bandwidth."
      }
    ],
    "consensus-proof-of-stake": [
      {
        "id": "blockchain-consensus-proof-of-stake-1",
        "question": "How are block proposers selected in a Proof of Stake (PoS) consensus network?",
        "options": [
          "Through a pseudo-random lottery where each validator's probability of being chosen is proportional to their bonded coin stake",
          "By measuring which computer burns the most electricity",
          "By alphabetical order of validator names",
          "By appointment from a central foundation"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "In PoS, validators lock up capital; the lottery wheel gives proportionally larger slices to validators holding more bonded coins."
      },
      {
        "id": "blockchain-consensus-proof-of-stake-2",
        "question": "In the 3D lab, what does the height of each validator pillar (Asha, Ravi, Meera, Dan) represent?",
        "options": [
          "The number of coins each validator has locked up as a stake deposit",
          "The physical height of their computer desk",
          "The network ping latency in milliseconds",
          "The number of years they have used the internet"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Taller pillars visually represent larger financial stakes deposited as security collateral."
      },
      {
        "id": "blockchain-consensus-proof-of-stake-3",
        "question": "What consensus voting threshold is marked by the white line on the vote bar in the simulation?",
        "options": [
          "A two-thirds (2/3) supermajority of total staked coins",
          "A simple 51% majority",
          "A 100% unanimous vote",
          "A 10% minimum quorum"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Byzantine Fault Tolerant (BFT) PoS consensus protocols require a two-thirds (2/3 or 66.7%) supermajority of staked weight to finalize a block."
      },
      {
        "id": "blockchain-consensus-proof-of-stake-4",
        "question": "What happens to a validator in Proof of Stake if they attempt to cheat or propose conflicting blocks?",
        "options": [
          "Slashing: the network penalizes the validator by confiscating and burning part or all of their staked deposit",
          "The network sends them extra coins as a reward",
          "Their computer hardware is physically confiscated by the police",
          "Nothing; cheating has no penalty in PoS"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Slashing enforces economic security by imposing severe financial loss on any validator that violates protocol rules."
      },
      {
        "id": "blockchain-consensus-proof-of-stake-5",
        "question": "What is a major advantage of Proof of Stake over Proof of Work mining?",
        "options": [
          "Drastically reduced electrical energy consumption (cutting energy use by over 99.9%)",
          "Complete elimination of digital signatures",
          "Transactions no longer need to be stored in blocks",
          "Anyone can spend coins without owning a private key"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "By substituting capital stake for computational hash puzzles, PoS achieves consensus with a fraction of PoW's energy footprint."
      }
    ],
    "smart-contracts": [
      {
        "id": "blockchain-smart-contracts-1",
        "question": "What is a Smart Contract in blockchain systems?",
        "options": [
          "A self-executing program deployed on a blockchain that autonomously enforces rules and moves funds when conditions are met",
          "A legal PDF document signed with a digital stylus",
          "A smartphone warranty contract provided by an electronics store",
          "An artificial intelligence chatbot that negotiates prices"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Smart contracts are immutable programs running on the blockchain that execute deterministic logic without human intermediaries."
      },
      {
        "id": "blockchain-smart-contracts-2",
        "question": "What real-world machine did computer scientist Nick Szabo compare smart contracts to?",
        "options": [
          "A vending machine: insert the right coins, and the mechanical logic automatically dispenses the item with no clerk",
          "An automobile engine",
          "A printing press",
          "An automated telephone switchboard"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Szabo used the vending machine analogy to explain how deterministic rules execute transactions without human discretion."
      },
      {
        "id": "blockchain-smart-contracts-3",
        "question": "In the 3D crowdfunding lab, what happens when Dan attempts to pledge 0 coins?",
        "options": [
          "The pledge fails the 'require amt > 0' condition, flashes red ('REJECTED'), and total funds stay unchanged",
          "The contract crashes and deletes all user accounts",
          "The contract gives Dan 50 coins for free",
          "Dan's pledge is accepted and counts toward the goal"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The smart contract code explicitly enforces require amt > 0; invalid inputs are reverted with zero state change."
      },
      {
        "id": "blockchain-smart-contracts-4",
        "question": "In the simulation, what happens when the deadline arrives and total pledges have met or exceeded the funding goal?",
        "options": [
          "The vault door automatically opens, and funds are paid out to the owner without needing a bank",
          "The funds are permanently locked forever",
          "The contract demands a signed paper contract from a judge",
          "All contributors are refunded regardless of the goal"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "If total >= goal, the smart contract autonomously triggers the payout branch, unlocking the vault door and transferring funds to the project owner."
      },
      {
        "id": "blockchain-smart-contracts-5",
        "question": "What happens if the crowdfunding deadline arrives and total pledges are BELOW the required goal?",
        "options": [
          "The contract automatically executes refund logic, returning each contributor's pledged coins",
          "The owner takes whatever money was raised anyway",
          "The network burns all the money",
          "The contract extends the deadline indefinitely"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "In conditional escrow contracts, failure to meet the goal triggers autonomous refunds to all pledgers, protecting backers without intermediary escrow fees."
      }
    ],
    "merkle-tree": [
      {
        "id": "blockchain-merkle-trees-1",
        "question": "What is a Merkle Tree in blockchain technology?",
        "options": [
          "A hierarchical binary tree where leaf transactions are hashed pairwise until a single Merkle Root is produced",
          "A botanical database tracking environmental carbon credits",
          "A linked list where nodes only have one child",
          "A centralized relational database index owned by Oracle"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "A Merkle tree aggregates transactions into paired hashes layer-by-layer up to a single cryptographic root."
      },
      {
        "id": "blockchain-merkle-trees-2",
        "question": "Where is the Merkle Root stored in a blockchain?",
        "options": [
          "In the block header, acting as a compact 32-byte cryptographic summary of all transactions in the block",
          "In every user's private crypto wallet",
          "On an external web server hosted by Google",
          "It is discarded once the block is mined"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "The Merkle root is committed directly into the block header, allowing anyone to verify block transactions without altering header size."
      },
      {
        "id": "blockchain-merkle-trees-3",
        "question": "In the 3D lab, to prove that Transaction 2 (T2) is included in the block, what hashes does a verifier need?",
        "options": [
          "Only the orange sibling hashes along the path (H1 and P1) to reconstruct the Root",
          "All other transactions in the entire blockchain",
          "The private keys of all four transacting parties",
          "Zero hashes; inclusion cannot be proven"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "A Merkle audit proof (SPV) requires only the sibling hashes along the branch (the orange boxes) to recompute the root with O(log N) complexity."
      },
      {
        "id": "blockchain-merkle-trees-4",
        "question": "What happens in the 3D scene when the 'Tamper' button is clicked to modify Transaction 2?",
        "options": [
          "T2's leaf hash, its parent hash, and the Merkle Root all turn red because the recalculated root no longer matches",
          "Only T1 turns red while T2 stays green",
          "The Merkle tree automatically deletes T2 without notice",
          "The tree rebalances itself to hide the edit"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Modifying any leaf node cascades up through its parent hashes to the Merkle Root, causing an immediate mismatch against the sealed block header."
      },
      {
        "id": "blockchain-merkle-trees-5",
        "question": "Why are Merkle trees critical for mobile cryptocurrency wallets (Simplified Payment Verification - SPV)?",
        "options": [
          "They allow phones to verify payments with a tiny audit proof without downloading hundreds of gigabytes of ledger history",
          "They make smartphones charge faster",
          "They eliminate the need for an internet connection",
          "They bypass digital signature checks"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "SPV clients download only the 80-byte block headers and request small Merkle branches to verify specific payments with minimal bandwidth."
      }
    ],
    "proof-of-stake": [
      {
        "id": "blockchain-consensus-proof-of-stake-1",
        "question": "How are block proposers selected in a Proof of Stake (PoS) consensus network?",
        "options": [
          "Through a pseudo-random lottery where each validator's probability of being chosen is proportional to their bonded coin stake",
          "By measuring which computer burns the most electricity",
          "By alphabetical order of validator names",
          "By appointment from a central foundation"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "In PoS, validators lock up capital; the lottery wheel gives proportionally larger slices to validators holding more bonded coins."
      },
      {
        "id": "blockchain-consensus-proof-of-stake-2",
        "question": "In the 3D lab, what does the height of each validator pillar (Asha, Ravi, Meera, Dan) represent?",
        "options": [
          "The number of coins each validator has locked up as a stake deposit",
          "The physical height of their computer desk",
          "The network ping latency in milliseconds",
          "The number of years they have used the internet"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Taller pillars visually represent larger financial stakes deposited as security collateral."
      },
      {
        "id": "blockchain-consensus-proof-of-stake-3",
        "question": "What consensus voting threshold is marked by the white line on the vote bar in the simulation?",
        "options": [
          "A two-thirds (2/3) supermajority of total staked coins",
          "A simple 51% majority",
          "A 100% unanimous vote",
          "A 10% minimum quorum"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Byzantine Fault Tolerant (BFT) PoS consensus protocols require a two-thirds (2/3 or 66.7%) supermajority of staked weight to finalize a block."
      },
      {
        "id": "blockchain-consensus-proof-of-stake-4",
        "question": "What happens to a validator in Proof of Stake if they attempt to cheat or propose conflicting blocks?",
        "options": [
          "Slashing: the network penalizes the validator by confiscating and burning part or all of their staked deposit",
          "The network sends them extra coins as a reward",
          "Their computer hardware is physically confiscated by the police",
          "Nothing; cheating has no penalty in PoS"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "Slashing enforces economic security by imposing severe financial loss on any validator that violates protocol rules."
      },
      {
        "id": "blockchain-consensus-proof-of-stake-5",
        "question": "What is a major advantage of Proof of Stake over Proof of Work mining?",
        "options": [
          "Drastically reduced electrical energy consumption (cutting energy use by over 99.9%)",
          "Complete elimination of digital signatures",
          "Transactions no longer need to be stored in blocks",
          "Anyone can spend coins without owning a private key"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "By substituting capital stake for computational hash puzzles, PoS achieves consensus with a fraction of PoW's energy footprint."
      }
    ],
    "smart-contract": [
      {
        "id": "blockchain-smart-contracts-1",
        "question": "What is a Smart Contract in blockchain systems?",
        "options": [
          "A self-executing program deployed on a blockchain that autonomously enforces rules and moves funds when conditions are met",
          "A legal PDF document signed with a digital stylus",
          "A smartphone warranty contract provided by an electronics store",
          "An artificial intelligence chatbot that negotiates prices"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Smart contracts are immutable programs running on the blockchain that execute deterministic logic without human intermediaries."
      },
      {
        "id": "blockchain-smart-contracts-2",
        "question": "What real-world machine did computer scientist Nick Szabo compare smart contracts to?",
        "options": [
          "A vending machine: insert the right coins, and the mechanical logic automatically dispenses the item with no clerk",
          "An automobile engine",
          "A printing press",
          "An automated telephone switchboard"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "easy",
        "explanation": "Szabo used the vending machine analogy to explain how deterministic rules execute transactions without human discretion."
      },
      {
        "id": "blockchain-smart-contracts-3",
        "question": "In the 3D crowdfunding lab, what happens when Dan attempts to pledge 0 coins?",
        "options": [
          "The pledge fails the 'require amt > 0' condition, flashes red ('REJECTED'), and total funds stay unchanged",
          "The contract crashes and deletes all user accounts",
          "The contract gives Dan 50 coins for free",
          "Dan's pledge is accepted and counts toward the goal"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "The smart contract code explicitly enforces require amt > 0; invalid inputs are reverted with zero state change."
      },
      {
        "id": "blockchain-smart-contracts-4",
        "question": "In the simulation, what happens when the deadline arrives and total pledges have met or exceeded the funding goal?",
        "options": [
          "The vault door automatically opens, and funds are paid out to the owner without needing a bank",
          "The funds are permanently locked forever",
          "The contract demands a signed paper contract from a judge",
          "All contributors are refunded regardless of the goal"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "medium",
        "explanation": "If total >= goal, the smart contract autonomously triggers the payout branch, unlocking the vault door and transferring funds to the project owner."
      },
      {
        "id": "blockchain-smart-contracts-5",
        "question": "What happens if the crowdfunding deadline arrives and total pledges are BELOW the required goal?",
        "options": [
          "The contract automatically executes refund logic, returning each contributor's pledged coins",
          "The owner takes whatever money was raised anyway",
          "The network burns all the money",
          "The contract extends the deadline indefinitely"
        ],
        "correctAnswer": 0,
        "answerIdx": 0,
        "difficulty": "hard",
        "explanation": "In conditional escrow contracts, failure to meet the goal triggers autonomous refunds to all pledgers, protecting backers without intermediary escrow fees."
      }
    ]
  }
};
