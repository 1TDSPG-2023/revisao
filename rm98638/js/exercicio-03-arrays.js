const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("ul");
let tasks = [];
let backupTasks = [];
// cspell:ignore duracao, importancia, descricao, concluida
/*
Tasks Keys:
    autor
    departamento 
    descricao
    duracao (opcional)
    importancia 
    tarefa 
    concluida
    valor (opcional)
*/
const createTask = (taskData) => {
    const task = document.createElement("li");
    const taskString = `Autor: ${taskData.autor} - Tarefa: ${
        taskData.tarefa
    } - Importância Nível ${taskData.importancia} - Departamento: ${
        taskData.departamento
    } - Descrição: ${taskData.descricao}
    ${taskData.duracao ? ` - ${taskData.duracao} Dias` : ""}${
        taskData.valor ? ` - ${taskData.valor}R$` : ""
    }`;
    task.textContent = taskString;
    task.addEventListener("dblclick", () => {
        task.classList.toggle("concluida");
    });
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    const removeEvent = () => {
        tasks = tasks.filter((task) => task !== taskData);
        populateList(tasks);
    };
    removeButton.addEventListener("click", removeEvent);
    task.appendChild(removeButton);
    return task;
};
const populateList = (tasks) => {
    list.innerHTML = "";
    tasks.forEach((task) => {
        list.appendChild(createTask(task));
    });
};
form.addEventListener("submit", (e) => {
    const formData = new FormData(e.target);
    const task = {};
    for (const key of formData.keys()) {
        let keyName = key.replace("txt", "").toLowerCase();
        task[keyName] = formData.get(key);
    }
    task["concluida"] = false;
    tasks.push(task);
    populateList(tasks);
    e.preventDefault();
});
