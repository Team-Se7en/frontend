import { User } from "./User";

export interface Professor extends User{
    id: number;
    university: string;
    department: string;
    birth_date: Date;
}