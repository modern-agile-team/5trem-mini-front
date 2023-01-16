// import axios from "axios";

// const week = [
//   "0일요일",
//   "1월요일",
//   "2화요일",
//   "3수요일",
//   "4목요일",
//   "5금요일",
//   "6토요일",
// ];

// const toDay = new Date(2023, 4, 5);
// console.log(toDay.toLocaleString());
// console.log(week[toDay.getDay()]);

// let firstDate = new Date(toDay.getFullYear(), toDay.getMonth(), 1);
// console.log(firstDate.toLocaleString());

// let firstDateWeek = firstDate.getDay();
// console.log(week[firstDate.getDay()]);

// let lastDate = new Date(toDay.getFullYear(), toDay.getMonth() + 1, 0);
// console.log(lastDate.toLocaleString());
// console.log(lastDate.getDate());

// let lastDateWeek = lastDate.getDay();
// console.log(week[lastDate.getDay()]);

// let test = new Array(firstDateWeek).fill(0);
// for (let day = 1; day < lastDate.getDate() + 1; day++) {
//   test.push(day);
// }
// for (let i = 0; i < 6 - lastDateWeek; i++) {
//   test.push(0);
// }
// console.log(test);

// const calendarId = "ko.south_korea#holiday@group.v.calendar.google.com";
// const apiKey = "AIzaSyBNBBAVF7U6o7j_w-1mvNcHhbTER2x9yGY";
// const startDate = new Date("2023-12-01").toISOString();
// const endDate = new Date("2023-12-31").toISOString();

const bbb = "ccc";
const aaa = {
  value: 100,
  [bbb]: 100,
};
console.log(aaa);
`${dsad}`;

// axios({
//   method: "get",
//   url: `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&orderBy=startTime&singleEvents=true&timeMin=${startDate}&timeMax=${endDate}`,
// }).then(function (response) {
//   console.log("hi");
//   // console.log(response.data);
//   // console.log(response.status);
//   // console.log(response.statusText);
//   // console.log(response.headers);
//   // console.log(response.config);
// });
