'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest('a') ||
        target?.closest('button') ||
        target?.closest('input') ||
        target?.closest('[role="button"]') ||
        target?.closest('.interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-transform duration-75 ease-out"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Center Reticle Point */}
      <div
        className={`rounded-full transition-all duration-150 ${
          isHovered
            ? 'w-2 h-2 bg-[#FF6B00] shadow-[0_0_12px_#FF6B00]'
            : 'w-1.5 h-1.5 bg-[#FF6B00]'
        }`}
      />

      {/* Target Reticle Outer Ring */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ${
          isHovered
            ? 'w-10 h-10 border-[#FF6B00] bg-[#FF6B00]/10 scale-110 rotate-45'
            : 'w-7 h-7 border-[#FF6B00]/40 rotate-0'
        }`}
      >
        {/* Reticle Crosshairs Ticks */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-0.5 bg-[#FF6B00]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-0.5 bg-[#FF6B00]" />
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-1 bg-[#FF6B00]" />
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-0.5 h-1 bg-[#FF6B00]" />
      </div>

      {/* Small Telemetry Coordinates Readout on Hover */}
      {isHovered && (
        <div className="absolute left-6 top-3 text-[9px] font-mono-tech text-[#FF6B00] tracking-widest uppercase whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-[#FF6B00]/30">
          LOCK // {Math.round(pos.x)},{Math.round(pos.y)}
        </div>
      )}
    </div>
  );
}
