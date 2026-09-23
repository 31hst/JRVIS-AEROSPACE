'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { ArrowLeft, Shield, Gauge, Crosshair, Cpu, Maximize2, ExternalLink } from 'lucide-react';
import { AIRCRAFT_DATA } from '@/data/aircraft';
import CanvasWrapper from '@/components/3d/CanvasWrapper';
import SpecTable from '@/components/ui/SpecTable';
import HudBadge from '@/components/ui/HudBadge';
import LightboxModal from '@/components/ui/LightboxModal';

export default function AircraftDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const aircraft = AIRCRAFT_DATA.find((item) => item.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!aircraft) {
    return notFound();
  }

  // Related aircraft
  const relatedAircraft = AIRCRAFT_DATA.filter((item) =>
    aircraft.relatedSlugs.includes(item.slug)
  );

  // Format spec sections for SpecTable
  const specSections = [
    {
      title: 'AIRFRAME DIMENSIONS & WEIGHT',
      rows: [
        { label: 'Crew', value: aircraft.specs.crew },
        { label: 'Length', value: aircraft.specs.length },
        { label: 'Wingspan / Rotor', value: aircraft.specs.wingspan },
        { label: 'Height', value: aircraft.specs.height },
        { label: 'Empty Weight', value: aircraft.specs.emptyWeight },
        { label: 'Max Takeoff Weight (MTOW)', value: aircraft.specs.maxTakeoffWeight, highlight: true },
      ],
    },
    {
      title: 'PROPULSION & POWERPLANT',
      rows: [
        { label: 'Engine Model', value: aircraft.specs.powerplant.model },
        { label: 'Engine Type', value: aircraft.specs.powerplant.type },
        { label: 'Dry Thrust / Power', value: aircraft.specs.powerplant.dryThrust || aircraft.specs.powerplant.totalPower },
        { label: 'Afterburner Thrust', value: aircraft.specs.powerplant.afterburnerThrust, highlight: true },
      ],
    },
    {
      title: 'PERFORMANCE & FLIGHT ENVELOPE',
      rows: [
        { label: 'Maximum Speed', value: aircraft.specs.performance.maxSpeed, highlight: true },
        { label: 'Ferry / Max Range', value: aircraft.specs.performance.range },
        { label: 'Combat Radius', value: aircraft.specs.performance.combatRadius },
        { label: 'Service Ceiling', value: aircraft.specs.performance.serviceCeiling, highlight: true },
        { label: 'Rate of Climb', value: aircraft.specs.performance.rateOfClimb },
        { label: 'G-Force Limits', value: aircraft.specs.performance.gLimits },
      ],
    },
    {
      title: 'ARMAMENT & PAYLOAD ENVELOPE',
      rows: [
        { label: 'Hardpoints', value: aircraft.specs.armament?.hardpoints ? `${aircraft.specs.armament.hardpoints} Stations` : 'None / Internal' },
        { label: 'Weapons Payload Capacity', value: aircraft.specs.armament?.capacity, highlight: true },
        { label: 'Internal Cannon', value: aircraft.specs.armament?.guns },
        { label: 'Air-to-Air / Missiles', value: aircraft.specs.armament?.missiles?.join(', ') },
        { label: 'Guided Bombs / Munitions', value: aircraft.specs.armament?.bombs?.join(', ') },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Back Navigation Bar */}
      <div className="flex items-center justify-between">
        <Link
          href="/aircraft"
          className="inline-flex items-center gap-2 text-xs font-mono-tech text-slate-400 hover:text-[#FF6B00] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO AIRCRAFT CATALOG</span>
        </Link>

        <div className="flex items-center gap-3">
          <HudBadge status={aircraft.status} />
          <span className="text-xs font-mono-tech text-slate-500 uppercase hidden sm:block">
            {aircraft.operator}
          </span>
        </div>
      </div>

      {/* Entity Title Header */}
      <div className="space-y-3">
        <div className="text-xs font-mono-tech text-[#FF6B00] uppercase tracking-widest">
          {aircraft.manufacturer} · {aircraft.era}
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          {aircraft.name}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl font-sans">
          {aircraft.summary}
        </p>
      </div>

      {/* 3D Model Interactive Viewer (Top Centerpiece) */}
      <div className="space-y-2">
        <CanvasWrapper
          modelType="aircraft"
          subType={aircraft.modelType}
          className="h-[500px] sm:h-[620px]"
        />
        <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-500 px-2">
          <span>INTERACTIVE HD CAD RENDERING // REALTIME ROTATION</span>
          <span>PRESS WIREFRAME FOR STRUCTURAL GEOMETRY</span>
        </div>
      </div>

      {/* Key Architectural Innovations / Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {aircraft.keyFeatures.map((feat, idx) => (
          <div
            key={idx}
            className="p-5 rounded-lg bg-[#090D15] border border-[#1C2433] space-y-2 hud-bracket-container"
          >
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#FF6B00]">
              <Cpu className="w-4 h-4" />
              <span>KEY CAPABILITY // 0{idx + 1}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
              {feat}
            </p>
          </div>
        ))}
      </div>

      {/* Grid: Engineering Spec Sheet & Narrative History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Engineering Dossier Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-xl bg-[#090D15] border border-[#1C2433] space-y-5">
            <h2 className="font-display text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-[#1C2433] pb-4">
              <Shield className="w-5 h-5 text-[#FF6B00]" />
              <span>Engineering History & Strategic Doctrine</span>
            </h2>

            <div className="space-y-4 text-sm text-slate-300 font-sans leading-relaxed">
              {aircraft.description.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Avionics & Sensors Suite list */}
            {aircraft.specs.avionics && (
              <div className="pt-4 border-t border-[#1C2433] space-y-3">
                <h3 className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
                  // AVIONICS, RADAR & SENSOR SUITE
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-tech text-slate-300">
                  {aircraft.specs.avionics.map((av, avIdx) => (
                    <li key={avIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full" />
                      <span>{av}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Photo Gallery Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
                Photo Gallery & Angles
              </h3>
              <span className="text-xs font-mono-tech text-slate-500">
                CLICK TO OPEN HIGH-RES LIGHTBOX
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {aircraft.gallery.map((imgUrl, imgIdx) => (
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
                    alt={`${aircraft.name} view ${imgIdx + 1}`}
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
          <SpecTable sections={specSections} title={`${aircraft.name} SPEC SHEET`} />
        </div>
      </div>

      {/* Related Fleet Carousel / Grid */}
      {relatedAircraft.length > 0 && (
        <div className="pt-10 border-t border-[#1C2433] space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider">
              Related Aircraft & Programs
            </h3>
            <Link
              href="/aircraft"
              className="text-xs font-mono-tech text-[#FF6B00] hover:underline"
            >
              View Full Fleet →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedAircraft.map((rel) => (
              <Link
                key={rel.id}
                href={`/aircraft/${rel.slug}`}
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
                    {rel.role}
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
        images={aircraft.gallery}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % aircraft.gallery.length)}
        onPrev={() =>
          setLightboxIndex((prev) => (prev - 1 + aircraft.gallery.length) % aircraft.gallery.length)
        }
        title={aircraft.name}
      />
    </div>
  );
}
