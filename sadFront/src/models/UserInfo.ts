import { Professor } from "./Professor";
import { Student } from "./Student";
import { UserType } from "./UserType";

export interface UserInfo {
    id: number;
    user_type: UserType;
    professor?: Professor;
    student?: Student;
    first_name: string;
    last_name: string;
    date_joined: Date;
    email: string;
}