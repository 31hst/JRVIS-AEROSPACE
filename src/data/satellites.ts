import { SatelliteEntity } from '@/types';

export const SATELLITES_DATA: SatelliteEntity[] = [
  {
    id: 'chandrayaan-3',
    slug: 'chandrayaan-3',
    name: 'Chandrayaan-3 (Vikram & Pragyan)',
    missionType: 'Lunar Exploration & South Pole Landing',
    agency: 'ISRO (Indian Space Research Organisation)',
    launchDate: '14 July 2023 (Landed: 23 August 2023)',
    status: 'Mission Accomplished',
    orbitalRegime: 'Lunar South Pole (69.37° S, 32.35° E - Shiv Shakti Point)',
    modelType: 'lander',
    summary: 'The historic mission that made India the 4th nation to soft-land on the Moon and the first nation in human history to touch down near the lunar south pole.',
    description: [
      'Chandrayaan-3 was the third lunar exploration mission developed by the Indian Space Research Organisation (ISRO). Comprising an indigenously developed Propulsion Module, the Vikram Lander, and the Pragyan Rover, the primary objective was to demonstrate end-to-end capability in safe landing and roving on the challenging topography of the lunar south pole.',
      'On August 23, 2023, at 18:04 IST, Vikram executed a flawless autonomous rough and fine braking sequence, using its four throttleable 800N liquid engines and laser Doppler velocimeter (LDV) to gently touch down at 69.37° S, 32.35° E—an area subsequently named "Shiv Shakti Point" by the Prime Minister of India.',
      'Following landing, the Pragyan rover rolled down the ramp to explore the lunar regolith. Using its Laser-Induced Breakdown Spectroscope (LIBS) and Alpha Particle X-ray Spectrometer (APXS), Pragyan unambiguously confirmed the in-situ presence of Sulfur (S), along with Aluminum, Calcium, Iron, Chromium, Titanium, and Oxygen in the southern polar surface.'
    ],
    scientificObjectives: [
      'Demonstrate safe, autonomous soft landing on the lunar south pole',
      'Deploy the 26 kg Pragyan rover to perform in-situ chemical and elemental analysis',
      'Measure thermal conductivity and subsurface temperature profiles using ChaSTE',
      'Detect lunar seismic activity around the landing site via the ILSA seismometer',
      'Estimate near-surface lunar plasma density over a full lunar daylight period using RAMBHA-LP'
    ],
    specs: {
      launchMass: '3,900 kg total (Propulsion: 2,148 kg, Lander: 1,752 kg with Rover 26 kg)',
      dryMass: 'Propulsion: 448 kg, Lander: 626 kg',
      powerOutput: 'Lander: 738 W, Rover: 50 W, Propulsion Module: 758 W',
      operationalLife: '1 Lunar Day (14 Earth days) on surface',
      orbitalRegime: '100 km x 100 km Lunar Polar Orbit -> Surface Landing',
      launchVehicle: 'LVM3-M4 (Fat Boy / Bahubali)',
      launchSite: 'Second Launch Pad, SDSC SHAR, Sriharikota',
      payloads: [
        { code: 'ChaSTE', name: 'Chandra\'s Surface Thermophysical Experiment', purpose: 'Thermal conductivity probe measuring temperature gradients down to 10 cm below surface' },
        { code: 'ILSA', name: 'Instrument for Lunar Seismic Activity', purpose: 'MEMS-based seismometer detecting lunar quakes and micrometeorite impacts' },
        { code: 'RAMBHA-LP', name: 'Radio Anatomy of Moon Bound Hypersensitive ionosphere and Atmosphere', purpose: 'Langmuir probe measuring electron density and temperature of lunar plasma' },
        { code: 'LIBS', name: 'Laser-Induced Breakdown Spectroscope', purpose: 'Rover laser firing at regolith to determine elemental composition via plasma emission lines' },
        { code: 'APXS', name: 'Alpha Particle X-Ray Spectrometer', purpose: 'Curium-244 radioactive source exciting X-ray fluorescence to quantify elemental abundance' },
        { code: 'SHAPE', name: 'Spectro-polarimetry of Habitable Planet Earth', purpose: 'Propulsion module payload studying Earth\'s reflected spectrum to aid exoplanet searches' }
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['mangalyaan-mom', 'aditya-l1', 'astrosat']
  },
  {
    id: 'mangalyaan-mom',
    slug: 'mangalyaan-mom',
    name: 'Mangalyaan (Mars Orbiter Mission)',
    missionType: 'Interplanetary Mars Exploration',
    agency: 'ISRO (Indian Space Research Organisation)',
    launchDate: '5 November 2013 (Mars Orbit Insertion: 24 September 2014)',
    status: 'Mission Accomplished',
    orbitalRegime: 'Arecentric Highly Elliptical Mars Orbit (421 km x 76,993 km)',
    modelType: 'orbiter',
    summary: 'India\'s sensational first interplanetary mission: inserted into Mars orbit on the very first attempt at an unbelievable cost of $74M, operating for 7+ years instead of the planned 6 months.',
    description: [
      'The Mars Orbiter Mission (MOM), informally designated "Mangalyaan", represents a watershed moment in global space exploration. Launched by the workhorse PSLV-XL (C25), Mangalyaan traveled over 660 million kilometers across deep space before executing a precise 24-minute burn of its 440N Liquid Apogee Motor (LAM) on September 24, 2014, entering orbit around the Red Planet.',
      'With this single feat, India became the first Asian nation to reach Martian orbit and the first nation in the world to succeed on its maiden attempt. The mission achieved international acclaim for its frugal engineering—accomplished with a total budget of approximately ₹450 crore ($74 million USD), lower than the production budget of the Hollywood movie "Gravity".',
      'Originally slated for a 6-month design life, Mangalyaan operated continuously for over 7 and a half years, transmitting thousands of breathtaking full-disk Martian images captured by its Mars Colour Camera (MCC), capturing dust storms, Phobos transit, and studying the Martian exosphere.'
    ],
    scientificObjectives: [
      'Demonstrate deep-space navigation, autonomous orbit insertion, and communication with DSN',
      'Capture global, full-disk color imagery of Martian surface morphology and dynamic dust storms',
      'Measure deuterium-to-hydrogen (D/H) ratio in the upper Martian exosphere to understand water loss',
      'Map surface composition and mineral distribution using thermal infrared imaging',
      'Search for traces of methane in the Martian atmosphere using Fabry-Pérot interferometry'
    ],
    specs: {
      launchMass: '1,337 kg (Fuel Mass: 852 kg, Dry Mass: 485 kg)',
      dryMass: '485 kg (including 15 kg scientific payload)',
      powerOutput: '840 W (3 solar array panels of 1.8 m x 1.4 m)',
      operationalLife: 'Design: 6 Months; Actual: 7.5 Years (Until April 2022)',
      orbitalRegime: 'Arecentric Orbit (Pericentre: 421.7 km, Apocentre: 76,993.6 km)',
      launchVehicle: 'PSLV-XL C25',
      launchSite: 'First Launch Pad, SDSC SHAR, Sriharikota',
      payloads: [
        { code: 'MCC', name: 'Mars Colour Camera', purpose: 'Tri-color imaging of Martian terrain, dynamic weather, atmospheric phenomena, and Martian moons' },
        { code: 'MENCA', name: 'Mars Exospheric Neutral Composition Analyser', purpose: 'Quadrupole mass spectrometer analyzing neutral gas composition of Martian exosphere' },
        { code: 'LAP', name: 'Lyman Alpha Photometer', purpose: 'Measures Lyman-alpha emissions to compute escape flux of hydrogen from Mars' },
        { code: 'TIS', name: 'Thermal Infrared Imaging Spectrometer', purpose: 'Measures thermal emissions from Martian surface to map mineralogy and rock abundance' },
        { code: 'MSM', name: 'Methane Sensor for Mars', purpose: 'Differential radiometer aimed at measuring column methane at parts-per-billion level' }
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['chandrayaan-3', 'aditya-l1', 'astrosat']
  },
  {
    id: 'aditya-l1',
    slug: 'aditya-l1',
    name: 'Aditya-L1',
    missionType: 'Solar Physics & Space Weather Observatory',
    agency: 'ISRO (Indian Space Research Organisation)',
    launchDate: '2 September 2023 (Halo Orbit Insertion: 6 January 2024)',
    status: 'Active',
    modelType: 'solar',
    summary: 'India\'s first dedicated solar space observatory stationed 1.5 million kilometers from Earth at Sun-Earth Lagrange Point L1, providing uninterrupted 24/7 solar observations.',
    description: [
      'Aditya-L1 is India\'s maiden space mission dedicated to studying the Sun. Stationed in a complex halo orbit around the first Lagrangian Point (L1) of the Sun-Earth system, roughly 1.5 million km from Earth, the spacecraft enjoys an uninterrupted, unocculted view of the Sun without eclipses or planetary shadowing.',
      'Carrying seven cutting-edge scientific payloads developed by premier Indian research institutes (including the Indian Institute of Astrophysics, IUCAA, and ISRO centres), Aditya-L1 probes the Sun’s corona, chromosphere, and photosphere across optical, ultraviolet, and X-ray bands.',
      'A primary scientific target is unraveling the coronal heating paradox—why the Sun’s outer atmosphere (corona) is heated to millions of degrees Kelvin while the surface photosphere is a mere 6,000 K—as well as predicting coronal mass ejections (CMEs) that can paralyze Earth\'s satellite networks and power grids.'
    ],
    scientificObjectives: [
      'Study the dynamics of the solar upper atmosphere (chromosphere and corona)',
      'Investigate coronal heating mechanisms, flare physics, and CME initiation',
      'Observe physical particle environment around the L1 Lagrangian point in-situ',
      'Track solar wind properties and high-energy proton streams causing geomagnetic storms'
    ],
    specs: {
      launchMass: '1,475 kg',
      dryMass: '650 kg',
      powerOutput: '1,000 W (Twin deployable solar panels with Sun-tracking gimbals)',
      operationalLife: '5 Years (Active)',
      orbitalRegime: 'Halo Orbit around Sun-Earth L1 (1.5 Million km from Earth)',
      launchVehicle: 'PSLV-C57 (XL Configuration)',
      launchSite: 'Second Launch Pad, SDSC SHAR, Sriharikota',
      payloads: [
        { code: 'VELC', name: 'Visible Emission Line Coronagraph', purpose: 'Internal coronagraph taking high-cadence solar corona images and spectral diagnostic lines' },
        { code: 'SUIT', name: 'Solar Ultra-violet Imaging Telescope', purpose: 'Full-disk UV imaging of solar photosphere and chromosphere in 11 narrow/broad bands' },
        { code: 'SoLEXS', name: 'Solar Low Energy X-ray Spectrometer', purpose: 'Monitors soft X-ray flare emissions to gauge coronal temperature variations' },
        { code: 'HEL1OS', name: 'High Energy L1 Orbiting X-ray Spectrometer', purpose: 'Observes hard X-ray bursts during explosive explosive solar flare events' },
        { code: 'ASPEX', name: 'Aditya Solar wind Particle Experiment', purpose: 'Measures solar wind protons and alpha particles with directional energy analyzers' },
        { code: 'PAPA', name: 'Plasma Analyser Package for Aditya', purpose: 'Measures solar wind electron and ion compositions in the L1 interplanetary medium' },
        { code: 'MAG', name: 'Advanced Tri-axial High Resolution Digital Magnetometer', purpose: 'Measures low-intensity interplanetary magnetic fields at L1' }
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['chandrayaan-3', 'astrosat', 'mangalyaan-mom']
  },
  {
    id: 'astrosat',
    slug: 'astrosat',
    name: 'AstroSat',
    missionType: 'Multi-Wavelength Space Astronomy Observatory',
    agency: 'ISRO & Premier Astronomical Institutions',
    launchDate: '28 September 2015',
    status: 'Active',
    modelType: 'orbiter',
    summary: 'India\'s first dedicated space astronomy observatory capable of simultaneously observing celestial bodies in optical, ultraviolet, soft X-ray, and hard X-ray wavelengths.',
    description: [
      'AstroSat is India\'s first multi-wavelength space observatory, placing the country alongside NASA, ESA, and JAXA in operating dedicated orbital observatories. Orbiting Earth at an altitude of 650 km with an equatorial inclination of 6 degrees, AstroSat minimizes exposure to the South Atlantic Anomaly (SAA), maximizing scientific observing efficiency.',
      'The spacecraft uniquely carries five instruments covering ultraviolet and X-ray spectra simultaneously: the Ultraviolet Imaging Telescope (UVIT), Large Area X-ray Proportional Counter (LAXPC), Soft X-ray Telescope (SXT), Cadmium Zinc Telluride Imager (CZTI), and Scanning Sky Monitor (SSM).',
      'AstroSat has made seminal discoveries, including detecting extreme ultraviolet photons from a galaxy located 9.3 billion light-years away (AUDFs01), resolving binary star systems, black hole spin rates, and neutron star magnetic field topologies.'
    ],
    scientificObjectives: [
      'Simultaneous multi-wavelength monitoring of intensity variations in cosmic sources',
      'Study high-energy processes in binary star systems containing neutron stars and black holes',
      'Measure magnetic fields of neutron stars using cyclotron absorption features',
      'Conduct limited deep-sky surveys in ultraviolet wavelengths'
    ],
    specs: {
      launchMass: '1,513 kg',
      dryMass: '1,470 kg',
      powerOutput: '1,600 W (Two solar array wings with Ni-H2 battery storage)',
      operationalLife: 'Design: 5 Years; Active: 9+ Years',
      orbitalRegime: 'Low Earth Orbit (650 km circular, 6° inclination)',
      launchVehicle: 'PSLV-C30 (XL Configuration)',
      launchSite: 'First Launch Pad, SDSC SHAR, Sriharikota',
      payloads: [
        { code: 'UVIT', name: 'Ultra Violet Imaging Telescope', purpose: 'Twin 375mm Cassegrain telescopes observing in FUV, NUV, and visible bands' },
        { code: 'LAXPC', name: 'Large Area X-ray Proportional Counter', purpose: 'Three large counters studying timing and fast variability of cosmic X-ray sources (3-80 keV)' },
        { code: 'SXT', name: 'Soft X-ray Telescope', purpose: 'Focusing X-ray optics using gold-coated conical shells (0.3-8.0 keV)' },
        { code: 'CZTI', name: 'Cadmium Zinc Telluride Imager', purpose: 'Hard X-ray imaging and polarization measurements up to 100 keV' },
        { code: 'SSM', name: 'Scanning Sky Monitor', purpose: 'Continuous scanning of celestial sphere for transient X-ray outbursts and novae' }
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['aditya-l1', 'chandrayaan-3', 'mangalyaan-mom']
  },
  {
    id: 'navic-constellation',
    slug: 'navic-constellation',
    name: 'NavIC (IRNSS Constellation)',
    missionType: 'Regional Satellite Navigation System',
    agency: 'ISRO (Indian Space Research Organisation)',
    launchDate: 'Constituent launches 2013-Present (e.g. NVS-01 in May 2023)',
    status: 'Active',
    modelType: 'commsat',
    summary: 'India\'s autonomous regional satellite navigation system, providing position accuracy better than 5 meters across the Indian subcontinent and 1,500 km beyond its borders.',
    description: [
      'NavIC (Navigation with Indian Constellation), formerly known as the Indian Regional Navigation Satellite System (IRNSS), is an autonomous regional satellite navigation system designed, deployed, and operated entirely by ISRO. Unlike GPS which relies on medium Earth orbits (MEO), NavIC operates from geostationary (GEO) and inclined geosynchronous (GSO) orbits.',
      'This geometric architecture ensures that all satellites remain persistently visible above the Indian subcontinent at steep elevation angles, eliminating signal degradation in dense urban canyons, deep valleys, and rugged Himalayan terrain.',
      'NavIC delivers two tiers of service: Standard Positioning Service (SPS) for civilian users, and an encrypted Restricted Service (RS) for strategic defense and missile guidance. The next-generation NVS series satellites incorporate indigenous Indian rubidium atomic frequency clocks.'
    ],
    scientificObjectives: [
      'Provide accurate terrestrial, aerial, and marine navigation across India and 1,500 km perimeter',
      'Provide precise time-stamping synchronization for national power grids and telecom exchanges',
      'Support disaster management and emergency locator beacons',
      'Guarantee strategic positioning sovereignty independent of foreign constellations'
    ],
    specs: {
      launchMass: '1,425 kg (per spacecraft average) / NVS-01: 2,232 kg',
      powerOutput: '1,660 W (GaAs solar arrays with lithium-ion batteries)',
      operationalLife: '10 to 12 Years per satellite',
      orbitalRegime: '3 Geostationary (GEO) & 4 Geosynchronous (GSO at 29° inclination) slots',
      perigee: '35,786 km',
      apogee: '35,786 km',
      launchVehicle: 'PSLV-XL & GSLV Mk II',
      launchSite: 'SDSC SHAR, Sriharikota',
      payloads: [
        { code: 'NAV-PAYLOAD', name: 'Navigation Payload (L5, S, and L1 band)', purpose: 'Transmits CDMA navigation signals with navigation data messages' },
        { code: 'RAFS', name: 'Rubidium Atomic Frequency Standard', purpose: 'Ultra-stable atomic clock with stability on the order of 10^-14 per day' },
        { code: 'C-BAND-CDMA', name: 'Ranging Payload', purpose: 'C-band transponder for accurate two-way ground-based orbit determination' },
        { code: 'LRR', name: 'Laser Retro-Reflector Array', purpose: 'Precision satellite laser ranging (SLR) from international stations' }
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['cartosat-3', 'gsat-24', 'risat-2br1']
  },
  {
    id: 'cartosat-3',
    slug: 'cartosat-3',
    name: 'Cartosat-3',
    missionType: 'Sub-Meter Earth Observation & Optical Reconnaissance',
    agency: 'ISRO (Indian Space Research Organisation)',
    launchDate: '27 November 2019',
    status: 'Active',
    modelType: 'earthsat',
    summary: 'India\'s sharpest eye in space: a third-generation Earth observation satellite delivering breathtaking 0.28-meter panchromatic spatial resolution.',
    description: [
      'Cartosat-3 is a high-agility, state-of-the-art Earth observation satellite built by ISRO. Representing a dramatic generational leap over Cartosat-2, it boasts a ground sampling distance (GSD) of 0.28 meters (28 cm) in panchromatic mode—enabling it to discern individual objects such as small vehicles, building structures, and ground installations from 505 km in space.',
      'The spacecraft incorporates advanced adaptive optics, high-cadence star trackers, and control moment gyroscopes (CMGs) allowing rapid roll, pitch, and yaw maneuvering for non-sun-synchronous stereo imaging across adjacent ground swaths.',
      'Cartosat-3 serves vital national applications including urban planning, infrastructure monitoring, coastal land use, resource management, and strategic border security.'
    ],
    scientificObjectives: [
      'Provide ultra-high-resolution 0.28m panchromatic and 1.12m multispectral imagery',
      'Generate high-precision Digital Elevation Models (DEM) for cartographic mapping',
      'Provide high-speed stereo imaging of disaster-hit terrain within single orbital passes'
    ],
    specs: {
      launchMass: '1,625 kg',
      dryMass: '780 kg',
      powerOutput: '2,000 W (Dual solar arrays with multi-junction solar cells)',
      operationalLife: '5 Years',
      orbitalRegime: 'Sun-Synchronous Polar Orbit (505 km altitude, 97.5° inclination)',
      launchVehicle: 'PSLV-C47 (XL Configuration)',
      launchSite: 'Second Launch Pad, SDSC SHAR, Sriharikota',
      payloads: [
        { code: 'PAN', name: 'High-Resolution Panchromatic Camera', purpose: '0.28m spatial resolution optical telescope with TDI detector technology' },
        { code: 'MX', name: 'Multispectral 4-Band Camera', purpose: '1.12m spatial resolution in VNIR bands for spectral surface classification' },
        { code: 'MWIR', name: 'Mid-Wave Infrared Sensor', purpose: 'Night thermal imaging and thermal signature detection' }
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['risat-2br1', 'navic-constellation', 'eos-06']
  },
  {
    id: 'risat-2br1',
    slug: 'risat-2br1',
    name: 'RISAT-2BR1',
    missionType: 'All-Weather Synthetic Aperture Radar (SAR)',
    agency: 'ISRO (Indian Space Research Organisation)',
    launchDate: '11 December 2019',
    status: 'Active',
    modelType: 'earthsat',
    summary: 'Active radar reconnaissance satellite utilizing an X-band Synthetic Aperture Radar to see through dense clouds, monsoons, and pitch darkness with 0.35m resolution.',
    description: [
      'RISAT-2BR1 is an advanced radar Earth observation satellite developed by ISRO. Unlike optical satellites whose cameras are blinded by clouds, haze, or night, RISAT-2BR1 transmits radar microwaves toward the Earth and registers the reflected backscatter, delivering crisp imagery 24 hours a day under any atmospheric condition.',
      'Equipped with an X-band Synthetic Aperture Radar (SAR) using an innovative radial rib reflector antenna with 3.6-meter diameter, RISAT-2BR1 provides fine resolution spotlight imaging down to 0.35 meters.',
      'The satellite operates in conjunction with RISAT-2B and RISAT-2BR2 to provide persistent all-weather radar surveillance over the Indian Ocean Region and land boundaries.'
    ],
    scientificObjectives: [
      'Provide day-and-night all-weather radar surveillance through dense monsoon cloud cover',
      'Monitor agricultural crop health, soil moisture levels, and flood inundation zones',
      'Maritime surveillance tracking ship movements across the Indian Ocean'
    ],
    specs: {
      launchMass: '628 kg',
      powerOutput: '1,200 W (Radial rib deployable solar array)',
      operationalLife: '5 Years',
      orbitalRegime: 'Low Earth Orbit (576 km altitude, 37° low inclination for high revisit)',
      launchVehicle: 'PSLV-C48 (QL Variant with 4 strap-on motors)',
      launchSite: 'First Launch Pad, SDSC SHAR, Sriharikota',
      payloads: [
        { code: 'X-SAR', name: 'X-band Synthetic Aperture Radar', purpose: '0.35m spotlight, 1m stripmap, and 2m scanSAR modes for multi-mode all-weather radar imaging' }
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['cartosat-3', 'eos-06', 'navic-constellation']
  },
  {
    id: 'gsat-24',
    slug: 'gsat-24',
    name: 'GSAT-24',
    missionType: 'High-Throughput Commercial Communication Satellite',
    agency: 'NewSpace India Limited (NSIL / ISRO)',
    launchDate: '23 June 2022',
    status: 'Active',
    modelType: 'commsat',
    summary: 'A 4.1-ton high-throughput communication satellite equipped with 24 Ku-band transponders, leased fully to Tata Play to deliver nationwide DTH telecommunications.',
    description: [
      'GSAT-24 is a 24-Ku band communication satellite configured on ISRO\'s flight-proven I-3K satellite bus. Significantly, it was the first commercial demand-driven communication satellite undertaken by NewSpace India Limited (NSIL), the commercial arm of the Department of Space.',
      'The entire satellite capacity of 24 Ku-band transponders is leased exclusively to Tata Play to meet its high-definition Direct-to-Home (DTH) broadcast requirements across the Indian mainland, Andaman & Nicobar, and Lakshadweep islands.',
      'Launched aboard Arianespace’s Ariane 5 from French Guiana, GSAT-24 features dual-gridded shaped parabolic reflectors and modern traveling-wave tube amplifiers (TWTAs) ensuring resilient signal margins.'
    ],
    scientificObjectives: [
      'Deliver high-throughput 24 Ku-band coverage spanning all of India and outlying islands',
      'Pioneer demand-driven commercialization of Indian satellite orbital assets under NSIL'
    ],
    specs: {
      launchMass: '4,181 kg',
      dryMass: '1,850 kg',
      powerOutput: '14 kW (Two 4-panel solar wings with advanced multi-junction solar cells)',
      operationalLife: '15 Years',
      orbitalRegime: 'Geostationary Orbit (36,000 km at 83° East longitude)',
      launchVehicle: 'Ariane 5 VA257',
      launchSite: 'Kourou, French Guiana',
      payloads: [
        { code: 'KU-TRANSPONDERS', name: '24 Ku-Band Transponders', purpose: 'High-power pan-India coverage with dual-gridded shaped reflector antennas' }
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['navic-constellation', 'cartosat-3', 'aryabhata']
  },
  {
    id: 'aryabhata',
    slug: 'aryabhata',
    name: 'Aryabhata',
    missionType: 'Pioneering Scientific Satellite (India\'s First)',
    agency: 'ISRO (Indian Space Research Organisation)',
    launchDate: '19 April 1975',
    status: 'Retired',
    modelType: 'orbiter',
    summary: 'The historic genesis of India\'s satellite program: India\'s first satellite, named after the 5th-century astronomer, successfully launching the country into the space age.',
    description: [
      'Launched on April 19, 1975, from Kapustin Yar using a Soviet Kosmos-3M launch vehicle, Aryabhata was India\'s first satellite. Named after the famed 5th-century Indian astronomer and mathematician Aryabhata, the 360 kg polygonal 26-sided quasi-spherical satellite was designed and fabricated entirely in Bengaluru under the visionary leadership of Prof. U.R. Rao and Prof. Satish Dhawan.',
      'Covered with solar cells providing 46 watts of power, Aryabhata carried experiments in X-ray astronomy, aeronomy, and solar physics. Although a power failure in its electrical system halted payload data after 5 days, all primary spacecraft subsystems (telemetry, telecommand, attitude sensors) functioned flawlessly for over 17 years until reentry in 1992.',
      'The success of Aryabhata laid the technical and organizational foundation for ISRO’s modern world-class satellite infrastructure.'
    ],
    scientificObjectives: [
      'Design, build, and operate an autonomous artificial Earth satellite indigenously',
      'Investigate X-ray astronomy, solar neutron and gamma-ray flux, and ionospheric aeronomy'
    ],
    specs: {
      launchMass: '360 kg',
      powerOutput: '46 W (Silicon solar cells mounted across 24 exterior polyhedral panels)',
      operationalLife: 'Subsystems operated for 17 Years (Reentered atmosphere 1992)',
      orbitalRegime: 'Low Earth Orbit (568 km x 611 km, 50.6° inclination)',
      launchVehicle: 'Kosmos-3M (Soviet Union)',
      launchSite: 'Kapustin Yar, Astrakhan Oblast',
      payloads: [
        { code: 'X-RAY', name: 'X-ray Astronomy Telescope', purpose: 'Proportional counters detecting cosmic X-ray emissions in 2.5-150 keV range' },
        { code: 'SOLAR-PHYS', name: 'Solar Neutron and Gamma Ray Detector', purpose: 'Measures high-energy neutrons and gamma radiation during solar flares' },
        { code: 'AERONOMY', name: 'Ionospheric Aeronomy Probe', purpose: 'Suprathermal electron spectrometer measuring ionospheric electron densities' }
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['chandrayaan-3', 'gsat-24', 'navic-constellation']
  },
  {
    id: 'eos-06',
    slug: 'eos-06',
    name: 'EOS-06 (Oceansat-3)',
    missionType: 'Oceanographic Remote Sensing & Climate Monitoring',
    agency: 'ISRO (Indian Space Research Organisation)',
    launchDate: '26 November 2022',
    status: 'Active',
    modelType: 'earthsat',
    summary: 'Third-generation ocean monitoring satellite tracking phytoplankton blooms, sea surface temperatures, global wind vectors, and marine weather.',
    description: [
      'EOS-06 (Oceansat-3) is ISRO\'s dedicated third-generation ocean observation spacecraft configured to guarantee continuity of oceanographic services. Orbiting in a 742 km sun-synchronous orbit, EOS-06 monitors marine biology, sea surface temperature, and surface wind vectors.',
      'It carries the 13-band Ocean Colour Monitor (OCM-3), a Ku-band pencil beam Scatterometer (SCAT-3), and a Sea Surface Temperature Monitor (SSTM) developed in collaboration with French CNES. These sensors predict potential fishing zones (PFZ), track cyclonic genesis in the Bay of Bengal, and monitor polar ice sheets.'
    ],
    scientificObjectives: [
      'Monitor ocean color and chlorophyll concentrations to guide sustainable fisheries',
      'Measure ocean surface wind vector velocities for cyclone warning models',
      'Track global sea surface temperature patterns indicating El Niño phenomena'
    ],
    specs: {
      launchMass: '1,117 kg',
      powerOutput: '1,450 W',
      operationalLife: '5 Years',
      orbitalRegime: 'Sun-Synchronous Polar Orbit (742 km altitude, 98.34° inclination)',
      launchVehicle: 'PSLV-C54 (XL Configuration)',
      launchSite: 'First Launch Pad, SDSC SHAR, Sriharikota',
      payloads: [
        { code: 'OCM-3', name: '13-Band Ocean Colour Monitor', purpose: 'Measures chlorophyll concentration and suspended sediments in coastal waters' },
        { code: 'SCAT-3', name: 'Ku-Band Scatterometer', purpose: 'Measures 2D ocean surface wind velocity vectors' },
        { code: 'SSTM', name: 'Sea Surface Temperature Monitor', purpose: 'High-accuracy dual-channel thermal infrared radiometer' },
        { code: 'ARGOS-4', name: 'ARGOS Data Collection System (CNES)', purpose: 'Receives meteorological data from oceanic buoys and wildlife tracking tags' }
      ]
    },
    heroImage: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80'
    ],
    relatedSlugs: ['cartosat-3', 'risat-2br1', 'chandrayaan-3']
  }
];
