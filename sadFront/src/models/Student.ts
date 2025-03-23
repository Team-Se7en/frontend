import { University } from "./University";
import { User } from "./User";

export interface Student {
    id: number;
    user: User;
    university: University;
    first_name: string;
    last_name: string;
    major: string;
    
}