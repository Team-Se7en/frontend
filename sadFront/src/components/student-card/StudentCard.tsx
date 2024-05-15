import { Student } from "../../models/Student";
import { StyledStudentCard } from "./StudentCard-styles";


export interface StudentCardProps {
    student: Student;
}

export function StudentCard(props: StudentCardProps) {
    return (
        <>
        <StyledStudentCard />
        </>
    )
}