'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  title?: string;
}

export default function LightboxModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  title,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4">
      {/* Top Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
          <span className="text-xs font-mono-tech text-slate-300 uppercase tracking-wider">
            {title || 'HD AEROSPACE ARCHIVE'} [{currentIndex + 1} / {images.length}]
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-[#FF6B00] text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#FF6B00] text-white transition-colors z-10 border border-white/10"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#FF6B00] text-white transition-colors z-10 border border-white/10"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Image Container */}
      <div className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={title || 'Aerospace imagery'}
          className="max-w-full max-h-[80vh] object-contain rounded-lg border border-[#FF6B00]/30 shadow-2xl"
        />
      </div>
    </div>
  );
}
