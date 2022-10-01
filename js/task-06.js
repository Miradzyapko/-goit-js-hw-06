/*Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали у вихідні файли завдання.*/

      
const inputRef = document.querySelector('#validation-input');
const validLength = inputRef.getAttribute('data-length')
inputRef.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
     
    const validEl = event.currentTarget.value.length === Number(validLength);
    if(validEl) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    }
    else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
}
    }


