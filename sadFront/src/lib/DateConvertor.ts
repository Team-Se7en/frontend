export function ConvDate (date: Date, type: string) {
    const dateSplited = date.toString().split("-");
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
    if (type == "just year") return dateSplited[0];
    if (type == "year and month")
      return months[Number(dateSplited[1]) - 1] + " " + dateSplited[0];
    if (type == "full")
      return (
        months[Number(dateSplited[1]) - 1] +
        " " +
        dateSplited[2] +
        ", " +
        dateSplited[0]
      )
    if (type=="week diff")
    return(Math.floor(
        (new Date()).valueOf() - date.valueOf()
      ) /
        (1000 * 3600 * 24 * 7))
    if (type == "day and month")
      return(dateSplited[2] + " " + months[Number(dateSplited[1]) - 1])
    }