// Referencia

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

//Escuchador 

addButton.addEventListener('click', createTask);

function createTask () {
    if((taskInput.value))

    console.log(taskInput.value);

    const taskItem = document.createElement('div');
    taskItem.classList.add('task');

    const taskText = document.createElement ('p');
    taskText.innerText = taskInput.value;

    const taskIcons = document.createElement ('div');
    taskIcons.classList.add('task-icons');

    const iconCheck = document.createElement('i');
    iconCheck.classList.add('bi', 'bi-check', 'icon-complete');

    const iconDelete = document.createElement('i');
    iconDelete.classList.add('bi', 'bi-trash', 'icon-delete')

    taskIcons.append(iconCheck, iconDelete);
    taskItem.append(taskText, taskIcons);
    taskList.append(taskItem);

    iconCheck.addEventListener('click', (e) => {
      e.target.parentNode.parentNode.classList.toggle('complete');
    });

    taskInput.addEventListener ('keydown', (e) =>
    {
      if (e.key === 'Enter') {
        createTask();
      }
    })}
