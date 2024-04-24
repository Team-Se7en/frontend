import { PositionDuration, Professor, Status, University } from "@models";


export interface CardInfo {
    id: number;
    title: string;
    //studentCapacity: number;
    status: Status;
    starts_at: Date;
    deadline: Date;
    tags: string[];
    fee: number;
    created_at: Date;
    updated_at: Date;
    duration: PositionDuration;
}

export interface ProfessorCardViewShortInfo extends CardInfo {
    universityName: string;
    requestingStudents: number;
}

export interface ProfessorCardViewFullInfo extends CardInfo {
    description: string;
    university: University;
    requestingStudents: number;
}

export interface StudentCardViewShortInfo extends CardInfo {
    professor: Professor;
}

export interface StudentCardViewFullInfo extends CardInfo {
    description: string;
    university: University; 
}