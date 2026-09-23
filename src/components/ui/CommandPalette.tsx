'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X, Plane, Satellite, Rocket, ChevronRight, CornerDownLeft } from 'lucide-react';
import { AIRCRAFT_DATA } from '@/data/aircraft';
import { SATELLITES_DATA } from '@/data/satellites';
import { ROCKETS_DATA } from '@/data/rockets';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const filteredAircraft = AIRCRAFT_DATA.filter(
    (item) =>
      item.name.toLowerCase().includes(cleanQuery) ||
      item.role.toLowerCase().includes(cleanQuery) ||
      item.manufacturer.toLowerCase().includes(cleanQuery)
  );

  const filteredSatellites = SATELLITES_DATA.filter(
    (item) =>
      item.name.toLowerCase().includes(cleanQuery) ||
      item.missionType.toLowerCase().includes(cleanQuery) ||
      (item.orbitalRegime || item.specs.orbitalRegime).toLowerCase().includes(cleanQuery)
  );

  const filteredRockets = ROCKETS_DATA.filter(
    (item) =>
      item.name.toLowerCase().includes(cleanQuery) ||
      item.family.toLowerCase().includes(cleanQuery) ||
      item.specs.payloadToLEO.toLowerCase().includes(cleanQuery)
  );

  const totalResults =
    filteredAircraft.length + filteredSatellites.length + filteredRockets.length;

  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <div className="fixed inset-0 z-[9990] flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#0B0F17] border border-[#FF6B00]/40 rounded-lg shadow-2xl overflow-hidden hud-bracket-container z-10">
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#1C2433] bg-[#070A10]">
          <Search className="w-5 h-5 text-[#FF6B00] mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Search all Indian aircraft, satellites, rockets, or programs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-white placeholder-slate-500 font-sans focus:outline-none text-base"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {totalResults === 0 ? (
            <div className="text-center py-12 text-slate-500 font-mono-tech text-sm">
              NO AEROSPACE ASSETS MATCHING "{query.toUpperCase()}"
            </div>
          ) : (
            <>
              {/* Aircraft Results */}
              {filteredAircraft.length > 0 && (
                <div>
                  <div className="text-[11px] font-mono-tech uppercase text-[#FF6B00] tracking-wider px-2 py-1 flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5" />
                    <span>Aircraft ({filteredAircraft.length})</span>
                  </div>
                  <div className="mt-1 space-y-1">
                    {filteredAircraft.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(`/aircraft/${item.slug}`)}
                        className="w-full text-left flex items-center justify-between p-2.5 rounded hover:bg-[#131926] transition-colors group"
                      >
                        <div>
                          <div className="text-white font-medium text-sm group-hover:text-[#FF6B00] transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-400 font-mono-tech">
                            {item.role} · {item.manufacturer}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-[#FF6B00] transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Satellites Results */}
              {filteredSatellites.length > 0 && (
                <div>
                  <div className="text-[11px] font-mono-tech uppercase text-[#FF6B00] tracking-wider px-2 py-1 flex items-center gap-1.5">
                    <Satellite className="w-3.5 h-3.5" />
                    <span>Satellites & Deep Space ({filteredSatellites.length})</span>
                  </div>
                  <div className="mt-1 space-y-1">
                    {filteredSatellites.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(`/satellites/${item.slug}`)}
                        className="w-full text-left flex items-center justify-between p-2.5 rounded hover:bg-[#131926] transition-colors group"
                      >
                        <div>
                          <div className="text-white font-medium text-sm group-hover:text-[#FF6B00] transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-400 font-mono-tech">
                            {item.missionType} · {item.orbitalRegime || item.specs.orbitalRegime}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-[#FF6B00] transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Rockets Results */}
              {filteredRockets.length > 0 && (
                <div>
                  <div className="text-[11px] font-mono-tech uppercase text-[#FF6B00] tracking-wider px-2 py-1 flex items-center gap-1.5">
                    <Rocket className="w-3.5 h-3.5" />
                    <span>Launch Vehicles ({filteredRockets.length})</span>
                  </div>
                  <div className="mt-1 space-y-1">
                    {filteredRockets.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(`/rockets/${item.slug}`)}
                        className="w-full text-left flex items-center justify-between p-2.5 rounded hover:bg-[#131926] transition-colors group"
                      >
                        <div>
                          <div className="text-white font-medium text-sm group-hover:text-[#FF6B00] transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-400 font-mono-tech">
                            Payload to LEO: {item.specs.payloadToLEO} · {item.specs.successRate} Success
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-[#FF6B00] transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-[#1C2433] bg-[#070A10] flex items-center justify-between text-[11px] text-slate-500 font-mono-tech">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-[#1C2433] text-slate-300 rounded text-[10px]">ESC</kbd> to close
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-[#1C2433] text-slate-300 rounded text-[10px]">ENTER</kbd> to navigate
            </span>
          </div>
          <span className="text-[#FF6B00]/70">JRVIS TELEMETRY INDEX</span>
        </div>
      </div>
    </div>
  );
}
