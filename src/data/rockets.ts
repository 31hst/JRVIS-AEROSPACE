import { RocketEntity } from '@/types';

export const ROCKETS_DATA: RocketEntity[] = [
  {
    id: 'lvm3',
    slug: 'lvm3',
    name: 'LVM3 (Launch Vehicle Mark 3 / GSLV Mk III)',
    family: 'LVM3 Heavy Lifter',
    status: 'Active',
    agency: 'ISRO / NSIL',
    modelType: 'lvm3',
    summary: 'India\'s heaviest, most powerful operational launch vehicle: capable of lifting 4,000 kg to GTO and 8,000 kg to LEO. The launcher of Chandrayaan-2, Chandrayaan-3, and OneWeb constellations.',
    description: [
      'The Launch Vehicle Mark 3 (LVM3), formerly designated GSLV Mk III, is a three-stage medium-to-heavy lift launch vehicle developed by the Indian Space Research Organisation. Conceived to liberate India from relying on foreign launchers (such as European Ariane 5) for heavy geostationary communication satellites, LVM3 boasts a 100% mission success rate since its operational induction.',
      'The architecture features a central liquid core stage (L110) flanked by two massive S200 solid rocket boosters—the third largest solid rocket motors in the world, each packed with 207 tonnes of HTPB propellant. At liftoff, only the two S200 boosters ignite, producing a combined ground-shaking thrust of nearly 10,000 kN.',
      'The crown jewel of LVM3 is the C25 Cryogenic Upper Stage, powered by the indigenously developed CE-20 staged-combustion cryogenic engine burning liquid oxygen (LOX) and liquid hydrogen (LH2). LVM3 propelled India\'s Chandrayaan-3 into trans-lunar injection and serves as the launch stack for the upcoming Gaganyaan human spaceflight mission.'
    ],
    specs: {
      height: '43.5 m (142.7 ft)',
      diameter: '4.0 m (core) / 5.0 m (payload fairing)',
      stagesCount: 3,
      liftOffMass: '640 tonnes (1,410,000 lb)',
      payloadToLEO: '8,000 kg (17,600 lb)',
      payloadToGTO: '4,000 kg (8,800 lb)',
      payloadToSSPO: '6,000 kg',
      firstFlight: '18 December 2014 (Suborbital LVM3-X/CARE) / 5 June 2017 (Orbital D1)',
      totalLaunches: 7,
      successfulLaunches: 7,
      successRate: '100%',
      fairingDiameter: '5.0 m ogive composite heat shield'
    },
    stages: [
      {
        stageNumber: 1,
        name: 'Twin Solid Rocket Boosters',
        code: '2x S200',
        propulsionType: 'Strap-on Solid',
        engine: 'Solid Propellant Motor with segmented case & flex nozzle',
        propellant: 'HTPB (Hydroxyl-Terminated Polybutadiene) - 207 tonnes each',
        thrustKN: '2x 4,900 kN (Total ~9,800 kN peak)',
        burnTimeSec: '130 seconds',
        description: 'World\'s 3rd largest solid boosters. Ignite at T-0 on the launch pad and provide all initial liftoff thrust before core stage ignition at T+114s.'
      },
      {
        stageNumber: 2,
        name: 'Liquid Core Stage',
        code: 'L110',
        propulsionType: 'Liquid',
        engine: '2x Vikas Upgraded High-Thrust Liquid Engines',
        propellant: 'UH25 (Unsymmetrical Dimethylhydrazine + Hydrazine) & N2O4 - 110 tonnes',
        thrustKN: '1,598 kN total (2x 799 kN)',
        burnTimeSec: '200 seconds',
        description: 'Twin-engine liquid core stage that ignites in mid-air at T+114 seconds prior to S200 burnout and booster separation.'
      },
      {
        stageNumber: 3,
        name: 'Cryogenic Upper Stage',
        code: 'C25',
        propulsionType: 'Cryogenic',
        engine: 'CE-20 Indigenous High-Thrust Cryogenic Engine',
        propellant: 'Liquid Oxygen (LOX) & Liquid Hydrogen (LH2) - 28 tonnes',
        thrustKN: '196.5 kN (in vacuum)',
        burnTimeSec: '643 seconds',
        description: 'Indigenous cryogenic stage operating at 20 K (-253°C) for hydrogen, delivering high specific impulse (443s) for precision orbit injection.'
      }
    ],
    notableMissions: [
      { missionName: 'LVM3-M4 / Chandrayaan-3', payload: '3,900 kg Lunar Lander & Rover Stack', date: '14 July 2023', significance: 'Precision orbital insertion paving the way for the historic South Pole Moon landing.' },
      { missionName: 'LVM3-M2 / OneWeb India-1', payload: '36 Commercial Broadband Satellites (5,796 kg)', date: '23 October 2022', significance: 'ISRO\'s maiden commercial multi-satellite deployment into LEO for OneWeb UK.' },
      { missionName: 'LVM3-M3 / OneWeb India-2', payload: '36 Commercial Broadband Satellites (5,805 kg)', date: '26 March 2023', significance: 'Flawless consecutive commercial deployment cementing LVM3 on the global market.' },
      { missionName: 'GSLV Mk III-M1 / Chandrayaan-2', payload: '3,850 kg Lunar Orbiter, Lander, and Rover', date: '22 July 2019', significance: 'Injected heaviest payload into lunar orbit with superior fuel margins.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1517976487507-598f1142a170?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517976487507-598f1142a170?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['pslv', 'gslv-mk2', 'human-rated-lvm3']
  },
  {
    id: 'pslv',
    slug: 'pslv',
    name: 'PSLV (Polar Satellite Launch Vehicle)',
    family: 'PSLV Workhorse',
    status: 'Active',
    agency: 'ISRO',
    modelType: 'pslv',
    summary: 'The legendary "Workhorse of ISRO" with over 60 flights: a four-stage launcher world-renowned for peerless reliability, sun-synchronous precision, and launching 104 satellites on a single flight.',
    description: [
      'The Polar Satellite Launch Vehicle (PSLV) is the bedrock of India\'s space triumphs. Conceived in the late 1980s under Dr. S. Srinivasan, PSLV ended India’s reliance on Russian Vostok/Molniya launchers to access Sun-Synchronous Polar Orbits (SSPO) for remote sensing satellites.',
      'PSLV incorporates an ingenious alternating solid-liquid four-stage configuration: Stage 1 Solid (PS1), Stage 2 Liquid (PS2 Vikas), Stage 3 Solid (PS3), and Stage 4 Liquid (PS4). Its versatile strap-on motor configurations include PSLV-CA (Core Alone), PSLV-DL (2 strap-ons), PSLV-QL (4 strap-ons), and the heavy PSLV-XL (6 extended strap-ons).',
      'PSLV has carried India to deep space—launching Chandrayaan-1 (2008), Mars Orbiter Mission / Mangalyaan (2013), and Aditya-L1 (2023). On February 15, 2017, PSLV-C37 created history by placing 104 satellites into orbit in a single mission.'
    ],
    specs: {
      height: '44.0 m (144.3 ft)',
      diameter: '2.8 m (9 ft 2 in)',
      stagesCount: 4,
      liftOffMass: '320 tonnes (PSLV-XL)',
      payloadToLEO: '3,800 kg',
      payloadToGTO: '1,425 kg',
      payloadToSSPO: '1,750 kg (into 600 km polar orbit)',
      firstFlight: '20 September 1993 (D1)',
      totalLaunches: 60,
      successfulLaunches: 58,
      successRate: '96.7%',
      fairingDiameter: '3.2 m composite bulbous heat shield'
    },
    stages: [
      {
        stageNumber: 1,
        name: 'Solid Core Booster with 6 Strap-ons',
        code: 'PS1 (S139) + 6x PS0M-XL',
        propulsionType: 'Solid',
        engine: 'S139 Solid Motor + 6x PS0M solid strap-on motors',
        propellant: 'HTPB Solid Propellant (138 tonnes in core, 12 tonnes per strap-on)',
        thrustKN: '4,846 kN (Core) + 6x 703 kN (Strap-ons)',
        burnTimeSec: '107 seconds',
        description: 'High-thrust first stage using maraging steel hardware. Strap-on motors fire in 4-ground-lit and 2-air-lit sequences.'
      },
      {
        stageNumber: 2,
        name: 'Liquid Stage',
        code: 'PS2',
        propulsionType: 'Liquid',
        engine: '1x Vikas Regeneratively Cooled Engine',
        propellant: 'UDMH & N2O4 - 42 tonnes',
        thrustKN: '803 kN',
        burnTimeSec: '152 seconds',
        description: 'Liquid stage using the flight-proven Vikas engine with closed-loop gimbal control for pitch and yaw steering.'
      },
      {
        stageNumber: 3,
        name: 'Solid Upper Stage',
        code: 'PS3',
        propulsionType: 'Solid',
        engine: 'High-energy Solid Motor with Kevlar case',
        propellant: 'HTPB - 7.6 tonnes',
        thrustKN: '240 kN',
        burnTimeSec: '112 seconds',
        description: 'Lightweight submerged flex-nozzle solid motor providing high thrust-to-weight ratio to gain orbital altitude.'
      },
      {
        stageNumber: 4,
        name: 'Liquid Velocity Trimming Stage',
        code: 'PS4',
        propulsionType: 'Liquid',
        engine: '2x Restartable Liquid Engines',
        propellant: 'MMH (Monomethylhydrazine) & MON-3 (Mixed Oxides of Nitrogen) - 2.5 tonnes',
        thrustKN: '14.6 kN (2x 7.3 kN)',
        burnTimeSec: '525 seconds (multi-burn restartable)',
        description: 'Dual gimbaled engines capable of multiple restarts in space, enabling multi-orbit satellite deployments and POEM orbital platform experiments.'
      }
    ],
    notableMissions: [
      { missionName: 'PSLV-C37', payload: '104 Satellites (Cartosat-2D + 103 Co-passengers)', date: '15 February 2017', significance: 'World record for the highest number of satellites successfully deployed in a single rocket launch.' },
      { missionName: 'PSLV-C25 / MOM', payload: 'Mangalyaan (Mars Orbiter Mission)', date: '5 November 2013', significance: 'First interplanetary launch for India, reaching Mars on maiden try.' },
      { missionName: 'PSLV-C11 / Chandrayaan-1', payload: 'Chandrayaan-1 Lunar Orbiter & MIP', date: '22 October 2008', significance: 'India\'s first Moon mission that definitively discovered water molecules (H2O/OH) on the lunar surface.' },
      { missionName: 'PSLV-C57 / Aditya-L1', payload: 'Aditya-L1 Solar Observatory', date: '2 September 2023', significance: 'Precision orbital insertion towards Sun-Earth Lagrange Point L1.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517976487507-598f1142a170?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['lvm3', 'gslv-mk2', 'sslv']
  },
  {
    id: 'human-rated-lvm3',
    slug: 'human-rated-lvm3',
    name: 'Human-Rated LVM3 (HLVM3 / Gaganyaan)',
    family: 'LVM3 Human Flight',
    status: 'Under Development',
    agency: 'ISRO (Human Space Flight Centre)',
    modelType: 'gaganyaan',
    summary: 'The human-certified launch stack configured to transport Indian astronauts (Vyomnauts) into 400 km low Earth orbit safely aboard the Gaganyaan Orbital Module.',
    description: [
      'The Human-Rated LVM3 (HLVM3) is the customized, human-certified iteration of the LVM3 launch vehicle engineered for India\'s flagship human spaceflight endeavor: Mission Gaganyaan. Human-rating demands catastrophic risk thresholds below 1-in-500, requiring extensive redundancy, lower structural stress margins, health monitoring avionics, and a rapid-escape system.',
      'Perched at the summit of HLVM3 is the Crew Escape System (CES), powered by five quick-acting solid motors. If an anomaly occurs on the launch pad or during atmospheric ascent up to Mach 2.5, the CES pulls the Crew Module away to safety within milliseconds, as demonstrated in the historic Flight TV-D1 abort test in October 2023.',
      'The propulsion stages integrate derated operating pressures and advanced Fault Detection, Isolation, and Recovery (FDIR) computers to guarantee the life support and safety of the three Vyomnauts aboard.'
    ],
    specs: {
      height: '53.0 m (including Crew Escape System)',
      diameter: '4.0 m core / 5.0 m fairing',
      stagesCount: 3,
      liftOffMass: '645 tonnes',
      payloadToLEO: '8,200 kg (Gaganyaan Orbital Module to 400 km circular orbit)',
      payloadToGTO: 'N/A (Human LEO profile)',
      firstFlight: '21 October 2023 (TV-D1 Abort Flight Test)',
      totalLaunches: 1,
      successfulLaunches: 1,
      successRate: '100% in test abort',
      fairingDiameter: 'CES Stack + 5.0 m Equipment Bay'
    },
    stages: [
      {
        stageNumber: 1,
        name: 'Crew Escape System (CES)',
        code: 'CES Stack',
        propulsionType: 'Solid',
        engine: 'High-Altitude Escape Motor, Low-Altitude Escape Motor, Jettison Motor',
        propellant: 'Fast-burning composite solid propellant',
        thrustKN: '800 kN peak rapid acceleration',
        burnTimeSec: '5 seconds',
        description: 'Tractor escape tower that pulls the crew module away from a failing rocket with 10g acceleration in under 2 seconds.'
      },
      {
        stageNumber: 2,
        name: 'Human-Rated S200 Boosters',
        code: 'HS200 (2x)',
        propulsionType: 'Strap-on Solid',
        engine: 'Segmented solid motor with derated operating chamber pressure',
        propellant: 'HTPB Solid - 207 tonnes each',
        thrustKN: '2x 4,900 kN',
        burnTimeSec: '130 seconds',
        description: 'Booster casing inspected with 100% acoustic and X-ray non-destructive testing for human-rated reliability.'
      },
      {
        stageNumber: 3,
        name: 'Human-Rated Liquid Core & Cryogenic',
        code: 'HL110 & HC25',
        propulsionType: 'Liquid',
        engine: '2x Vikas (HL110) + CE-20 Cryogenic (HC25)',
        propellant: 'UH25/N2O4 and LOX/LH2',
        thrustKN: '1,598 kN (Core) + 196.5 kN (Cryo)',
        burnTimeSec: 'HL110: 200s, HC25: 643s',
        description: 'Integrated health monitoring computers capable of autonomously triggering abort if chamber vibration or pressure deviates.'
      }
    ],
    notableMissions: [
      { missionName: 'Test Vehicle D1 (TV-D1)', payload: 'Unpressurized Crew Module & Crew Escape System', date: '21 October 2023', significance: 'Transonic abort demonstration at Mach 1.2: flawless CES separation, parachute deployment, and sea recovery.' },
      { missionName: 'Gaganyaan G1 (Scheduled)', payload: 'Uncrewed Orbital Module with Vyommitra Humanoid Robot', date: 'Upcoming 2025', significance: 'End-to-end rehearsal of orbital flight, thermal entry, and parachute landing.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1517976487507-598f1142a170?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517976487507-598f1142a170?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['lvm3', 'pslv', 'nglv-surya']
  },
  {
    id: 'gslv-mk2',
    slug: 'gslv-mk2',
    name: 'GSLV Mk II (Geosynchronous Satellite Launch Vehicle)',
    family: 'GSLV',
    status: 'Active',
    agency: 'ISRO',
    modelType: 'gslv',
    summary: 'India\'s medium-lift geostationary launch vehicle featuring four liquid strap-on boosters and the indigenously developed Cryogenic Upper Stage (CUS / CE-7.5).',
    description: [
      'The GSLV Mk II is a three-stage medium-lift launcher developed to deploy 2.5-tonne class INSAT and GSAT communication satellites into Geostationary Transfer Orbit (GTO). The historical crux of GSLV development was the Cryogenic Upper Stage; after cryogenic tech transfer was embargoed under MTCR in the 1990s, Indian scientists persevered for two decades to master the Cryogenic Upper Stage Project (CUSP).',
      'The CE-7.5 cryogenic engine, operating on the complex staged combustion cycle with a LOX/LH2 turbopump spinning at 42,000 RPM, successfully powered the GSLV-D5 flight in January 2014, making India only the sixth nation with indigenous cryogenic capability.',
      'GSLV Mk II features a solid core first stage surrounded by four liquid strap-on boosters (L40) burning hypergolic propellants, followed by the Vikas-powered second stage (GS2).'
    ],
    specs: {
      height: '49.1 m (161 ft)',
      diameter: '2.8 m core / 3.4 m fairing',
      stagesCount: 3,
      liftOffMass: '414 tonnes',
      payloadToLEO: '5,000 kg',
      payloadToGTO: '2,500 kg',
      firstFlight: '18 April 2001 (Mk I) / 5 January 2014 (First successful Indigenous CUS on D5)',
      totalLaunches: 16,
      successfulLaunches: 11,
      successRate: '68.8% (Historical overall) / 85% with Indigenous CUS',
      fairingDiameter: '3.4 m metallic / 4.0 m composite fairing'
    },
    stages: [
      {
        stageNumber: 1,
        name: 'Solid Core + 4 Liquid Strap-ons',
        code: 'GS1 (S139) + 4x L40',
        propulsionType: 'Solid',
        engine: '1x S139 Solid Motor + 4x Vikas Liquid Engines',
        propellant: 'HTPB Solid (138t) + UH25/N2O4 (42t each in strap-on)',
        thrustKN: '4,800 kN (Core) + 4x 760 kN (Strap-ons)',
        burnTimeSec: 'Core: 100s, Strap-ons: 150s',
        description: 'Uniquely, the four liquid strap-ons ignite first at T-4.8s; once health is verified, the giant solid core motor ignites at T-0.'
      },
      {
        stageNumber: 2,
        name: 'Liquid Second Stage',
        code: 'GS2',
        propulsionType: 'Liquid',
        engine: '1x High-Thrust Vikas Engine',
        propellant: 'UH25 & N2O4 - 39.5 tonnes',
        thrustKN: '804 kN',
        burnTimeSec: '140 seconds',
        description: 'Vikas engine operating in vacuum with closed-loop gimbal steering.'
      },
      {
        stageNumber: 3,
        name: 'Indigenous Cryogenic Upper Stage',
        code: 'CUS (CE-7.5)',
        propulsionType: 'Cryogenic',
        engine: 'CE-7.5 Staged Combustion Cryogenic Engine',
        propellant: 'LOX & LH2 - 12.8 tonnes',
        thrustKN: '73.5 kN (vacuum)',
        burnTimeSec: '720 seconds',
        description: 'Indigenous cryogenic engine operating on staged-combustion cycle delivering high 454s vacuum specific impulse.'
      }
    ],
    notableMissions: [
      { missionName: 'GSLV-F14 / INSAT-3DS', payload: '2,274 kg Meteorological Satellite', date: '17 February 2024', significance: 'Precision orbital injection for advanced weather forecasting and disaster early warning.' },
      { missionName: 'GSLV-F12 / NVS-01', payload: '2,232 kg NavIC Navigation Satellite', date: '29 May 2023', significance: 'Maiden launch of the second-generation NavIC constellation with indigenous atomic clocks.' },
      { missionName: 'GSLV-D5', payload: 'GSAT-14 Communication Satellite', date: '5 January 2014', significance: 'Triumphant maiden operational flight of the indigenous Cryogenic Upper Stage (CE-7.5).' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['lvm3', 'pslv', 'sslv']
  },
  {
    id: 'sslv',
    slug: 'sslv',
    name: 'SSLV (Small Satellite Launch Vehicle)',
    family: 'SSLV Mini-Lifter',
    status: 'Active',
    agency: 'ISRO / NSIL',
    modelType: 'sslv',
    summary: 'ISRO\'s low-cost, on-demand mini-rocket designed for rapid assembly in under 72 hours by a team of just 6 engineers, launching 500 kg satellites into 500 km planar orbits.',
    description: [
      'The Small Satellite Launch Vehicle (SSLV) is ISRO’s modern response to the burgeoning global commercial small-satellite constellation market. While PSLV requires 40 to 60 days of launch-campaign preparation, SSLV was engineered from a blank slate to be integrated, tested, and launched in under 72 hours by a compact team of 6 people.',
      'SSLV is a three-stage all-solid rocket capped with a liquid Velocity Trimming Module (VTM) for precise satellite orbit insertion. Its solid motors use segment-joint architectures and simple electromechanical actuators, drastically driving down fabrication overheads and turnaround times.',
      'Declared fully operational following the successful SSLV-D3 launch in August 2024, the rocket technology is being fully transferred to Indian private industry consortiums for commercial mass production.'
    ],
    specs: {
      height: '34.0 m (111.5 ft)',
      diameter: '2.0 m (6.6 ft)',
      stagesCount: 4,
      liftOffMass: '120 tonnes',
      payloadToLEO: '500 kg (into 500 km planar orbit)',
      payloadToGTO: 'N/A (LEO specialist)',
      payloadToSSPO: '300 kg (into 500 km Sun-Synchronous Orbit)',
      firstFlight: '7 August 2022 (D1) / 10 February 2023 (First Success D2)',
      totalLaunches: 3,
      successfulLaunches: 2,
      successRate: '66.7% (100% since operational D2)',
      fairingDiameter: '2.1 m composite payload fairing'
    },
    stages: [
      {
        stageNumber: 1,
        name: 'First Solid Stage',
        code: 'SS1',
        propulsionType: 'Solid',
        engine: 'Solid Motor with Hydroxyl-Terminated Polybutadiene',
        propellant: 'HTPB Solid - 87 tonnes',
        thrustKN: '2,600 kN peak',
        burnTimeSec: '106 seconds',
        description: 'High-thrust monolithic solid booster utilizing carbon-epoxy composite casing.'
      },
      {
        stageNumber: 2,
        name: 'Second Solid Stage',
        code: 'SS2',
        propulsionType: 'Solid',
        engine: 'Composite Cased Solid Upper Motor',
        propellant: 'HTPB Solid - 7.7 tonnes',
        thrustKN: '400 kN',
        burnTimeSec: '120 seconds',
        description: 'Optimized high-expansion ratio nozzle delivering maximum impulse in the upper atmosphere.'
      },
      {
        stageNumber: 3,
        name: 'Third Solid Stage',
        code: 'SS3',
        propulsionType: 'Solid',
        engine: 'Upper Solid Motor',
        propellant: 'HTPB Solid - 4.5 tonnes',
        thrustKN: '160 kN',
        burnTimeSec: '105 seconds',
        description: 'Lightweight upper solid stage injecting payload into near-orbital apogee.'
      },
      {
        stageNumber: 4,
        name: 'Velocity Trimming Module',
        code: 'VTM',
        propulsionType: 'Liquid',
        engine: '16x Thrusters (8 for attitude control + 8 for axial velocity trim)',
        propellant: 'MMH & MON-3 - 50 kg',
        thrustKN: '16x 50 N thrusters',
        burnTimeSec: 'Intermittent pulsed firings',
        description: 'Liquid propulsion module that fine-tunes orbital parameters and eliminates solid motor dispersions before satellite separation.'
      }
    ],
    notableMissions: [
      { missionName: 'SSLV-D3', payload: 'EOS-08 Earth Observation Satellite (175 kg) + SR-0 DemoSat', date: '16 August 2024', significance: 'Final developmental test flight: declared SSLV fully operational, clearing commercial transfer to industry.' },
      { missionName: 'SSLV-D2', payload: 'EOS-07 + Janus-1 + AzaadiSAT-2 (334 kg)', date: '10 February 2023', significance: 'First successful orbital deployment proving the quick-launch mini-rocket concept.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1517976487507-598f1142a170?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517976487507-598f1142a170?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['pslv', 'lvm3', 'nglv-surya']
  },
  {
    id: 'nglv-surya',
    slug: 'nglv-surya',
    name: 'NGLV (Next Generation Launch Vehicle / "Surya")',
    family: 'NGLV Heavy Reusable',
    status: 'Under Development',
    agency: 'ISRO (Approved by Cabinet September 2024)',
    modelType: 'future',
    summary: 'India\'s future reusable heavy lifter: powered by liquid oxygen/methane (Methalox) booster engines, capable of delivering up to 30 tonnes to LEO for the Bharatiya Antariksh Station and crewed Moon landings.',
    description: [
      'Sanctioned by the Union Cabinet in September 2024 with a budget of ₹8,240 crore, the Next Generation Launch Vehicle (NGLV), codenamed "Surya", is India’s revolutionary leap into reusable, super-heavy space logistics. Conceived to support the Bharatiya Antariksh Station (BAS) and lunar landings by 2040, Surya will boast triple the payload capability of LVM3 at nearly 50% lower cost per kilogram.',
      'Surya breaks away from ISRO’s traditional solid-fuel architecture, embracing eco-friendly Liquid Oxygen and Methane (Methalox) semi-cryogenic engines. Liquid methane burns clean without soot deposits, allowing the first-stage booster to re-ignite its engines, execute a supersonic retro-propulsion entry, and touch down vertically on an ocean barge for rapid reuse.',
      'The rocket is structured into three stages: a reusable Methalox booster stage with nine clustered engines, a Methalox second stage, and a high-energy cryogenic LOX/LH2 upper stage for deep-space injections.'
    ],
    specs: {
      height: '80.0 m (262.5 ft)',
      diameter: '5.2 m (17 ft 1 in)',
      stagesCount: 3,
      liftOffMass: '750 tonnes (Expendable) / 600 tonnes (Reusable mode)',
      payloadToLEO: '30,000 kg (Expendable) / 20,000 kg (Reusable VTVL mode)',
      payloadToGTO: '10,000 kg (Expendable) / 6,500 kg (Reusable)',
      firstFlight: 'Targeted Maiden Launch: 2032',
      totalLaunches: 0,
      successfulLaunches: 0,
      successRate: 'Under Active Engineering',
      fairingDiameter: '5.5 m diameter payload fairing'
    },
    stages: [
      {
        stageNumber: 1,
        name: 'Reusable Booster Stage (VTVL)',
        code: 'Booster-1',
        propulsionType: 'Liquid',
        engine: 'Cluster of 9x Methalox Semi-Cryogenic Engines',
        propellant: 'Liquid Methane (CH4) & Liquid Oxygen (LOX)',
        thrustKN: '11,000 kN total liftoff thrust',
        burnTimeSec: '150 seconds (with reserve for retro-propulsion landing)',
        description: 'Clean-burning Methalox booster with grid fins and deployable landing legs for vertical propulsive landing on drone ships.'
      },
      {
        stageNumber: 2,
        name: 'Methalox Upper Stage',
        code: 'Stage-2',
        propulsionType: 'Liquid',
        engine: '1x Vacuum-optimized Methalox Engine',
        propellant: 'Liquid Methane & LOX',
        thrustKN: '1,200 kN (vacuum)',
        burnTimeSec: '240 seconds',
        description: 'Vacuum-optimized engine pushing modules to low Earth orbit.'
      },
      {
        stageNumber: 3,
        name: 'Cryogenic Orbital Insertion Stage',
        code: 'C-Stage',
        propulsionType: 'Cryogenic',
        engine: 'Advanced High-Expansion CE-30 / LOX-LH2 Engine',
        propellant: 'Liquid Oxygen & Liquid Hydrogen',
        thrustKN: '300 kN (vacuum)',
        burnTimeSec: '550 seconds',
        description: 'High-specific-impulse upper stage for geostationary transfer, lunar transfer, and interplanetary departures.'
      }
    ],
    notableMissions: [
      { missionName: 'NGLV-D1 (Projected)', payload: 'Orbital Test Mass Simulator', date: 'Target 2032', significance: 'Maiden orbital flight and booster ocean landing trial.' },
      { missionName: 'BAS Module-1 Deployment', payload: 'Bharatiya Antariksh Station Base Module (20 tonnes)', date: 'Target 2035', significance: 'Placement of India\'s sovereign permanent space station core into low Earth orbit.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1517976487507-598f1142a170?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517976487507-598f1142a170?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['lvm3', 'human-rated-lvm3', 'pslv']
  },
  {
    id: 'slv-3',
    slug: 'slv-3',
    name: 'SLV-3 (Satellite Launch Vehicle 3)',
    family: 'Pioneer SLV',
    status: 'Retired',
    agency: 'ISRO',
    modelType: 'future',
    summary: 'India\'s historic first indigenous satellite launcher: guided by Project Director Dr. A.P.J. Abdul Kalam, placing the Rohini RS-1 satellite into orbit on July 18, 1980.',
    description: [
      'The Satellite Launch Vehicle-3 (SLV-3) was India\'s pioneer orbital rocket. Initiated in the early 1970s under the legendary Project Director Dr. A.P.J. Abdul Kalam (later the 11th President of India), SLV-3 was conceived to validate whether an impoverished developing nation could develop all-solid multi-stage rocket technology, guidance computers, and launch complexes entirely with indigenous talent.',
      'SLV-3 was an all-solid, four-stage vehicle weighing 17 tonnes with a height of 22 meters. On July 18, 1980, the SLV-3 E2 launch took flight from Sriharikota, cleanly executing all four stage burns to insert the 35 kg Rohini (RS-1) satellite into Earth orbit.',
      'This triumph placed India into the elite club of nations possessing independent space launch capability and created the foundational engineering lineage that evolved directly into ASLV, PSLV, and India\'s Agni missile systems.'
    ],
    specs: {
      height: '22.0 m (72.2 ft)',
      diameter: '1.0 m (3.3 ft)',
      stagesCount: 4,
      liftOffMass: '17 tonnes',
      payloadToLEO: '40 kg (into 400 km low Earth orbit)',
      payloadToGTO: 'N/A',
      firstFlight: '10 August 1979 (Experimental D1) / 18 July 1980 (Historic Success E2)',
      totalLaunches: 4,
      successfulLaunches: 3,
      successRate: '75%',
      fairingDiameter: '1.0 m fiberglass fairing'
    },
    stages: [
      {
        stageNumber: 1,
        name: 'First Solid Stage',
        code: 'SLV-1',
        propulsionType: 'Solid',
        engine: 'Solid Motor with 15CDV6 steel casing',
        propellant: 'PBAN (Polybutadiene-Acrylonitrile) Solid Propellant - 8.6 tonnes',
        thrustKN: '430 kN',
        burnTimeSec: '49 seconds',
        description: 'First stage solid rocket motor featuring aerodynamic fins and jet vanes for steering.'
      },
      {
        stageNumber: 2,
        name: 'Second Solid Stage',
        code: 'SLV-2',
        propulsionType: 'Solid',
        engine: 'Solid Motor',
        propellant: 'PBAN Solid - 3.2 tonnes',
        thrustKN: '205 kN',
        burnTimeSec: '40 seconds',
        description: 'Second stage solid motor with reaction control thrusters.'
      },
      {
        stageNumber: 3,
        name: 'Third Solid Stage',
        code: 'SLV-3',
        propulsionType: 'Solid',
        engine: 'Fiberglass case Solid Motor',
        propellant: 'HTPB Solid - 1.1 tonnes',
        thrustKN: '64 kN',
        burnTimeSec: '45 seconds',
        description: 'Pioneered high-strength filament-wound fiberglass motor casing.'
      },
      {
        stageNumber: 4,
        name: 'Fourth Solid Injection Stage',
        code: 'SLV-4',
        propulsionType: 'Solid',
        engine: 'Spin-stabilized Upper Solid Motor',
        propellant: 'HTPB Solid - 265 kg',
        thrustKN: '24 kN',
        burnTimeSec: '33 seconds',
        description: 'Spin-stabilized solid motor that injected the Rohini satellite into low Earth orbit.'
      }
    ],
    notableMissions: [
      { missionName: 'SLV-3 E2', payload: 'Rohini RS-1 Satellite (35 kg)', date: '18 July 1980', significance: 'First successful orbital launch by an Indian rocket, catapulting India into the global space club.' },
      { missionName: 'SLV-3 D3', payload: 'Rohini RS-D1 (38 kg)', date: '31 May 1981', significance: 'First operational flight carrying smart sensor camera for landmark detection.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1517976487507-598f1142a170?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517976487507-598f1142a170?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['pslv', 'gslv-mk2', 'lvm3']
  }
];
