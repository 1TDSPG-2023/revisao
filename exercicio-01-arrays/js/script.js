let listaTarefas = [];
const botaoAdicionar = document.getElementById("btn-adicionar");

function adicionarTarefa() {
    const nomeTarefa = document.getElementById("nome-tarefa");
    listaTarefas.push(nomeTarefa.value);

    const li = document.createElement("li");
    li.textContent = nomeTarefa.value;
    li.id = `tarefa-${listaTarefas.length}`;

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "x";
    botaoExcluir.id = `botao-${listaTarefas.length}`;

    const ul = document.getElementById("lista-tarefas");
    ul.appendChild(li);
    li.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click",(evt)=>{
        listaTarefas.forEach((tarefa, index)=>{
            if(tarefa === evt.target.parentNode.textContent.split("-")[0]){
                listaTarefas.splice(index,1);
                ul.removeChild(evt.target.parentNode);
            }
        })
        ul.removeChild(evt.target.parentNode);
    });
    
    nomeTarefa.focus()
}

botaoAdicionar.addEventListener("click", adicionarTarefa)

