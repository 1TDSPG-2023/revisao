const tarefas = [];

const ul = document.createElement("ul");
const boxTarefas = document.getElementById("box-tarefas");
boxTarefas.appendChild(ul);

function adicionar(){ 

    const nomeTarefa = document.getElementById("idTarefa").value;
    const novaTarefa = {"nome":nomeTarefa};

    //Push tarefa
    tarefas.push(novaTarefa);
    const li = document.createElement("li");
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "x";
    btnExcluir.setAttribute("class","btnExcluir");
    li.id = tarefas-`${tarefas.length}`;
    li.textContent = `${nomeTarefa}`;
    ul.appendChild(li);
    li.appendChild(btnExcluir);
    li.setAttribute("class","tarefas");

    //Btn excluir
    btnExcluir.addEventListener("click",(evt)=>{
        ul.removeChild(evt.target.parentNode);
    });
    console.log(tarefas)
}


