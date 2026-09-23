'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, Plane, Satellite, Rocket, Clock, ShieldCheck } from 'lucide-react';
import CommandPalette from './CommandPalette';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState({ ist: '', utc: '' });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const updateTime = () => {
      const now = new Date();
      const istString = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      const utcString = now.toLocaleTimeString('en-GB', {
        timeZone: 'UTC',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      });
      setCurrentTime({ ist: istString, utc: utcString });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { name: 'Aircraft', href: '/aircraft', icon: Plane },
    { name: 'Satellites', href: '/satellites', icon: Satellite },
    { name: 'Rockets', href: '/rockets', icon: Rocket },
    { name: 'Timeline', href: '/timeline', icon: Clock },
    { name: 'About', href: '/about', icon: ShieldCheck },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#05070B]/90 backdrop-blur-xl border-b border-[#FF6B00]/20 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Monogram */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/jrvis-logo-dark.png"
              alt="JRVIS Aerospace"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="text-[9px] font-mono-tech tracking-widest text-slate-400 uppercase hidden lg:block border-l border-slate-800 pl-3">
              INDIA AEROSPACE ARCHIVE
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0D111A]/80 border border-slate-800/80 rounded-full px-3 py-1 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#FF6B00] bg-[#FF6B00]/10 shadow-[0_0_12px_rgba(255,107,0,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#FF6B00]' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#FF6B00] rounded-full shadow-[0_0_6px_#FF6B00]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Action Items */}
          <div className="flex items-center gap-3">
            {/* Live IST Telemetry Time Display */}
            <div className="hidden lg:flex flex-col items-end px-3 py-1 rounded bg-[#070A10]/90 border border-slate-800 text-[10px] font-mono-tech text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white tracking-widest">
                  IST {currentTime.ist || '00:00:00'}
                </span>
              </div>
              <div className="text-[9px] text-slate-500">
                UTC {currentTime.utc || '00:00'} // SHAR-READY
              </div>
            </div>

            {/* Quick Search Button (Command Palette) */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded bg-[#0D111A] border border-[#FF6B00]/30 hover:border-[#FF6B00] text-slate-300 hover:text-white transition-colors text-xs font-mono-tech"
              title="Quick Search (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span className="hidden sm:inline text-[11px]">SEARCH</span>
              <kbd className="hidden sm:inline px-1 bg-black text-[9px] rounded text-slate-400 border border-slate-700">
                ⌘K
              </kbd>
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded bg-[#0D111A] border border-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#FF6B00]/20 bg-[#05070B]/95 backdrop-blur-2xl px-4 py-6 space-y-3">
            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/40'
                        : 'bg-[#0D111A] text-slate-300 hover:text-white border border-slate-800/80'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#FF6B00]' : 'text-slate-400'}`} />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono-tech text-slate-400">
              <span>LIVE IST: {currentTime.ist}</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                TELEMETRY ONLINE
              </span>
            </div>
          </div>
        )}
      </header>

      {/* Command Palette Modal */}
      <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
