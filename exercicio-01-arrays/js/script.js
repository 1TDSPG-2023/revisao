let listaTarefas = [];
let listaImpressa = document.getElementById("listaDeTarefas");
const inputDeTarefa = document.getElementById("inputTarefa");
const botaoAdicionar = document.getElementById("botaoAdicionarTarefa");


botaoAdicionar.addEventListener("click",adicionarTarefa);



function imprimirTarefa() {
    var novaTarefa = document.createElement("li");
    novaTarefa.textContent = `${inputDeTarefa.value}`;
    console.log(novaTarefa.textContent);
    listaImpressa.appendChild(novaTarefa);
}

function adicionarTarefa() {
    listaTarefas.push(inputDeTarefa.value);
    atualizarLista();
    inputDeTarefa.value = "";
    inputDeTarefa.focus();
    console.log(listaTarefas);
}

function atualizarLista() {
    listaImpressa.innerHTML = "";
    listaTarefas.forEach((tarefaAdicionada, index) => {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = `${tarefaAdicionada}`;
        listaImpressa.appendChild(novaTarefa);

        let botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.addEventListener("click", function() {
            listaTarefas.splice(index, 1);
            atualizarLista();
        });
        novaTarefa.appendChild(botaoExcluir);
    })
}