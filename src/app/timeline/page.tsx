'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, Rocket, Satellite, Plane, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { TIMELINE_DATA } from '@/data/timeline';

export default function TimelinePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Milestones' },
    { id: 'Launch Vehicles', label: 'Rockets & Launchers' },
    { id: 'Deep Space', label: 'Deep Space Probes' },
    { id: 'Satellites', label: 'Satellites' },
    { id: 'Aviation', label: 'Aviation & Defense' },
    { id: 'Future Roadmap', label: '2025-2040 Roadmap' },
  ];

  const filteredItems = TIMELINE_DATA.filter((item) =>
    selectedCategory === 'all' ? true : item.category === selectedCategory
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-mono-tech text-[#FF6B00] uppercase tracking-wider">
          <Clock className="w-3.5 h-3.5" />
          <span>CHRONOLOGICAL CAPABILITY MAP · 1963 TO 2040</span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
          India’s Aerospace Odyssey
        </h1>

        <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
          From the humble sands of Thumba church to touching down at the lunar south pole and
          scaffolding the upcoming Bharatiya Antariksh Station. An interactive chronicle of sovereign
          engineering breakthroughs.
        </p>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pt-4 pb-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#FF6B00] text-black font-bold shadow-[0_0_15px_rgba(255,107,0,0.4)]'
                    : 'bg-[#090D15] text-slate-300 hover:text-white border border-[#1C2433]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Vertical Timeline Structure */}
      <div className="relative border-l-2 border-[#FF6B00]/30 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
        {filteredItems.map((item, idx) => (
          <div key={item.id} className="relative group">
            {/* Year Stamp on Left (Desktop) */}
            <div className="hidden sm:block absolute -left-40 top-0 w-28 text-right font-display text-2xl font-black text-[#FF6B00] group-hover:scale-110 transition-transform">
              {item.year}
            </div>

            {/* Glowing Reticle Node on Timeline Line */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#030508] border-2 border-[#FF6B00] group-hover:bg-[#FF6B00] transition-colors shadow-[0_0_12px_#FF6B00]" />

            {/* Milestone Card */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#090D15] border border-[#1C2433] group-hover:border-[#FF6B00]/50 transition-all duration-300 space-y-4 hud-bracket-container hover:shadow-[0_0_25px_rgba(255,107,0,0.1)]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="sm:hidden font-display text-base font-bold text-[#FF6B00]">
                    {item.year}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#FF6B00]/10 border border-[#FF6B00]/30 font-mono-tech text-[10px] text-[#FF6B00] uppercase">
                    {item.agency}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#1C2433] text-[10px] font-mono-tech text-slate-300">
                    {item.category}
                  </span>
                </div>

                {item.dateStr && (
                  <span className="font-mono-tech text-[11px] text-slate-500">
                    {item.dateStr}
                  </span>
                )}
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {item.summary}
              </p>

              {/* Historic Significance Highlight */}
              <div className="p-3.5 rounded-lg bg-[#0D111A] border-l-2 border-[#FF6B00] text-xs font-sans text-slate-300 leading-relaxed">
                <span className="font-mono-tech font-bold text-[#FF6B00] mr-1.5">// KEY HIGHLIGHT:</span>
                {item.highlight}
              </div>

              {/* Stats Badge */}
              {item.stats && (
                <div className="pt-2 flex items-center justify-between border-t border-white/5 text-xs font-mono-tech">
                  <span className="text-slate-500">{item.stats.label}</span>
                  <span className="text-[#FF6B00] font-semibold">{item.stats.value}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Mission Sign-off Callout */}
      <div className="p-8 rounded-xl bg-gradient-to-r from-[#0D111A] to-[#05070B] border border-[#1C2433] text-center space-y-3 font-mono-tech">
        <span className="text-xs text-[#FF6B00] uppercase tracking-widest block">
          SOVEREIGN FUTURE HORIZON
        </span>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
          The Journey Continues: Moon & Beyond
        </h3>
        <p className="text-xs text-slate-400 max-w-xl mx-auto font-sans leading-relaxed">
          With the Cabinet approval of NGLV "Surya" and the Bharatiya Antariksh Station (BAS),
          India\'s aerospace engineers are designing the hardware that will sustain long-term human
          habitation in low Earth orbit and plant the national tricolor on the Moon by 2040.
        </p>
      </div>
    </div>
  );
}
