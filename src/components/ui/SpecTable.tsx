import React from 'react';

interface SpecRow {
  label: string;
  value: string | number | undefined;
  unit?: string;
  highlight?: boolean;
}

interface SpecSection {
  title: string;
  rows: SpecRow[];
}

interface SpecTableProps {
  sections: SpecSection[];
  title?: string;
}

export default function SpecTable({ sections, title = 'TECHNICAL SPECIFICATIONS' }: SpecTableProps) {
  return (
    <div className="w-full bg-[#090D15] border border-[#1C2433] rounded-lg overflow-hidden hud-bracket-container">
      {/* Header */}
      <div className="px-5 py-3.5 bg-[#05070B] border-b border-[#1C2433] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-sm bg-[#FF6B00]" />
          <h3 className="font-display text-xs font-bold uppercase tracking-widest text-white">
            {title}
          </h3>
        </div>
        <span className="font-mono-tech text-[10px] text-slate-500 uppercase">
          CLASSIFIED // PUBLIC SPEC
        </span>
      </div>

      {/* Sections */}
      <div className="divide-y divide-[#1C2433]">
        {sections.map((sec, idx) => (
          <div key={idx} className="p-5">
            <h4 className="font-mono-tech text-[11px] font-semibold uppercase tracking-wider text-[#FF6B00] mb-3 flex items-center gap-2">
              <span>// {sec.title}</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
              {sec.rows
                .filter((r) => r.value !== undefined && r.value !== '')
                .map((row, rIdx) => (
                  <div
                    key={rIdx}
                    className="flex items-baseline justify-between py-1 border-b border-white/[0.04] text-xs font-mono-tech"
                  >
                    <span className="text-slate-400">{row.label}</span>
                    <span
                      className={`text-right ${
                        row.highlight ? 'text-[#FF6B00] font-semibold' : 'text-slate-200'
                      }`}
                    >
                      {row.value} {row.unit && <span className="text-slate-400">{row.unit}</span>}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
