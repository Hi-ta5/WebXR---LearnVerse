import React from 'react';

// --- Concentric Circular Progress Chart ---
export function CircularProgressChart({ subjects }) {
  // Configs for rings: [subject, percentage, strokeColor, radius]
  const rings = [
    { name: subjects[0]?.name || 'Networks', value: subjects[0]?.percent || 0, color: '#00f0ff', r: 70 },
    { name: subjects[1]?.name || 'Systems', value: subjects[1]?.percent || 0, color: '#bc3bf0', r: 50 },
    { name: subjects[2]?.name || 'Structures', value: subjects[2]?.percent || 0, color: '#3b82f6', r: 30 }
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-around gap-6 py-4">
      {/* Dynamic concentric SVG rings */}
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
          <defs>
            <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-purple" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {rings.map((ring, idx) => {
            const circumference = 2 * Math.PI * ring.r;
            const strokeDashoffset = circumference - (ring.value / 100) * circumference;
            const filterId = ring.color === '#00f0ff' ? 'url(#glow-cyan)' : ring.color === '#bc3bf0' ? 'url(#glow-purple)' : 'url(#glow-blue)';

            return (
              <g key={idx}>
                {/* Track Circle */}
                <circle
                  cx="100"
                  cy="100"
                  r={ring.r}
                  fill="transparent"
                  stroke="rgba(255, 255, 255, 0.03)"
                  strokeWidth="8"
                />
                {/* Progress Circle */}
                <circle
                  cx="100"
                  cy="100"
                  r={ring.r}
                  fill="transparent"
                  stroke={ring.color}
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  filter={filterId}
                  className="transition-all duration-1000 ease-out"
                />
              </g>
            );
          })}
        </svg>
        {/* Absolute Slogan in center */}
        <div className="absolute flex flex-col items-center justify-center font-orbitron">
          <span className="text-[10px] text-white/40 tracking-wider">ACADEMIC</span>
          <span className="text-sm font-bold text-neon-cyan glow-text-cyan">Subject</span>
        </div>
      </div>

      {/* RINGS LEGEND */}
      <div className="flex flex-col gap-3 flex-1 max-w-[200px]">
        {rings.map((ring, idx) => (
          <div key={idx} className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-white/2 border border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: ring.color, boxShadow: `0 0 8px ${ring.color}` }} />
              <span className="font-medium text-white/80">{ring.name}</span>
            </div>
            <span className="font-orbitron font-bold" style={{ color: ring.color }}>{ring.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Bar Chart for Topic Completions ---
export function BarChart({ data }) {
  // Expecting data: Array of { label: 'OS', completed: 4, total: 6, color: '#bc3bf0' }
  const chartHeight = 120;
  const maxVal = Math.max(...data.map(d => d.total), 8);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Graph Area */}
      <div className="relative border-b border-l border-white/10 h-[140px] w-full flex items-end justify-around px-4 pt-4">

        {/* Horizontal gridlines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pr-1">
          <div className="w-full border-t border-white/3 text-[9px] text-white/20 font-orbitron text-right pt-0.5">100%</div>
          <div className="w-full border-t border-white/3 text-[9px] text-white/20 font-orbitron text-right">50%</div>
          <div className="w-full border-t border-white/3 text-[9px] text-white/20 font-orbitron text-right">0%</div>
        </div>

        {data.map((bar, idx) => {
          const percent = bar.total > 0 ? (bar.completed / bar.total) * 100 : 0;
          const barHeight = (percent / 100) * chartHeight;

          return (
            <div key={idx} className="flex flex-col items-center group relative z-10 w-16">

              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-space-black border border-white/10 text-[10px] py-1 px-2 rounded-lg font-orbitron text-white shadow-xl z-20 pointer-events-none text-center leading-normal whitespace-nowrap">
                {bar.completed} / {bar.total} Topics ({Math.round(percent)}%)
              </div>

              {/* Bar Fill */}
              <div className="w-6 bg-white/5 rounded-t-lg overflow-hidden flex items-end relative" style={{ height: `${chartHeight}px` }}>
                <div
                  className="w-full rounded-t-lg transition-all duration-1000 ease-out"
                  style={{
                    height: `${barHeight}px`,
                    backgroundColor: bar.color,
                    boxShadow: `0 0 15px ${bar.color}50`
                  }}
                />
              </div>

              {/* Axis Label */}
              <span className="text-[10px] text-white/50 font-orbitron uppercase mt-2.5 tracking-wider truncate w-full text-center">
                {bar.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Line Chart for Active Weekly Engagement ---
export function LineChart({ activeDays }) {
  // Compute recent 7 days points
  // activeDays is an array of dates 'YYYY-MM-DD' when the user did work.
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();

  // Generate data points for the past 7 days
  const points = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const isCompleted = activeDays.includes(dateStr);

    points.push({
      day: daysOfWeek[d.getDay()],
      value: isCompleted ? 100 : 10, // Mock minutes/effort points
      label: d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
    });
  }

  // Construct SVG path coordinates
  const width = 340;
  const height = 110;
  const padding = 20;

  const getCoordinates = () => {
    return points.map((p, idx) => {
      const x = padding + (idx * (width - padding * 2)) / (points.length - 1);
      // Map 0-100 values to height
      const y = height - padding - (p.value / 100) * (height - padding * 2);
      return { x, y };
    });
  };

  const coords = getCoordinates();

  // Build SVG path strings
  let linePath = '';
  let areaPath = '';

  if (coords.length > 0) {
    linePath = `M ${coords[0].x} ${coords[0].y} ` + coords.slice(1).map(c => `L ${c.x} ${c.y}`).join(' ');
    areaPath = `${linePath} L ${coords[coords.length - 1].x} ${height - padding} L ${coords[0].x} ${height - padding} Z`;
  }

  return (
    <div className="w-full flex flex-col gap-4">
      {/* SVG canvas */}
      <div className="w-full overflow-hidden">
        <svg className="w-full" viewBox={`0 0 ${width} ${height}`}>
          <defs>
            {/* Linear glow gradient */}
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bc3bf0" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#bc3bf0" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

          {/* Area under the line */}
          {areaPath && (
            <path
              d={areaPath}
              fill="url(#lineGrad)"
              className="transition-all duration-1000 ease-out"
            />
          )}

          {/* Core line path */}
          {linePath && (
            <path
              d={linePath}
              fill="transparent"
              stroke="#bc3bf0"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
              style={{
                filter: 'drop-shadow(0px 0px 5px rgba(188, 59, 240, 0.4))'
              }}
            />
          )}

          {/* Data Points */}
          {coords.map((coord, idx) => (
            <g key={idx} className="group cursor-pointer">
              <circle
                cx={coord.x}
                cy={coord.y}
                r="4.5"
                fill="#02000a"
                stroke={points[idx].value > 50 ? '#00f0ff' : '#bc3bf0'}
                strokeWidth="2"
                style={{ filter: `drop-shadow(0px 0px 4px ${points[idx].value > 50 ? '#00f0ff' : '#bc3bf0'})` }}
              />
              {/* Hover overlay ring */}
              <circle
                cx={coord.x}
                cy={coord.y}
                r="9"
                fill={points[idx].value > 50 ? 'rgba(0, 240, 255, 0.1)' : 'rgba(188, 59, 240, 0.1)'}
                className="opacity-0 hover:opacity-100 transition-opacity"
              />
            </g>
          ))}

          {/* X Axis labels */}
          {points.map((p, idx) => (
            <text
              key={idx}
              x={coords[idx].x}
              y={height - 4}
              textAnchor="middle"
              fill="rgba(255,255,255,0.4)"
              fontSize="8"
              fontFamily="Orbitron"
            >
              {p.day}
            </text>
          ))}
        </svg>
      </div>

      {/* Bottom status tagline */}
      <div className="flex items-center justify-between text-[10px] text-white/30 font-orbitron px-1">
        <span className="text-neon-purple">ACTIVE DAYS</span>
      </div>
    </div>
  );
}
