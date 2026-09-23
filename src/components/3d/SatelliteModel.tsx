'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SatelliteModelProps {
  wireframe?: boolean;
  modelType?: 'lander' | 'orbiter' | 'solar' | 'commsat' | 'earthsat';
  deployed?: boolean;
}

export default function SatelliteModel({
  wireframe = false,
  modelType = 'lander',
  deployed = true,
}: SatelliteModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const dishRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
    }
    if (dishRef.current) {
      dishRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* ----------------- CENTRAL BUS / MAIN BODY ----------------- */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          color="#FFD700" // Golden MLI Thermal Foil
          metalness={0.9}
          roughness={0.15}
          wireframe={wireframe}
        />
      </mesh>

      {/* Equipment Bay Top Deck */}
      <mesh position={[0, 0.78, 0]}>
        <boxGeometry args={[1.4, 0.08, 1.4]} />
        <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.3} wireframe={wireframe} />
      </mesh>

      {/* Optical Sensor / Scientific Camera Aperture */}
      <group position={[0, 0, 0.76]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.38, 0.3, 24]} />
          <meshStandardMaterial color="#0F172A" metalness={0.9} roughness={0.1} wireframe={wireframe} />
        </mesh>
        {/* Optical Glass Lens Element */}
        <mesh position={[0, 0, 0.16]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.26, 24]} />
          <meshStandardMaterial
            color="#00F0FF"
            metalness={0.95}
            roughness={0.05}
            emissive="#00F0FF"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* ----------------- HIGH-GAIN PARABOLIC DISH ANTENNA ----------------- */}
      <group ref={dishRef} position={[0, 1.3, 0]} rotation={[0.4, 0.3, 0]}>
        {/* Support Gimbal Arm */}
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.6, 12]} />
          <meshStandardMaterial color="#94A3B8" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Parabolic Reflector Dish */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <sphereGeometry args={[0.8, 24, 12, 0, Math.PI * 2, 0, 1.1]} />
          <meshStandardMaterial
            color="#F8FAFC"
            metalness={0.6}
            roughness={0.2}
            side={THREE.DoubleSide}
            wireframe={wireframe}
          />
        </mesh>
        {/* Feed Horn Struts */}
        <mesh position={[0, 0, 0.45]}>
          <coneGeometry args={[0.1, 0.3, 12]} />
          <meshStandardMaterial color="#FF6B00" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* ----------------- DEPLOYABLE SOLAR ARRAY WINGS ----------------- */}
      {/* Left Solar Wing */}
      <group position={[-0.8, 0, 0]}>
        {/* Hinge Joint */}
        <mesh position={[-0.15, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.4, 12]} />
          <meshStandardMaterial color="#FF6B00" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Solar Panel Array Panels */}
        <group position={[-1.4, 0, 0]}>
          {/* Panel 1 */}
          <mesh position={[-0.7, 0, 0]}>
            <boxGeometry args={[1.2, 1.2, 0.04]} />
            <meshStandardMaterial
              color="#1E3A8A" // Photovoltaic Dark Blue
              metalness={0.85}
              roughness={0.2}
              wireframe={wireframe}
            />
          </mesh>
          {/* Panel 2 (if deployed) */}
          {deployed && (
            <mesh position={[-1.95, 0, 0]}>
              <boxGeometry args={[1.2, 1.2, 0.04]} />
              <meshStandardMaterial
                color="#1E3A8A"
                metalness={0.85}
                roughness={0.2}
                wireframe={wireframe}
              />
            </mesh>
          )}
        </group>
      </group>

      {/* Right Solar Wing */}
      <group position={[0.8, 0, 0]}>
        {/* Hinge Joint */}
        <mesh position={[0.15, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.4, 12]} />
          <meshStandardMaterial color="#FF6B00" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Solar Panel Array Panels */}
        <group position={[1.4, 0, 0]}>
          {/* Panel 1 */}
          <mesh position={[0.7, 0, 0]}>
            <boxGeometry args={[1.2, 1.2, 0.04]} />
            <meshStandardMaterial
              color="#1E3A8A"
              metalness={0.85}
              roughness={0.2}
              wireframe={wireframe}
            />
          </mesh>
          {/* Panel 2 */}
          {deployed && (
            <mesh position={[1.95, 0, 0]}>
              <boxGeometry args={[1.2, 1.2, 0.04]} />
              <meshStandardMaterial
                color="#1E3A8A"
                metalness={0.85}
                roughness={0.2}
                wireframe={wireframe}
              />
            </mesh>
          )}
        </group>
      </group>

      {/* ----------------- RCS REACTION CONTROL THRUSTERS ----------------- */}
      {/* 4 Corner Thruster Clusters */}
      {[
        [-0.75, -0.75, -0.75],
        [0.75, -0.75, -0.75],
        [-0.75, -0.75, 0.75],
        [0.75, -0.75, 0.75],
      ].map((pos, idx) => (
        <group key={idx} position={pos as [number, number, number]}>
          <mesh>
            <boxGeometry args={[0.15, 0.15, 0.15]} />
            <meshStandardMaterial color="#64748B" metalness={0.9} />
          </mesh>
          {/* Mini Nozzle */}
          <mesh position={[0, -0.12, 0]}>
            <coneGeometry args={[0.06, 0.12, 8]} />
            <meshStandardMaterial color="#1E293B" metalness={0.9} />
          </mesh>
        </group>
      ))}

      {/* ----------------- CHANDRAYAAN-3 LANDER LEGS (if lander model) ----------------- */}
      {modelType === 'lander' && (
        <group position={[0, -0.8, 0]}>
          {/* 4 Articulated Landing Struts with Shock Absorbers */}
          {[
            { pos: [-0.9, -0.4, -0.9], rot: [0.3, 0.7, -0.4] },
            { pos: [0.9, -0.4, -0.9], rot: [0.3, -0.7, 0.4] },
            { pos: [-0.9, -0.4, 0.9], rot: [-0.3, -0.7, -0.4] },
            { pos: [0.9, -0.4, 0.9], rot: [-0.3, 0.7, 0.4] },
          ].map((leg, idx) => (
            <group key={idx} position={leg.pos as [number, number, number]} rotation={leg.rot as [number, number, number]}>
              {/* Telescopic Strut */}
              <mesh>
                <cylinderGeometry args={[0.05, 0.05, 1.1, 12]} />
                <meshStandardMaterial color="#CBD5E1" metalness={0.9} roughness={0.2} />
              </mesh>
              {/* Footpad */}
              <mesh position={[0, -0.55, 0]}>
                <cylinderGeometry args={[0.22, 0.22, 0.06, 16]} />
                <meshStandardMaterial color="#FF6B00" metalness={0.7} roughness={0.3} />
              </mesh>
            </group>
          ))}

          {/* Central 800N Throttleable Liquid Descent Engine Bell */}
          <mesh position={[0, -0.15, 0]}>
            <cylinderGeometry args={[0.18, 0.35, 0.4, 16]} />
            <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
      )}
    </group>
  );
}
