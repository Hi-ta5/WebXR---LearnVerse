import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Play, Pause, RotateCcw, Info, Plus, Trash2, Database, Cpu } from 'lucide-react';

export default function DataStructureScene({ isPlaying = true, speed = 1 }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [activeDs, setActiveDs] = useState('stack'); // stack, queue
  const [items, setItems] = useState([45, 12, 89]);
  const [telemetryLogs, setTelemetryLogs] = useState([]);
  const [hoverInfo, setHoverInfo] = useState('');
  const [alertInfo, setAlertInfo] = useState('');
  const [walkthroughStep, setWalkthroughStep] = useState(0);

  const steps = [
    { title: "Select Data Structure", desc: "Toggle between LIFO Stack (Last-In First-Out) and FIFO Queue (First-In First-Out) above." },
    { title: "Push/Enqueue Nodes", desc: "Click PUSH/ENQUEUE to watch glowing 3D data slabs animate into the memory allocation pipeline." },
    { title: "Pop/Dequeue Nodes", desc: "Click POP/DEQUEUE to delete data nodes from the structural memory containers." }
  ];

  useEffect(() => {
    setTelemetryLogs(activeDs === 'stack' 
      ? ['[SYSTEM] LIFO Stack memory active.', '[MEM] Stack current size: 3 nodes. Capacity: 8.'] 
      : ['[SYSTEM] FIFO Queue pipeline active.', '[MEM] Queue current size: 3 nodes. Capacity: 8.']
    );
  }, [activeDs]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let frameId;

    // --- 1. THREE.JS SETUP ---
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

    // Lights
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

    // --- 2. STRUCTURAL MEMORY CONTAINERS ---
    const stackContainerMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.1, wireframe: true });
    
    // Stack Vertical column frame
    const stackCol = new THREE.Mesh(new THREE.BoxGeometry(1.6, 3.4, 0.8), stackContainerMat);
    stackCol.position.set(0, 0.5, 0);
    group.add(stackCol);

    // Queue Horizontal pipeline tube
    const queueTube = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.8, 0.8), stackContainerMat);
    queueTube.position.set(0, 0, 0);
    group.add(queueTube);

    // --- 3. DYNAMIC DATA SLABS ---
    const slabGeom = new THREE.BoxGeometry(1.2, 0.32, 0.5);
    const slabMeshes = [];

    const createSlabMat = (idx) => {
      const colors = [0xbc3bf0, 0x00f0ff, 0x22c55e, 0xeab308, 0x3b82f6, 0xef4444, 0xff823b, 0xffffff];
      const color = colors[idx % colors.length];
      return new THREE.MeshStandardMaterial({ color, roughness: 0.1, metalness: 0.8, emissive: color, emissiveIntensity: 0.15 });
    };

    items.forEach((val, idx) => {
      const mesh = new THREE.Mesh(slabGeom, createSlabMat(idx));
      mesh.userData = { val, index: idx };
      group.add(mesh);
      slabMeshes.push(mesh);
    });

    // --- 4. ANIMATION TIMELINES ---
    let frameCount = 0;

    const animate = () => {
      frameCount += 1.2 * speed;
      controls.update();

      // Show/Hide containers
      stackCol.visible = activeDs === 'stack';
      queueTube.visible = activeDs === 'queue';

      // Animate slabs positioning with custom physics bounce
      slabMeshes.forEach((mesh, idx) => {
        mesh.visible = true;

        if (activeDs === 'stack') {
          // LIFO Stack vertical alignment: stack slabs from bottom (-0.8) upwards (offset 0.38)
          const targetY = -0.8 + idx * 0.38;
          mesh.position.y = THREE.MathUtils.lerp(mesh.position.y, targetY, 0.1 * speed);
          mesh.position.x = THREE.MathUtils.lerp(mesh.position.x, 0, 0.1 * speed);
          mesh.position.z = THREE.MathUtils.lerp(mesh.position.z, 0, 0.1 * speed);
        } else {
          // FIFO Queue horizontal alignment: align slabs from front (left = -1.6) to back (right)
          const targetX = -1.6 + idx * 1.0;
          mesh.position.x = THREE.MathUtils.lerp(mesh.position.x, targetX, 0.1 * speed);
          mesh.position.y = THREE.MathUtils.lerp(mesh.position.y, 0, 0.1 * speed);
          mesh.position.z = THREE.MathUtils.lerp(mesh.position.z, 0, 0.1 * speed);
        }

        // Pulse glowing intensity gently
        mesh.material.emissiveIntensity = 0.15 + Math.sin(frameCount * 0.08 + idx) * 0.05;
      });

      // Slowly rotate structure to display 3D depth
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
      const intersects = raycaster.intersectObjects(slabMeshes);

      if (intersects.length > 0) {
        const obj = intersects[0].object;
        setHoverInfo(`DATA NODE: INDEX [${obj.userData.index}] | ALLOCATED VALUE: ${obj.userData.val} | MEM_ADDR: 0x7FFF5FB${obj.userData.val.toString(16).toUpperCase()} | Click action keys below to mutate.`);
      } else {
        setHoverInfo('');
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
  }, [activeDs, items, isPlaying, speed]);

  const handlePush = () => {
    if (items.length >= 8) {
      setAlertInfo('MEM WARNING: Stack capacity overflow limits allocation (max 8 nodes).');
      setTimeout(() => setAlertInfo(''), 3000);
      return;
    }
    const val = Math.floor(Math.random() * 90) + 10;
    setItems(prev => [...prev, val]);
    setTelemetryLogs(prev => [`[ALLOC] Pushed value ${val} to memory index [${items.length}].`, ...prev.slice(0, 3)]);
  };

  const handlePop = () => {
    if (items.length === 0) {
      setAlertInfo('MEM WARNING: Memory register underflow. No nodes to pop.');
      setTimeout(() => setAlertInfo(''), 3000);
      return;
    }
    const popped = items[items.length - 1];
    setItems(prev => prev.slice(0, -1));
    setTelemetryLogs(prev => [`[FREE] Popped value ${popped} from memory index [${items.length - 1}].`, ...prev.slice(0, 3)]);
  };

  const resetScene = () => {
    setItems([45, 12, 89]);
    setAlertInfo('Simulation reset. Memory registers flushed.');
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
            onClick={() => { setActiveDs('stack'); resetScene(); }}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${activeDs === 'stack' ? 'bg-neon-cyan/15 text-neon-cyan font-bold' : 'text-white/40 hover:text-white/80'}`}
          >
            <Cpu className="w-3.5 h-3.5" />
            LIFO Stack
          </button>
          <button
            onClick={() => { setActiveDs('queue'); resetScene(); }}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${activeDs === 'queue' ? 'bg-neon-purple/15 text-neon-purple font-bold' : 'text-white/40 hover:text-white/80'}`}
          >
            <Database className="w-3.5 h-3.5" />
            FIFO Queue
          </button>
        </div>

        {/* Dynamic stack push/pop action items */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePush}
            className="px-3 py-1.5 rounded-lg bg-white/3 border border-white/10 text-white/85 hover:bg-neon-cyan/15 hover:border-neon-cyan hover:text-neon-cyan transition-all text-[9px] font-orbitron uppercase flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{activeDs === 'stack' ? 'Push Node' : 'Enqueue'}</span>
          </button>
          <button
            onClick={handlePop}
            className="px-3 py-1.5 rounded-lg bg-white/3 border border-white/10 text-white/85 hover:bg-red-500/15 hover:border-red-500 hover:text-red-400 transition-all text-[9px] font-orbitron uppercase flex items-center gap-1.5 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{activeDs === 'stack' ? 'Pop Node' : 'Dequeue'}</span>
          </button>

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

        {/* Critical telemetry alerts bar */}
        {alertInfo && (
          <div className="absolute top-16 left-4 right-4 bg-red-500/10 border border-red-500/35 p-3 rounded-xl text-[10px] text-red-400 font-orbitron animate-pulse flex items-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.15)] z-20">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>{alertInfo}</span>
          </div>
        )}

        {/* Live telemetry console overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-space-black/90 border border-white/5 p-3 rounded-xl max-h-[85px] overflow-hidden font-mono text-[9px] text-white/50 flex flex-col gap-1 leading-normal select-none pointer-events-none backdrop-blur-sm z-20">
          <div className="text-[8px] font-orbitron text-neon-cyan font-bold tracking-widest uppercase mb-0.5 flex items-center gap-1">
            <Cpu className="w-3 h-3 text-neon-cyan" />
            <span>Memory Controller Log</span>
          </div>
          {telemetryLogs.map((log, idx) => (
            <div key={idx} className={`truncate ${log.includes('FREE') ? 'text-red-400 font-semibold' : log.includes('ALLOC') ? 'text-green-400 font-semibold' : ''}`}>
              {log}
            </div>
          ))}
        </div>

        {/* WebXR instruction hint */}
        <div className="absolute top-4 right-4 text-[9px] font-orbitron text-white/35 flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
          <span>DRAG CAMERA TO ROTATE PIPELINES</span>
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
