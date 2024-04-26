import { PositionDuration, Professor, Status, University } from "@models";


export interface CardInfo {
    id: number;
    title: string;
    capacity: number;
    status: Status;
    // starts_at: Date;
    // deadline: Date;
    tags: string[];
    fee: number;
    // created_at: Date;
    // updated_at: Date;
    // duration: PositionDuration;
    start_date: Date;
    end_date: Date;
    position_start_date: Date;
    position_end_date: Date;
}

export interface ProfessorCardViewShortInfo extends CardInfo {
    university_name: string;
    request_count: number;
}

export interface ProfessorCardViewFullInfo extends CardInfo {
    description: string;
    // university?: University;
    university: string;
    request_count: number;
}

export interface StudentCardViewShortInfo extends CardInfo {
    professor: Professor;
}

export interface StudentCardViewFullInfo extends CardInfo {
    description: string;
    university: University; 
}