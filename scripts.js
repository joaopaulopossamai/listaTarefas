const buttonNewTask = document.querySelector('#lista button');
const taskBox = document.querySelector('#todaLista');
const newTaskInput = document.querySelector('#lista input');

buttonNewTask.addEventListener('click', addTask);

function addTask(event) {
  event.preventDefault();

  if (newTaskInput.value.trim() === '') {
    alert('Por favor, insira algum caracter');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  const checkboxInput = document.createElement('input');
  checkboxInput.type = 'checkbox';
  checkboxInput.classList.add('task-checkbox');

  const taskItemText = document.createElement('span');
  taskItemText.innerText = newTaskInput.value;
  taskItemText.classList.add('task-text');

  const buttonTrash = document.createElement('button');
  buttonTrash.innerHTML = '<i class="fas fa-trash"></i>';
  buttonTrash.classList.add('task-button');

  taskItem.appendChild(checkboxInput);
  taskItem.appendChild(taskItemText);
  taskItem.appendChild(buttonTrash);
  taskBox.appendChild(taskItem);

  buttonTrash.addEventListener('click', deleteTask);
  checkboxInput.addEventListener('click', completeTask);

  newTaskInput.value = '';
}

function deleteTask(event) {
  const taskItem = event.target.parentElement.parentElement;
  const checkboxInput = taskItem.querySelector('input[type="checkbox"]');
  if (checkboxInput.checked) {
    taskItem.remove();
  } else {
    alert('Só pode excluir tarefas  concluídas.');
  }
}

function completeTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.classList.toggle('completed');
}
