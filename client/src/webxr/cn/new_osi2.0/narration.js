// OSI Model Narration Engine and Text Scripts

const NARRATION_SCRIPTS = {
  // Encapsulation steps (Sender)
  'encap_l7': {
    title: "Layer 7 - Application Layer",
    subtitle: "PDU: L7 Application Data | Protocol: HTTP",
    text: "For this message to be sent across the network, the Application layer provides the network service used by the application. In this example, HTTP represents the web communication between the client and the server. The payload is still raw application data."
  },
  'encap_l6': {
    title: "Layer 6 - Presentation Layer",
    subtitle: "PDU: L6 Presentation Data | Protocol: TLS",
    text: "The Presentation layer is responsible for how data is represented, which can involve encryption, compression, and formatting. We conceptually represent secure transmission using TLS here, which prepares the HTTP data for secure encrypted transfer."
  },
  'encap_l5': {
    title: "Layer 5 - Session Layer",
    subtitle: "PDU: L5 Session Data | Protocol: Session Auth",
    text: "The Session layer establishes, maintains, and terminates logical communication sessions between applications. It manages the conversation state and keeps the communication streams separate and authenticated."
  },
  'encap_l4': {
    title: "Layer 4 - Transport Layer",
    subtitle: "PDU: Segment | Protocol: TCP (Port 443)",
    text: "The Transport layer handles host-to-host end-to-end communication. We attach a TCP header with source and destination ports (like HTTPS port 443). This layer manages reliability, sequencing, and flow control, creating a Segment."
  },
  'encap_l3': {
    title: "Layer 3 - Network Layer",
    subtitle: "PDU: Packet | Protocol: IP",
    text: "The Network layer handles logical routing and IP addressing across different networks. We attach an IP header containing the source IP 192.168.1.10 and the destination IP. Routers will use this to direct the Packet."
  },
  'encap_l2': {
    title: "Layer 2 - Data Link Layer",
    subtitle: "PDU: Frame | Protocol: Ethernet MAC",
    text: "The Data Link layer handles communication over the local physical network. We wrap the packet with a destination and source MAC hardware address header, along with a trailer check sequence, forming an Ethernet Frame."
  },
  'encap_l1': {
    title: "Layer 1 - Physical Layer",
    subtitle: "PDU: Physical Bitstream | Protocol: Binary Signal",
    text: "The Physical layer converts the complete Frame into binary signals (bits). These bits are sent across the transmission medium, representing electrical voltages, fiber-optic light pulses, or wireless radio frequencies."
  },
  
  // Network transmission
  'transmitting': {
    title: "Network Transit (WAN/Internet)",
    subtitle: "PDU: Routed Packet / Bits | Protocol: IP Routing",
    text: "The physical bits travel through the network path, hopping from router to router. Intermediate routers read the Network layer (Layer 3) destination IP to determine the best path to forward the packet toward the destination server."
  },
  
  // Decapsulation steps (Receiver)
  'decap_l1': {
    title: "Layer 1 - Physical Layer (Receiver)",
    subtitle: "PDU: Physical Bitstream | Protocol: Binary Signal",
    text: "The physical layer of the destination server receives raw electrical or optical signals and reconstructs the binary bitstream, converting the signal back into a Data Link frame."
  },
  'decap_l2': {
    title: "Layer 2 - Data Link Layer (Receiver)",
    subtitle: "PDU: Frame -> Packet | Protocol: Ethernet MAC",
    text: "The Data Link layer reads the MAC destination address. Since it matches this server's network card, it strips the MAC header and trailer, validating the frame and passing the inner IP packet up to the Network layer."
  },
  'decap_l3': {
    title: "Layer 3 - Network Layer (Receiver)",
    subtitle: "PDU: Packet -> Segment | Protocol: IP",
    text: "The Network layer examines the IP header. Since the destination IP matches this server, the IP header is stripped, exposing the transport segment which is then forwarded up to the Transport layer."
  },
  'decap_l4': {
    title: "Layer 4 - Transport Layer (Receiver)",
    subtitle: "PDU: Segment -> Data | Protocol: TCP",
    text: "The Transport layer reads the TCP header, verifying proper sequencing. It identifies the destination application via port 443, strips the TCP header, and routes the remaining payload up to the session handler."
  },
  'decap_l5': {
    title: "Layer 5 - Session Layer (Receiver)",
    subtitle: "PDU: Session Data | Protocol: Session Auth",
    text: "The Session layer checks the communication dialogue state, verifies that the session is complete and authorized, and passes the secure presentation-layer payload to the presentation layer."
  },
  'decap_l6': {
    title: "Layer 6 - Presentation Layer (Receiver)",
    subtitle: "PDU: Presentation Data | Protocol: TLS Decrypt",
    text: "The Presentation layer processes data formatting and decryption. It decrypts the TLS layer, changing the encrypted secure payload back into the raw HTTP readable application data."
  },
  'decap_l7': {
    title: "Layer 7 - Application Layer (Receiver)",
    subtitle: "PDU: L7 Application Data | Protocol: HTTP",
    text: "The Application layer receives the raw HTTP content. The HTTP web application extracts the message: 'Hey! What's up?' and presents it to the destination user interface. Transmission complete!"
  }
};

class NarrationEngine {
  constructor() {
    this.isMuted = false;
    this.currentUtterance = null;
    this.fallbackTimer = null;
    this.onSubtitleUpdate = null; // Callback when text updates
    this.rate = 1.15; // Engage user with proper, livelier speed
    this.preferredGender = 'female'; // Prefer female voice as default
  }

  setMute(mute) {
    this.isMuted = mute;
    if (this.isMuted) {
      this.stop();
    }
  }

  setRate(rate) {
    this.rate = parseFloat(rate) || 1.15;
    if (this.currentUtterance) {
      this.currentUtterance.rate = this.rate;
    }
  }

  setGender(gender) {
    this.preferredGender = gender;
  }

  stop() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (this.fallbackTimer) {
      clearTimeout(this.fallbackTimer);
      this.fallbackTimer = null;
    }
    this.currentUtterance = null;
  }

  play(stepKey, onComplete) {
    this.stop();
    
    const script = NARRATION_SCRIPTS[stepKey];
    if (!script) {
      if (onComplete) onComplete();
      return;
    }

    // Update subtitles in DOM
    if (this.onSubtitleUpdate) {
      this.onSubtitleUpdate(script.title, script.subtitle, script.text);
    }

    if (this.isMuted) {
      // If muted, act like a fallback (simulate speaking time)
      const readingDuration = Math.max(2500, (script.text.split(" ").length * 350) / this.rate);
      this.fallbackTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, readingDuration);
      return;
    }

    if (window.speechSynthesis) {
      // Web Speech API
      const utterance = new SpeechSynthesisUtterance(script.text);
      
      // Attempt to pick a natural male/female voice if available, else default
      const voices = window.speechSynthesis.getVoices();
      const englishVoices = voices.filter(v => v.lang.startsWith("en") || v.lang.includes("en-"));
      
      let selectedVoice = null;
      
      if (this.preferredGender === 'female') {
        // High-quality female voice keywords across Windows, macOS, Chrome OS, Android, iOS
        const femaleKeywords = [
          "zira", "samantha", "hazel", "karen", "victoria", "susan", 
          "serena", "moira", "fiona", "tessa", "veena", "female", 
          "google us english", "microsoft zira", "natural"
        ];
        
        selectedVoice = englishVoices.find(v => {
          const nameLower = v.name.toLowerCase();
          const isFemale = femaleKeywords.some(kw => nameLower.includes(kw));
          const isMale = ["male", "david", "george", "mark", "ravi", "microsoft david", "google uk english male"].some(m => nameLower.includes(m));
          return isFemale && !isMale;
        });
      } else if (this.preferredGender === 'male') {
        const maleKeywords = [
          "david", "george", "mark", "ravi", "male", "microsoft david", "google uk english male"
        ];
        
        selectedVoice = englishVoices.find(v => {
          const nameLower = v.name.toLowerCase();
          return maleKeywords.some(kw => nameLower.includes(kw));
        });
      }
      
      // Fallback if no specific voice matched preferred gender or system default is selected
      if (!selectedVoice) {
        selectedVoice = englishVoices.find(v => 
          (v.name.includes("Google") || v.name.includes("Natural") || v.name.includes("Microsoft"))
        ) || englishVoices[0];
      }
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      
      utterance.rate = this.rate;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      let finished = false;
      
      const finishSpeech = () => {
        if (finished) return;
        finished = true;
        this.currentUtterance = null;
        if (this.fallbackTimer) {
          clearTimeout(this.fallbackTimer);
          this.fallbackTimer = null;
        }
        if (onComplete) onComplete();
      };

      utterance.onend = finishSpeech;
      utterance.onerror = (e) => {
        console.warn("Speech synthesis error, falling back:", e);
        finishSpeech();
      };

      this.currentUtterance = utterance;
      
      // Fallback timeout in case browser speech gets stuck (known bug in Chrome)
      const wordCount = script.text.split(" ").length;
      const expectedTimeMs = ((wordCount * 600) / this.rate) + 4000;
      this.fallbackTimer = setTimeout(() => {
        console.warn("Speech synthesis timed out (fallback activated)");
        window.speechSynthesis.cancel();
        finishSpeech();
      }, expectedTimeMs);

      // Start speaking
      window.speechSynthesis.speak(utterance);
    } else {
      // Fallback if SpeechSynthesis is completely unsupported
      const readingDuration = Math.max(2500, (script.text.split(" ").length * 350) / this.rate);
      this.fallbackTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, readingDuration);
    }
  }
}

// Export global instance
window.narrationEngine = new NarrationEngine();
window.NARRATION_SCRIPTS = NARRATION_SCRIPTS;

// Preload voices (chrome loads them asynchronously)
if (window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }
}
