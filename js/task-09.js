/*Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.*/
const colorBtnRef = document.querySelector(".change-color");
console.log(colorBtnRef);
const spanRef = document.querySelector(".color");
console.log(spanRef);
const changeColorBodyRef = document.querySelector("body");
colorBtnRef.addEventListener("click", changeBodyColor);
function changeBodyColor() {
  const currentColor = getRandomHexColor();
  spanRef.textContent = currentColor;
spanRef.style.backgroundColor = currentColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;


}
