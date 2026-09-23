import React from 'react';
import Link from 'next/link';
import { Plane, Satellite, Rocket, Clock, ShieldCheck, Radio, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#030508] border-t border-[#1C2433] text-slate-400 overflow-hidden">
      {/* Animated Indian Tricolor Accent Line */}
      <div className="tricolor-accent w-full" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <img
                src="/images/jrvis-logo-dark.png"
                alt="JRVIS Aerospace"
                className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              A tribute to the extraordinary engineers, scientists, and visionaries of ISRO, HAL,
              DRDO, ADA, and the Indian Armed Forces who elevated India from carrying rocket cones
              on bicycles in Thumba to soft-landing at the lunar south pole.
            </p>

            {/* Operational Telemetry Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded bg-[#0A0E17] border border-emerald-500/30 text-xs font-mono-tech text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>NETWORK STATUS: 100% NOMINAL</span>
            </div>
          </div>

          {/* Quick Links Column 1: Fleet */}
          <div>
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
              <Plane className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Aviation</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/aircraft/hal-tejas-mk1a" className="hover:text-[#FF6B00] transition-colors">
                  HAL Tejas Mk1A
                </Link>
              </li>
              <li>
                <Link href="/aircraft/hal-tejas-mk2" className="hover:text-[#FF6B00] transition-colors">
                  HAL Tejas Mk2 (MWF)
                </Link>
              </li>
              <li>
                <Link href="/aircraft/hal-amca" className="hover:text-[#FF6B00] transition-colors">
                  HAL AMCA (5th Gen)
                </Link>
              </li>
              <li>
                <Link href="/aircraft/hal-prachand" className="hover:text-[#FF6B00] transition-colors">
                  HAL Prachand (LCH)
                </Link>
              </li>
              <li>
                <Link href="/aircraft/su-30mki" className="hover:text-[#FF6B00] transition-colors">
                  Sukhoi Su-30MKI
                </Link>
              </li>
              <li>
                <Link href="/aircraft" className="text-[#FF6B00] hover:underline flex items-center gap-1 pt-1">
                  View Full Fleet →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Spacecraft */}
          <div>
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
              <Satellite className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Space Missions</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/satellites/chandrayaan-3" className="hover:text-[#FF6B00] transition-colors">
                  Chandrayaan-3
                </Link>
              </li>
              <li>
                <Link href="/satellites/mangalyaan-mom" className="hover:text-[#FF6B00] transition-colors">
                  Mangalyaan (MOM)
                </Link>
              </li>
              <li>
                <Link href="/satellites/aditya-l1" className="hover:text-[#FF6B00] transition-colors">
                  Aditya-L1 Solar
                </Link>
              </li>
              <li>
                <Link href="/satellites/astrosat" className="hover:text-[#FF6B00] transition-colors">
                  AstroSat Observatory
                </Link>
              </li>
              <li>
                <Link href="/satellites/navic-constellation" className="hover:text-[#FF6B00] transition-colors">
                  NavIC Constellation
                </Link>
              </li>
              <li>
                <Link href="/satellites" className="text-[#FF6B00] hover:underline flex items-center gap-1 pt-1">
                  All Satellites →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 3: Launch Vehicles */}
          <div>
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
              <Rocket className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Launch Vehicles</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/rockets/lvm3" className="hover:text-[#FF6B00] transition-colors">
                  LVM3 / GSLV Mk III
                </Link>
              </li>
              <li>
                <Link href="/rockets/pslv" className="hover:text-[#FF6B00] transition-colors">
                  PSLV Workhorse
                </Link>
              </li>
              <li>
                <Link href="/rockets/human-rated-lvm3" className="hover:text-[#FF6B00] transition-colors">
                  Human-Rated Gaganyaan
                </Link>
              </li>
              <li>
                <Link href="/rockets/sslv" className="hover:text-[#FF6B00] transition-colors">
                  SSLV Mini-Launcher
                </Link>
              </li>
              <li>
                <Link href="/rockets/nglv-surya" className="hover:text-[#FF6B00] transition-colors">
                  NGLV "Surya" Reusable
                </Link>
              </li>
              <li>
                <Link href="/rockets" className="text-[#FF6B00] hover:underline flex items-center gap-1 pt-1">
                  All Launchers →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Spaceport Coordinates Grid */}
        <div className="mt-12 pt-8 border-t border-[#1C2433] grid grid-cols-1 sm:grid-cols-3 gap-4 text-[11px] font-mono-tech text-slate-500">
          <div className="p-2.5 rounded bg-[#070A10] border border-slate-800">
            <span className="text-[#FF6B00] block mb-0.5">SDSC SHAR · SRIHARIKOTA</span>
            <span>13.7199° N, 80.2305° E // LAUNCH COMPLEX</span>
          </div>
          <div className="p-2.5 rounded bg-[#070A10] border border-slate-800">
            <span className="text-[#FF6B00] block mb-0.5">HAL R&D · BENGALURU</span>
            <span>12.9716° N, 77.5946° E // AERONAUTICAL DEV</span>
          </div>
          <div className="p-2.5 rounded bg-[#070A10] border border-slate-800">
            <span className="text-[#FF6B00] block mb-0.5">ISTRAC · TELEMETRY</span>
            <span>DEEP SPACE NETWORK 32M // BYALALU</span>
          </div>
        </div>

        {/* Bottom copyright and mission sign-off */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2 font-mono-tech">
            <span>© {new Date().getFullYear()} JRVIS AEROSPACE. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="text-[11px] font-mono-tech text-slate-400 flex items-center gap-2">
            <span>INSPIRED BY VIKRAM SARABHAI & APJ ABDUL KALAM</span>
            <span className="text-[#FF6B00]">★</span>
            <span className="text-white">JAI HIND</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
