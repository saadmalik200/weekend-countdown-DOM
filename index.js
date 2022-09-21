const form = document.querySelector("form");
const button = document.querySelector("button");
const input = document.querySelector("input");
const para = document.querySelector(".para");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(`You clicked`);
  console.log(input.value);
  para.textContent = `Hello ${input.value}. Today is Tuesday. Only 3 days left until weekend!`;
});
