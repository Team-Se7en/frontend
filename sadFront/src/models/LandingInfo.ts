import { ProfessorCardViewShortInfo, StudentCardViewShortInfo } from "./CardInfo";

export interface LandingInfo {
    student_count: number;
    professor_count: number;
    accepted_applications_count: number;
    growth: [Date, number][];
    top_professors: TopProfessorModel[];
    top_students: TopStudentModel[];
    top_universities: LandingUniversityModel[];
    student_view_positions: StudentCardViewShortInfo[];
    professor_view_positions: ProfessorCardViewShortInfo[];
    random_universities: LandingUniversityModel[];
}

export interface LandingUniversityModel {
    id: number;
    icon: string;
    rank: 1 | 2 | 3;
    name: string;
}

export interface TopStudentModel {
    id: number;
    first_name: string;
    last_name: string;
    accepted_request_count: number;
    rank: 1 | 2 | 3;
}

export interface TopProfessorModel {
    id: number;
    first_name: string;
    last_name: string;
    accepted_request_count: number;
    rank: 1 | 2 | 3;
}