import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Play, Pause, RotateCcw, Info, Send, ShieldAlert, Cpu } from 'lucide-react';

export default function TopologyScene({ selectedTopology = 'star', isPlaying = true, speed = 1 }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [activeTopology, setActiveTopology] = useState(selectedTopology);
  const [failedNodes, setFailedNodes] = useState([]); // indices of failed nodes
  const [senderNode, setSenderNode] = useState(0);
  const [receiverNode, setReceiverNode] = useState(3);
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [hoverInfo, setHoverInfo] = useState('');
  const [alertInfo, setAlertInfo] = useState('');
  const [walkthroughStep, setWalkthroughStep] = useState(0);

  const steps = [
    { title: "Select Topology", desc: "Use the subject roadmap controls to choose Star, Ring, Bus, or Mesh configurations." },
    { title: "Simulate Node Failures", desc: "Click directly on any 3D node in the lab viewport to force a crash (node turns flashing red)." },
    { title: "Trigger Transmission", desc: "Click 'Transmit Packet' to see the packet route dynamically. Failed nodes force rerouting or block packet flow." }
  ];

  // Keep activeTopology in sync with prop
  useEffect(() => {
    setActiveTopology(selectedTopology);
    setFailedNodes([]);
    setIsTransmitting(false);
  }, [selectedTopology]);

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
    camera.position.set(0, 5, 9);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minDistance = 3;
    controls.maxDistance = 15;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x00f0ff, 1.2);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    const group = new THREE.Group();
    scene.add(group);

    // 3D Grid helper
    const gridHelper = new THREE.GridHelper(20, 20, 0x00f0ff, 0xffffff);
    gridHelper.position.y = -2;
    gridHelper.material.opacity = 0.1;
    gridHelper.material.transparent = true;
    group.add(gridHelper);

    // --- 2. DEFINE TOPOLOGY GEOMETRIES ---
    let nodes = [];
    let links = [];

    const hubNode = { x: 0, y: 0, z: 0, label: 'Central Hub', isHub: true };

    if (activeTopology === 'star') {
      // 5 Nodes arranged in a circle, plus a central hub
      nodes.push(hubNode);
      const r = 2.4;
      for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2;
        nodes.push({
          x: Math.cos(angle) * r,
          y: -0.2,
          z: Math.sin(angle) * r,
          label: `Host ${i + 1}`,
          index: i + 1
        });
        links.push({ from: 0, to: i + 1 });
      }
    } else if (activeTopology === 'bus') {
      // 5 Nodes aligned along a central spine
      const startX = -2.6;
      const step = 1.3;
      for (let i = 0; i < 5; i++) {
        const x = startX + i * step;
        nodes.push({
          x,
          y: -0.2,
          z: i % 2 === 0 ? 0.8 : -0.8,
          label: `Host ${i + 1}`,
          index: i
        });
      }
      // Add links representing drops to backbone
      nodes.forEach((n, idx) => {
        links.push({ from: idx, toPoint: new THREE.Vector3(n.x, -0.2, 0) });
      });
    } else if (activeTopology === 'ring') {
      // 5 Nodes arranged in a circle, linked in sequence: 0->1->2->3->4->0
      const r = 2.2;
      for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2;
        nodes.push({
          x: Math.cos(angle) * r,
          y: -0.2,
          z: Math.sin(angle) * r,
          label: `Host ${i + 1}`,
          index: i
        });
        links.push({ from: i, to: (i + 1) % 5 });
      }
    } else {
      // Mesh Topology: Fully connected O(N^2) constellation
      const r = 2.2;
      for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2;
        nodes.push({
          x: Math.cos(angle) * r,
          y: -0.2,
          z: Math.sin(angle) * r,
          label: `Host ${i + 1}`,
          index: i
        });
      }
      // Links between all node pairs
      for (let i = 0; i < 5; i++) {
        for (let j = i + 1; j < 5; j++) {
          links.push({ from: i, to: j });
        }
      }
    }

    // --- 3. BUILD 3D REPRESENTATIONS ---
    const nodeMeshes = [];
    const linkLines = [];

    // Materials
    const nodeNormalMat = new THREE.MeshStandardMaterial({ color: 0x00f0ff, roughness: 0.1, metalness: 0.8, emissive: 0x00f0ff, emissiveIntensity: 0.2 });
    const nodeHubMat = new THREE.MeshStandardMaterial({ color: 0xbc3bf0, roughness: 0.1, metalness: 0.8, emissive: 0xbc3bf0, emissiveIntensity: 0.3 });
    const nodeFailedMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.1, metalness: 0.8, emissive: 0xef4444, emissiveIntensity: 0.6 });
    const nodeSenderMat = new THREE.MeshStandardMaterial({ color: 0x22c55e, roughness: 0.1, metalness: 0.8, emissive: 0x22c55e, emissiveIntensity: 0.4 });
    const nodeReceiverMat = new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.1, metalness: 0.8, emissive: 0xeab308, emissiveIntensity: 0.4 });

    const nodeGeom = new THREE.SphereGeometry(0.24, 32, 32);
    const hubGeom = new THREE.CylinderGeometry(0.3, 0.3, 0.12, 16);

    nodes.forEach((n, idx) => {
      let mesh;
      if (n.isHub) {
        mesh = new THREE.Mesh(hubGeom, nodeHubMat);
      } else {
        mesh = new THREE.Mesh(nodeGeom, nodeNormalMat);
      }
      mesh.position.set(n.x, n.y, n.z);
      mesh.userData = { index: idx, nodeInfo: n };
      group.add(mesh);
      nodeMeshes.push(mesh);
    });

    // Create 3D Link Beams (lines connecting nodes)
    const linkMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15 });
    
    // Draw central backbone line for bus
    if (activeTopology === 'bus') {
      const backboneGeom = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-2.8, -0.2, 0),
        new THREE.Vector3(2.8, -0.2, 0)
      ]);
      const backboneLine = new THREE.Line(backboneGeom, new THREE.LineBasicMaterial({ color: 0xbc3bf0, linewidth: 2 }));
      group.add(backboneLine);
    }

    links.forEach(l => {
      const fromNode = nodes[l.from];
      let toPos;
      if (l.toPoint) {
        toPos = l.toPoint;
      } else {
        const toNode = nodes[l.to];
        toPos = new THREE.Vector3(toNode.x, toNode.y, toNode.z);
      }

      const geom = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(fromNode.x, fromNode.y, fromNode.z),
        toPos
      ]);
      const line = new THREE.Line(geom, linkMat);
      group.add(line);
      linkLines.push(line);
    });

    // 3.1 Packet Tracer (Glowing 3D sphere)
    const packetGeom = new THREE.SphereGeometry(0.12, 16, 16);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0xffe259, transparent: true, opacity: 0.9 });
    const packetMesh = new THREE.Mesh(packetGeom, packetMat);
    packetMesh.visible = false;
    group.add(packetMesh);

    // 3.2 Spark/Failure Particle system
    const sparkGeom = new THREE.BufferGeometry();
    const sparksCount = 40;
    const sparkPositions = new Float32Array(sparksCount * 3);
    const sparkVelocities = [];

    for (let i = 0; i < sparksCount; i++) {
      sparkPositions[i * 3] = 0;
      sparkPositions[i * 3 + 1] = 0;
      sparkPositions[i * 3 + 2] = 0;
      sparkVelocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.05,
        (Math.random() * 0.06),
        (Math.random() - 0.5) * 0.05
      ));
    }

    sparkGeom.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
    const sparkMat = new THREE.PointsMaterial({ color: 0xef4444, size: 0.06, transparent: true, opacity: 0.9 });
    const sparkPoints = new THREE.Points(sparkGeom, sparkMat);
    sparkPoints.visible = false;
    group.add(sparkPoints);

    // --- 4. PACKET TRANSMISSION ROUTING SIMULATOR ---
    let path = [];
    let currentPathIndex = 0;
    let pathProgress = 0;
    let sparkTimer = 0;

    const buildPath = () => {
      path = [];
      const s = senderNode;
      const r = receiverNode;

      if (activeTopology === 'star') {
        // Star Path: Sender -> Central Hub -> Receiver
        path = [s, 0, r];
      } else if (activeTopology === 'ring') {
        // Ring Path: seq routing clockwise or counter-clockwise
        // Let's route sequence: s -> s+1 -> ... -> r
        let curr = s;
        while (curr !== r) {
          path.push(curr);
          curr = (curr + 1) % 5;
        }
        path.push(r);
      } else if (activeTopology === 'bus') {
        // Bus Path: Sender -> drop backbone -> Receiver
        path = [s, r];
      } else {
        // Mesh Path: Direct point-to-point dedicated link
        path = [s, r];
      }
    };

    // --- 5. ANIMATING MAIN LOOP ---
    let frameCount = 0;

    const animate = () => {
      frameCount += 1.2 * speed;
      controls.update();

      // Dynamic Node color mappings based on states (Normal, Hub, Failed, Sender, Receiver)
      nodeMeshes.forEach((mesh, idx) => {
        const isFailed = failedNodes.includes(idx);
        const isSender = senderNode === idx;
        const isReceiver = receiverNode === idx;

        if (isFailed) {
          mesh.material = nodeFailedMat;
          // Pulse the failed node size to emulate error state
          const scale = 1.0 + Math.sin(frameCount * 0.15) * 0.1;
          mesh.scale.set(scale, scale, scale);
        } else if (isSender) {
          mesh.material = nodeSenderMat;
          mesh.scale.set(1.1, 1.1, 1.1);
        } else if (isReceiver) {
          mesh.material = nodeReceiverMat;
          mesh.scale.set(1.1, 1.1, 1.1);
        } else if (nodes[idx].isHub) {
          mesh.material = nodeHubMat;
          mesh.scale.set(1, 1, 1);
        } else {
          mesh.material = nodeNormalMat;
          mesh.scale.set(1, 1, 1);
        }
      });

      // Animate packet movement along computed path
      if (isTransmitting && isPlaying) {
        packetMesh.visible = true;
        pathProgress += 0.015 * speed;

        if (pathProgress >= 1.0) {
          pathProgress = 0;
          currentPathIndex++;
        }

        if (currentPathIndex < path.length - 1) {
          const nodeIdxFrom = path[currentPathIndex];
          const nodeIdxTo = path[currentPathIndex + 1];

          // Check if intermediate node is failed
          if (failedNodes.includes(nodeIdxFrom)) {
            setIsTransmitting(false);
            setAlertInfo(`PACKET DROPPED: Intermediate Host ${nodeIdxFrom} has crashed/failed!`);
            packetMesh.visible = false;
            triggerSparks(nodes[nodeIdxFrom]);
          } else {
            const pA = nodes[nodeIdxFrom];
            const pB = nodes[nodeIdxTo];
            packetMesh.position.lerpVectors(new THREE.Vector3(pA.x, pA.y, pA.z), new THREE.Vector3(pB.x, pB.y, pB.z), pathProgress);
          }
        } else {
          // Finished routing successfully!
          setIsTransmitting(false);
          packetMesh.visible = false;
          setAlertInfo(`TRANSMISSION COMPLETE: Packet arrived at Host ${receiverNode + 1} successfully.`);
        }
      }

      // Animate sparks / particles
      if (sparkPoints.visible) {
        sparkTimer += 1.5 * speed;
        const pos = sparkPoints.geometry.attributes.position.array;
        
        for (let i = 0; i < sparksCount; i++) {
          pos[i * 3] += sparkVelocities[i].x;
          pos[i * 3 + 1] += sparkVelocities[i].y;
          pos[i * 3 + 2] += sparkVelocities[i].z;
          // Pull down (gravity)
          sparkVelocities[i].y -= 0.001;
        }
        sparkPoints.geometry.attributes.position.needsUpdate = true;
        
        // Hide after some time
        if (sparkTimer > 60) {
          sparkPoints.visible = false;
        }
      }

      // Spin whole network structure slightly
      group.rotation.y = Math.sin(frameCount * 0.002) * 0.15;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    const triggerSparks = (n) => {
      sparkPoints.position.set(n.x, n.y, n.z);
      const pos = sparkPoints.geometry.attributes.position.array;
      for (let i = 0; i < sparksCount; i++) {
        pos[i * 3] = 0;
        pos[i * 3 + 1] = 0;
        pos[i * 3 + 2] = 0;
        sparkVelocities[i].set(
          (Math.random() - 0.5) * 0.05,
          (Math.random() * 0.06),
          (Math.random() - 0.5) * 0.05
        );
      }
      sparkPoints.geometry.attributes.position.needsUpdate = true;
      sparkPoints.visible = true;
      sparkTimer = 0;
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
      const intersects = raycaster.intersectObjects(nodeMeshes);

      if (intersects.length > 0) {
        const idx = intersects[0].object.userData.index;
        const info = nodes[idx];
        setHoverInfo(`NODE: ${info.label} | COORD: (${info.x.toFixed(1)}, ${info.z.toFixed(1)}) | MAC: 00:0A:95:9D:68:1${idx} | Click to force simulated device FAILURE/CRASH.`);
      } else {
        setHoverInfo('');
      }
    };

    const handleCanvasClick = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);

      if (intersects.length > 0) {
        const clickedIdx = intersects[0].object.userData.index;
        
        // Do not crash sender or receiver to allow logical routing
        if (clickedIdx === senderNode || clickedIdx === receiverNode) {
          setAlertInfo("SYSTEM WARNING: Cannot crash active sender or receiver host nodes.");
          setTimeout(() => setAlertInfo(''), 3000);
          return;
        }

        // Toggle failed node
        setFailedNodes(prev => {
          const isFailed = prev.includes(clickedIdx);
          let next;
          if (isFailed) {
            next = prev.filter(x => x !== clickedIdx);
            setAlertInfo(`NODE RESTORED: Host ${clickedIdx + 1} is online.`);
          } else {
            next = [...prev, clickedIdx];
            triggerSparks(nodes[clickedIdx]);
            setAlertInfo(`CRITICAL ALARM: Host ${clickedIdx + 1} has crashed! Sparks emitted.`);
          }
          return next;
        });
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
    canvas.addEventListener('click', handleCanvasClick);

    // Initial Path setup
    buildPath();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleCanvasMouseMove);
      canvas.removeEventListener('click', handleCanvasClick);
      controls.dispose();
      renderer.dispose();
    };
  }, [activeTopology, failedNodes, senderNode, receiverNode, isTransmitting, isPlaying, speed]);

  const handleTransmit = () => {
    if (isTransmitting) return;

    // Direct check if intermediate node was already failed
    const s = senderNode;
    const r = receiverNode;
    
    let activePath = [];
    if (activeTopology === 'star') {
      activePath = [s, 0, r];
    } else if (activeTopology === 'ring') {
      let curr = s;
      while (curr !== r) {
        activePath.push(curr);
        curr = (curr + 1) % 5;
      }
      activePath.push(r);
    } else {
      activePath = [s, r];
    }

    // Verify if first node is down
    if (failedNodes.includes(s) || failedNodes.includes(r)) {
      setAlertInfo("TRANSMISSION DENIED: Sender or Receiver nodes are currently offline.");
      return;
    }

    setAlertInfo(`INITIATING TRANSMISSION: Routing packet from Host ${s + 1} to Host ${r + 1}...`);
    setIsTransmitting(true);
  };

  const resetScene = () => {
    setFailedNodes([]);
    setIsTransmitting(false);
    setAlertInfo('Simulation resets. Grid healthy.');
    setWalkthroughStep(0);
  };

  return (
    <div ref={containerRef} className="w-full flex flex-col gap-4 relative">
      
      {/* Subject Controller Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white/2 border border-white/5 p-3 rounded-xl z-10">
        
        {/* Topology selection dropdown */}
        <div className="flex gap-1.5">
          {['star', 'bus', 'ring', 'mesh'].map(t => (
            <button
              key={t}
              onClick={() => { setActiveTopology(t); setFailedNodes([]); setIsTransmitting(false); }}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-orbitron uppercase border transition-all cursor-pointer ${
                activeTopology === t ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan font-bold' : 'border-white/5 text-white/50 hover:border-white/10 hover:text-white/80'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Sender Receiver picks */}
        <div className="flex items-center gap-2 text-[10px] font-orbitron">
          <span className="text-white/40">TX:</span>
          <select
            value={senderNode}
            onChange={(e) => { setSenderNode(parseInt(e.target.value)); setIsTransmitting(false); }}
            className="bg-space-black border border-white/10 rounded px-1.5 py-0.5 text-green-400 focus:outline-none"
          >
            {[0, 1, 2, 3, 4].map(idx => <option key={idx} value={idx}>Host {idx + 1}</option>)}
          </select>

          <span className="text-white/40 ml-1.5">RX:</span>
          <select
            value={receiverNode}
            onChange={(e) => { setReceiverNode(parseInt(e.target.value)); setIsTransmitting(false); }}
            className="bg-space-black border border-white/10 rounded px-1.5 py-0.5 text-yellow-400 focus:outline-none"
          >
            {[0, 1, 2, 3, 4].map(idx => <option key={idx} value={idx} disabled={idx === senderNode}>Host {idx + 1}</option>)}
          </select>
        </div>

        {/* Packet launcher */}
        <button
          onClick={handleTransmit}
          disabled={isTransmitting}
          className="px-3 py-1.5 rounded-lg bg-white/3 border border-white/10 text-white/80 hover:bg-neon-cyan/15 hover:border-neon-cyan hover:text-neon-cyan transition-all text-[10px] font-orbitron uppercase flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
        >
          <Send className="w-3 h-3" />
          <span>Launch Packet</span>
        </button>

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

        {/* Control options bar */}
        <div className="absolute bottom-4 left-4 flex gap-2 z-10">
          <button
            onClick={resetScene}
            className="w-8 h-8 rounded-lg bg-white/3 border border-white/10 hover:border-white/20 text-white/60 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            title="Reset Topology State"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* WebXR instruction hint */}
        <div className="absolute bottom-4 right-4 text-[9px] font-orbitron text-white/35 flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-ping" />
          <span>CLICK NODE TO SIMULATE CRASH</span>
        </div>
      </div>

      {/* Guided Walkthrough Widget */}
      <div className="glass-panel p-4 rounded-xl border border-white/5 flex flex-col gap-3 font-sans text-xs">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="font-orbitron font-bold text-[10px] text-neon-cyan tracking-wider uppercase flex items-center gap-1">
            <Cpu className="w-4 h-4" />
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
