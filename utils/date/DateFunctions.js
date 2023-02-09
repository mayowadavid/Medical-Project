const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
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
export const isWeekday = (date) => {
  const day = date.getDay();
  return day !== 0 && day !== 6;
};

export const getMonth = (dateString) => {
  const date = new Date(dateString);
  return months[date.getMonth()];
};
export const getWeekday = (dateString) => {
  const date = new Date(dateString);
  return weekdays[date.getDay()];
};
export const getTime = (dateString) => {
  const date = new Date(dateString);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime =
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    " " +
    ampm;
  return strTime;
};
export const getDate = (dateString) => {
  const date = new Date(dateString);
  return date.getDate();
};
export const getFullYear = (dateString) => {
  const date = new Date(dateString);
  return date.getFullYear();
};
