const input = document.querySelector('#favchap')
const button = document.querySelector('button[type="submit"]');
const list = document.querySelector('ul[class="list"]');

const cleanForm = ()=> {
    input.value = '';
    input.focus();
}

button.addEventListener('click', function() {
    const listItem = document.createElement('li');
    const deleteBtn = document.createElement('button');

    listItem.innerHTML = input.value;
    deleteBtn.textContent = '❌';
    deleteBtn.ariaLabel = `Remove ${listItem.value}`

    deleteBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);

    cleanForm();

}); 