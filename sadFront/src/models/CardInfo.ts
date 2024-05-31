import { Professor } from "./Professor";
import { RequestingStudent } from "./Request";
import { Status } from "./Status";
import { University } from "./University";

export interface CardInfo {
    id: number;
    title: string;
    capacity: number;
    status: Status;
    // created_at: Date;
    end_date: Date;
    tags: string[];
    fee: number;
    start_date: Date;
    position_start_date: Date;
    position_end_date: Date;
    // updated_at: Date;
}

export interface ProfessorCardViewShortInfo extends CardInfo {
    university_id: number;
    university_name: string;
    request_count: number;
    // professor: Professor;
}

export interface ProfessorCardViewFullInfo extends CardInfo {
    description: string;
    request_count: number;
    university: University;
    requests: RequestingStudent[];
}

export interface StudentCardViewShortInfo extends CardInfo {
    professor: Professor;
    university_name: string;
    university_id: string;
    remaining: number;
}

export interface StudentCardViewFullInfo extends CardInfo {
    professor: Professor;
    description: string;
    capacity: number;
    university_name: string;
    university_id: string;
    university: University;
    remaining: number;
}

export interface createPositionRequestModel {
    title: string;
    description: string;
    capacity: number;
    end_date: string;
    tags: string[];
    fee: number;
    start_date: string;
    position_start_date: string;
    position_end_date: string;
}