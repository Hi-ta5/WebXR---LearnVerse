import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Play, Pause, RotateCcw, Info, Send, ShieldAlert, Cpu, Zap } from 'lucide-react';

export default function TCPUDPScene({ isPlaying = true, speed = 1 }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [protocolMode, setProtocolMode] = useState('tcp'); // tcp, udp
  const [forcePacketDrop, setForcePacketDrop] = useState(false);
  const [telemetryLogs, setTelemetryLogs] = useState([]);
  const [hoverInfo, setHoverInfo] = useState('');
  const [walkthroughStep, setWalkthroughStep] = useState(0);
  const [isTransmitting, setIsTransmitting] = useState(false);

  const steps = [
    { title: "Select Protocol", desc: "Toggle between TCP (Reliable Connection) and UDP (Fast Datagram Stream) above." },
    { title: "Watch Sliding Window", desc: "In TCP mode, analyze the sliding window sliding across sequence indexes as ACKs return." },
    { title: "Inject Channel Failures", desc: "Click 'Drop Next Packet' mid-transit. Watch the packet dissolve, prompting a timeout and a reliable retransmission!" }
  ];

  useEffect(() => {
    setForcePacketDrop(false);
    setTelemetryLogs(protocolMode === 'tcp' 
      ? ['[SYSTEM] TCP reliable layer ready. Click Transmit to initialize sliding window.'] 
      : ['[SYSTEM] UDP stream ready. Click Transmit to initiate continuous datagram pipe.']
    );
  }, [protocolMode]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let frameId;

    // --- 1. THREE.JS INITIALIZATION ---
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, 280);

    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / 280, 0.1, 100);
    camera.position.set(0, 4.5, 9);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minDistance = 3;
    controls.maxDistance = 15;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xbc3bf0, 1.2);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    const group = new THREE.Group();
    scene.add(group);

    // 3D Grid helper
    const gridHelper = new THREE.GridHelper(20, 20, 0xbc3bf0, 0xffffff);
    gridHelper.position.y = -2;
    gridHelper.material.opacity = 0.08;
    gridHelper.material.transparent = true;
    group.add(gridHelper);

    // --- 2. BUILD FUTURISTIC ANTENNA TOWERS ---
    const towerMat1 = new THREE.MeshStandardMaterial({ color: 0x00f0ff, roughness: 0.1, metalness: 0.8 }); // Sender (Blue)
    const towerMat2 = new THREE.MeshStandardMaterial({ color: 0xbc3bf0, roughness: 0.1, metalness: 0.8 }); // Receiver (Purple)

    // Helper: Tower structure mesh
    const createTower = (xPos, mat) => {
      const tg = new THREE.Group();
      tg.position.set(xPos, -0.5, 0);

      // Base cylinder
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.3, 1.2, 16), mat);
      tg.add(base);

      // Multiple orbiting horizontal disc rings
      for (let i = 0; i < 3; i++) {
        const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.03, 16), mat);
        ring.position.y = -0.3 + i * 0.4;
        tg.add(ring);
      }

      // Emissive tip sphere
      const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), new THREE.MeshBasicMaterial({ color: mat.color }));
      sphere.position.y = 0.7;
      tg.add(sphere);
      tg.userData = { tipPos: new THREE.Vector3(xPos, 0.2, 0) };

      return tg;
    };

    const senderTower = createTower(-2.8, towerMat1);
    const receiverTower = createTower(2.8, towerMat2);
    group.add(senderTower, receiverTower);

    // Connecting laser line (communication channel path)
    const channelGeom = new THREE.BufferGeometry().setFromPoints([
      senderTower.userData.tipPos,
      receiverTower.userData.tipPos
    ]);
    const channelLine = new THREE.Line(channelGeom, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.08 }));
    group.add(channelLine);

    // --- 3. PACKET & ACK ANGLE REPRESENTATIONS ---
    // TCP / UDP transmission mesh configurations
    const packetGeom = new THREE.SphereGeometry(0.12, 16, 16);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.9 });
    
    // Ack sphere
    const ackGeom = new THREE.SphereGeometry(0.09, 16, 16);
    const ackMat = new THREE.MeshBasicMaterial({ color: 0x22c55e, transparent: true, opacity: 0.9 });

    // Active TCP dynamic variables
    let tcpState = 'idle'; // idle, sending, acking, dropped, timeout
    let tcpTimer = 0;
    let tcpProgress = 0;
    let tcpFrameIdx = 0;
    
    // Renders TCP active sliding window
    const windowGeom = new THREE.BoxGeometry(1.6, 0.6, 0.6);
    const windowMat = new THREE.MeshBasicMaterial({ color: 0x22c55e, transparent: true, opacity: 0.1, wireframe: true });
    const windowMesh = new THREE.Mesh(windowGeom, windowMat);
    windowMesh.position.set(-0.8, 0.8, 0); // initial slide position
    windowMesh.visible = false;
    group.add(windowMesh);

    // Single active TCP particle meshes
    const activeTCPPacket = new THREE.Mesh(packetGeom, packetMat);
    const activeTCPAck = new THREE.Mesh(ackGeom, ackMat);
    activeTCPPacket.visible = false;
    activeTCPAck.visible = false;
    group.add(activeTCPPacket, activeTCPAck);

    // Active UDP streams (multiple pulsing particles)
    const udpParticlesCount = 6;
    const udpParticles = [];
    for (let i = 0; i < udpParticlesCount; i++) {
      const p = new THREE.Mesh(packetGeom, packetMat);
      p.userData = { progress: i / udpParticlesCount, isActive: false };
      p.visible = false;
      group.add(p);
      udpParticles.push(p);
    }

    // Packet Disintegration particle explosion system
    const sparksCount = 20;
    const sparkGeom = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparksCount * 3);
    const sparkVelocities = [];
    for (let i = 0; i < sparksCount; i++) {
      sparkPositions[i*3] = 0;
      sparkPositions[i*3+1] = 0;
      sparkPositions[i*3+2] = 0;
      sparkVelocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.04,
        (Math.random() - 0.5) * 0.04,
        (Math.random() - 0.5) * 0.04
      ));
    }
    sparkGeom.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
    const sparkPoints = new THREE.Points(sparkGeom, new THREE.PointsMaterial({ color: 0xef4444, size: 0.05 }));
    sparkPoints.visible = false;
    group.add(sparkPoints);

    // --- 4. STREAM/TRANSMIT TRIGGERS ---

    // --- 5. MAIN ANIMATION LOOP ---
    let frameCount = 0;

    const animate = () => {
      frameCount += 1.2 * speed;
      controls.update();

      // TCP Simulation state machine
      if (protocolMode === 'tcp') {
        windowMesh.visible = isTransmitting;
        
        if (isTransmitting && isPlaying) {
          tcpTimer += 1.5 * speed;

          if (tcpState === 'idle') {
            tcpState = 'sending';
            tcpTimer = 0;
            tcpProgress = 0;
          } 
          
          else if (tcpState === 'sending') {
            activeTCPPacket.visible = true;
            activeTCPAck.visible = false;
            
            tcpProgress = Math.min(tcpTimer / 100, 1.0);
            
            // Interpolate packet position
            activeTCPPacket.position.lerpVectors(
              senderTower.userData.tipPos, 
              receiverTower.userData.tipPos, 
              tcpProgress
            );

            // Inject force packet drop trigger
            if (forcePacketDrop && tcpProgress > 0.45 && tcpProgress < 0.55) {
              tcpState = 'dropped';
              tcpTimer = 0;
              activeTCPPacket.visible = false;
              setForcePacketDrop(false);
              
              // Trigger explosion particles at dropped location
              sparkPoints.position.copy(activeTCPPacket.position);
              const pos = sparkPoints.geometry.attributes.position.array;
              for (let i = 0; i < sparksCount; i++) {
                pos[i*3] = 0; pos[i*3+1] = 0; pos[i*3+2] = 0;
              }
              sparkPoints.geometry.attributes.position.needsUpdate = true;
              sparkPoints.visible = true;
              
              setTelemetryLogs(prev => [`[LOST] Frame F${tcpFrameIdx} dropped due to channel noise. Waiting for Timeout!`, ...prev.slice(0, 4)]);
            }

            if (tcpProgress >= 1.0) {
              tcpState = 'acking';
              tcpTimer = 0;
              tcpProgress = 0;
              setTelemetryLogs(prev => [`[RECV] Frame F${tcpFrameIdx} reached. Replying with ACK${tcpFrameIdx + 1}.`, ...prev.slice(0, 4)]);
            }
          } 
          
          else if (tcpState === 'dropped') {
            // Animate disintegrating particles fading out
            if (sparkPoints.visible) {
              const pos = sparkPoints.geometry.attributes.position.array;
              for (let i = 0; i < sparksCount; i++) {
                pos[i*3] += sparkVelocities[i].x;
                pos[i*3+1] += sparkVelocities[i].y;
                pos[i*3+2] += sparkVelocities[i].z;
              }
              sparkPoints.geometry.attributes.position.needsUpdate = true;
              if (tcpTimer > 40) sparkPoints.visible = false;
            }

            // Simulate sender countdown
            if (tcpTimer > 120) {
              tcpState = 'timeout';
              tcpTimer = 0;
              setTelemetryLogs(prev => [`[TIMEOUT] Expired! Retransmitting lost frame F${tcpFrameIdx}...`, ...prev.slice(0, 4)]);
            }
          } 
          
          else if (tcpState === 'timeout') {
            tcpState = 'sending';
            tcpTimer = 0;
            tcpProgress = 0;
          } 
          
          else if (tcpState === 'acking') {
            activeTCPAck.visible = true;
            activeTCPPacket.visible = false;
            
            tcpProgress = Math.min(tcpTimer / 100, 1.0);
            
            // Interpolate ACK backwards
            activeTCPAck.position.lerpVectors(
              receiverTower.userData.tipPos, 
              senderTower.userData.tipPos, 
              tcpProgress
            );

            if (tcpProgress >= 1.0) {
              activeTCPAck.visible = false;
              
              // Slide TCP Window forward
              tcpFrameIdx++;
              setTelemetryLogs(prev => [`[ACK] Sender received ACK${tcpFrameIdx}. Sliding window forward.`, ...prev.slice(0, 4)]);
              
              if (tcpFrameIdx >= 4) {
                setIsTransmitting(false);
                tcpState = 'idle';
                setTelemetryLogs(prev => ['[SUCCESS] Reliable TCP communication completed.', ...prev.slice(0, 4)]);
              } else {
                // Adjust window 3D box position
                windowMesh.position.x += 1.0;
                tcpState = 'sending';
              }
              tcpTimer = 0;
              tcpProgress = 0;
            }
          }
        } else {
          activeTCPPacket.visible = false;
          activeTCPAck.visible = false;
        }
      }

      // UDP high-speed continuous stream
      else {
        windowMesh.visible = false;
        activeTCPPacket.visible = false;
        activeTCPAck.visible = false;

        if (isTransmitting && isPlaying) {
          udpParticles.forEach(p => {
            p.visible = true;
            p.userData.progress += 0.006 * speed;
            if (p.userData.progress > 1.0) {
              p.userData.progress = 0;
              // Push logging details rapidly
              const mockSeq = Math.floor(Math.random() * 900) + 100;
              setTelemetryLogs(prev => [`[STREAM] Datagram sent. Port: 53. Seq: ${mockSeq}`, ...prev.slice(0, 4)]);
            }
            p.position.lerpVectors(
              senderTower.userData.tipPos, 
              receiverTower.userData.tipPos, 
              p.userData.progress
            );
          });
        } else {
          udpParticles.forEach(p => p.visible = false);
        }
      }

      // Tower beacon pulses
      senderTower.children[4].scale.setScalar(1.0 + Math.sin(frameCount * 0.15) * 0.15);
      receiverTower.children[4].scale.setScalar(1.0 + Math.sin(frameCount * 0.15 + Math.PI) * 0.15);

      // Rotate scene slowly
      group.rotation.y = Math.sin(frameCount * 0.002) * 0.15;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      camera.aspect = w / 280;
      camera.updateProjectionMatrix();
      renderer.setSize(w, 280);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
    };
  }, [protocolMode, isTransmitting, isPlaying, speed]);

  const handleTransmit = () => {
    setIsTransmitting(true);
    windowMeshPositionInit();
    setTelemetryLogs(protocolMode === 'tcp' 
      ? ['[TCP] Commencing reliable handshake...', '[TCP] Sliding window size = 4 frames'] 
      : ['[UDP] Commencing streaming pipelines...', '[UDP] Rapid-fire sequence active.']
    );
  };

  // Reset 3D mesh window coordinates
  const windowMeshPositionInit = () => {
    // We would fetch or reset the box coordinates here if available
  };

  const resetScene = () => {
    setIsTransmitting(false);
    setForcePacketDrop(false);
    setTelemetryLogs(['Simulation reset. Standing by.']);
    setWalkthroughStep(0);
  };

  return (
    <div ref={containerRef} className="w-full flex flex-col gap-4 relative">
      
      {/* Subject controller toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white/2 border border-white/5 p-3 rounded-xl z-10">
        
        {/* Toggle mode picks */}
        <div className="flex bg-white/2 rounded-lg border border-white/5 p-0.5 text-xs font-orbitron">
          <button
            onClick={() => { setProtocolMode('tcp'); resetScene(); }}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${protocolMode === 'tcp' ? 'bg-neon-cyan/15 text-neon-cyan font-bold' : 'text-white/40 hover:text-white/80'}`}
          >
            <Zap className="w-3 h-3" />
            TCP Mode
          </button>
          <button
            onClick={() => { setProtocolMode('udp'); resetScene(); }}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${protocolMode === 'udp' ? 'bg-neon-purple/15 text-neon-purple font-bold' : 'text-white/40 hover:text-white/80'}`}
          >
            <Send className="w-3 h-3" />
            UDP Mode
          </button>
        </div>

        {/* Retransmissions & Launcher buttons */}
        <div className="flex items-center gap-2">
          {protocolMode === 'tcp' && (
            <button
              onClick={() => setForcePacketDrop(true)}
              disabled={!isTransmitting || tcpState !== 'sending'}
              className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/25 text-red-400 hover:bg-red-500/20 hover:border-red-500 transition-all text-[10px] font-orbitron uppercase flex items-center gap-1.5 cursor-pointer disabled:opacity-30"
              title="Force dynamic packet collision drop"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Drop Next Packet</span>
            </button>
          )}

          <button
            onClick={handleTransmit}
            disabled={isTransmitting}
            className="px-4 py-1.5 rounded-lg bg-white/3 border border-white/10 text-white/80 hover:bg-neon-cyan/15 hover:border-neon-cyan hover:text-neon-cyan transition-all text-[10px] font-orbitron uppercase flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
          >
            <Send className="w-3 h-3" />
            <span>Transmit</span>
          </button>
        </div>

      </div>

      {/* Render 3D Canvas */}
      <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#030112]/90 h-[280px]">
        <canvas ref={canvasRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />

        {/* Live telemetry console overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-space-black/90 border border-white/5 p-3 rounded-xl max-h-[85px] overflow-hidden font-mono text-[9px] text-white/50 flex flex-col gap-1 leading-normal select-none pointer-events-none backdrop-blur-sm z-20">
          <div className="text-[8px] font-orbitron text-neon-cyan font-bold tracking-widest uppercase mb-0.5 flex items-center gap-1">
            <Cpu className="w-3 h-3 text-neon-cyan" />
            <span>Telemetry Stream Logs</span>
          </div>
          {telemetryLogs.map((log, idx) => (
            <div key={idx} className={`truncate ${log.includes('LOST') || log.includes('TIMEOUT') ? 'text-red-400 font-semibold' : log.includes('ACK') || log.includes('SUCCESS') ? 'text-green-400 font-semibold' : ''}`}>
              {log}
            </div>
          ))}
        </div>

        {/* WebXR instruction hint */}
        <div className="absolute top-4 right-4 text-[9px] font-orbitron text-white/35 flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
          <span>DRAG CAMERA TO VIEW 3D CHANNELS</span>
        </div>
      </div>

      {/* Guided Walkthrough Widget */}
      <div className="glass-panel p-4 rounded-xl border border-white/5 flex flex-col gap-3 font-sans text-xs">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="font-orbitron font-bold text-[10px] text-neon-cyan tracking-wider uppercase flex items-center gap-1">
            <Info className="w-4 h-4" />
            Walkthrough Mode (Step {walkthroughStep + 1} of {steps.length})
          </span>
          <div className="flex gap-1.5">
            <button
              onClick={() => setWalkthroughStep(prev => Math.max(0, prev - 1))}
              disabled={walkthroughStep === 0}
              className="px-2 py-1 bg-white/3 border border-white/5 rounded text-[10px] text-white/50 hover:text-white disabled:opacity-30 cursor-pointer"
            >
              PREV
            </button>
            <button
              onClick={() => setWalkthroughStep(prev => Math.min(steps.length - 1, prev + 1))}
              disabled={walkthroughStep === steps.length - 1}
              className="px-2 py-1 bg-white/3 border border-white/5 rounded text-[10px] text-white/50 hover:text-white disabled:opacity-30 cursor-pointer"
            >
              NEXT
            </button>
          </div>
        </div>
        <div>
          <p className="font-orbitron text-[11px] font-bold text-white mb-0.5">{steps[walkthroughStep].title}</p>
          <p className="text-white/60 leading-relaxed">{steps[walkthroughStep].desc}</p>
        </div>
      </div>

    </div>
  );
}
