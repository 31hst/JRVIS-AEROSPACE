'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AircraftModelProps {
  wireframe?: boolean;
  modelType?: 'fighter' | 'helicopter' | 'stealth' | 'trainer' | 'transport' | 'program';
}

export default function AircraftModel({
  wireframe = false,
  modelType = 'fighter',
}: AircraftModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const rotorRef = useRef<THREE.Group>(null);
  const afterburnerRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
    // If helicopter, spin the rotor
    if (rotorRef.current) {
      rotorRef.current.rotation.y += delta * 18;
    }
    // Afterburner pulsing glow
    if (afterburnerRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 20) * 0.2;
      afterburnerRef.current.scale.set(scale, scale, scale * 1.3);
    }
  });

  const isHelicopter = modelType === 'helicopter';

  if (isHelicopter) {
    return (
      <group ref={groupRef} position={[0, -0.5, 0]}>
        {/* Fuselage - Faceted Combat Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.2, 1.3, 3.4]} />
          <meshStandardMaterial color="#334155" metalness={0.7} roughness={0.3} wireframe={wireframe} />
        </mesh>

        {/* Stepped Tandem Cockpit Canopy */}
        <mesh position={[0, 0.5, 0.7]} rotation={[-0.2, 0, 0]}>
          <boxGeometry args={[0.7, 0.6, 1.6]} />
          <meshStandardMaterial
            color="#0F172A"
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.75}
            wireframe={wireframe}
          />
        </mesh>

        {/* Chin 20mm Turret Cannon */}
        <group position={[0, -0.6, 1.6]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.8, 12]} />
            <meshStandardMaterial color="#1E293B" metalness={0.9} />
          </mesh>
        </group>

        {/* Tail Boom */}
        <mesh position={[0, 0.2, -2.8]}>
          <boxGeometry args={[0.4, 0.5, 2.8]} />
          <meshStandardMaterial color="#475569" metalness={0.7} roughness={0.3} wireframe={wireframe} />
        </mesh>

        {/* Tail Fin & Small Rotor */}
        <mesh position={[0, 0.8, -4.1]}>
          <boxGeometry args={[0.1, 1.2, 0.6]} />
          <meshStandardMaterial color="#FF6B00" metalness={0.5} roughness={0.4} wireframe={wireframe} />
        </mesh>

        {/* Main Rotor Mast and Blades */}
        <group position={[0, 1.0, 0]}>
          <mesh>
            <cylinderGeometry args={[0.15, 0.15, 0.6, 16]} />
            <meshStandardMaterial color="#0F172A" metalness={0.9} />
          </mesh>

          {/* 4 Spinning Rotor Blades */}
          <group ref={rotorRef} position={[0, 0.3, 0]}>
            {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, idx) => (
              <mesh key={idx} rotation={[0, angle, 0]} position={[Math.cos(angle) * 1.8, 0, Math.sin(angle) * 1.8]}>
                <boxGeometry args={[3.2, 0.04, 0.22]} />
                <meshStandardMaterial color="#1E293B" metalness={0.8} roughness={0.3} />
              </mesh>
            ))}
          </group>
        </group>

        {/* Weapon Stub Wings */}
        <group position={[0, -0.1, 0]}>
          <mesh>
            <boxGeometry args={[3.0, 0.12, 0.6]} />
            <meshStandardMaterial color="#334155" metalness={0.7} roughness={0.3} />
          </mesh>
          {/* Rocket Pods */}
          <mesh position={[-1.2, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.18, 0.18, 0.9, 16]} />
            <meshStandardMaterial color="#FF6B00" metalness={0.6} roughness={0.3} />
          </mesh>
          <mesh position={[1.2, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.18, 0.18, 0.9, 16]} />
            <meshStandardMaterial color="#FF6B00" metalness={0.6} roughness={0.3} />
          </mesh>
        </group>
      </group>
    );
  }

  // Supersonic Delta-Wing Fighter Jet (HAL Tejas Mk1A / AMCA)
  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[0.1, 0, 0]}>
      {/* ----------------- FUSELAGE ----------------- */}
      <mesh position={[0, 0, 0]}>
        <coneGeometry args={[0.8, 5.2, 32]} />
        <meshStandardMaterial
          color="#64748B"
          metalness={0.75}
          roughness={0.25}
          wireframe={wireframe}
        />
      </mesh>

      {/* Nose Radome (Uttam AESA Radar Housing) */}
      <mesh position={[0, 2.7, 0]}>
        <coneGeometry args={[0.4, 1.2, 32]} />
        <meshStandardMaterial
          color="#1E293B"
          metalness={0.8}
          roughness={0.2}
          wireframe={wireframe}
        />
      </mesh>

      {/* Cockpit Glass Canopy */}
      <mesh position={[0, 1.1, 0.5]} rotation={[-0.3, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.45, 1.5, 16]} />
        <meshStandardMaterial
          color="#0F172A"
          metalness={0.95}
          roughness={0.05}
          transparent
          opacity={0.8}
          wireframe={wireframe}
        />
      </mesh>
      {/* Interior Pilot HUD Glow */}
      <mesh position={[0, 1.5, 0.4]}>
        <boxGeometry args={[0.15, 0.12, 0.05]} />
        <meshBasicMaterial color="#00F0FF" />
      </mesh>

      {/* ----------------- COMPOUND DELTA WINGS ----------------- */}
      <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        {/* Custom Prism Delta Wings */}
        <cylinderGeometry args={[0.08, 4.4, 0.08, 3]} />
        <meshStandardMaterial
          color="#475569"
          metalness={0.7}
          roughness={0.3}
          wireframe={wireframe}
        />
      </mesh>

      {/* Close-Coupled Canards (Tejas Mk2 / AMCA feature) */}
      <group position={[0, 1.2, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.04, 1.8, 0.06, 3]} />
          <meshStandardMaterial color="#FF6B00" metalness={0.7} roughness={0.3} />
        </mesh>
      </group>

      {/* ----------------- VERTICAL STABILIZER / FIN ----------------- */}
      <mesh position={[0, -1.0, 0.9]} rotation={[0.4, 0, 0]}>
        <boxGeometry args={[0.08, 1.8, 1.4]} />
        <meshStandardMaterial
          color="#FF6B00"
          metalness={0.6}
          roughness={0.3}
          wireframe={wireframe}
        />
      </mesh>

      {/* IAF Fin Flash Tricolor Badge on Tail Fin */}
      <mesh position={[0.05, -0.8, 1.1]} rotation={[0.4, 0, 0]}>
        <planeGeometry args={[0.01, 0.5]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>

      {/* ----------------- WEAPONS HARDPOINTS & MISSILES ----------------- */}
      {/* Left Wing Missile (Astra BVR) */}
      <group position={[-1.6, -0.8, -0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh>
          <cylinderGeometry args={[0.06, 0.06, 1.4, 12]} />
          <meshStandardMaterial color="#E2E8F0" metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.8, 0]}>
          <coneGeometry args={[0.06, 0.3, 12]} />
          <meshStandardMaterial color="#FF6B00" />
        </mesh>
      </group>

      {/* Right Wing Missile (Astra BVR) */}
      <group position={[1.6, -0.8, -0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh>
          <cylinderGeometry args={[0.06, 0.06, 1.4, 12]} />
          <meshStandardMaterial color="#E2E8F0" metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.8, 0]}>
          <coneGeometry args={[0.06, 0.3, 12]} />
          <meshStandardMaterial color="#FF6B00" />
        </mesh>
      </group>

      {/* ----------------- TURBOFAN ENGINE AFTERBURNER NOZZLE ----------------- */}
      <group position={[0, -2.6, 0]}>
        {/* Titanium Exhaust Nozzle Bell */}
        <mesh>
          <cylinderGeometry args={[0.5, 0.42, 0.6, 24]} />
          <meshStandardMaterial
            color="#1E293B"
            metalness={0.9}
            roughness={0.2}
            wireframe={wireframe}
          />
        </mesh>

        {/* Glowing Afterburner Flame Cone */}
        <mesh ref={afterburnerRef} position={[0, -0.8, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.36, 1.4, 16]} />
          <meshStandardMaterial
            color="#FF5500"
            emissive="#FF4500"
            emissiveIntensity={3.0}
            transparent
            opacity={0.85}
          />
        </mesh>
      </group>
    </group>
  );
}
