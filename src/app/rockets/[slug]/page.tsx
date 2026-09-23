'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { ArrowLeft, Rocket, Layers, Flame, CheckCircle2, Cpu, Maximize2, ShieldAlert } from 'lucide-react';
import { ROCKETS_DATA } from '@/data/rockets';
import CanvasWrapper from '@/components/3d/CanvasWrapper';
import SpecTable from '@/components/ui/SpecTable';
import HudBadge from '@/components/ui/HudBadge';
import LightboxModal from '@/components/ui/LightboxModal';

export default function RocketDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const rocket = ROCKETS_DATA.find((item) => item.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!rocket) {
    return notFound();
  }

  const relatedRockets = ROCKETS_DATA.filter((item) =>
    rocket.relatedSlugs.includes(item.slug)
  );

  const specSections = [
    {
      title: 'VEHICLE DIMENSIONS & LIFT CAPACITY',
      rows: [
        { label: 'Height', value: rocket.specs.height },
        { label: 'Core Diameter', value: rocket.specs.diameter },
        { label: 'Payload Fairing Diameter', value: rocket.specs.fairingDiameter },
        { label: 'Stages Count', value: `${rocket.specs.stagesCount} Stages` },
        { label: 'Gross Lift-Off Mass', value: rocket.specs.liftOffMass, highlight: true },
        { label: 'Payload to LEO (Low Earth Orbit)', value: rocket.specs.payloadToLEO, highlight: true },
        { label: 'Payload to GTO (Geostationary)', value: rocket.specs.payloadToGTO, highlight: true },
      ],
    },
    {
      title: 'FLIGHT RECORD & RELIABILITY',
      rows: [
        { label: 'First Flight', value: rocket.specs.firstFlight },
        { label: 'Total Launch Attempts', value: rocket.specs.totalLaunches },
        { label: 'Successful Launches', value: rocket.specs.successfulLaunches, highlight: true },
        { label: 'Overall Mission Success Rate', value: rocket.specs.successRate, highlight: true },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Back Navigation Bar */}
      <div className="flex items-center justify-between">
        <Link
          href="/rockets"
          className="inline-flex items-center gap-2 text-xs font-mono-tech text-slate-400 hover:text-[#FF6B00] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO LAUNCH VEHICLES</span>
        </Link>

        <div className="flex items-center gap-3">
          <HudBadge status={rocket.status} />
          <span className="text-xs font-mono-tech text-slate-500 uppercase hidden sm:block">
            {rocket.agency}
          </span>
        </div>
      </div>

      {/* Entity Title Header */}
      <div className="space-y-3">
        <div className="text-xs font-mono-tech text-[#FF6B00] uppercase tracking-widest flex items-center gap-2">
          <span>{rocket.family}</span>
          <span>·</span>
          <span>{rocket.specs.successRate} SUCCESS RATE</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          {rocket.name}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl font-sans">
          {rocket.summary}
        </p>
      </div>

      {/* 3D Model Interactive Viewer (with Exploded View Toggle) */}
      <div className="space-y-2">
        <CanvasWrapper
          modelType="rocket"
          subType={rocket.modelType}
          className="h-[520px] sm:h-[640px]"
          showExplodedToggle={true}
        />
        <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-500 px-2">
          <span>3D ROCKET ARCHITECTURE // CLICK 'EXPLODED VIEW' TO SEPARATE STAGES</span>
          <span>DRAG TO ORBIT · SCROLL TO ZOOM</span>
        </div>
      </div>

      {/* Stage-by-Stage Engineering Breakdown Cards */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-[#1C2433] pb-3">
          <Layers className="w-5 h-5 text-[#FF6B00]" />
          <h2 className="font-display text-xl font-bold text-white uppercase tracking-wider">
            Stage-by-Stage Propulsion Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rocket.stages.map((stage) => (
            <div
              key={stage.stageNumber}
              className="p-6 rounded-xl bg-[#090D15] border border-[#1C2433] hover:border-[#FF6B00]/40 transition-colors space-y-4 hud-bracket-container flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono-tech">
                  <span className="text-[#FF6B00] font-bold">
                    STAGE {stage.stageNumber} // {stage.code}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#1C2433] text-slate-300">
                    {stage.propulsionType}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-white">
                  {stage.name}
                </h3>

                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Technical Stage Metrics */}
              <div className="pt-4 border-t border-[#1C2433] space-y-2 text-xs font-mono-tech">
                <div className="flex justify-between">
                  <span className="text-slate-500">Engine:</span>
                  <span className="text-slate-300 text-right truncate max-w-[60%]">{stage.engine}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Propellant:</span>
                  <span className="text-slate-300 text-right truncate max-w-[60%]">{stage.propellant}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Peak Thrust:</span>
                  <span className="text-[#FF6B00] font-semibold">{stage.thrustKN}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Burn Time:</span>
                  <span className="text-slate-300">{stage.burnTimeSec}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid: Narrative & Specs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Engineering History Narrative & Notable Missions */}
        <div className="lg:col-span-7 space-y-8">
          <div className="p-6 sm:p-8 rounded-xl bg-[#090D15] border border-[#1C2433] space-y-5">
            <h2 className="font-display text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-[#1C2433] pb-4">
              <Rocket className="w-5 h-5 text-[#FF6B00]" />
              <span>Engineering History & Evolution</span>
            </h2>

            <div className="space-y-4 text-sm text-slate-300 font-sans leading-relaxed">
              {rocket.description.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Notable Landmark Flights */}
          {rocket.notableMissions.length > 0 && (
            <div className="p-6 sm:p-8 rounded-xl bg-[#090D15] border border-[#1C2433] space-y-4 hud-bracket-container">
              <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#FF6B00]" />
                <span>Historic & Landmark Missions Launched</span>
              </h3>

              <div className="space-y-3">
                {rocket.notableMissions.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-4 rounded-lg bg-[#0D111A] border border-white/5 space-y-1.5 font-mono-tech"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">
                        {m.missionName}
                      </span>
                      <span className="text-[11px] text-[#FF6B00]">
                        {m.date}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">
                      Payload: {m.payload}
                    </div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed pt-1">
                      {m.significance}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Photo Gallery Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
                Launch Complex & Static Test Gallery
              </h3>
              <span className="text-xs font-mono-tech text-slate-500">
                CLICK TO OPEN HIGH-RES LIGHTBOX
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {rocket.gallery.map((imgUrl, imgIdx) => (
                <button
                  key={imgIdx}
                  onClick={() => {
                    setLightboxIndex(imgIdx);
                    setLightboxOpen(true);
                  }}
                  className="group relative h-36 rounded-lg overflow-hidden border border-[#1C2433] hover:border-[#FF6B00] transition-colors"
                >
                  <img
                    src={imgUrl}
                    alt={`${rocket.name} view ${imgIdx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Technical Spec Sheet Table */}
        <div className="lg:col-span-5 space-y-6">
          <SpecTable sections={specSections} title={`${rocket.name} DOSSIER`} />
        </div>
      </div>

      {/* Related Launch Vehicles */}
      {relatedRockets.length > 0 && (
        <div className="pt-10 border-t border-[#1C2433] space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider">
              Related Indian Launch Vehicles
            </h3>
            <Link
              href="/rockets"
              className="text-xs font-mono-tech text-[#FF6B00] hover:underline"
            >
              View Full Fleet →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedRockets.map((rel) => (
              <Link
                key={rel.id}
                href={`/rockets/${rel.slug}`}
                className="group p-4 rounded-xl bg-[#090D15] border border-[#1C2433] hover:border-[#FF6B00]/50 transition-all hover:shadow-[0_0_20px_rgba(255,107,0,0.15)] flex flex-col justify-between"
              >
                <div className="relative h-36 rounded-lg overflow-hidden mb-3">
                  <img
                    src={rel.heroImage}
                    alt={rel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono-tech text-[#FF6B00] uppercase">
                    {rel.family}
                  </span>
                  <h4 className="font-display text-base font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-sans line-clamp-2">
                    {rel.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      <LightboxModal
        images={rocket.gallery}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % rocket.gallery.length)}
        onPrev={() =>
          setLightboxIndex((prev) => (prev - 1 + rocket.gallery.length) % rocket.gallery.length)
        }
        title={rocket.name}
      />
    </div>
  );
}
