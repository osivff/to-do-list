const addButton = document.querySelector('button');
const taskBox = document.querySelector('.added-task');
const toAdd = document.querySelector('#to-add');
const container = document.querySelector('.container');

container.addEventListener('click', (event) => {
        const newBox = document.createElement('li');
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const boxBtn = document.createElement('div');
        const editBox = document.createElement('input');

        deleteBtn.id = 'delete-button';
        editBtn.id = 'edit-button';
        newBox.className = 'list-box';
        boxBtn.id = 'box-button'
        editBox.className = 'edit-box';
    
    if(event.target.className === 'add-task-btn'){

        deleteBtn.innerHTML = 'Delete Task';
        editBtn.innerHTML = 'Edit task';

        if(toAdd.value != ''){
            newBox.textContent = `${toAdd.value}`;

            boxBtn.appendChild(deleteBtn);
            boxBtn.appendChild(editBtn);

            newBox.appendChild(boxBtn);
            taskBox.appendChild(newBox);
        }
        toAdd.value = '';
    }
    if(event.target.id === 'delete-button'){
        event.target.closest('.list-box').remove();
    } else if(event.target.id === 'edit-button'){
        event.target.closest('.list-box');
    }
});




