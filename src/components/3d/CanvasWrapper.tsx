'use client';

import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Stars } from '@react-three/drei';
import { RotateCw, ZoomIn, ZoomOut, Box, Layers, RefreshCw } from 'lucide-react';
import RocketModel from './RocketModel';
import SatelliteModel from './SatelliteModel';
import AircraftModel from './AircraftModel';

interface CanvasWrapperProps {
  modelType: 'rocket' | 'satellite' | 'aircraft';
  subType?: string;
  className?: string;
  showExplodedToggle?: boolean;
}

export default function CanvasWrapper({
  modelType,
  subType,
  className = 'h-[480px] sm:h-[580px] w-full',
  showExplodedToggle = false,
}: CanvasWrapperProps) {
  const [wireframe, setWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [exploded, setExploded] = useState(false);
  const [cameraKey, setCameraKey] = useState(0);

  const resetCamera = () => {
    setCameraKey((prev) => prev + 1);
    setExploded(false);
  };

  return (
    <div className={`relative rounded-xl overflow-hidden bg-radial from-[#0C121E] to-[#030508] border border-[#1C2433] hud-bracket-container ${className}`}>
      {/* HUD Telemetry Overlay on Canvas Corners */}
      <div className="absolute top-3 left-3 z-10 font-mono-tech text-[10px] text-slate-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-[#FF6B00]/30 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-ping" />
        <span className="uppercase text-white font-semibold">
          3D MODEL VIEW // {modelType.toUpperCase()}
        </span>
      </div>

      <div className="absolute top-3 right-3 z-10 font-mono-tech text-[9px] text-slate-500 hidden sm:block">
        ORBIT: DRAG · ZOOM: SCROLL
      </div>

      {/* Floating Tactical Controls Toolbar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-[#070A10]/90 border border-[#1C2433] backdrop-blur-xl px-3 py-1.5 rounded-full shadow-2xl">
        {/* Auto Rotate Toggle */}
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-2 rounded-full text-xs transition-colors ${
            autoRotate
              ? 'bg-[#FF6B00] text-black font-bold'
              : 'bg-[#121824] text-slate-400 hover:text-white'
          }`}
          title="Toggle Auto Rotation"
        >
          <RotateCw className="w-3.5 h-3.5" />
        </button>

        {/* Wireframe Mode Toggle */}
        <button
          onClick={() => setWireframe(!wireframe)}
          className={`p-2 rounded-full text-xs transition-colors ${
            wireframe
              ? 'bg-[#FF6B00] text-black font-bold'
              : 'bg-[#121824] text-slate-400 hover:text-white'
          }`}
          title="Toggle Technical Wireframe"
        >
          <Box className="w-3.5 h-3.5" />
        </button>

        {/* Exploded View Toggle (for rockets or satellites) */}
        {(showExplodedToggle || modelType === 'rocket') && (
          <button
            onClick={() => setExploded(!exploded)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono-tech flex items-center gap-1.5 transition-all ${
              exploded
                ? 'bg-[#FF6B00] text-black font-bold shadow-[0_0_15px_rgba(255,107,0,0.5)]'
                : 'bg-[#121824] text-slate-300 hover:text-white border border-[#FF6B00]/30'
            }`}
            title="Toggle Stage Separation / Exploded View"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="text-[11px] font-semibold uppercase">
              {exploded ? 'STAGES SEPARATED' : 'EXPLODED VIEW'}
            </span>
          </button>
        )}

        {/* Reset Camera View */}
        <button
          onClick={resetCamera}
          className="p-2 rounded-full bg-[#121824] text-slate-400 hover:text-white transition-colors"
          title="Reset Camera Angle"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3D Three.js Canvas */}
      <Suspense
        fallback={
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 font-mono-tech text-xs space-y-3">
            <div className="w-8 h-8 border-2 border-[#FF6B00] border-t-transparent rounded-full animate-spin" />
            <div className="text-white tracking-widest uppercase">STREAMING 3D GEOMETRY...</div>
          </div>
        }
      >
        <Canvas
          key={cameraKey}
          camera={{ position: [0, 1.5, 8], fov: 45 }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          {/* Deep Space Background Stars */}
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

          {/* Studio Lighting */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 15, 10]} intensity={1.8} color="#FFFFFF" />
          <directionalLight position={[-10, 5, -10]} intensity={0.8} color="#FF6B00" />
          <pointLight position={[0, -5, 5]} intensity={0.5} color="#00F0FF" />

          {/* Ground Soft Contact Shadow */}
          <ContactShadows
            position={[0, -2.8, 0]}
            opacity={0.5}
            scale={10}
            blur={2.5}
            far={4}
            color="#000000"
          />

          {/* Interactive Orbit Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={3}
            maxDistance={15}
            autoRotate={autoRotate}
            autoRotateSpeed={1.0}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 6}
          />

          {/* Dynamic 3D Model Rendering */}
          {modelType === 'rocket' && (
            <RocketModel
              exploded={exploded}
              wireframe={wireframe}
              modelType={(subType as any) || 'lvm3'}
            />
          )}

          {modelType === 'satellite' && (
            <SatelliteModel
              wireframe={wireframe}
              modelType={(subType as any) || 'lander'}
              deployed={!exploded ? true : false}
            />
          )}

          {modelType === 'aircraft' && (
            <AircraftModel
              wireframe={wireframe}
              modelType={(subType as any) || 'fighter'}
            />
          )}
        </Canvas>
      </Suspense>
    </div>
  );
}
