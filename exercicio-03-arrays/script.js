
const tasks = [];

function addTask(description, author, department, importance) {
  const task = {
    description: description,
    author: author,
    department: department,
    importance: importance,
    payment: null,
    duration: null,
  };
  tasks.push(task);
}

function renderTable() {
  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = '';
  tasks.forEach(task => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${task.description}</td>
      <td>${task.author}</td>
      <td>${task.department}</td>
      <td>${task.importance}</td>
      <td>${task.payment || '-'}</td>
      <td>${task.duration || '-'}</td>
      <td><button onclick="deleteTask('${task.description}')">Excluir</button></td>
    `;
    tableBody.appendChild(row);
  });
}

function deleteTask(description) {
  const index = tasks.findIndex(task => task.description === description);
  if (index !== -1) {
    tasks.splice(index, 1);
    renderTable();
  }
}

renderTable();
