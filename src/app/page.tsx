'use client';

import React from 'react';
import Link from 'next/link';
import { Plane, Satellite, Rocket, ArrowRight, Shield, Zap, Compass, Flame, Clock } from 'lucide-react';
import HeroSpaceScene from '@/components/3d/HeroSpaceScene';
import StatCounter from '@/components/ui/StatCounter';
import LaunchCinematic3D from '@/components/3d/LaunchCinematic3D';
import { FEATURED_MISSIONS } from '@/data/missions';
import { AIRCRAFT_DATA } from '@/data/aircraft';
import { SATELLITES_DATA } from '@/data/satellites';
import { ROCKETS_DATA } from '@/data/rockets';

export default function HomePage() {
  const pillars = [
    {
      title: 'Aviation Fleet',
      category: 'Fighters, Helicopters & Transport',
      description:
        'From the agile compound delta HAL Tejas Mk1A to the high-altitude combat-proven Prachand LCH and upcoming 5th-gen AMCA stealth fighter.',
      count: `${AIRCRAFT_DATA.length} Catalogued`,
      image: 'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f6?auto=format&fit=crop&w=1200&q=80',
      href: '/aircraft',
      icon: Plane,
      accent: '#FF6B00',
    },
    {
      title: 'Orbital & Deep Space',
      category: 'Satellites, Landers & Telescopes',
      description:
        'The historic Chandrayaan-3 lunar south pole lander, Mangalyaan Mars orbiter, Aditya-L1 solar observatory, and sovereign NavIC navigation constellation.',
      count: `${SATELLITES_DATA.length} Programs`,
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
      href: '/satellites',
      icon: Satellite,
      accent: '#00F0FF',
    },
    {
      title: 'Launch Vehicles',
      category: 'Rockets & Propulsion Stacks',
      description:
        'ISRO\'s workhorse PSLV, heavy-lifter LVM3, rapid mini-launcher SSLV, human-rated Gaganyaan stack, and next-gen reusable Methalox NGLV Surya.',
      count: `${ROCKETS_DATA.length} Launch Vehicles`,
      image: 'https://images.unsplash.com/photo-1517976487507-598f1142a170?auto=format&fit=crop&w=1200&q=80',
      href: '/rockets',
      icon: Rocket,
      accent: '#FF9500',
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* ----------------- 1. HERO SECTION ----------------- */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 aerospace-grid opacity-30 pointer-events-none" />
        
        {/* Radial Orange Glow Backdrop */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Telemetry Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0D111A] border border-[#FF6B00]/30 text-xs font-mono-tech text-[#FF6B00]">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
              <span className="tracking-widest uppercase">
                JRVIS AEROSPACE // BHARAT CAPABILITY INDEX
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              India’s Aerospace,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF9500] to-white">
                Reimagined.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed">
              A digital engineering archive of India\'s sovereign aerospace triumph.
              Explore all indigenous aircraft, lunar and planetary spacecraft, and orbital rockets
              in interactive 3D with authentic flight telemetry.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/aircraft"
                className="px-6 py-3.5 rounded-lg bg-[#FF6B00] hover:bg-[#FF8533] text-black font-display text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_25px_rgba(255,107,0,0.4)] flex items-center gap-2 group"
              >
                <span>Explore the Fleet</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/rockets/lvm3"
                className="px-6 py-3.5 rounded-lg bg-[#0D111A] hover:bg-[#131926] text-white border border-[#1C2433] hover:border-[#FF6B00]/50 font-display text-xs font-semibold uppercase tracking-widest transition-all flex items-center gap-2"
              >
                <Flame className="w-4 h-4 text-[#FF6B00]" />
                <span>Launch Profile</span>
              </Link>

              <Link
                href="/timeline"
                className="px-6 py-3.5 rounded-lg bg-transparent hover:bg-white/5 text-slate-400 hover:text-white font-mono-tech text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
              >
                <Clock className="w-4 h-4 text-slate-500" />
                <span>60-Year Timeline</span>
              </Link>
            </div>

            {/* Sub-telemetry readout */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-[11px] font-mono-tech text-slate-500 border-t border-white/5">
              <span>AGENCY: ISRO · HAL · DRDO</span>
              <span>•</span>
              <span>SECURITY: UNCLASSIFIED PUBLIC</span>
            </div>
          </div>

          {/* Hero Right: 3D Interactive Space Scene */}
          <div className="lg:col-span-6 h-[420px] sm:h-[520px] lg:h-[600px] w-full relative">
            {/* HUD Corner Accents */}
            <div className="absolute inset-0 pointer-events-none border border-[#FF6B00]/20 rounded-2xl hud-bracket-container z-20">
              <div className="absolute bottom-3 left-4 text-[10px] font-mono-tech text-slate-400 bg-black/60 px-2 py-1 rounded">
                ORBITAL SIMULATOR // DRAG TO ROTATE
              </div>
            </div>

            {/* 3D Scene */}
            <HeroSpaceScene type="satellite" />
          </div>
        </div>
      </section>

      {/* ----------------- 2. LIVE STAT COUNTERS ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCounter
            end={12}
            suffix="+"
            label="Catalogued Aircraft"
            subtext="Fighters, Helicopters, Trainers, Concepts"
          />
          <StatCounter
            end={15}
            suffix="+"
            label="Satellites & Probes"
            subtext="Lunar, Martian, Solar & Navigation"
          />
          <StatCounter
            end={8}
            suffix="+"
            label="Launch Vehicles"
            subtext="SLV-3 to LVM3 & Reusable NGLV"
          />
          <StatCounter
            end={120}
            suffix="+"
            label="Successful Missions"
            subtext="Proven Operational Heritage"
          />
        </div>
      </section>

      {/* ----------------- 3. THREE FEATURE PILLARS ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-mono-tech text-[#FF6B00] uppercase tracking-wider">
            <span>AEROSPACE SPECTRUM</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Three Pillars of Indian Aerospace
          </h2>
          <p className="text-sm text-slate-400">
            A comprehensive catalog documenting sovereign engineering capabilities across skies,
            low-earth orbit, and deep space exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group relative rounded-xl bg-[#090D15] border border-[#1C2433] hover:border-[#FF6B00]/60 overflow-hidden transition-all duration-300 flex flex-col justify-between hud-bracket-container hover:shadow-[0_0_30px_rgba(255,107,0,0.15)]"
              >
                {/* Pillar Header & Image Preview */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090D15] via-[#090D15]/40 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono-tech text-[#FF6B00]">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{pillar.count}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[#FF6B00]">
                      {pillar.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1C2433] flex items-center justify-between text-xs font-mono-tech text-[#FF6B00] group-hover:translate-x-1 transition-transform">
                    <span>ACCESS ARCHIVE</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ----------------- 4. SCROLL-DRIVEN LAUNCH SEQUENCE ----------------- */}
      <LaunchCinematic3D />

      {/* ----------------- 5. FEATURED MISSIONS SHOWCASE ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-mono-tech text-[#FF6B00] uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>LANDMARK MISSIONS</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold text-white tracking-tight">
              Historic Indian Missions
            </h2>
          </div>
          <Link
            href="/satellites"
            className="text-xs font-mono-tech text-[#FF6B00] hover:underline flex items-center gap-1.5"
          >
            <span>Explore All Spacecraft</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_MISSIONS.map((mission) => (
            <Link
              key={mission.id}
              href={`/${mission.linkType}/${mission.linkSlug}`}
              className="group rounded-xl bg-[#090D15] border border-[#1C2433] hover:border-[#FF6B00]/50 overflow-hidden flex flex-col justify-between transition-all hover:shadow-[0_0_25px_rgba(255,107,0,0.15)] hud-bracket-container"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D15] via-transparent to-transparent" />

                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono-tech text-emerald-400 border border-emerald-500/30">
                  {mission.outcome}
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono-tech text-[#FF6B00] uppercase">
                    {mission.rocket} · {mission.date}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                    {mission.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed line-clamp-2">
                    {mission.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1C2433] flex items-center justify-between text-xs font-mono-tech">
                  <span className="text-slate-500">{mission.keyMetric.label}:</span>
                  <span className="text-[#FF6B00] font-semibold">{mission.keyMetric.value}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ----------------- 6. 60-YEAR TIMELINE TEASER ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-[#0C121E] via-[#090D15] to-[#05070B] border border-[#FF6B00]/40 p-8 sm:p-12 overflow-hidden hud-bracket-container">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-mono-tech text-[#FF6B00] uppercase tracking-widest">
              <span>CHRONOLOGY · 1963 TO 2040</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Thumba’s Bicycles to the Lunar South Pole
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Trace six decades of relentless perseverance: Aryabhata, SLV-3, PSLV inception,
              Chandrayaan water discovery, Mangalyaan’s Mars triumph, up to the upcoming Bharatiya
              Antariksh Station (2035) and Indian Moon landing (2040).
            </p>

            <div className="pt-2">
              <Link
                href="/timeline"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FF6B00] hover:bg-[#FF8533] text-black font-display text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,107,0,0.4)]"
              >
                <span>Launch Interactive Timeline</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Background Decorative Graphic */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none flex items-center justify-center">
            <Clock className="w-96 h-96 text-[#FF6B00]" />
          </div>
        </div>
      </section>
    </div>
  );
}
