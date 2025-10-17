export interface DeviceSystem {
    os?: string;
    cpu: string;
    ram: string;
    memory: string;
    memoryAvailable?: string;
    threads?: number | string;
    core?: number;
  }

export type DeviceProps = {
    id: number;
    deviceName: string;
    slug: string;
    system: DeviceSystem;
    price: number;
    imageUrl: string[];
    description: string;
    promotions: string[];
}

export interface HeadsetSystem {
    battery: string,
    caseBattery?: string,
    chargingPort: string,
    technologies: string[],
    utility: string[],
}

export type HeadsetProps = {
    id: number;
    name: string;
    slug: string;
    information: HeadsetSystem;
    description: string;
    imageUrl: string[];
    price: number;
    promotions: string[];
}