import { Professor } from "./Professor";
import { Student } from "./Student";
import { University } from "./University";

export interface LandingInfo {
    student_count: number;
    professor_count: number;
    accepted_applications_count: number;
    growth: [Date, number][];
    top_professors: [Professor, number][];
    top_students: [Student, number][];
    top_universities: University[];
}

export interface TopUniversityModel {
    
}

export interface TopStudentModel {
    
}

export interface TopStudentModel {

}