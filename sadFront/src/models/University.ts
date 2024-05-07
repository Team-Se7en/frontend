import { StudentCardViewFullInfo } from "./CardInfo";
export interface University {
    id: number;
    country: string;
    name: string;
    description: string;
    latitude: number;
    longitude: number;
    image: string;
    icon: string;
    website_url: string;
    rank: number;
    city: string;
    total_student_count: number;
    international_student_count: number;
    position_count:  number;
    recent_positions: StudentCardViewFullInfo[];
}