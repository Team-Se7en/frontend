import { Notifications } from "../models/Notifications";

export function GenerateNotifText(notif:Notifications){
    var text = "";
    if(notif.notification_type == "Student Created Request"){
        text = "";
    }
    else if (notif.notification_type == "Professor Accepted Request"){

    }
    else if (notif.notification_type == "Professor Rejected Request"){

    }
    else if (notif.notification_type == "Student Accepted Request"){

    }
    else if (notif.notification_type == "Student Rejected Request"){
        
    }
    else if (notif.notification_type == "New Tagged Post"){
        
    }
}