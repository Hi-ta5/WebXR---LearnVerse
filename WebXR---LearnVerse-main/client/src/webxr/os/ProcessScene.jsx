import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Play, Pause, RotateCcw, Info, Send, ShieldAlert, Cpu } from 'lucide-react';

export default function ProcessScene({ isPlaying = true, speed = 1 }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [labMode, setLabMode] = useState('pcb'); // pcb, deadlock
  const [isCycleActive, setIsCycleActive] = useState(false);
  const [telemetryLogs, setTelemetryLogs] = useState([]);
  const [hoverInfo, setHoverInfo] = useState('');
  const [walkthroughStep, setWalkthroughStep] = useState(0);

  const steps = [
    { title: "Select Lab Mode", desc: "Toggle between PCB Execution Lifecycle and Deadlock Graph Analyzer above." },
    { title: "Process Context Swap", desc: "In PCB mode, watch 3D process blocks slide from Ready queue into the CPU core." },
    { title: "Inject Deadlock Cycles", desc: "In Deadlock mode, click 'Inject Cycle'. Watch nodes and directed links flash red, illustrating circular wait." }
  ];

  useEffect(() => {
    setIsCycleActive(false);
    setTelemetryLogs(labMode === 'pcb' 
      ? ['[SYSTEM] Process Manager active.', '[SYSTEM] Scheduler scanning Ready Queue...'] 
      : ['[SYSTEM] Directed Resource Graph active.', '[SYSTEM] banker scanning for cycle deadlocks...']
    );
  }, [labMode]);

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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
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

    // --- 2. PCB LIFE-CYCLE MODEL ---
    const pcbGroup = new THREE.Group();
    group.add(pcbGroup);

    // Central CPU core block (Rotating 3D motherboard chip)
    const cpuGeom = new THREE.BoxGeometry(1.2, 0.2, 1.2);
    const cpuMat = new THREE.MeshStandardMaterial({ color: 0xbc3bf0, roughness: 0.1, metalness: 0.8, emissive: 0xbc3bf0, emissiveIntensity: 0.2 });
    const cpuCore = new THREE.Mesh(cpuGeom, cpuMat);
    cpuCore.position.set(2, 0, 0);
    pcbGroup.add(cpuCore);

    // Dynamic process holographic cards (spheres/boxes sliding from left to CPU)
    const pcbCount = 3;
    const pcbs = [];
    const pcbGeom = new THREE.BoxGeometry(0.5, 0.3, 0.08);
    const pcbMat1 = new THREE.MeshStandardMaterial({ color: 0x00f0ff, roughness: 0.1, metalness: 0.7 });
    const pcbMat2 = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.1, metalness: 0.7 });
    const pcbMat3 = new THREE.MeshStandardMaterial({ color: 0x22c55e, roughness: 0.1, metalness: 0.7 });
    const pcbMats = [pcbMat1, pcbMat2, pcbMat3];

    for (let i = 0; i < pcbCount; i++) {
      const card = new THREE.Mesh(pcbGeom, pcbMats[i]);
      card.position.set(-3.2 + i * 1.2, 0, 0);
      card.userData = { 
        index: i, 
        baseX: -3.2 + i * 1.2,
        progress: 0,
        pid: 100 + i * 4,
        state: 'READY'
      };
      pcbGroup.add(card);
      pcbs.push(card);
    }

    // --- 3. DEADLOCK RESOURCE CONSTALLATION ---
    const deadlockGroup = new THREE.Group();
    group.add(deadlockGroup);

    // 4 Nodes arranged in a rectangle (2 Processes, 2 Resources)
    // Processes = Sphere nodes (Cyan)
    // Resources = Box nodes (Purple)
    const dlNodes = [
      { x: -1.8, y: 0.3, z: -1.2, isProcess: true, label: 'P1 (Process 1)' },
      { x: 1.8, y: 0.3, z: -1.2, isProcess: false, label: 'R1 (Resource 1)' },
      { x: 1.8, y: 0.3, z: 1.2, isProcess: true, label: 'P2 (Process 2)' },
      { x: -1.8, y: 0.3, z: 1.2, isProcess: false, label: 'R2 (Resource 2)' }
    ];

    const dlMeshes = [];
    const sphereGeom = new THREE.SphereGeometry(0.24, 32, 32);
    const boxGeom = new THREE.BoxGeometry(0.35, 0.35, 0.35);

    const normalProcMat = new THREE.MeshStandardMaterial({ color: 0x00f0ff, roughness: 0.1, metalness: 0.8, emissive: 0x00f0ff, emissiveIntensity: 0.1 });
    const normalResMat = new THREE.MeshStandardMaterial({ color: 0xbc3bf0, roughness: 0.1, metalness: 0.8, emissive: 0xbc3bf0, emissiveIntensity: 0.1 });
    const alarmMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.1, metalness: 0.8, emissive: 0xef4444, emissiveIntensity: 0.5 });

    dlNodes.forEach((n, idx) => {
      const mesh = new THREE.Mesh(n.isProcess ? sphereGeom : boxGeom, n.isProcess ? normalProcMat : normalResMat);
      mesh.position.set(n.x, n.y, n.z);
      mesh.userData = { index: idx, dlInfo: n };
      deadlockGroup.add(mesh);
      dlMeshes.push(mesh);
    });

    // Create directed light arrows connecting graph elements
    const createArrowBeam = (fromIdx, toIdx) => {
      const f = dlNodes[fromIdx];
      const t = dlNodes[toIdx];
      const geom = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(f.x, f.y, f.z),
        new THREE.Vector3(t.x, t.y, t.z)
      ]);
      const arrowMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15 });
      const line = new THREE.Line(geom, arrowMat);
      
      // Moving signal dot along link
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 16), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      dot.userData = { progress: Math.random(), from: f, to: t };
      deadlockGroup.add(dot);
      
      return { line, dot };
    };

    // Standard healthy arrows: 
    // R2 is allocated to P1: R2 -> P1
    // P1 requests R1: P1 -> R1
    // R1 is allocated to P2: R1 -> P2
    const arrowLinks = [
      createArrowBeam(3, 0), // R2 -> P1
      createArrowBeam(0, 1), // P1 -> R1
      createArrowBeam(1, 2)  // R1 -> P2
    ];

    arrowLinks.forEach(a => deadlockGroup.add(a.line));

    // Dynamic deadlock cycle arrow (injected by user: P2 requests R2)
    const cycleArrow = createArrowBeam(2, 3); // P2 -> R2
    cycleArrow.line.visible = false;
    cycleArrow.dot.visible = false;
    deadlockGroup.add(cycleArrow.line, cycleArrow.dot);

    // --- 6. ANIMATION LOOPS ---
    let frameCount = 0;

    const animate = () => {
      frameCount += 1.2 * speed;
      controls.update();

      // Show/Hide modes
      pcbGroup.visible = labMode === 'pcb';
      deadlockGroup.visible = labMode === 'deadlock';

      if (isPlaying) {
        // PCB context lifecycle swapping
        if (labMode === 'pcb') {
          cpuCore.rotation.y += 0.01 * speed;
          
          pcbs.forEach((card, idx) => {
            // Cards queue up and context switch sequentially
            card.userData.progress += 0.003 * speed;
            if (card.userData.progress > 1.0) {
              card.userData.progress = 0;
            }

            const p = card.userData.progress;
            
            // Phase 1: Wait/Ready Queue, sliding forward
            if (p < 0.4) {
              const subP = p / 0.4;
              card.position.x = card.userData.baseX + (1.2 * subP);
              card.userData.state = 'READY';
            } 
            // Phase 2: Enter CPU context execution
            else if (p < 0.8) {
              const subP = (p - 0.4) / 0.4;
              card.position.lerpVectors(new THREE.Vector3(2, 0.4, 0), new THREE.Vector3(2, 0.1, 0), subP);
              card.userData.state = 'RUNNING';
              
              if (frameCount % 45 === 0) {
                // Log context swap registers
                const rA = Math.floor(Math.random() * 899) + 100;
                setTelemetryLogs(prev => [`[CONTEXT] PID ${card.userData.pid} executing. RegAX: ${rA}`, ...prev.slice(0, 4)]);
              }
            } 
            // Phase 3: Terminated/Swapped out
            else {
              const subP = (p - 0.8) / 0.2;
              card.position.lerpVectors(new THREE.Vector3(2, 0.1, 0), new THREE.Vector3(3.6, -0.6, 0), subP);
              card.userData.state = 'WAITING';
            }
          });
        }

        // Deadlock directed graph analyzer
        if (labMode === 'deadlock') {
          cycleArrow.line.visible = isCycleActive;
          cycleArrow.dot.visible = isCycleActive;

          // Pulse nodes in flashing red if deadlock cycle is active
          dlMeshes.forEach((mesh, idx) => {
            if (isCycleActive) {
              mesh.material = alarmMat;
              // Phased flashing alert effect
              const scale = 1.0 + Math.sin(frameCount * 0.2) * 0.08;
              mesh.scale.set(scale, scale, scale);
              
              if (frameCount % 60 === 0) {
                setTelemetryLogs(prev => ['[ALARM] banker algorithm: Safe State False! Cycle detected: P1->R1->P2->R2->P1.', ...prev.slice(0, 4)]);
              }
            } else {
              mesh.material = dlNodes[idx].isProcess ? normalProcMat : normalResMat;
              mesh.scale.set(1, 1, 1);
            }
          });

          // Animate directed dot flows along arrows
          const animateArrowDot = (dot) => {
            dot.userData.progress += 0.005 * speed;
            if (dot.userData.progress > 1.0) dot.userData.progress = 0;
            
            const f = dot.userData.from;
            const t = dot.userData.to;
            dot.position.lerpVectors(new THREE.Vector3(f.x, f.y, f.z), new THREE.Vector3(t.x, t.y, t.z), dot.userData.progress);
            
            // Dynamic color/glow for alarm conditions
            if (isCycleActive) {
              dot.material.color.setHex(0xef4444);
            } else {
              dot.material.color.setHex(0xffffff);
            }
          };

          arrowLinks.forEach(a => animateArrowDot(a.dot));
          if (isCycleActive) animateArrowDot(cycleArrow.dot);
        }
      }

      // Rotate group gently to showcase 3D mesh depth
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
      
      if (labMode === 'pcb') {
        const intersects = raycaster.intersectObjects(pcbs);
        if (intersects.length > 0) {
          const card = intersects[0].object;
          setHoverInfo(`PCB RECORD: PID ${card.userData.pid} | CPU REGISTERS: AX, BX | STATE: ${card.userData.state} | MEM: 4MB | PRIORITY: HIGH.`);
        } else {
          setHoverInfo('');
        }
      } else {
        const intersects = raycaster.intersectObjects(dlMeshes);
        if (intersects.length > 0) {
          const dlNode = intersects[0].object.userData.dlInfo;
          setHoverInfo(`GRAPH NODE: ${dlNode.label} | Click 'Inject Cycle' to trigger resource deadlocks.`);
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
  }, [labMode, isCycleActive, isPlaying, speed]);

  const handleCycleTrigger = () => {
    setIsCycleActive(!isCycleActive);
    if (!isCycleActive) {
      setTelemetryLogs(prev => [
        '[INJECT] Process P2 requests Resource R2.',
        '[DEADLOCK] banker: Circular Wait detected!',
        ...prev.slice(0, 3)
      ]);
    } else {
      setTelemetryLogs(prev => [
        '[RESTORE] Deadlock resolved. Graph safe.',
        ...prev.slice(0, 3)
      ]);
    }
  };

  const resetScene = () => {
    setIsCycleActive(false);
    setTelemetryLogs(['Simulation reset. Safe State OK.']);
    setWalkthroughStep(0);
  };

  return (
    <div ref={containerRef} className="w-full flex flex-col gap-4 relative">
      
      {/* Subject controller toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white/2 border border-white/5 p-3 rounded-xl z-10">
        
        {/* Toggle mode picks */}
        <div className="flex bg-white/2 rounded-lg border border-white/5 p-0.5 text-xs font-orbitron">
          <button
            onClick={() => { setLabMode('pcb'); resetScene(); }}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${labMode === 'pcb' ? 'bg-neon-cyan/15 text-neon-cyan font-bold' : 'text-white/40 hover:text-white/80'}`}
          >
            <Cpu className="w-3.5 h-3.5" />
            PCB LifeCycle
          </button>
          <button
            onClick={() => { setLabMode('deadlock'); resetScene(); }}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${labMode === 'deadlock' ? 'bg-neon-purple/15 text-neon-purple font-bold' : 'text-white/40 hover:text-white/80'}`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            Deadlocks
          </button>
        </div>

        {/* Retransmissions & Launcher buttons */}
        <div className="flex items-center gap-2">
          {labMode === 'deadlock' && (
            <button
              onClick={handleCycleTrigger}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-orbitron uppercase flex items-center gap-1.5 cursor-pointer transition-all border ${
                isCycleActive 
                  ? 'bg-red-500/10 border-red-500 text-red-400 hover:bg-red-500/20' 
                  : 'bg-white/3 border-white/10 text-white hover:bg-white/10'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5 animate-pulse" />
              <span>{isCycleActive ? 'Resolve Cycle' : 'Inject Cycle'}</span>
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
            <span>Process Controller Telemetry</span>
          </div>
          {telemetryLogs.map((log, idx) => (
            <div key={idx} className={`truncate ${log.includes('ALARM') || log.includes('DEADLOCK') ? 'text-red-400 font-semibold' : log.includes('CONTEXT') || log.includes('SUCCESS') ? 'text-green-400 font-semibold' : ''}`}>
              {log}
            </div>
          ))}
        </div>

        {/* WebXR instruction hint */}
        <div className="absolute top-4 right-4 text-[9px] font-orbitron text-white/35 flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
          <span>DRAG CAMERA TO VIEW 3D MULTI-THREADING</span>
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
