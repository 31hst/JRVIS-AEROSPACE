'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Satellite, ArrowRight, Orbit, Compass, Radio } from 'lucide-react';
import { SATELLITES_DATA } from '@/data/satellites';
import FilterBar from '@/components/ui/FilterBar';
import HudBadge from '@/components/ui/HudBadge';

export default function SatellitesCatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Spacecraft' },
    { id: 'lander', label: 'Lunar & Planetary Landers' },
    { id: 'orbiter', label: 'Deep Space Orbiters' },
    { id: 'solar', label: 'Solar Observatories' },
    { id: 'earthsat', label: 'Earth Observation (EO)' },
    { id: 'commsat', label: 'Communication & NavIC' },
  ];

  const filteredSatellites = SATELLITES_DATA.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.missionType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.orbitalRegime || item.specs.orbitalRegime).toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specs.launchVehicle.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      activeFilter === 'all' ? true : item.modelType === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header Banner */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-mono-tech text-[#FF6B00] uppercase tracking-wider">
          <Satellite className="w-3.5 h-3.5" />
          <span>ISRO SATELLITE & DEEP SPACE MISSIONS ARCHIVE</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Indian Satellites & Space Probes
        </h1>

        <p className="text-sm sm:text-base text-slate-400 max-w-3xl font-sans leading-relaxed">
          From the historic Chandrayaan-3 lunar south pole soft-landing to Mangalyaan\'s Mars triumph,
          Aditya-L1 solar halo observatory, sub-meter Cartosat-3 reconnaissance, and the sovereign
          NavIC navigation constellation. Explore real scientific payloads and orbital data.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filterOptions={filterOptions}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        resultCount={filteredSatellites.length}
        placeholder="Search spacecraft by name, mission type, orbit..."
      />

      {/* Grid of Satellite Cards */}
      {filteredSatellites.length === 0 ? (
        <div className="text-center py-24 rounded-xl border border-dashed border-[#1C2433] bg-[#070A10] space-y-3 font-mono-tech text-sm text-slate-500">
          <div>NO SATELLITE ASSETS MATCHING CRITERIA</div>
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
          {filteredSatellites.map((sat) => (
            <Link
              key={sat.id}
              href={`/satellites/${sat.slug}`}
              className="group rounded-xl bg-[#090D15] border border-[#1C2433] hover:border-[#FF6B00]/60 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.15)] hud-bracket-container"
            >
              {/* Card Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={sat.heroImage}
                  alt={sat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D15] via-transparent to-transparent" />

                {/* Status Badge in Corner */}
                <div className="absolute top-3 right-3">
                  <HudBadge status={sat.status} size="sm" />
                </div>

                {/* Orbital Regime Pill */}
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono-tech text-slate-300 border border-white/10 max-w-[85%] truncate">
                  {(sat.orbitalRegime || sat.specs.orbitalRegime).split('(')[0]}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-500">
                    <span>{sat.agency}</span>
                    <span>{sat.launchDate.split('(')[0]}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                    {sat.name}
                  </h3>

                  <p className="text-xs text-slate-400 font-sans line-clamp-2 leading-relaxed">
                    {sat.summary}
                  </p>
                </div>

                {/* Quick Specs HUD Bar */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#1C2433] text-[11px] font-mono-tech text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Orbit className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span className="truncate">{sat.specs.launchVehicle}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>{sat.specs.payloads.length} Instruments</span>
                  </div>
                </div>

                {/* Action Link Footer */}
                <div className="pt-3 border-t border-[#1C2433] flex items-center justify-between text-xs font-mono-tech text-[#FF6B00] group-hover:translate-x-1 transition-transform">
                  <span>3D MODEL & SCIENTIFIC DATA</span>
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
