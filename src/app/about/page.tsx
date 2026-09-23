import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Compass, Award, Radio, Users, Sparkles, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const pioneers = [
    {
      name: 'Dr. Vikram Sarabhai',
      role: 'Father of the Indian Space Program',
      era: '1919 – 1971',
      summary:
        'Conceived India\'s space vision: that a developing nation must be second to none in the application of advanced technologies to the real problems of man and society.',
      quote:
        '"We must be second to none in the application of advanced technologies to the real problems of man and society."',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Prof. Satish Dhawan',
      role: 'Architect of ISRO & Launch Systems',
      era: '1920 – 2002',
      summary:
        'Guided ISRO through its pivotal foundational decade, spearheading the creation of the Sriharikota launch range (SDSC SHAR) and operational remote sensing programs.',
      quote:
        '"When a mission fails, the leader takes the blame. When it succeeds, the team gets the credit."',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dr. A.P.J. Abdul Kalam',
      role: 'SLV-3 Director & Missile Pioneer',
      era: '1931 – 2015',
      summary:
        'Project Director for India\'s first indigenous satellite launch vehicle (SLV-3), architect of the Integrated Guided Missile Development Programme, and 11th President of India.',
      quote:
        '"Dreams are not that which you see while sleeping; dreams are that which do not let you sleep."',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dr. Kota Harinarayana',
      role: 'Programme Director, LCA Tejas',
      era: 'Aerospace Visionary',
      summary:
        'The chief architect and driving engineering force behind India\'s indigenous Light Combat Aircraft (Tejas), uniting Indian defense R&D, industry, and academia.',
      quote:
        '"Self-reliance in aerospace is the ultimate test of a nation’s technological maturity."',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const pillars = [
    {
      title: 'Frugal Excellence',
      description:
        'Achieving interplanetary and lunar exploration milestones at a fraction of global expenditure without compromising reliability or precision.',
      icon: Sparkles,
    },
    {
      title: 'Indigenous Sovereignty',
      description:
        'Developing domestic cryogenic engines, GaN AESA radars, composite delta airframes, and atomic clocks independent of foreign export controls.',
      icon: ShieldCheck,
    },
    {
      title: 'Extreme Environment Engineering',
      description:
        'Building systems that operate flawlessly from Siachen Glacier at -50°C and 5,000m to the vacuum and radiation of the lunar south pole.',
      icon: Compass,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-mono-tech text-[#FF6B00] uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>JRVIS AEROSPACE // PURPOSE & HERITAGE</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
          Pioneering India’s Aerospace Frontier
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
          JRVIS Aerospace was built to preserve, catalog, and celebrate the extraordinary engineering
          heritage of India\'s aerospace and defense programs. From the sands of Thumba to the lunar
          south pole, this platform provides an interactive digital showcase of sovereign capability.
        </p>
      </div>

      {/* Engineering Philosophy Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl bg-[#090D15] border border-[#1C2433] space-y-3 hud-bracket-container"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Pioneers & Visionaries Showcase */}
      <div className="space-y-8">
        <div className="border-b border-[#1C2433] pb-4 flex items-center justify-between">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            Architects of India\'s Aerospace Rise
          </h2>
          <span className="text-xs font-mono-tech text-slate-500 hidden sm:block">
            LEADERSHIP // HERITAGE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pioneers.map((pioneer, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#090D15] border border-[#1C2433] space-y-4 hud-bracket-container flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono-tech">
                  <span className="text-[#FF6B00] font-bold uppercase">{pioneer.role}</span>
                  <span className="text-slate-500">{pioneer.era}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {pioneer.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {pioneer.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1C2433] text-xs italic text-slate-400 font-sans bg-[#0D111A] p-3 rounded border-l-2 border-[#FF6B00]">
                {pioneer.quote}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Aerospace Ecosystem Telemetry Readout */}
      <div className="p-8 rounded-xl bg-[#090D15] border border-[#1C2433] space-y-6 hud-bracket-container">
        <div className="flex items-center justify-between border-b border-[#1C2433] pb-3">
          <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Radio className="w-4 h-4 text-[#FF6B00]" />
            <span>Key Institutional Pillars of Indian Aerospace</span>
          </h3>
          <span className="font-mono-tech text-[10px] text-emerald-400">ACTIVE COOPERATION</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono-tech">
          <div className="p-4 rounded bg-[#0D111A] border border-white/5 space-y-1">
            <span className="text-[#FF6B00] font-bold block">ISRO</span>
            <span className="text-white block">Indian Space Research Organisation</span>
            <span className="text-slate-500 text-[11px] block">Rockets, Satellites, Deep Space & Human Flight</span>
          </div>

          <div className="p-4 rounded bg-[#0D111A] border border-white/5 space-y-1">
            <span className="text-[#FF6B00] font-bold block">HAL</span>
            <span className="text-white block">Hindustan Aeronautics Limited</span>
            <span className="text-slate-500 text-[11px] block">Combat Aircraft, Helicopters & Aero Engines</span>
          </div>

          <div className="p-4 rounded bg-[#0D111A] border border-white/5 space-y-1">
            <span className="text-[#FF6B00] font-bold block">DRDO / ADA</span>
            <span className="text-white block">Aero Development Agency</span>
            <span className="text-slate-500 text-[11px] block">AESA Radar, Avionics, EW & Advanced Stealth (AMCA)</span>
          </div>

          <div className="p-4 rounded bg-[#0D111A] border border-white/5 space-y-1">
            <span className="text-[#FF6B00] font-bold block">NSIL</span>
            <span className="text-white block">NewSpace India Limited</span>
            <span className="text-slate-500 text-[11px] block">Commercial Launcher & Satellite Operations</span>
          </div>
        </div>
      </div>

      {/* Call to Explore */}
      <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0C121E] via-[#090D15] to-[#05070B] border border-[#FF6B00]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="font-display text-2xl font-bold text-white">
            Ready to explore India’s aerospace fleet?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-sans">
            Inspect all models in 3D, compare technical specifications, and examine stage breakdowns.
          </p>
        </div>

        <Link
          href="/aircraft"
          className="px-6 py-3.5 rounded-lg bg-[#FF6B00] hover:bg-[#FF8533] text-black font-display text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,107,0,0.4)] flex items-center gap-2 whitespace-nowrap"
        >
          <span>Begin Exploration</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
