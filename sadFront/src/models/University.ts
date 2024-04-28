import { Coordinates } from "./Coordinates";

export interface University {
    id: number;
    name: string;
    description: string;
    location: Coordinates;
    image: string;
    website_url: string;
    rank: number;
}