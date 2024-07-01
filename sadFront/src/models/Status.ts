import { UserType } from "./UserType";

export enum Status {
    Open = "Open",
    Closed = "Closed",
    NotActive = "Not Active",
    SP = "Pending Student Response",
    SR = "Student Rejected",
    SA = "Student Accepted",
    PP = "Pending Professor Response",
    PA = "Professor Accepted",
    PR = "Professor Rejected",
}

export function isApplyDisabled(status: Status, userType?: UserType): boolean {
    switch (status) {
        case Status.Open:
            return false;
        case Status.Closed:
        case Status.NotActive:
        case Status.SR:
        case Status.SA:
        case Status.PR:
        default:
            return true;
        case Status.SP: case Status.PA:
            return userType != UserType.Student;
        case Status.PP:
            return userType != UserType.Professor;
    }
}

export function getStatusText(status: Status): string {
    switch (status) {
        case Status.Open:
            return "Apply";

        default:
            return status;
    }
}