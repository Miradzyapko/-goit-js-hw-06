const categories = document.querySelectorAll('.item');
console.log('Number of categories',  categories.length);

categories.forEach(item => {
    const category = item.querySelector('h2');
    console.log('Category' ,  category.textContent);
    const elements = item.querySelectorAll('li');
    console.log('Elements' , elements.length);
});
