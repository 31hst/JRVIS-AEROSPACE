'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { ArrowLeft, Orbit, Radio, Compass, Cpu, Maximize2, Sparkles } from 'lucide-react';
import { SATELLITES_DATA } from '@/data/satellites';
import CanvasWrapper from '@/components/3d/CanvasWrapper';
import SpecTable from '@/components/ui/SpecTable';
import HudBadge from '@/components/ui/HudBadge';
import LightboxModal from '@/components/ui/LightboxModal';

export default function SatelliteDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const satellite = SATELLITES_DATA.find((item) => item.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!satellite) {
    return notFound();
  }

  const relatedSatellites = SATELLITES_DATA.filter((item) =>
    satellite.relatedSlugs.includes(item.slug)
  );

  const specSections = [
    {
      title: 'ORBITAL & LAUNCH PARAMETERS',
      rows: [
        { label: 'Orbital Regime', value: satellite.specs.orbitalRegime, highlight: true },
        { label: 'Perigee', value: satellite.specs.perigee },
        { label: 'Apogee', value: satellite.specs.apogee },
        { label: 'Inclination', value: satellite.specs.inclination },
        { label: 'Launch Vehicle', value: satellite.specs.launchVehicle, highlight: true },
        { label: 'Launch Site', value: satellite.specs.launchSite },
      ],
    },
    {
      title: 'SPACECRAFT MASS & POWER ARCHITECTURE',
      rows: [
        { label: 'Launch Mass', value: satellite.specs.launchMass, highlight: true },
        { label: 'Dry Mass', value: satellite.specs.dryMass },
        { label: 'Power Output', value: satellite.specs.powerOutput, highlight: true },
        { label: 'Operational Design Life', value: satellite.specs.operationalLife },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Back Navigation Bar */}
      <div className="flex items-center justify-between">
        <Link
          href="/satellites"
          className="inline-flex items-center gap-2 text-xs font-mono-tech text-slate-400 hover:text-[#FF6B00] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO SATELLITES CATALOG</span>
        </Link>

        <div className="flex items-center gap-3">
          <HudBadge status={satellite.status} />
          <span className="text-xs font-mono-tech text-slate-500 uppercase hidden sm:block">
            {satellite.agency}
          </span>
        </div>
      </div>

      {/* Entity Title Header */}
      <div className="space-y-3">
        <div className="text-xs font-mono-tech text-[#FF6B00] uppercase tracking-widest flex items-center gap-2">
          <span>{satellite.missionType}</span>
          <span>·</span>
          <span>LAUNCHED {satellite.launchDate}</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          {satellite.name}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl font-sans">
          {satellite.summary}
        </p>
      </div>

      {/* 3D Model Interactive Viewer */}
      <div className="space-y-2">
        <CanvasWrapper
          modelType="satellite"
          subType={satellite.modelType}
          className="h-[500px] sm:h-[620px]"
          showExplodedToggle={true}
        />
        <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-500 px-2">
          <span>3D ORBITAL SIMULATION // GOLD MLI FOIL & PHOTOVOLTAIC ARRAYS</span>
          <span>TOGGLE WIREFRAME OR ROTATION CONTROLS</span>
        </div>
      </div>

      {/* Scientific Objectives Badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {satellite.scientificObjectives.map((obj, idx) => (
          <div
            key={idx}
            className="p-5 rounded-lg bg-[#090D15] border border-[#1C2433] space-y-2 hud-bracket-container"
          >
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#FF6B00]">
              <Sparkles className="w-4 h-4" />
              <span>OBJECTIVE // 0{idx + 1}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
              {obj}
            </p>
          </div>
        ))}
      </div>

      {/* Grid: Narrative & Specs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Mission Profile Narrative & Scientific Payloads */}
        <div className="lg:col-span-7 space-y-8">
          <div className="p-6 sm:p-8 rounded-xl bg-[#090D15] border border-[#1C2433] space-y-5">
            <h2 className="font-display text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-[#1C2433] pb-4">
              <Orbit className="w-5 h-5 text-[#FF6B00]" />
              <span>Mission Profile & Discoveries</span>
            </h2>

            <div className="space-y-4 text-sm text-slate-300 font-sans leading-relaxed">
              {satellite.description.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Scientific Payloads & Instruments Table */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#090D15] border border-[#1C2433] space-y-4 hud-bracket-container">
            <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Radio className="w-4 h-4 text-[#FF6B00]" />
              <span>Scientific Instruments & Payloads</span>
            </h3>

            <div className="space-y-3">
              {satellite.specs.payloads.map((payload, plIdx) => (
                <div
                  key={plIdx}
                  className="p-3.5 rounded bg-[#0D111A] border border-white/5 space-y-1 font-mono-tech"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#FF6B00]">
                      {payload.code}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {payload.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {payload.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
                Mission Imagery & Telemetry Views
              </h3>
              <span className="text-xs font-mono-tech text-slate-500">
                CLICK TO OPEN HIGH-RES LIGHTBOX
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {satellite.gallery.map((imgUrl, imgIdx) => (
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
                    alt={`${satellite.name} view ${imgIdx + 1}`}
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
          <SpecTable sections={specSections} title={`${satellite.name} DOSSIER`} />
        </div>
      </div>

      {/* Related Spacecraft */}
      {relatedSatellites.length > 0 && (
        <div className="pt-10 border-t border-[#1C2433] space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider">
              Related Indian Spacecraft
            </h3>
            <Link
              href="/satellites"
              className="text-xs font-mono-tech text-[#FF6B00] hover:underline"
            >
              View All Spacecraft →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedSatellites.map((rel) => (
              <Link
                key={rel.id}
                href={`/satellites/${rel.slug}`}
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
                    {rel.missionType}
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
        images={satellite.gallery}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % satellite.gallery.length)}
        onPrev={() =>
          setLightboxIndex((prev) => (prev - 1 + satellite.gallery.length) % satellite.gallery.length)
        }
        title={satellite.name}
      />
    </div>
  );
}
