export type DeviceProps = {
    id: number;
    deviceName: string;
    slug: string;
    os?: string;
    cpu: string;
    ram: string;
    memory: string;
    price: number;
    imageUrl: string[];
    memoryAvailable?: string;
    description: string;
    core?: number;
    threads?: number | string
}

export type HeadsetProps = {
    id: number;
    name: string;
    slug: string;
    battery: string,
    caseBattery?: string,
    chargingPort: string,
    technologies: string[],
    utility: string[],
    description: string;
    imageUrl: string[];
}