import { StudentCardViewFullInfo } from "./CardInfo";
import { Student } from "./Student";
import { User } from "./User";

export interface NotificationsCount{
    count: number;
}

export interface Notifications{
    id: number;
    bookmarked: boolean;
    notification_type: string;
    position: StudentCardViewFullInfo;
    read: boolean;
    student: Student;
    timestamp: Date;
    user: User;
}