'use client';

import React, { useEffect, useState, useRef } from 'react';

interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
  subtext?: string;
  duration?: number;
}

export default function StatCounter({
  end,
  label,
  suffix = '',
  prefix = '',
  subtext,
  duration = 2000,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic curve
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div
      ref={ref}
      className="relative p-6 rounded-lg bg-[#0D111A]/80 border border-[#1C2433] hover:border-[#FF6B00]/40 transition-colors hud-bracket-container group"
    >
      <div className="flex items-baseline gap-1">
        <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight group-hover:text-[#FF6B00] transition-colors">
          {prefix}
          {count}
          {suffix}
        </span>
      </div>

      <div className="mt-2 text-xs font-mono-tech uppercase tracking-widest text-[#FF6B00] font-semibold">
        {label}
      </div>

      {subtext && (
        <div className="mt-1 text-[11px] text-slate-400 font-sans">
          {subtext}
        </div>
      )}

      {/* Decorative corner tick */}
      <div className="absolute top-2 right-2 text-[9px] font-mono-tech text-slate-600">
        SYS.0{end % 9 + 1}
      </div>
    </div>
  );
}
