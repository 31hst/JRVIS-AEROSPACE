'use client';

import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';
import { Flame, ShieldAlert, ArrowUpCircle, CheckCircle2, ChevronRight } from 'lucide-react';

interface StageStep {
  id: number;
  timeStr: string;
  title: string;
  altitude: string;
  speed: string;
  description: string;
}

const LAUNCH_STEPS: StageStep[] = [
  {
    id: 0,
    timeStr: 'T - 10s',
    title: 'LAUNCH PAD STANDBY',
    altitude: '0.0 km',
    speed: '0.0 km/s',
    description: 'Second Launch Pad at SDSC SHAR. Cryogenic top-up complete, telemetry channels nominal, automatic launch sequence initiated.',
  },
  {
    id: 1,
    timeStr: 'T + 00s',
    title: 'S200 BOOSTER IGNITION & LIFTOFF',
    altitude: '0.5 km',
    speed: '0.2 km/s',
    description: 'Twin S200 solid strap-on boosters ignite, producing 9,800 kN peak thrust. LVM3 lifts off the launch pad into the Bay of Bengal flight corridor.',
  },
  {
    id: 2,
    timeStr: 'T + 114s',
    title: 'CORE L110 IGNITION & MAX Q',
    altitude: '45.0 km',
    speed: '1.4 km/s',
    description: 'Twin Vikas liquid engines ignite while still supersonic in mid-air. Vehicle traverses maximum aerodynamic pressure (Max Q).',
  },
  {
    id: 3,
    timeStr: 'T + 130s',
    title: 'BOOSTER SEPARATION',
    altitude: '62.0 km',
    speed: '1.9 km/s',
    description: 'Burnout of S200 solid rocket boosters. Pyrotechnic separation nuts fire; boosters peel away laterally while the L110 core continues full throttle.',
  },
  {
    id: 4,
    timeStr: 'T + 215s',
    title: 'PAYLOAD FAIRING JETTISON',
    altitude: '115.0 km',
    speed: '3.1 km/s',
    description: 'Above dense atmospheric friction, the 5-meter composite heat shield separates into two halves, exposing the spacecraft to the vacuum of space.',
  },
  {
    id: 5,
    timeStr: 'T + 960s',
    title: 'C25 SHUTDOWN & ORBIT INSERTION',
    altitude: '179.0 km',
    speed: '10.2 km/s',
    description: 'CE-20 cryogenic engine shuts down following precise orbital injection. Spacecraft separates into trans-lunar/GTO insertion trajectory. Mission Success!',
  },
];

function RocketInFlight({ step }: { step: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const flameRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
      // Slight atmospheric vibration
      if (step === 1 || step === 2) {
        groupRef.current.position.x = Math.sin(state.clock.elapsedTime * 25) * 0.02;
      } else {
        groupRef.current.position.x = 0;
      }
    }
  });

  const boostersSeparated = step >= 3;
  const fairingJettisoned = step >= 4;
  const coreSeparated = step >= 5;

  const boosterX = boostersSeparated ? 4.5 : 1.4;
  const boosterY = boostersSeparated ? -3.0 : 0;
  const coreY = coreSeparated ? -3.5 : 0;
  const fairingY = fairingJettisoned ? 6.0 : 0;

  return (
    <group ref={groupRef} position={[0, -1.8, 0]}>
      {/* ----------------- CORE STAGE (L110) ----------------- */}
      <group position={[0, coreY, 0]}>
        <mesh position={[0, 2.5, 0]}>
          <cylinderGeometry args={[0.9, 0.9, 3.8, 32]} />
          <meshStandardMaterial color="#E2E8F0" metalness={0.6} roughness={0.3} />
        </mesh>
        <mesh position={[0, 3.2, 0]}>
          <cylinderGeometry args={[0.91, 0.91, 0.8, 32]} />
          <meshStandardMaterial color="#FF6B00" metalness={0.4} roughness={0.5} />
        </mesh>

        {/* Vikas Engine Bells */}
        <mesh position={[-0.35, 0.3, 0]}>
          <cylinderGeometry args={[0.15, 0.32, 0.6, 16]} />
          <meshStandardMaterial color="#334155" metalness={0.9} />
        </mesh>
        <mesh position={[0.35, 0.3, 0]}>
          <cylinderGeometry args={[0.15, 0.32, 0.6, 16]} />
          <meshStandardMaterial color="#334155" metalness={0.9} />
        </mesh>

        {/* Vikas Core Flame (when core is active) */}
        {step >= 2 && step <= 4 && (
          <mesh position={[0, -0.4, 0]} rotation={[Math.PI, 0, 0]}>
            <coneGeometry args={[0.4, 1.4, 16]} />
            <meshStandardMaterial
              color="#FF5500"
              emissive="#FF3300"
              emissiveIntensity={2.5}
              transparent
              opacity={0.8}
            />
          </mesh>
        )}
      </group>

      {/* ----------------- TWIN BOOSTERS ----------------- */}
      {/* Left Booster */}
      <group position={[-boosterX, boosterY, 0]} rotation={boostersSeparated ? [0, 0, -0.3] : [0, 0, 0]}>
        <mesh position={[0, 2.0, 0]}>
          <cylinderGeometry args={[0.48, 0.48, 4.2, 24]} />
          <meshStandardMaterial color="#CBD5E1" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 4.6, 0]}>
          <coneGeometry args={[0.48, 1.0, 24]} />
          <meshStandardMaterial color="#FF6B00" />
        </mesh>
        {step >= 1 && step < 3 && (
          <mesh ref={flameRef} position={[0, -0.9, 0]} rotation={[Math.PI, 0, 0]}>
            <coneGeometry args={[0.35, 1.5, 16]} />
            <meshStandardMaterial
              color="#FF5500"
              emissive="#FF3300"
              emissiveIntensity={3.0}
              transparent
              opacity={0.85}
            />
          </mesh>
        )}
      </group>

      {/* Right Booster */}
      <group position={[boosterX, boosterY, 0]} rotation={boostersSeparated ? [0, 0, 0.3] : [0, 0, 0]}>
        <mesh position={[0, 2.0, 0]}>
          <cylinderGeometry args={[0.48, 0.48, 4.2, 24]} />
          <meshStandardMaterial color="#CBD5E1" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 4.6, 0]}>
          <coneGeometry args={[0.48, 1.0, 24]} />
          <meshStandardMaterial color="#FF6B00" />
        </mesh>
        {step >= 1 && step < 3 && (
          <mesh position={[0, -0.9, 0]} rotation={[Math.PI, 0, 0]}>
            <coneGeometry args={[0.35, 1.5, 16]} />
            <meshStandardMaterial
              color="#FF5500"
              emissive="#FF3300"
              emissiveIntensity={3.0}
              transparent
              opacity={0.85}
            />
          </mesh>
        )}
      </group>

      {/* ----------------- CRYOGENIC STAGE (C25) & SATELLITE ----------------- */}
      <group position={[0, 4.8, 0]}>
        <mesh position={[0, 0.7, 0]}>
          <cylinderGeometry args={[0.85, 0.88, 1.6, 32]} />
          <meshStandardMaterial color="#F1F5F9" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Cryogenic CE-20 Engine Bell */}
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.18, 0.42, 0.5, 20]} />
          <meshStandardMaterial color="#475569" metalness={0.9} />
        </mesh>

        {/* CE-20 Cryo Flame in Upper Flight */}
        {step === 5 && (
          <mesh position={[0, -0.8, 0]} rotation={[Math.PI, 0, 0]}>
            <coneGeometry args={[0.3, 1.2, 16]} />
            <meshStandardMaterial
              color="#00F0FF"
              emissive="#00BFFF"
              emissiveIntensity={2.5}
              transparent
              opacity={0.85}
            />
          </mesh>
        )}

        {/* Inside Satellite (visible once fairing is jettisoned) */}
        {fairingJettisoned && (
          <group position={[0, 2.2, 0]}>
            <mesh>
              <boxGeometry args={[0.7, 0.7, 0.7]} />
              <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.15} />
            </mesh>
            {/* Deploying Solar Array */}
            <mesh position={[-0.9, 0, 0]}>
              <boxGeometry args={[0.9, 0.4, 0.05]} />
              <meshStandardMaterial color="#1E3A8A" metalness={0.7} />
            </mesh>
            <mesh position={[0.9, 0, 0]}>
              <boxGeometry args={[0.9, 0.4, 0.05]} />
              <meshStandardMaterial color="#1E3A8A" metalness={0.7} />
            </mesh>
          </group>
        )}

        {/* Closed Fairing (before separation) */}
        {!fairingJettisoned && (
          <group position={[0, 1.4, 0]}>
            <mesh position={[0, 0.7, 0]}>
              <cylinderGeometry args={[0.95, 0.88, 1.4, 32]} />
              <meshStandardMaterial color="#F8FAFC" metalness={0.5} roughness={0.3} />
            </mesh>
            <mesh position={[0, 1.9, 0]}>
              <coneGeometry args={[0.95, 1.4, 32]} />
              <meshStandardMaterial color="#F8FAFC" metalness={0.5} roughness={0.3} />
            </mesh>
          </group>
        )}
      </group>
    </group>
  );
}

export default function LaunchCinematic3D() {
  const [currentStepIndex, setCurrentStepIndex] = useState(1);
  const currentStep = LAUNCH_STEPS[currentStepIndex];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs font-mono-tech text-[#FF6B00] uppercase tracking-wider">
          <Flame className="w-3.5 h-3.5 animate-pulse" />
          <span>REALTIME LAUNCH SEQUENCE TELEMETRY</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          LVM3 Launch Profile & Staging
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Walk through the mission timeline from T-minus countdown to booster separation and cryogenic
          orbital injection.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Interactive Step Selector */}
        <div className="lg:col-span-5 space-y-2.5">
          {LAUNCH_STEPS.map((step, idx) => {
            const isSelected = currentStepIndex === idx;
            return (
              <button
                key={step.id}
                onClick={() => setCurrentStepIndex(idx)}
                className={`w-full text-left p-4 rounded-lg border transition-all text-sm flex items-start justify-between group ${
                  isSelected
                    ? 'bg-[#121927] border-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.2)]'
                    : 'bg-[#090D15] border-[#1C2433] hover:border-slate-700 hover:bg-[#0E131F]'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono-tech text-xs font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-[#FF6B00] text-black' : 'bg-black text-slate-400'
                      }`}
                    >
                      {step.timeStr}
                    </span>
                    <span
                      className={`font-display text-xs font-semibold ${
                        isSelected ? 'text-white' : 'text-slate-300'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 pl-1">
                    Alt: {step.altitude} · Speed: {step.speed}
                  </div>
                </div>

                <ChevronRight
                  className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                    isSelected ? 'text-[#FF6B00] translate-x-1' : 'text-slate-600'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Column: 3D Stage Separation Display & Telemetry Card */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative h-[420px] sm:h-[500px] rounded-xl bg-radial from-[#0C121E] to-[#030508] border border-[#1C2433] overflow-hidden hud-bracket-container">
            {/* Top HUD Telemetry Readouts */}
            <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
              <div className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded border border-[#FF6B00]/30 font-mono-tech text-xs text-white">
                <span className="text-[#FF6B00] font-bold mr-2">// ALTITUDE</span>
                {currentStep.altitude}
              </div>
              <div className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded border border-[#FF6B00]/30 font-mono-tech text-xs text-white">
                <span className="text-[#FF6B00] font-bold mr-2">// VELOCITY</span>
                {currentStep.speed}
              </div>
            </div>

            {/* 3D Canvas */}
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center text-slate-400 font-mono-tech text-xs">
                  RENDERING 3D STAGE TRANSITION...
                </div>
              }
            >
              <Canvas camera={{ position: [0, 1.8, 9], fov: 42 }}>
                <Stars radius={100} depth={50} count={1800} factor={4} saturation={0} fade />
                <ambientLight intensity={0.7} />
                <directionalLight position={[10, 15, 10]} intensity={2.0} color="#FFFFFF" />
                <directionalLight position={[-10, 5, -10]} intensity={0.8} color="#FF6B00" />
                <RocketInFlight step={currentStepIndex} />
              </Canvas>
            </Suspense>
          </div>

          {/* Current Stage Description HUD Banner */}
          <div className="p-4 rounded-lg bg-[#090D15] border border-[#1C2433] font-mono-tech text-xs text-slate-300 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-bold block mb-1">
                {currentStep.timeStr} // {currentStep.title}
              </span>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">
                {currentStep.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
