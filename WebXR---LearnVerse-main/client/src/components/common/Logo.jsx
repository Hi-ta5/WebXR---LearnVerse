import React from 'react';

/**
 * Shared LearnVerse Square Logo Component
 * 
 * Enforces:
 * - Equal width & height (aspect-ratio: 1 / 1)
 * - object-fit: contain (no stretching, cropping or squashing)
 * - flex-shrink: 0 (flex containers cannot squeeze or distort)
 * - border-radius: 8px (small clean radius, not pill/oval/capsule shaped)
 * - Single source of truth: /assets/logo.png
 */
export default function Logo({ size = 40, className = '', alt = 'LearnVerse Logo' }) {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      style={{
        width: pixelSize,
        height: pixelSize,
        minWidth: pixelSize,
        minHeight: pixelSize,
        maxWidth: pixelSize,
        maxHeight: pixelSize,
        aspectRatio: '1 / 1',
        borderRadius: '8px',
      }}
      className={`app-logo-box shrink-0 flex items-center justify-center overflow-hidden bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all ${className}`}
    >
      <img
        src="/assets/logo.png"
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          aspectRatio: '1 / 1',
          objectFit: 'contain',
          borderRadius: '8px',
        }}
        className="app-logo-img block shrink-0 select-none"
        loading="eager"
      />
    </div>
  );
}
