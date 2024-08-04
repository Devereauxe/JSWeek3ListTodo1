const field = document.querySelector('.field');
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

btn.addEventListener('click', ()=> {
    const item = document.createElement('li');
    item.innerText = field.value;
    item.classList.add('toDoLi');
    container.appendChild(item);
    field.value = ' ';

    item.addEventListener('click', ()=> {
        item.classList.add('completed');
    })

    item.addEventListener('dblclick', ()=> {
        container.removeChild(item);
    })
})