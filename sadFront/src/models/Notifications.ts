import { StudentCardViewFullInfo } from "./CardInfo";
import { User } from "./User";

export interface NotificationsCount{
    count: number;
}

export interface InNotifStudent{
    enrollment_date: Date;
    gender: string;
    id: number;
    interest_tags: string[];
    major: string;
    name: string;
    nationality: string;
    profile_image: string;
    ssn: string;
    status: string;
    university: string;
    university_name: string;
    user: number;
}

export interface Notifications{
    id: number;
    bookmarked: boolean;
    notification_type: string;
    position: StudentCardViewFullInfo;
    read: boolean;
    student: InNotifStudent;
    timestamp: Date;
    user: User;
}