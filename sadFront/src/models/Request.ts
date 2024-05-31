import { Status } from "./Status";
import { Student } from "./Student";

export interface RequestModel {
    position_id: number;
    cover_letter?: string;
}

export interface RequestingStudent {
    id: number;
    student: Student;
    status: Status;
    date_applied: Date;
    cover_letter: string;
    share_with_others: boolean;
}

export interface StudentRequest { 
    id: number;
}