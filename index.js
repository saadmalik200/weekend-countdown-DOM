const form = document.querySelector("form");
const button = document.querySelector("button");
const input = document.querySelector("input");
const para = document.querySelector(".para");

let date = new Date();
const dayCount = date.getDay();

let weekdays = new Array(7);

weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";

let day = weekdays[date.getDay()];

let daysToWeekend = 5 - dayCount;
console.log(daysToWeekend);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(`You clicked`);
  console.log(input.value);
  para.textContent = `Hello ${input.value}. Today is ${day}. Only ${daysToWeekend} days left until weekend!`;
});
