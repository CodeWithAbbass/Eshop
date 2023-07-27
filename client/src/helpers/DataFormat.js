const DateFormat = (timeStampWithoutTimeZone) => {
  let PlacedDate = timeStampWithoutTimeZone?.split("T");
  let TimeStamp = PlacedDate[1] ? PlacedDate[1].split(".") : "00:00:00";
  const Year = PlacedDate[0] ? PlacedDate[0] : "0000";
  const Time = TimeStamp[0] ? TimeStamp[0] : "00:00:00";
  return Year + ` at ` + Time;
};
export default DateFormat;
