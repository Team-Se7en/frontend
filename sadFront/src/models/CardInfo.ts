import { PositionDuration, Professor, Status, University } from "@models";


export interface CardInfo {
    id: number;
    title: string;
    studentCapacity: number;
    status: Status;
    startDate: Date;
    endDate: Date;
    tags: string[];
    fee: number;
    positionStartDate: Date;
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
    universityName: string;
}

export interface StudentCardViewFullInfo extends CardInfo {
    description: string;
    university: University; 
}