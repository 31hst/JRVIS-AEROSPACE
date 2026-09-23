export type StatusType = 'Active' | 'Under Development' | 'Procured' | 'Concept' | 'Retired' | 'Mission Accomplished';

export interface AircraftSpecs {
  crew: string;
  length: string;
  wingspan: string;
  height: string;
  emptyWeight: string;
  maxTakeoffWeight: string;
  powerplant: {
    model: string;
    type: string;
    dryThrust?: string;
    afterburnerThrust?: string;
    totalPower?: string;
  };
  performance: {
    maxSpeed: string;
    cruiseSpeed?: string;
    range: string;
    combatRadius?: string;
    serviceCeiling: string;
    rateOfClimb?: string;
    gLimits?: string;
  };
  armament?: {
    hardpoints: number;
    capacity: string;
    guns?: string;
    missiles?: string[];
    bombs?: string[];
  };
  avionics?: string[];
}

export interface AircraftEntity {
  id: string;
  slug: string;
  name: string;
  codeName?: string;
  role: string;
  manufacturer: string;
  operator: string;
  era: string;
  firstFlight: string;
  status: StatusType;
  modelType: 'fighter' | 'helicopter' | 'stealth' | 'trainer' | 'transport' | 'program';
  summary: string;
  description: string[];
  keyFeatures: string[];
  specs: AircraftSpecs;
  heroImage: string;
  gallery: string[];
  relatedSlugs: string[];
}

export interface SatellitePayload {
  code: string;
  name: string;
  purpose: string;
}

export interface SatelliteSpecs {
  launchMass: string;
  dryMass?: string;
  powerOutput: string;
  operationalLife: string;
  orbitalRegime: string;
  perigee?: string;
  apogee?: string;
  inclination?: string;
  payloadMass?: string;
  launchVehicle: string;
  launchSite: string;
  payloads: SatellitePayload[];
}

export interface SatelliteEntity {
  id: string;
  slug: string;
  name: string;
  missionType: string;
  agency: string;
  launchDate: string;
  status: StatusType;
  orbitalRegime?: string;
  modelType: 'lander' | 'orbiter' | 'solar' | 'commsat' | 'earthsat';
  summary: string;
  description: string[];
  scientificObjectives: string[];
  specs: SatelliteSpecs;
  heroImage: string;
  gallery: string[];
  relatedSlugs: string[];
}

export interface RocketStage {
  stageNumber: number;
  name: string;
  code: string;
  propulsionType: 'Solid' | 'Liquid' | 'Cryogenic' | 'Strap-on Solid';
  engine: string;
  propellant: string;
  thrustKN: string;
  burnTimeSec: string;
  description: string;
}

export interface RocketSpecs {
  height: string;
  diameter: string;
  stagesCount: number;
  liftOffMass: string;
  payloadToLEO: string;
  payloadToGTO: string;
  payloadToSSPO?: string;
  firstFlight: string;
  totalLaunches: number;
  successfulLaunches: number;
  successRate: string;
  fairingDiameter: string;
}

export interface RocketEntity {
  id: string;
  slug: string;
  name: string;
  family: string;
  status: StatusType;
  agency: string;
  modelType: 'lvm3' | 'pslv' | 'gslv' | 'sslv' | 'gaganyaan' | 'future';
  summary: string;
  description: string[];
  specs: RocketSpecs;
  stages: RocketStage[];
  notableMissions: {
    missionName: string;
    payload: string;
    date: string;
    significance: string;
  }[];
  heroImage: string;
  gallery: string[];
  relatedSlugs: string[];
}

export interface MissionEntity {
  id: string;
  title: string;
  subtitle: string;
  target: string;
  date: string;
  rocket: string;
  outcome: 'Success' | 'Historic Triumph' | 'Active Operation';
  summary: string;
  significance: string;
  keyMetric: {
    label: string;
    value: string;
  };
  image: string;
  linkSlug: string;
  linkType: 'satellites' | 'rockets';
}

export interface MilestoneItem {
  id: string;
  year: string;
  dateStr?: string;
  title: string;
  category: 'Launch Vehicles' | 'Deep Space' | 'Satellites' | 'Aviation' | 'Future Roadmap';
  agency: 'ISRO' | 'HAL' | 'DRDO' | 'IAF' | 'Joint';
  summary: string;
  highlight: string;
  stats?: {
    label: string;
    value: string;
  };
}
