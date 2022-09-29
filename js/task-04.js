/*Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.*/



const decrementBtn = document.querySelector('.button" [data-action="decrement"]');
console.log("decrementBtn", decrementBtn);
const incrementBtn = document.querySelector('"button" [data-action="increment"]');
console.log("incrementBtn", increment);

decrementBtn.addEventListener('click', () => {
    console.log("Click");
})
   incrementBtn.addEventListener('click', () => {
    console.log("Click"); 
})