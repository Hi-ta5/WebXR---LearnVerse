import React, { lazy, Suspense } from 'react';
import { Compass } from 'lucide-react';

// Lazy load the high-fidelity 3D modular Three.js virtual lab scenes for optimized bundle loading
const PhysicalLayerScene = lazy(() => import('../../webxr/cn/PhysicalLayerScene'));
const TopologyScene = lazy(() => import('../../webxr/cn/TopologyScene'));
const TCPUDPScene = lazy(() => import('../../webxr/cn/TCPUDPScene'));
const ProcessScene = lazy(() => import('../../webxr/os/ProcessScene'));
const SchedulingScene = lazy(() => import('../../webxr/os/SchedulingScene'));
const DataStructureScene = lazy(() => import('../../webxr/dsa/DataStructureScene'));

export default function XRContainer({ subjectId, topicId }) {
  
  // Dynamic scene router mapping subjects & topics to modular 3D environments
  const renderActiveScene = () => {
    if (subjectId === 'computer-networks') {
      if (topicId === 'osi-model') {
        return (
          <div className="w-full rounded-2xl overflow-hidden border border-neon-cyan/20 shadow-[0_0_30px_rgba(0,240,255,0.12)] bg-[#030112]">
            <iframe
              src="/xr-scenes/osi-model.html"
              title="WebXR OSI Layer-Lab Simulator"
              className="w-full h-[600px] border-none block"
              allow="xr-spatial-tracking; vr; gyroscope; accelerometer"
              allowFullScreen
            />
          </div>
        );
      }
      if (topicId === 'physical-layer') {
        return (
          <div className="w-full rounded-2xl overflow-hidden border border-neon-cyan/20 shadow-[0_0_30px_rgba(0,240,255,0.12)] bg-[#030112]">
            <iframe
              src="/xr-scenes/physical-layer.html"
              title="WebXR Physical Layer Mediums Lab"
              className="w-full h-[600px] border-none block"
              allow="xr-spatial-tracking; vr; gyroscope; accelerometer"
              allowFullScreen
            />
          </div>
        );
      }
      if (topicId === 'network-topologies') {
        return <TopologyScene selectedTopology="star" />;
      }
      if (topicId === 'tcp-udp' || topicId === 'routing' || topicId === 'congestion-control') {
        return <TCPUDPScene />;
      }
    } 
    
    if (subjectId === 'operating-systems') {
      if (topicId === 'deadlocks') {
        return (
          <div className="w-full rounded-2xl overflow-hidden border border-neon-cyan/20 shadow-[0_0_30px_rgba(0,240,255,0.12)] bg-[#030112]">
            <iframe
              src="/xr-scenes/deadlock.html"
              title="WebXR Deadlocks Simulator"
              className="w-full h-[600px] border-none block"
              allow="xr-spatial-tracking; vr; gyroscope; accelerometer"
              allowFullScreen
            />
          </div>
        );
      }
      if (topicId === 'threads' || topicId === 'process-management') {
        return <ProcessScene />;
      }
      if (topicId === 'cpu-scheduling' || topicId === 'memory-management') {
        return <SchedulingScene />;
      }
    }

    if (subjectId === 'data-structures') {
      let srcFile = 'array.html';
      if (topicId === 'arrays') srcFile = 'array.html';
      else if (topicId === 'stacks') srcFile = 'stack.html';
      else if (topicId === 'queues') srcFile = 'queue.html';
      else if (topicId === 'linked-lists') srcFile = 'linked-list.html';
      else if (topicId === 'trees') srcFile = 'tree.html';

      return (
        <div className="w-full rounded-2xl overflow-hidden border border-neon-cyan/20 shadow-[0_0_30px_rgba(0,240,255,0.12)] bg-[#030112]">
          <iframe
            src={`/xr-scenes/${srcFile}`}
            title="WebXR DSA Visualizer Simulator"
            className="w-full h-[600px] border-none block"
            allow="xr-spatial-tracking; vr; gyroscope; accelerometer"
            allowFullScreen
          />
        </div>
      );
    }

    // Default fallback placeholder if subject/topic is outside index mappings
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 bg-[#030112] border border-white/5 rounded-2xl h-[280px]">
        <Compass className="w-8 h-8 text-white/20 mb-2 animate-spin-slow" />
        <p className="text-xs font-orbitron text-white/40 uppercase tracking-widest">LOADING VLAB CHASSIS...</p>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <Suspense fallback={
        <div className={`flex flex-col items-center justify-center text-center p-8 bg-[#030112] border border-white/5 rounded-2xl ${subjectId === 'data-structures' ? 'h-[600px]' : 'h-[280px]'}`}>
          <div className="w-6 h-6 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin mb-2" />
          <p className="text-[9px] font-orbitron text-neon-cyan tracking-wider">SYNCING 3D COGNITIVE CORES...</p>
        </div>
      }>
        {renderActiveScene()}
      </Suspense>
    </div>
  );
}
