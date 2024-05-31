import { UserType } from "./UserType";

export enum Status {
    Open = "Open",
    Closed = "Closed",
    NotActive = "Not Active",
    SP = "SP",
    SR = "SR",
    SA = "SA",
    PP = "PP",
    PA = "PA",
    PR = "PR",
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

        case Status.PA: case Status.SP:
            return "Pending Student Response";



        default:
            return status.toString();
    }
}