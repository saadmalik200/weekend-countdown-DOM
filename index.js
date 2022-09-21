const form = document.querySelector("form");
const button = document.querySelector("button");
const input = document.querySelector("input");
const para = document.querySelector(".para");

let date = new Date();
const dayCount = date.getDay();

let weekdays = new Array(7);

weekdays[0] = "Monday";
weekdays[1] = "Tuesday";
weekdays[2] = "Wednesday";
weekdays[3] = "Thursday";
weekdays[4] = "Friday";
weekdays[5] = "Saturday";
weekdays[6] = "Sunday";

let day = weekdays[date.getDay() - 1];

let daysToWeekend = 5 - dayCount;
console.log(daysToWeekend);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(`You clicked`);
  console.log(input.value);
  para.textContent = `Hello ${input.value}. Today is ${day}. Only ${daysToWeekend} days left until weekend!`;
});
