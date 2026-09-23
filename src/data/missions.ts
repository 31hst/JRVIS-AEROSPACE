import { MissionEntity } from '@/types';

export const FEATURED_MISSIONS: MissionEntity[] = [
  {
    id: 'mission-chandrayaan-3',
    title: 'Chandrayaan-3',
    subtitle: 'Shiv Shakti Point Soft-Landing',
    target: 'Moon (South Pole - 69.37° S)',
    date: '23 August 2023',
    rocket: 'LVM3-M4',
    outcome: 'Historic Triumph',
    summary: 'India touched down at the unexplored southern polar lunar terrain, making India the 4th nation to soft-land on the Moon and the first at the South Pole.',
    significance: 'Confirmed the presence of elemental Sulfur and mapped thermal regolith gradients in the lunar south pole.',
    keyMetric: {
      label: 'Coordinates',
      value: '69.37° S, 32.35° E'
    },
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
    linkSlug: 'chandrayaan-3',
    linkType: 'satellites'
  },
  {
    id: 'mission-mangalyaan',
    title: 'Mangalyaan (MOM)',
    subtitle: 'Maiden-Attempt Martian Conquest',
    target: 'Mars Orbit (421 km x 76,993 km)',
    date: '24 September 2014',
    rocket: 'PSLV-XL C25',
    outcome: 'Historic Triumph',
    summary: 'Traveled 660 million km to achieve orbit insertion on the very first try at $74M cost, functioning for over 7.5 years.',
    significance: 'Made India the first Asian nation to reach Mars and global pioneer of ultra-frugal high-reliability deep space missions.',
    keyMetric: {
      label: 'Operational Span',
      value: '7.5+ Years'
    },
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
    linkSlug: 'mangalyaan-mom',
    linkType: 'satellites'
  },
  {
    id: 'mission-gaganyaan',
    title: 'Mission Gaganyaan',
    subtitle: 'Sovereign Human Spaceflight Capability',
    target: '400 km Low Earth Orbit',
    date: 'Active Program (TV-D1 Oct 2023)',
    rocket: 'Human-Rated LVM3 (HLVM3)',
    outcome: 'Active Operation',
    summary: 'Demonstrating human-certified orbital vehicle technology to carry Indian Vyomnauts into low Earth orbit and return safely.',
    significance: 'Validates indigenous Crew Escape System, life support, environmental control, and sea recovery operations.',
    keyMetric: {
      label: 'Crew Capacity',
      value: '3 Vyomnauts'
    },
    image: 'https://images.unsplash.com/photo-1517976487507-598f1142a170?auto=format&fit=crop&w=1200&q=80',
    linkSlug: 'human-rated-lvm3',
    linkType: 'rockets'
  },
  {
    id: 'mission-aditya-l1',
    title: 'Aditya-L1',
    subtitle: 'Sun-Earth Lagrange Point Observatory',
    target: 'Lagrange Point 1 (1.5M km from Earth)',
    date: '6 January 2024 (L1 Halo Insertion)',
    rocket: 'PSLV-C57',
    outcome: 'Success',
    summary: 'Unbroken, unocculted 24/7 scientific gaze at the Sun’s corona, chromosphere, and space weather drivers from L1 halo orbit.',
    significance: 'Deciphering the coronal heating mystery and issuing early warning predictions for solar geomagnetic storms.',
    keyMetric: {
      label: 'Distance from Earth',
      value: '1.5 Million km'
    },
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80',
    linkSlug: 'aditya-l1',
    linkType: 'satellites'
  },
  {
    id: 'mission-pslv-c37',
    title: 'PSLV-C37 Record Launch',
    subtitle: '104 Satellites in a Single Rocket',
    target: '505 km Sun-Synchronous Polar Orbit',
    date: '15 February 2017',
    rocket: 'PSLV-XL C37',
    outcome: 'Historic Triumph',
    summary: 'ISRO deployed 104 satellites from 6 international nations in a single mission using sophisticated timed separation sequencing.',
    significance: 'Stunned the global space industry, proving flawless multi-payload orbital distribution and cost competitiveness.',
    keyMetric: {
      label: 'Satellites Deployed',
      value: '104 Payloads'
    },
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    linkSlug: 'pslv',
    linkType: 'rockets'
  },
  {
    id: 'mission-astrosat',
    title: 'AstroSat Space Observatory',
    subtitle: 'Multi-Wavelength Cosmic Exploration',
    target: '650 km Equatorial Low Earth Orbit',
    date: '28 September 2015',
    rocket: 'PSLV-C30',
    outcome: 'Success',
    summary: 'India\'s Hubble-class multi-wavelength space astronomy observatory observing UV, soft X-ray, and hard X-ray emissions.',
    significance: 'Discovered extreme UV light from a galaxy 9.3 billion light-years distant and probed black hole spinning velocities.',
    keyMetric: {
      label: 'Observation Bands',
      value: 'Optical to Hard X-Ray'
    },
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    linkSlug: 'astrosat',
    linkType: 'satellites'
  }
];
