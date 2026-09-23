import { AircraftEntity } from '@/types';

export const AIRCRAFT_DATA: AircraftEntity[] = [
  {
    id: 'hal-tejas-mk1a',
    slug: 'hal-tejas-mk1a',
    name: 'HAL Tejas Mk1A',
    codeName: 'LCA (Light Combat Aircraft)',
    role: '4.5 Gen Multirole Supersonic Fighter',
    manufacturer: 'Hindustan Aeronautics Limited (HAL) & ADA',
    operator: 'Indian Air Force (IAF)',
    era: '2020s (Modern Operational)',
    firstFlight: 'March 2024 (First Production Flight)',
    status: 'Active',
    modelType: 'fighter',
    summary: 'The pinnacle of indigenous Indian fighter design: an agile delta-wing supersonic multirole fighter with advanced EL/M-2052 / Uttam AESA radar, EW suite, and air-to-air refueling.',
    description: [
      'The HAL Tejas Mk1A represents the apex iteration of India\'s Light Combat Aircraft (LCA) initiative, developed jointly by the Aeronautical Development Agency (ADA) and Hindustan Aeronautics Limited (HAL). Engineered with a tailless compound delta-wing architecture made largely of high-grade carbon-fiber composites (over 45% by airframe weight), the Tejas Mk1A exhibits exceptional agility, low radar cross-section (RCS), and high structural strength.',
      'Crucial upgrades distinguishing the Mk1A variant from earlier iterations include the integration of an Active Electronically Scanned Array (AESA) radar (the indigenous Uttam / EL/M-2052), an advanced indigenous Electronic Warfare (EW) suite with digital radar warning receiver (RWR) and external jamming pod, an inflight refueling probe (IFR) for extended combat radius, and enhanced ease of maintenance featuring rapid turnaround times.',
      'With fly-by-wire digital flight control system (DFCS) developed by ADE/HAL and powered by the combat-proven General Electric F404-GE-IN20D afterburning turbofan, the Tejas Mk1A is equipped to deploy state-of-the-art beyond-visual-range (BVR) missiles including Astra Mk1, ASRAAM, and precision-guided standoff munitions.'
    ],
    keyFeatures: [
      'Carbon-fiber composite airframe achieving high strength-to-weight ratio and reduced RCS',
      'Indigenous Uttam AESA Radar & integrated Self-Protection Jammer (SPJ)',
      'Quadruplex redundant digital Fly-By-Wire (DFCS) flight control system',
      'Probe-and-drogue inflight refueling capability doubling combat reach',
      'Advanced glass cockpit with large multifunction displays (MFDs) and Smart HUD'
    ],
    specs: {
      crew: '1 Pilot (Single Seat)',
      length: '13.20 m (43 ft 4 in)',
      wingspan: '8.20 m (26 ft 11 in)',
      height: '4.40 m (14 ft 5 in)',
      emptyWeight: '6,560 kg (14,462 lb)',
      maxTakeoffWeight: '13,500 kg (29,762 lb)',
      powerplant: {
        model: 'General Electric F404-GE-IN20D',
        type: 'Afterburning Turbofan with FADEC',
        dryThrust: '53.9 kN (12,100 lbf)',
        afterburnerThrust: '85 kN (19,000 lbf)'
      },
      performance: {
        maxSpeed: 'Mach 1.8 (2,220 km/h at altitude)',
        cruiseSpeed: 'Mach 0.85 (900 km/h)',
        range: '1,850 km (ferry range 3,000 km with drop tanks)',
        combatRadius: '500 km (unrefueled low-low-high profile)',
        serviceCeiling: '15,240 m (50,000 ft)',
        rateOfClimb: '300 m/s',
        gLimits: '+8 / -3.5 g'
      },
      armament: {
        hardpoints: 8,
        capacity: '5,300 kg (11,684 lb) weapons payload',
        guns: '1x 23mm GSh-23 twin-barrel cannon with 220 rounds',
        missiles: ['Astra Mk1 (BVR)', 'ASRAAM (Close combat)', 'Python-5', 'R-73', 'BrahMos-NG (Under development)'],
        bombs: ['Spice 2000 precision glide bomb', 'DRDO SAAW (Smart Anti-Airfield Weapon)', 'Laser Guided Bombs', 'Joint Direct Attack Munitions (JDAM)']
      },
      avionics: [
        'Uttam AESA Radar / ELTA EL/M-2052',
        'Indigenous Tarang Radar Warning Receiver & Self Protection Jammer',
        'Onboard Oxygen Generation System (OBOGS)',
        'Helmet Mounted Display and Sight (HMDS - DASH V)'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f6?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['hal-tejas-mk2', 'hal-amca', 'hal-prachand']
  },
  {
    id: 'hal-tejas-mk2',
    slug: 'hal-tejas-mk2',
    name: 'HAL Tejas Mk2 (MWF)',
    codeName: 'Medium Weight Fighter',
    role: '4.5+ Gen Medium Weight Multirole Fighter',
    manufacturer: 'Aeronautical Development Agency (ADA) & HAL',
    operator: 'Indian Air Force (Planned)',
    era: '2025+ (Prototype Development)',
    firstFlight: 'Scheduled 2026',
    status: 'Under Development',
    modelType: 'fighter',
    summary: 'A heavier, more powerful evolution of the LCA featuring close-coupled canards, the General Electric F414 engine, 6,500 kg payload capacity, and advanced sensor fusion.',
    description: [
      'The HAL Tejas Mk2, designated as the Medium Weight Fighter (MWF), represents a generational leap forward from the light fighter category into a full 17.5-ton class tactical powerhouse. Engineered with a lengthened fuselage to house increased internal fuel volume and a close-coupled canard-delta layout, the Mk2 generates superior lift characteristics and instantaneous turn rates.',
      'Powering the Tejas Mk2 is the higher-thrust General Electric F414-GE-INS6 engine producing 98 kN of peak afterburning thrust. This extra thrust provides supersonic persistence, dramatically enhanced payload capacity across 11 hardpoints, and full multirole strike flexibility.',
      'The avionics suite integrates the DRDO-developed Uttam AESA radar with over 900 transmit/receive modules, an indigenous Infrared Search and Track (IRST) sensor for passive target detection, and an integrated electronic warfare suite (UEWS) capable of omnidirectional jamming.'
    ],
    keyFeatures: [
      'Close-coupled canard delta configuration for superior high-alpha agility and short takeoff',
      'GE F414-GE-INS6 powerplant delivering 98 kN afterburning thrust',
      '11 external hardpoints carrying up to 6,500 kg ordnance',
      'Integrated Infra-Red Search and Track (IRST) for passive stealth target acquisition',
      'Unified Electronic Warfare Suite (UEWS) with internal jammer and MAWS'
    ],
    specs: {
      crew: '1 Pilot',
      length: '14.65 m (48 ft 1 in)',
      wingspan: '8.50 m (27 ft 11 in)',
      height: '4.86 m (15 ft 11 in)',
      emptyWeight: '7,800 kg (17,196 lb)',
      maxTakeoffWeight: '17,500 kg (38,580 lb)',
      powerplant: {
        model: 'General Electric F414-GE-INS6',
        type: 'Turbofan with Full Authority Digital Electronic Control',
        dryThrust: '58.5 kN (13,150 lbf)',
        afterburnerThrust: '98 kN (22,000 lbf)'
      },
      performance: {
        maxSpeed: 'Mach 2.0 (2,385 km/h)',
        cruiseSpeed: 'Mach 0.95',
        range: '2,500 km (ferry range 3,500 km)',
        combatRadius: '700 km',
        serviceCeiling: '17,300 m (56,750 ft)',
        rateOfClimb: '320 m/s',
        gLimits: '+9 / -3.5 g'
      },
      armament: {
        hardpoints: 11,
        capacity: '6,500 kg (14,330 lb)',
        guns: '1x 23mm GSh-23 cannon',
        missiles: ['Astra Mk1, Mk2 & Mk3', 'Rudram-1 Anti-Radiation Missile', 'BrahMos-NG', 'ASRAAM', 'Meteor (Planned integration)'],
        bombs: ['Spice 2000', 'DRDO SAAW', 'Taraq Glide Bombs', 'Precision LGBs']
      },
      avionics: [
        'Advanced Uttam AESA Radar (912 T/R modules)',
        'Indigenous Front-Sector IRST System',
        'Unified Electronic Warfare Suite (UEWS)',
        'Wide Area Display (WAD) panoramic touchscreen cockpit'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f6?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['hal-tejas-mk1a', 'hal-amca', 'su-30mki']
  },
  {
    id: 'hal-amca',
    slug: 'hal-amca',
    name: 'HAL AMCA',
    codeName: 'Advanced Medium Combat Aircraft',
    role: '5th Generation Stealth Multirole Fighter',
    manufacturer: 'Aeronautical Development Agency (ADA) & HAL',
    operator: 'Indian Air Force & Indian Navy (Planned)',
    era: 'Future Horizon (Cabinet Approved)',
    firstFlight: 'Expected 2028-2029',
    status: 'Concept',
    modelType: 'stealth',
    summary: 'India\'s flagship 5th-generation stealth air dominance fighter featuring serpentine air intakes, internal weapons bays, 3D thrust-vectoring, and AI-assisted sensor fusion.',
    description: [
      'The Advanced Medium Combat Aircraft (AMCA) is India’s premier 5th-generation stealth combat aircraft program, sanctioned by the Cabinet Committee on Security (CCS). Designed to rival frontline international stealth platforms, AMCA incorporates full radar cross-section (RCS) suppression, geometric shaping, radar-absorbent materials (RAM), and an internal weapons bay (IWB) that holds high-yield BVR missiles without radar-reflecting external pylons.',
      'AMCA features Diverterless Supersonic Inlets (DSI) and an S-duct serpentine air intake tunnel completely obscuring engine turbine blades from enemy forward-looking radars. Its canted vertical stabilizers, diamond wing planform, and saw-toothed bay doors reflect radar signatures away from threat receivers.',
      'The platform is slated for two phases: Mk1 with twin GE F414 engines, and Mk2 powered by an indigenous 110 kN high-thrust engine developed in partnership with international propulsion leaders, enabling supercruise and 3D thrust vectoring.'
    ],
    keyFeatures: [
      'Comprehensive VLO (Very Low Observable) stealth airframe with internal weapons bays',
      'Diverterless Supersonic Inlets (DSI) and S-duct shielding engine compressor faces',
      'Indigenous Uttam Gallium Nitride (GaN) based AESA radar with track-while-scan air combat modes',
      'Supercruise capability (Mach 1.2+ sustained without afterburners)',
      'Sensor fusion architecture combining radar, distributed IR aperture (EO-DAS), and EW'
    ],
    specs: {
      crew: '1 Pilot (Optionally Manned capable)',
      length: '17.6 m (57 ft 9 in)',
      wingspan: '11.13 m (36 ft 6 in)',
      height: '4.5 m (14 ft 9 in)',
      emptyWeight: '11,000 kg (24,250 lb)',
      maxTakeoffWeight: '25,000 kg (55,115 lb)',
      powerplant: {
        model: 'Twin 110 kN Indigenous Turbofans (Mk2) / GE F414 (Mk1 prototype)',
        type: 'Thrust-vectoring low-bypass afterburning turbofan',
        dryThrust: '2x 65 kN (dry)',
        afterburnerThrust: '2x 110 kN (afterburning)'
      },
      performance: {
        maxSpeed: 'Mach 2.15 (2,600 km/h)',
        cruiseSpeed: 'Mach 1.35 Supercruise',
        range: '3,240 km',
        combatRadius: '1,000 km in internal stealth configuration',
        serviceCeiling: '18,500 m (60,700 ft)',
        rateOfClimb: '350 m/s',
        gLimits: '+9 / -3.5 g'
      },
      armament: {
        hardpoints: 4,
        capacity: '6,500 kg total (2,000 kg internal stealth load, 6 external stations)',
        guns: '1x 23mm concealed GSh-23 cannon',
        missiles: ['Astra Mk1, Mk2, Mk3', 'Rudram Next-Gen', 'BrahMos-NG', 'Smart Standoff Weapons'],
        bombs: ['Precision Guidance Stealth Munitions', 'DRDO Long-Range Glide Bombs']
      },
      avionics: [
        'Advanced GaN Uttam AESA Radar',
        'Electro-Optical Distributed Aperture System (EO-DAS 360°)',
        'Internal Integrated Electronic Warfare Suite',
        'Secure Tactical Data Link & Artificial Intelligence Combat Decision Support'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f6?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['hal-tejas-mk2', 'hal-tejas-mk1a', 'su-30mki']
  },
  {
    id: 'hal-prachand',
    slug: 'hal-prachand',
    name: 'HAL Prachand (LCH)',
    codeName: 'Light Combat Helicopter',
    role: 'High-Altitude Dedicated Attack Helicopter',
    manufacturer: 'Hindustan Aeronautics Limited (HAL)',
    operator: 'Indian Air Force & Indian Army',
    era: '2020s (Operational Service)',
    firstFlight: 'March 2010 (Inducted 2022)',
    status: 'Active',
    modelType: 'helicopter',
    summary: 'The world\'s only dedicated attack helicopter designed to operate and land at extreme Siachen Glacier altitudes exceeding 5,000 meters, carrying heavy precision fire.',
    description: [
      'The HAL Prachand, meaning "Fierce", is a dedicated combat helicopter engineered specifically to solve the high-altitude combat challenges exposed during the 1999 Kargil conflict. Conventional attack helicopters suffer catastrophic lift and power penalties at extreme Himalayan elevations; Prachand was conceived from clean-sheet requirements to perform precision anti-tank and anti-infantry strikes at altitudes above 5,000 meters (16,400 ft).',
      'Prachand features a narrow tandem cockpit with flat armored glass panels, stealth-faceted fuselage contours to dissipate radar returns, canted surfaces, and infrared suppressor baffles over the twin HAL/Turbomeca Shakti turboshaft engines. Its crashworthy tricycle landing gear and bullet-resistant composite armor provide high battlefield survivability.',
      'Armament includes a chin-mounted Nexter THL 20mm cannon slaved to the pilot’s helmet-mounted sight, 70mm FZ275 laser-guided rocket pods, and Dhruvastra (Helina) anti-tank guided missiles with millimeter-wave fire-and-forget guidance.'
    ],
    keyFeatures: [
      'World-record altitude capability: operational ceiling over 6,500 meters (Siachen combat capability)',
      'Tandem armored cockpit with composite armor protecting against 12.7mm rounds',
      'Helmet-slaved chin-mounted 20mm M621 auto-cannon with 280° traverse',
      'Electro-optical targeting system (EOTS) with thermal imager and laser rangefinder',
      'Infrared engine signature suppression system (IRSS) reducing MANPADS vulnerability'
    ],
    specs: {
      crew: '2 (Pilot and Weapons System Operator)',
      length: '15.8 m (51 ft 10 in)',
      wingspan: 'Rotor Diameter 13.3 m (43 ft 8 in)',
      height: '4.7 m (15 ft 5 in)',
      emptyWeight: '2,250 kg (4,960 lb)',
      maxTakeoffWeight: '5,800 kg (12,787 lb)',
      powerplant: {
        model: '2x HAL/Turbomeca Shakti-1H1 Turboshafts',
        type: 'High-altitude turboshaft with dual FADEC',
        totalPower: '2x 1,032 kW (2x 1,384 shp)'
      },
      performance: {
        maxSpeed: '268 km/h (145 knots)',
        cruiseSpeed: '260 km/h (140 knots)',
        range: '560 km (300 nmi unrefueled)',
        combatRadius: '250 km at high-altitude Siachen terrain',
        serviceCeiling: '6,500 m (21,300 ft)',
        rateOfClimb: '12 m/s'
      },
      armament: {
        hardpoints: 4,
        capacity: '1,750 kg weapon load',
        guns: '1x 20mm M621 Nexter THL-20 turret cannon (800 rounds/min)',
        missiles: ['4x Twin Mistral ATAM Air-to-Air Missiles', '8x Dhruvastra (Helina) Anti-Tank Guided Missiles'],
        bombs: ['4x 12-round 70mm FZ275 Laser-Guided Rocket pods']
      },
      avionics: [
        'Elbit CoMPASS Electro-Optical Targeting Pod (FLIR, CCD TV, Laser Designator)',
        'Integrated Defensive Aids Suite (IDAS) with Radar and Laser Warning Receivers',
        'Helmet Mounted Target System (HMTS)',
        'Doppler Navigation and GPS'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['hal-dhruv', 'hal-rudra', 'hal-tejas-mk1a']
  },
  {
    id: 'hal-dhruv',
    slug: 'hal-dhruv',
    name: 'HAL Dhruv (ALH)',
    codeName: 'Advanced Light Helicopter',
    role: 'Multirole Twin-Engine Utility Helicopter',
    manufacturer: 'Hindustan Aeronautics Limited (HAL)',
    operator: 'Indian Army, Indian Navy, Indian Air Force, Coast Guard',
    era: '2000s-Present (Over 350 Produced)',
    firstFlight: 'August 1992 (Inducted 2002)',
    status: 'Active',
    modelType: 'helicopter',
    summary: 'The versatile backbone of India\'s rotary wing fleet, built with a hingeless composite rotor head, twin Shakti engines, and unmatched high-altitude utility capabilities.',
    description: [
      'The HAL Dhruv is India’s flagship indigenously manufactured utility helicopter, serving across all four branches of the Indian armed forces as well as civil agencies. Engineered with substantial composite structural content (60% by surface area), the Dhruv features an advanced hingeless rotor head developed with German design consultation, providing exceptional responsiveness and vibration control.',
      'Designed to excel across India’s extreme environmental spectrum—from the scorching Thar desert at 50°C to the frigid -50°C heights of Siachen Glacier—Dhruv routinely carries critical supplies, performs search and rescue (SAR), tactical troop insertion, and disaster relief operations.',
      'Over 350 Dhruvs have entered active service, logging hundreds of thousands of accident-free flight hours and proving the viability of India\'s domestic aerospace rotary-wing engineering.'
    ],
    keyFeatures: [
      'Hingeless four-blade composite rotor system with integrated vibration damper',
      'Twin Shakti 1H1 turboshafts designed for mountain performance',
      'Full glass cockpit with integrated flight management system',
      'Custom variants for Army, Air Force, Navy (folding rotor), and Coast Guard',
      'Spacious cabin accommodating 12 equipped troops or 4 medevac stretchers'
    ],
    specs: {
      crew: '2 Pilots + 12 Passengers / Troops',
      length: '15.87 m (52 ft 1 in)',
      wingspan: 'Rotor Diameter 13.2 m (43 ft 4 in)',
      height: '4.98 m (16 ft 4 in)',
      emptyWeight: '2,502 kg (5,516 lb)',
      maxTakeoffWeight: '5,500 kg (12,125 lb)',
      powerplant: {
        model: '2x HAL/Turbomeca Shakti-1H1 Turboshafts',
        type: 'Turboshaft with dual FADEC',
        totalPower: '2x 1,032 kW (1,400 shp each)'
      },
      performance: {
        maxSpeed: '290 km/h (157 knots)',
        cruiseSpeed: '250 km/h (135 knots)',
        range: '630 km (340 nmi)',
        serviceCeiling: '6,100 m (20,000 ft)',
        rateOfClimb: '10.3 m/s'
      },
      armament: {
        hardpoints: 0,
        capacity: 'Utility payload up to 1,500 kg sling load',
        guns: 'Optional door-mounted 7.62mm / 12.7mm machine guns'
      },
      avionics: [
        'Integrated Architecture Display System (IADS)',
        'Digital Moving Map and Global Positioning System',
        'Weather Radar (Naval and Coast Guard variants)',
        'Emergency Flotation Gear and Rescue Winch'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['hal-rudra', 'hal-prachand', 'hal-tejas-mk1a']
  },
  {
    id: 'hal-rudra',
    slug: 'hal-rudra',
    name: 'HAL Rudra (ALH-WSI)',
    codeName: 'Weapon System Integrated',
    role: 'Armed Reconnaissance and Tactical Attack Helicopter',
    manufacturer: 'Hindustan Aeronautics Limited (HAL)',
    operator: 'Indian Army & Indian Air Force',
    era: '2010s-Present',
    firstFlight: 'August 2007 (Inducted 2013)',
    status: 'Active',
    modelType: 'helicopter',
    summary: 'The weaponized, combat-hardened evolution of the ALH Dhruv featuring a chin-mounted electro-optical turret, Mistral air-to-air missiles, and 70mm guided rockets.',
    description: [
      'The HAL Rudra (ALH-WSI) converts the proven airframe of the Advanced Light Helicopter into an aggressive combat reconnaissance and armed escort asset. Equipped with stub wings capable of carrying four weapon stations, Rudra delivers rapid suppressive firepower in support of frontline armor and mountain divisions.',
      'The centerpiece of the Rudra is its electro-optical pod mounted above the nose, comprising forward-looking infrared (FLIR), color daylight TV, and laser rangefinder/designator. This allows the crew to identify, track, and engage hostile targets beyond line-of-sight day or night.',
      'Defensively, Rudra incorporates Saab’s Integrated Defensive Aids Suite (IDAS), featuring radar warning, laser warning, missile approach warning systems, and automated chaff/flare dispensers.'
    ],
    keyFeatures: [
      'Integrated Defensive Aids Suite (IDAS) offering 360-degree missile threat protection',
      'Stub wings with 4 weapon hardpoints carrying up to 1,500 kg munitions',
      'Nose-mounted Electro-Optical pod for targeting and thermal surveillance',
      'Helmet Pointing System for rapid engagement of ground targets',
      'Proven mountain capability operating up to 6,000 meters elevation'
    ],
    specs: {
      crew: '2 Pilots',
      length: '15.87 m (52 ft 1 in)',
      wingspan: 'Rotor Diameter 13.2 m (43 ft 4 in)',
      height: '4.98 m (16 ft 4 in)',
      emptyWeight: '2,502 kg',
      maxTakeoffWeight: '5,800 kg (12,787 lb)',
      powerplant: {
        model: '2x HAL/Turbomeca Shakti-1H1 Turboshafts',
        type: 'Turboshaft with FADEC',
        totalPower: '2x 1,032 kW (2x 1,400 shp)'
      },
      performance: {
        maxSpeed: '280 km/h (151 knots)',
        cruiseSpeed: '240 km/h (130 knots)',
        range: '600 km',
        serviceCeiling: '6,100 m (20,000 ft)',
        rateOfClimb: '8.9 m/s'
      },
      armament: {
        hardpoints: 4,
        capacity: '1,500 kg',
        guns: '1x 20mm M621 Nexter turret gun (slaved to helmet)',
        missiles: ['4x Mistral Air-to-Air Missiles', '8x Helina / Dhruvastra Anti-Tank Missiles'],
        bombs: ['4x 12-round 70mm Rocket Pods (Guided and Unguided)']
      },
      avionics: [
        'Saab IDAS Electronic Warfare and Defensive Countermeasures',
        'CoMPASS Optronic Surveillance & Target Acquisition Sight',
        'Integrated Flight Management & Tactical Mission Computer',
        'Helmet Mounted Display and Sight'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['hal-dhruv', 'hal-prachand', 'hal-tejas-mk1a']
  },
  {
    id: 'su-30mki',
    slug: 'su-30mki',
    name: 'Sukhoi Su-30MKI',
    codeName: 'Flanker-H (HAL License Built)',
    role: 'Heavy Air Superiority & Deep Penetration Strike Fighter',
    manufacturer: 'HAL (Under License from Sukhoi) & DRDO',
    operator: 'Indian Air Force (260+ in Service)',
    era: '2000s-Present (IAF Heavy Core)',
    firstFlight: 'November 2000 (First HAL-built 2004)',
    status: 'Active',
    modelType: 'fighter',
    summary: 'The heavyweight spearhead of the IAF: twin AL-31FP 2D thrust-vectoring engines, canards, Bars PESA radar, and modified to launch the 2.5-ton BrahMos supersonic cruise missile.',
    description: [
      'The Sukhoi Su-30MKI represents one of the most capable variants of the iconic Flanker lineage, customized extensively with Indian, French, and Israeli avionics. Manufactured under license by HAL at its Nasik Division, the MKI integrates canard foreplanes with 2D thrust-vectoring Saturn AL-31FP turbofans, conferring extraordinary post-stall supermaneuverability such as the Pugachev’s Cobra and Kulbit maneuvers.',
      'A triumph of indigenous engineering was the modification of the Su-30MKI fuselage and weapon control software to carry and air-launch the 2.5-ton BrahMos supersonic cruise missile at Mach 3. This gives the IAF the unique ability to strike strategic land and sea targets over 450 km away with near-pinpoint accuracy.',
      'Under the \'Super Sukhoi\' modernization roadmap, the fleet is undergoing upgrades with indigenous Uttam AESA radars, advanced EW pods, new mission computers, and Astra Mk2/Mk3 BVR missiles.'
    ],
    keyFeatures: [
      'Thrust-vectoring 2D nozzles coupled with canard delta for post-stall supermaneuverability',
      'Deep strategic strike capability with air-launched BrahMos supersonic cruise missile',
      '12 external hardpoints holding up to 8,000 kg weapons payload',
      'N011M Bars passive electronically scanned array (PESA) radar with 400 km search range',
      'Inflight refueling probe providing continental and oceanic combat reach'
    ],
    specs: {
      crew: '2 (Pilot and Weapon Systems Officer)',
      length: '21.93 m (72 ft 0 in)',
      wingspan: '14.70 m (48 ft 3 in)',
      height: '6.36 m (20 ft 10 in)',
      emptyWeight: '18,400 kg (40,565 lb)',
      maxTakeoffWeight: '38,800 kg (85,539 lb)',
      powerplant: {
        model: '2x Lyulka-Saturn AL-31FP',
        type: 'Thrust-Vectoring Afterburning Turbofans (±32° nozzle deflection)',
        dryThrust: '2x 74.5 kN (16,750 lbf)',
        afterburnerThrust: '2x 122.6 kN (27,560 lbf)'
      },
      performance: {
        maxSpeed: 'Mach 2.0 (2,120 km/h at altitude)',
        cruiseSpeed: 'Mach 0.95',
        range: '3,000 km (ferry range 8,000 km with 2 inflight refuelings)',
        combatRadius: '1,500 km unrefueled',
        serviceCeiling: '17,300 m (56,800 ft)',
        rateOfClimb: '230 m/s',
        gLimits: '+9 / -3.5 g'
      },
      armament: {
        hardpoints: 12,
        capacity: '8,130 kg (17,920 lb)',
        guns: '1x 30mm Gryazev-Shipunov GSh-30-1 auto-cannon (150 rounds)',
        missiles: ['1x BrahMos Supersonic Cruise Missile (Centerline)', 'Astra Mk1 BVR', 'R-77 (AA-12 Adder)', 'R-73 (AA-11 Archer)', 'Rudram-1 Anti-Radiation Missile'],
        bombs: ['KAB-500KR / KAB-1500L Guided Bombs', 'Spice 2000', 'DRDO SAAW', 'OFAB-250 general purpose bombs']
      },
      avionics: [
        'Tikhomirov NIIP N011M Bars Hybrid PESA Radar',
        'OLS-30 Infrared Search and Track (IRST) sensor',
        'DRDO Tarang Mk2 Radar Warning Receiver & SAP-518 Jamming Pod',
        'Thales Totem 3000 Ring Laser Gyro INS/GPS'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f6?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['hal-tejas-mk1a', 'hal-amca', 'dassault-rafale']
  },
  {
    id: 'dassault-rafale',
    slug: 'dassault-rafale',
    name: 'Dassault Rafale EH/DH',
    codeName: 'Omnirole Fighter (Procured)',
    role: '4.5+ Gen Strategic Omnirole Fighter',
    manufacturer: 'Dassault Aviation (Procured with 13 India-Specific Enhancements)',
    operator: 'Indian Air Force (Golden Arrows & Flying Daggers Squadrons)',
    era: '2020s (Operational)',
    firstFlight: 'July 1986 (IAF Inducted 2020)',
    status: 'Procured',
    modelType: 'fighter',
    summary: 'Procured frontline strategic fighter featuring 13 India-Specific Enhancements (ISE), Thales RBE2 AESA radar, SPECTRA electronic warfare suite, Meteor BVR, and SCALP cruise missiles.',
    description: [
      'The Dassault Rafale (EH single-seat and DH twin-seat variants) represents a premier omnirole capability acquired by the Indian Air Force. Specifically tailored with 13 India-Specific Enhancements (ISE), the Indian Rafales feature cold-weather engine start capabilities for Himalayan airbases (such as Leh), radar altimeters, Israeli helmet-mounted displays, towed radar decoys, and encrypted radio data links.',
      'Powered by twin Snecma M88-2 engines, the Rafale carries the revolutionary Meteor Beyond-Visual-Range Air-to-Air Missile (BVRAAM) with a ramjet motor providing a "no-escape zone" exceeding 60 km, unmatched by regional adversaries.',
      'Its SPECTRA electronic warfare system continuously scans 360 degrees for radiofrequency, infrared, and laser threats, utilizing active cancellation jamming to cloak the aircraft in dense air-defense environments.'
    ],
    keyFeatures: [
      '13 India-Specific Enhancements (ISE) tailored for high-altitude Himalayan operations',
      'Thales RBE2 Active Electronically Scanned Array (AESA) radar',
      'SPECTRA integrated electronic warfare suite with stealth active cancellation',
      'Armed with Meteor BVR missile and SCALP deep standoff land-attack cruise missile',
      'Omnirole architecture executing air superiority, deep strike, and recon in single sorties'
    ],
    specs: {
      crew: '1 or 2 (EH: 1 Pilot, DH: 2 Pilots)',
      length: '15.27 m (50 ft 1 in)',
      wingspan: '10.90 m (35 ft 9 in)',
      height: '5.34 m (17 ft 6 in)',
      emptyWeight: '10,300 kg (22,708 lb)',
      maxTakeoffWeight: '24,500 kg (54,013 lb)',
      powerplant: {
        model: '2x Snecma M88-2 Turbofans',
        type: 'Afterburning Turbofans with FADEC',
        dryThrust: '2x 50 kN (11,250 lbf)',
        afterburnerThrust: '2x 75 kN (16,860 lbf)'
      },
      performance: {
        maxSpeed: 'Mach 1.8 (1,912 km/h at altitude)',
        cruiseSpeed: 'Mach 1.1 Supercruise with combat load',
        range: '3,700 km with drop tanks',
        combatRadius: '1,850 km in penetration profile',
        serviceCeiling: '15,835 m (52,000 ft)',
        rateOfClimb: '305 m/s',
        gLimits: '+9 / -3.2 g'
      },
      armament: {
        hardpoints: 14,
        capacity: '9,500 kg (20,944 lb) payload',
        guns: '1x 30mm GIAT 30/M791 auto-cannon (125 rounds)',
        missiles: ['Meteor BVRAAM (Ramjet powered)', 'MICA IR and RF', 'SCALP-EG Long-Range Standoff Cruise Missile', 'Hammer (AASM) precision standoff munition'],
        bombs: ['GBU-12 Paveway II', 'Laser-guided penetration bombs', 'Hammer modular bomb units']
      },
      avionics: [
        'Thales RBE2-AA Active Electronically Scanned Array (AESA) Radar',
        'Thales SPECTRA Internal Electronic Warfare Suite',
        'Front Sector Optronics (FSO) with TV and Laser Rangefinder',
        'Towed Radar Decoy and Elbit DASH Helmet Mounted Display'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f6?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['su-30mki', 'hal-tejas-mk1a', 'hal-amca']
  },
  {
    id: 'hal-htt-40',
    slug: 'hal-htt-40',
    name: 'HAL HTT-40',
    codeName: 'Hindustan Turbo Trainer-40',
    role: 'Basic Flight & Aerobatic Trainer',
    manufacturer: 'Hindustan Aeronautics Limited (HAL)',
    operator: 'Indian Air Force (70 on Order)',
    era: '2020s (In Production)',
    firstFlight: 'May 2016',
    status: 'Under Development',
    modelType: 'trainer',
    summary: 'Indigenous basic turboprop military trainer with modern glass cockpit, tandem zero-zero ejection seats, certified for basic flight training, aerobatics, and instrument flying.',
    description: [
      'The HAL HTT-40 (Hindustan Turbo Trainer 40) is an all-metal, tandem-seat turboprop trainer designed from inception to replace the IAF’s aging basic trainer aircraft. Powered by the reliable Honeywell Garrett TPE331-12B turboprop engine, HTT-40 delivers rapid throttle response, excellent low-speed handling, and benign stall characteristics essential for novice cadet pilots.',
      'Equipped with zero-zero Martin-Baker ejection seats and a cutting-edge glass cockpit designed by HAL’s Mission and Combat Systems R&D Centre (MCSRDC), it trains student pilots on multi-function displays (MFDs) identical in logic to frontline fighters like Tejas and Su-30MKI.',
      'In March 2023, the Ministry of Defence signed an ₹6,800 crore contract for 70 HTT-40 aircraft, securing self-reliance in Stage-1 pilot training.'
    ],
    keyFeatures: [
      'Zero-zero ejection seats enabling escape even at zero altitude and zero speed',
      'Honeywell TPE331-12B turboprop with four-blade constant-speed propeller',
      'Glass cockpit with digital Flight Management System and dual HUD repeaters',
      'Full aerobatic clearance (+6.0 / -3.0 g)',
      'High indigenous content exceeding 60% with full domestic maintenance lifecycle'
    ],
    specs: {
      crew: '2 (Cadet Pilot and Instructor in tandem)',
      length: '11.0 m (36 ft 1 in)',
      wingspan: '11.0 m (36 ft 1 in)',
      height: '3.4 m (11 ft 2 in)',
      emptyWeight: '1,800 kg (3,968 lb)',
      maxTakeoffWeight: '2,800 kg (6,173 lb)',
      powerplant: {
        model: 'Honeywell Garrett TPE331-12B Turboprop',
        type: 'Single-shaft turboprop engine',
        totalPower: '708 kW (950 shp)'
      },
      performance: {
        maxSpeed: '450 km/h (243 knots)',
        cruiseSpeed: '400 km/h (216 knots)',
        range: '1,000 km (540 nmi)',
        serviceCeiling: '6,000 m (19,680 ft)',
        rateOfClimb: '15 m/s',
        gLimits: '+6.0 / -3.0 g'
      },
      armament: {
        hardpoints: 2,
        capacity: 'Light gun pod / unguided practice bombs'
      },
      avionics: [
        'Full Glass Cockpit with 3 large AMLCD screens',
        'VHF/UHF Air-to-Air and Air-to-Ground Comm Radios',
        'VOR/ILS/TACAN and Integrated GPS Navigation',
        'Digital Flight Data Recorder (DFDR) and Solid State CVR'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['hal-tejas-mk1a', 'hal-dornier-228', 'nal-saras-mk2']
  },
  {
    id: 'hal-dornier-228',
    slug: 'hal-dornier-228',
    name: 'HAL / Dornier 228-201',
    codeName: 'Maritime Patrol & Light Transport',
    role: 'Maritime Reconnaissance, Utility, and Commuter Aircraft',
    manufacturer: 'Hindustan Aeronautics Limited (Transport Division Kanpur)',
    operator: 'Indian Coast Guard, Indian Navy, Indian Air Force, Civil Airlines',
    era: '1980s-Present',
    firstFlight: '1981 (HAL Production since 1983)',
    status: 'Active',
    modelType: 'transport',
    summary: 'The twin-turboprop workhorse of India\'s Exclusive Economic Zone (EEZ) surveillance, featuring the advanced Supercritical Dornier TNT wing, 360-degree maritime radar, and pollution monitoring sensors.',
    description: [
      'Manufactured by HAL’s Transport Aircraft Division in Kanpur under an enduring technology-transfer program, the HAL Dornier 228 is an exceptionally versatile twin-turboprop STOL (Short Take-Off and Landing) aircraft. Featuring the innovative Dornier Tragflügel Neuer Technologie (TNT) supercritical airfoil, it boasts reduced drag, high fuel efficiency, and forgiving low-speed handling.',
      'Equipped for maritime surveillance with the Indian Coast Guard and Navy, the aircraft mounts an ELTA 360-degree belly radar, Forward-Looking Infrared (FLIR), Side-Looking Airborne Radar (SLAR) for oil spill detection, and emergency drop hatches for life rafts.',
      'In civil aviation, the DGCA-certified Hindustan-228 variant connects remote airstrips across Northeast India and island territories under the UDAN regional connectivity scheme.'
    ],
    keyFeatures: [
      'Supercritical TNT wing design optimizing cruise efficiency and lift during STOL operations',
      '360-degree Maritime Surveillance Radar tracking surface vessels and pirate skiffs',
      'Side-Looking Airborne Radar (SLAR) and pollution inspection sensor suite',
      'Short takeoff and landing (STOL) capable of operating from rough, unprepared grass strips',
      'Twin Garrett TPE331-5 turboprops with five-blade composite quiet propellers'
    ],
    specs: {
      crew: '2 Pilots + 19 Passengers / Maritime Observers',
      length: '16.56 m (54 ft 4 in)',
      wingspan: '16.97 m (55 ft 8 in)',
      height: '4.86 m (15 ft 11 in)',
      emptyWeight: '3,900 kg (8,598 lb)',
      maxTakeoffWeight: '6,400 kg (14,110 lb)',
      powerplant: {
        model: '2x Honeywell TPE331-5-252D Turboprops',
        type: 'Single-shaft turboprop engine',
        totalPower: '2x 533 kW (715 shp each)'
      },
      performance: {
        maxSpeed: '433 km/h (234 knots)',
        cruiseSpeed: '370 km/h (200 knots)',
        range: '2,400 km with auxiliary tanks',
        serviceCeiling: '8,500 m (28,000 ft)',
        rateOfClimb: '9.5 m/s'
      },
      armament: {
        hardpoints: 2,
        capacity: 'Light maritime depth charges or 7.62mm gun pods'
      },
      avionics: [
        'ELTA EL/M-2022A 360-degree Maritime Surveillance Radar',
        'Forward-Looking Infrared (FLIR) turret',
        'Automatic Identification System (AIS) transponder interrogator',
        'Satellite Communications (SATCOM) data link'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['nal-saras-mk2', 'hal-htt-40', 'hal-dhruv']
  },
  {
    id: 'nal-saras-mk2',
    slug: 'nal-saras-mk2',
    name: 'NAL Saras Mk2',
    codeName: '19-Seater Multi-Role Light Transport',
    role: 'Indigenous Multi-Role Commuter & Feeder Transport',
    manufacturer: 'National Aerospace Laboratories (CSIR-NAL) & HAL',
    operator: 'Indian Air Force & Regional Commuter Airlines (Planned)',
    era: '2020s (Development & Testing)',
    firstFlight: '2004 (Saras Mk1) / Mk2 in prototype stage',
    status: 'Under Development',
    modelType: 'transport',
    summary: 'India\'s first indigenous civilian multirole transport aircraft, featuring twin rear-mounted pusher turboprops, high STOL runway capability, and pressurized cabin for 19 passengers.',
    description: [
      'The NAL Saras Mk2 is India\'s indigenous multirole light transport aircraft designed by the Council of Scientific and Industrial Research - National Aerospace Laboratories (CSIR-NAL) in Bengaluru. Optimized for short-haul intercity passenger transport, executive charter, aerial survey, and casualty evacuation, Saras Mk2 is conceived to revolutionize regional connectivity.',
      'Distinguished by its twin pusher-propeller configuration mounted at the rear of the fuselage, the cabin experiences dramatically reduced noise and vibration compared to traditional wing-mounted turboprops. The rear-engine placement also preserves clean laminar airflow over the main wings, enhancing lift efficiency.',
      'The Indian Air Force has committed to procuring 15 Saras Mk2 aircraft for light cargo, troop transport, and coastal surveillance, validating the platform’s dual military-civil utility.'
    ],
    keyFeatures: [
      'Twin rear-mounted pusher turboprops providing lower interior cabin decibels',
      'Short field takeoff and landing capability suited for semi-prepared regional airstrips',
      'Stand-up pressurized cabin accommodating 19 passengers in airline seating',
      'Indigenously integrated digital avionics and autopilot systems',
      'Dual utility for civilian regional feeder lines and military tactical courier roles'
    ],
    specs: {
      crew: '2 Pilots + 19 Passengers',
      length: '15.02 m (49 ft 3 in)',
      wingspan: '14.70 m (48 ft 3 in)',
      height: '5.20 m (17 ft 1 in)',
      emptyWeight: '4,125 kg (9,094 lb)',
      maxTakeoffWeight: '7,100 kg (15,652 lb)',
      powerplant: {
        model: '2x Pratt & Whitney Canada PT6A-67A Turboprops',
        type: 'Twin-shaft turboprop with pusher composite propellers',
        totalPower: '2x 895 kW (1,200 shp each)'
      },
      performance: {
        maxSpeed: '550 km/h (297 knots)',
        cruiseSpeed: '460 km/h (248 knots)',
        range: '1,500 km with max passenger payload',
        serviceCeiling: '9,144 m (30,000 ft)',
        rateOfClimb: '10.2 m/s'
      },
      armament: {
        hardpoints: 0,
        capacity: 'Clean transport'
      },
      avionics: [
        'Rockwell Collins / Indigenously Integrated Glass Cockpit',
        'Dual Flight Management Systems (FMS) with LPV approaches',
        'Terrain Awareness Warning System (TAWS)',
        'Traffic Collision Avoidance System (TCAS II)'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['hal-dornier-228', 'hal-htt-40', 'hal-tejas-mk1a']
  },
  {
    id: 'gtre-kaveri-engine',
    slug: 'gtre-kaveri-engine',
    name: 'GTRE GTX-35VS Kaveri',
    codeName: 'Indigenous Aero Engine Program',
    role: 'Low-Bypass Afterburning Turbofan Development Program',
    manufacturer: 'Gas Turbine Research Establishment (GTRE / DRDO)',
    operator: 'Indigenous Technology Development (UCAV & Marine testing)',
    era: '1989-Present (Active Spin-offs)',
    firstFlight: 'Flying Testbed trials on Tu-16LL (Gromov Flight Research Institute)',
    status: 'Active',
    modelType: 'program',
    summary: 'India\'s landmark indigenous fighter engine development program: over 3,200 hours of testing logged, pioneering single-crystal blades and powering India\'s Ghatak stealth flying-wing UCAV.',
    description: [
      'The Kaveri engine development program, spearheaded by DRDO’s Gas Turbine Research Establishment (GTRE), is one of the most technologically ambitious endeavors in Indian aerospace history. Conceived to break international monopolies on high-performance military turbofans, Kaveri tackled extreme metallurgical and thermodynamic frontiers: single-crystal superalloy turbine blades, thermal barrier coatings, high-pressure ratio compressors, and full authority digital electronic control (FADEC).',
      'Although original thrust targets of 81 kN fell short for the frontline Tejas combat fighter (which adopted GE engines), the Kaveri project accumulated over 3,200 hours of ground and altitude testing, including 73 hours aloft on an Il-76 flying testbed in Russia.',
      'Today, the Kaveri architecture has been successfully adapted into the "Dry Kaveri" derivative producing 52 kN of dry thrust without afterburner, selected to power India’s classified Ghatak Autonomous Unmanned Combat Air Vehicle (UCAV), as well as marine gas turbines for naval destroyers.'
    ],
    keyFeatures: [
      'Full Authority Digital Engine Control (FADEC) developed indigenously by DRDO',
      'Single-crystal nickel-based superalloy turbine blades resisting gas temps of 1,700 Kelvin',
      '3-stage transonic fan and 6-stage high-pressure compressor',
      'Dry Kaveri derivative selected for India\'s Ghatak stealth flying-wing UCAV',
      'Kaveri Marine Gas Turbine (KMGT) producing 12 MW shaft power for Indian Navy warships'
    ],
    specs: {
      crew: 'Unmanned / Engine Program',
      length: '3.49 m (137 in)',
      wingspan: 'Fan Diameter 0.88 m (35 in)',
      height: '1.05 m',
      emptyWeight: '1,180 kg (2,600 lb)',
      maxTakeoffWeight: 'N/A',
      powerplant: {
        model: 'GTRE GTX-35VS / Dry Kaveri Derivative',
        type: 'Twin-spool low-bypass turbofan',
        dryThrust: '52 kN (11,690 lbf)',
        afterburnerThrust: '73-81 kN (tested configuration)'
      },
      performance: {
        maxSpeed: 'Subsonic / Supersonic capability (Mach 1.6+ design)',
        range: 'N/A',
        serviceCeiling: '15,000 m (49,200 ft design ceiling)',
        rateOfClimb: 'N/A'
      },
      armament: {
        hardpoints: 0,
        capacity: 'Propulsion system'
      },
      avionics: [
        'Dual-channel FADEC with automated health monitoring',
        'Dynamic blade vibration telemetry sensors',
        'Advanced pyrometry for turbine blade surface temperature measurement'
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f6?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f6?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['hal-tejas-mk1a', 'hal-tejas-mk2', 'hal-amca']
  }
];
