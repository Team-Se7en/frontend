import { Notifications } from "../models/Notifications";
import { ConvDate } from "./DateConvertor";

export function GenerateNotifText(notif:Notifications){
    if(!notif.position){
        return "Error: null position detected";
    }
    else if(notif.notification_type == 1 && notif.student){ //Student Created Request
        return notif.student.user.first_name + " " + notif.student.user.last_name + ", student of " + notif.student.university.name + " requested to your recent position.";
    }
    else if (notif.notification_type == 2 && notif.student){ //Professor Accepted Request
        return "Congrats " + notif.student.user.first_name + "!! " + notif.position.professor.user.first_name + " " + notif.position.professor.user.last_name + " accepted your request to " + notif.position.title + ". Contact Prof. " + notif.position.professor.user.last_name + " as soon as possible.";
    }
    else if (notif.notification_type == -2 && notif.student){ //Professor Rejected Request
        return "Dear " + notif.student.user.first_name + ", your request to " + notif.position.title + " has been rejected. Do not be sad, you'll make your way through other related positions. Check them NOW!"
    }
    else if (notif.notification_type == 3 && notif.student){ //Student Accepted Request
        return notif.student.user.first_name + " " + notif.student.user.last_name  + ", Student of " + notif.student.university.name + " who you had approved for your " + notif.position.title + " position, accepted to finalize the apply process. Be in touch with your future student NOW!";
    }
    else if (notif.notification_type == -3 && notif.student){ //Student Rejected Request
        return notif.student.user.first_name + " " + notif.student.user.last_name + ", Student of " + notif.student.university.name + " who you had approved for your " + notif.position.title + " position, rejected to finalize the apply process.";
    }
    else if (notif.notification_type == 4){ //New Tagged Post
        return notif.position.professor.user.first_name + " " + notif.position.professor.user.last_name + " opened a new position named \"" + notif.position.title + "\" at " + notif.position.professor.university.name + ". You can apply your request before " + ConvDate(notif.position.end_date, "day and month") + ".";
    }
    return "Error: null student detected";
}