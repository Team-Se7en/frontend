export interface LandingInfo {
    student_count: number;
    professor_count: number;
    accepted_applications_count: number;
    growth: [Date, number][];
    top_professor: number;
    top_student: number;
    top_universities: number;
}