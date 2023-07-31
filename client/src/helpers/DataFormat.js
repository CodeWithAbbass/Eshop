const DateFormat = (timeStampWithTimeZone) => {
  // console.log(timeStampWithTimeZone);
  // let PlacedDate = timeStampWithTimeZone?.split("T");
  // let TimeStamp = PlacedDate[1] ? PlacedDate[1].split(".") : "00:00:00";
  // const Year = PlacedDate[0] ? PlacedDate[0] : "0000";
  // const Time = TimeStamp[0] ? TimeStamp[0] : "00:00:00";
  // return Year + ` at ` + Time;

  const inputDate = new Date(timeStampWithTimeZone);
  const formattedDate = inputDate.toLocaleString("en-US", {
    day: "2-digit",
    year: "numeric",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const Time = formattedDate.split(",");

  return Time[0] + ` at ` + Time[1];
};
export default DateFormat;
