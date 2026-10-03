import React, { useState } from 'react';

// --- Concentric Circular Progress Chart ---
export function CircularProgressChart({ subjects = [] }) {
  const count = subjects.length || 1;
  const maxRadius = 100;
  const minRadius = 36;
  const radiusStep = count > 1 ? (maxRadius - minRadius) / (count - 1) : 0;

  const rings = subjects.map((sub, idx) => {
    const r = count > 1 ? Math.round(maxRadius - idx * radiusStep) : 70;
    const completed = sub.completed || 0;
    const total = sub.total || 0;
    const remaining = Math.max(0, total - completed);
    return {
      name: sub.name || sub.label || `Subject ${idx + 1}`,
      value: Math.min(100, Math.max(0, sub.percent || 0)),
      color: sub.color || '#00f0ff',
      completed,
      total,
      remaining,
      r
    };
  });

  const totalAll = rings.reduce((acc, r) => acc + r.total, 0);
  const completedAll = rings.reduce((acc, r) => acc + r.completed, 0);
  const overallPct = totalAll > 0 ? Math.round((completedAll / totalAll) * 100) : 0;

  return (
    <div className="flex flex-col items-center justify-between w-full h-full gap-5">
      {/* Prominent Concentric SVG Rings */}
      <div className="relative w-56 h-56 sm:w-60 sm:h-60 flex items-center justify-center shrink-0 my-1">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 240 240">
          <defs>
            {rings.map((ring, idx) => (
              <filter key={`glow-${idx}`} id={`glow-ring-${idx}`} x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            ))}
          </defs>

          {rings.map((ring, idx) => {
            const circumference = 2 * Math.PI * ring.r;
            const strokeDashoffset = circumference - (ring.value / 100) * circumference;

            return (
              <g key={idx}>
                {/* Track Circle */}
                <circle
                  cx="120"
                  cy="120"
                  r={ring.r}
                  fill="transparent"
                  stroke="rgba(255, 255, 255, 0.06)"
                  strokeWidth="6.5"
                />
                {/* Progress Arc */}
                <circle
                  cx="120"
                  cy="120"
                  r={ring.r}
                  fill="transparent"
                  stroke={ring.color}
                  strokeWidth="6.5"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  filter={`url(#glow-ring-${idx})`}
                  className="transition-all duration-1000 ease-out"
                />
              </g>
            );
          })}
        </svg>

        {/* Center Slogan & Overall Percentage */}
        <div className="absolute flex flex-col items-center justify-center font-orbitron pointer-events-none text-center">
          <span className="text-[9px] text-white/40 uppercase tracking-widest leading-none font-bold">TOTAL PROGRESS</span>
          <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight my-1">{overallPct}%</span>
          <span className="text-[10px] text-neon-cyan font-mono leading-none bg-neon-cyan/10 px-2 py-0.5 rounded-full border border-neon-cyan/20">
            {completedAll} / {totalAll} Nodes
          </span>
        </div>
      </div>

      {/* RINGS LEGEND WITH COMPLETED & REMAINING BREAKDOWN */}
      <div className="flex flex-col gap-2 w-full">
        {rings.map((ring, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-1.5 p-2.5 rounded-xl bg-white/2 border border-white/5 hover:border-white/20 transition-all text-xs group w-full box-border"
          >
            <div className="flex items-center justify-between gap-2 min-w-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse"
                  style={{ backgroundColor: ring.color, boxShadow: `0 0 8px ${ring.color}` }}
                />
                <span className="font-semibold text-white/90 truncate text-xs group-hover:text-white font-sans">
                  {ring.name}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[10px] text-white/40 font-orbitron">{ring.completed}/{ring.total}</span>
                <span className="font-orbitron font-bold text-xs px-1.5 py-0.5 rounded bg-white/5" style={{ color: ring.color }}>
                  {ring.value}%
                </span>
              </div>
            </div>

            {/* Mini Progress Bar Track */}
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${ring.value}%`,
                  backgroundColor: ring.color,
                  boxShadow: `0 0 8px ${ring.color}80`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Large Full-Height Bar Chart for Topic Completions ---
export function BarChart({ data = [] }) {
  const chartHeight = 230;
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const totalCompleted = data.reduce((sum, d) => sum + (d.completed || 0), 0);
  const totalNodes = data.reduce((sum, d) => sum + (d.total || 0), 0);
  const highestSubject = data.reduce((max, d) => {
    const pct = d.total > 0 ? (d.completed / d.total) * 100 : 0;
    return pct > (max.pct || 0) ? { label: d.label, pct } : max;
  }, { label: 'None', pct: 0 });

  return (
    <div className="w-full h-full flex flex-col justify-between gap-5">
      {/* Top summary strip inside card */}
      <div className="grid grid-cols-2 gap-3 w-full">
        <div className="p-3 rounded-xl bg-white/2 border border-white/5 flex flex-col">
          <span className="text-[9px] font-orbitron text-white/40 uppercase tracking-wider">RESOLVED NODES</span>
          <span className="text-sm font-bold font-orbitron text-neon-cyan mt-0.5">{totalCompleted} / {totalNodes} Completed</span>
        </div>
        <div className="p-3 rounded-xl bg-white/2 border border-white/5 flex flex-col">
          <span className="text-[9px] font-orbitron text-white/40 uppercase tracking-wider">TOP DOMAIN</span>
          <span className="text-sm font-bold font-orbitron text-neon-purple mt-0.5 truncate">{highestSubject.label} ({Math.round(highestSubject.pct)}%)</span>
        </div>
      </div>

      {/* Large Graph Area */}
      <div className="relative border-b border-l border-white/10 h-[290px] w-full flex items-end justify-around px-3 pt-6 pb-2">
        {/* Horizontal gridlines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pr-1">
          <div className="w-full border-t border-white/5 flex justify-between items-center text-[9px] text-white/25 font-orbitron px-1">
            <span>Target Mastery</span>
            <span>100%</span>
          </div>
          <div className="w-full border-t border-white/5 flex justify-between items-center text-[9px] text-white/20 font-orbitron px-1">
            <span>Halfway</span>
            <span>50%</span>
          </div>
          <div className="w-full border-t border-white/5 flex justify-between items-center text-[9px] text-white/15 font-orbitron px-1">
            <span>Base Line</span>
            <span>0%</span>
          </div>
        </div>

        {data.map((bar, idx) => {
          const percent = bar.total > 0 ? (bar.completed / bar.total) * 100 : 0;
          const barHeight = Math.max(4, (percent / 100) * chartHeight);
          const isHovered = hoveredIdx === idx;

          return (
            <div
              key={idx}
              className="flex flex-col items-center group relative z-10 flex-1 max-w-[68px] mx-1 h-full justify-end cursor-pointer"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Floating Percentage / Value Tag directly above bar */}
              <div 
                className={`mb-2 transition-all duration-300 flex flex-col items-center font-orbitron font-bold text-xs ${
                  isHovered ? 'scale-110 -translate-y-1' : ''
                }`}
                style={{ color: bar.color }}
              >
                <span>{Math.round(percent)}%</span>
                <span className="text-[8px] font-normal text-white/40">({bar.completed}/{bar.total})</span>
              </div>

              {/* Bar Fill Track (Full Height) */}
              <div 
                className="w-7 sm:w-9 bg-white/4 border border-white/5 rounded-t-xl overflow-hidden flex items-end relative transition-all duration-300 group-hover:border-white/20"
                style={{ height: `${chartHeight}px` }}
              >
                {/* Active Level Glow Fill */}
                <div
                  className="w-full rounded-t-lg transition-all duration-1000 ease-out relative"
                  style={{
                    height: `${barHeight}px`,
                    backgroundColor: bar.color,
                    boxShadow: `0 0 20px ${bar.color}70, inset 0 2px 4px rgba(255,255,255,0.4)`
                  }}
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-white/40 rounded-t-lg" />
                </div>
              </div>

              {/* Axis Label */}
              <span 
                className="text-[10px] sm:text-xs font-orbitron uppercase mt-3 tracking-wider font-semibold transition-colors duration-200"
                style={{ color: isHovered ? bar.color : 'rgba(255,255,255,0.6)' }}
              >
                {bar.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Bottom status tagline */}
      <div className="flex items-center justify-between text-[10px] font-orbitron text-white/40 px-2">
        <span className="text-white/60">5 Academic Sectors</span>
        <span className="text-neon-cyan">Interactive Visualizer</span>
      </div>
    </div>
  );
}

// --- Large Smooth Line & Area Chart for Active Weekly Engagement ---
export function LineChart({ activeDays = [] }) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();

  // Generate data points for the past 7 days
  const points = [];
  let activeCount = 0;
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const isCompleted = activeDays.includes(dateStr);
    if (isCompleted) activeCount++;

    points.push({
      day: daysOfWeek[d.getDay()],
      dateStr,
      isCompleted,
      value: isCompleted ? 100 : 12, // High peak when active
      label: d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
    });
  }

  // Construct SVG dimensions
  const width = 380;
  const height = 230;
  const paddingX = 35;
  const paddingTop = 30;
  const paddingBottom = 40;

  const getCoordinates = () => {
    return points.map((p, idx) => {
      const x = paddingX + (idx * (width - paddingX * 2)) / (points.length - 1);
      const graphHeight = height - paddingTop - paddingBottom;
      const y = height - paddingBottom - (p.value / 100) * graphHeight;
      return { x, y, ...p };
    });
  };

  const coords = getCoordinates();

  // Smooth Bezier Spline path construction
  const createSmoothPath = (pts) => {
    if (pts.length === 0) return '';
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i];
      const p1 = pts[i + 1];
      const cp1x = p0.x + (p1.x - p0.x) / 2;
      const cp1y = p0.y;
      const cp2x = p0.x + (p1.x - p0.x) / 2;
      const cp2y = p1.y;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y}`;
    }
    return d;
  };

  const linePath = createSmoothPath(coords);
  const areaPath = coords.length > 0
    ? `${linePath} L ${coords[coords.length - 1].x} ${height - paddingBottom} L ${coords[0].x} ${height - paddingBottom} Z`
    : '';

  return (
    <div className="w-full h-full flex flex-col justify-between gap-5">
      {/* Top summary metrics */}
      <div className="grid grid-cols-2 gap-3 w-full">
        <div className="p-3 rounded-xl bg-white/2 border border-white/5 flex flex-col">
          <span className="text-[9px] font-orbitron text-white/40 uppercase tracking-wider">7-DAY ACTIVITY</span>
          <span className="text-sm font-bold font-orbitron text-neon-purple mt-0.5">{activeCount} of 7 Days Active</span>
        </div>
        <div className="p-3 rounded-xl bg-white/2 border border-white/5 flex flex-col">
          <span className="text-[9px] font-orbitron text-white/40 uppercase tracking-wider">ENGAGEMENT INDEX</span>
          <span className="text-sm font-bold font-orbitron text-neon-cyan mt-0.5">
            {activeCount >= 5 ? 'Elite (High)' : activeCount >= 2 ? 'Active' : 'Starting Out'}
          </span>
        </div>
      </div>

      {/* Large SVG canvas */}
      <div className="w-full relative h-[290px] flex items-center justify-center">
        <svg className="w-full h-full" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
          <defs>
            {/* Linear glow area gradient */}
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#bc3bf0" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#bc3bf0" stopOpacity="0.0" />
            </linearGradient>

            <linearGradient id="lineGradStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#bc3bf0" />
              <stop offset="50%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#bc3bf0" />
            </linearGradient>
          </defs>

          {/* Grid lines and horizontal values */}
          <line x1={paddingX} y1={paddingTop} x2={width - paddingX} y2={paddingTop} stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3" />
          <text x={paddingX - 6} y={paddingTop + 3} textAnchor="end" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="Orbitron">100%</text>

          <line x1={paddingX} y1={(paddingTop + height - paddingBottom) / 2} x2={width - paddingX} y2={(paddingTop + height - paddingBottom) / 2} stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 3" />
          <text x={paddingX - 6} y={(paddingTop + height - paddingBottom) / 2 + 3} textAnchor="end" fill="rgba(255,255,255,0.2)" fontSize="8" fontFamily="Orbitron">50%</text>

          <line x1={paddingX} y1={height - paddingBottom} x2={width - paddingX} y2={height - paddingBottom} stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <text x={paddingX - 6} y={height - paddingBottom + 3} textAnchor="end" fill="rgba(255,255,255,0.15)" fontSize="8" fontFamily="Orbitron">0%</text>

          {/* Glowing Area under the smooth line */}
          {areaPath && (
            <path
              d={areaPath}
              fill="url(#areaGrad)"
              className="transition-all duration-1000 ease-out"
            />
          )}

          {/* Core smooth spline stroke */}
          {linePath && (
            <path
              d={linePath}
              fill="transparent"
              stroke="url(#lineGradStroke)"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
              style={{
                filter: 'drop-shadow(0px 0px 8px rgba(0, 240, 255, 0.6))'
              }}
            />
          )}

          {/* Interactive Data Points with Glowing Halos */}
          {coords.map((coord, idx) => (
            <g key={idx} className="group cursor-pointer">
              {/* Outer Pulsing Glow */}
              <circle
                cx={coord.x}
                cy={coord.y}
                r={coord.isCompleted ? "8" : "5"}
                fill={coord.isCompleted ? "rgba(0, 240, 255, 0.25)" : "rgba(188, 59, 240, 0.15)"}
                className={coord.isCompleted ? "animate-ping opacity-50" : ""}
              />
              {/* Point Node */}
              <circle
                cx={coord.x}
                cy={coord.y}
                r={coord.isCompleted ? "5.5" : "4"}
                fill="#02000a"
                stroke={coord.isCompleted ? "#00f0ff" : "#bc3bf0"}
                strokeWidth={coord.isCompleted ? "2.5" : "1.8"}
                style={{
                  filter: `drop-shadow(0px 0px 6px ${coord.isCompleted ? '#00f0ff' : '#bc3bf0'})`
                }}
              />
              {/* Hover Target */}
              <circle
                cx={coord.x}
                cy={coord.y}
                r={14}
                fill="transparent"
              />
            </g>
          ))}

          {/* X-Axis Day Labels */}
          {coords.map((p, idx) => (
            <text
              key={idx}
              x={p.x}
              y={height - 15}
              textAnchor="middle"
              fill={p.isCompleted ? '#00f0ff' : 'rgba(255,255,255,0.4)'}
              fontSize="9"
              fontWeight={p.isCompleted ? 'bold' : 'normal'}
              fontFamily="Orbitron"
            >
              {p.day}
            </text>
          ))}
        </svg>
      </div>

      {/* 7-Day Day Badges Status Strip */}
      <div className="flex items-center justify-between gap-1 w-full pt-1">
        {points.map((p, idx) => (
          <div
            key={idx}
            className={`flex-1 py-1.5 px-1 rounded-lg border text-center font-orbitron transition-all ${
              p.isCompleted
                ? 'bg-neon-cyan/15 border-neon-cyan/40 text-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                : 'bg-white/2 border-white/5 text-white/30'
            }`}
          >
            <div className="text-[8px] leading-tight uppercase font-medium">{p.day}</div>
            <div className="text-[10px] font-bold mt-0.5">{p.isCompleted ? '✓' : '—'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
