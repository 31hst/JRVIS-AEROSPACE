import { MilestoneItem } from '@/types';

export const TIMELINE_DATA: MilestoneItem[] = [
  {
    id: 'tl-1963',
    year: '1963',
    dateStr: '21 November 1963',
    title: 'The Spark at Thumba: First Sounding Rocket',
    category: 'Launch Vehicles',
    agency: 'ISRO',
    summary: 'India’s space program began from the fishing hamlet of Thumba near Thiruvananthapuram. A sodium vapor payload on a Nike-Apache sounding rocket soared to 200 km to study the equatorial electrojet.',
    highlight: 'Components and nose cones were transported on bicycles and bullock carts, led by Dr. Vikram Sarabhai and Dr. APJ Abdul Kalam.',
    stats: { label: 'Peak Altitude', value: '208 km' }
  },
  {
    id: 'tl-1969',
    year: '1969',
    dateStr: '15 August 1969',
    title: 'Formation of ISRO',
    category: 'Future Roadmap',
    agency: 'ISRO',
    summary: 'Under the vision of Dr. Vikram Sarabhai, the Indian National Committee for Space Research (INCOSPAR) was formalized into the Indian Space Research Organisation (ISRO).',
    highlight: 'Dedicated to applying advanced space science directly to real societal problems: agriculture, telecommunications, and cyclone warnings.',
    stats: { label: 'Founding Visionary', value: 'Dr. Vikram Sarabhai' }
  },
  {
    id: 'tl-1975',
    year: '1975',
    dateStr: '19 April 1975',
    title: 'Aryabhata: India Enters the Space Age',
    category: 'Satellites',
    agency: 'ISRO',
    summary: 'India\'s first indigenous satellite, named after the 5th-century mathematician Aryabhata, was launched into low Earth orbit from Kapustin Yar.',
    highlight: 'Proved Indian capacity in spacecraft design, telemetry command links, thermal control, and solar power generation.',
    stats: { label: 'Spacecraft Mass', value: '360 kg' }
  },
  {
    id: 'tl-1980',
    year: '1980',
    dateStr: '18 July 1980',
    title: 'SLV-3 E2: First Sovereign Orbital Launch',
    category: 'Launch Vehicles',
    agency: 'ISRO',
    summary: 'With Project Director Dr. A.P.J. Abdul Kalam at the helm, India’s all-solid 4-stage SLV-3 rocket successfully injected the 35 kg Rohini (RS-1) satellite into Earth orbit from Sriharikota.',
    highlight: 'India became only the sixth country in the world with sovereign orbital launch capability.',
    stats: { label: 'Orbit Achieved', value: '305 x 919 km' }
  },
  {
    id: 'tl-1984',
    year: '1984',
    dateStr: '3 April 1984',
    title: 'First Indian in Space: Wing Commander Rakesh Sharma',
    category: 'Deep Space',
    agency: 'Joint',
    summary: 'IAF test pilot Wing Commander Rakesh Sharma spent 7 days, 21 hours aboard Soviet space station Salyut 7, conducting multispectral photography of the Himalayas and biomed experiments.',
    highlight: 'When asked by Prime Minister Indira Gandhi how India looked from space, he famously answered: "Saare Jahan Se Achha" (Better than the whole world).',
    stats: { label: 'Mission Duration', value: '7d 21h 40m' }
  },
  {
    id: 'tl-1993',
    year: '1993',
    dateStr: '20 September 1993',
    title: 'Inaugural Flight of PSLV (The Workhorse Born)',
    category: 'Launch Vehicles',
    agency: 'ISRO',
    summary: 'The Polar Satellite Launch Vehicle (PSLV) was developed to place 1.7-tonne IRS remote sensing satellites into Sun-Synchronous Polar Orbits, eliminating dependence on Russian commercial launchers.',
    highlight: 'Developed the four-stage solid/liquid alternating configuration that achieved over 58 successful launches over 3 decades.',
    stats: { label: 'Launch Cadence', value: '60+ Missions' }
  },
  {
    id: 'tl-2001',
    year: '2001',
    dateStr: '4 January 2001',
    title: 'First Flight of LCA Tejas Technology Demonstrator',
    category: 'Aviation',
    agency: 'HAL',
    summary: 'India’s indigenously conceived supersonic Light Combat Aircraft (TD-1) took to the skies in Bengaluru, piloted by Wing Commander Rajiv Kothiyal.',
    highlight: 'Demonstrated quadruplex digital fly-by-wire flight control and advanced carbon-composite delta airframe design.',
    stats: { label: 'Max Speed', value: 'Mach 1.8' }
  },
  {
    id: 'tl-2008',
    year: '2008',
    dateStr: '22 October 2008',
    title: 'Chandrayaan-1: Discovery of Water on the Moon',
    category: 'Deep Space',
    agency: 'ISRO',
    summary: 'India’s first deep space probe to the Moon carried 11 instruments and released the Moon Impact Probe (MIP) bearing the Indian tricolor onto the Shackleton Crater.',
    highlight: 'Chandrayaan-1’s Moon Mineralogy Mapper (M3) and MIP conclusively discovered water (H2O and hydroxyl OH) molecules across the lunar surface, rewriting textbooks worldwide.',
    stats: { label: 'Global Impact', value: 'Lunar Water Discovered' }
  },
  {
    id: 'tl-2013',
    year: '2013',
    dateStr: '5 November 2013',
    title: 'Mangalyaan (Mars Orbiter Mission) Launch',
    category: 'Deep Space',
    agency: 'ISRO',
    summary: 'ISRO launched its maiden interplanetary probe to Mars aboard PSLV-C25, using innovative Earth-bound orbital maneuvers to save fuel before trans-Mars injection.',
    highlight: 'Achieved Martian orbit on the very first attempt on 24 Sept 2014, operating for 7.5 years at an astounding budget of just $74 million.',
    stats: { label: 'Travel Distance', value: '660 Million km' }
  },
  {
    id: 'tl-2014',
    year: '2014',
    dateStr: '5 January 2014',
    title: 'Mastery of Cryogenics: GSLV-D5 Success',
    category: 'Launch Vehicles',
    agency: 'ISRO',
    summary: 'After international tech sanctions in the 1990s, Indian scientists indigenously developed the CE-7.5 cryogenic upper stage, proving it on the triumphant GSLV-D5 flight.',
    highlight: 'Mastered the handling of liquid hydrogen at -253°C and turbopumps rotating at 42,000 RPM, making India the 6th cryogenic space power.',
    stats: { label: 'Specific Impulse', value: '454 Seconds' }
  },
  {
    id: 'tl-2015',
    year: '2015',
    dateStr: '28 September 2015',
    title: 'AstroSat: India’s Hubble-Class Space Observatory',
    category: 'Satellites',
    agency: 'ISRO',
    summary: 'Launch of India\'s first dedicated multi-wavelength space astronomy satellite capable of simultaneously observing in optical, UV, soft and hard X-rays.',
    highlight: 'Detected extreme UV light from a galaxy 9.3 billion light-years away and observed exotic neutron star behavior.',
    stats: { label: 'Operating Lifespan', value: '9+ Years Active' }
  },
  {
    id: 'tl-2017',
    year: '2017',
    dateStr: '15 February 2017',
    title: 'PSLV-C37: World Record 104 Satellites in One Flight',
    category: 'Launch Vehicles',
    agency: 'ISRO',
    summary: 'PSLV-C37 lifted off from Sriharikota carrying 104 satellites (Cartosat-2D plus 103 co-passenger satellites from USA, Germany, Netherlands, Israel, Kazakhstan, and Switzerland).',
    highlight: 'Every single satellite was released into its designated orbital slot with zero collision risk, setting a world record that stood for years.',
    stats: { label: 'Payloads Deployed', value: '104 Satellites' }
  },
  {
    id: 'tl-2019',
    year: '2019',
    dateStr: '27 March 2019',
    title: 'Mission Shakti: Kinetic Anti-Satellite (ASAT) Intercept',
    category: 'Aviation',
    agency: 'DRDO',
    summary: 'India demonstrated strategic counter-space capability by using a DRDO ballistic missile interceptor to hit a live satellite in low Earth orbit at 300 km with kinetic direct-impact accuracy.',
    highlight: 'India became only the 4th nation in the world (after USA, Russia, China) to validate hit-to-kill kinetic ASAT capability.',
    stats: { label: 'Intercept Velocity', value: '3.2 km/s (Mach 10+)' }
  },
  {
    id: 'tl-2022',
    year: '2022',
    dateStr: '3 October 2022',
    title: 'HAL Prachand Light Combat Helicopter Inducted',
    category: 'Aviation',
    agency: 'HAL',
    summary: 'Induction of the world\'s only attack helicopter able to take off and land at Siachen Glacier altitudes above 5,000 meters carrying anti-tank missiles and rocket pods.',
    highlight: 'Designed specifically to dominate the extreme altitudes of the Line of Actual Control (LAC) and Line of Control (LoC).',
    stats: { label: 'Operating Ceiling', value: '6,500 Meters' }
  },
  {
    id: 'tl-2023-lunar',
    year: '2023',
    dateStr: '23 August 2023',
    title: 'Chandrayaan-3: Historic Lunar South Pole Soft-Landing',
    category: 'Deep Space',
    agency: 'ISRO',
    summary: 'At 18:04 IST, Vikram Lander gently touched down near the Lunar South Pole at "Shiv Shakti Point", followed by the Pragyan rover rolling down the ramp.',
    highlight: 'India became the 1st nation in world history to soft-land near the lunar south pole, confirming in-situ presence of Sulfur, Oxygen, and minerals.',
    stats: { label: 'Historic Rank', value: '1st at Lunar South Pole' }
  },
  {
    id: 'tl-2023-solar',
    year: '2023',
    dateStr: '2 September 2023',
    title: 'Aditya-L1: Journey to the Sun-Earth L1 Lagrange Point',
    category: 'Deep Space',
    agency: 'ISRO',
    summary: 'India\'s first solar observatory launched toward Sun-Earth L1, 1.5 million km away, successfully entering its halo orbit in January 2024.',
    highlight: 'Provides uninterrupted 24/7 solar corona and space weather tracking without eclipses or planetary obstructions.',
    stats: { label: 'Station Location', value: '1.5 Million km' }
  },
  {
    id: 'tl-2023-abort',
    year: '2023',
    dateStr: '21 October 2023',
    title: 'Gaganyaan Flight TV-D1: Transonic Crew Escape Test',
    category: 'Launch Vehicles',
    agency: 'ISRO',
    summary: 'First developmental abort test demonstrating crew module separation at Mach 1.2 during peak aerodynamic pressure (Max Q).',
    highlight: 'The Crew Escape System safely separated from the rocket, deployed drogues and main chutes, splashing down smoothly in the Bay of Bengal for Navy retrieval.',
    stats: { label: 'Abort Speed', value: 'Mach 1.2 Transonic' }
  },
  {
    id: 'tl-2024',
    year: '2024',
    dateStr: 'September 2024',
    title: 'Cabinet Approval for NGLV "Surya" & AMCA 5th Gen Fighter',
    category: 'Future Roadmap',
    agency: 'Joint',
    summary: 'The Government of India approved ₹8,240 crore for the Next Generation Launch Vehicle (NGLV "Surya") and authorized full-scale development of the AMCA 5th-generation stealth fighter.',
    highlight: 'Paves the technological runway for reusable Methalox heavy-lift rockets, space station assembly, and domestic 5th-gen air dominance.',
    stats: { label: 'NGLV Payload', value: '30 Tonnes to LEO' }
  },
  {
    id: 'tl-2035',
    year: '2035',
    dateStr: 'Projected 2035',
    title: 'Bharatiya Antariksh Station (BAS): Sovereign Space Base',
    category: 'Future Roadmap',
    agency: 'ISRO',
    summary: 'Deployment of India’s sovereign modular space station in 400 km low Earth orbit, starting with BAS Base Module 1 by 2028-2035.',
    highlight: 'Will support long-duration microgravity biological experiments, materials research, and orbital refueling platforms for deep space missions.',
    stats: { label: 'Station Weight', value: '52 Tonnes Multi-Module' }
  },
  {
    id: 'tl-2040',
    year: '2040',
    dateStr: 'Projected 2040',
    title: 'Indian Human Lunar Landing: Vyomnauts on the Moon',
    category: 'Future Roadmap',
    agency: 'ISRO',
    summary: 'The sovereign culmination of India’s space roadmap: an Indian astronaut stepping onto the lunar surface aboard the next-generation crewed lander propelled by NGLV Surya.',
    highlight: 'Fulfilling the national vision set by the Space Commission for permanent human exploration of the lunar South Pole.',
    stats: { label: 'Destination', value: 'Lunar South Pole Surface' }
  }
];
