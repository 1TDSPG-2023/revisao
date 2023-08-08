let tarefas = [];

const ul = document.createElement("ul");

const boxCursos = document.getElementById("box-tarefas");

boxCursos.appendChild(ul);

tarefas.forEach(tarefas=>{

    const li = document.createElement("li");
    li.id = Tarefa-`${tarefas.length}`;
    li.textContent = `${tarefas.nome}`;
    ul.appendChild(li);

});

function cadastrar(){ 

    const nomeTarefa = document.getElementById("idTarefa").value;
    const novaTarefa = {"nome":nomeTarefa};

    tarefas.push(novaTarefa);
    const li = document.createElement("li");
    li.id = tarefas-`${tarefas.length}`;
    li.textContent = `${nomeTarefa}`;
    ul.appendChild(li);
    li.setAttribute("class","tarefas");

}

