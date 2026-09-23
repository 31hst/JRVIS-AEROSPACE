import React from 'react';
import { StatusType } from '@/types';

interface HudBadgeProps {
  status: StatusType | string;
  size?: 'sm' | 'md';
  showPulse?: boolean;
}

export default function HudBadge({ status, size = 'md', showPulse = true }: HudBadgeProps) {
  const getColors = () => {
    switch (status) {
      case 'Active':
      case 'Mission Accomplished':
        return {
          bg: 'bg-emerald-500/10',
          text: 'text-emerald-400',
          border: 'border-emerald-500/30',
          dot: 'bg-emerald-400',
          pulse: 'bg-emerald-400/40',
        };
      case 'Under Development':
        return {
          bg: 'bg-[#FF6B00]/10',
          text: 'text-[#FF6B00]',
          border: 'border-[#FF6B00]/30',
          dot: 'bg-[#FF6B00]',
          pulse: 'bg-[#FF6B00]/40',
        };
      case 'Concept':
        return {
          bg: 'bg-amber-500/10',
          text: 'text-amber-400',
          border: 'border-amber-500/30',
          dot: 'bg-amber-400',
          pulse: 'bg-amber-400/40',
        };
      case 'Procured':
        return {
          bg: 'bg-cyan-500/10',
          text: 'text-cyan-400',
          border: 'border-cyan-500/30',
          dot: 'bg-cyan-400',
          pulse: 'bg-cyan-400/40',
        };
      case 'Retired':
      default:
        return {
          bg: 'bg-slate-500/10',
          text: 'text-slate-400',
          border: 'border-slate-500/30',
          dot: 'bg-slate-400',
          pulse: 'bg-slate-400/30',
        };
    }
  };

  const style = getColors();
  const isSm = size === 'sm';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono-tech uppercase tracking-wider border rounded-sm ${
        style.bg
      } ${style.border} ${style.text} ${
        isSm ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs'
      }`}
    >
      {showPulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${style.pulse}`}
          />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${style.dot}`} />
        </span>
      )}
      <span>{status}</span>
    </span>
  );
}
