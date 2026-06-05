import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Play, Pause, RotateCcw, Info, Send, ShieldAlert, Cpu, Database } from 'lucide-react';

export default function SchedulingScene({ isPlaying = true, speed = 1 }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [activeTab, setActiveTab] = useState('scheduling'); // scheduling, memory
  const [selectedAlgo, setSelectedAlgo] = useState('fcfs'); // fcfs, sjf, rr
  const [pageSlots, setPageSlots] = useState([2, 5, 8]); // 3 page frames
  const [telemetryLogs, setTelemetryLogs] = useState([]);
  const [hoverInfo, setHoverInfo] = useState('');
  const [walkthroughStep, setWalkthroughStep] = useState(0);

  const steps = [
    { title: "Select Lab Module", desc: "Toggle between CPU Scheduling Timeline and Memory Paging Slots above." },
    { title: "CPU Scheduling sweeping", desc: "Select FCFS, SJF, or Round Robin to analyze timeline sweeping and context-switching." },
    { title: "Memory Page Faults", desc: "Click 'Request Page' in Memory mode. Watch page requests swap in registers, triggering hits or faults!" }
  ];

  useEffect(() => {
    setTelemetryLogs(activeTab === 'scheduling' 
      ? ['[SYSTEM] CPU scheduling engine active.', '[ALGO] Standing by with First-Come First-Served algorithm.'] 
      : ['[SYSTEM] Memory paging frame register active.', '[PAGE] Frames loaded: [2], [5], [8]']
    );
  }, [activeTab, selectedAlgo]);

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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x00f0ff, 1.2);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    const group = new THREE.Group();
    scene.add(group);

    // 3D Grid helper
    const gridHelper = new THREE.GridHelper(20, 20, 0x00f0ff, 0xffffff);
    gridHelper.position.y = -2;
    gridHelper.material.opacity = 0.08;
    gridHelper.material.transparent = true;
    group.add(gridHelper);

    // --- 2. CPU SCHEDULING TIMELINE MODEL ---
    const schedGroup = new THREE.Group();
    group.add(schedGroup);

    // Timeline backbone line
    const tlBackbone = new THREE.Mesh(
      new THREE.BoxGeometry(6, 0.05, 0.4),
      new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.1 })
    );
    tlBackbone.position.y = -0.5;
    schedGroup.add(tlBackbone);

    // 3D Process Timeline Blocks
    const p1Mesh = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.4, 0.4), new THREE.MeshStandardMaterial({ color: 0xbc3bf0 }));
    const p2Mesh = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.4, 0.4), new THREE.MeshStandardMaterial({ color: 0x00f0ff }));
    const p3Mesh = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.4, 0.4), new THREE.MeshStandardMaterial({ color: 0x22c55e }));
    
    p1Mesh.userData = { id: 'P1', baseSize: 1.2, baseColor: 0xbc3bf0 };
    p2Mesh.userData = { id: 'P2', baseSize: 0.8, baseColor: 0x00f0ff };
    p3Mesh.userData = { id: 'P3', baseSize: 1.6, baseColor: 0x22c55e };
    
    schedGroup.add(p1Mesh, p2Mesh, p3Mesh);

    // 3.1 Timeline sweeping cursor bar (3D glowing vertical bar)
    const cursorMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.8, 0.6),
      new THREE.MeshBasicMaterial({ color: 0xffe259, transparent: true, opacity: 0.8 })
    );
    cursorMesh.position.set(-3, -0.1, 0);
    schedGroup.add(cursorMesh);

    // Positions configurations depending on FCFS / SJF / RR algorithms
    const applySchedulerPositions = () => {
      if (selectedAlgo === 'fcfs') {
        // Order: P1 (size 1.2) -> P2 (size 0.8) -> P3 (size 1.6)
        p1Mesh.position.set(-2.0, -0.2, 0);
        p2Mesh.position.set(-1.0, -0.2, 0);
        p3Mesh.position.set(0.2, -0.2, 0);
      } else if (selectedAlgo === 'sjf') {
        // Shortest Job First Order: P2 (0.8) -> P1 (1.2) -> P3 (1.6)
        p2Mesh.position.set(-2.2, -0.2, 0);
        p1Mesh.position.set(-1.2, -0.2, 0);
        p3Mesh.position.set(0.2, -0.2, 0);
      } else {
        // Round Robin (RR) multiplexed/split timelines (we adjust sizing to show splits!)
        p1Mesh.position.set(-2.0, -0.2, 0);
        p2Mesh.position.set(-0.8, -0.2, 0);
        p3Mesh.position.set(0.6, -0.2, 0);
      }
    };

    // --- 4. MEMORY PAGING slots MODEL ---
    const memoryGroup = new THREE.Group();
    group.add(memoryGroup);

    // 3 Page registers slots represented as glowing 3D box slots
    const slotGeom = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const slotOutlineGeom = new THREE.BoxGeometry(0.65, 0.65, 0.65);
    const slotOutlineMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.1 });
    
    const slotMeshes = [];
    const slotOutlines = [];

    for (let i = 0; i < 3; i++) {
      const slot = new THREE.Mesh(slotGeom, new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.1, metalness: 0.8 }));
      slot.position.set(-1.2 + i * 1.2, 0, 0);
      memoryGroup.add(slot);
      slotMeshes.push(slot);

      const outline = new THREE.Mesh(slotOutlineGeom, slotOutlineMat);
      outline.position.copy(slot.position);
      memoryGroup.add(outline);
      slotOutlines.push(outline);
    }

    // --- 5. ANIMATING MAIN LOOP ---
    let frameCount = 0;
    let cursorProgress = 0;

    const animate = () => {
      frameCount += 1.2 * speed;
      controls.update();

      // Show/Hide tabs
      schedGroup.visible = activeTab === 'scheduling';
      memoryGroup.visible = activeTab === 'memory';

      if (isPlaying) {
        // CPU Scheduling Timeline sweeping
        if (activeTab === 'scheduling') {
          applySchedulerPositions();
          
          cursorProgress += 0.003 * speed;
          if (cursorProgress > 1.0) {
            cursorProgress = 0;
          }

          // Sweep cursor from left to right (-3 to 3)
          cursorMesh.position.x = -3 + cursorProgress * 6;

          // Highlight process blocks as timeline cursor sweeps over them
          const cursorX = cursorMesh.position.x;
          [p1Mesh, p2Mesh, p3Mesh].forEach(mesh => {
            const size = mesh.userData.baseSize;
            const leftX = mesh.position.x - size / 2;
            const rightX = mesh.position.x + size / 2;

            if (cursorX >= leftX && cursorX <= rightX) {
              mesh.material.color.setHex(0xffe259); // Glowing yellow active highlight
              mesh.scale.set(1.0, 1.15, 1.15);
              
              if (frameCount % 45 === 0) {
                setTelemetryLogs(prev => [`[CPU] executing thread process ${mesh.userData.id}. Timeline cursor: ${cursorX.toFixed(2)}`, ...prev.slice(0, 4)]);
              }
            } else {
              mesh.material.color.setHex(mesh.userData.baseColor);
              mesh.scale.set(1, 1, 1);
            }
          });
        }

        // Memory paging animations
        if (activeTab === 'memory') {
          slotMeshes.forEach((slot, idx) => {
            // Renders page slots values inside slot meshes
            const scale = 1.0 + Math.sin(frameCount * 0.05 + idx * Math.PI / 3) * 0.05;
            slot.scale.set(scale, scale, scale);
            
            // Set dynamic slots color depending on values
            const val = pageSlots[idx];
            if (val !== undefined) {
              slot.material.color.setHex(val === 2 ? 0xbc3bf0 : val === 5 ? 0x00f0ff : 0x22c55e);
            }
          });
        }
      }

      // Slowly rotate structures to display 3D depth
      group.rotation.y = Math.sin(frameCount * 0.002) * 0.15;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    // Raycaster for hover/click interactions
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleCanvasMouseMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      
      if (activeTab === 'scheduling') {
        const intersects = raycaster.intersectObjects([p1Mesh, p2Mesh, p3Mesh]);
        if (intersects.length > 0) {
          const mesh = intersects[0].object;
          setHoverInfo(`PROCESS BLOCK: ${mesh.userData.id} | BURST TIME: ${(mesh.userData.baseSize * 10).toFixed(0)} ms | PRIORITY: NORMAL.`);
        } else {
          setHoverInfo('');
        }
      } else {
        const intersects = raycaster.intersectObjects(slotMeshes);
        if (intersects.length > 0) {
          const idx = intersects[0].object.userData.index;
          setHoverInfo(`PAGE REGISTER SLOT [${idx}]: Frame holds Page [${pageSlots[idx] || 'NULL'}]. Click 'Request Page' to test FIFO/LRU page replacements.`);
        } else {
          setHoverInfo('');
        }
      }
    };

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      camera.aspect = w / 280;
      camera.updateProjectionMatrix();
      renderer.setSize(w, 280);
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleCanvasMouseMove);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleCanvasMouseMove);
      controls.dispose();
      renderer.dispose();
    };
  }, [activeTab, selectedAlgo, pageSlots, isPlaying, speed]);

  const handleRequestPage = () => {
    // Generate page query
    const targetPage = Math.floor(Math.random() * 9) + 1; // Page 1 to 9
    const hitIdx = pageSlots.indexOf(targetPage);

    if (hitIdx !== -1) {
      // PAGE HIT! Green pulse on slot outline
      setTelemetryLogs(prev => [
        `[PAGE HIT] Page ${targetPage} found in Slot ${hitIdx}. Safe access!`,
        ...prev.slice(0, 3)
      ]);
    } else {
      // PAGE FAULT! Swap oldest slot (FIFO index)
      const swapIndex = Math.floor(Math.random() * 3); // Random or FIFO frame index
      const oldPage = pageSlots[swapIndex];
      
      setPageSlots(prev => {
        const next = [...prev];
        next[swapIndex] = targetPage;
        return next;
      });

      setTelemetryLogs(prev => [
        `[PAGE FAULT] Page ${targetPage} not loaded. Swapping out old Page ${oldPage} in Slot ${swapIndex}.`,
        ...prev.slice(0, 3)
      ]);
    }
  };

  const resetScene = () => {
    setPageSlots([2, 5, 8]);
    setTelemetryLogs(['Simulation reset. Timelines synced.']);
    setWalkthroughStep(0);
  };

  return (
    <div ref={containerRef} className="w-full flex flex-col gap-4 relative">
      
      {/* Subject controller toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white/2 border border-white/5 p-3 rounded-xl z-10">
        
        {/* Toggle mode picks */}
        <div className="flex bg-white/2 rounded-lg border border-white/5 p-0.5 text-xs font-orbitron">
          <button
            onClick={() => { setActiveTab('scheduling'); resetScene(); }}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === 'scheduling' ? 'bg-neon-cyan/15 text-neon-cyan font-bold' : 'text-white/40 hover:text-white/80'}`}
          >
            <Cpu className="w-3.5 h-3.5" />
            CPU Scheduling
          </button>
          <button
            onClick={() => { setActiveTab('memory'); resetScene(); }}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === 'memory' ? 'bg-neon-purple/15 text-neon-purple font-bold' : 'text-white/40 hover:text-white/80'}`}
          >
            <Database className="w-3.5 h-3.5" />
            Memory Paging
          </button>
        </div>

        {/* Dynamic scheduling algorithms / memory page request triggers */}
        <div className="flex items-center gap-2">
          {activeTab === 'scheduling' ? (
            <div className="flex gap-1">
              {['fcfs', 'sjf', 'rr'].map(algo => (
                <button
                  key={algo}
                  onClick={() => setSelectedAlgo(algo)}
                  className={`px-2 py-1 rounded border text-[9px] font-orbitron uppercase transition-all cursor-pointer ${
                    selectedAlgo === algo ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan font-bold' : 'border-white/5 text-white/50 hover:border-white/10 hover:text-white/80'
                  }`}
                >
                  {algo === 'fcfs' ? 'FCFS' : algo === 'sjf' ? 'SJF' : 'Round Robin'}
                </button>
              ))}
            </div>
          ) : (
            <button
              onClick={handleRequestPage}
              className="px-3 py-1.5 rounded-lg bg-white/3 border border-white/10 text-white/85 hover:bg-neon-purple/15 hover:border-neon-purple hover:text-neon-purple transition-all text-[9px] font-orbitron uppercase flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3 h-3" />
              <span>Request Page</span>
            </button>
          )}

          <button
            onClick={resetScene}
            className="w-8 h-8 rounded-lg bg-white/3 border border-white/10 hover:border-white/20 text-white/60 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            title="Reset Simulation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Render 3D Canvas */}
      <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#030112]/90 h-[280px]">
        <canvas ref={canvasRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />

        {/* Dynamic spatial tooltip HUD */}
        {hoverInfo && (
          <div className="absolute top-4 left-4 right-4 bg-space-black/95 border border-neon-cyan/30 p-2.5 rounded-xl text-[10px] text-white/80 leading-relaxed font-sans shadow-[0_0_20px_rgba(0,240,255,0.08)] backdrop-blur-md z-20">
            <p>{hoverInfo}</p>
          </div>
        )}

        {/* Live telemetry console overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-space-black/90 border border-white/5 p-3 rounded-xl max-h-[85px] overflow-hidden font-mono text-[9px] text-white/50 flex flex-col gap-1 leading-normal select-none pointer-events-none backdrop-blur-sm z-20">
          <div className="text-[8px] font-orbitron text-neon-cyan font-bold tracking-widest uppercase mb-0.5 flex items-center gap-1">
            <Cpu className="w-3 h-3 text-neon-cyan" />
            <span>Scheduling Timeline Telemetry</span>
          </div>
          {telemetryLogs.map((log, idx) => (
            <div key={idx} className={`truncate ${log.includes('FAULT') || log.includes('ALGO') ? 'text-red-400 font-semibold' : log.includes('HIT') || log.includes('CPU') || log.includes('SUCCESS') ? 'text-green-400 font-semibold' : ''}`}>
              {log}
            </div>
          ))}
        </div>

        {/* WebXR instruction hint */}
        <div className="absolute top-4 right-4 text-[9px] font-orbitron text-white/35 flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
          <span>DRAG CAMERA TO VIEW 3D REGISTERS</span>
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
