'use client';

import React from 'react';
import { Search, X, Filter } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  filterOptions: FilterOption[];
  activeFilter: string;
  onFilterChange: (id: string) => void;
  resultCount: number;
  placeholder?: string;
}

export default function FilterBar({
  searchQuery,
  onSearchChange,
  filterOptions,
  activeFilter,
  onFilterChange,
  resultCount,
  placeholder = 'Search catalog...',
}: FilterBarProps) {
  return (
    <div className="w-full space-y-4 mb-8">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF6B00]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-10 pr-10 py-2.5 bg-[#0D111A] border border-[#1C2433] focus:border-[#FF6B00] rounded-lg text-sm text-white placeholder-slate-500 font-sans focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Result Counter Display */}
        <div className="flex items-center gap-2 font-mono-tech text-xs text-slate-400">
          <Filter className="w-3.5 h-3.5 text-[#FF6B00]" />
          <span>MATCHING ASSETS:</span>
          <span className="text-[#FF6B00] font-bold px-2 py-0.5 rounded bg-[#FF6B00]/10 border border-[#FF6B00]/30">
            {resultCount}
          </span>
        </div>
      </div>

      {/* Filter Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {filterOptions.map((opt) => {
          const isActive = activeFilter === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => onFilterChange(opt.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono-tech whitespace-nowrap transition-all uppercase tracking-wider ${
                isActive
                  ? 'bg-[#FF6B00] text-black font-bold shadow-[0_0_15px_rgba(255,107,0,0.4)]'
                  : 'bg-[#0D111A] text-slate-300 hover:text-white border border-[#1C2433] hover:border-slate-700'
              }`}
            >
              {opt.label}
            </button>
          );
        })}

        {(searchQuery || activeFilter !== 'all') && (
          <button
            onClick={() => {
              onSearchChange('');
              onFilterChange('all');
            }}
            className="px-3 py-1.5 text-xs font-mono-tech text-slate-400 hover:text-[#FF6B00] flex items-center gap-1 transition-colors"
          >
            <X className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>
    </div>
  );
}
