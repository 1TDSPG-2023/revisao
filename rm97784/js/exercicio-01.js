let listaTarefas = [];
let listaImpressa = document.getElementById("listaDeTarefas");
const entradaDeTarefa = document.getElementById("inputTarefa");
const botaoAdicionar = document.getElementById("botaoAdicionarTarefa");
const formularioTarefas = document.getElementById("formularioTarefas");


formularioTarefas.addEventListener("submit", prevenirComportamentoPadrao);
botaoAdicionar.addEventListener("click",adicionarTarefa);

function prevenirComportamentoPadrao(evt) {
    evt.preventDefault();
}

function imprimirTarefa() {
    var novaTarefa = document.createElement("li");
    novaTarefa.textContent = `${entradaDeTarefa.value}`;
    console.log(novaTarefa.textContent);
    listaImpressa.appendChild(novaTarefa);
}

function adicionarTarefa() {
    if (entradaDeTarefa.value != "") {
        listaTarefas.push(entradaDeTarefa.value);
        atualizarLista();
        entradaDeTarefa.value = "";
        entradaDeTarefa.focus();
    } else {
        alert("Por favor, insira uma tarefa para ser adicionada")
    }
}

function atualizarLista() {
    listaImpressa.innerHTML = "";
    listaTarefas.forEach((tarefa, i) => {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = `${tarefa}`;
        listaImpressa.appendChild(novaTarefa);

        let botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.addEventListener("click", function() {
            listaTarefas.splice(i, 1);
            atualizarLista();
        });
        novaTarefa.appendChild(botaoExcluir);
    })
    console.log(listaTarefas);
}