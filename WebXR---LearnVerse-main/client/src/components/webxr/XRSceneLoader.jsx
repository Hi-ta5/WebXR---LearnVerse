import React, { useState, useEffect } from 'react';
import { Sparkles, Cpu, Compass } from 'lucide-react';

export default function XRSceneLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing spatial viewport...');
  
  const statusLogs = [
    'Connecting WebXR hardware layer...',
    'Calibrating spatial coordinates...',
    'Loading 3D mesh configurations...',
    'Importing material shaders...',
    'Establishing data flow pipeline...',
    'Calibrating headset sensors...',
    'Simulation matrix ready.'
  ];

  useEffect(() => {
    let index = 0;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        // Dynamic status updates
        const nextVal = prev + Math.floor(Math.random() * 8) + 4;
        const boundedVal = Math.min(nextVal, 100);
        
        const logIdx = Math.min(Math.floor((boundedVal / 100) * statusLogs.length), statusLogs.length - 1);
        setStatusText(statusLogs[logIdx]);
        
        return boundedVal;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-[350px] relative glass-card rounded-2xl border border-white/5 overflow-hidden">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 cyber-grid-active opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />

      {/* Orbiting Loading Circle */}
      <div className="relative w-32 h-32 flex items-center justify-center mb-6">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.02)"
            strokeWidth="3.5"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#00f0ff"
            strokeWidth="3.5"
            strokeDasharray={2 * Math.PI * 40}
            strokeDashoffset={2 * Math.PI * 40 * (1 - progress / 100)}
            strokeLinecap="round"
            className="transition-all duration-300 ease-out"
            style={{
              filter: 'drop-shadow(0 0 6px #00f0ff50)'
            }}
          />
        </svg>

        {/* Dynamic loading number */}
        <div className="absolute flex flex-col items-center justify-center font-orbitron">
          <span className="text-xl font-bold text-white tracking-tighter">{progress}%</span>
          <span className="text-[8px] text-white/35 uppercase tracking-widest mt-0.5">COMPILING</span>
        </div>
      </div>

      {/* Dynamic Status Log and loader details */}
      <div className="flex flex-col items-center gap-2 max-w-sm text-center relative z-10">
        <p className="font-orbitron text-xs font-semibold text-neon-cyan tracking-wider uppercase animate-pulse glow-text-cyan">
          {statusText}
        </p>
        <p className="text-[10px] text-white/30 font-mono tracking-wide mt-1 truncate w-full">
          LV-XR_SYS // ADDR: 0x7FFF32AC09 // STATUS: OK
        </p>
      </div>

      {/* Action Enter Cockpit Trigger */}
      {progress === 100 && (
        <button
          onClick={onComplete}
          className="mt-6 glow-btn-cyan text-white px-8 py-3 rounded-xl font-orbitron font-bold tracking-widest text-xs animate-fade-in flex items-center gap-2 cursor-pointer"
        >
          <Compass className="w-4 h-4 animate-spin-slow" />
          <span>ENTER SIMULATION PORTAL</span>
        </button>
      )}

    </div>
  );
}
