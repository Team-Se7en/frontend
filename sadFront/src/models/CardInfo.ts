import { Professor, Status, University } from "@models";


export interface CardInfo {
    id: number;
    title: string;
    capacity: number;
    status: Status;
    start_date: Date;
    end_date: Date;
    tags: string[];
    fee: number;
    position_start_date: Date;
    position_end_date: Date;
    updated_at: Date;
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
    professor: Professor;
    description: string;
    capacity: number;
}