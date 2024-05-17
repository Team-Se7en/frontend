import { Notifications } from "../models/Notifications";
import { ConvDate } from "./DateConvertor";

export function GenerateNotifText(notif:Notifications){
    var text = "";
    if(!notif.student || !notif.position){
        return "Error: null data detected";
    }
    if(notif.notification_type == 1){ //Student Created Request
        text = notif.student.name + ", graduated student of " + notif.student.university_name + " requested to your recent program.";
    }
    else if (notif.notification_type == 2){ //Professor Accepted Request
        text = "Congrats " + notif.student.name + "!! " + notif.position.professor.user.first_name + notif.position.professor.user.last_name + " accepted your request to " + notif.position.title + ". Contact Prof " + notif.position.professor.user.last_name + " as soon as possible.";
    }
    else if (notif.notification_type == -2){ //Professor Rejected Request
        text = "Dear " + notif.student.name + ", your request to " + notif.position.title + " has been rejected. Do not be sad, you'll make your way through other related positions. Check them NOW!"
    }
    else if (notif.notification_type == 3){ //Student Accepted Request
        text = notif.student.name + ", graduated Student of " + notif.student.university_name + " who you had approved for your " + notif.position.title + " position, accepted to finalize the apply process. Be in touch with your future student NOW!";
    }
    else if (notif.notification_type == -3){ //Student Rejected Request
        text = notif.student.name + ", graduated Student of " + notif.student.university_name + " who you had approved for your " + notif.position.title + " position, rejected to finalize the apply process.";
    }
    else if (notif.notification_type == 4){ //New Tagged Post
        text = notif.position.professor.user.first_name + notif.position.professor.user.last_name + "opened a new position named \"" + notif.position.title + "\" at " + notif.position.university_name + ". You can apply your request before " + ConvDate(notif.position.position_end_date, "day and month");
    }
    return text;
}