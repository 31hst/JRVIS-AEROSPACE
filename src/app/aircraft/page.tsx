'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plane, ArrowRight, ShieldCheck, Gauge, Zap } from 'lucide-react';
import { AIRCRAFT_DATA } from '@/data/aircraft';
import FilterBar from '@/components/ui/FilterBar';
import HudBadge from '@/components/ui/HudBadge';

export default function AircraftCatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Aircraft' },
    { id: 'fighter', label: 'Fighter Jets' },
    { id: 'helicopter', label: 'Helicopters' },
    { id: 'stealth', label: '5th Gen Stealth' },
    { id: 'trainer', label: 'Trainers' },
    { id: 'transport', label: 'Transport / Maritime' },
    { id: 'program', label: 'Engines & Programs' },
  ];

  const filteredAircraft = AIRCRAFT_DATA.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      activeFilter === 'all' ? true : item.modelType === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header Banner */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-mono-tech text-[#FF6B00] uppercase tracking-wider">
          <Plane className="w-3.5 h-3.5" />
          <span>INDIAN MILITARY & CIVIL AVIATION ARCHIVE</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Indian Aircraft Fleet
        </h1>

        <p className="text-sm sm:text-base text-slate-400 max-w-3xl font-sans leading-relaxed">
          From the tailless supersonic HAL Tejas Mk1A to the extreme-altitude Siachen-conquering
          Prachand combat helicopter and upcoming 5th-generation AMCA stealth fighter.
          Browse verified technical specifications, armaments, and avionics.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filterOptions={filterOptions}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        resultCount={filteredAircraft.length}
        placeholder="Search aircraft by name, role, manufacturer..."
      />

      {/* Grid of Aircraft Cards */}
      {filteredAircraft.length === 0 ? (
        <div className="text-center py-24 rounded-xl border border-dashed border-[#1C2433] bg-[#070A10] space-y-3 font-mono-tech text-sm text-slate-500">
          <div>NO AIRCRAFT MATCHING CRITERIA</div>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('all');
            }}
            className="text-xs text-[#FF6B00] hover:underline"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAircraft.map((aircraft) => (
            <Link
              key={aircraft.id}
              href={`/aircraft/${aircraft.slug}`}
              className="group rounded-xl bg-[#090D15] border border-[#1C2433] hover:border-[#FF6B00]/60 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.15)] hud-bracket-container"
            >
              {/* Card Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={aircraft.heroImage}
                  alt={aircraft.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D15] via-transparent to-transparent" />

                {/* Status Badge in Corner */}
                <div className="absolute top-3 right-3">
                  <HudBadge status={aircraft.status} size="sm" />
                </div>

                {/* Role Pill */}
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono-tech text-slate-300 border border-white/10">
                  {aircraft.role.split('·')[0]}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-500">
                    <span>{aircraft.manufacturer.split('(')[0]}</span>
                    <span>{aircraft.era}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                    {aircraft.name}
                  </h3>

                  <p className="text-xs text-slate-400 font-sans line-clamp-2 leading-relaxed">
                    {aircraft.summary}
                  </p>
                </div>

                {/* Quick Specs HUD Bar */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#1C2433] text-[11px] font-mono-tech text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>{aircraft.specs.performance.maxSpeed.split('(')[0]}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>{aircraft.specs.armament?.capacity ? `${aircraft.specs.armament.capacity.split('(')[0]} payload` : 'Classified'}</span>
                  </div>
                </div>

                {/* Action Link Footer */}
                <div className="pt-3 border-t border-[#1C2433] flex items-center justify-between text-xs font-mono-tech text-[#FF6B00] group-hover:translate-x-1 transition-transform">
                  <span>3D VIEW & DOSSIER</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
