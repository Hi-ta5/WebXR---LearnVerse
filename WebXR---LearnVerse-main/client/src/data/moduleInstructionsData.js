// Plain-Language Guidance and Child-Friendly Overviews for 3D XR Modules
export const MODULE_INSTRUCTIONS = {
  "computer-networks": {
    "osi-model": {
      "title": "OSI 7 Layers",
      "emoji": "💌",
      "simpleExplanation": "Computers send messages by wrapping them in layers, just like putting a letter inside several protective envelopes before mailing it!",
      "howItWorks": "Watch Alice's message go down 7 layers, across the cable as bits, and back up 7 layers at Bob's PC. Click any layer box to inspect its job, device, and data unit.",
      "funFact": "Every single photo or text you send on your phone goes through all 7 layers in less than a second!"
    },
    "physical-layer": {
      "title": "Physical Line Encoding",
      "emoji": "⚡",
      "simpleExplanation": "Computer 1s and 0s turn into electrical signals, light pulses, or radio waves—just like translating words into Morse code!",
      "howItWorks": "Click 'New bits' to load an 8-bit stream, inspect NRZ-L, NRZ-I, Manchester, AMI, ASK, FSK, and PSK waveforms, and hit 'Send' to sweep the signal across the cable.",
      "funFact": "Undersea fiber-optic cables carry internet signals across entire oceans as pulses of light!"
    },
    "network-topologies": {
      "title": "Network Topologies",
      "emoji": "🕸️",
      "simpleExplanation": "Discover how computers connect in shapes like Bus, Star, Ring, and Mesh layouts—just like road networks for a busy city!",
      "howItWorks": "Use 'Topology' to switch between layouts. Click any cable or PC to break or repair it, then click 'Send' to watch packets navigate or reroute.",
      "funFact": "In a Full Mesh network with 6 computers, you need 15 separate cables so every computer can talk directly in 1 hop!"
    },
    "tcp-udp": {
      "title": "TCP vs UDP Protocols",
      "emoji": "📦",
      "simpleExplanation": "Learn the difference between registered mail that checks every box (TCP) and a quick postcard dropped in the mail (UDP)!",
      "howItWorks": "Compare TCP's 3-way handshake and retransmissions in the top lane against UDP's fast datagram lane below. Click 'Replay' to re-run packet flows.",
      "funFact": "Online games and live video calls use UDP so fast action never gets delayed by waiting for retransmissions!"
    },
    "routing": {
      "title": "Routing Algorithms",
      "emoji": "🧭",
      "simpleExplanation": "Help smart digital routers find the fastest, lowest-cost road across a network map using Dijkstra's shortest path algorithm.",
      "howItWorks": "Watch Dijkstra explore the map from Router A to F. Click any link to cut or repair it, hit 'Send packet' to travel the route, or test 'New costs'.",
      "funFact": "GPS navigation apps on your smartphone use the exact same Dijkstra algorithm to find the quickest route home!"
    },
    "congestion-control": {
      "title": "Congestion Control",
      "emoji": "🚦",
      "simpleExplanation": "See how the internet manages heavy traffic jams when too many packets arrive at once, preventing network collapse.",
      "howItWorks": "Watch router queues overflow, test Leaky Bucket smoothing and Token Bucket bursts, see red Choke packets, and watch TCP AIMD sawtooth recovery.",
      "funFact": "TCP's AIMD algorithm gently probes for speed (+1) and quickly cuts in half when packets drop, keeping the entire internet fair and flowing!"
    }
  },
  "operating-systems": {
    "user-kernel-mode": {
      "title": "User Mode & Kernel Vault",
      "emoji": "🛡️",
      "simpleExplanation": "Learn why apps aren't allowed to touch computer hardware directly, and how system calls let apps politely ask the kernel for help!",
      "howItWorks": "Click 'Try cheat' to watch direct disk access get blocked, then click 'Next step' to watch the system call gate open as the CPU switches to kernel mode.",
      "funFact": "User Mode vs Kernel Mode is just a single bit in the CPU hardware: bit 1 means regular user app, bit 0 means almighty kernel!"
    },
    "process-states": {
      "title": "Process States & Turns",
      "emoji": "🏃‍♂️",
      "simpleExplanation": "Follow an app from the moment it is born to when it finishes, taking turns on the CPU just like customers at a bank!",
      "howItWorks": "Click Next step to watch process P1 get admitted to Ready, dispatched to Running, timeout on timer ticks, or wait for I/O.",
      "funFact": "When you're waiting for a webpage to load, the browser process moves to 'Waiting' so your music player can keep singing smoothly!"
    },
    "process-management": {
      "title": "Process States & Turns",
      "emoji": "🏃‍♂️",
      "simpleExplanation": "Follow an app from the moment it is born to when it finishes, taking turns on the CPU just like customers at a bank!",
      "howItWorks": "Click Next step to watch process P1 get admitted to Ready, dispatched to Running, timeout on timer ticks, or wait for I/O.",
      "funFact": "When you're waiting for a webpage to load, the browser process moves to 'Waiting' so your music player can keep singing smoothly!"
    },
    "cpu-scheduling": {
      "title": "CPU Schedulers & Gantt Charts",
      "emoji": "⏱️",
      "simpleExplanation": "Watch the computer's brain decide which program gets to run next using FCFS, SJF, and Round Robin queue rules!",
      "howItWorks": "Click Next step to step through arrival and burst times, or click 'Switch alg' to compare average waiting times in real-time.",
      "funFact": "Shortest Job First gives the lowest average waiting time, but Round Robin is the fairest because everyone gets an equal time slice!"
    },
    "critical-section-mutex": {
      "title": "Critical Section & Mutex Key",
      "emoji": "🔐",
      "simpleExplanation": "See what happens when two threads update the same counter at once, and how a mutex lock stops data corruption!",
      "howItWorks": "Run both threads without a lock to see a lost update race condition, then toggle 'Lock ON' to see them take orderly turns.",
      "funFact": "Without locks, two bank transactions occurring at the exact same microsecond could accidentally double-spend money!"
    },
    "threads": {
      "title": "Critical Section & Mutex Key",
      "emoji": "🔐",
      "simpleExplanation": "See what happens when two threads update the same counter at once, and how a mutex lock stops data corruption!",
      "howItWorks": "Run both threads without a lock to see a lost update race condition, then toggle 'Lock ON' to see them take orderly turns.",
      "funFact": "Without locks, two bank transactions occurring at the exact same microsecond could accidentally double-spend money!"
    },
    "deadlocks": {
      "title": "Deadlocks & Resource Traffic",
      "emoji": "🛑",
      "simpleExplanation": "Learn what happens when two programs get stuck waiting for each other forever, and how computers break the circular traffic jam!",
      "howItWorks": "Watch processes hold resources while asking for more. When a circular wait cycle forms, the system turns red to alert you.",
      "funFact": "A deadlock is like two polite people standing in a doorway each saying: 'No, after you!' until the end of time!"
    },
    "paging-address-translation": {
      "title": "Paging & Address Translation",
      "emoji": "🗺️",
      "simpleExplanation": "Explore how the operating system chops programs into pages and memory into frames so code can live anywhere in RAM!",
      "howItWorks": "Click Next step or Next address to watch the MMU take a logical address, look up the page table, and map directly to physical RAM.",
      "funFact": "Paging completely eliminates external fragmentation because pages don't need to sit next to each other in physical RAM chips!"
    },
    "memory-management": {
      "title": "Paging & Address Translation",
      "emoji": "🗺️",
      "simpleExplanation": "Explore how the operating system chops programs into pages and memory into frames so code can live anywhere in RAM!",
      "howItWorks": "Click Next step or Next address to watch the MMU take a logical address, look up the page table, and map directly to physical RAM.",
      "funFact": "Paging completely eliminates external fragmentation because pages don't need to sit next to each other in physical RAM chips!"
    },
    "page-replacement": {
      "title": "Page Replacement & Virtual Memory",
      "emoji": "📚",
      "simpleExplanation": "Learn how computers run huge games and apps on limited RAM by swapping pages in and out of storage using FIFO and LRU!",
      "howItWorks": "Watch 12 page requests stream across 3 memory frames. See page hits in green and page fault evictions in red.",
      "funFact": "Least Recently Used (LRU) works so well because programs exhibit 'locality of reference'—they love reusing things they used recently!"
    },
    "disk-scheduling": {
      "title": "Disk Scheduling & Elevator Arms",
      "emoji": "💽",
      "simpleExplanation": "Watch the mechanical disk head sweep across spinning magnetic platters to fetch files with the least possible movement!",
      "howItWorks": "Click Next step or Run all to compare FCFS, Shortest Seek Time First (SSTF), and SCAN (Elevator algorithm) across 8 track requests.",
      "funFact": "SCAN is nicknamed the 'Elevator Algorithm' because it sweeps smoothly up to the top floor and back, never zigzagging wildly!"
    }
  },
  "data-structures": {
    "arrays": {
      "title": "Arrays & Memory Boxes",
      "emoji": "🔢",
      "simpleExplanation": "Think of an egg carton with numbered slots! Learn how computers store and instantly find items using numbers.",
      "howItWorks": "Click on any index number to store, read, or replace an item stored in contiguous memory boxes.",
      "funFact": "Computer scientists start counting array slots at 0 instead of 1!"
    },
    "stacks": {
      "title": "Stack (LIFO)",
      "emoji": "🥞",
      "simpleExplanation": "Like a stack of pancakes or cafeteria plates! The last plate you put on top is always the first one you eat (Last-In, First-Out).",
      "howItWorks": "Click Push to drop a new plate onto the stack, and click Pop to take the top plate away.",
      "funFact": "The \"Undo\" button in your favorite drawing app uses a stack to remember your previous steps!"
    },
    "queues": {
      "title": "Queue (FIFO)",
      "emoji": "🍦",
      "simpleExplanation": "Just like waiting in line for delicious ice cream! The first kid to arrive is the first kid served (First-In, First-Out).",
      "howItWorks": "Click Enqueue to join the back of the line, and Dequeue to let the first person at the front step forward.",
      "funFact": "When you click Print on your computer, documents wait politely in a queue for the printer!"
    },
    "linked-lists": {
      "title": "Linked Lists",
      "emoji": "🗺️",
      "simpleExplanation": "A fun treasure hunt where each box contains an item and a magic pointer arrow pointing to the very next box!",
      "howItWorks": "Follow the glowing arrows connecting nodes. Add or remove nodes to see how easy it is to grow the chain.",
      "funFact": "Music playlists work just like linked lists, where each song points to the next track!"
    },
    "trees": {
      "title": "Binary Search Trees",
      "emoji": "🌳",
      "simpleExplanation": "An upside-down tree with branches! Smaller numbers branch to the left, and bigger numbers branch to the right.",
      "howItWorks": "Search for a number and watch the glowing spotlight climb down the branches in just a few quick steps.",
      "funFact": "Tree structures help computers search through billions of web pages in milliseconds!"
    }
  },
  "nlp": {
    "nlp-intro": {
      "title": "Introduction to NLP & Pipeline",
      "emoji": "🚀",
      "simpleExplanation": "Watch a sentence journey through 5 processing stations, turning raw human words into structured machine predictions!",
      "howItWorks": "Follow \"Book me a flight to Mumbai tomorrow!\" as it is split into words, cleaned of stop words, mapped to numeric IDs, and classified as BOOK_FLIGHT.",
      "funFact": "Voice assistants like Alexa and Siri process millions of speech queries every second using pipelines just like this!"
    },
    "tokenization": {
      "title": "Tokenization Techniques",
      "emoji": "🧩",
      "simpleExplanation": "See how computers slice long paragraphs into sentences, words, and subwords like \"un\", \"##believ\", and \"##able\"!",
      "howItWorks": "Step through sentence splitting, word tokenization, and subword WordPiece decomposition to assign integer vocabulary IDs to each piece.",
      "funFact": "Subword tokenization is what enables modern AI models to understand rare and newly invented words without crashing!"
    },
    "text-preprocessing": {
      "title": "Text Preprocessing & Cleaning",
      "emoji": "🧼",
      "simpleExplanation": "Tidy up messy words by converting to lowercase, removing red stop words, and testing Stemming versus Lemmatization!",
      "howItWorks": "Observe \"The children were running and playing in the gardens, buying flights!!\" shrink into clean base roots like \"child\", \"run\", and \"play\".",
      "funFact": "Lemmatization uses a dictionary so \"better\" correctly becomes \"good\" and \"mice\" becomes \"mouse\"!"
    },
    "pos-tagging": {
      "title": "Part-of-Speech (POS) Tagging",
      "emoji": "🏷️",
      "simpleExplanation": "Label every word with its grammatical job: nouns, verbs, adjectives, proper nouns, and adverbs!",
      "howItWorks": "Test dictionary lookup and suffix rules on \"The quick fox quickly jumped over Mumbai bridges.\" to tag \"-ly\" as ADV and \"-ed\" as VERB.",
      "funFact": "Words like \"book\" can be a noun (\"read a book\") or a verb (\"book a flight\") depending on the context!"
    },
    "ner": {
      "title": "Named Entity Recognition (NER)",
      "emoji": "🔍",
      "simpleExplanation": "Hunt for real-world entities in text and color-code people, companies, cities, dates, and money!",
      "howItWorks": "Scan \"Sundar Pichai met Google teams in Mumbai on 12 March 2026.\" with gazetteers and regex to extract PERSON, ORG, LOCATION, and DATE.",
      "funFact": "Financial bots use NER to automatically detect company names and stock prices in breaking news in milliseconds!"
    },
    "bag-of-words": {
      "title": "Bag of Words (BoW) Model",
      "emoji": "🎒",
      "simpleExplanation": "Throw words into a digital bag, count their frequencies, and compare documents using Cosine Similarity!",
      "howItWorks": "Step through Documents, Vocabulary, Count words, Matrix, and Compare docs on \"I love NLP | I love machine learning | NLP loves data\". Stop words are removed first, and \"love\" vs \"loves\" count as distinct words.",
      "funFact": "Bag of Words completely ignores word order—so \"dog bites man\" and \"man bites dog\" get the exact same vector!"
    },
    "tf-idf": {
      "title": "TF-IDF Weighting & Vector Space",
      "emoji": "⚖️",
      "simpleExplanation": "Discover why frequent filler words get penalized to zero while rare topic keywords earn high scores!",
      "howItWorks": "Calculate Term Frequency (TF) and Inverse Document Frequency (IDF) on 3 documents to watch ubiquitous words like \"data\" drop to weight 0.00 while \"science\" wins for D1!",
      "funFact": "Every web search engine from the 1990s onward used TF-IDF algorithms to rank the most relevant web pages for your search!"
    },
    "word-embeddings": {
      "title": "Word Embeddings & Semantic Vectors",
      "emoji": "🌌",
      "simpleExplanation": "Explore a 4-D semantic space where words become continuous numbers and you can solve \"king - man + woman = queen\"!",
      "howItWorks": "Look up 4-D vectors along [royalty, male, animal, food], subtract \"man\" from \"king\", add \"woman\", and watch the nearest neighbor vector become \"queen\"! Also test \"cat\" closest to \"dog\".",
      "funFact": "In modern 768-dimensional embedding models, entire relationships like countries and capitals naturally form parallel geometric lines!"
    },
    "sentiment-analysis": {
      "title": "Sentiment Analysis & Classification",
      "emoji": "🎭",
      "simpleExplanation": "Score reviews with an emotional valence meter and see how the word \"not\" flips positive words to negative!",
      "howItWorks": "Watch \"The movie was not good, it was boring and slow.\" flip \"good\" (+2) to -2, sum up to -5, and label the review as NEGATIVE. Test positive and neutral samples too!",
      "funFact": "Negation words like \"not\" must never be removed as stop words in sentiment analysis, or negative reviews would look positive!"
    }
  },
  "dbms": {
    "data-abstraction-independence": {
      "title": "Data Abstraction & Independence",
      "emoji": "🏛️",
      "simpleExplanation": "Explore 3 distinct levels of abstraction: View Level (external), Logical Level (conceptual), and Physical Level (internal)!",
      "howItWorks": "Click the colored boxes to inspect each layer. Click \"Change physical\" and \"Change logical\" buttons to see how data independence protects applications from lower-level changes.",
      "funFact": "Data independence ensures that upgrading your disk drives will never break your website code!"
    },
    "dbms-intro": {
      "title": "Data Abstraction & Independence",
      "emoji": "🏛️",
      "simpleExplanation": "Explore 3 distinct levels of abstraction: View Level (external), Logical Level (conceptual), and Physical Level (internal)!",
      "howItWorks": "Click the colored boxes to inspect each layer. Click \"Change physical\" and \"Change logical\" buttons to see how data independence protects applications from lower-level changes.",
      "funFact": "Data independence ensures that upgrading your disk drives will never break your website code!"
    },
    "intro": {
      "title": "Data Abstraction & Independence",
      "emoji": "🏛️",
      "simpleExplanation": "Explore 3 distinct levels of abstraction: View Level (external), Logical Level (conceptual), and Physical Level (internal)!",
      "howItWorks": "Click the colored boxes to inspect each layer. Click \"Change physical\" and \"Change logical\" buttons to see how data independence protects applications from lower-level changes.",
      "funFact": "Data independence ensures that upgrading your disk drives will never break your website code!"
    },
    "ddl-dml": {
      "title": "DDL & DML Commands",
      "emoji": "💻",
      "simpleExplanation": "Learn how DDL commands define structure and DML commands manipulate the live data inside!",
      "howItWorks": "Click CREATE to make a table, ALTER to add columns, and DROP to remove it. Click INSERT, UPDATE, and DELETE to watch real-time row mutations on the 3D data board.",
      "funFact": "DDL changes affect the data dictionary schema, while DML changes modify individual tuples!"
    },
    "sql-lab": {
      "title": "DDL & DML Commands",
      "emoji": "💻",
      "simpleExplanation": "Learn how DDL commands define structure and DML commands manipulate the live data inside!",
      "howItWorks": "Click CREATE to make a table, ALTER to add columns, and DROP to remove it. Click INSERT, UPDATE, and DELETE to watch real-time row mutations on the 3D data board.",
      "funFact": "DDL changes affect the data dictionary schema, while DML changes modify individual tuples!"
    },
    "er-model": {
      "title": "Entity-Relationship Model",
      "emoji": "📐",
      "simpleExplanation": "Draw blueprints that connect real-world entities, attributes, and relationships together!",
      "howItWorks": "Click Student and Course entities, the Enrolls diamond (M:N cardinality), and key/simple/multivalued attributes. Click \"ER to tables\" to see relational table conversion.",
      "funFact": "Before building any real-world app, software engineers always design ER diagrams first!"
    },
    "data-models": {
      "title": "Network, Relational & Object Models",
      "emoji": "🕸️",
      "simpleExplanation": "Compare graph pointer models, tabular relational schemas, and object-oriented class hierarchies side-by-side!",
      "howItWorks": "Click Network to inspect CODASYL graphs with multiple parents. Click Relational to see linked tables, and Object-Oriented for class inheritance.",
      "funFact": "The relational model won mainstream popularity because key values replaced complex pointer navigation!"
    },
    "relational-model": {
      "title": "Network, Relational & Object Models",
      "emoji": "🕸️",
      "simpleExplanation": "Compare graph pointer models, tabular relational schemas, and object-oriented class hierarchies side-by-side!",
      "howItWorks": "Click Network to inspect CODASYL graphs with multiple parents. Click Relational to see linked tables, and Object-Oriented for class inheritance.",
      "funFact": "The relational model won mainstream popularity because key values replaced complex pointer navigation!"
    },
    "integrity-constraints": {
      "title": "Integrity Constraints",
      "emoji": "🛡️",
      "simpleExplanation": "Guard rails for your database! Prevent corrupt, missing, or contradictory rows from entering tables.",
      "howItWorks": "Click Entity, Key, Referential, or Domain to test illegal inserts (lamp glows RED). Click Valid row to insert an accepted record (lamp glows GREEN)!",
      "funFact": "Foreign keys guarantee referential integrity so orders can never point to non-existent customers!"
    },
    "sql-joins": {
      "title": "SQL Table Joins",
      "emoji": "🔗",
      "simpleExplanation": "Snap together matching puzzle pieces from two different tables to see the whole story at once!",
      "howItWorks": "Compare Inner Join, Left Join, and Full Join to see which rows stay and which rows disappear.",
      "funFact": "Joins allow you to keep customer names in one table and their orders in another without repeating yourself!"
    },
    "relational-algebra-calculus": {
      "title": "Relational Algebra & Calculus",
      "emoji": "📐",
      "simpleExplanation": "Mathematical superpowers for databases! Pick rows with Select (σ), pick columns with Project (π), and blend tables together with Join (⋈)!",
      "howItWorks": "Click the operator buttons to see live results: filter students with Selection, slice columns with Projection, and combine tables with Join.",
      "funFact": "Relational Algebra tells the computer HOW to calculate the answer, while Relational Calculus states WHAT you want to find!"
    },
    "relational-algebra": {
      "title": "Relational Algebra & Calculus",
      "emoji": "📐",
      "simpleExplanation": "Mathematical superpowers for databases! Pick rows with Select (σ), pick columns with Project (π), and blend tables together with Join (⋈)!",
      "howItWorks": "Click the operator buttons to see live results: filter students with Selection, slice columns with Projection, and combine tables with Join.",
      "funFact": "Relational Algebra tells the computer HOW to calculate the answer, while Relational Calculus states WHAT you want to find!"
    },
    "normalization": {
      "title": "Dependencies & Normal Forms",
      "emoji": "🧹",
      "simpleExplanation": "Eliminate messy data clutter! Split repeating tables into neat 1NF, 2NF, 3NF, and BCNF boxes so facts are stored in exactly one place.",
      "howItWorks": "Cycle through UNF, 1NF, 2NF, and 3NF to see how Armstrong’s Axioms and lossless joins preserve every piece of information without spurious rows.",
      "funFact": "A database in 3NF or BCNF is immune to painful update anomalies and accidental data deletions!"
    },
    "normalization-dependencies": {
      "title": "Dependencies & Normal Forms",
      "emoji": "🧹",
      "simpleExplanation": "Eliminate messy data clutter! Split repeating tables into neat 1NF, 2NF, 3NF, and BCNF boxes so facts are stored in exactly one place.",
      "howItWorks": "Cycle through UNF, 1NF, 2NF, and 3NF to see how Armstrong’s Axioms and lossless joins preserve every piece of information without spurious rows.",
      "funFact": "A database in 3NF or BCNF is immune to painful update anomalies and accidental data deletions!"
    },
    "query-processing-optimization": {
      "title": "Query Processing & Optimization",
      "emoji": "⚡",
      "simpleExplanation": "Speed up queries like a racing turbocharger! Rearrange the math tree so huge tables are filtered BEFORE doing expensive joins.",
      "howItWorks": "Compare the Naive Plan with the Optimized Plan: watch selection push down to shrink 10,000 rows into a tiny fraction before the join!",
      "funFact": "Smart query optimizers can turn a 2-hour slow query into a lightning-fast 20-millisecond execution!"
    },
    "query-optimization": {
      "title": "Query Processing & Optimization",
      "emoji": "⚡",
      "simpleExplanation": "Speed up queries like a racing turbocharger! Rearrange the math tree so huge tables are filtered BEFORE doing expensive joins.",
      "howItWorks": "Compare the Naive Plan with the Optimized Plan: watch selection push down to shrink 10,000 rows into a tiny fraction before the join!",
      "funFact": "Smart query optimizers can turn a 2-hour slow query into a lightning-fast 20-millisecond execution!"
    },
    "transactions": {
      "title": "Relational Algebra & Calculus",
      "emoji": "📐",
      "simpleExplanation": "Mathematical superpowers for databases! Pick rows with Select (σ), pick columns with Project (π), and blend tables together with Join (⋈)!",
      "howItWorks": "Click the operator buttons to see live results: filter students with Selection, slice columns with Projection, and combine tables with Join.",
      "funFact": "Relational Algebra tells the computer HOW to calculate the answer, while Relational Calculus states WHAT you want to find!"
    },
    "indexing": {
      "title": "Query Processing & Optimization",
      "emoji": "⚡",
      "simpleExplanation": "Speed up queries like a racing turbocharger! Rearrange the math tree so huge tables are filtered BEFORE doing expensive joins.",
      "howItWorks": "Compare the Naive Plan with the Optimized Plan: watch selection push down to shrink 10,000 rows into a tiny fraction before the join!",
      "funFact": "Smart query optimizers can turn a 2-hour slow query into a lightning-fast 20-millisecond execution!"
    }
  },
  "blockchain": {
    "blocks-and-blockchain": {
      "title": "Blocks & The Blockchain",
      "emoji": "🔗",
      "simpleExplanation": "Imagine a magical notebook where each page has an unbroken wax seal that quotes the secret stamp from the page before it!",
      "howItWorks": "Walk through the blocks in 3D. Click 'Next step' to chain blocks together. Click on Block 2 to tamper with it, and watch every subsequent block turn red!",
      "funFact": "To change just one old transaction in Bitcoin, a hacker would have to redo millions of dollars of computer calculations for all subsequent blocks!"
    },
    "cryptographic-hashing": {
      "title": "Cryptographic Hash Functions",
      "emoji": "🔏",
      "simpleExplanation": "A hash function is a one-way digital fingerprint machine: feed in any text, and it produces a unique fixed-length code that can never be reversed!",
      "howItWorks": "Click 'New text' to pick messages. Click 'Next step' to run the hash machine gears. Click 'Flip char' to change a single letter and watch the avalanche effect turn tiles red!",
      "funFact": "SHA-256 generates a 64-digit hex code with 2^256 combinations—more than the number of atoms in the entire observable universe!"
    },
    "proof-of-work": {
      "title": "Proof of Work & Mining",
      "emoji": "⛏️",
      "simpleExplanation": "Mining is like a high-speed mathematical lottery where computers race to guess a secret number (nonce) that makes the hash start with zeros!",
      "howItWorks": "Watch the slot reels spin as miners brute-force guesses. Click 'Difficulty' to change the required leading zeros, and watch tries increase 16x per extra zero!",
      "funFact": "Even though finding the winning nonce takes trillions of computer guesses, anyone on the network can verify it in less than a microsecond!"
    },
    "digital-signatures": {
      "title": "Digital Signatures & Keys",
      "emoji": "✍️",
      "simpleExplanation": "A digital signature is a personal stamp only you can create with your secret key, but anyone in the world can verify with your public key!",
      "howItWorks": "Watch Alice write a payment, hash it, sign it with her SECRET key, and fly it to Bob. Bob checks it with the PUBLIC key (green lamp). Click 'Hacker' to edit the note and watch the lamp flash red!",
      "funFact": "Your crypto wallet doesn't actually store coins—it stores your private key that allows you to sign digital transactions!"
    },
    "transactions-network": {
      "title": "Transactions & The Network",
      "emoji": "🌐",
      "simpleExplanation": "Instead of one big central bank, a blockchain shares every payment across a circle of computers where everyone verifies the rules together!",
      "howItWorks": "Follow the golden packet as PC1 broadcasts a transaction. Watch all 6 nodes validate balances and mempool transactions into a block. Click 'Next txs' to test insufficient funds and double-spending!",
      "funFact": "If one computer crashes or tries to lie about its balance, the other five immediately reject it, keeping the shared ledger completely safe!"
    },
    "merkle-trees": {
      "title": "Merkle Trees & Proofs",
      "emoji": "🌳",
      "simpleExplanation": "A Merkle tree combines dozens of transactions pairwise into a pyramid of hashes until only one Root fingerprint remains at the top!",
      "howItWorks": "Step through the pyramid: hash four payments, combine them in pairs, and crown the Merkle Root. Click any transaction to see its green path and orange proof siblings, or click 'Tamper' to see the root break!",
      "funFact": "Lightweight crypto apps on your smartphone don't need to download the whole 500GB blockchain—they only need short Merkle audit paths to verify your money!"
    },
    "consensus-proof-of-stake": {
      "title": "Proof of Stake Consensus",
      "emoji": "🎲",
      "simpleExplanation": "Validators lock up coins as a security deposit. A fortune wheel gives bigger chances to bigger stakers, and a 2/3 supermajority vote seals the block!",
      "howItWorks": "Watch Asha, Ravi, Meera, and Dan deposit stake pillars. Spin the wheel to pick the proposer, and watch nodes cast green YES or red NO votes against the 2/3 threshold mark!",
      "funFact": "Proof of Stake cuts energy consumption by over 99.9% compared to Proof of Work mining!"
    },
    "smart-contracts": {
      "title": "Smart Contracts",
      "emoji": "🤖",
      "simpleExplanation": "A smart contract is a digital vending machine deployed on the blockchain: when the exact conditions are met, it executes and pays out automatically with zero middlemen!",
      "howItWorks": "Install the crowdfunding contract. Click coins from Alice, Bob, and Carol to pledge funds. If the goal is reached, the safe unlocks and pays the owner; if not, it automatically refunds all donors!",
      "funFact": "Once a smart contract is deployed on a blockchain, nobody—not even its creator—can change its code or stop it from running its rules!"
    },
    "merkle-tree": {
      "title": "Merkle Trees & Proofs",
      "emoji": "🌳",
      "simpleExplanation": "A Merkle tree combines dozens of transactions pairwise into a pyramid of hashes until only one Root fingerprint remains at the top!",
      "howItWorks": "Step through the pyramid: hash four payments, combine them in pairs, and crown the Merkle Root. Click any transaction to see its green path and orange proof siblings, or click 'Tamper' to see the root break!",
      "funFact": "Lightweight crypto apps on your smartphone don't need to download the whole 500GB blockchain—they only need short Merkle audit paths to verify your money!"
    },
    "proof-of-stake": {
      "title": "Proof of Stake Consensus",
      "emoji": "🎲",
      "simpleExplanation": "Validators lock up coins as a security deposit. A fortune wheel gives bigger chances to bigger stakers, and a 2/3 supermajority vote seals the block!",
      "howItWorks": "Watch Asha, Ravi, Meera, and Dan deposit stake pillars. Spin the wheel to pick the proposer, and watch nodes cast green YES or red NO votes against the 2/3 threshold mark!",
      "funFact": "Proof of Stake cuts energy consumption by over 99.9% compared to Proof of Work mining!"
    },
    "smart-contract": {
      "title": "Smart Contracts",
      "emoji": "🤖",
      "simpleExplanation": "A smart contract is a digital vending machine deployed on the blockchain: when the exact conditions are met, it executes and pays out automatically with zero middlemen!",
      "howItWorks": "Install the crowdfunding contract. Click coins from Alice, Bob, and Carol to pledge funds. If the goal is reached, the safe unlocks and pays the owner; if not, it automatically refunds all donors!",
      "funFact": "Once a smart contract is deployed on a blockchain, nobody—not even its creator—can change its code or stop it from running its rules!"
    }
  }
};

export function getModuleInstructions(subjectId, topicId) {
  return MODULE_INSTRUCTIONS[subjectId]?.[topicId] || null;
}
