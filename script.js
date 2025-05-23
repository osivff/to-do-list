const addButton = document.querySelector('button');
const taskBox = document.querySelector('.added-task');
const toAdd = document.querySelector('#to-add');
const container = document.querySelector('.container');

container.addEventListener('click', (event) => {
        const newBox = document.createElement('li');
        const newSpan = document.createElement('span');
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const boxBtn = document.createElement('div');

        deleteBtn.id = 'delete-button';
        editBtn.id = 'edit-button';
        newBox.className = 'list-box';
        newSpan.className = 'new-span';
        boxBtn.id = 'box-button'
    
    if(event.target.className === 'add-task-btn'){

        if(toAdd.value != ''){
            newSpan.textContent = `${toAdd.value}`;
            newBox.appendChild(newSpan);

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
        const taskItem = event.target.closest('.list-box');
        const taskText = taskItem.querySelector('.new-span');

        if(taskText){
            taskText.contentEditable = "true";
            taskText.focus();

            taskText.addEventListener('keydown', (event) => {
                if(event.key === 'Enter'){
                    taskText.contentEditable = "false";
                }
            })
        }
    }
});




