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

const salaries = [1500, 2200, 1800, 2500, 1900, 2800, 2100, 3200, 2300, 2600];

const increasedSalaries = salaries.map(salary => {
    if (salary <= 2000) {
        return salary * 1.15;
    } else {
        return salary * 1.10;
    }
});

console.log('Salários com aumento:', increasedSalaries);

const highSalaries = increasedSalaries.filter(salary => salary > 2500);

console.log('Salários superiores a 2500:', highSalaries);

const totalSalary = highSalaries.reduce((total, salary) => total + salary, 0);

console.log('Total dos salários:', totalSalary);

