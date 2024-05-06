import { Professor } from "./Professor";
import { Status } from "./Status";


export interface CardInfo {
    id: number;
    title: string;
    capacity: number;
    status: Status;
    created_at: Date;
    end_date: Date;
    tags: string[];
    fee: number;
    start_date: Date;
    position_start_date: Date;
    position_end_date: Date;
    updated_at: Date;
}

export interface ProfessorCardViewShortInfo extends CardInfo {
    university_name: string;
    request_count: number;
}

export interface ProfessorCardViewFullInfo extends CardInfo {
    description: string;
    request_count: number;
}

export interface StudentCardViewShortInfo extends CardInfo {
    professor: Professor;
    university_name: string;
    university_id: string;
}

export interface StudentCardViewFullInfo extends CardInfo {
    professor: Professor;
    description: string;
    capacity: number;
    university_name: string;
    university_id: string;
}