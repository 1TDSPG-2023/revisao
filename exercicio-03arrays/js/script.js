const taskList = [];

function addTask() {
    const description = document.getElementById("description").value;
    const author = document.getElementById("author").value;
    const department = document.getElementById("department").value;
    const importance = document.getElementById("importance").value;
    console.log(taskList);
    

    const task = {
        description,
        author,
        department,
        importance,
        pagaParte: false,
        duracaoParte: ""
    };

    taskList.push(task);
    renderTaskTable();
    
    // Limpa os campos após adicionar a tarefa
    document.getElementById("description").value = "";
    document.getElementById("author").value = "";
    document.getElementById("department").value = "";
    document.getElementById("importance").value = "Alta";
}

function removeTask(index) {
    taskList.splice(index, 1);
    renderTaskTable();
}

function togglePagaParte(index) {
    taskList[index].pagaParte = !taskList[index].pagaParte;
    renderTaskTable();
}

function toggleDuracaoParte(index) {
    taskList[index].duracaoParte = taskList[index].duracaoParte ? "" : "Curta";
    renderTaskTable();
}

function renderTaskTable() {
    const taskTable = document.getElementById("taskList");
    taskTable.innerHTML = "";

    taskList.forEach((task, i) => {
        const newRow = taskTable.insertRow();
        
        newRow.insertCell().textContent = task.description;
        newRow.insertCell().textContent = task.author;
        newRow.insertCell().textContent = task.department;
        newRow.insertCell().textContent = task.importance;
        newRow.insertCell().textContent = task.pagaParte ? "Sim" : "Não";
        newRow.insertCell().textContent = task.duracaoParte;
        
        const actionsCell = newRow.insertCell();
        actionsCell.innerHTML = `
            <button onclick="removeTask(${i})">Remover</button>
            <button onclick="togglePagaParte(${i})">Paga à Parte</button>
            <button onclick="toggleDuracaoParte(${i})">Duração à Parte</button>
        `;
    });
}
