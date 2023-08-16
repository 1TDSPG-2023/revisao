const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const author = document.getElementById('author').value;
    const department = document.getElementById('department').value;
    const importance = document.getElementById('importance').value;

    const task = {
        description,
        author,
        department,
        importance,
    };

    displayTask(task);
    clearForm();
}

function displayTask(task) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${task.description}</td>
        <td>${task.author}</td>
        <td>${task.department}</td>
        <td>${task.importance}</td>
        <td class="actions">
            <button onclick="removeTask(this)">Excluir</button>
        </td>
    `;
    taskList.appendChild(row);
}

function clearForm() {
    document.getElementById('description').value = '';
    document.getElementById('author').value = '';
    document.getElementById('department').value = '';
    document.getElementById('importance').value = '';
}

function removeTask(button) {
    const row = button.closest('tr');
    taskList.removeChild(row);
}
