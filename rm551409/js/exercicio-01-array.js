const tarefas = [];

const ul = document.createElement("ul");
const boxTarefas = document.getElementById("tarefas");
boxTarefas.appendChild(ul);

function cadastrar(){ 
    
    const nomeTarefa = document.getElementById("idTarefa").value;
    const novaTarefa = {"Tarefa":nomeTarefa};

    tarefas.push(novaTarefa);
    const li = document.createElement("li");
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "x";
    btnExcluir.setAttribute("class","btnExcluir");
    li.id = `tarefas-${tarefas.length}`;
    li.textContent = `${nomeTarefa}`;
    ul.appendChild(li);
    li.setAttribute("class","tarefas");
    li.appendChild(btnExcluir);
    btnExcluir.addEventListener("click",(evt)=>{
    ul.removeChild(evt.target.parentNode);

    });
    
    console.log(tarefas);
}
