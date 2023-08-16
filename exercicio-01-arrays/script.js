const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

const tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    
    for (let i = 0; i < tasks.length; i++) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            ${tasks[i]}
            <button onclick="removeTask(${i})">Remover</button>
        `;
        taskList.appendChild(taskItem);
    }
}

function addTask(task) {
    tasks.push(task);
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const task = taskInput.value.trim();
    if (task !== '') {
        addTask(task);
        taskInput.value = '';
    }
});

renderTasks();
