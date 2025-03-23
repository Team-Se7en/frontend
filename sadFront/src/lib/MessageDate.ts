export function generateMessageDate (date: string, currentDate: Date) {
    const messageDateSplited = date.split('-');
    const messageYear = messageDateSplited[0];
    const messageMonth = messageDateSplited[1];
    const messageDay = messageDateSplited[2][0] + messageDateSplited[2][1];
    const messageTime = messageDateSplited[2][3] + messageDateSplited[2][4] + messageDateSplited[2][5] + messageDateSplited[2][6] + messageDateSplited[2][7];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

    if(currentDate.getFullYear().toString() == messageYear && currentDate.getDay() == Number(messageMonth) && currentDate.getDate().toString() == messageDay){
        return messageTime;
    }
    else if(currentDate.getFullYear().toString() == messageYear){
        return months[Number(messageMonth) - 1] + " " + messageDay;
    }
    return months[Number(messageMonth) - 1] + " " + messageYear;
}