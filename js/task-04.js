/*Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.*/



const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;
decrementBtn.addEventListener('click', onMouseEnter);
    

incrementBtn.addEventListener('click', onMouseLeave);
    
    function onMouseEnter() {
        counterValue -= 1;
        valueRef.textContent = counterValue;
    };
    function onMouseLeave() {
      counterValue += 1;
        valueRef.textContent = counterValue;  
    };
