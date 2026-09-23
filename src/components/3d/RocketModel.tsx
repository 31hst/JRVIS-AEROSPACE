'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RocketModelProps {
  exploded?: boolean;
  wireframe?: boolean;
  modelType?: 'lvm3' | 'pslv' | 'gslv' | 'sslv' | 'gaganyaan' | 'future';
}

export default function RocketModel({
  exploded = false,
  wireframe = false,
  modelType = 'lvm3',
}: RocketModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const leftFlameRef = useRef<THREE.Mesh>(null);
  const rightFlameRef = useRef<THREE.Mesh>(null);
  const coreFlameRef = useRef<THREE.Group>(null);

  // Slow idle rotation when not dragging
  useFrame((state, delta) => {
    if (groupRef.current && !exploded) {
      groupRef.current.rotation.y += delta * 0.28;
    }
    // High-frequency flame flicker
    const t = state.clock.elapsedTime * 18;
    const flicker = 1 + Math.sin(t) * 0.12 + Math.cos(t * 1.7) * 0.08;
    if (leftFlameRef.current) {
      leftFlameRef.current.scale.set(flicker, flicker * 1.15, flicker);
    }
    if (rightFlameRef.current) {
      rightFlameRef.current.scale.set(flicker, flicker * 1.15, flicker);
    }
    if (coreFlameRef.current) {
      coreFlameRef.current.scale.set(flicker * 0.9, flicker, flicker * 0.9);
    }
  });

  // Stage separation offsets when exploded view is toggled
  const boosterSpread = exploded ? 2.8 : 0;
  const boosterDrop = exploded ? -1.8 : 0;
  const coreOffset = exploded ? 0.8 : 0;
  const stage3Offset = exploded ? 2.8 : 0;
  const fairingOffset = exploded ? 4.8 : 0;
  const fairingSplit = exploded ? 1.4 : 0;

  // Shared PBR materials matching painted aerospace aluminum, composites, and orange insulation
  const materials = useMemo(() => {
    return {
      whiteBody: new THREE.MeshStandardMaterial({
        color: '#F8FAFC',
        metalness: 0.38,
        roughness: 0.42,
        wireframe,
      }),
      coreGrey: new THREE.MeshStandardMaterial({
        color: '#E2E8F0',
        metalness: 0.42,
        roughness: 0.4,
        wireframe,
      }),
      orangeInsulation: new THREE.MeshStandardMaterial({
        color: '#F97316', // Authentic ISRO thermal foam orange
        metalness: 0.25,
        roughness: 0.65,
        wireframe,
      }),
      darkMetalJoint: new THREE.MeshStandardMaterial({
        color: '#0F172A',
        metalness: 0.85,
        roughness: 0.25,
        wireframe,
      }),
      interstageTruss: new THREE.MeshStandardMaterial({
        color: '#1E293B',
        metalness: 0.8,
        roughness: 0.3,
        wireframe,
      }),
      nozzleTitanium: new THREE.MeshStandardMaterial({
        color: '#334155',
        metalness: 0.9,
        roughness: 0.22,
        wireframe,
      }),
      copperThroat: new THREE.MeshStandardMaterial({
        color: '#B45309',
        metalness: 0.92,
        roughness: 0.28,
        wireframe,
      }),
      strutHardware: new THREE.MeshStandardMaterial({
        color: '#475569',
        metalness: 0.82,
        roughness: 0.32,
        wireframe,
      }),
      satelliteGold: new THREE.MeshStandardMaterial({
        color: '#FBBF24',
        metalness: 0.95,
        roughness: 0.12,
        wireframe,
      }),
      solarCellBlue: new THREE.MeshStandardMaterial({
        color: '#1E3A8A',
        metalness: 0.85,
        roughness: 0.2,
        wireframe,
      }),
    };
  }, [wireframe]);

  return (
    <group ref={groupRef} position={[0, -2.4, 0]}>
      {/* ========================================================================= */}
      {/* 1. CENTRAL CORE LIQUID STAGE (L110)                                       */}
      {/* ========================================================================= */}
      <group position={[0, coreOffset, 0]}>
        {/* Boat-tail engine skirt (slightly tapered toward nozzles) */}
        <mesh position={[0, 0.45, 0]} material={materials.coreGrey}>
          <cylinderGeometry args={[0.82, 0.74, 0.9, 36]} />
        </mesh>

        {/* Lower White Tank Section */}
        <mesh position={[0, 1.45, 0]} material={materials.coreGrey}>
          <cylinderGeometry args={[0.82, 0.82, 1.1, 36]} />
        </mesh>

        {/* Stage Separation Lower Ring (circumferential band) */}
        <mesh position={[0, 2.02, 0]} material={materials.darkMetalJoint}>
          <cylinderGeometry args={[0.83, 0.83, 0.06, 36]} />
        </mesh>

        {/* Central Orange Thermal Foam Insulation Band (ISRO Signature L110) */}
        <group position={[0, 2.9, 0]}>
          <mesh material={materials.orangeInsulation}>
            <cylinderGeometry args={[0.832, 0.832, 1.7, 36]} />
          </mesh>
          {/* Subtle circumferential ribbed texture rings on insulation */}
          <mesh position={[0, -0.4, 0]} material={materials.darkMetalJoint}>
            <cylinderGeometry args={[0.836, 0.836, 0.02, 36]} />
          </mesh>
          <mesh position={[0, 0.4, 0]} material={materials.darkMetalJoint}>
            <cylinderGeometry args={[0.836, 0.836, 0.02, 36]} />
          </mesh>
        </group>

        {/* Upper Tank Joint Ring */}
        <mesh position={[0, 3.78, 0]} material={materials.darkMetalJoint}>
          <cylinderGeometry args={[0.83, 0.83, 0.06, 36]} />
        </mesh>

        {/* Upper White Tank Section */}
        <mesh position={[0, 4.3, 0]} material={materials.whiteBody}>
          <cylinderGeometry args={[0.82, 0.82, 0.98, 36]} />
        </mesh>

        {/* Longitudinal External Cable Conduit / Raceway strip */}
        <mesh position={[0.825, 2.6, 0]} material={materials.darkMetalJoint}>
          <boxGeometry args={[0.035, 4.5, 0.07]} />
        </mesh>
        <mesh position={[-0.825, 2.6, 0]} material={materials.darkMetalJoint}>
          <boxGeometry args={[0.035, 4.5, 0.07]} />
        </mesh>

        {/* Twin Vikas Liquid Engines with Gimbal Bells & Actuators */}
        <group position={[0, 0, 0]}>
          {[-0.34, 0.34].map((xOffset, idx) => (
            <group key={idx} position={[xOffset, 0, 0]}>
              {/* Combustion chamber throat (copper/bronze) */}
              <mesh position={[0, 0.05, 0]} material={materials.copperThroat}>
                <cylinderGeometry args={[0.11, 0.15, 0.22, 20]} />
              </mesh>
              {/* Flared Nozzle Bell */}
              <mesh position={[0, -0.25, 0]} material={materials.nozzleTitanium}>
                <cylinderGeometry args={[0.14, 0.32, 0.42, 24]} />
              </mesh>
              {/* Nozzle Exit Lip Ring */}
              <mesh position={[0, -0.46, 0]} material={materials.darkMetalJoint}>
                <torusGeometry args={[0.32, 0.018, 12, 24]} />
              </mesh>
              {/* Gimbal Hydraulic Actuator Struts */}
              <mesh position={[xOffset > 0 ? -0.12 : 0.12, -0.1, 0]} rotation={[0, 0, xOffset > 0 ? 0.35 : -0.35]} material={materials.strutHardware}>
                <cylinderGeometry args={[0.02, 0.02, 0.35, 8]} />
              </mesh>
            </group>
          ))}

          {/* Core Engine Thrust Glow (during liftoff / burn) */}
          {!exploded && (
            <group ref={coreFlameRef} position={[0, -0.65, 0]}>
              <mesh position={[-0.34, 0, 0]} rotation={[Math.PI, 0, 0]}>
                <coneGeometry args={[0.26, 1.1, 16]} />
                <meshStandardMaterial
                  color="#FF5500"
                  emissive="#FF3300"
                  emissiveIntensity={2.8}
                  transparent
                  opacity={0.8}
                />
              </mesh>
              <mesh position={[0.34, 0, 0]} rotation={[Math.PI, 0, 0]}>
                <coneGeometry args={[0.26, 1.1, 16]} />
                <meshStandardMaterial
                  color="#FF5500"
                  emissive="#FF3300"
                  emissiveIntensity={2.8}
                  transparent
                  opacity={0.8}
                />
              </mesh>
            </group>
          )}
        </group>
      </group>

      {/* ========================================================================= */}
      {/* 2. INTERSTAGE 1/2 ADAPTER (Connecting L110 to C25 Cryogenic)              */}
      {/* ========================================================================= */}
      <group position={[0, 4.95 + coreOffset, 0]}>
        {/* Slotted Ribbed Interstage Lattice */}
        <mesh material={materials.interstageTruss}>
          <cylinderGeometry args={[0.82, 0.82, 0.35, 36]} />
        </mesh>
        {/* Lattice rib rings */}
        <mesh position={[0, 0.17, 0]} material={materials.darkMetalJoint}>
          <torusGeometry args={[0.825, 0.016, 8, 36]} />
        </mesh>
        <mesh position={[0, -0.17, 0]} material={materials.darkMetalJoint}>
          <torusGeometry args={[0.825, 0.016, 8, 36]} />
        </mesh>
      </group>

      {/* ========================================================================= */}
      {/* 3. CRYOGENIC UPPER STAGE (C25 with CE-20 Engine)                          */}
      {/* ========================================================================= */}
      <group position={[0, 5.75 + stage3Offset, 0]}>
        {/* CE-20 High-Expansion Cryogenic Engine Bell */}
        <group position={[0, -0.38, 0]}>
          <mesh material={materials.nozzleTitanium}>
            <cylinderGeometry args={[0.18, 0.44, 0.55, 24]} />
          </mesh>
          <mesh position={[0, -0.28, 0]} material={materials.darkMetalJoint}>
            <torusGeometry args={[0.44, 0.02, 10, 24]} />
          </mesh>
          <mesh position={[0, 0.15, 0]} material={materials.copperThroat}>
            <cylinderGeometry args={[0.12, 0.18, 0.25, 16]} />
          </mesh>
        </group>

        {/* C25 Cryogenic Tank (Insulated pristine white) */}
        <mesh position={[0, 0.4, 0]} material={materials.whiteBody}>
          <cylinderGeometry args={[0.82, 0.82, 1.05, 36]} />
        </mesh>

        {/* Cryogenic Stage Separation Ring */}
        <mesh position={[0, 0.95, 0]} material={materials.darkMetalJoint}>
          <cylinderGeometry args={[0.83, 0.83, 0.06, 36]} />
        </mesh>

        {/* Internal Satellite (revealed when fairing separates) */}
        {exploded && (
          <group position={[0, 1.8, 0]}>
            {/* Satellite Body */}
            <mesh material={materials.satelliteGold}>
              <boxGeometry args={[0.7, 0.7, 0.7]} />
            </mesh>
            {/* Deployable Solar Wings */}
            <mesh position={[-1.05, 0, 0]} material={materials.solarCellBlue}>
              <boxGeometry args={[1.2, 0.55, 0.04]} />
            </mesh>
            <mesh position={[1.05, 0, 0]} material={materials.solarCellBlue}>
              <boxGeometry args={[1.2, 0.55, 0.04]} />
            </mesh>
            {/* Parabolic Antenna Dish */}
            <mesh position={[0, 0.65, 0]} rotation={[0.4, 0, 0]} material={materials.whiteBody}>
              <sphereGeometry args={[0.38, 16, 8, 0, Math.PI * 2, 0, 1.0]} />
            </mesh>
          </group>
        )}
      </group>

      {/* ========================================================================= */}
      {/* 4. 5.0m BULBOUS OGIVE PAYLOAD FAIRING (Heat Shield)                      */}
      {/* ========================================================================= */}
      <group position={[0, 7.2 + fairingOffset, 0]}>
        {!exploded ? (
          /* Closed Aerodynamic Ogive Fairing */
          <group>
            {/* Biconic Boat-Tail Flare Adapter: transitions from 0.82m core up to 1.02m fairing! */}
            <mesh position={[0, -0.4, 0]} material={materials.whiteBody}>
              <cylinderGeometry args={[1.02, 0.82, 0.75, 36]} />
            </mesh>

            {/* Cylindrical Fairing Mid-Body (wider 5.0m diameter) */}
            <mesh position={[0, 0.55, 0]} material={materials.whiteBody}>
              <cylinderGeometry args={[1.02, 1.02, 1.15, 36]} />
            </mesh>

            {/* Indian Tricolor Ring Band Decal */}
            <group position={[0, 0.55, 0]}>
              {/* Saffron Ring */}
              <mesh position={[0, 0.1, 0]}>
                <cylinderGeometry args={[1.025, 1.025, 0.09, 36]} />
                <meshStandardMaterial color="#FF9933" roughness={0.4} />
              </mesh>
              {/* White Ring */}
              <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[1.025, 1.025, 0.09, 36]} />
                <meshStandardMaterial color="#FFFFFF" roughness={0.4} />
              </mesh>
              {/* Emerald Green Ring */}
              <mesh position={[0, -0.1, 0]}>
                <cylinderGeometry args={[1.025, 1.025, 0.09, 36]} />
                <meshStandardMaterial color="#138808" roughness={0.4} />
              </mesh>
            </group>

            {/* Rounded Ogive Nose Cone (smooth curvature, not a straight flat cone) */}
            <mesh position={[0, 1.7, 0]} material={materials.whiteBody}>
              <coneGeometry args={[1.02, 1.35, 36]} />
            </mesh>
            <mesh position={[0, 2.38, 0]} material={materials.whiteBody}>
              <sphereGeometry args={[0.28, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
            </mesh>

            {/* Subtle Meridian Clamshell Seam (splits in half in real flight) */}
            <mesh position={[0, 0.9, 1.025]}>
              <planeGeometry args={[0.015, 2.2]} />
              <meshBasicMaterial color="#334155" />
            </mesh>
          </group>
        ) : (
          /* Jettisoned Clamshell Fairing Halves (spread to left and right) */
          <group>
            {/* Left Fairing Half */}
            <group position={[-fairingSplit, 0, 0]} rotation={[0, 0, 0.25]}>
              <mesh material={materials.whiteBody}>
                <cylinderGeometry args={[1.02, 0.82, 0.75, 18, 1, false, 0, Math.PI]} />
              </mesh>
              <mesh position={[0, 0.95, 0]} material={materials.whiteBody}>
                <coneGeometry args={[1.02, 1.35, 18, 1, false, 0, Math.PI]} />
              </mesh>
            </group>

            {/* Right Fairing Half */}
            <group position={[fairingSplit, 0, 0]} rotation={[0, 0, -0.25]}>
              <mesh material={materials.whiteBody}>
                <cylinderGeometry args={[1.02, 0.82, 0.75, 18, 1, false, Math.PI, Math.PI]} />
              </mesh>
              <mesh position={[0, 0.95, 0]} material={materials.whiteBody}>
                <coneGeometry args={[1.02, 1.35, 18, 1, false, Math.PI, Math.PI]} />
              </mesh>
            </group>
          </group>
        )}

        {/* Human-Rated Gaganyaan Crew Escape System Tower */}
        {modelType === 'gaganyaan' && (
          <group position={[0, 2.7, 0]}>
            {/* Aerodynamic shroud */}
            <mesh position={[0, 0.4, 0]} material={materials.whiteBody}>
              <cylinderGeometry args={[0.28, 0.35, 0.8, 20]} />
            </mesh>
            {/* Escape tower truss */}
            <mesh position={[0, 1.4, 0]} material={materials.interstageTruss}>
              <cylinderGeometry args={[0.12, 0.18, 1.4, 12, 2, true]} />
            </mesh>
            {/* Jettison solid rocket motors cluster */}
            <mesh position={[0, 2.2, 0]} material={materials.orangeInsulation}>
              <cylinderGeometry args={[0.18, 0.18, 0.6, 12]} />
            </mesh>
            {/* Nose spike */}
            <mesh position={[0, 2.7, 0]} material={materials.nozzleTitanium}>
              <coneGeometry args={[0.08, 0.5, 12]} />
            </mesh>
          </group>
        )}
      </group>

      {/* ========================================================================= */}
      {/* 5. TWIN S200 SOLID STRAP-ON BOOSTERS                                      */}
      {/* ========================================================================= */}
      {[-1, 1].map((side) => {
        const xPos = side * (1.35 + boosterSpread);
        const yPos = boosterDrop;
        const flameRef = side === -1 ? leftFlameRef : rightFlameRef;

        return (
          <group key={side} position={[xPos, yPos, 0]} rotation={exploded ? [0, 0, side * 0.18] : [0, 0, 0]}>
            {/* Main Booster Cylindrical Body (Tall & Slender 5.2m aspect ratio) */}
            <mesh position={[0, 2.3, 0]} material={materials.whiteBody}>
              <cylinderGeometry args={[0.44, 0.44, 4.6, 32]} />
            </mesh>

            {/* S200 Factory Segment Joint Rings (3 tongue-and-groove joint rings) */}
            <mesh position={[0, 1.0, 0]} material={materials.darkMetalJoint}>
              <cylinderGeometry args={[0.446, 0.446, 0.05, 32]} />
            </mesh>
            <mesh position={[0, 2.3, 0]} material={materials.darkMetalJoint}>
              <cylinderGeometry args={[0.446, 0.446, 0.05, 32]} />
            </mesh>
            <mesh position={[0, 3.6, 0]} material={materials.darkMetalJoint}>
              <cylinderGeometry args={[0.446, 0.446, 0.05, 32]} />
            </mesh>

            {/* External Cable Tunnel / Raceway along outer side */}
            <mesh position={[side * 0.445, 2.3, 0]} material={materials.darkMetalJoint}>
              <boxGeometry args={[0.025, 4.4, 0.05]} />
            </mesh>

            {/* Rounded Ogive Nose Cone (canted slightly inward toward core) */}
            <group position={[0, 4.6, 0]}>
              {/* Lower conical base */}
              <mesh position={[0, 0.35, 0]} material={materials.whiteBody}>
                <cylinderGeometry args={[0.36, 0.44, 0.7, 32]} />
              </mesh>
              {/* Rounded Ogive Nose transition */}
              <mesh position={[0, 0.95, 0]} material={materials.whiteBody}>
                <coneGeometry args={[0.36, 0.7, 32]} />
              </mesh>
              {/* Bright Orange Nose Tip (Authentic S200 color scheme) */}
              <mesh position={[0, 1.35, 0]} material={materials.orangeInsulation}>
                <sphereGeometry args={[0.15, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
              </mesh>
            </group>

            {/* Booster Base Boattail Taper */}
            <mesh position={[0, -0.22, 0]} material={materials.whiteBody}>
              <cylinderGeometry args={[0.44, 0.38, 0.5, 28]} />
            </mesh>

            {/* Flared Submerged Flex-Nozzle Bell */}
            <group position={[0, -0.65, 0]}>
              <mesh material={materials.nozzleTitanium}>
                <cylinderGeometry args={[0.22, 0.42, 0.55, 24]} />
              </mesh>
              {/* Nozzle exit lip torus ring */}
              <mesh position={[0, -0.28, 0]} material={materials.darkMetalJoint}>
                <torusGeometry args={[0.42, 0.02, 10, 24]} />
              </mesh>
            </group>

            {/* Forward Attachment Strut Bracket (connecting S200 to Core Interstage) */}
            {!exploded && (
              <group position={[side === 1 ? -0.36 : 0.36, 4.2, 0]}>
                <mesh rotation={[0, 0, side === 1 ? 0.45 : -0.45]} material={materials.strutHardware}>
                  <boxGeometry args={[0.45, 0.08, 0.12]} />
                </mesh>
                <mesh position={[0, -0.15, 0]} material={materials.strutHardware}>
                  <boxGeometry args={[0.15, 0.3, 0.14]} />
                </mesh>
              </group>
            )}

            {/* Aft Attachment Structural Box Strut (connecting S200 base to Core Boat-tail) */}
            {!exploded && (
              <group position={[side === 1 ? -0.32 : 0.32, 0.4, 0]}>
                <mesh material={materials.strutHardware}>
                  <boxGeometry args={[0.45, 0.16, 0.2]} />
                </mesh>
              </group>
            )}

            {/* Solid Rocket Thrust Exhaust Flame */}
            {!exploded && (
              <mesh ref={flameRef} position={[0, -1.35, 0]} rotation={[Math.PI, 0, 0]}>
                <coneGeometry args={[0.38, 1.5, 20]} />
                <meshStandardMaterial
                  color="#FF5500"
                  emissive="#FF3300"
                  emissiveIntensity={3.2}
                  transparent
                  opacity={0.88}
                />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
}
