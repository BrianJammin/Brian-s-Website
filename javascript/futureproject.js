const addTaskBtn = document.getElementById('add-task');
const love = document.getElementById('love');
const taskList = document.querySelector('#task-list');

// Here we will initialize your task list from localStorage OR we will use an empty array if no tasks are stored.
let storedTasks = JSON.parse(localStorage.getItem('taskList') || '[]');

// This function will update the task list in the DOM
function updateTaskList() {
  taskList.innerHTML = ''; // Clear the current task list
  storedTasks.forEach((task, taskId) => addTask(task, taskId));
}

// Here we will add a task and update localStorage
function addTask(task, taskId) {
  const taskItem = document.createElement('div');
//   const detailsBtn = document.getElementById('details');


  taskItem.classList.add('form-check', 'd-flex', 'align-items-center', 'gap-3');
  taskItem.innerHTML = `
    <input class="task-check" type="checkbox" id="task-${taskId}">
    <label class="task-check-label" for="task-${taskId}">${task}</label>
    <button type="button" class="btn-close" aria-label="Close" data-task-id="${taskId}"></button>
    <label for="freeform">Project Details --></label>
    <textarea id="freeform" name="freeform" rows="3" placeholder="Enter text here..." cols="30">
    </textarea>
    <button type="submit" id="details ">Submit</button>
  `;
  taskList.appendChild(taskItem);
}

// This function to remove a task and update localStorage
function removeTask(taskId) {
  storedTasks.splice(taskId, 1); // Remove the task from the storedTasks array
  localStorage.setItem('taskList', JSON.stringify(storedTasks)); // Update localStorage
  updateTaskList(); // Update the task list in the DOM
}

// Initial rendering of the task list
updateTaskList();

addTaskBtn.addEventListener('click', () => {
  const task = love.value.trim();
  const taskWithImg = `<img class="me-3" src="https://picsum.photos/80/80?random=${storedTasks.length}"> <span>${task}</span>`;

  if (task !== '') {
    addTask(taskWithImg, storedTasks.length);
    love.value = '';

    // Lets add the new task to the storedTasks array and here we can update localStorage
    storedTasks.push(taskWithImg);
    localStorage.setItem('taskList', JSON.stringify(storedTasks));
  }
});

// This will handle completing a task and removing it from the list
taskList.addEventListener('click', (e) => {
  const target = e.target;
  if (target.matches('.task-check')) {
    // Handle completion as before
  } else if (target.matches('.btn-close')) {
    const taskId = target.getAttribute('data-task-id');
    removeTask(taskId);
  }
});
