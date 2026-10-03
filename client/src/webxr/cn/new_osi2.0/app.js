// WebXR OSI Model Simulator - Orchestration Script

// Simulation States
const STATES = {
  START: 'START',
  ENCAP_L7: 'ENCAP_L7',
  ENCAP_L6: 'ENCAP_L6',
  ENCAP_L5: 'ENCAP_L5',
  ENCAP_L4: 'ENCAP_L4',
  ENCAP_L3: 'ENCAP_L3',
  ENCAP_L2: 'ENCAP_L2',
  ENCAP_L1: 'ENCAP_L1',
  TRANSIT: 'TRANSIT',
  DECAP_L1: 'DECAP_L1',
  DECAP_L2: 'DECAP_L2',
  DECAP_L3: 'DECAP_L3',
  DECAP_L4: 'DECAP_L4',
  DECAP_L5: 'DECAP_L5',
  DECAP_L6: 'DECAP_L6',
  DECAP_L7: 'DECAP_L7',
  FINISHED: 'FINISHED'
};

const STATE_ORDER = [
  STATES.START,
  STATES.ENCAP_L7, STATES.ENCAP_L6, STATES.ENCAP_L5, STATES.ENCAP_L4, STATES.ENCAP_L3, STATES.ENCAP_L2, STATES.ENCAP_L1,
  STATES.TRANSIT,
  STATES.DECAP_L1, STATES.DECAP_L2, STATES.DECAP_L3, STATES.DECAP_L4, STATES.DECAP_L5, STATES.DECAP_L6, STATES.DECAP_L7,
  STATES.FINISHED
];

// Block definitions for packet visualization
const BLOCK_DEFS = {
  'data':    { name: 'DATA',    color: '#3B82F6', width: 0.52, text: '"Hey! What\'s up?"' }, // Blue
  'http':    { name: 'HTTP',    color: '#22D3EE', width: 0.32, text: 'HTTP/L7' },  // Cyan
  'tls':     { name: 'TLS',     color: '#A855F7', width: 0.32, text: 'TLS/L6' },   // Violet
  'session': { name: 'SESSION', color: '#6366F1', width: 0.35, text: 'SESS/L5' },  // Indigo
  'tcp':     { name: 'TCP',     color: '#F59E0B', width: 0.38, text: 'TCP:443' },  // Orange
  'ip':      { name: 'IP',      color: '#EC4899', width: 0.32, text: 'IP/L3' },    // Pink
  'mac':     { name: 'MAC',     color: '#10B981', width: 0.35, text: 'MAC/L2' }     // Emerald Green
};

// Map state to blocks that should be visible in encapsulation
const ENCAP_STATE_BLOCKS = {
  'ENCAP_L7': ['data', 'http'],
  'ENCAP_L6': ['data', 'http', 'tls'],
  'ENCAP_L5': ['data', 'http', 'tls', 'session'],
  'ENCAP_L4': ['data', 'http', 'tls', 'session', 'tcp'],
  'ENCAP_L3': ['data', 'http', 'tls', 'session', 'tcp', 'ip'],
  'ENCAP_L2': ['data', 'http', 'tls', 'session', 'tcp', 'ip', 'mac'],
  'ENCAP_L1': ['data', 'http', 'tls', 'session', 'tcp', 'ip', 'mac']
};

class OsiSimulator {
  constructor() {
    this.currentStateIndex = 0;
    this.isPaused = false;
    this.isMuted = false;
    this.narrationActive = false;
    
    // Packet UI elements
    this.packetContainer = null;
    this.spawnedBlocks = {};
    
    // Router / Network path
    this.routerNodes = [];
    this.routerLinks = [];
    
    this.initElements();
    this.bindEvents();
  }
  
  initElements() {
    this.packetContainer = document.querySelector('#packet-platform');
    
    // Cache router nodes & links
    for (let i = 0; i <= 4; i++) {
      this.routerNodes.push(document.querySelector(`#router-n${i}`));
    }
    
    // Links (cylinders connecting them)
    for (let i = 0; i < 4; i++) {
      this.routerLinks.push(document.querySelector(`#link-${i}`));
    }
  }
  
  bindEvents() {
    // 2D Overlay buttons
    document.querySelector('#btn-start-sim').addEventListener('click', () => this.startSimulation());
    document.querySelector('#btn-continue').addEventListener('click', () => this.nextStep());
    document.querySelector('#btn-pause').addEventListener('click', () => this.togglePause());
    document.querySelector('#btn-mute').addEventListener('click', () => this.toggleMute());
    document.querySelector('#btn-replay').addEventListener('click', () => this.replayStep());
    document.querySelector('#btn-restart').addEventListener('click', () => this.restart());
    document.querySelector('#btn-replay-end').addEventListener('click', () => this.restart());
    document.querySelector('#btn-back-osi').addEventListener('click', () => this.restart());
    
    // Voice Selection & Speed slider event bindings
    const voiceSelect = document.querySelector('#select-voice');
    if (voiceSelect) {
      voiceSelect.addEventListener('change', (e) => {
        window.narrationEngine.setGender(e.target.value);
        // Re-read current step if not paused and already started
        if (!this.isPaused && this.currentStateIndex > 0 && this.currentStateIndex < STATE_ORDER.length - 1) {
          this.runStep();
        }
      });
    }

    const inputSpeed = document.querySelector('#input-speed');
    const speedVal = document.querySelector('#speed-val');
    if (inputSpeed && speedVal) {
      inputSpeed.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value).toFixed(2);
        speedVal.textContent = `${val}x`;
        window.narrationEngine.setRate(val);
      });
    }

    // Speech synthesis narration subtitle callback
    window.narrationEngine.onSubtitleUpdate = (title, subtitle, text) => {
      document.querySelector('#sub-title').textContent = title;
      document.querySelector('#sub-pdu').textContent = subtitle;
      document.querySelector('#sub-text').textContent = text;
      
      // Update dynamic 3D screen text if in VR
      const textScreen = document.querySelector('#vr-subtitle-text');
      if (textScreen) {
        textScreen.setAttribute('value', text);
      }
      const titleScreen = document.querySelector('#vr-subtitle-title');
      if (titleScreen) {
        titleScreen.setAttribute('value', `${title} | ${subtitle}`);
      }
    };
    
    // Trigger voice loaded check
    if (window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = () => {};
    }
  }

  getCurrentState() {
    return STATE_ORDER[this.currentStateIndex];
  }
  
  startSimulation() {
    document.querySelector('#intro-overlay').classList.add('hidden');
    this.currentStateIndex = 1; // ENCAP_L7
    this.isPaused = false;
    this.runStep();
  }
  
  restart() {
    window.narrationEngine.stop();
    this.currentStateIndex = 0;
    this.isPaused = false;
    
    // Reset HUD
    document.querySelector('#btn-continue').classList.remove('visible');
    document.querySelector('#end-overlay').classList.add('hidden');
    document.querySelector('#intro-overlay').classList.remove('hidden');
    
    // Reset inputs
    document.querySelector('#sender-browser-received').setAttribute('visible', 'false');
    document.querySelector('#dest-server-received').setAttribute('visible', 'false');
    document.querySelector('#dest-text-message').setAttribute('value', 'Awaiting Packet...');
    
    // Clear 3D block objects
    Object.values(this.spawnedBlocks).forEach(block => {
      if (block.parentNode) block.parentNode.removeChild(block);
    });
    this.spawnedBlocks = {};
    
    // Reset highlighted cards
    this.clearAllCardHighlights();
    
    // Reset router links
    this.resetRouterLinks();
    
    // Reset physical bits
    const bitsContainer = document.querySelector('#physical-bits-container');
    if (bitsContainer) bitsContainer.setAttribute('visible', 'false');
    
    const transitPacket = document.querySelector('#transit-packet');
    if (transitPacket) transitPacket.setAttribute('visible', 'false');
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    const btn = document.querySelector('#btn-pause');
    if (this.isPaused) {
      btn.textContent = 'RESUME';
      window.narrationEngine.stop();
    } else {
      btn.textContent = 'PAUSE';
      this.runStep();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    window.narrationEngine.setMute(this.isMuted);
    document.querySelector('#btn-mute').textContent = this.isMuted ? 'UNMUTE' : 'MUTE';
  }

  replayStep() {
    if (this.isPaused) return;
    this.runStep();
  }

  nextStep() {
    if (this.currentStateIndex < STATE_ORDER.length - 1) {
      document.querySelector('#btn-continue').classList.remove('visible');
      this.currentStateIndex++;
      this.runStep();
    }
  }

  runStep() {
    const state = this.getCurrentState();
    console.log("Current Simulator State: " + state);
    
    // Update progress indicator
    this.updateProgressHUD(state);
    
    // Clear all stacks highlights before highlighting the current active layer
    this.clearAllCardHighlights();
    
    // Determine narration key
    let narrationKey = state.toLowerCase();
    
    // Highlight relevant cards & trigger visuals
    if (state.startsWith('ENCAP_')) {
      const layerNum = state.split('_L')[1];
      this.highlightCard('sender', layerNum);
      
      // Update UI displays on Sender screen
      document.querySelector('#sender-browser-received').setAttribute('visible', 'true');
      
      // Trigger animations
      this.animateEncapsulation(parseInt(layerNum));
    } 
    else if (state === STATES.TRANSIT) {
      this.animateTransmission();
    } 
    else if (state.startsWith('DECAP_')) {
      const layerNum = state.split('_L')[1];
      this.highlightCard('dest', layerNum);
      this.animateDecapsulation(parseInt(layerNum));
    } 
    else if (state === STATES.FINISHED) {
      this.showEndScreen();
      return;
    }
    
    // Play sound and wait for completion
    this.narrationActive = true;
    window.narrationEngine.play(narrationKey, () => {
      this.narrationActive = false;
      if (!this.isPaused) {
        // Enable Continue button when narration finishes
        document.querySelector('#btn-continue').classList.add('visible');
      }
    });
  }
  
  updateProgressHUD(state) {
    let progressText = "";
    if (state.startsWith('ENCAP_')) {
      const num = state.split('_L')[1];
      progressText = `ENCAPSULATION — STEP ${8 - parseInt(num)} / 7 (LAYER ${num})`;
    } else if (state === STATES.TRANSIT) {
      progressText = `TRANSMISSION — PACKET ROUTING`;
    } else if (state.startsWith('DECAP_')) {
      const num = state.split('_L')[1];
      progressText = `DECAPSULATION — STEP ${num} / 7 (LAYER ${num})`;
    } else if (state === STATES.FINISHED) {
      progressText = `SIMULATION COMPLETE`;
    }
    document.querySelector('#step-indicator').textContent = progressText;
  }

  // --- HIGHLIGHT STACK CARDS ---
  highlightCard(side, layerNum) {
    const card = document.querySelector(`#${side}-l${layerNum}`);
    if (card) {
      card.setAttribute('data-selected', 'true');
      
      // Glow card border green
      const border = card.querySelector('.card-border');
      if (border) {
        border.setAttribute('material', 'color', '#8BC34A');
        border.setAttribute('material', 'opacity', 1.0);
        border.setAttribute('material', 'emissive', '#8BC34A');
        border.setAttribute('material', 'emissiveIntensity', 1.5);
      }
      
      // Glow card title green
      const title = card.querySelector('.card-title');
      if (title) {
        title.setAttribute('color', '#8BC34A');
      }
    }
  }

  clearAllCardHighlights() {
    for (let i = 1; i <= 7; i++) {
      ['sender', 'dest'].forEach(side => {
        const card = document.querySelector(`#${side}-l${i}`);
        if (card) {
          card.setAttribute('data-selected', 'false');
          const border = card.querySelector('.card-border');
          if (border) {
            border.setAttribute('material', 'color', '#1E293B');
            border.setAttribute('material', 'opacity', 0.4);
            border.setAttribute('material', 'emissive', '#1E293B');
            border.setAttribute('material', 'emissiveIntensity', 0.1);
          }
          const title = card.querySelector('.card-title');
          if (title) {
            title.setAttribute('color', '#F8FAFC');
          }
        }
      });
    }
  }

  // --- ENCAPSULATION VISUALS ---
  animateEncapsulation(layerNum) {
    // Hide physical bits container if moving backward
    const bitsContainer = document.querySelector('#physical-bits-container');
    if (bitsContainer) bitsContainer.setAttribute('visible', 'false');
    
    // Specific Physical Layer representation
    if (layerNum === 1) {
      this.animatePhysicalLayerTransition();
      return;
    }
    
    const stateKey = `ENCAP_L${layerNum}`;
    const activeBlockIds = ENCAP_STATE_BLOCKS[stateKey] || [];
    
    // Lay out active blocks centered
    this.updatePacketLayout(activeBlockIds, true, 'sender', layerNum);
  }

  // Spawns and arranges blocks in the packet container
  updatePacketLayout(activeIds, animateNew, side = 'sender', originLayer = 7) {
    let totalWidth = 0;
    activeIds.forEach(id => {
      totalWidth += BLOCK_DEFS[id].width + 0.04; // Add a small gap between blocks
    });
    totalWidth -= 0.04; // Remove trailing gap
    
    let currentX = -totalWidth / 2;
    
    activeIds.forEach((id) => {
      const def = BLOCK_DEFS[id];
      const targetX = currentX + def.width / 2;
      
      // If block already exists, slide it to its new centered position
      if (this.spawnedBlocks[id]) {
        this.spawnedBlocks[id].setAttribute('visible', 'true');
        this.spawnedBlocks[id].setAttribute('animation__pos', {
          property: 'position',
          to: `${targetX} 0 0`,
          dur: 600,
          easing: 'easeOutQuad'
        });
      } 
      // If block is new, spawn it and animate it flying from the active layer card
      else if (animateNew) {
        const block = this.createBlockEntity(id, def);
        this.packetContainer.appendChild(block);
        this.spawnedBlocks[id] = block;
        
        // Find starting world position (active layer card on left/right stack)
        const originCard = document.querySelector(`#${side}-l${originLayer}`);
        let startPos = { x: -1.8, y: 1.6, z: -2.5 }; // Default fallback
        
        if (originCard && originCard.object3D && this.packetContainer.object3D) {
          const cardPos = new THREE.Vector3();
          originCard.object3D.getWorldPosition(cardPos);
          // Convert world coordinates to relative platform coordinates
          const platformPos = new THREE.Vector3();
          this.packetContainer.object3D.getWorldPosition(platformPos);
          startPos = {
            x: cardPos.x - platformPos.x,
            y: cardPos.y - platformPos.y,
            z: cardPos.z - platformPos.z
          };
        }
        
        // Position at start
        block.setAttribute('position', startPos);
        block.setAttribute('scale', '0.1 0.1 0.1');
        block.setAttribute('material', 'opacity', 0);
        
        // Animate flight, scale and fade
        block.setAttribute('animation__fly', {
          property: 'position',
          to: `${targetX} 0 0`,
          dur: 850,
          easing: 'easeOutCubic'
        });
        block.setAttribute('animation__scale', {
          property: 'scale',
          to: '1 1 1',
          dur: 800,
          easing: 'easeOutBack'
        });
        block.setAttribute('animation__fade', {
          property: 'material.opacity',
          to: 0.9,
          dur: 500,
          easing: 'linear'
        });
      } else {
        // Position instantly (e.g. during reset/replay)
        const block = this.createBlockEntity(id, def);
        this.packetContainer.appendChild(block);
        this.spawnedBlocks[id] = block;
        block.setAttribute('position', `${targetX} 0 0`);
      }
      
      currentX += def.width + 0.04;
    });
  }

  createBlockEntity(id, def) {
    const el = document.createElement('a-entity');
    el.setAttribute('id', `block-${id}`);
    
    // Main block geometry
    const box = document.createElement('a-box');
    box.setAttribute('width', def.width);
    box.setAttribute('height', 0.22);
    box.setAttribute('depth', 0.08);
    box.setAttribute('material', {
      shader: 'flat',
      color: def.color,
      transparent: true,
      opacity: 0.85
    });
    el.appendChild(box);
    
    // Add dynamic glowing border
    const border = document.createElement('a-box');
    border.setAttribute('width', def.width + 0.02);
    border.setAttribute('height', 0.24);
    border.setAttribute('depth', 0.09);
    border.setAttribute('material', {
      shader: 'flat',
      color: '#FFFFFF',
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    border.setAttribute('class', 'card-border');
    el.appendChild(border);
    
    // Label text
    const label = document.createElement('a-text');
    label.setAttribute('value', def.name);
    label.setAttribute('align', 'center');
    label.setAttribute('width', 1.8);
    label.setAttribute('color', '#080B12');
    label.setAttribute('font', 'kelson');
    label.setAttribute('position', '0 0.03 0.05');
    el.appendChild(label);
    
    // Secondary protocol text
    const subLabel = document.createElement('a-text');
    subLabel.setAttribute('value', def.text);
    subLabel.setAttribute('align', 'center');
    subLabel.setAttribute('width', 1.2);
    subLabel.setAttribute('color', '#080B12');
    subLabel.setAttribute('position', '0 -0.05 0.05');
    el.appendChild(subLabel);
    
    return el;
  }

  // --- PHYSICAL LAYER (TRANSITION TO BITS) ---
  animatePhysicalLayerTransition() {
    // Fade out all standard blocks
    Object.values(this.spawnedBlocks).forEach((block) => {
      block.setAttribute('animation__fade_out', {
        property: 'material.opacity',
        to: 0,
        dur: 600,
        easing: 'linear'
      });
      // also scale down
      block.setAttribute('animation__scale_down', {
        property: 'scale',
        to: '0.01 0.01 0.01',
        dur: 600,
        easing: 'easeInQuad'
      });
    });
    
    // Spawn floating binary bits
    setTimeout(() => {
      const bitsContainer = document.querySelector('#physical-bits-container');
      if (bitsContainer) {
        bitsContainer.setAttribute('visible', 'true');
        bitsContainer.setAttribute('position', '0 0.45 0'); // relative platform height
        
        // Randomize 0 and 1 content
        const bitsText = bitsContainer.querySelector('a-text');
        if (bitsText) {
          let randomBinary = "";
          for(let i=0; i<18; i++) {
            randomBinary += Math.random() > 0.5 ? "1" : "0";
            if (i === 5 || i === 11) randomBinary += " ";
          }
          bitsText.setAttribute('value', randomBinary);
        }
      }
    }, 400);
  }

  // --- TRANSMISSION VISUALS ---
  animateTransmission() {
    // Hide standard packet blocks if they are still visible
    Object.values(this.spawnedBlocks).forEach(b => b.setAttribute('visible', 'false'));
    
    const bitsContainer = document.querySelector('#physical-bits-container');
    if (bitsContainer) bitsContainer.setAttribute('visible', 'false');
    
    const transitPacket = document.querySelector('#transit-packet');
    if (!transitPacket) return;
    
    transitPacket.setAttribute('visible', 'true');
    
    // Set active link values
    this.resetRouterLinks();
    
    // Chained path interpolation
    const positions = this.routerNodes.map(node => {
      const pos = new THREE.Vector3();
      if (node && node.object3D) {
        node.object3D.getWorldPosition(pos);
      }
      return pos;
    });
    
    transitPacket.setAttribute('position', positions[0]);
    
    // Sequence of animations along the path
    const durationPerHop = 800; // ms
    
    const animateHop = (hopIndex) => {
      if (hopIndex >= positions.length - 1) {
        // Reached destination!
        transitPacket.setAttribute('visible', 'false');
        this.resetRouterLinks();
        return;
      }
      
      // Highlight link
      const link = this.routerLinks[hopIndex];
      if (link) {
        link.setAttribute('network-link', 'active', true);
      }
      
      // Animate packet position
      transitPacket.setAttribute('animation__hop', {
        property: 'position',
        from: `${positions[hopIndex].x} ${positions[hopIndex].y} ${positions[hopIndex].z}`,
        to: `${positions[hopIndex+1].x} ${positions[hopIndex+1].y} ${positions[hopIndex+1].z}`,
        dur: durationPerHop,
        easing: 'easeInOutQuad'
      });
      
      // Trigger next hop
      setTimeout(() => {
        if (link) link.setAttribute('network-link', 'active', false);
        animateHop(hopIndex + 1);
      }, durationPerHop);
    };
    
    animateHop(0);
  }

  resetRouterLinks() {
    this.routerLinks.forEach(link => {
      if (link) {
        link.setAttribute('network-link', 'active', false);
      }
    });
  }

  // --- DECAPSULATION VISUALS ---
  animateDecapsulation(layerNum) {
    const bitsContainer = document.querySelector('#physical-bits-container');
    if (bitsContainer) bitsContainer.setAttribute('visible', 'false');
    
    // Packet arrives as L1 Frame
    if (layerNum === 1) {
      // First, show raw bits container at destination platform, then assemble it to a frame
      
      // Show bits
      bitsContainer.setAttribute('visible', 'true');
      bitsContainer.setAttribute('position', '0 0.45 0'); // relative console height
      
      // Set packet blocks to visible but invisible/hidden initially, then reconstruct
      Object.keys(BLOCK_DEFS).forEach(id => {
        if (this.spawnedBlocks[id]) {
          this.spawnedBlocks[id].setAttribute('visible', 'false');
        }
      });
      
      // Wait and transition to assembled frame block
      setTimeout(() => {
        bitsContainer.setAttribute('visible', 'false');
        
        // Make all 7 blocks visible at once
        const allBlockIds = ['data', 'http', 'tls', 'session', 'tcp', 'ip', 'mac'];
        this.updatePacketLayout(allBlockIds, false, 'dest', 1);
        
        Object.values(this.spawnedBlocks).forEach(block => {
          block.setAttribute('visible', 'true');
          block.setAttribute('scale', '1 1 1');
          block.setAttribute('material', 'opacity', 0.9);
        });
      }, 1000);
      
      return;
    }
    
    // For layers 2 to 7, fly the header OUT of the packet to the Right Stack card
    const headerToRemove = this.getHeaderForLayer(layerNum - 1); // Layer 2 strips MAC, Layer 3 strips IP...
    
    if (headerToRemove && this.spawnedBlocks[headerToRemove]) {
      const block = this.spawnedBlocks[headerToRemove];
      
      // Position target: right stack layer card
      const destCard = document.querySelector(`#dest-l${layerNum}`);
      let targetPos = { x: 1.8, y: 1.6, z: -2.5 }; // Default fallback
      
      if (destCard && destCard.object3D && this.packetContainer.object3D) {
        const cardPos = new THREE.Vector3();
        destCard.object3D.getWorldPosition(cardPos);
        const platformPos = new THREE.Vector3();
        this.packetContainer.object3D.getWorldPosition(platformPos);
        targetPos = {
          x: cardPos.x - platformPos.x,
          y: cardPos.y - platformPos.y,
          z: cardPos.z - platformPos.z
        };
      }
      
      // Animate flight out, scaling down, fading out
      block.setAttribute('animation__fly_out', {
        property: 'position',
        to: `${targetPos.x} ${targetPos.y} ${targetPos.z}`,
        dur: 850,
        easing: 'easeInCubic'
      });
      block.setAttribute('animation__scale_out', {
        property: 'scale',
        to: '0.1 0.1 0.1',
        dur: 800,
        easing: 'easeInBack'
      });
      block.setAttribute('animation__fade_out', {
        property: 'material.opacity',
        to: 0,
        dur: 600,
        easing: 'linear'
      });
      
      // Lock decryption effect on Layer 6 TLS
      if (headerToRemove === 'tls') {
        const destLock = document.querySelector('#dest-server-lock');
        if (destLock) {
          destLock.setAttribute('animation__unlock', {
            property: 'rotation',
            to: '0 360 0',
            dur: 800
          });
          setTimeout(() => {
            destLock.setAttribute('value', '🔓 TLS Decrypted');
            destLock.setAttribute('color', '#8BC34A');
          }, 400);
        }
      }
      
      // After animation completes, clean up layouts
      setTimeout(() => {
        block.setAttribute('visible', 'false');
        
        // Re-align remaining blocks
        const remainingIds = this.getRemainingBlocks(layerNum);
        this.updatePacketLayout(remainingIds, false, 'dest', layerNum);
      }, 850);
    }
    
    // Reveal message on destination server rack at Layer 7
    if (layerNum === 7) {
      setTimeout(() => {
        document.querySelector('#dest-server-received').setAttribute('visible', 'true');
        document.querySelector('#dest-text-message').setAttribute('value', '"Hey! What\'s up?"');
      }, 1000);
    }
  }

  getHeaderForLayer(layerIndex) {
    // Returns header stripped AT this level
    // Layer 2 strips MAC, Layer 3 IP, Layer 4 TCP, Layer 5 Session, Layer 6 TLS, Layer 7 HTTP
    const stripMap = {
      1: 'mac',
      2: 'ip',
      3: 'tcp',
      4: 'session',
      5: 'tls',
      6: 'http',
      7: 'data'
    };
    return stripMap[layerIndex];
  }

  getRemainingBlocks(layerNum) {
    // Returns remaining blocks in packet after this layer's decryption
    const remainMap = {
      2: ['data', 'http', 'tls', 'session', 'tcp', 'ip'],
      3: ['data', 'http', 'tls', 'session', 'tcp'],
      4: ['data', 'http', 'tls', 'session'],
      5: ['data', 'http', 'tls'],
      6: ['data', 'http'],
      7: ['data']
    };
    return remainMap[layerNum] || [];
  }

  // --- FINAL SCREEN MODAL ---
  showEndScreen() {
    document.querySelector('#end-overlay').classList.remove('hidden');
  }
}

// Instantiate simulator once DOM loads
window.addEventListener('DOMContentLoaded', () => {
  window.osiSimulator = new OsiSimulator();
});
