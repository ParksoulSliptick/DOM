// Referencia

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');

//Escuchador 

addButton.addEventListener('click', () => {
    console.log(taskInput.value);
});

function createTask () {
    if((taskInput.value = true)){
    console.log(taskInput.value);
    taskInput.value = '';
    } else {
      alert('Epa ahi si le entendi');
    }
}

