import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Play, Pause, RotateCcw, Info, Zap, Wifi } from 'lucide-react';

export default function PhysicalLayerScene({ binaryInput = '10110010', encodingScheme = 'manchester', isPlaying = true, speed = 1 }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [activeMedium, setActiveMedium] = useState('fiber'); // fiber, twisted, wireless
  const [hoverInfo, setHoverInfo] = useState('');
  const [walkthroughStep, setWalkthroughStep] = useState(0);

  const steps = [
    { title: "Physical Medium", desc: "Select a medium above to analyze how digital streams translate into physical signals." },
    { title: "Binary Modulation", desc: "Input 8-bit values to watch signal waves shape in real-time according to encoding principles." },
    { title: "Signal Propagation", desc: "Watch photons, electric current, or electromagnetic waves traverse spatial paths." }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let frameId;

    // --- 1. THREE.JS INITIALIZATION ---
    const scene = new THREE.Scene();
    
    // Transparent WebGL Renderer to let the main universe video bleed through
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, 280);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / 280, 0.1, 100);
    camera.position.set(0, 4, 10);

    // OrbitControls for spatial viewing
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2; // prevent camera going under ground
    controls.minDistance = 3;
    controls.maxDistance = 15;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x00f0ff, 1.2);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    // --- 2. 3D OBJECTS CREATION (DENSE STYLING) ---
    const group = new THREE.Group();
    scene.add(group);

    // Helper: Add custom 3D grid helper
    const gridHelper = new THREE.GridHelper(20, 20, 0x00f0ff, 0xffffff);
    gridHelper.position.y = -2;
    gridHelper.material.opacity = 0.15;
    gridHelper.material.transparent = true;
    group.add(gridHelper);

    // 2.1 FIBER OPTIC MODEL
    const fiberGroup = new THREE.Group();
    group.add(fiberGroup);

    // Cladding (Outer Transparent tube)
    const cladGeom = new THREE.CylinderGeometry(0.8, 0.8, 6, 32, 1, true);
    cladGeom.rotateZ(Math.PI / 2);
    const cladMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.1,
      roughness: 0.1,
      metalness: 0.9,
      side: THREE.DoubleSide
    });
    const cladding = new THREE.Mesh(cladGeom, cladMat);
    fiberGroup.add(cladding);

    // Core (Inner Glass Core)
    const coreGeom = new THREE.CylinderGeometry(0.4, 0.4, 6, 32, 1, true);
    coreGeom.rotateZ(Math.PI / 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.25,
      roughness: 0.0,
      metalness: 0.8,
      side: THREE.DoubleSide
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    fiberGroup.add(core);

    // Fiber laser beams (Internal light path lines)
    const laserPoints = [
      new THREE.Vector3(-3, 0, 0),
      new THREE.Vector3(-2, 0.35, 0),
      new THREE.Vector3(-0.67, -0.35, 0),
      new THREE.Vector3(0.67, 0.35, 0),
      new THREE.Vector3(2, -0.35, 0),
      new THREE.Vector3(3, 0, 0)
    ];
    const laserGeom = new THREE.BufferGeometry().setFromPoints(laserPoints);
    const laserMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, linewidth: 2 });
    const laserLine = new THREE.Line(laserGeom, laserMat);
    fiberGroup.add(laserLine);

    // Photon particles (moving light pulses)
    const photonGeom = new THREE.SphereGeometry(0.06, 16, 16);
    const photonMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const photonsCount = 12;
    const photons = [];

    for (let i = 0; i < photonsCount; i++) {
      const photon = new THREE.Mesh(photonGeom, photonMat);
      photon.userData = { progress: i / photonsCount };
      fiberGroup.add(photon);
      photons.push(photon);
    }

    // 2.2 TWISTED PAIR MODEL
    const twistedGroup = new THREE.Group();
    group.add(twistedGroup);

    // Generate helical twisted wires
    const wireLength = 6;
    const helixRadius = 0.25;
    const helixTurns = 5;
    const wireSegments = 100;

    const wirePoints1 = [];
    const wirePoints2 = [];

    for (let i = 0; i <= wireSegments; i++) {
      const t = i / wireSegments;
      const x = -wireLength / 2 + t * wireLength;
      const angle = t * helixTurns * Math.PI * 2;
      const y1 = Math.cos(angle) * helixRadius;
      const z1 = Math.sin(angle) * helixRadius;
      const y2 = Math.cos(angle + Math.PI) * helixRadius;
      const z2 = Math.sin(angle + Math.PI) * helixRadius;

      wirePoints1.push(new THREE.Vector3(x, y1, z1));
      wirePoints2.push(new THREE.Vector3(x, y2, z2));
    }

    const wireCurve1 = new THREE.CatmullRomCurve3(wirePoints1);
    const wireCurve2 = new THREE.CatmullRomCurve3(wirePoints2);

    const wireGeom1 = new THREE.TubeGeometry(wireCurve1, 64, 0.08, 8, false);
    const wireGeom2 = new THREE.TubeGeometry(wireCurve2, 64, 0.08, 8, false);

    const wireMat1 = new THREE.MeshStandardMaterial({ color: 0xbc3bf0, roughness: 0.3, metalness: 0.8 }); // Orange/Copper wire 1
    const wireMat2 = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.3, metalness: 0.8 }); // Blue/Copper wire 2

    const wire1 = new THREE.Mesh(wireGeom1, wireMat1);
    const wire2 = new THREE.Mesh(wireGeom2, wireMat2);
    twistedGroup.add(wire1, wire2);

    // Current flow spheres (running along the twisted wires)
    const currentGeom = new THREE.SphereGeometry(0.065, 16, 16);
    const currentMat1 = new THREE.MeshBasicMaterial({ color: 0xffe259 });
    const currentMat2 = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    
    const currentParticles1 = [];
    const currentParticles2 = [];
    const currentCount = 8;

    for (let i = 0; i < currentCount; i++) {
      const p1 = new THREE.Mesh(currentGeom, currentMat1);
      const p2 = new THREE.Mesh(currentGeom, currentMat2);
      p1.userData = { progress: i / currentCount };
      p2.userData = { progress: (i + 0.5) / currentCount };
      twistedGroup.add(p1, p2);
      currentParticles1.push(p1);
      currentParticles2.push(p2);
    }

    // 2.3 WIRELESS MODEL
    const wirelessGroup = new THREE.Group();
    group.add(wirelessGroup);

    // Transmitter Tower
    const towerGeom = new THREE.CylinderGeometry(0.05, 0.2, 1.5, 8);
    const towerMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.9, roughness: 0.1 });
    const txTower = new THREE.Mesh(towerGeom, towerMat);
    txTower.position.set(-2.5, -0.5, 0);
    wirelessGroup.add(txTower);

    // Transmitter antenna tip (emitting ball)
    const tipGeom = new THREE.SphereGeometry(0.12, 16, 16);
    const tipMat = new THREE.MeshStandardMaterial({ color: 0x00f0ff, emissive: 0x00f0ff, roughness: 0.1 });
    const txTip = new THREE.Mesh(tipGeom, tipMat);
    txTip.position.set(-2.5, 0.3, 0);
    wirelessGroup.add(txTip);

    // Receiver Dish
    const dishStand = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.08, 0.8, 8), towerMat);
    dishStand.position.set(2.5, -0.6, 0);
    wirelessGroup.add(dishStand);

    const dishGeom = new THREE.CylinderGeometry(0.3, 0.05, 0.2, 16, 1, false, 0, Math.PI);
    dishGeom.rotateX(Math.PI / 2);
    dishGeom.rotateY(-Math.PI / 2);
    const rxDish = new THREE.Mesh(dishGeom, towerMat);
    rxDish.position.set(2.5, -0.1, 0);
    wirelessGroup.add(rxDish);

    // Pulsing electromagnetic rings
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
    const rings = [];
    const ringsCount = 4;

    for (let i = 0; i < ringsCount; i++) {
      const ringGeom = new THREE.RingGeometry(0.1, 0.13, 32);
      ringGeom.rotateY(Math.PI / 2);
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.position.copy(txTip.position);
      ring.userData = { radius: i * (4.5 / ringsCount) };
      wirelessGroup.add(ring);
      rings.push(ring);
    }

    // 2.4 DYNAMIC 3D SIGNAL WAVEFORM (Translations of input bits)
    const wavePointsCount = 180;
    const waveLineGeom = new THREE.BufferGeometry();
    const wavePositions = new Float32Array(wavePointsCount * 3);
    waveLineGeom.setAttribute('position', new THREE.BufferAttribute(wavePositions, 3));
    
    const waveLineMat = new THREE.LineBasicMaterial({ color: 0x00ff88, linewidth: 2 });
    const waveLine = new THREE.Line(waveLineGeom, waveLineMat);
    waveLine.position.y = -1.2; // Sits above grid, below main structures
    group.add(waveLine);

    // --- 3. ANIMATION TIMELINES & MODULATION ---
    let frameCount = 0;

    const animate = () => {
      frameCount += 1.2 * speed;
      controls.update();

      // Show/Hide active spatial mediums
      fiberGroup.visible = activeMedium === 'fiber';
      twistedGroup.visible = activeMedium === 'twisted';
      wirelessGroup.visible = activeMedium === 'wireless';

      if (isPlaying) {
        // 3.1 Fiber optic Photon bouncing
        if (activeMedium === 'fiber') {
          photons.forEach((photon, idx) => {
            photon.userData.progress += 0.003 * speed;
            if (photon.userData.progress > 1) photon.userData.progress = 0;
            
            // Interpolate along the zig-zag bounce coordinates
            const progress = photon.userData.progress;
            const pointsLen = laserPoints.length;
            const segment = Math.floor(progress * (pointsLen - 1));
            const subProgress = (progress * (pointsLen - 1)) % 1;

            if (segment < pointsLen - 1) {
              const pA = laserPoints[segment];
              const pB = laserPoints[segment + 1];
              photon.position.lerpVectors(pA, pB, subProgress);
            }
          });
        }

        // 3.2 Twisted Wire electrical current Flow
        if (activeMedium === 'twisted') {
          currentParticles1.forEach(p => {
            p.userData.progress += 0.002 * speed;
            if (p.userData.progress > 1) p.userData.progress = 0;
            p.position.copy(wireCurve1.getPointAt(p.userData.progress));
          });
          currentParticles2.forEach(p => {
            p.userData.progress += 0.002 * speed;
            if (p.userData.progress > 1) p.userData.progress = 0;
            p.position.copy(wireCurve2.getPointAt(p.userData.progress));
          });
        }

        // 3.3 Wireless waves pulsing
        if (activeMedium === 'wireless') {
          rings.forEach(ring => {
            ring.userData.radius += 0.02 * speed;
            if (ring.userData.radius > 5.0) {
              ring.userData.radius = 0.0;
            }
            // Dynamic scale
            const scale = ring.userData.radius;
            ring.scale.set(scale, scale, scale);
            
            // Fade out as it expands
            ring.material.opacity = Math.max(0, 0.6 * (1 - (scale / 5.0)));
          });
        }

        // 3.4 Dynamic Line Modulation wave
        const positions = waveLineGeom.attributes.position.array;
        const bitLength = binaryInput.length || 8;
        
        for (let i = 0; i < wavePointsCount; i++) {
          const t = i / wavePointsCount;
          const x = -3 + t * 6;
          
          // Map x to which bit in our 8-bit input
          const bitIndex = Math.min(Math.floor(t * bitLength), bitLength - 1);
          const currentBit = parseInt(binaryInput[bitIndex] || '0');
          const nextBit = parseInt(binaryInput[Math.min(bitIndex + 1, bitLength - 1)] || '0');
          
          let y = 0;
          
          if (activeMedium === 'wireless') {
            // Analog Sine Wave Modulation: Frequency Shift Keying (FSK) or Amplitude Shift Keying (ASK)
            const frequency = currentBit === 1 ? 25 : 12;
            const amplitude = 0.45;
            y = Math.sin(t * frequency * Math.PI - frameCount * 0.1) * amplitude;
          } else {
            // Digital Line Encodings: NRZ, RZ, Manchester, AMI
            if (encodingScheme === 'nrz') {
              // Non-Return-to-Zero Level
              y = currentBit === 1 ? 0.4 : -0.4;
            } else if (encodingScheme === 'rz') {
              // Return-to-Zero: high half bit, goes to 0 mid-way
              const subProgress = (t * bitLength) % 1;
              if (currentBit === 1) {
                y = subProgress < 0.5 ? 0.4 : 0;
              } else {
                y = subProgress < 0.5 ? -0.4 : 0;
              }
            } else if (encodingScheme === 'ami') {
              // Bipolar Alternate Mark Inversion (alternates polarity for 1s, zero for 0)
              if (currentBit === 0) {
                y = 0;
              } else {
                // Count ones up to here
                let ones = 0;
                for (let k = 0; k <= bitIndex; k++) {
                  if (parseInt(binaryInput[k]) === 1) ones++;
                }
                y = ones % 2 === 1 ? 0.4 : -0.4;
              }
            } else {
              // Manchester: transitions in the middle of every bit interval
              // 1 is high-to-low transition, 0 is low-to-high transition
              const subProgress = (t * bitLength) % 1;
              if (currentBit === 1) {
                y = subProgress < 0.5 ? 0.4 : -0.4;
              } else {
                y = subProgress < 0.5 ? -0.4 : 0.4;
              }
            }
          }

          positions[i * 3] = x;
          positions[i * 3 + 1] = y;
          positions[i * 3 + 2] = 0;
        }
        waveLineGeom.attributes.position.needsUpdate = true;
      }

      // Rotate group gently to showcase 3D angle
      group.rotation.y = Math.sin(frameCount * 0.003) * 0.2;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    // Raycaster for hover interactions
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleCanvasMouseMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(group.children, true);

      if (intersects.length > 0) {
        const obj = intersects[0].object;
        if (activeMedium === 'fiber') {
          setHoverInfo('FIBER OPTIC CORE (Silica Glass): Carries light photons. Offers extremely high bandwidth (100+ Gbps) and absolute immunity to electromagnetic interference (EMI).');
        } else if (activeMedium === 'twisted') {
          setHoverInfo('COPPER TWISTED PAIR (UTP/STP): Helical twisting cancels out cross-talk and external magnetic noise fields from adjacent signals.');
        } else if (activeMedium === 'wireless') {
          setHoverInfo('WIRELESS CARRIER LINK (Radio Freq): Converts digital sequences into spatial electromagnetic wavefronts matching FSK frequency modulations.');
        }
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
  }, [activeMedium, binaryInput, encodingScheme, isPlaying, speed]);

  const resetScene = () => {
    setActiveMedium('fiber');
    setWalkthroughStep(0);
  };

  return (
    <div ref={containerRef} className="w-full flex flex-col gap-4 relative">
      
      {/* 3D Lab Medium selector */}
      <div className="flex bg-white/2 rounded-lg border border-white/5 p-0.5 text-xs font-orbitron z-10">
        <button
          onClick={() => setActiveMedium('fiber')}
          className={`flex-1 py-2 rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${activeMedium === 'fiber' ? 'bg-neon-cyan/15 text-neon-cyan font-bold' : 'text-white/40 hover:text-white/80'}`}
        >
          <Zap className="w-3.5 h-3.5" />
          Fiber Optics
        </button>
        <button
          onClick={() => setActiveMedium('twisted')}
          className={`flex-1 py-2 rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${activeMedium === 'twisted' ? 'bg-neon-purple/15 text-neon-purple font-bold' : 'text-white/40 hover:text-white/80'}`}
        >
          <Zap className="w-3.5 h-3.5 rotate-45" />
          Twisted Pairs
        </button>
        <button
          onClick={() => setActiveMedium('wireless')}
          className={`flex-1 py-2 rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${activeMedium === 'wireless' ? 'bg-blue-500/15 text-blue-400 font-bold' : 'text-white/40 hover:text-white/80'}`}
        >
          <Wifi className="w-3.5 h-3.5" />
          Wireless Satellite
        </button>
      </div>

      {/* Render three canvas */}
      <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#030112]/90 h-[280px]">
        <canvas ref={canvasRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />

        {/* Dynamic spatial tooltip HUD */}
        {hoverInfo && (
          <div className="absolute top-4 left-4 right-4 bg-space-black/95 border border-neon-cyan/30 p-3 rounded-xl text-[10px] text-white/80 leading-relaxed font-sans shadow-[0_0_20px_rgba(0,240,255,0.08)] backdrop-blur-md animate-fade-in z-20">
            <div className="flex items-center gap-1 text-neon-cyan font-orbitron font-bold uppercase tracking-wider mb-0.5">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>Medium Telemetry</span>
            </div>
            <p>{hoverInfo}</p>
          </div>
        )}

        {/* Static controls */}
        <div className="absolute bottom-4 left-4 flex gap-2 z-10">
          <button
            onClick={resetScene}
            className="w-8 h-8 rounded-lg bg-white/3 border border-white/10 hover:border-white/20 text-white/60 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            title="Reset Simulation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* WebXR spatial hint */}
        <div className="absolute bottom-4 right-4 text-[9px] font-orbitron text-white/35 flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-ping" />
          <span>DRAG TO ROTATE SCENE</span>
        </div>
      </div>

      {/* 3D Guided Walkthrough widget */}
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
