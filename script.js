const button = document.querySelector("button");
const square = document.querySelector("#square");
const inputText = document.querySelector("input[type=text]");
const inputRange = document.querySelector("input[type=range]");
const e_btn = document.querySelector("#e_btn");
const span = document.querySelector("#range-span");

const handlerClick = () => {
  square.style = `background:${inputText.value}`;
};

const handlerInput = (event) => {
  const circle = document.querySelector("#circle");

  span.textContent = event.target.value;
  circle.style = `width:${event.target.value}%;height:${event.target.value}%`;
};

span.textContent = inputRange.value;
button.addEventListener("click", handlerClick);
inputRange.addEventListener("input", handlerInput);

e_btn.style = "display:none";
