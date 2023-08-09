let listaTarefas = [];
let listaImpressa = document.getElementById("lista");
const nmTarefa = document.getElementById("txtTarefa");
const botaoAdicionar = document.getElementById("btnAdicionar");
const formTarefas = document.getElementById("formTarefas");

botaoAdicionar.addEventListener("click",adicionarTarefa);

function imprimirTarefa() {
    var novaTarefa = document.createElement("li");
    novaTarefa.textContent = `${nmTarefa.value}`;
    listaImpressa.appendChild(novaTarefa);
}

function adicionarTarefa() {
    listaTarefas.push(nmTarefa.value);
    atualizarLista();
    nmTarefa.value = "";
    nmTarefa.focus();
}

function atualizarLista() {
    listaImpressa.innerHTML = "";
    listaTarefas.forEach((tarefa, i) => {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = `${tarefa}`;
        listaImpressa.appendChild(novaTarefa);

        let btnExcluir = document.createElement("button");
        btnExcluir.textContent = "X";
        btnExcluir.setAttribute("id", "btnExcluir");
        btnExcluir.addEventListener("click", function() {
            listaTarefas.splice(i, 1);
            atualizarLista();
        });
        novaTarefa.appendChild(btnExcluir);
    })
}