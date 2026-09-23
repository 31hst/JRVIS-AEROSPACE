'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import SatelliteModel from './SatelliteModel';
import RocketModel from './RocketModel';

interface HeroSpaceSceneProps {
  type?: 'satellite' | 'rocket';
}

export default function HeroSpaceScene({ type = 'satellite' }: HeroSpaceSceneProps) {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center text-[#FF6B00] font-mono-tech text-xs animate-pulse">
            LOADING ORBITAL TELEMETRY...
          </div>
        }
      >
        <Canvas camera={{ position: [0, 1.5, 6], fov: 42 }}>
          {/* Deep Space Atmosphere */}
          <Stars radius={120} depth={60} count={3500} factor={4} saturation={0} fade speed={1.2} />

          {/* Dynamic Studio Lighting with Aerospace Orange & Solar Warmth */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[12, 10, 8]} intensity={2.2} color="#FFFBF5" />
          <directionalLight position={[-10, -5, -6]} intensity={0.8} color="#FF6B00" />
          <pointLight position={[0, -4, 4]} intensity={0.4} color="#00F0FF" />

          {/* Floating Subtle Micro-Bobbing Animation */}
          <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.5}>
            {type === 'satellite' ? (
              <SatelliteModel deployed={true} modelType="lander" />
            ) : (
              <RocketModel modelType="lvm3" />
            )}
          </Float>

          {/* Orbit Controls (constrained to prevent disorienting angles) */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
