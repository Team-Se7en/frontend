import { University } from "./University";
import { User } from "./User";

export interface Professor{
    id: number;
    university: University;
    department: string;
    birth_date: Date;
    user: User;
}