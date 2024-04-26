import { User } from "./User";

export interface Professor{
    id: number;
    university: string;
    department: string;
    birth_date: Date;
    user: User;
}