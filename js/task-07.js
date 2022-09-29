/*Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.*/

const input = document.querySelector('#font-size-control');
console.log(input);
const spanRef = document.querySelector('#text');
spanRef.style.fontSize = '${input.value}px';
input.addEventListener('input', onInputChange);
function onInputChange(event) {
console.log(event.currentTarget.value);
    spanRef.style.fontSize = '${event.currentTarget.value}px';
    
}
