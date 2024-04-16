import { Status } from "./Status";

export interface CardModel {
    professorId: string;
    title: string;
    description: string;
    status: Status;
    tags: string[];
}